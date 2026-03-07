"use client";
import React, { useRef } from "react";
import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { motion, useInView } from "framer-motion";
import FormatQuoteIcon   from "@mui/icons-material/FormatQuote";
import StarIcon           from "@mui/icons-material/Star";
import SwapHorizIcon      from "@mui/icons-material/SwapHoriz";
import RequestQuoteIcon   from "@mui/icons-material/RequestQuote";
import HandshakeIcon      from "@mui/icons-material/Handshake";
import VerifiedIcon       from "@mui/icons-material/Verified";
import StorefrontIcon     from "@mui/icons-material/Storefront";
import LocalFloristIcon   from "@mui/icons-material/LocalFlorist";

// ─── DESIGN TOKENS — Spice Palette ────────────────────────────────────────────
const C = {
  saffron:     "#E8A020",       // primary accent — turmeric/saffron
  saffronDim:  "rgba(232,160,32,0.10)",
  saffronBdr:  "rgba(232,160,32,0.18)",
  saffronGlow: "rgba(232,160,32,0.28)",
  pepper:      "#1A0A00",       // deep background — black pepper
  bark:        "#110800",       // surface
  bark2:       "#1E0F03",       // card surface
  red:         "#8B1A00",       // chilli red accent
  redDim:      "rgba(139,26,0,0.25)",
  text:        "#FFF8EE",
  textSub:     "#E8D5AA",
  muted:       "rgba(232,213,170,0.38)",
};

// ─── DATA  ──────────────────────────────────────────────────────────────────
const testimonials = [
  { quote: "They quoted the best Guntur chilli rate within 20 minutes of my inquiry. The lot was confirmed same day. Exceptional speed and market knowledge.", name: "Suresh Agarwal",  role: "Spice Importer",        company: "Mumbai",      initials: "SA" },
  { quote: "As a turmeric farmer in Erode, finding a reliable broker used to be a challenge. These gentlemen consistently bring serious buyers at fair rates.", name: "Murugan K.",      role: "Farmer & FPO Member",   company: "Erode, TN",   initials: "MK" },
  { quote: "Their knowledge of Unjha jeera market is unparalleled. They understand grade variations, moisture norms — everything a serious buyer needs.", name: "Ramesh Patel",    role: "Commodity Trader",       company: "Ahmedabad",   initials: "RP" },
  { quote: "No nonsense, no inflated rates. They initiated a 500MT black pepper deal that two other brokers couldn't close in three months.", name: "Anita Nair",      role: "Export House Director",  company: "Kochi",       initials: "AN" },
  { quote: "The rate intelligence they provide on cardamom auctions is better than anything we've seen. Our procurement costs dropped 12% in one season.", name: "Vikram Menon",    role: "Head of Procurement",    company: "Bangalore",   initials: "VM" },
  { quote: "Fast, accurate, and trustworthy. They've brokered over 20 deals for us across turmeric and chilli. Always within the rates they quoted.", name: "Deepa Sharma",    role: "Wholesale Buyer",        company: "Delhi NCR",   initials: "DS" },
];

const stats = [
  { val: "11+",    label: "Years in Spice Trade",  icon: <VerifiedIcon    sx={{ fontSize: 18 }} /> },
  { val: "1,000+", label: "Trade Deals Closed",    icon: <HandshakeIcon   sx={{ fontSize: 18 }} /> },
  { val: "8",      label: "Spice Categories",       icon: <LocalFloristIcon sx={{ fontSize: 18 }} /> },
  { val: "18",     label: "States Covered",         icon: <SwapHorizIcon   sx={{ fontSize: 18 }} /> },
];

const brandTicker = [
  "Turmeric", "Red Chilli", "Cumin", "Coriander", "Black Pepper",
  "Cardamom", "Fenugreek", "Fennel", "Ginger", "Dry Mango Powder",
  "Mustard Seeds", "Asafoetida",
];

// ─── BRAND TICKER ─────────────────────────────────────────────────────────────
function SpiceTicker() {
  const items = [...brandTicker, ...brandTicker];
  return (
    <Box sx={{ overflow:"hidden", position:"relative", py:1 }}>
      <Box sx={{ position:"absolute", top:0, left:0, width:100, height:"100%", background:`linear-gradient(90deg,${C.pepper},transparent)`, zIndex:2 }} />
      <Box sx={{ position:"absolute", top:0, right:0, width:100, height:"100%", background:`linear-gradient(270deg,${C.pepper},transparent)`, zIndex:2 }} />
      <Box sx={{
        display:"flex", gap:"44px", width:"max-content",
        animation:"sticker 28s linear infinite",
        "@keyframes sticker":{ from:{ transform:"translateX(0)" }, to:{ transform:"translateX(-50%)" } },
      }}>
        {items.map((s, i) => (
          <Box key={i} sx={{ display:"flex", alignItems:"center", gap:"10px", flexShrink:0 }}>
            <Box sx={{ width:3, height:3, borderRadius:"50%", bgcolor:C.saffron, opacity:0.5, boxShadow:`0 0 6px ${C.saffron}66` }} />
            <Typography sx={{ fontFamily:"'Cinzel', serif", fontSize:"0.82rem", color:C.textSub, opacity:0.5, letterSpacing:"2.5px", whiteSpace:"nowrap", userSelect:"none" }}>
              {s}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─── TESTIMONIAL MARQUEE ──────────────────────────────────────────────────────
function TestimonialCard({ data }) {
  return (
    <Box sx={{
      width: 300, flexShrink:0, p:"24px 22px",
      background:`linear-gradient(150deg, rgba(255,248,230,0.025) 0%, rgba(232,160,32,0.02) 100%)`,
      border:`1px solid ${C.saffronBdr}`,
      borderRadius:"16px",
      display:"flex", flexDirection:"column", gap:2,
    }}>
      <Box sx={{ display:"flex", gap:0.4 }}>
        {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ color:C.saffron, fontSize:10, opacity:0.85 }} />)}
      </Box>
      <Box sx={{ flexGrow:1, position:"relative" }}>
        <FormatQuoteIcon sx={{ color:C.saffron, opacity:0.12, fontSize:36, position:"absolute", top:-8, left:-6 }} />
        <Typography sx={{ color:C.textSub, fontSize:"0.79rem", lineHeight:1.82, fontStyle:"italic", opacity:0.78, pl:"18px" }}>
          "{data.quote}"
        </Typography>
      </Box>
      <Box sx={{ height:1, background:`linear-gradient(90deg, rgba(232,160,32,0.18), transparent)` }} />
      <Box sx={{ display:"flex", alignItems:"center", gap:1.5 }}>
        <Avatar sx={{ width:28, height:28, bgcolor:"rgba(232,160,32,0.1)", color:C.saffron, border:`1px solid rgba(232,160,32,0.28)`, fontFamily:"'Cinzel', serif", fontWeight:700, fontSize:"0.58rem" }}>
          {data.initials}
        </Avatar>
        <Box>
          <Typography sx={{ color:C.text, fontSize:"0.73rem", fontWeight:700 }}>{data.name}</Typography>
          <Typography sx={{ color:C.saffron, fontSize:"0.59rem", opacity:0.48 }}>{data.role} · {data.company}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

function TestimonialMarquee() {
  const items = [...testimonials, ...testimonials];
  return (
    <Box sx={{ overflow:"hidden", position:"relative" }}>
      <Box sx={{ position:"absolute", top:0, left:0,  width:110, height:"100%", background:`linear-gradient(90deg,${C.pepper},transparent)`, zIndex:2 }} />
      <Box sx={{ position:"absolute", top:0, right:0, width:110, height:"100%", background:`linear-gradient(270deg,${C.pepper},transparent)`, zIndex:2 }} />
      <Box sx={{
        display:"flex", gap:"16px", width:"max-content", py:"4px",
        animation:"tmove 60s linear infinite",
        "&:hover":{ animationPlayState:"paused" },
        "@keyframes tmove":{ from:{ transform:"translateX(0)" }, to:{ transform:"translateX(-50%)" } },
      }}>
        {items.map((t, i) => <TestimonialCard key={i} data={t} />)}
      </Box>
    </Box>
  );
}

// ─── GOLD RULE ────────────────────────────────────────────────────────────────
const SpiceRule = ({ my = 7 }) => (
  <Box sx={{ my, height:"1px", background:`linear-gradient(90deg, transparent, ${C.saffronGlow}, transparent)` }} />
);

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function SpiceAlliancesSection() {
  return (
    <Box sx={{ backgroundColor: C.pepper, minHeight:"100vh", py:12 }}>
      {/* Ambient top glow */}
      <Box sx={{ position:"fixed", top:0, left:"50%", transform:"translateX(-50%)", width:"60vw", height:"30vh", background:`radial-gradient(ellipse, rgba(139,26,0,0.18) 0%, transparent 70%)`, pointerEvents:"none", zIndex:0 }} />

      <Container maxWidth="lg" sx={{ position:"relative", zIndex:1 }}>

        {/* ── SECTION HEADER ── */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
          <Box sx={{ mb:10, display:"flex", flexDirection:{ xs:"column", lg:"row" }, justifyContent:"space-between", alignItems:{ lg:"flex-end" }, gap:4 }}>
            <Box>
              <Typography sx={{ color:C.saffron, fontSize:"0.58rem", letterSpacing:"7px", textTransform:"uppercase", opacity:0.65, mb:1.5 }}>
                Trusted by Buyers & Sellers Across India
              </Typography>
              <Typography variant="h2" sx={{ fontFamily:"'Cinzel', serif", fontWeight:700, color:C.text, fontSize:{ xs:"2.2rem", md:"3rem" }, lineHeight:1.18, mb:1.5 }}>
                Where Spice Trade<br />Finds Its Voice
              </Typography>
              <Typography sx={{ color:C.textSub, opacity:0.45, maxWidth:420, fontSize:"0.9rem", lineHeight:1.8 }}>
                We are canvassing agents & brokers in the agri-commodities spice market — initiating trade, quoting live rates, and bridging buyers with sellers across India's finest spice origins.
              </Typography>
            </Box>

            {/* Quick stat pills */}
            <Box sx={{ display:"flex", flexDirection:"column", gap:2, minWidth:220 }}>
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*0.08, duration:0.45 }}>
                  <Box sx={{
                    display:"flex", alignItems:"center", gap:2,
                    px:2.5, py:1.5,
                    bgcolor: C.saffronDim,
                    border:`1px solid ${C.saffronBdr}`,
                    borderRadius:"12px",
                  }}>
                    <Box sx={{ color:C.saffron, opacity:0.55 }}>{s.icon}</Box>
                    <Box>
                      <Typography sx={{ fontFamily:"'Cinzel', serif", fontWeight:800, color:C.saffron, fontSize:"1.1rem", lineHeight:1 }}>{s.val}</Typography>
                      <Typography sx={{ color:C.textSub, fontSize:"0.6rem", textTransform:"uppercase", letterSpacing:"2px", opacity:0.38 }}>{s.label}</Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* ── SPICE TICKER ── */}
        <SpiceTicker />

        <SpiceRule my={7} />

        {/* ── TESTIMONIALS ── */}
        <Box sx={{ mb:2 }}>
          <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", mb:5, flexWrap:"wrap", gap:2 }}>
            <Box>
              <Typography sx={{ color:C.saffron, fontSize:"0.58rem", letterSpacing:"5px", textTransform:"uppercase", opacity:0.45, mb:1 }}>
                What the Trade Says
              </Typography>
              <Typography sx={{ fontFamily:"'Cinzel', serif", fontWeight:700, color:C.text, fontSize:{ xs:"1.1rem", md:"1.4rem" } }}>
                Buyers & Sellers Speak
              </Typography>
            </Box>
            <Typography sx={{ color:C.textSub, fontSize:"0.6rem", opacity:0.2, letterSpacing:"2px", textTransform:"uppercase" }}>
              Hover to pause
            </Typography>
          </Box>
          <TestimonialMarquee />
        </Box>

        <SpiceRule my={8} />

        {/* ── CLOSING CTA BANNER ── */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
          <Box sx={{
            p:{ xs:"44px 28px", md:"60px 64px" },
            border:`1px solid rgba(232,160,32,0.16)`,
            borderRadius:"32px",
            background:`radial-gradient(ellipse at 30% 0%, rgba(139,26,0,0.45) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(232,160,32,0.04) 0%, transparent 50%), ${C.bark}`,
            display:"flex", flexDirection:{ xs:"column", md:"row" }, alignItems:"center", justifyContent:"space-between", gap:6,
            position:"relative", overflow:"hidden",
          }}>
            {/* Decorative rings */}
            <Box sx={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", border:`1px solid rgba(232,160,32,0.06)`, pointerEvents:"none" }} />
            <Box sx={{ position:"absolute", top:-100, right:-100, width:320, height:320, borderRadius:"50%", border:`1px solid rgba(232,160,32,0.03)`, pointerEvents:"none" }} />

            <Box>
              <Typography sx={{ fontFamily:"'Cinzel', serif", fontWeight:700, color:C.text, fontSize:{ xs:"1.4rem", md:"1.9rem" }, lineHeight:1.25, mb:1.5 }}>
                Looking to Buy or Sell Spices?
              </Typography>
              <Typography sx={{ color:C.textSub, opacity:0.45, fontSize:"0.88rem", lineHeight:1.8, maxWidth:420 }}>
                Whether you're a farmer, FPO, exporter, or bulk buyer — we quote rates, initiate the trade, and close the deal. Reach us today.
              </Typography>
            </Box>

            {/* CTA stat cluster */}
            <Box sx={{ display:"flex", gap:3, flexShrink:0, flexWrap:"wrap", justifyContent:{ xs:"flex-start", md:"flex-end" } }}>
              {[
                { val:"Same Day", label:"Rate Quotes"    },
                { val:"100%",     label:"Broker Integrity"},
              ].map((s, i) => (
                <Box key={i} sx={{ textAlign:"center" }}>
                  <Typography sx={{ fontFamily:"'Cinzel', serif", fontWeight:800, color:C.saffron, fontSize:"1.6rem", lineHeight:1 }}>{s.val}</Typography>
                  <Typography sx={{ color:C.textSub, fontSize:"0.58rem", textTransform:"uppercase", letterSpacing:"2.5px", opacity:0.35, mt:0.5 }}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
}
