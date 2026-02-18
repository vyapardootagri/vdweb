"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";

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
    <Box
      component="section"
      sx={{
        bgcolor: "#ffffff",
        py: { xs: 6, md: 15 }, // Tighter padding on mobile
        px: { xs: 2, md: 0 }  // Side breathing room for mobile
      }}
    >
      <Container maxWidth="lg">
        {/* --- HEADER --- */}
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              color: "#D4AF37",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: 3,
              mb: 1
            }}
          >
            LEADERSHIP
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Times New Roman', serif",
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              color: "#111",
              fontWeight: 400,
              lineHeight: 1.2
            }}
          >
            Director's Message
          </Typography>
          <Box sx={{
            width: 40,
            height: 2,
            bgcolor: "#D4AF37",
            mt: 2,
            mx: { xs: "auto", md: 0 }
          }} />
        </Box>

        {founders.map((founder, index) => (
          <Box
            key={index}
            sx={{
              mb: { xs: 8, md: 12 },
              pb: { xs: 6, md: 10 },
              borderBottom: index === 0 ? "1px solid #f0f0f0" : "none"
            }}
          >
            <Grid
              container
              spacing={{ xs: 3, md: 8 }}
              alignItems="center"
              // Keeps the image on top for both, but allows desktop to split
              flexDirection="row"
            >

              {/* IMAGE: Constrained and centered on mobile */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{
                  width: { xs: "160px", md: "220px" },
                  mx: { xs: "auto", md: 0 },
                  position: "relative"
                }}>
                  <Box sx={{
                    aspectRatio: "3/4",
                    position: "relative",
                    overflow: "hidden",
                    filter: "grayscale(100%) contrast(1.05)",
                    borderRadius: "2px", // Sharp but modern
                    border: "1px solid #eee"
                  }}>
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </Box>
                </Box>
              </Grid>

              {/* TEXT: Balanced for thumb-scrolling */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      color: "#111",
                      mb: 0.5
                    }}
                  >
                    {founder.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#D4AF37",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      letterSpacing: 2,
                      mb: 3
                    }}
                  >
                    {founder.role}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#444",
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      lineHeight: 1.7,
                      fontWeight: 300,
                      fontStyle: "italic",
                      px: { xs: 1, md: 0 } // Extra padding for mobile reading
                    }}
                  >
                    "{founder.message}"
                  </Typography>

                  {/* Executive Stamp */}
                  <Box sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" }
                  }}>
                    <Divider sx={{ width: "30px", bgcolor: "#D4AF37", height: "1px", mb: 1.5, border: "none" }} />
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: "#bbb",
                        letterSpacing: 1.5,
                        textTransform: "uppercase"
                      }}
                    >
                      Bhatia Group Attestation
                    </Typography>
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}