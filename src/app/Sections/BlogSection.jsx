"use client";

import React, { useRef, useState } from "react";
import { 
  Box, Typography, Button, IconButton, Container, 
  Stack, Snackbar, Alert, useTheme, useMediaQuery, Divider
} from "@mui/material";
import { 
  WhatsApp, ContentCopy, East, West, NorthEast, Language 
} from "@mui/icons-material";
import Link from "next/link";
import { blogs } from "../data/blogData";

export default function BlogSection() {
  const scrollRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const CHANNEL_URL = "https://whatsapp.com/channel/0029VbBqojG96H4MQclTBM3G";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(CHANNEL_URL);
    setSnackbarOpen(true);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollVal = isMobile ? window.innerWidth * 0.85 : 450;
      current.scrollBy({ 
        left: direction === "left" ? -scrollVal : scrollVal, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 15 }, bgcolor: "#FFFFFF", overflow: "hidden" }}>
      <Container maxWidth="xl">
        
        {/* --- Header Section --- */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="flex-end" 
          sx={{ mb: { xs: 4, md: 8 } }}
        >
          <Box>
            <Typography sx={{ color: "#DAA520", fontWeight: 900, letterSpacing: 3, fontSize: "0.75rem", mb: 1 }}>
              LATEST REPORTS
            </Typography>
            <Typography variant="h3" sx={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 900,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              color: "#5D4037"
            }}>
              Insights
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => scroll("left")} sx={{ border: "1px solid #eee", borderRadius: 0 }}>
              <West fontSize="small" />
            </IconButton>
            <IconButton onClick={() => scroll("right")} sx={{ border: "1px solid #eee", borderRadius: 0, bgcolor: "#5D4037", color: "#fff" }}>
              <East fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* --- Horizontal Scroll Area --- */}
        <Box 
          ref={scrollRef}
          sx={{ 
            display: "flex", 
            gap: { xs: 2, md: 4 }, 
            overflowX: "auto", 
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
            px: { xs: 0, md: 0 },
            ml: { xs: 0, md: 0 }
          }}
        >
          {blogs.map((blog, i) => (
            <Box 
              key={i}
              sx={{ 
                flex: "0 0 auto", 
                width: { xs: "85vw", md: "400px" },
                scrollSnapAlign: "center",
                border: "1px solid #f5f5f5",
                p: { xs: 2, md: 3 }
              }}
            >
              <Box sx={{ overflow: 'hidden', height: { xs: "250px", md: "300px" }, mb: 3 }}>
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </Box>
              
              <Typography sx={{ color: "#DAA520", fontWeight: 800, fontSize: "0.7rem", mb: 1 }}>
                {blog.category?.toUpperCase() || "TRADE UPDATE"}
              </Typography>
              
              <Typography variant="h6" sx={{ 
                fontWeight: 900, 
                color: "#5D4037", 
                mb: 3, 
                lineHeight: 1.2,
                height: "2.4em",
                overflow: "hidden"
              }}>
                {blog.title}
              </Typography>
              
              <Button 
                component={Link} href={`/blog/${blog.slug}`}
                endIcon={<NorthEast sx={{ fontSize: 14 }} />}
                sx={{ color: "#5D4037", fontWeight: 900, p: 0, fontSize: "0.8rem" }}
              >
                READ ANALYSIS
              </Button>
            </Box>
          ))}
        </Box>

        {/* --- Integrated Channel Link Bar --- */}
        <Box 
          sx={{ 
            mt: 8, 
            p: { xs: 3, md: 5 }, 
            bgcolor: "#FDF9F3", 
            border: "1px solid #E0D6C5",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ bgcolor: "#25D366", p: 1.5, borderRadius: "50%", display: "flex" }}>
              <WhatsApp sx={{ color: "#fff" }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 900, color: "#5D4037" }}>
                Join Live Trade Channel
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                Daily Mandi rates & export alerts.
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <Button 
              component="a"
              href={CHANNEL_URL}
              target="_blank"
              variant="contained"
              sx={{ 
                bgcolor: "#5D4037", 
                color: "#fff", 
                fontWeight: 800, 
                px: 4, 
                borderRadius: 0,
                "&:hover": { bgcolor: "#3d2b25" }
              }}
            >
              JOIN NOW
            </Button>
            <Button 
              onClick={handleCopyLink}
              variant="outlined"
              startIcon={<ContentCopy />}
              sx={{ 
                borderColor: "#5D4037", 
                color: "#5D4037", 
                fontWeight: 800, 
                borderRadius: 0,
                px: 3
              }}
            >
              COPY LINK
            </Button>
          </Stack>
        </Box>

        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
          <Alert severity="success" sx={{ bgcolor: "#5D4037", color: "#fff", borderRadius: 0 }}>
            Invite Link Copied
          </Alert>
        </Snackbar>

      </Container>
    </Box>
  );
}