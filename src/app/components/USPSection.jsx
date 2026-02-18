"use client";

import React from "react";
import { Box, Container, Typography, Paper, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";

// Icons
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const usps = [
  { icon: <HandshakeIcon />, title: "Integrity & Trust", description: "Honesty is our currency. We prioritize long-term relationships over short-term gains in every deal." },
  { icon: <LocalOfferIcon />, title: "Competitive Pricing", description: "Direct-from-source pricing. We eliminate middlemen to give you the best market rates." },
  { icon: <TaskAltIcon />, title: "Quality Assurance", description: "Every batch is lab-tested. We ensure FSSAI and AGMARK compliance for all shipments." },
  { icon: <AccountBalanceIcon />, title: "Credit Facilitation", description: "Flexible financial arrangements to keep your supply chain moving smoothly." },
  { icon: <PublicIcon />, title: "Pan-India & Export", description: "End-to-end logistics handling from Indian farm clusters to your destination port." },
  { icon: <SupportAgentIcon />, title: "Seamless Support", description: "Dedicated trade assistants available 24/7 for real-time updates on shipments." },
];

export default function USPSection() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#FFFBF5" }}>
      <Container maxWidth="lg">
        
        {/* Header Section - Improved Typography and Spacing */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 10, textAlign: "center" }}>
          <Typography 
            variant="overline" 
            sx={{ 
                color: "primary.main", 
                fontWeight: 800, 
                letterSpacing: 4,
                fontSize: "0.85rem"
            }}
          >
            OUR COMMITMENT
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-playfair)',
              fontWeight: 900,
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              color: "#3d2b1f", // Deep Spice Brown
              lineHeight: 1.1,
              maxWidth: "800px"
            }}
          >
            The Gold Standard of <br />
            <Box component="span" sx={{ color: "primary.main" }}>Brokerage</Box>
          </Typography>
        </Stack>

        {/* NATIVE CSS GRID - This fixes the stacking issue */}
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",           // Mobile: 1 Column
              sm: "repeat(2, 1fr)",  // Tablet: 2 Columns
              md: "repeat(3, 1fr)"   // Desktop: 3 Columns
            },
          }}
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  width: "100%",
                  borderRadius: "32px", // Softer, more modern corners
                  border: "1px solid rgba(93, 64, 55, 0.08)",
                  bgcolor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 30px 60px rgba(93, 64, 55, 0.1)",
                    transform: "translateY(-12px)"
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    bgcolor: "rgba(218, 165, 32, 0.08)", 
                    color: "primary.main", 
                    mb: 4,
                    width: 64,
                    height: 64,
                    borderRadius: "16px" // Squircle shape for icons
                  }}
                >
                  {React.cloneElement(usp.icon, { sx: { fontSize: 32 } })}
                </Avatar>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 800,
                    mb: 2,
                    color: "#3d2b1f",
                    minHeight: "1.2em"
                  }}
                >
                  {usp.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    // Enforce text wrapping and alignment
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "5.4em" 
                  }}
                >
                  {usp.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}