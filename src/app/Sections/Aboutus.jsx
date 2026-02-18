"use client";
import React, { useRef } from "react";
import { Box, Typography, Container, Grid, Stack, Divider } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FounderSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reduced parallax intensity for mobile to keep it smooth
  const yImage = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yCard = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        bgcolor: "#0a0a0a",
        overflow: "hidden",
        // Padding adjusted for mobile navigation
        pt: { xs: 10, md: 0 },
        pb: { xs: 8, md: 0 }
      }}
    >
      {/* 1. LARGE BACKGROUND NAME (Scales down for mobile) */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: { xs: "2%", md: "5%" },
          right: "2%",
          fontSize: { lg: "18rem", md: "12rem", sm: "8rem", xs: "4rem" },
          fontWeight: 900,
          color: "rgba(212, 175, 55, 0.03)",
          fontFamily: "'Playfair Display', serif",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        BHATIA
      </Typography>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={{ xs: 4, md: 0 }} alignItems="center">

          {/* 2. THE PORTRAIT (Stacks on top for mobile) */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div style={{ y: yImage }}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "85%", sm: "70%", md: "100%" },
                  maxWidth: "500px",
                  mx: "auto",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -15,
                    left: -15,
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    zIndex: -1,
                    // Hide decorative frame on very small screens if it feels cluttered
                    display: { xs: 'none', sm: 'block' }
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mukesh Bhatia"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: { xs: "none", md: "brightness(80%) contrast(1.1)" },
                    borderRadius: { xs: "8px", md: "0px" }, // Softer look for mobile
                    boxShadow: { xs: "20px 20px 40px rgba(0,0,0,0.6)", md: "40px 40px 80px rgba(0,0,0,0.8)" }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* 3. THE CONTENT CARD (Responsive spacing and sizing) */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 10 }, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div style={{ y: yCard }}>
              <Stack spacing={{ xs: 2, md: 4 }} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Box>
                  <Typography variant="overline" sx={{ color: "#d4af37", letterSpacing: { xs: 4, md: 8 }, fontWeight: 900, fontSize: '0.7rem' }}>
                    FOUNDER & VISIONARY
                  </Typography>
                  <Typography variant="h2" sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: { xs: "2.8rem", sm: "4rem", md: "6rem" },
                    lineHeight: 1,
                    color: "#fff",
                    mt: 1
                  }}>
                    Mukesh <br /> Bhatia
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "rgba(212, 175, 55, 0.4)", width: "60px", borderBottomWidth: 3 }} />

                <Typography variant="h5" sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
                  maxWidth: "550px",
                  lineHeight: 1.5
                }}>
                  "Integrity is the only ingredient that cannot be substituted."
                </Typography>

                <Typography sx={{
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  maxWidth: "500px"
                }}>
                  Founded in 1994, Mukesh Bhatia built Vyapar Doot on the pillars of resilience and radical honesty. What began as a local agency has evolved into a global benchmark for spice brokerage.
                </Typography>

                {/* Director's Mark (Signature) */}
                <Box sx={{ pt: { xs: 2, md: 4 } }}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    color: "#d4af37",
                    mb: 0
                  }}>
                    M. Bhatia
                  </Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.2)", letterSpacing: 2, display: 'block' }}>
                    FOUNDING DIRECTOR — EST. 1994
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}