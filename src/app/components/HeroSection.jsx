"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Stack, 
  Modal, 
  Fade, 
  Backdrop, 
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { motion, useScroll, useTransform } from "framer-motion";

const USPs = [
  { title: "Pan-India Procurement", desc: "Premium spices sourced directly from farm clusters.", icon: <PublicIcon color="warning" /> },
  { title: "Export Ready", desc: "Global compliance and seamless international logistics.", icon: <VerifiedIcon color="warning" /> },
  { title: "Quality Assurance", desc: "Lab-tested for purity, moisture, and consistency.", icon: <ScienceIcon color="warning" /> },
  { title: "Transparent Pricing", desc: "Direct market rates with zero hidden brokerage.", icon: <CurrencyExchangeIcon color="warning" /> },
  { title: "Dedicated Logistics", desc: "End-to-end support from packing to delivery.", icon: <LocalShippingIcon color="warning" /> },
];

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Optimized particle count for better performance
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Setting fill style once outside the loop is much faster
      ctx.fillStyle = "rgba(255, 193, 7, 0.35)";
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      {/* Background Image with Framer Motion Parallax */}
      <motion.div style={{ y: backgroundY, position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1400"
          alt="Premium Spices"
          fill
          style={{ objectFit: "cover", opacity: 0.55 }}
          priority
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </motion.div>

      {/* Spice Canvas - using will-change for GPU acceleration */}
      <canvas
        ref={canvasRef}
        style={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 1, 
          pointerEvents: "none",
          willChange: "transform" 
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 2, textAlign: "center", color: "white" }}>
        {/* FAST LOADING TEXT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Professional "Out" easing
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.8rem", md: "4.8rem" },
              mb: 3,
              lineHeight: 1.1,
              fontFamily: 'var(--font-playfair)',
              background: "linear-gradient(45deg, #FFD700 30%, #FFF 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            Your Complete Spice <br /> Brokerage Partner
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            Vyapar Doot Spice Exim bridges the gap between premium Indian spice harvests 
            and the global market with transparency, quality, and trust.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setShowPopup(true)}
              sx={{
                bgcolor: "#DAA520",
                color: "#000",
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#FFD700", transform: "translateY(-2px)" },
                transition: "all 0.2s ease"
              }}
            >
              Our Edge
            </Button>
            
            <Button
              component={Link}
              href="/register"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 5,
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1rem",
                backdropFilter: "blur(5px)",
                "&:hover": { borderColor: "#DAA520", color: "#DAA520", bgcolor: "rgba(218,165,32,0.05)" },
              }}
            >
              Register Now
            </Button>

            <Button
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/919999999999"
              target="_blank"
              variant="text"
              sx={{ 
                color: "#4caf50", 
                fontWeight: 700, 
                fontSize: "1rem",
                "&:hover": { bgcolor: "rgba(76, 175, 80, 0.1)" }
              }}
            >
              WhatsApp
            </Button>
          </Stack>
        </motion.div>
      </Container>

      {/* Modal Section (Optimized for smooth opening) */}
      <Modal
        open={showPopup}
        onClose={() => setShowPopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 400, sx: { backdropFilter: "blur(12px)" } }}
      >
        <Fade in={showPopup}>
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "92%", sm: "550px" },
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              border: "1px solid rgba(218, 165, 32, 0.2)",
              bgcolor: "#FFFBF5",
              outline: "none",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <Typography variant="h4" fontWeight="800" fontFamily='var(--font-playfair)' color="secondary">
                The Vyapar Doot Edge
              </Typography>
              <IconButton onClick={() => setShowPopup(false)} sx={{ color: "grey.500" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List disablePadding>
              {USPs.map((usp, index) => (
                <ListItem key={index} sx={{ px: 0, py: 2 }}>
                  <ListItemIcon sx={{ minWidth: "50px" }}>
                    <Box sx={{ bgcolor: "rgba(218, 165, 32, 0.1)", p: 1, borderRadius: 2, display: 'flex' }}>
                      {usp.icon}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="700" color="secondary">{usp.title}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{usp.desc}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
}