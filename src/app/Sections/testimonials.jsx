"use client";
import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Procurement Manager, SpiceCo",
    feedback: "We’ve been working with them for years — exceptional quality and unmatched service."
  },
  {
    name: "Anita Mehta",
    role: "Head of Sourcing, Golden Kitchen",
    feedback: "Their dedication to quality and timely delivery has made them our trusted partner."
  },
  {
    name: "Mohammed Khan",
    role: "CEO, Aroma World",
    feedback: "Consistent quality and reliability every time — highly recommended."
  },
  {
    name: "Priya Verma",
    role: "Owner, Royal Spices",
    feedback: "A trusted name in the spice industry, their products never disappoint."
  }
];

const spiceColors = ["#d4af37", "#c04000", "#e2725b", "#ffdf91"];

class Particle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 1.8 + 0.4;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.speedX = (Math.random() - 0.5) * 0.1;
    this.color = spiceColors[Math.floor(Math.random() * spiceColors.length)];
    this.alpha = Math.random() * 0.4 + 0.2;
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > this.h) this.y = 0;
    if (this.y < 0) this.y = this.h;
    if (this.x > this.w) this.x = 0;
    if (this.x < 0) this.x = this.w;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = 5;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

export default function TestimonialsCarousel() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const init = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.scale(ratio, ratio);
      particles = Array.from({ length: 70 }, () => new Particle(rect.width, rect.height));
    };

    const render = () => {
      const rect = containerRef.current.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        backgroundImage: "url('/spice-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Particle Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: "relative", zIndex: 10, maxWidth: 1200, mx: "auto", px: 2 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              background: "linear-gradient(90deg, #ffefba, #d4af37, #ffefba)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" }
            }}
          >
            Client Testimonials
          </Typography>
          <Typography variant="h6" sx={{ color: "#f5deb3", fontStyle: "italic", opacity: 0.8, letterSpacing: 1 }}>
            "Voices of trust from our valued partners"
          </Typography>
          <Divider sx={{ width: 80, height: 4, bgcolor: "#d4af37", mx: "auto", mt: 3, borderRadius: 2 }} />
        </Box>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation
          pagination={{ clickable: true }}
          style={{
            padding: "20px 10px 80px 10px",
            "--swiper-navigation-color": "#d4af37",
            "--swiper-pagination-color": "#d4af37",
            "--swiper-pagination-bullet-inactive-color": "rgba(255,255,255,0.3)",
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    height: "100%",
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      borderColor: "rgba(212, 175, 55, 0.8)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: "center", py: 5, px: 4 }}>
                    {/* Decorative Quotation Mark */}
                    <Typography 
                      sx={{ 
                        fontSize: "4rem", 
                        lineHeight: 0, 
                        color: "#d4af37", 
                        opacity: 0.4, 
                        fontFamily: "serif",
                        mb: 2 
                      }}
                    >
                      “
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: "rgba(255,255,255,0.9)", 
                        lineHeight: 1.8, 
                        fontSize: "1.1rem",
                        mb: 4,
                        fontStyle: "italic"
                      }}
                    >
                      {t.feedback}
                    </Typography>

                    <Divider sx={{ width: 40, bgcolor: "rgba(212, 175, 55, 0.5)", mx: "auto", mb: 3 }} />

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: "#fff", 
                        fontWeight: 700, 
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: 0.5
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "#d4af37", 
                        fontWeight: 500, 
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        letterSpacing: 1.5,
                        mt: 0.5
                      }}
                    >
                      {t.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}