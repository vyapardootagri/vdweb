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
        bgcolor: "#0a0a0a",
        color: "#fff",
        py: { xs: 8, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. BACKGROUND TEXT */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: "18vw", md: "12vw" },
          fontWeight: 900,
          color: "rgba(212, 175, 55, 0.03)",
          textTransform: "uppercase",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        Visionary
      </Typography>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 2. THE IMAGE - Fixed Height, Full Width Container */}
          <Box sx={{ width: { xs: "100%", md: "45%" } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    right: "-10px",
                    bottom: "-10px",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/papa1.jpg"
                  alt="Mukesh Bhatia"
                  sx={{
                    width: "100%", // Fills the 45% container
                    height: "350px", // Strict height as requested
                    objectFit: "cover", // Prevents stretching
                    objectPosition: "center 20%", // Adjust this if the face is high in the photo
                    display: "block",
                    filter: "contrast(1.05) brightness(0.9)",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* 3. CONTENT AREA */}
          <Box 
            sx={{ 
              width: { xs: "100%", md: "55%" }, 
              textAlign: { xs: "center", md: "left" } 
            }}
          >
            <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="overline"
                  sx={{ 
                    color: "#d4af37", 
                    letterSpacing: 4, 
                    fontWeight: 700,
                    fontSize: "0.75rem" 
                  }}
                >
                  FOUNDING DIRECTOR — EST. 1993
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "2.8rem", md: "4rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    mt: 1,
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
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.9)",
                    mb: 2.5,
                    maxWidth: "500px"
                  }}
                >
                  "Integrity is the only ingredient that cannot be substituted."
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.5)",
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
                    fontSize: "2.2rem",
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