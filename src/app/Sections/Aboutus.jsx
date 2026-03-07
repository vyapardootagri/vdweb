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
        bgcolor: "#080705",
        color: "#fff",
        py: { xs: 8, md: 16 },
        mx: { xs: 1.5, md: 4 },
        my: 2,
        overflow: "hidden",
        // Layered border: outer dark + inner gold hairline for depth
        border: "1px solid rgba(212,175,55,0.25)",
        outline: "4px solid rgba(212,175,55,0.08)",
        outlineOffset: "6px",
        backgroundImage: `
          linear-gradient(160deg, rgba(8,7,5,0.92) 0%, rgba(12,10,6,0.97) 100%),
          url('/rawspice.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      {/* ── Decorative corner ornaments ── */}
      {["top left", "top right", "bottom left", "bottom right"].map((pos) => {
        const [v, h] = pos.split(" ");
        return (
          <Box
            key={pos}
            sx={{
              position: "absolute",
              [v]: 16,
              [h]: 16,
              width: 40,
              height: 40,
              borderTop: v === "top" ? "2px solid rgba(212,175,55,0.55)" : "none",
              borderBottom: v === "bottom" ? "2px solid rgba(212,175,55,0.55)" : "none",
              borderLeft: h === "left" ? "2px solid rgba(212,175,55,0.55)" : "none",
              borderRight: h === "right" ? "2px solid rgba(212,175,55,0.55)" : "none",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        );
      })}

      {/* ── Ambient warm glow ── */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: { xs: "70vw", md: "40vw" },
          height: { xs: "70vw", md: "40vw" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Ghost watermark text ── */}
      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: "2%", md: "5%" },
          right: "-2%",
          fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
          fontSize: { xs: "18vw", md: "11vw" },
          fontWeight: 900,
          color: "rgba(212,175,55,0.03)",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          zIndex: 0,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        SPICES
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* ── LEFT: Image + heritage badge ── */}
          <Box sx={{ width: { xs: "85%", sm: "65%", md: "40%" }, flexShrink: 0 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Photo frame with gold rule */}
              <Box sx={{ position: "relative" }}>
                {/* Top-left rule accent */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: -10,
                    width: 80,
                    height: 80,
                    borderTop: "2px solid #d4af37",
                    borderLeft: "2px solid #d4af37",
                    zIndex: 2,
                  }}
                />
                <Box
                  component="img"
                  src="/papa1.jpg"
                  alt="Mukesh Bhatia — Founding Director, Vyapar Doot"
                  sx={{
                    width: "100%",
                    height: { xs: "auto", sm: "430px", md: "480px" },
                    maxHeight: { xs: "420px", md: "none" },
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    filter: "contrast(1.05) brightness(0.88) sepia(0.12)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.15)",
                  }}
                />
                {/* Bottom-right rule accent */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    right: -10,
                    width: 80,
                    height: 80,
                    borderBottom: "2px solid #d4af37",
                    borderRight: "2px solid #d4af37",
                    zIndex: 2,
                  }}
                />

                {/* Floating heritage badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  style={{ position: "absolute", bottom: 20, left: -18 }}
                >
                  <Box
                    sx={{
                      bgcolor: "#d4af37",
                      color: "#080705",
                      px: 2,
                      py: 1.5,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        lineHeight: 1.3,
                      }}
                    >
                      30 Years of<br />Trusted Trade
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Box>

          {/* ── RIGHT: Content ── */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 1.5, md: 0 },
              pt: { md: 3 },
            }}
          >
            <Stack spacing={0} alignItems={{ xs: "center", md: "flex-start" }}>

              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    color: "#d4af37",
                    letterSpacing: { xs: 3, md: 5 },
                    fontWeight: 600,
                    fontSize: { xs: "0.6rem", md: "0.68rem" },
                    textTransform: "uppercase",
                    display: "block",
                    mb: 1.5,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Founding Director — Est. 1993
                </Typography>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.35 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                    fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.8rem" },
                    fontWeight: 700,
                    lineHeight: 1.0,
                    letterSpacing: "-0.01em",
                    mb: 2,
                  }}
                >
                  Mukesh<br />Bhatia
                </Typography>
              </motion.div>

              {/* Gold rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.55 }}
                style={{ transformOrigin: "left center", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3.5,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box sx={{ width: 50, height: "1.5px", bgcolor: "#d4af37" }} />
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#d4af37",
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ width: 20, height: "1.5px", bgcolor: "rgba(212,175,55,0.35)" }} />
                </Box>
              </motion.div>

              {/* Role descriptor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: { xs: "0.75rem", md: "0.8rem" },
                    letterSpacing: { xs: 2, md: 3 },
                    textTransform: "uppercase",
                    color: "rgba(212,175,55,0.7)",
                    mb: 2.5,
                    fontWeight: 500,
                  }}
                >
                  Canvassing Agent &amp; Market Broker · Spice Trade
                </Typography>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Box
                  sx={{
                    borderLeft: { md: "2px solid rgba(212,175,55,0.5)" },
                    borderTop: { xs: "2px solid rgba(212,175,55,0.5)", md: "none" },
                    pl: { md: 2.5 },
                    pt: { xs: 2, md: 0 },
                    mb: 3,
                    maxWidth: "500px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: { xs: "1.15rem", md: "1.45rem" },
                      fontStyle: "italic",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    "A fair rate, honestly quoted, is the foundation upon which
                    every enduring trade is built."
                  </Typography>
                </Box>
              </motion.div>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.85 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", md: "0.98rem" },
                    lineHeight: 1.85,
                    color: "rgba(255,255,255,0.62)",
                    fontWeight: 300,
                    maxWidth: "480px",
                    mb: 1.5,
                    letterSpacing: "0.01em",
                  }}
                >
                  For three decades, Mukesh Bhatia has been the decisive link between
                  spice buyers and sellers across domestic and global markets. As a
                  canvassing agent, he initiates trade — reading the market, quoting
                  competitive rates, and bridging the gap between growers and traders
                  with precision and absolute integrity.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.9rem", md: "0.98rem" },
                    lineHeight: 1.85,
                    color: "rgba(255,255,255,0.62)",
                    fontWeight: 300,
                    maxWidth: "480px",
                    mb: 4,
                    letterSpacing: "0.01em",
                  }}
                >
                  His name is synonymous with reliable rate intelligence, discretion,
                  and a network forged over 30 years of standing at the crossroads of
                  commerce — making Vyapar Doot not merely an agency, but a trusted
                  institution in the spice trade.
                </Typography>

                {/* Signature */}
                <Typography
                  sx={{
                    fontFamily: "'Pinyon Script', 'Cormorant Garamond', cursive",
                    fontSize: { xs: "2.2rem", md: "2.8rem" },
                    color: "#d4af37",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  M. Bhatia
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    letterSpacing: 3,
                    color: "rgba(212,175,55,0.45)",
                    textTransform: "uppercase",
                    mt: 0.5,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Founding Director, Vyapar Doot
                </Typography>
              </motion.div>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}