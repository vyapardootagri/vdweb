"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import {
  Box, Container, Typography, Stack, Button, Modal, TextField,
  IconButton, CircularProgress, Alert, Snackbar, Fade, Grid, Divider
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const FEATURED = [
  { name: "Cumin Seeds",           image: "/spices/cumin.jpg",       size: 8 },
  { name: "Turmeric Fingers",      image: "/spices/turmeric.webp",   size: 4 },
  { name: "Fenugreek Seeds",       image: "/spices/fennugreek.jpg",  size: 4 },
  { name: "Coriander Seeds",       image: "/spices/coriander.webp",  size: 4 },
  { name: "Fennel Seeds",          image: "/spices/fennel.webp",     size: 4 },
  { name: "Yellow Mustard Seeds",  image: "/spices/ymustard.jpg",    size: 4 },
  { name: "Black Mustard Seeds",   image: "/spices/bMustard.jpg",    size: 4 },
  { name: "Nigella Sativa\n(Kalonji)", image: "/spices/Kalonji.jpg", size: 4 },
];

// Fields mapped 1-to-1 with EmailJS HTML template variables
const EMPTY_FORM = {
  user_name: "",        // {{user_name}}
  company_name: "",     // {{company_name}}
  user_email: "",       // {{user_email}}
  user_mobile: "",      // {{user_mobile}}
  custom_origin: "",    // {{custom_origin}}  — buyer's preferred origin
  catalog_grade: "",    // {{catalog_grade}}  — buyer's quality requirement
  custom_quality: "",   // {{custom_quality}} — detailed spec notes
  tonnage: "",          // {{tonnage}}
  currency: "USD",      // {{currency}}
  destination: "",      // {{destination}}
};

export default function ProductShowcaseSection() {
  const router = useRouter();
  const ACCENT = "#C5A059";
  const PRIMARY = "#050505";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "success", message: "", open: false });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setFormData(EMPTY_FORM);
    setOpen(true);
  };

  const handleClose = () => {
    if (!loading) {
      setOpen(false);
      setSelectedProduct(null);
    }
  };

  const set = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Variable names match the HTML email template exactly
    const templateParams = {
      product:        selectedProduct.name.replace("\n", " "),
      catalog_origin: "Multiple Origins Available",
      catalog_grade:  formData.catalog_grade || "As per buyer spec",
      tonnage:        formData.tonnage,
      unit:           "MT",
      currency:       formData.currency,
      custom_origin:  formData.custom_origin || "Open / No preference",
      custom_quality: formData.custom_quality || "Standard export quality.",
      destination:    formData.destination,
      user_name:      formData.user_name,
      company_name:   formData.company_name,
      user_email:     formData.user_email,
      user_mobile:    formData.user_mobile,
    };

    try {
      await emailjs.send(
        "service_24u1ybi",
        "template_4l04gxf",
        templateParams,
        "qQidVoE0H-xPwYEeg"
      );
      setStatus({ type: "success", message: "Requisition submitted. We'll be in touch shortly.", open: true });
      handleClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Network error. Please try WhatsApp.", open: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography variant="overline" sx={{ fontWeight: 900, color: ACCENT, letterSpacing: 6 }}>
            INVENTORY 2026
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, textTransform: "uppercase", mt: 1, fontSize: { xs: "2.2rem", md: "4rem" } }}>
            Global <b>Direct</b> Supply
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", mt: 2, maxWidth: 560, mx: "auto", fontSize: "1rem" }}>
            We source across multiple origins and grades. Tell us your exact requirements — we'll find the best match.
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: PRIMARY, mx: "auto", mt: 3 }} />
        </Box>

        {/* Product Grid */}
        <Grid container spacing={6} justifyContent="center">
          {FEATURED.map((p) => (
            <Grid item xs={12} sm={6} md={p.size} key={p.name}>
              <Box sx={{ height: "100%" }}>
                <Box
                  onClick={() => handleOpen(p)}
                  sx={{
                    position: "relative", height: { xs: 300, md: 400 },
                    cursor: "pointer", overflow: "hidden", mb: 3, transition: "0.4s ease",
                    "&:hover": { filter: "brightness(0.8)", "& .img-overlay": { opacity: 1 } },
                  }}
                >
                  <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                  <Box
                    className="img-overlay"
                    sx={{
                      position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.25)",
                      opacity: 0, transition: "0.3s ease", display: "flex",
                      alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontWeight: 900, border: "1px solid #C5A059", px: 3, py: 1, letterSpacing: 2 }}>
                      GET QUOTE
                    </Typography>
                  </Box>
                </Box>

                <Stack alignItems={{ xs: "center", sm: "flex-start" }} spacing={1.5}>
                  <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: -1, mb: 0.5, whiteSpace: "pre-line" }}>
                    {p.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#999", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
                    Multiple Origins · All Grades
                  </Typography>
                  <Stack direction="row" spacing={2} pt={0.5}>
                    <Button
                      onClick={() => handleOpen(p)}
                      variant="outlined"
                      sx={{ color: PRIMARY, borderColor: PRIMARY, borderRadius: 0, px: 3, fontWeight: 900, "&:hover": { bgcolor: PRIMARY, color: "#fff" } }}
                    >
                      ENQUIRE
                    </Button>
                    <IconButton
                      onClick={() => window.open("https://wa.me/91XXXXXXXXXX")}
                      sx={{ border: "1px solid #25D366", borderRadius: 0, color: "#25D366" }}
                    >
                      <WhatsAppIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            onClick={() => router.push("/products")}
            endIcon={<ArrowRightAltIcon />}
            sx={{ color: PRIMARY, fontWeight: 900, fontSize: "1.1rem", borderBottom: `2px solid ${ACCENT}`, borderRadius: 0, "&:hover": { bgcolor: "transparent", letterSpacing: 2 } }}
          >
            VIEW FULL CATALOG
          </Button>
        </Box>
      </Container>

      {/* Requirement Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            {/* Modal Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1}>
              <Box>
                <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 900, letterSpacing: 4 }}>
                  TRADE REQUISITION
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, mt: 0.5 }}>
                  {selectedProduct?.name.replace("\n", " ")}
                </Typography>
              </Box>
              <IconButton onClick={handleClose} disabled={loading} size="small">
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography variant="body2" sx={{ color: "#888", mb: 3 }}>
              We operate across multiple origins and grades. Share your requirements below — we'll source the best available match.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack component="form" onSubmit={handleSubmit} spacing={2.5}>

              {/* ── CLIENT REQUIREMENTS → maps to email: custom_origin, catalog_grade, tonnage, unit, currency, custom_quality, destination ── */}
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 3, color: "#555" }}>
                Your Requirements
              </Typography>

              {/* custom_origin */}
              <TextField
                fullWidth label="Preferred Origin / Region" variant="standard"
                placeholder="e.g. Gujarat, Rajasthan, MP — or leave blank for best available"
                value={formData.custom_origin}
                onChange={set("custom_origin")}
              />

              {/* catalog_grade */}
              <TextField
                fullWidth label="Quality Grade Required" variant="standard"
                placeholder="e.g. Sortex 99%, EU Grade, Machine Cleaned, Ground Powder…"
                value={formData.catalog_grade}
                onChange={set("catalog_grade")}
              />

              {/* custom_quality */}
              <TextField
                fullWidth label="Detailed Quality Specifications" variant="standard"
                multiline rows={2}
                placeholder="e.g. Moisture < 8%, Purity > 99%, specific certifications, packaging…"
                value={formData.custom_quality}
                onChange={set("custom_quality")}
              />

              <Grid container spacing={2}>
                {/* tonnage + unit (fixed MT) */}
                <Grid item xs={6}>
                  <TextField
                    required fullWidth label="Volume (MT)" type="number" variant="standard"
                    placeholder="Quantity in Metric Tons"
                    value={formData.tonnage} onChange={set("tonnage")}
                  />
                </Grid>
                {/* destination */}
                <Grid item xs={6}>
                  <TextField
                    required fullWidth label="Discharge Port / Destination" variant="standard"
                    placeholder="e.g. Port Klang, Rotterdam"
                    value={formData.destination} onChange={set("destination")}
                  />
                </Grid>
              </Grid>

              {/* currency */}
              <TextField
                select fullWidth label="Preferred Currency" variant="standard"
                value={formData.currency}
                onChange={set("currency")}
                SelectProps={{ native: true }}
              >
                {["USD", "EUR", "GBP", "AED", "INR"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </TextField>

              <Divider />

              {/* ── CONTACT → maps to email: user_name, company_name, user_email, user_mobile ── */}
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 3, color: "#555" }}>
                Contact Details
              </Typography>

              <Grid container spacing={2}>
                {/* user_name */}
                <Grid item xs={6}>
                  <TextField required fullWidth label="Representative Name" variant="standard"
                    value={formData.user_name} onChange={set("user_name")} />
                </Grid>
                {/* company_name */}
                <Grid item xs={6}>
                  <TextField required fullWidth label="Company / Entity" variant="standard"
                    value={formData.company_name} onChange={set("company_name")} />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                {/* user_email */}
                <Grid item xs={6}>
                  <TextField required fullWidth type="email" label="Business Email" variant="standard"
                    value={formData.user_email} onChange={set("user_email")} />
                </Grid>
                {/* user_mobile — used for WhatsApp deep-link in email */}
                <Grid item xs={6}>
                  <TextField required fullWidth label="WhatsApp (with country code)" variant="standard"
                    placeholder="e.g. 919876543210"
                    value={formData.user_mobile} onChange={set("user_mobile")} />
                </Grid>
              </Grid>

              <Button
                type="submit" variant="contained" disabled={loading} fullWidth
                sx={{ py: 2, bgcolor: PRIMARY, borderRadius: 0, fontWeight: 900, mt: 1, letterSpacing: 2, "&:hover": { bgcolor: "#333" } }}
              >
                {loading ? <CircularProgress size={22} color="inherit" /> : "TRANSMIT TRADE REQUISITION"}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>

      <Snackbar open={status.open} autoHideDuration={5000} onClose={() => setStatus({ ...status, open: false })}>
        <Alert severity={status.type} variant="filled" sx={{ borderRadius: 0 }}>{status.message}</Alert>
      </Snackbar>
    </Box>
  );
}

const modalStyle = {
  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: 580 }, bgcolor: "white", p: { xs: 4, md: 5 }, outline: "none",
  borderTop: "6px solid #C5A059",
  boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
  maxHeight: "92vh",
  overflowY: "auto",
};