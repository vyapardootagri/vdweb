"use client";

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { 
  Box, Container, Typography, Paper, Stack, 
  Button, Modal, TextField, IconButton, 
  Grid, Fade, Select, MenuItem, FormControl, InputLabel, Divider, Alert, Snackbar, CircularProgress
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import PublicIcon from '@mui/icons-material/Public';
import EngineeringIcon from '@mui/icons-material/Engineering';

const allProducts = [
  { 
    name: "Cumin Seeds (Jeera)", 
    category: "Seeds",
    description: "High-essential oil content, sortex-cleaned for global export standards. Available in various purity levels.",
    origins: [
      { loc: "Unjha, Gujarat", quality: "Premium Grade", leadTime: "3-5 Days" },
      { loc: "Rajasthan Hub", quality: "Singapore Grade", leadTime: "4-6 Days" }
    ],
    grades: ["Singapore 99%", "Europe Quality 99.5%"],
    image: "/spices/cumin.jpg" 
  },
  { 
    name: "Turmeric (Haldi)", 
    category: "Rhizomes",
    description: "Double-polished fingers with high curcumin density sourced directly from primary auction centers.",
    origins: [
      { loc: "Nizamabad", quality: "Standard Export", leadTime: "5-7 Days" },
      { loc: "Sangli", quality: "High Curcumin (5.5%+)", leadTime: "6-8 Days" }
    ],
    grades: ["Double Polished", "Single Polished"],
    image: "/spices/turmeric.webp" 
  },
  { 
    name: "Black Pepper", 
    category: "Whole Spices",
    description: "Bold black pepper with high piperine content, available in various densities (550 G/L to 600 G/L).",
    origins: [
      { loc: "Idukki, Kerala", quality: "Malabar Garbled", leadTime: "7-10 Days" },
      { loc: "Coorg, Karnataka", quality: "Tellicherry Bold", leadTime: "7-10 Days" }
    ],
    grades: ["550 G/L", "600 G/L (Bold)"],
    image: "/spices/kalonji.jpg" 
  }
];

const modalStyle = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 800 }, bgcolor: 'white', p: { xs: 4, md: 8 }, outline: 'none',
  boxShadow: "0 24px 48px rgba(0,0,0,0.2)"
};

export default function TradeTerminalLayout() {
  const BRAND = "GLOBAL SPICE TRADERS";
  const PRIMARY = "#050505"; 
  const ACCENT = "#C5A059"; 

  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [status, setStatus] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);

  const handleTradeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setStatus({ open: true, message: "Request Logged", severity: "success" });
        setOpenModal(false);
    }, 1000);
  };

  return (
    <Box sx={{ bgcolor: "#F4F4F4", minHeight: "100vh", color: PRIMARY }}>
      
      {/* NAV */}
      <Box sx={{ borderBottom: "1px solid #E0E0E0", bgcolor: "white", py: 3, position: 'sticky', top: 0, zIndex: 1000 }}>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -1 }}>
              {BRAND} <span style={{ color: ACCENT }}>•</span>
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 800, color: ACCENT, letterSpacing: 1.5 }}>
                TERMINAL v2.0
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* HERO SECTION */}
      <Box sx={{ pt: 8, pb: 4, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '4rem' } }}>
            Bulk Commodity <br/> <span style={{ color: ACCENT }}>Procurement Matrix.</span>
          </Typography>
          <Typography sx={{ color: "#777", maxWidth: 600, mb: 4 }}>
            Institutional grade spice sourcing. Direct access to primary origins, 
            standardized quality protocols, and global logistical clearing.
          </Typography>
        </Container>
      </Box>

      {/* PRODUCT LIST */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={6}>
          {allProducts.map((p) => (
            <Paper 
              key={p.name} 
              elevation={0} 
              sx={{ 
                border: "1px solid #E0E0E0", 
                borderRadius: '4px', 
                overflow: 'hidden', 
                bgcolor: 'white',
                transition: '0.3s',
                '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }
              }}
            >
              <Grid container>
                {/* BIGGER IMAGE COLUMN (Changed from md=4 to md=5) */}
                <Grid item xs={12} md={5}>
                  <Box sx={{ 
                    height: { xs: 300, md: "100%" }, 
                    minHeight: { md: 450 }, // Height increased
                    position: 'relative', 
                    bgcolor: '#222',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Typography variant="caption" color="grey.700">Connecting to Origin...</Typography>
                    <Image 
                      src={p.image} 
                      alt={p.name} 
                      fill 
                      style={{ objectFit: "cover" }} 
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </Box>
                </Grid>

                {/* CONTENT COLUMN (Changed from md=8 to md=7) */}
                <Grid item xs={12} md={7} sx={{ p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 900 }}>{p.category}</Typography>
                            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>{p.name}</Typography>
                        </Box>
                        <Button 
                            variant="outlined" 
                            onClick={() => { setSelectedProduct(p); setOpenModal(true); }}
                            sx={{ borderColor: PRIMARY, color: PRIMARY, borderRadius: 0, px: 3, fontWeight: 700 }}
                        >
                            Enquire
                        </Button>
                    </Stack>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                        {p.description}
                    </Typography>

                    <Divider sx={{ mb: 4 }} />

                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 900, fontSize: '0.7rem', letterSpacing: 1 }}>
                        Sourcing Origins
                    </Typography>
                    
                    <Grid container spacing={2}>
                        {p.origins.map((o) => (
                        <Grid item xs={12} sm={6} key={o.loc}>
                            <Box sx={{ p: 2, borderLeft: `3px solid ${ACCENT}`, bgcolor: "#FBFBFB" }}>
                                <Typography variant="body2" sx={{ fontWeight: 800 }}>{o.loc}</Typography>
                                <Typography variant="caption" color="text.secondary">{o.quality}</Typography>
                            </Box>
                        </Grid>
                        ))}
                    </Grid>
                  </Box>

                  <Box sx={{ mt: 4 }}>
                    <Stack direction="row" spacing={2}>
                        {p.grades.map(g => (
                            <Box key={g} sx={{ px: 2, py: 0.5, bgcolor: '#eee', borderRadius: '20px' }}>
                                <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>{g}</Typography>
                            </Box>
                        ))}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* FOOTER */}
      <Box sx={{ py: 6, textAlign: 'center', bgcolor: 'white', borderTop: '1px solid #eee' }}>
        <Typography variant="caption" color="text.disabled">
            GLOBAL SPICE TRADERS • 2026 INDUSTRIAL SOURCING DIVISION
        </Typography>
      </Box>

      {/* MODAL */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Enquiry Protocol</Typography>
                <IconButton onClick={() => setOpenModal(false)}><CloseIcon /></IconButton>
            </Stack>
            <form onSubmit={handleTradeSubmit}>
              <Stack spacing={3}>
                <TextField fullWidth label="Company Name" required variant="filled" />
                <TextField fullWidth label="Destination Port" required variant="filled" />
                <TextField fullWidth multiline rows={3} label="Specific Requirements" variant="filled" />
                <Button fullWidth type="submit" variant="contained" sx={{ bgcolor: PRIMARY, py: 2, fontWeight: 800 }}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Initiate Sourcing"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Fade>
      </Modal>

      <Snackbar open={status.open} autoHideDuration={4000} onClose={() => setStatus({ ...status, open: false })}>
        <Alert severity={status.severity} variant="filled">{status.message}</Alert>
      </Snackbar>
    </Box>
  );
}