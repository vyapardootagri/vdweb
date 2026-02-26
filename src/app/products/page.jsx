"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { 
  Box, Typography, Stack, Button, Drawer, TextField, 
  CircularProgress, IconButton, Container, Divider, Alert, Snackbar,
  Grid, ToggleButton, ToggleButtonGroup, useTheme, useMediaQuery, MenuItem, Fade
} from "@mui/material";

// Icons
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import HubIcon from '@mui/icons-material/Hub';
import AssignmentIcon from '@mui/icons-material/Assignment';

const products = [
  { 
    id: "ID: 1026-I", 
    anchor: "cumin",
    name: "Royal Cumin", 
    path: "cumin.jpg", 
    origins: ["Rajasthan Hub", "Unjha Cluster", "Gulf Port Stock", "Custom Request"],
    grades: ["Sortex 99.5% Purity", "Machine Cleaned", "Europe Quality (EU Standard)", "Ground Powder"],
    desc: "Sourced from the arid belts of Rajasthan, our cumin is prized for its high essential oil content and distinct earthy aroma."
  },
  { 
    id: "ID: 1026-II", 
    anchor: "turmeric",
    name: "Amber Turmeric", 
    path: "turmeric.webp", 
    origins: ["Nizamabad Hub", "Sangli Cluster", "Erode Export Zone", "Custom Request"],
    grades: ["Double Polished Fingers", "Single Polished", "High Curcumin Bulb", "Pure Turmeric Powder"],
    desc: "Golden-hued turmeric with certified curcumin levels, processed for vibrant color consistency and long shelf life."
  }
];

export default function SimpleHeritageAtelier() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ACCENT = "#B08D57";

  const [selected, setSelected] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '', user_email: '', user_mobile: '', company_name: '',
    tonnage: '', destination: '', custom_origin: '', custom_quality: ''
  });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const scrollToProduct = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      const offset = 120;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      product: selected.name,
      catalog_origin: formData.custom_origin, 
      catalog_grade: formData.custom_quality, 
      tonnage: formData.tonnage,
      unit: unit === 'metric' ? 'MT' : 'Lbs',
      currency: currency,
      custom_origin: formData.custom_origin,
      custom_quality: formData.custom_quality,
      destination: formData.destination,
      user_name: formData.user_name,
      company_name: formData.company_name,
      user_email: formData.user_email,
      user_mobile: formData.user_mobile
    };

    emailjs.send('service_24u1ybi', 'template_4l04gxf', templateParams, 'qQidVoE0H-xPwYEeg')
      .then(() => {
        setLoading(false); 
        setSuccess(true); 
        setSelected(null);
        setFormData({ user_name: '', user_email: '', user_mobile: '', company_name: '', tonnage: '', destination: '', custom_origin: '', custom_quality: '' });
      })
      .catch(() => { setLoading(false); alert("Error transmitting requisition."); });
  };

  return (
    <Box sx={{ bgcolor: "#FDFCF8", minHeight: "100vh", pb: 10 }}>
      
      {/* --- FLOATING NAVIGATION --- */}
      <Box sx={{ bgcolor: "rgba(26, 26, 26, 0.98)", backdropFilter: 'blur(10px)', py: 2, position: 'sticky', top: 0, zIndex: 1200 }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={3} sx={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }, alignItems: 'center' }}>
            <Typography sx={{ color: ACCENT, fontWeight: 900, fontSize: '0.7rem', letterSpacing: 2, whiteSpace: 'nowrap' }}>INDEX / 2026</Typography>
            {products.map((p) => (
              <Button 
                key={p.id} 
                onClick={() => scrollToProduct(p.anchor)}
                sx={{ 
                  color: '#FFF', fontSize: '0.75rem', opacity: 0.7, letterSpacing: 1, whiteSpace: 'nowrap',
                  '&:hover': { opacity: 1, color: ACCENT } 
                }}
              >
                {p.name}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- PREFERENCE HEADER --- */}
      <Box sx={{ borderBottom: "1px solid #EDE4D0", py: 4, bgcolor: '#FFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" sx={{ fontFamily: 'serif', fontSize: '1.5rem', mb: 1 }}>Inventory <b>Atelier</b></Typography>
              <Typography variant="caption" sx={{ color: '#888', letterSpacing: 1 }}>SELECT COMMODITY TO INITIALIZE TRADE MANIFEST</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <ToggleButtonGroup value={currency} exclusive onChange={(e, v) => v && setCurrency(v)} size="small" sx={{ border: '1px solid #EDE4D0' }}>
                  <ToggleButton value="INR" sx={{ border: 'none', px: 2 }}>₹ INR</ToggleButton>
                  <ToggleButton value="USD" sx={{ border: 'none', px: 2 }}>$ USD</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup value={unit} exclusive onChange={(e, v) => v && setUnit(v)} size="small" sx={{ border: '1px solid #EDE4D0' }}>
                  <ToggleButton value="metric" sx={{ border: 'none', px: 2 }}>MT</ToggleButton>
                  <ToggleButton value="imperial" sx={{ border: 'none', px: 2 }}>LBS</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- PRODUCT SHOWCASE --- */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Stack spacing={18}>
          {products.map((p, idx) => (
            <Box id={p.anchor} key={p.id} sx={{ display: 'flex', flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }, gap: { xs: 4, md: 10 }, alignItems: 'center' }}>
              
              {/* Image with Decorative Frame */}
              <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
                <Fade in timeout={1000}>
                  <Box sx={{ position: 'relative', height: { xs: 400, md: 550 }, zIndex: 2, overflow: 'hidden' }}>
                    <Image src={`/spices/${p.path}`} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  </Box>
                </Fade>
                <Box sx={{ 
                  position: 'absolute', top: 30, [idx % 2 === 0 ? 'right' : 'left']: -30, 
                  width: '100%', height: '100%', bgcolor: '#F4EEE0', zIndex: 1 
                }} />
              </Box>

              {/* Text Content */}
              <Box sx={{ flex: 1 }}>
                <Stack spacing={3}>
                  <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 900, letterSpacing: 5 }}>DIRECT ORIGIN</Typography>
                  <Typography variant="h2" sx={{ fontFamily: 'serif', fontSize: { xs: '2.8rem', md: '4rem' }, lineHeight: 1 }}>{p.name}</Typography>
                  <Typography variant="body1" sx={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 500 }}>{p.desc}</Typography>
                  
                  <Box sx={{ pt: 2 }}>
                    <Button 
                      onClick={() => {
                        setSelected(p);
                        setFormData(prev => ({ ...prev, custom_origin: p.origins[0], custom_quality: p.grades[0] }));
                      }}
                      endIcon={<EastIcon />}
                      sx={{ 
                        bgcolor: '#1A1A1A', color: '#FFF', borderRadius: 0, px: 5, py: 2.5,
                        '&:hover': { bgcolor: ACCENT, color: '#1A1A1A' },
                        transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      REQUEST QUOTATION
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* --- TRADE MANIFEST DRAWER --- */}
      <Drawer 
        anchor={isMobile ? "bottom" : "right"} 
        open={Boolean(selected)} 
        onClose={() => setSelected(null)} 
        PaperProps={{ sx: { width: { xs: '100%', md: 550 }, p: 0, bgcolor: '#FFF', borderLeft: `1px solid ${ACCENT}` } }}
      >
        {selected && (
          <Box component="form" onSubmit={sendEmail}>
            {/* Drawer Header */}
            <Box sx={{ bgcolor: '#1A1A1A', color: '#FFF', p: 4, position: 'relative' }}>
              <IconButton onClick={() => setSelected(null)} sx={{ position: 'absolute', right: 10, top: 10, color: '#FFF' }}><CloseIcon /></IconButton>
              <Typography variant="h5" sx={{ fontFamily: 'serif', color: ACCENT }}>Trade Manifest</Typography>
              <Typography variant="caption" sx={{ opacity: 0.6, letterSpacing: 2 }}>REQUISITION NO. {selected.id}</Typography>
            </Box>

            <Stack spacing={4} sx={{ p: 5 }}>
              {/* Section 1 */}
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                  <AssignmentIcon sx={{ fontSize: 18, color: ACCENT }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, letterSpacing: 1 }}>ENTITY IDENTIFICATION</Typography>
                </Stack>
                <Grid container spacing={3}>
                  <Grid item xs={12}><TextField fullWidth name="user_name" label="Legal Name" required onChange={handleInputChange} value={formData.user_name} variant="standard" /></Grid>
                  <Grid item xs={12}><TextField fullWidth name="company_name" label="Company / Entity" required onChange={handleInputChange} value={formData.company_name} variant="standard" /></Grid>
                  <Grid item xs={6}><TextField fullWidth name="user_mobile" label="WhatsApp Chat Link" required onChange={handleInputChange} value={formData.user_mobile} variant="standard" /></Grid>
                  <Grid item xs={6}><TextField fullWidth name="user_email" label="Business Email" required type="email" onChange={handleInputChange} value={formData.user_email} variant="standard" /></Grid>
                </Grid>
              </Box>

              <Divider />

              {/* Section 2 */}
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                  <HubIcon sx={{ fontSize: 18, color: ACCENT }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, letterSpacing: 1 }}>LOGISTICS & SPECS</Typography>
                </Stack>
                <Stack spacing={3}>
                  <TextField select fullWidth name="custom_origin" label="Prefered Sourcing Hub" value={formData.custom_origin} onChange={handleInputChange} variant="filled">
                    {selected.origins.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                  </TextField>

                  <TextField select fullWidth name="custom_quality" label="Processing Grade" value={formData.custom_quality} onChange={handleInputChange} variant="filled">
                    {selected.grades.map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                  </TextField>

                  <Grid container spacing={2}>
                    <Grid item xs={6}><TextField fullWidth name="tonnage" label={`Volume (${unit === 'metric' ? 'MT' : 'Lbs'})`} required onChange={handleInputChange} value={formData.tonnage} variant="outlined" /></Grid>
                    <Grid item xs={6}><TextField fullWidth name="destination" label="Discharge Port" required onChange={handleInputChange} value={formData.destination} variant="outlined" /></Grid>
                  </Grid>
                </Stack>
              </Box>

              <Button 
                type="submit" 
                fullWidth 
                disabled={loading} 
                sx={{ 
                  py: 2.5, bgcolor: '#1A1A1A', color: ACCENT, fontWeight: 900, 
                  letterSpacing: 2, borderRadius: 0, mt: 4,
                  '&:hover': { bgcolor: '#000', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s'
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "TRANSMIT MANIFEST"}
              </Button>
            </Stack>
          </Box>
        )}
      </Drawer>

      <Snackbar open={success} autoHideDuration={5000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ bgcolor: '#1A1A1A', color: ACCENT, borderRadius: 0, fontWeight: 800 }}>
          MANIFEST TRANSMITTED. OUR TRADE DESK WILL RESPOND SHORTLY.
        </Alert>
      </Snackbar>
    </Box>
  );
}