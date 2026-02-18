"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box, Typography, Stack, Grid, Button, IconButton, Paper,
  Fab, Menu, MenuItem, ListItemIcon, ListItemText, Zoom
} from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { keyframes } from "@emotion/react";

const tickerAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function MobileFriendlyDigitalCard() {
  const sectionRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const business = {
    name: "Vyapar Doot",
    subName: "Spice Exim",
    items: ["Dhania", "Methi", "Jeera", "Sounf", "Kalonji", "Ajwain", "Mustard", "Magaj", "Haldi", "Kirana Items"],
    contacts: [
      { name: "Mukesh Bhatia", numbers: ["+91 98290 38044", "+91 94141 89044", "+91 93142 41645"] },
      { name: "Mayur Bhatia", numbers: ["+91 99296 88542", "+91 97999 38044"] },
      { name: "Tushar Bhatia", numbers: ["+91 90016 86622", "+91 98295 88044"] }
    ],
    emails: ["vyapardootagri@gmail.com"],
    address: "D-255, Seth Bhamashah Mandi, Anantpura, Kota 324005 (Raj.)",
    cardPhotoUrl: "https://your-hosted-image-link.com/business-card.jpg"
  };

  const handleFabClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD\nVERSION:3.0\nORG:${business.name} ${business.subName}\nFN:${business.name} HQ\nTEL;TYPE=CELL:${business.contacts[1].numbers[0]}\nEMAIL:${business.emails[0]}\nADR;TYPE=WORK:;;D-255, Seth Bhamashah Mandi, Anantpura;Kota;Rajasthan;324005;India\nEND:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "VyaparDoot_Contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  const copy = (txt) => { if (typeof navigator !== "undefined") navigator.clipboard.writeText(txt); };

  return (
    <Box ref={sectionRef} id="contact-section" sx={{
      width: "100%", minHeight: "100vh", bgcolor: "#0a0a0a",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      p: { xs: 2, sm: 3, md: 4 }, overflowX: "hidden", position: "relative"
    }}>

      {/* FLOATING ACTION BUTTON */}
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>
        <Fab
          onClick={handleFabClick}
          sx={{
            position: 'fixed', bottom: 32, right: 32,
            bgcolor: '#DAA520', color: '#000',
            zIndex: 1000, '&:hover': { bgcolor: '#fff' }
          }}
        >
          <SpeedDialIcon />
        </Fab>
      </Zoom>

      {/* FAB MENU */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        PaperProps={{ sx: { bgcolor: '#1a1a1a', color: '#fff', borderRadius: '12px', minWidth: 200, border: '1px solid rgba(255,255,255,0.1)' } }}
      >
        <MenuItem onClick={() => { window.open(`tel:${business.contacts[1].numbers[0]}`); handleClose(); }}>
          <ListItemIcon><CallIcon sx={{ color: '#DAA520' }} /></ListItemIcon>
          <ListItemText primary="Call Mayur Bhatia" />
        </MenuItem>
        <MenuItem onClick={() => { window.open(`https://wa.me/919929688542`); handleClose(); }}>
          <ListItemIcon><WhatsAppIcon sx={{ color: '#25D366' }} /></ListItemIcon>
          <ListItemText primary="WhatsApp Trade" />
        </MenuItem>
        <MenuItem onClick={downloadVCard}>
          <ListItemIcon><ContactPageIcon sx={{ color: '#fff' }} /></ListItemIcon>
          <ListItemText primary="Save to Contacts" />
        </MenuItem>
      </Menu>

      <Paper elevation={24} sx={{
        width: "100%", maxWidth: "1000px", bgcolor: "#111",
        borderRadius: { xs: "24px", md: "32px" },
        overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)"
      }}>
        <Grid container>
          {/* INFO SIDE */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
              <Box>
                <Typography sx={{ color: "#DAA520", fontWeight: 900, letterSpacing: 3, fontSize: "0.6rem" }}>SINCE 1993</Typography>
                <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#fff", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>{business.name}</Typography>
                <Typography sx={{ color: "#DAA520", letterSpacing: 3, fontSize: "0.75rem", fontWeight: 600 }}>{business.subName.toUpperCase()}</Typography>
              </Box>
              <IconButton onClick={downloadVCard} sx={{ bgcolor: "rgba(218, 165, 32, 0.1)", color: "#DAA520", borderRadius: "12px" }}>
                <SaveAltIcon />
              </IconButton>
            </Stack>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", fontWeight: 900, letterSpacing: 2, mb: 2 }}>TRADE CONTACTS</Typography>
                <Stack spacing={2.5}>
                  {business.contacts.map((c) => (
                    <Box key={c.name}>
                      <Typography sx={{ color: "#DAA520", fontSize: "0.7rem", fontWeight: 800, mb: 0.5 }}>{c.name}</Typography>
                      {c.numbers.map(n => (
                        <Stack key={n} direction="row" spacing={1} alignItems="center">
                          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{n}</Typography>
                          <IconButton size="small" onClick={() => copy(n)} sx={{ color: "rgba(255,255,255,0.1)" }}>
                            <ContentCopyIcon sx={{ fontSize: 12 }} />
                          </IconButton>
                        </Stack>
                      ))}
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack spacing={3}>
                  <Box>
                    <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", fontWeight: 900, letterSpacing: 2, mb: 1 }}>KOTA OFFICE</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", lineHeight: 1.5 }}>{business.address}</Typography>
                  </Box>
                  <Button
                    fullWidth variant="contained" startIcon={<WhatsAppIcon />}
                    onClick={() => window.open(`https://wa.me/919929688542`)}
                    sx={{ bgcolor: "#25D366", color: "#fff", fontWeight: 900, borderRadius: "10px", py: 1.5 }}
                  > WHATSAPP </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* QR SIDE */}
          <Grid size={{ xs: 12, md: 5 }} sx={{
            bgcolor: "#DAA520", p: { xs: 4, md: 6 },
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", textAlign: "center"
          }}>
            <Box sx={{ p: 1.5, bgcolor: "#000", borderRadius: "16px", mb: 2 }}>
              <QRCodeSVG value={business.cardPhotoUrl} size={140} fgColor="#DAA520" bgColor="#000" />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 900, color: "#000", mb: 1 }}>Digital Identity</Typography>
            <Button
              variant="outlined" onClick={() => window.open(business.cardPhotoUrl)}
              sx={{ borderColor: "#000", color: "#000", borderWidth: 2, fontWeight: 900, borderRadius: "8px", fontSize: "0.75rem" }}
            > VIEW CARD PHOTO </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* TICKER */}
      <Box sx={{ width: "100%", mt: 4, py: 1, overflow: "hidden", opacity: 0.4 }}>
        <Box sx={{ display: "flex", whiteSpace: "nowrap", animation: `${tickerAnimation} 30s linear infinite` }}>
          {[...business.items, ...business.items].map((item, i) => (
            <Typography key={i} sx={{ px: 3, color: "#fff", fontWeight: 900, letterSpacing: 2, fontSize: "0.65rem" }}>
              {item.toUpperCase()} •
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}