"use client";

import React from "react";
import { Box, Typography, Stack, Grid, Container, Chip, Divider } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Icons
import LanguageIcon from "@mui/icons-material/Language";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const countries = [
  { name: "Nepal", code: "NP" }, { name: "Bangladesh", code: "BD" },
  { name: "Sri Lanka", code: "LK" }, { name: "Bhutan", code: "BT" },
  { name: "UAE", code: "AE" }, { name: "Vietnam", code: "VN" }
];

export default function VyaparDootStats() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", color: "#1a1a1a", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        
        {/* HEADER SECTION: Center Aligned Narrative */}
        <Box sx={{ maxWidth: "800px", mb: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: "#d4af37", fontWeight: 900, letterSpacing: 4 }}>
              MARKET INFRASTRUCTURE
            </Typography>
            <Typography variant="h2" sx={{ 
              fontFamily: 'var(--font-playfair)', 
              fontWeight: 900, 
              mt: 2, mb: 3, 
              fontSize: { xs: "2.5rem", md: "4.2rem" },
              lineHeight: 1
            }}>
              Dominating the <span style={{ color: "#d4af37" }}>Domestic</span> Core.<br />
              Fueling <span style={{ textDecoration: "underline" }}>Global</span> Demand.
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", fontSize: "1.2rem", maxWidth: "600px" }}>
              A robust dual-channel supply chain bridging Indian spice clusters with high-growth international corridors.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          
          {/* LEFT COLUMN: Large Hero Stat (Domestic focus) */}
          <Grid item xs={12} md={7}>
            <StatBox 
              dark 
              icon={<HomeWorkIcon sx={{ fontSize: 50 }} />}
              label="The Indian Network"
              value={100} suffix="K+" unit="Metric Tons"
              desc="Annual domestic movement across 15+ major spice clusters. From procurement to processing, we manage the entire lifecycle."
            />
          </Grid>

          {/* RIGHT COLUMN: Two Stacked Stats */}
          <Grid item xs={12} md={5}>
            <Stack spacing={4} sx={{ height: "100%" }}>
              <StatBox 
                icon={<BusinessCenterIcon sx={{ fontSize: 40 }} />}
                label="B2B Synergy"
                value={1000} suffix="+" unit="Partners"
                desc="A verified network of wholesalers and retail bulk buyers."
              />
              <StatBox 
                icon={<LanguageIcon sx={{ fontSize: 40 }} />}
                label="Cross-Border Presence"
                value={4} suffix="+" unit="Regions"
                desc="Strategic logistics hubs neighbouring countries of india."
              />
            </Stack>
          </Grid>

          {/* BOTTOM ROW: Full Width Export Partners */}
          <Grid item xs={12}>
            <Box sx={{ 
              mt: 4, p: 4, 
              border: "1px solid #eee", 
              borderRadius: "24px",
              display: "flex", 
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4
            }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5 }}>Strategic Export Alliances</Typography>
                <Typography variant="body2" sx={{ color: "#999" }}>Our primary international trade corridors and partner nations.</Typography>
              </Box>
              
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center" }}>
                {countries.map((c) => (
                  <Chip 
                    key={c.name}
                    avatar={<Box component="img" src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} sx={{ borderRadius: "2px" }} />}
                    label={c.name}
                    variant="outlined"
                    sx={{ fontWeight: 700, px: 1, height: "40px", borderRadius: "10px", borderColor: "#eee" }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function StatBox({ icon, label, value, suffix, unit, desc, dark = false }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      style={{ height: "100%" }}
    >
      <Box sx={{ 
        p: { xs: 4, md: 6 }, 
        height: "100%", 
        bgcolor: dark ? "#1a1a1a" : "#f8f9fa", 
        color: dark ? "#fff" : "#1a1a1a",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <Box sx={{ color: "#d4af37", mb: 3 }}>{icon}</Box>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: 2, opacity: 0.7, textTransform: "uppercase", mb: 1 }}>
          {label}
        </Typography>
        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 2 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: "3rem", md: "4.5rem" }, lineHeight: 1 }}>
            <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce />
            <span style={{ color: "#d4af37" }}>{suffix}</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 800, opacity: 0.4 }}>{unit}</Typography>
        </Stack>
        <Divider sx={{ my: 3, borderColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }} />
        <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.6, maxWidth: "450px" }}>
          {desc}
        </Typography>
      </Box>
    </motion.div>
  );
}