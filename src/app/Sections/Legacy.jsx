"use client";
import React from "react";
import {
  Box, Typography, Stack, Grid, Container, Divider, Paper, Avatar
} from "@mui/material";

// Heritage & Professional Icons
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HistoryIcon from '@mui/icons-material/History';
import GavelIcon from '@mui/icons-material/Gavel';
import DiamondIcon from '@mui/icons-material/Diamond';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function HeritageLegacyLayout() {
  const business = {
    name: "Vyapar Doot",
    subName: "Spice Exim",
    tagline: "only one, no alternate",
    established: "1993",
    location: "Seth Bhamashah Mandi, Kota, Rajasthan",
    commodities: [
      "Coriander Seeds", "Fenugreek Seeds", "Cumin", "Fennel", "Nigella",
      "Carom Seeds", "Mustard Seeds", "Melon Seeds", "Turmeric", "Dill", "Kirana"
    ],
    awards: [
      { year: "2010", title: "Bhamashah Award", issuer: "Rajasthan State Govt." },
      { year: "2016", title: "Vyapar Kesri", issuer: "Media Excellence Council" },
      { year: "National", title: "FISS Federation", issuer: "National Spice Body" }
    ],
    leadership: [
      { role: "Founder & Chairman", focus: "Institutional Vision & Ethics" },
      { role: "Managing Director", focus: "Global Strategy & Market Data" }
    ]
  };

  return (
    <Box sx={{
      bgcolor: "#F4F1EA",
      minHeight: "100vh",
      color: "#2C2C2C",
      py: { xs: 6, md: 10 },
      backgroundImage: "radial-gradient(#dcd7cc 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    }}>
      <Container maxWidth="lg">

        {/* --- HEADER: THE OFFICIAL MASTHEAD --- */}
        <Box sx={{ textAlign: "center", mb: 10, pb: 6, borderBottom: "3px double #8B7355" }}>
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
            <DiamondIcon sx={{ fontSize: 15, color: "#8B7355" }} />
            <Typography variant="overline" sx={{ letterSpacing: 8, fontWeight: 700, color: "#8B7355" }}>
              INSTITUTIONAL ARCHIVE • ESTD {business.established}
            </Typography>
            <DiamondIcon sx={{ fontSize: 15, color: "#8B7355" }} />
          </Stack>

          <Typography variant="h1" sx={{
            fontFamily: "serif", fontSize: { xs: "3rem", md: "5.5rem" }, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.02em", mb: 1, lineHeight: 1
          }}>
            {business.name}
          </Typography>

          <Typography variant="h4" sx={{
            fontFamily: "serif", fontStyle: "italic", color: "#5A5A5A", letterSpacing: 12, mb: 4
          }}>
            {business.subName}
          </Typography>

          <Box sx={{ display: "inline-block", px: 6, py: 1, border: "1px solid #8B7355", borderRadius: "50px" }}>
            <Typography variant="body2" sx={{ letterSpacing: 4, fontWeight: 700, color: "#8B7355" }}>
              {business.tagline.toUpperCase()}
            </Typography>
          </Box>
        </Box>

        {/* --- MAIN CONTENT GRID --- */}
        <Grid container spacing={10}>

          {/* COLUMN 1: THE EXTENDED NARRATIVE */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={8}>
              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                  <HistoryIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>The Foundation Record</Typography>
                </Stack>

                <Typography variant="body1" sx={{
                  fontSize: "1.1rem", lineHeight: 2.2, fontFamily: "serif", textAlign: "justify",
                  color: "#3A3A3A", mb: 4,
                  "&:first-letter": {
                    float: "left", fontSize: "5rem", lineHeight: "4rem", paddingRight: "15px",
                    fontWeight: 800, color: "#8B7355"
                  }
                }}>
                  The legacy of <strong>Vyapar Doot Spice Exim</strong> is deeply connected to the trade history of the <strong>Seth Bhamashah Mandi</strong> in Kota. Since our establishment in 1993,
                   we have functioned as a central pillar in the regional spice market.
                    Over the last four decades, our firm has developed from a local brokerage into a 
                    trusted institutional partner for national industries. Our growth is built on a very
                     simple rule: we never compromise on the quality of the seed.
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 2.2, fontFamily: "serif", textAlign: "justify", color: "#3A3A3A" }}>
                  We operate at the very heart of Rajasthan’s agricultural belt. 
                  This direct access allows us to witness the entire life cycle of the crop. 
                  We act as a professional filter for our clients; our experts personally inspect the
                   moisture, color, and aroma of every batch. By maintaining this physical oversight,
                    we ensure that the legacy of Indian spices is preserved in every shipment we facilitate.
                </Typography>
              </Box>

              {/* NEW SECTION: COMMODITY LEDGER */}
              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                  <AssignmentTurnedInIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>Commodity Index</Typography>
                </Stack>
                <Grid container spacing={2}>
                  {business.commodities.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{
                        py: 1.5,
                        px: 2,
                        borderBottom: "1px solid #DCD7CC",
                        display: 'flex',
                        alignItems: 'center',
                        transition: "0.3s",
                        "&:hover": { bgcolor: "rgba(139, 115, 85, 0.05)" }
                      }}>
                        <DiamondIcon sx={{ fontSize: 10, color: "#8B7355", mr: 2 }} />
                        <Typography variant="body1" sx={{ fontWeight: 700, fontFamily: "serif", letterSpacing: 0.5 }}>
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* EXECUTIVE LEADERSHIP SECTION */}
              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                  <BadgeIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>Leadership Registry</Typography>
                </Stack>
                <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 2.2, fontFamily: "serif", textAlign: "justify", color: "#3A3A3A", mb: 4 }}>
                  Our leadership team combines forty years of traditional wisdom with modern market strategy. The firm is guided by a commitment to ethical trade and the belief that a brokerage must provide more than just goods—it must provide clarity. Under this stewardship, Vyapar Doot has transformed from a heritage house into a data-driven authority.
                </Typography>
                <Grid container spacing={3}>
                  {business.leadership.map((lead, i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Paper elevation={0} sx={{ p: 3, border: "1px solid #DCD7CC", bgcolor: "rgba(255,255,255,0.4)", borderRadius: 0 }}>
                        <Typography variant="subtitle2" sx={{ color: "#8B7355", fontWeight: 800, letterSpacing: 1 }}>{lead.role.toUpperCase()}</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>{lead.focus}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>

          {/* COLUMN 2: REGISTERS & LISTS */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={8}>
              <Paper elevation={0} sx={{ p: 5, bgcolor: "rgba(139, 115, 85, 0.04)", border: "1px solid #8B7355", borderRadius: 0 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <QueryStatsIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Analytical Intelligence</Typography>
                </Stack>
                <Typography variant="body1" sx={{ lineHeight: 2, color: "#444", mb: 3, textAlign: "justify", fontSize: "0.95rem" }}>
                  Our brokerage is driven by data, not just speculation. We possess a unique library of trade intelligence. We help our partners navigate price volatility by providing them with historical context and real-time market trends.
                </Typography>
                <Divider sx={{ mb: 3, borderColor: "#DCD7CC" }} />
                <Stack direction="row" spacing={2} alignItems="center">
                  <VerifiedUserIcon sx={{ color: "#8B7355", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "#666", fontWeight: 600, fontSize: '0.75rem' }}>
                    Official Verification of Market Authority — Ref: 1983-2026
                  </Typography>
                </Stack>
              </Paper>

              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                  <WorkspacePremiumIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>The Honors Register</Typography>
                </Stack>
                {business.awards.map((award, i) => (
                  <Box key={i} sx={{ mb: 3, pb: 2, borderBottom: "1px solid #DCD7CC" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{award.title}</Typography>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="caption" sx={{ color: "#8B7355", fontWeight: 700 }}>{award.issuer.toUpperCase()}</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>{award.year}</Typography>
                    </Stack>
                  </Box>
                ))}
              </Box>

              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                  <PublicIcon sx={{ color: "#8B7355" }} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>Registry & Logistics</Typography>
                </Stack>
                <Paper elevation={0} sx={{ p: 3, border: "1px solid #DCD7CC", bgcolor: "transparent", borderRadius: 0 }}>
                  <Stack spacing={2}>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: "#8B7355" }}>CENTRAL OFFICE</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.6 }}>
                      Seth Bhamashah Mandi, Kota, <br /> Rajasthan, 324007, India
                    </Typography>
                    <Divider />
                    <Typography variant="caption" sx={{ fontWeight: 800, color: "#8B7355" }}>COMMUNICATIONS</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>info@vyapardoot.com</Typography>
                  </Stack>
                </Paper>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* --- FOOTER: THE OFFICIAL SEAL --- */}
        <Box sx={{ mt: 15, textAlign: "center", pt: 8, borderTop: "1px solid #8B7355" }}>
          <Stack spacing={3} alignItems="center">
            <GavelIcon sx={{ fontSize: 50, color: "#8B7355", opacity: 0.4 }} />
            <Box>
              <Typography variant="overline" sx={{ letterSpacing: 8, display: "block", color: "#8B7355", fontWeight: 700 }}>
                KOTA • RAJASTHAN • INDIA
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic", color: "#999" }}>
                Official Business Record of Vyapar Doot Spice Exim © 1983 - 2026
              </Typography>
            </Box>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
}