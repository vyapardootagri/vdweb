"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Box, Typography, Button, IconButton, Container, 
  Stack, Snackbar, Alert, useTheme, useMediaQuery 
} from "@mui/material";
import { 
  WhatsApp, ContentCopy, East, West, NorthEast 
} from "@mui/icons-material";
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
      // Logic: Scroll by 85% of screen on mobile, or 440px (card + gap) on desktop
      const scrollVal = isMobile ? window.innerWidth * 0.85 : 440;
      current.scrollBy({ 
        left: direction === "left" ? -scrollVal : scrollVal, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF", overflow: "hidden" }}>
      <Container maxWidth="xl">
        
        {/* --- Header Section --- */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="flex-end" 
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Box>
            <Typography sx={{ 
              color: "#DAA520", 
              fontWeight: 900, 
              letterSpacing: 3, 
              fontSize: "0.75rem", 
              mb: 1,
              textTransform: "uppercase" 
            }}>
              Market Intelligence
            </Typography>
            <Typography variant="h3" sx={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 900,
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              color: "#5D4037",
              lineHeight: 1
            }}>
              Latest Insights
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={1.5}>
            <IconButton 
              onClick={() => scroll("left")} 
              aria-label="Scroll Left"
              sx={{ 
                border: "1px solid #E0E0E0", 
                borderRadius: 0,
                transition: "0.3s",
                "&:hover": { bgcolor: "#f5f5f5" } 
              }}
            >
              <West fontSize="small" />
            </IconButton>
            <IconButton 
              onClick={() => scroll("right")} 
              aria-label="Scroll Right"
              sx={{ 
                border: "1px solid #5D4037", 
                borderRadius: 0, 
                bgcolor: "#5D4037", 
                color: "#fff",
                transition: "0.3s",
                "&:hover": { bgcolor: "#3d2b25", borderColor: "#3d2b25" } 
              }}
            >
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
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            pb: 2
          }}
        >
          {blogs.map((blog) => (
            <Box 
              key={blog.slug}
              sx={{ 
                flex: "0 0 auto", 
                width: { xs: "85vw", md: "400px" },
                scrollSnapAlign: "start",
                border: "1px solid #F0F0F0",
                p: { xs: 2, md: 3 },
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#DAA520",
                  "& .blog-image": { transform: "scale(1.08)" }
                }
              }}
            >
              {/* Optimized Image with Next/Image */}
              <Box sx={{ 
                position: "relative", 
                overflow: 'hidden', 
                height: { xs: "220px", md: "280px" }, 
                mb: 3,
                bgcolor: "#f9f9f9" 
              }}>
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  className="blog-image"
                  style={{ 
                    objectFit: "cover", 
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" 
                  }} 
                  sizes="(max-width: 768px) 85vw, 400px"
                />
              </Box>
              
              <Typography sx={{ color: "#DAA520", fontWeight: 800, fontSize: "0.7rem", mb: 1.5, letterSpacing: 1 }}>
                {blog.category?.toUpperCase() || "TRADE UPDATE"}
              </Typography>
              
              <Typography variant="h6" sx={{ 
                fontWeight: 800, 
                color: "#5D4037", 
                mb: 3, 
                lineHeight: 1.3,
                minHeight: "3.9em", // Fixes alignment if titles are different lengths
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {blog.title}
              </Typography>
              
              <Button 
                component={Link} 
                href={`/blog/${blog.slug}`}
                endIcon={<NorthEast sx={{ fontSize: 14 }} />}
                sx={{ 
                  color: "#5D4037", 
                  fontWeight: 900, 
                  p: 0, 
                  fontSize: "0.8rem",
                  "&:hover": { bgcolor: "transparent", color: "#DAA520" }
                }}
              >
                READ ANALYSIS
              </Button>
            </Box>
          ))}
        </Box>

        {/* --- WhatsApp CTA Bar --- */}
        <Box 
          sx={{ 
            mt: { xs: 6, md: 10 }, 
            p: { xs: 3, md: 5 }, 
            bgcolor: "#FDF9F3", 
            border: "1px solid #E0D6C5",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4
          }}
        >
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Box sx={{ 
              bgcolor: "#25D366", 
              p: 1.5, 
              borderRadius: "50%", 
              display: "flex",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)" 
            }}>
              <WhatsApp sx={{ color: "#fff" }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#5D4037", lineHeight: 1.2 }}>
                Join Live Trade Channel
              </Typography>
              <Typography variant="body2" sx={{ color: "#8B735B", mt: 0.5 }}>
                Real-time Mandi rates, export policy alerts & global trends.
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <Button 
              component="a"
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth={isMobile}
              sx={{ 
                bgcolor: "#5D4037", 
                color: "#fff", 
                fontWeight: 800, 
                px: 5, 
                py: 1.5,
                borderRadius: 0,
                boxShadow: "none",
                "&:hover": { bgcolor: "#3d2b25", boxShadow: "none" }
              }}
            >
              JOIN NOW
            </Button>
            <Button 
              onClick={handleCopyLink}
              variant="outlined"
              startIcon={<ContentCopy />}
              fullWidth={isMobile}
              sx={{ 
                borderColor: "#5D4037", 
                color: "#5D4037", 
                fontWeight: 800, 
                borderRadius: 0,
                px: 3,
                "&:hover": { borderColor: "#DAA520", color: "#DAA520", bgcolor: "transparent" }
              }}
            >
              COPY LINK
            </Button>
          </Stack>
        </Box>

        {/* --- Feedback Notification --- */}
        <Snackbar 
          open={snackbarOpen} 
          autoHideDuration={3000} 
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert 
            onClose={() => setSnackbarOpen(false)} 
            severity="success" 
            sx={{ 
              bgcolor: "#5D4037", 
              color: "#fff", 
              borderRadius: 0,
              "& .MuiAlert-icon": { color: "#DAA520" }
            }}
          >
            WhatsApp Invite Link Copied!
          </Alert>
        </Snackbar>

      </Container>
    </Box>
  );
}