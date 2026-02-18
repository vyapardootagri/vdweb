"use client";
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#fff8f0"
      }}
    >
      <CircularProgress
        size={60}
        thickness={5}
        sx={{ color: "#d4af37" }}
        aria-label="Loading indicator"
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "#b8860b"
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}
