"use client";
import React, { useRef } from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import { motion, useInView } from "framer-motion";

export default function FounderSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#0a0a0a",
        color: "#fff",
        // Responsive padding: less on mobile, more on desktop
        py: { xs: 6, md: 15 },
        // Responsive margins
        mx: { xs: 1.5, md: 4 },
        my: 2,
        overflow: "hidden",
        border: "3px solid rgba(226, 181, 35, 0.85)",
        
        // Background Image Config
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url('/rawspice.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        // 'fixed' often breaks on mobile browsers; 'scroll' is safer for performance
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      {/* 1. BACKGROUND GHOST TEXT - Scaled down for mobile */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "10%" },
          left: "5%",
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: "22vw", md: "12vw" }, // Larger relative size for mobile impact
          fontWeight: 900,
          color: "rgba(212, 175, 55, 0.03)",
          textTransform: "uppercase",
          zIndex: 0,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Visionary
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* 2. THE IMAGE CONTAINER */}
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                component="img"
                src="/papa1.jpg"
                alt="Mukesh Bhatia"
                sx={{
                  width: "100%",
                  // Auto height on mobile to prevent stretching, fixed on desktop
                  height: { xs: "auto", sm: "400px", md: "350px" },
                  maxHeight: { xs: "450px", md: "none" },
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  borderRadius: { xs: "4px", md: "0px" }, // Slight roundness on mobile looks modern
                  filter: "contrast(1.1) brightness(0.9)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
                }}
              />
            </motion.div>
          </Box>

          {/* 3. CONTENT AREA */}
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 1, md: 0 } // Extra padding for text on small screens
            }}
          >
            <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
              <motion.div
                initial={{ opacity: 0, x: { xs: 0, md: 20 } }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#d4af37",
                    letterSpacing: { xs: 2, md: 4 },
                    fontWeight: 700,
                    fontSize: { xs: "0.65rem", md: "0.75rem" },
                    display: "block",
                    mb: 1
                  }}
                >
                  FOUNDING DIRECTOR — EST. 1993
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    // Significantly scaled for mobile readability
                    fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                  }}
                >
                  Mukesh Bhatia
                </Typography>
              </motion.div>

              <Divider sx={{ borderColor: "#d4af37", width: "60px", borderBottomWidth: 2 }} />

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "1rem", md: "1.3rem" },
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.9)",
                    mb: 2.5,
                    maxWidth: "500px"
                  }}
                >
                  "Integrity is the only ingredient that cannot be substituted."
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 300,
                    maxWidth: "480px",
                    mb: 4
                  }}
                >
                  For over three decades, Mukesh Bhatia has anchored Vyapar Doot with a philosophy of radical transparency. His vision transformed a local agency into a global benchmark for the spice trade.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: "#d4af37",
                  }}
                >
                  M. Bhatia
                </Typography>
              </motion.div>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}