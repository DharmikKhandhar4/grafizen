import React from "react";
import BestWebDevelopmentHero from "../../components/bestwebdevelopment/BestWebDevelopmentHero";
import WebDevelopmentExpertise from "../../components/bestwebdevelopment/WebDevelopmentExpertise";

import WebDevAboutUs from "../../components/bestwebdevelopment/WebDevAboutUs";
import WhyChooseUsWebDev from "../../components/bestwebdevelopment/WhyChooseUsWebDev";
import DigitalMarketingCreativeAgencySection from "../../components/digitalmarketing/DigitalMarketingCreativeAgencySection";

/**
 * BestWebDevelopmentCompany Page Component
 * Showcasing the newly engineered hero section and dedicated web engineering layout.
 * Showcasing the newly engineered hero section and dynamic web development expertise.
 * Showcasing the newly engineered hero section, dynamic web development expertise,
 * and editorial Why Choose Us section.
 */
const BestWebDevelopmentCompany = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── Bespoke Web Development Hero Section ── */}
      <BestWebDevelopmentHero />

      {/* ── Dynamic Web Development Expertise Section ── */}
      <WebDevelopmentExpertise />
      <WebDevAboutUs />
      <DigitalMarketingCreativeAgencySection />

      {/* ── Premium Editorial Why Choose Us Section ── */}
      <WhyChooseUsWebDev />
    </div>
  );
};

export default BestWebDevelopmentCompany;
