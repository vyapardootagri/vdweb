"use client";

import React from "react";
import { Box, Typography, Stack, Divider, Container } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Premium Icons
import LanguageIcon from "@mui/icons-material/Language";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";

const countries = [
  { name: "Nepal", code: "NP" },
  { name: "Bangladesh", code: "BD" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Bhutan", code: "BT" },
  { name: "UAE", code: "AE" },
  { name: "Vietnam", code: "VN" }
];

export default function IndiaAndExportStats() {
  return (
    <Box component="section" sx={{ minHeight: "80vh", display: "flex", flexDirection: { xs: "column", lg: "row" }, bgcolor: "#fff" }}>
      
      {/* LEFT PANEL: Sticky Brand Anchor (Occupies 40% Desktop Width) */}
      <Box sx={{ 
        flex: { lg: "0 0 40%" }, 
        bgcolor: "#1a1a1a", 
        color: "#fff", 
        p: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: { lg: "sticky" },
        top: 0,
        height: { lg: "100vh" }
      }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: "#d4af37", fontWeight: 900, letterSpacing: 5 }}>
            NETWORK FOOTPRINT
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'var(--font-playfair)', fontWeight: 900, mt: 2, mb: 4, lineHeight: 1.1 }}>
            Global Trade, <br /> Local Expertise.
          </Typography>
          <Divider sx={{ borderColor: "rgba(212,175,55,0.3)", width: "80px", mb: 4, borderBottomWidth: 3 }} />
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: "400px", lineHeight: 1.8 }}>
            Vyapar Doot bridges the gap between India's finest spice clusters and the global marketplace through a robust, high-volume supply chain.
          </Typography>
        </motion.div>
      </Box>

      {/* RIGHT PANEL: High-Density Data (Occupies 60% Desktop Width) */}
      <Box sx={{ flex: 1, p: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        
        {/* Statistics Rows */}
        <Stack spacing={8}>
          <BigStat icon={<WarehouseIcon />} label="Annual Trading Volume" value={1000} suffix="+" unit="TONS" />
          <BigStat icon={<LocalShippingIcon />} label="Bulk Trading Partners" value={500} suffix="+" unit="TRADERS" />
          <BigStat icon={<LanguageIcon />} label="International Presence" value={25} suffix="+" unit="COUNTRIES" />
        </Stack>

        {/* Export Destinations - Modern Horizontal Flow */}
        <Box sx={{ mt: 10, pt: 8, borderTop: "1px solid #eee" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#999", letterSpacing: 2, mb: 4 }}>
            STRATEGIC EXPORT PARTNERS
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 4 } }}>
            {countries.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ bgcolor: "#f9f9f9", py: 1.5, px: 3, borderRadius: "50px", border: "1px solid #eee" }}>
                  <Box component="img" src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} sx={{ width: 24, borderRadius: "2px" }} />
                  <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "0.9rem" }}>{c.name}</Typography>
                </Stack>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

// Sub-component for clean, high-density stats
function BigStat({ icon, label, value, suffix, unit }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
      <Box sx={{ 
        width: 80, height: 80, borderRadius: "20px", bgcolor: "#fcf8ed", 
        display: "flex", alignItems: "center", justifyContent: "center", color: "#d4af37" 
      }}>
        {React.cloneElement(icon, { sx: { fontSize: 40 } })}
      </Box>
      
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#999", letterSpacing: 1 }}>
          {label}
        </Typography>
        <Stack direction="row" alignItems="baseline" spacing={1}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#1a1a1a", fontSize: { xs: "3rem", md: "4.5rem" }, lineHeight: 1 }}>
            <CountUp end={value} duration={2.5} enableScrollSpy scrollSpyOnce />
            <Box component="span" sx={{ color: "#d4af37" }}>{suffix}</Box>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 900, color: "#ccc" }}>{unit}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}