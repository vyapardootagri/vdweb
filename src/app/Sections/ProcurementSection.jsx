"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaTags,
  FaFileContract,
  FaTruck,
} from "react-icons/fa";

export default function ProcurementSection() {
  const steps = [
    {
      title: "1. Requirement Gathering",
      description:
        "We start by understanding your spice needs — variety, quantity, grade, and timeline.",
      value: "Because precision from the start means perfection at the end.",
      icon: FaSearch,
    },
    {
      title: "2. Supplier Identification",
      description:
        "We reach out to trusted farmers, traders, and suppliers across India.",
      value: "So every grain carries the legacy of authentic origins.",
      icon: FaUsers,
    },
    {
      title: "3. Quality Verification",
      description:
        "Each batch undergoes visual checks and lab tests to meet AGMARK, FSSAI, and ISO standards.",
      value: "Because quality is not an act — it’s our habit.",
      icon: FaShieldAlt,
    },
    {
      title: "4. Price Negotiation",
      description:
        "We secure the best rates while safeguarding quality standards.",
      value: "Premium doesn’t have to mean overpriced.",
      icon: FaTags,
    },
    {
      title: "5. Secure Procurement",
      description:
        "We finalize with clear agreements ensuring timely delivery.",
      value: "Commitment you can count on, every single time.",
      icon: FaFileContract,
    },
    {
      title: "6. Logistics & Delivery",
      description:
        "We package with care and deliver so spices arrive fresh and intact.",
      value: "Freshness at your doorstep — without compromise.",
      icon: FaTruck,
    },
  ];

  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const colors = ["#FFD700", "#E6C200", "#B8860B", "#FFB84D"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    function createParticles() {
      particles = [];
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.2 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: Math.random() * 0.35 + 0.05,
          speedX: (Math.random() - 0.5) * 0.18,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > canvas.height) p.y = 0;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;

        if (mouse.current.x && mouse.current.y) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            p.x -= (dx / dist) * 0.6;
            p.y -= (dy / dist) * 0.6;
          }
        }
      }

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      className="relative py-20 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 10, 0, 0.85), rgba(60, 20, 10, 0.88)), url('/raw.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Procurement Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-transform hover:scale-105 backdrop-blur-lg border border-yellow-500/20"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ rotate: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-yellow-500/20 border border-yellow-500/30 shadow-inner">
                    <Icon size={26} className="text-yellow-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-300">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs italic text-yellow-400">
                  {step.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
