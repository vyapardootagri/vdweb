"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Stack } from "@mui/material";

const founders = [
  {
    name: "Mayur Bhatia",
    role: "MANAGING DIRECTOR",
    image: "/raw.jpg",
    message: "Our vision is to redefine the spice trade with unmatched integrity, transparency, and global reach. We believe in building lasting partnerships that drive mutual success."
  },
  {
    name: "Tushar Bhatia",
    role: "DIRECTOR",
    image: "/raw.jpg",
    message: "We are committed to delivering premium quality spices while ensuring fair trade practices and sustainability at every stage of the supply chain."
  },
];

export default function FoundersSection() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 10, md: 20 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 15, md: 30 }}>
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
                position: "relative"
              }}
            >
              {/* IMAGE WRAPPER - Takes up 60% width */}
              <Box sx={{ 
                width: { xs: "100%", md: "60%" },
                position: "relative",
                zIndex: 1
              }}>
                <Box sx={{ 
                  position: "relative", 
                  aspectRatio: { xs: "1/1", md: "16/10" },
                  overflow: "hidden",
                  filter: "grayscale(100%)",
                  boxShadow: "20px 20px 60px rgba(0,0,0,0.05)"
                }}>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </Box>
              </Box>

              {/* CONTENT CARD - Overlaps the image slightly on desktop */}
              <Box sx={{ 
                width: { xs: "90%", md: "45%" },
                bgcolor: "white",
                p: { xs: 4, md: 8 },
                mt: { xs: -4, md: 0 }, // Mobile overlap
                ml: { md: index % 2 === 0 ? -10 : 0 }, // Desktop overlap
                mr: { md: index % 2 === 1 ? -10 : 0 }, // Desktop overlap
                zIndex: 2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                borderLeft: { md: index % 2 === 0 ? "4px solid #D4AF37" : "none" },
                borderRight: { md: index % 2 === 1 ? "4px solid #D4AF37" : "none" },
              }}>
                <Typography
                  sx={{
                    color: "#D4AF37",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: 3,
                    mb: 2
                  }}
                >
                  {founder.role}
                </Typography>
                
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "serif",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "#111",
                    mb: 3,
                    lineHeight: 1
                  }}
                >
                  {founder.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    mb: 4
                  }}
                >
                  "{founder.message}"
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ width: 30, height: 1, bgcolor: "#D4AF37" }} />
                  <Typography sx={{ fontSize: "0.65rem", fontWeight: 900, color: "#ccc", letterSpacing: 1 }}>
                    OFFICIAL STATEMENT
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}