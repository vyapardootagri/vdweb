"use client";

import React, { useState, useEffect } from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import { RateReview, Check } from "@mui/icons-material";

export default function InquiryFab() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleSuccess = () => setIsSubmitted(true);
    window.addEventListener("form-submitted", handleSuccess);
    return () => window.removeEventListener("form-submitted", handleSuccess);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tooltip title={isSubmitted ? "Enquiry Received" : "Direct Inquiry"} placement="left">
      <Fab
        onClick={scrollToContact}
        size="large"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          bgcolor: isSubmitted ? "#2e7d32" : "#1a1a1a",
          color: isSubmitted ? "#fff" : "#DAA520",
          zIndex: 3000,
          border: `2px solid ${isSubmitted ? "#2e7d32" : "#DAA520"}`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": { transform: "scale(1.1)", bgcolor: isSubmitted ? "#1b5e20" : "#DAA520", color: isSubmitted ? "#fff" : "#1a1a1a" }
        }}
      >
        {isSubmitted ? <Check fontSize="medium" /> : <RateReview fontSize="medium" />}
      </Fab>
    </Tooltip>
  );
}