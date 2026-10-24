"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import SelectionProcedure from "@/components/SelectionProcedure";
import WhyChooseUs from "@/components/WhyChooseUs";
import JobCategories from "@/components/JobCategories";
import TrainingTeaser from "@/components/TrainingTeaser";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  const [sswModalOpen, setSswModalOpen] = useState(false);
  const [companyModalOpen, setCompanyModalOpen] = useState(false);
  const [itModalOpen, setItModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("SSW Caregiver");

  const handleOpenSSWModal = (categoryName?: string) => {
    if (categoryName) {
      setSelectedCategory(categoryName);
    }
    setSswModalOpen(true);
  };

  const handleOpenCompanyModal = () => {
    setCompanyModalOpen(true);
  };

  const handleOpenITModal = () => {
    setItModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#5C3D2E] selection:text-white">
      {/* 1. Navbar with Top Bar, Sticky Glassmorphism & Mobile Drawer */}
      <Navbar
        onOpenSSWModal={handleOpenSSWModal}
        onOpenCompanyModal={handleOpenCompanyModal}
        onOpenITModal={handleOpenITModal}
      />

      {/* 2. Hero Section with 2-Column Layout, Image Collage & Highlight Strip */}
      <Hero
        onOpenSSWModal={() => handleOpenSSWModal("General SSW")}
      />

      {/* 3. About Section: License RL-711, Ministry Approval & Credentials */}
      <AboutSection onOpenCompanyModal={handleOpenCompanyModal} />

      {/* 4. Featured Programs: (a) IT Talents Placement, (b) Japan New Labour Law SSW */}
      <FeaturedPrograms
        onOpenITModal={handleOpenITModal}
        onOpenSSWModal={handleOpenSSWModal}
      />

      {/* 5. Selection Procedure: 6-Step Horizontal Interactive Timeline */}
      <SelectionProcedure />

      {/* 6. Why Choose Us: 6 Core Feature Guarantee Cards with Hover Lift */}
      <WhyChooseUs />

      {/* 7. Job Categories: Interactive Grid with Category Filtering & Direct Application */}
      <JobCategories onSelectCategory={handleOpenSSWModal} />

      {/* 8. Training Teaser: Language Academy & Technical Trade Testing */}
      <TrainingTeaser onOpenSSWModal={handleOpenSSWModal} />

      {/* 9. Final CTA Banner: Solid Royal Blue #5C3D2E with White Title & Saffron Button */}
      <CTABanner onOpenSSWModal={() => handleOpenSSWModal("General SSW")} />

      {/* 10. Contact Section: Direct Office Information & Dual-Audience Inquiry Form */}
      <ContactSection />

      {/* 11. Footer: Light Theme (#F7F3EC), Address, License RL-711 & Legal Disclaimers */}
      <Footer
        onOpenSSWModal={handleOpenSSWModal}
        onOpenCompanyModal={handleOpenCompanyModal}
        onOpenITModal={handleOpenITModal}
      />

      {/* Interactive Modals: SSW Registration, Company Overview & IT Talent */}
      <Modals
        sswModalOpen={sswModalOpen}
        onCloseSSWModal={() => setSswModalOpen(false)}
        selectedCategory={selectedCategory}
        companyModalOpen={companyModalOpen}
        onCloseCompanyModal={() => setCompanyModalOpen(false)}
        itModalOpen={itModalOpen}
        onCloseITModal={() => setItModalOpen(false)}
      />
    </main>
  );
}
