"use client";
import { useEffect, useRef, useState } from "react";

export default function SpiceParticles() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const particles = [];

    const colors = [
      "rgba(245, 222, 179, 0.8)", // wheat
      "rgba(210, 180, 140, 0.8)", // tan
      "rgba(222, 184, 135, 0.8)", // burlywood
      "rgba(205, 133, 63, 0.8)",  // peru
      "rgba(255, 204, 102, 0.8)", // turmeric yellow
    ];

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedY = Math.random() * 0.5 + 0.2;
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(1.5px) drop-shadow(0 0 6px rgba(255, 200, 100, 0.6))";

      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      width={typeof window !== "undefined" ? window.innerWidth : 0}
      height={typeof window !== "undefined" ? window.innerHeight : 0}
    />
  );
}
