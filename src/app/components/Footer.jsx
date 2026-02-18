"use client";

import React from "react";
import { Box, Typography, Grid, Stack, IconButton, Divider, Container } from "@mui/material";
import { Facebook, Instagram, LinkedIn, WhatsApp, KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Company", links: ["About", "Products", "Contact", "Register"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Trade", "Shipping Info"] }
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "#5D4037", color: "white", pt: 10, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 8 }}>

          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{
              fontWeight: 800, color: "#DAA520", mb: 1, letterSpacing: 1,
              fontFamily: "'Playfair Display', serif"
            }}>
              VYAPAR DOOT
            </Typography>
            <Typography variant="caption" sx={{ color: "#DAA520", letterSpacing: 2, fontWeight: 700, display: 'block', mb: 3 }}>
              SPICE EXIM
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 4, lineHeight: 1.8, maxWidth: 350 }}>
              Connecting the heart of Jaipur's spice markets to the global stage. Quality, tradition, and transparency in every shipment.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <SocialIcon icon={<WhatsApp />} href="https://whatsapp.com/channel/0029VbBqojG96H4MQclTBM3G" />
              <SocialIcon icon={<LinkedIn />} href="#" />
              <SocialIcon icon={<Instagram />} href="#" />
            </Stack>
          </Grid>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <Grid size={{ xs: 6, md: 3 }} key={section.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, color: "#DAA520" }}>
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Box
                    key={link}
                    component={Link}
                    href={link === "About" ? "/about" : `/${link.toLowerCase()}`}
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      transition: "0.3s",
                      "&:hover": { color: "#DAA520", transform: "translateX(5px)" }
                    }}
                  >
                    <KeyboardArrowRight sx={{ fontSize: 16, mr: 0.5, color: "#DAA520" }} />
                    {link}
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
            © {currentYear} Vyapar Doot Spice Exim. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
            Designed for Global Trade
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

const SocialIcon = ({ icon, href }) => (
  <IconButton
    href={href}
    target="_blank"
    sx={{
      bgcolor: "rgba(255,255,255,0.05)",
      color: "#DAA520",
      transition: "0.3s",
      "&:hover": { bgcolor: "#DAA520", color: "#5D4037", transform: "translateY(-3px)" }
    }}
  >
    {React.cloneElement(icon, { sx: { fontSize: 20 } })}
  </IconButton>
);