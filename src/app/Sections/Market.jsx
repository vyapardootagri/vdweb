"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SPICES = [
  "Turmeric","Cumin","Cardamom","Black Pepper","Coriander",
  "Red Chilli","Fenugreek","Mustard","Cloves","Cinnamon",
  "Star Anise","Nutmeg","Ginger","Fennel","Ajwain",
];

const COUNTRIES = [
  { name: "Nepal",      code: "np" },
  { name: "Bangladesh", code: "bd" },
  { name: "Sri Lanka",  code: "lk" },
  { name: "Bhutan",     code: "bt" },
  { name: "UAE",        code: "ae" },
  { name: "Vietnam",    code: "vn" },
];

const FEATURES = [
  { icon: "⚡", label: "48-hr Dispatch",       sub: "Express B2B fulfillment" },
  { icon: "🔍", label: "Quality Assurance",    sub: "Every lot verified before dispatch" },
  { icon: "🏆", label: "Requirement Matching", sub: "Tailored sourcing per company specs" },
  { icon: "📦", label: "Custom Packing",        sub: "White-label & bulk options" },
];

const STAT_CARDS = [
  { value: 100,  suffix: "K+", unit: "Metric Tons",   label: "Indian Network",    desc: "Annual volume procured across 15+ major spice clusters — sourcing, quality checks, and logistics handled end-to-end.", icon: "🏭", gold: true },
  { value: 1000, suffix: "+",  unit: "B2B Partners",  label: "Verified Network",  desc: "Companies trust us to procure to their exact grade, quantity, and packaging requirements.", icon: "🤝" },
  { value: 4,    suffix: "+",  unit: "Export Regions", label: "Cross-Border Reach", desc: "We bridge Indian suppliers with international buyers, managing compliance across every border.", icon: "🌐" },
  { value: 98,   suffix: "%",  unit: "Spec Accuracy",  label: "Requirement Match", desc: "98% of orders fulfilled to the exact quality specification submitted by our client companies.", icon: "📊" },
];

// ── CountUp hook ──────────────────────────────────────────────────────────────
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = end / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end, duration]);
  return { count, ref };
}

// ── Fade-up wrapper ───────────────────────────────────────────────────────────
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
export default function VyaparDootStats() {
  return (
    <section className="vd-section">

      {/* Dot grid bg */}
      <div className="vd-dotgrid" />
      {/* Soft glow */}
      <div className="vd-glow" />

      <div className="vd-container">

        {/* ── HEADER ── */}
        <FadeUp className="vd-header">
          <span className="vd-overline">Market Infrastructure</span>
          <h2 className="vd-h2">
            Dominating the <em className="vd-gold-text">Domestic</em> Core.<br />
            Fueling <span className="vd-underline">Global</span> Demand.
          </h2>
          <p className="vd-lead">
            We act as your trusted procurement partner — sourcing, verifying, and
            delivering exactly what your business needs from India's finest spice clusters.
          </p>
        </FadeUp>

        {/* ── SPICE TICKER ── */}
        <div className="vd-ticker-wrap">
          <div className="vd-ticker-fade vd-ticker-fade--left" />
          <div className="vd-ticker-fade vd-ticker-fade--right" />
          <motion.div
            className="vd-ticker-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...SPICES, ...SPICES].map((s, i) => (
              <span key={i} className="vd-ticker-item">
                <span className={`vd-ticker-word${i % 4 === 0 ? " vd-ticker-word--accent" : ""}`}>{s}</span>
                <span className="vd-ticker-dot">◆</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── STAT CARDS ── */}
        <div className="vd-stats-grid">
          {STAT_CARDS.map((card, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <StatCard {...card} />
            </FadeUp>
          ))}
        </div>

        {/* ── FEATURE STRIP ── */}
        <FadeUp delay={0.1}>
          <div className="vd-features">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                className={`vd-feature-item${i < FEATURES.length - 1 ? " vd-feature-item--bordered" : ""}`}
                whileHover={{ background: "#fffdf7" }}
              >
                <span className="vd-feature-icon">{f.icon}</span>
                <span className="vd-feature-label">{f.label}</span>
                <span className="vd-feature-sub">{f.sub}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* ── EXPORT SECTION ── */}
        <FadeUp delay={0.12}>
          <div className="vd-export">

            {/* Left copy */}
            <div className="vd-export-copy">
              <span className="vd-overline">Export Alliances</span>
              <h3 className="vd-h3">We Procure.<br />You Receive.</h3>
              <p className="vd-export-body">
                Companies across South Asia and the Middle East rely on us as their
                dedicated procurement arm — we match their exact spice requirements
                with verified Indian suppliers, handling everything in between.
              </p>
              <div className="vd-badge">
                <span className="vd-badge-dot" />
                <span className="vd-badge-text">Your Procurement Partner</span>
              </div>
            </div>

            {/* Right flags */}
            <div className="vd-flags-col">
              <p className="vd-flags-label">Active Trade Corridors</p>
              <div className="vd-flags-grid">
                {COUNTRIES.map((c, i) => (
                  <motion.div
                    key={c.name}
                    className="vd-flag-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.32, delay: i * 0.06 }}
                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(184,134,11,0.13)" }}
                  >
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      alt={c.name}
                      className="vd-flag-img"
                    />
                    <span className="vd-flag-name">{c.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </FadeUp>

        {/* ── BOTTOM MARQUEE ── */}
        <div className="vd-marquee-wrap">
          <motion.div
            className="vd-marquee-track"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="vd-marquee-item">
                Vyapar Doot Spices
                <span className="vd-marquee-star">✦</span>
              </span>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ── ALL STYLES ── */}
      <style>{`
        /* ── Base ── */
        .vd-section {
          background: #faf8f4;
          color: #1a1410;
          padding: 72px 0 64px;
          font-family: 'Georgia', serif;
          position: relative;
          overflow: hidden;
        }
        .vd-dotgrid {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.018;
          background-image: radial-gradient(circle, #b8860b 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .vd-glow {
          position: absolute; top: 5%; left: -12%; width: 480px; height: 480px;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(212,175,55,0.07), transparent 70%);
        }
        .vd-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ── Typography helpers ── */
        .vd-overline {
          display: block;
          font-size: 10px; font-family: 'Arial', sans-serif; font-weight: 800;
          letter-spacing: 6px; color: #b8860b; text-transform: uppercase;
          margin-bottom: 0;
        }
        .vd-gold-text { color: #b8860b; font-style: normal; }
        .vd-underline {
          text-decoration: underline;
          text-decoration-color: #d4af37;
          text-decoration-thickness: 2px;
          text-underline-offset: 6px;
        }

        /* ── Header ── */
        .vd-header { margin-bottom: 56px; }
        .vd-h2 {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(1.9rem, 7vw, 4rem);
          font-weight: 900; line-height: 1.1;
          margin: 14px 0 18px;
          color: #1a1410;
        }
        .vd-lead {
          color: #7a6a55; font-size: clamp(0.95rem, 3vw, 1.1rem);
          max-width: 520px; line-height: 1.8; margin: 0;
        }

        /* ── Ticker ── */
        .vd-ticker-wrap {
          margin-bottom: 56px; overflow: hidden; position: relative;
        }
        .vd-ticker-fade {
          position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2;
        }
        .vd-ticker-fade--left  { left: 0;  background: linear-gradient(90deg, #faf8f4, transparent); }
        .vd-ticker-fade--right { right: 0; background: linear-gradient(270deg, #faf8f4, transparent); }
        .vd-ticker-track { display: flex; white-space: nowrap; }
        .vd-ticker-item {
          display: inline-flex; align-items: center; gap: 16px; padding: 0 20px;
        }
        .vd-ticker-word {
          font-size: 11px; font-family: 'Arial', sans-serif; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(26,20,16,0.18);
        }
        .vd-ticker-word--accent { color: #b8860b; }
        .vd-ticker-dot { color: rgba(184,134,11,0.25); font-size: 7px; }

        /* ── Stat cards grid ── */
        .vd-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        /* ── Stat card ── */
        .vd-stat-card {
          background: #fff;
          border: 1px solid rgba(184,134,11,0.12);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          cursor: default;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .vd-stat-card--gold {
          background: linear-gradient(145deg, #fffbf0, #fff8e6);
          border-color: rgba(184,134,11,0.3);
        }
        .vd-stat-glow {
          position: absolute; top: -28px; right: -28px;
          width: 90px; height: 90px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(212,175,55,0.13), transparent);
        }
        .vd-stat-icon  { font-size: 22px; margin-bottom: 14px; }
        .vd-stat-label {
          font-size: 9px; font-family: 'Arial', sans-serif; font-weight: 800;
          letter-spacing: 3px; color: #b8860b; text-transform: uppercase;
          margin-bottom: 6px;
        }
        .vd-stat-number-row { display: flex; align-items: baseline; gap: 1px; margin-bottom: 3px; }
        .vd-stat-number {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2rem, 6vw, 3.4rem);
          font-weight: 900; line-height: 1; color: #1a1410;
        }
        .vd-stat-suffix {
          font-size: clamp(1rem, 3vw, 1.6rem);
          font-weight: 900; color: #b8860b;
        }
        .vd-stat-unit {
          font-size: 0.7rem; font-family: 'Arial', sans-serif;
          font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #b8a898; margin-bottom: 14px;
        }
        .vd-stat-divider {
          width: 26px; height: 1.5px;
          background: rgba(184,134,11,0.3); border-radius: 2px;
          margin-bottom: 12px;
        }
        .vd-stat-desc {
          color: #7a6a55; line-height: 1.65; font-size: 0.82rem; margin: 0;
        }

        /* ── Feature strip ── */
        .vd-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(184,134,11,0.15);
          background: #fff;
          margin-bottom: 14px;
        }
        .vd-feature-item {
          padding: 26px 22px;
          transition: background 0.25s;
        }
        .vd-feature-item--bordered {
          border-right: 1px solid rgba(184,134,11,0.1);
        }
        .vd-feature-icon  { font-size: 22px; display: block; margin-bottom: 10px; }
        .vd-feature-label { font-weight: 800; font-size: 0.9rem; color: #1a1410; display: block; margin-bottom: 4px; }
        .vd-feature-sub   { color: #9a8a75; font-size: 0.78rem; line-height: 1.5; display: block; }

        /* ── Export section ── */
        .vd-export {
          background: #fff;
          border: 1px solid rgba(184,134,11,0.15);
          border-radius: 18px;
          padding: 36px 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .vd-h3 {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(1.4rem, 4vw, 2.1rem);
          font-weight: 900; margin: 12px 0 12px;
          line-height: 1.2; color: #1a1410;
        }
        .vd-export-body {
          color: #7a6a55; line-height: 1.85;
          font-size: clamp(0.85rem, 2.5vw, 0.92rem);
          margin: 0 0 24px;
        }
        .vd-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fdf9f0; border: 1px solid rgba(184,134,11,0.25);
          border-radius: 99px; padding: 8px 16px;
        }
        .vd-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #b8860b; display: inline-block;
          box-shadow: 0 0 0 3px rgba(184,134,11,0.2);
        }
        .vd-badge-text {
          color: #b8860b; font-size: 0.75rem;
          font-weight: 800; letter-spacing: 1px;
          font-family: 'Arial', sans-serif;
        }
        .vd-flags-col {}
        .vd-flags-label {
          color: #9a8a75; font-size: 0.72rem; font-family: 'Arial', sans-serif;
          font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          margin: 0 0 16px;
        }
        .vd-flags-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .vd-flag-card {
          display: flex; flex-direction: column; align-items: center;
          gap: 8px; padding: 16px 8px;
          background: #faf8f4;
          border: 1px solid rgba(184,134,11,0.12);
          border-radius: 12px; cursor: default;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .vd-flag-img {
          width: 40px; height: 27px;
          object-fit: cover; border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .vd-flag-name {
          font-size: 0.7rem; font-family: 'Arial', sans-serif;
          font-weight: 700; color: #4a3a2a; text-align: center;
        }

        /* ── Bottom marquee ── */
        .vd-marquee-wrap {
          margin-top: 64px;
          border-top: 1px solid rgba(184,134,11,0.1);
          padding-top: 22px;
          overflow: hidden;
        }
        .vd-marquee-track { display: flex; white-space: nowrap; }
        .vd-marquee-item {
          display: inline-flex; align-items: center; gap: 16px; padding: 0 24px;
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(0.8rem, 2vw, 1.1rem);
          font-weight: 900; color: rgba(184,134,11,0.18);
          text-transform: uppercase; letter-spacing: 4px;
        }
        .vd-marquee-star { color: rgba(184,134,11,0.15); font-size: 8px; }

        /* ════════════════════════════════════════════
           TABLET  (≥ 640px)
        ════════════════════════════════════════════ */
        @media (min-width: 640px) {
          .vd-container { padding: 0 32px; }
          .vd-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .vd-features   { grid-template-columns: repeat(4, 1fr); }
          .vd-feature-item--bordered { border-right: 1px solid rgba(184,134,11,0.1); }
          /* Remove the 2-col border quirk on mobile */
          .vd-feature-item:nth-child(2) { border-right: none; }
        }

        /* ════════════════════════════════════════════
           DESKTOP  (≥ 960px)
        ════════════════════════════════════════════ */
        @media (min-width: 960px) {
          .vd-section { padding: 100px 0 80px; }
          .vd-container { padding: 0 40px; }
          .vd-header { margin-bottom: 80px; }
          .vd-ticker-wrap { margin-bottom: 80px; }
          .vd-stats-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 20px; }
          .vd-features { margin-bottom: 20px; }
          .vd-feature-item:nth-child(2) { border-right: 1px solid rgba(184,134,11,0.1); }
          .vd-export { padding: 52px; gap: 64px; }
          .vd-flags-grid { gap: 12px; }
          .vd-flag-img { width: 46px; height: 31px; }
        }

        /* ════════════════════════════════════════════
           MOBILE ONLY  (< 640px) overrides
        ════════════════════════════════════════════ */
        @media (max-width: 639px) {
          .vd-export {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 28px 22px;
          }
          /* Feature strip: 2-col on mobile, remove right borders on col 2 */
          .vd-feature-item:nth-child(even) { border-right: none !important; }
          .vd-feature-item:nth-child(1),
          .vd-feature-item:nth-child(2) {
            border-bottom: 1px solid rgba(184,134,11,0.1);
          }
          .vd-flags-grid { grid-template-columns: repeat(3, 1fr); }
          .vd-stat-card { padding: 22px 18px; }
        }
      `}</style>
    </section>
  );
}

// ── Stat Card component ───────────────────────────────────────────────────────
function StatCard({ value, suffix, unit, label, desc, icon, gold }) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      className={`vd-stat-card${gold ? " vd-stat-card--gold" : ""}`}
      whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(184,134,11,0.1)" }}
      transition={{ type: "spring", stiffness: 280 }}
    >
      {gold && <div className="vd-stat-glow" />}
      <span className="vd-stat-icon">{icon}</span>
      <span className="vd-stat-label">{label}</span>
      <div className="vd-stat-number-row">
        <span className="vd-stat-number">{count}</span>
        <span className="vd-stat-suffix">{suffix}</span>
      </div>
      <span className="vd-stat-unit">{unit}</span>
      <div className="vd-stat-divider" />
      <p className="vd-stat-desc">{desc}</p>
    </motion.div>
  );
}