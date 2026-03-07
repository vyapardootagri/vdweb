"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";

const founders = [
  {
    name: "Mayur Bhatia",
    role: "Managing Director",
    generation: "2nd Generation",
    image: "/mayur1.jpg",
    quote: "Trust is the only currency that never depreciates in trade.",
    message:
      "Carrying forward three decades of my father's legacy, I am committed to deepening the market networks and rate intelligence that Vyapar Doot has become known for. In a trade driven by relationships, our word is our bond — every rate we quote and every deal we initiate reflects that promise.",
  },
  {
    name: "Tushar Bhatia",
    role: "Managing Director",
    generation: "2nd Generation",
    image: "/raw.jpg",
    quote: "The finest spices reach the right hands only through the right broker.",
    message:
      "Our role as canvassing agents goes beyond transactions — we are the intelligence layer between buyer and seller, reading market movements, quoting with precision, and ensuring both sides find enduring value. That is the standard Vyapar Doot upholds in every trade we initiate.",
  },
];

function FounderCard({ founder, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-6%" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: isEven ? "row" : "row-reverse",
          },
          alignItems: { xs: "stretch", md: "center" },
          bgcolor: "#fff",
          border: "1px solid rgba(212,175,55,0.2)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
          overflow: "hidden",
        }}
      >
        {/* ── IMAGE ── */}
        <Box
          sx={{
            width: { xs: "100%", md: "42%" },
            flexShrink: 0,
            position: "relative",
            height: { xs: 280, sm: 360, md: "auto" },
            minHeight: { md: 480 },
          }}
        >
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              filter: "brightness(0.92) contrast(1.05)",
            }}
            priority
          />
          {/* Gold gradient overlay at bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30%",
              background: "linear-gradient(to top, rgba(212,175,55,0.15), transparent)",
              pointerEvents: "none",
            }}
          />
          {/* Generation badge */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              bgcolor: "rgba(8,7,5,0.72)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(212,175,55,0.5)",
              px: 1.5,
              py: 0.7,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.58rem",
                letterSpacing: 2.5,
                color: "#D4AF37",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              {founder.generation}
            </Typography>
          </Box>
        </Box>

        {/* ── CONTENT ── */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 4, sm: 5, md: 7 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            "&::before": {
              content: '""',
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 0,
              top: "15%",
              height: "70%",
              width: "1.5px",
              bgcolor: "rgba(212,175,55,0.2)",
            },
          }}
        >
          {/* Role */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.6rem",
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 700,
              mb: 1,
            }}
          >
            {founder.role} · Vyapar Doot
          </Typography>

          {/* Name */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 700,
              color: "#0e0c09",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              mb: 2,
            }}
          >
            {founder.name}
          </Typography>

          {/* Gold divider */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 40, height: "1.5px", bgcolor: "#D4AF37" }} />
            <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "#D4AF37", flexShrink: 0 }} />
            <Box sx={{ width: 16, height: "1.5px", bgcolor: "rgba(212,175,55,0.3)" }} />
          </Box>

          {/* Quote */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontStyle: "italic",
              lineHeight: 1.65,
              color: "#3a2e1e",
              borderLeft: "2px solid rgba(212,175,55,0.45)",
              pl: 2,
              mb: 2.5,
            }}
          >
            "{founder.quote}"
          </Typography>

          {/* Body text */}
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "0.95rem" },
              lineHeight: 1.9,
              color: "#6b5e4a",
              mb: 3.5,
            }}
          >
            {founder.message}
          </Typography>

          {/* Footer rule */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 28, height: "1px", bgcolor: "#D4AF37" }} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.58rem",
                fontWeight: 700,
                color: "#b8a06a",
                letterSpacing: 2.5,
                textTransform: "uppercase",
              }}
            >
              Canvassing Agents · Spice Trade
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function FoundersSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#FAF6ED",
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Outer border */}
      <Box
        sx={{
          position: "absolute",
          top: 14,
          left: 14,
          right: 14,
          bottom: 14,
          border: "1px solid rgba(212,175,55,0.25)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Ghost watermark */}
      <Typography
        sx={{
          position: "absolute",
          bottom: "0%",
          right: "-1%",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: { xs: "22vw", md: "12vw" },
          fontWeight: 900,
          color: "rgba(212,175,55,0.05)",
          textTransform: "uppercase",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        LEGACY
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.62rem",
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              The Second Generation
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.8rem" },
                fontWeight: 700,
                color: "#0e0c09",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                mb: 2.5,
              }}
            >
              Leadership &amp; Vision
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box sx={{ width: 50, height: "1.5px", bgcolor: "#D4AF37" }} />
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#D4AF37" }} />
              <Box sx={{ width: 50, height: "1.5px", bgcolor: "#D4AF37" }} />
            </Box>
          </Box>
        </motion.div>

        {/* Founder Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 5 } }}>
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
