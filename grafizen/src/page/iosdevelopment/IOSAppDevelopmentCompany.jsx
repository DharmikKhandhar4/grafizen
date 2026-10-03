import React from "react";
import IOSAppDevelopmentHero from "../../components/iosdevelopment/IOSAppDevelopmentHero";
import IOSProcessSection from "../../components/iosdevelopment/IOSProcessSection";
import IOSServicesWorks from "../../components/iosdevelopment/IOSServicesWorks";
import IOSPartnershipGrowth from "../../components/iosdevelopment/IOSPartnershipGrowth";

/**
 * IOSAppDevelopmentCompany Page Component
 * Showcasing the high-impact Hero, interactive connected Services & Works,
 * and long-term Partnership & Growth Beyond Launch section.
 */
const IOSAppDevelopmentCompany = () => {
  const handleConsult = () => {
    const contactSection = document.getElementById("contact") || document.getElementById("consultation");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "#contact";
    }
  };

  const handleExplore = () => {
    const servicesSection = document.getElementById("services-works");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── 1. High-Impact iOS App Development Hero Section ── */}
      <IOSAppDevelopmentHero
        onConsultClick={handleConsult}
        onExploreClick={handleExplore}
      />

      {/* ── 2. Interactive Connected Services & Works Section (Matching Reference Layout) ── */}
      {/* ── 2. iOS App Development Process Section ── */}
      <IOSProcessSection />

      {/* ── 3. Interactive Connected Services & Works Section (Matching Reference Layout) ── */}
      <div id="services-works">
        <IOSServicesWorks
          title="Our Services And Works"
          subtitle="Complete end-to-end iOS engineering solutions designed to build scalable, secure, and revenue-driving applications across the Apple ecosystem."
        />
      </div>

      {/* ── 3. Long-Term Partnership & Growth Beyond Launch Section ── */}
      <IOSPartnershipGrowth onContactClick={handleConsult} />
    </div>
  );
};

export default IOSAppDevelopmentCompany;
