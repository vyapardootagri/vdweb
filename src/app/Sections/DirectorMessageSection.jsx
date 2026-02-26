"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Stack } from "@mui/material";

const founders = [
  {
    name: "Mayur Bhatia",
    role: "MANAGING DIRECTOR",
    image: "/mayur1.jpg",
    message: "Our vision is to redefine the spice trade with unmatched integrity, transparency, and global reach. We believe in building lasting partnerships that drive mutual success."
  },
  {
    name: "Tushar Bhatia",
    role: "MANAGING DIRECTOR",
    image: "/raw.jpg",
    message: "We are committed to delivering premium quality spices while ensuring fair trade practices and sustainability at every stage of the supply chain."
  },
];

export default function FoundersSection() {
  return (
    <Box 
      component="section" 
      sx={{ 
        bgcolor: "#FCF9F2", // Subtle parchment/cream background
        py: { xs: 8, md: 15 },
        px: { xs: 2, md: 4 },
        position: "relative"
      }}
    >
      {/* ROYAL OUTER BORDER */}
      <Box sx={{
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        border: "1px solid #D4AF37",
        pointerEvents: "none",
        zIndex: 0,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 4,
          left: 4,
          right: 4,
          bottom: 4,
          border: "2px double #D4AF37", // Traditional double border
        }
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={{ xs: 12, md: 24 }}>
          {founders.map((founder, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: "flex", 
                flexDirection: { 
                  xs: "column", 
                  md: index % 2 === 0 ? "row" : "row-reverse" 
                },
                alignItems: "center",
              }}
            >
              {/* IMAGE WRAPPER with Royal Frame */}
              <Box sx={{ 
                width: { xs: "100%", md: "45%" },
                position: "relative",
                p: 1,
                bgcolor: "#D4AF37", // Gold frame effect
                boxShadow: "10px 10px 30px rgba(0,0,0,0.2)"
              }}>
                <Box sx={{ 
                  position: "relative", 
                  aspectRatio: { xs: "1/1.2", md: "4/5" }, 
                  overflow: "hidden",
                }}>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </Box>
              </Box>

              {/* CONTENT CARD */}
              <Box sx={{ 
                width: { xs: "90%", md: "52%" },
                bgcolor: "white",
                p: { xs: 4, md: 8 },
                mt: { xs: -6, md: 0 },
                ml: { md: index % 2 === 0 ? -6 : 0 },
                mr: { md: index % 2 === 1 ? -6 : 0 },
                zIndex: 2,
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                border: "1px solid #eee",
                position: "relative",
                // Subtle decorative corner
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 15,
                    left: 15,
                    width: 30,
                    height: 30,
                    borderTop: "2px solid #D4AF37",
                    borderLeft: "2px solid #D4AF37",
                }
              }}>
                <Typography
                  sx={{
                    color: "#D4AF37",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: 4,
                    mb: 1,
                    textAlign: "uppercase"
                  }}
                >
                  {founder.role}
                </Typography>
                
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Playfair Display', serif", // Ensure this font is loaded
                    fontWeight: 600,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    color: "#1a1a1a",
                    mb: 3,
                  }}
                >
                  {founder.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#444",
                    fontSize: "1.15rem",
                    lineHeight: 1.9,
                    fontStyle: "italic",
                    fontFamily: "serif",
                    mb: 4,
                    position: "relative"
                  }}
                >
                  {founder.message}
                </Typography>

                {/* Royal Divider */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ width: 40, height: "1px", bgcolor: "#D4AF37" }} />
                  <Typography sx={{ 
                    fontSize: "0.7rem", 
                    fontWeight: 800, 
                    color: "#999", 
                    letterSpacing: 2 
                  }}>
                    ESTABLISHED TRADITION
                  </Typography>
                  <Box sx={{ width: 40, height: "1px", bgcolor: "#D4AF37" }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}