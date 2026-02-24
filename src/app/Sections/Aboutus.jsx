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
        // Adjusted padding for mobile vs desktop
        py: { xs: 6, md: 15 }, 
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* 1. BACKGROUND TEXT - Simplified for mobile to prevent horizontal overflow */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: { xs: "5%", md: "10%" },
            left: "5%",
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: "18vw", md: "10vw" },
            fontWeight: 900,
            color: "rgba(212, 175, 55, 0.04)",
            textTransform: "uppercase",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          Visionary
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 4, md: 8 },
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 2. THE PORTRAIT - Centered and scaled for mobile */}
          <Box sx={{ width: { xs: "100%", sm: "80%", md: "40%" } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  // Added a subtle gold frame that works better on small screens
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    right: "-10px",
                    bottom: "-10px",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                  alt="Mukesh Bhatia"
                  sx={{
                    width: "100%",
                    height: { xs: "350px", sm: "450px", md: "550px" },
                    objectFit: "cover",
                    display: "block",
                    filter: "contrast(1.1) brightness(0.9)",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* 3. CONTENT AREA */}
          <Box 
            sx={{ 
              width: { xs: "100%", md: "55%" }, 
              textAlign: { xs: "center", md: "left" },
              mt: { md: 10 } 
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }} alignItems={{ xs: "center", md: "flex-start" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="overline"
                  sx={{ 
                    color: "#d4af37", 
                    letterSpacing: { xs: 4, md: 6 }, 
                    fontWeight: 700,
                    fontSize: { xs: "0.7rem", md: "0.8rem" }
                  }}
                >
                  FOUNDING DIRECTOR — EST. 1993
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.5rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    mt: 1,
                  }}
                >
                  Mukesh Bhatia
                </Typography>
              </motion.div>

              <Divider 
                sx={{ 
                  borderColor: "#d4af37", 
                  width: "60px", 
                  borderBottomWidth: 2,
                  mx: { xs: "auto", md: 0 } 
                }} 
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    fontStyle: "italic",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.9)",
                    mb: 3,
                    maxWidth: "500px"
                  }}
                >
                  "Integrity is the only ingredient that cannot be substituted."
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 300,
                    maxWidth: "480px"
                  }}
                >
                  For over three decades, Mukesh Bhatia has anchored Vyapar Doot with a philosophy of radical transparency. His vision transformed a local agency into a global benchmark for the spice trade.
                </Typography>

                {/* Mobile Signature */}
                <Box sx={{ mt: 4 }}>
                   <Typography
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      color: "#d4af37",
                      lineHeight: 1
                    }}
                  >
                    M. Bhatia
                  </Typography>
                </Box>
              </motion.div>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}