"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { 
  Box, Container, Typography, Stack, Button, Modal, TextField, 
  IconButton, CircularProgress, Alert, Snackbar, Fade, Grid, MenuItem, Divider
} from "@mui/material";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const FEATURED = [
  { 
    name: "Cumin Seeds", 
    image: "/spices/cumin.jpg", 
    hubs: ["Unjha Hub", "Rajasthan Hub", "Gulf Port Stock"], 
    size: 8 
  },
  { 
    name: "Turmeric Fingers", 
    image: "/spices/turmeric.webp", 
    hubs: ["Sangli Hub", "Nizamabad Hub", "Erode Hub"], 
    size: 4 
  },
  { 
    name: "Fenugreek Seeds", 
    image: "/spices/fennugreek.jpg", 
    hubs: ["Madhya Pradesh", "Rajasthan Hub"], 
    size: 4 
  },
  { 
    name: "Coriander Seeds", 
    image: "/spices/coriander.webp", 
    hubs: ["Gujarat Hub", "Rajasthan Hub", "Kota Cluster"], 
    size: 4 
  },
  { 
    name: "Fennel Seeds", 
    image: "/spices/fennel.webp", 
    hubs: ["Abu Road", "Unjha Hub","Niwai Hub","Jodhpur Hub"], 
    size: 4 
  },
  { 
    name: "Yellow Mustard \nSeeds", 
    image: "/spices/ymustard.jpg", 
    hubs: ["Rajasthan", "Madhya Pradesh"], 
    size: 4 
  },
  { 
    name: "Black Mustard \nSeeds", 
    image: "/spices/bMustard.jpg", 
    hubs: ["Rajasthan", "Madhya Pradesh"], 
    size: 4 
  },
  { 
    name: "Nigella sativa\n(Kalonji)", 
    image: "/spices/Kalonji.jpg", 
    hubs: ["Rajasthan", "Madhya Pradesh"], 
    size: 4 
  },
];

const GRADES = [
  "Machine Cleaned", 
  "Sortex 99% Purified", 
  "European Quality (EU Standard)", 
  "Ground Powder"
];

export default function ProductShowcaseSection() {
  const router = useRouter();
  const ACCENT = "#C5A059"; 
  const PRIMARY = "#050505";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "success", message: "", open: false });
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // State updated to match your EmailJS HTML Template fields
  const [formData, setFormData] = useState({ 
    user_name: "", 
    user_email: "",
    company_name: "", 
    user_mobile: "", 
    tonnage: "", 
    catalog_grade: "Machine Cleaned",
    custom_origin: "",
    destination: "",
    currency: "USD", // Default currency
    custom_quality: ""
  });

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      custom_origin: product.hubs[0] 
    });
    setOpen(true);
  };

  const handleClose = () => {
    if (!loading) {
      setOpen(false);
      setFormData({ 
        user_name: "", user_email: "", company_name: "", user_mobile: "", 
        tonnage: "", catalog_grade: "Machine Cleaned", custom_origin: "", 
        destination: "", currency: "USD", custom_quality: "" 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // MAPPING DATA TO YOUR HTML TEMPLATE VARIABLES
    const templateParams = {
        product: selectedProduct.name.replace('\n', ' '), 
        catalog_origin: selectedProduct.hubs.join(", "), // Shows all available hubs as reference
        catalog_grade: formData.catalog_grade,
        tonnage: formData.tonnage,
        unit: "MT", // Standard unit
        currency: formData.currency,
        custom_origin: formData.custom_origin,
        custom_quality: formData.custom_quality || "Standard export quality requested.",
        destination: formData.destination,
        user_name: formData.user_name,
        company_name: formData.company_name,
        user_email: formData.user_email,
        user_mobile: formData.user_mobile
    };

    try {
      await emailjs.send(
        "service_24u1ybi", 
        "template_4l04gxf", 
        templateParams,
        "qQidVoE0H-xPwYEeg"
      );
      setStatus({ type: "success", message: "Trade Requisition Transmitted.", open: true });
      handleClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Network Error. Please try WhatsApp.", open: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography variant="overline" sx={{ fontWeight: 900, color: ACCENT, letterSpacing: 6 }}>
                INVENTORY 2026
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, textTransform: 'uppercase', mt: 1, fontSize: { xs: '2.2rem', md: '4rem' } }}>
                Global <b>Direct</b> Supply
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: PRIMARY, mx: 'auto', mt: 3 }} />
        </Box>

        {/* Product Grid */}
        <Grid container spacing={6} justifyContent="center">
          {FEATURED.map((p) => (
            <Grid item xs={12} sm={6} md={p.size} key={p.name}>
              <Box sx={{ height: '100%' }}>
                <Box 
                  onClick={() => handleOpen(p)}
                  sx={{ 
                    position: 'relative', height: { xs: 300, md: 400 },
                    cursor: 'pointer', overflow: 'hidden', mb: 3, transition: '0.4s ease',
                    "&:hover": { filter: 'brightness(0.8)', "& .img-overlay": { opacity: 1 } }
                  }}
                >
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                  <Box className="img-overlay" sx={{ 
                    position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.2)', 
                    opacity: 0, transition: '0.3s ease', display: 'flex', 
                    alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <Typography sx={{ color: '#fff', fontWeight: 900, border: '1px solid #C5A059', px: 3, py: 1 }}>
                        VIEW SPECS
                    </Typography>
                  </Box>
                </Box>

                <Stack alignItems={{ xs: 'center', sm: 'flex-start' }} spacing={1}>
                    <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -1, mb: 1, whiteSpace: "pre-line" }}>
                        {p.name}
                    </Typography>                  
                  <Stack direction="row" spacing={2}>
                    <Button onClick={() => handleOpen(p)} variant="outlined" sx={{ color: PRIMARY, borderRadius: 0, px: 3, fontWeight: 900 }}>
                      ENQUIRE
                    </Button>
                    <IconButton 
                      onClick={() => window.open(`https://wa.me/91XXXXXXXXXX`)} 
                      sx={{ border: `1px solid #25D366`, borderRadius: 0, color: '#25D366' }}
                    >
                      <WhatsAppIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Button onClick={() => router.push('/products')} endIcon={<ArrowRightAltIcon />} sx={{ color: PRIMARY, fontWeight: 900, fontSize: '1.1rem', borderBottom: `2px solid ${ACCENT}`, borderRadius: 0, "&:hover": { bgcolor: 'transparent', letterSpacing: 2 } }}>
                VIEW FULL CATALOG
            </Button>
        </Box>
      </Container>

      {/* Manifest Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Stack direction="row" justifyContent="space-between" mb={4}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>TRADE <b>MANIFEST</b></Typography>
              <IconButton onClick={handleClose} disabled={loading}><CloseIcon /></IconButton>
            </Stack>

            <Typography variant="body2" sx={{ mb: 3, fontWeight: 700, color: ACCENT }}>
                REQUISITION: {selectedProduct?.name.toUpperCase().replace('\n', ' ')}
            </Typography>

            <Stack component="form" onSubmit={handleSubmit} spacing={2.5}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField 
                    select fullWidth label="Preferred Origin" variant="standard" 
                    value={formData.custom_origin} 
                    onChange={(e) => setFormData({...formData, custom_origin: e.target.value})}
                  >
                    {selectedProduct?.hubs.map((h) => <MenuItem key={h} value={h}>{h}</MenuItem>)}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    select fullWidth label="Quality Grade" variant="standard" 
                    value={formData.catalog_grade} 
                    onChange={(e) => setFormData({...formData, catalog_grade: e.target.value})}
                  >
                    {GRADES.map((g) => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                  </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField 
                    fullWidth label="Quantity (MT)" variant="standard" type="number" required
                    value={formData.tonnage}
                    onChange={(e) => setFormData({...formData, tonnage: e.target.value})} 
                  />
                </Grid>
                <Grid item xs={6}>
                   <TextField 
                    fullWidth label="Discharge Port" variant="standard" required
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})} 
                  />
                </Grid>
              </Grid>

              <TextField 
                fullWidth label="Specific Quality Requirements (Optional)" variant="standard"
                placeholder="e.g. Moisture < 8%, Purity > 99%"
                value={formData.custom_quality}
                onChange={(e) => setFormData({...formData, custom_quality: e.target.value})} 
              />

              <Divider sx={{ my: 1 }} />

              <TextField required label="Representative Name" variant="standard" fullWidth value={formData.user_name} onChange={(e) => setFormData({...formData, user_name: e.target.value})} />
              <TextField required label="Company / Entity" variant="standard" fullWidth value={formData.company_name} onChange={(e) => setFormData({...formData, company_name: e.target.value})} />
              
              <Grid container spacing={2}>
                 <Grid item xs={6}>
                    <TextField required type="email" label="Business Email" variant="standard" fullWidth value={formData.user_email} onChange={(e) => setFormData({...formData, user_email: e.target.value})} />
                 </Grid>
                 <Grid item xs={6}>
                    <TextField required label="WhatsApp (Inc. Code)" variant="standard" fullWidth value={formData.user_mobile} onChange={(e) => setFormData({...formData, user_mobile: e.target.value})} />
                 </Grid>
              </Grid>

              <Button 
                type="submit" variant="contained" disabled={loading} fullWidth 
                sx={{ py: 2, bgcolor: PRIMARY, borderRadius: 0, fontWeight: 900, mt: 2, "&:hover": { bgcolor: '#333' } }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "TRANSMIT TRADE REQUISITION"}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>

      <Snackbar open={status.open} autoHideDuration={4000} onClose={() => setStatus({ ...status, open: false })}>
        <Alert severity={status.type} variant="filled" sx={{ borderRadius: 0 }}>{status.message}</Alert>
      </Snackbar>
    </Box>
  );
}

const modalStyle = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 550 }, bgcolor: 'white', p: { xs: 4, md: 6 }, outline: 'none',
  borderTop: `6px solid #C5A059`,
  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  maxHeight: '90vh',
  overflowY: 'auto'
};