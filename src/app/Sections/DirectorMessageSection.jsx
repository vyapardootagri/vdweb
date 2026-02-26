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
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 10, md: 20 }}>
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
              {/* IMAGE WRAPPER - Changed to 45% width for a sleeker portrait look */}
              <Box sx={{ 
                width: { xs: "100%", md: "45%" },
                position: "relative",
                zIndex: 1
              }}>
                <Box sx={{ 
                  position: "relative", 
                  // Standard Portrait Ratio (4:5 or 3:4)
                  aspectRatio: { xs: "1/1.2", md: "4/5" }, 
                  overflow: "hidden",
                  boxShadow: "20px 20px 60px rgba(0,0,0,0.05)"
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

              {/* CONTENT CARD - Adjusted width and overlap */}
              <Box sx={{ 
                width: { xs: "90%", md: "50%" },
                bgcolor: "white",
                p: { xs: 4, md: 8 },
                mt: { xs: -6, md: 0 }, // Significant overlap on mobile
                ml: { md: index % 2 === 0 ? -8 : 0 }, // Slide over portrait image
                mr: { md: index % 2 === 1 ? -8 : 0 },
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
                    lineHeight: 1.2
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
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}