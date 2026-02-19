"use client";

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Box, Typography, Grid, TextField,
  Button, Stack, IconButton, Snackbar, Alert,
  CircularProgress, useMediaQuery, useTheme
} from "@mui/material";
import { East, LinkedIn, Public } from "@mui/icons-material";

export default function ContactPage() {
  const formRef = useRef();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_24u1ybi"; 
    const TEMPLATE_ID = "template_4l04gxf"; 
    const PUBLIC_KEY = "qQidVoE0H-xPwYEeg"; 

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSnackbarOpen(true);
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Submission Error: ${error?.text || "Please verify your EmailJS configuration."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#FDFDFD", minHeight: "100vh" }}>
      <Grid container sx={{ minHeight: "100vh" }}>
        
        {/* --- LEFT PANEL: BRANDING & IDENTITY --- */}
        <Grid item xs={12} md={5} sx={{ 
            p: { xs: 4, sm: 8, md: 12 }, 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: "#FFF",
            borderRight: { md: "1px solid #f0f0f0" }
        }}>
          <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 3, color: "#DAA520", mb: 2 }}>
            VYAPAR DOOT AGRI
          </Typography>
          <Typography variant="h2" sx={{ 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: 800, 
            lineHeight: 1.1, 
            color: "#1a1a1a",
            mb: 4 
          }}>
            Global Trade. <br />Kota Mandi.
          </Typography>
          
          <Typography variant="body1" sx={{ color: "#666", mb: 6, maxWidth: 400, lineHeight: 1.7 }}>
            Strategically located in the heart of Rajasthan's agricultural hub to facilitate seamless crop procurement and global distribution.
          </Typography>

          <Stack spacing={4} sx={{ mb: 6 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 900, color: "#999", letterSpacing: 1 }}>HEADQUARTERS</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
              Vyapar Doot - D-255, Seth Bhamasha Krishi Upaj Mandi, <br />
                Kota, Rajasthan 324005
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 900, color: "#999", letterSpacing: 1 }}>EMAIL ENQUIRIES</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: "#DAA520" }}>
                vyapardootagri@gmail.com
              </Typography>
            </Box>
          </Stack>

          {/* GOOGLE MAPS EMBED SECTION */}
          <Box sx={{ width: "100%", height: "200px", borderRadius: "4px", overflow: "hidden", mb: 4, border: "1px solid #eee" }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.332306857102!2d75.87202047537936!3d25.12082153464731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9af80031f231%3A0x3e2736a5c76f7fd5!2sVyapar%20doot!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </Box>

          <Stack direction="row" spacing={2}>
            <IconButton sx={{ color: "#1a1a1a", border: "1px solid #eee", "&:hover": { bgcolor: "#DAA520", color: "#fff" } }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: "#1a1a1a", border: "1px solid #eee", "&:hover": { bgcolor: "#DAA520", color: "#fff" } }}><Public /></IconButton>
          </Stack>
        </Grid>

        {/* --- RIGHT PANEL: THE FORM --- */}
        <Grid item xs={12} md={7} sx={{ 
          bgcolor: "#111", 
          p: { xs: 4, sm: 8, md: 12 },
          display: 'flex',
          alignItems: 'center'
        }}>
          <Box component="form" ref={formRef} onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 550, mx: "auto" }}>
            <Typography variant="h4" sx={{ color: "#FFF", fontFamily: "'Playfair Display', serif", mb: 1, fontWeight: 700 }}>
              Direct Procurement Inquiry
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 6 }}>
              Submit your trade requirements and our officer will respond within 12 hours.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="user_name" label="Full Name" variant="standard" required 
                  InputLabelProps={{ sx: { color: "#555" } }}
                  sx={{ input: { color: "#FFF" }, "& .MuiInput-underline:before": { borderBottomColor: "#333" } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="user_email" label="Email Address" variant="standard" type="email" required 
                  InputLabelProps={{ sx: { color: "#555" } }}
                  sx={{ input: { color: "#FFF" }, "& .MuiInput-underline:before": { borderBottomColor: "#333" } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="user_phone" label="Mobile / WhatsApp" variant="standard" required 
                  InputLabelProps={{ sx: { color: "#555" } }}
                  sx={{ input: { color: "#FFF" }, "& .MuiInput-underline:before": { borderBottomColor: "#333" } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="company_name" label="Company Name" variant="standard" 
                  InputLabelProps={{ sx: { color: "#555" } }}
                  sx={{ input: { color: "#FFF" }, "& .MuiInput-underline:before": { borderBottomColor: "#333" } }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="message" label="Requirements (Crop type, Tonnage, Destination)" variant="standard" multiline rows={3} 
                  InputLabelProps={{ sx: { color: "#555" } }}
                  sx={{ "& .MuiInputBase-root": { color: "#FFF" }, "& .MuiInput-underline:before": { borderBottomColor: "#333" } }} />
              </Grid>
              
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Button 
                  type="submit" 
                  disabled={loading}
                  variant="contained" 
                  fullWidth={isMobile}
                  endIcon={!loading && <East />}
                  sx={{ 
                    bgcolor: "#DAA520", 
                    color: "#1a1a1a", 
                    px: 8, 
                    py: 2, 
                    fontWeight: 900, 
                    borderRadius: 0,
                    transition: "0.3s all ease",
                    "&:hover": { bgcolor: "#FFF", transform: "translateY(-2px)" },
                    "&.Mui-disabled": { bgcolor: "#333", color: "#666" }
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "INITIATE PARTNERSHIP"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="success" sx={{ bgcolor: "#DAA520", color: "#1a1a1a", fontWeight: 900, borderRadius: 0 }}>
          SUCCESS: YOUR INQUIRY HAS BEEN LOGGED.
        </Alert>
      </Snackbar>
    </Box>
  );
}