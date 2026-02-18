"use client";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: "white",
          borderBottom: scrolled ? "none" : "1px solid #f0f0f0",
          transition: "0.3s all ease",
          py: scrolled ? 0.5 : 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
            {/* 1. Logo Section */}
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <Image src="/logo.png" alt="Vyapar Doot" width={50} height={50} />
              <Box>
                <Typography sx={{ 
                  color: "#5D4037", fontWeight: 800, fontSize: "1.1rem", 
                  lineHeight: 1.2, fontFamily: "'Playfair Display', serif" 
                }}>
                  VYAPAR DOOT
                </Typography>
                <Typography sx={{ color: "#DAA520", fontSize: "0.65rem", fontWeight: 700, letterSpacing: 1.5 }}>
                  SPICE EXIM
                </Typography>
              </Box>
            </Link>

            {/* 2. Desktop Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: pathname === item.href ? "#DAA520" : "#5D4037",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    px: 2,
                    "&:hover": { color: "#DAA520", bgcolor: "transparent" }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                component={Link}
                href="/register"
                sx={{
                  ml: 2,
                  bgcolor: "#5D4037",
                  color: "white",
                  fontWeight: 700,
                  px: 3,
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "#4a332c" }
                }}
              >
                PARTNER LOGIN
              </Button>
            </Box>

            {/* 3. Mobile Hamburger */}
            <IconButton 
              onClick={() => setDrawerOpen(true)} 
              sx={{ display: { md: "none" }, color: "#5D4037" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* --- Mobile Drawer (Full Height Right Sidebar) --- */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: "280px", bgcolor: "white" } }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: "#5D4037" }} />
            </IconButton>
          </Box>
          
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton 
                  component={Link} 
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ 
                    borderRadius: "8px",
                    bgcolor: pathname === item.href ? "#fcf8f0" : "transparent"
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontWeight: 700, 
                      color: pathname === item.href ? "#DAA520" : "#5D4037" 
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            component={Link}
            href="/register"
            onClick={() => setDrawerOpen(false)}
            sx={{ 
              mt: 4, bgcolor: "#5D4037", color: "white", py: 1.5, fontWeight: 700 
            }}
          >
            BECOME A PARTNER
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ height: "70px" }} />
    </>
  );
}