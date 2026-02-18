"use client";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from './components/HeroSection';
import USPSection from './components/USPSection';
import ProductShowcaseSection from './Sections/ProductShowcase';
import ProcurementSection from './Sections/ProcurementSection';
import MarketsWeServe from './Sections/Market';
import TestimonialsSection from './Sections/testimonials';
import CallToActionSection from './Sections/CTAsection';
import AboutUs from './Sections/Aboutus';
import DirectorMessageSection from './Sections/DirectorMessageSection';
import BlogSection from './Sections/BlogSection';

import ContactSection from './Sections/ContactSection';
import InquiryFab from './components/InquiryFab';
import LegacySection from './Sections/Legacy';

// Changed 'page' to 'Page'
export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <LegacySection />
      <USPSection />
      <ProductShowcaseSection />
      <ProcurementSection />
      <MarketsWeServe />
      <AboutUs />
      <DirectorMessageSection />
      <TestimonialsSection />
      <BlogSection />
      <CallToActionSection />
      <ContactSection />
      {/* Persistent floating button */}
      <InquiryFab />
    </div>
  );
}