"use client";

import React, { useState, useRef } from "react";
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
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // PASTE YOUR ACTUAL IDs HERE FROM THE DASHBOARD
    const SERVICE_ID = "service_jmxje56";  // Check Email Services tab
    const TEMPLATE_ID = "template_k5jav2h"; // Check Email Templates tab
    const PUBLIC_KEY = "5td2imKAGRSIIu6Ha";   // Check Account -> API Keys tab

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current, // Ensure your <Box component="form"> has ref={formRef}
        PUBLIC_KEY
      );

      setSnackbarOpen(true);
      window.dispatchEvent(new Event("form-submitted"));
      e.target.reset();
    } catch (error) {
      // If you still get a 400, this will log the specific detail
      console.error("EmailJS Error:", error);
      alert("Error: " + error.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="contact-section1" sx={{ bgcolor: "#fff", color: "#1a1a1a", borderTop: "1px solid #eee" }}>
      <Grid container>

        {/* --- Left Column: Branding --- */}
        <Grid size={{ xs: 12, md: 6 }} sx={{
          p: { xs: 4, sm: 6, md: 10 },
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: { md: "1px solid #eee" },
          minHeight: { md: "100vh" }
        }}>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: "#DAA520" }}>
              VYAPAR DOOT • HQ
            </Typography>
            <Typography variant="h1" sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: { xs: "3.5rem", sm: "4.5rem", md: "6rem" },
              lineHeight: 0.85, mt: 4, mb: { xs: 4, md: 8 }
            }}>
              Let's Talk <br /> Trade.
            </Typography>

            <Stack spacing={8}>
              <Box>
                <Typography sx={{ fontWeight: 900, fontSize: "0.7rem", color: "#999", mb: 1, letterSpacing: 2 }}>LOCAL OPERATIONS</Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Spice Trade Center, Mansarovar <br /> Jaipur, Rajasthan 302020, India.
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 900, fontSize: "0.7rem", color: "#999", mb: 1, letterSpacing: 2 }}>GLOBAL REACH</Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>trade@vyapardoot.com</Typography>
              </Box>
            </Stack>
          </Box>

          <Stack direction="row" spacing={3} sx={{ mt: 10 }}>
            <IconButton sx={{ color: "#1a1a1a", p: 0 }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: "#1a1a1a", p: 0 }}><Public /></IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Typography sx={{ fontWeight: 900, fontSize: "0.7rem", color: "#999" }}>JAIPUR • UTC +5:30</Typography>
          </Stack>
        </Grid>

        {/* --- Right Column: Sticky Inquiry Form --- */}
        <Grid size={{ xs: 12, md: 6 }} sx={{
          p: { xs: 4, sm: 6, md: 10 },
          bgcolor: "#1a1a1a", color: "#fff",
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: { md: "sticky" }, top: 0, height: { md: "100vh" }, overflowY: "auto"
        }}>
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 6, fontFamily: "'Playfair Display', serif", fontSize: { xs: "2rem", md: "2.5rem" } }}>
            Direct Inquiry
          </Typography>

          <Box component="form" ref={formRef} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <TextField fullWidth name="user_name" variant="standard" label="FULL NAME" required InputLabelProps={{ sx: { color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: "0.7rem" } }} inputProps={{ sx: { color: "#fff", py: 1.5 } }} sx={{ "& .MuiInput-underline:before": { borderBottomColor: "rgba(255,255,255,0.1)" }, "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#DAA520" } }} />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5}>
              <TextField fullWidth name="user_email" variant="standard" label="EMAIL ADDRESS" type="email" required InputLabelProps={{ sx: { color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: "0.7rem" } }} inputProps={{ sx: { color: "#fff", py: 1.5 } }} sx={{ "& .MuiInput-underline:before": { borderBottomColor: "rgba(255,255,255,0.1)" } }} />
              <TextField fullWidth name="user_phone" variant="standard" label="MOBILE / WHATSAPP" required InputLabelProps={{ sx: { color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: "0.7rem" } }} inputProps={{ sx: { color: "#fff", py: 1.5 } }} sx={{ "& .MuiInput-underline:before": { borderBottomColor: "rgba(255,255,255,0.1)" } }} />
            </Stack>

            <TextField fullWidth name="company" variant="standard" label="COMPANY & REGION" InputLabelProps={{ sx: { color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: "0.7rem" } }} inputProps={{ sx: { color: "#fff", py: 1.5 } }} sx={{ "& .MuiInput-underline:before": { borderBottomColor: "rgba(255,255,255,0.1)" } }} />

            <TextField fullWidth name="message" multiline rows={3} variant="standard" label="TRADE REQUIREMENTS" InputLabelProps={{ sx: { color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: "0.7rem" } }} inputProps={{ sx: { color: "#fff", py: 1.5 } }} sx={{ "& .MuiInput-underline:before": { borderBottomColor: "rgba(255,255,255,0.1)" } }} />

            <Box sx={{ mt: 2 }}>
              <Button
                type="submit" variant="contained" disabled={loading} fullWidth={isMobile}
                endIcon={!loading && <East />}
                sx={{
                  bgcolor: "#DAA520", color: "#1a1a1a", px: 8, py: 2.5, borderRadius: 0, fontWeight: 900,
                  "&:hover": { bgcolor: "#fff" }, "&.Mui-disabled": { bgcolor: "rgba(218, 165, 32, 0.4)" }
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "#1a1a1a" }} /> : "INITIATE PARTNERSHIP"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="success" sx={{ bgcolor: "#DAA520", color: "#1a1a1a", fontWeight: 900, borderRadius: 0 }}>
          ENQUIRY LOGGED. OUR TRADE OFFICER WILL RESPOND WITHIN 12 HOURS.
        </Alert>
      </Snackbar>
    </Box>
  );
}