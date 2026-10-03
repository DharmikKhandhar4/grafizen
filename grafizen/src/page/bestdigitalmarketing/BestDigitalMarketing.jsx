import React from 'react'
import Hero from "../../components/digitalmarketing/DigitalMarketingHero"
import DigitalMarketingMasterSection from "../../components/digitalmarketing/DigitalMarketingMasterSection";
import DigitalMarketingAiSection from "../../components/digitalmarketing/DigitalMarketingAiSection";
import DigitalMarketingPartnerSection from "../../components/digitalmarketing/DigitalMarketingPartnerSection";

import DigitalMarketingPerformanceGrowthSection from "../../components/digitalmarketing/DigitalMarketingPerformanceGrowthSection";
import DigitalMarketingProcessSection from "../../components/digitalmarketing/DigitalMarketingProcessSection";
const BestDigitalMarketing = () => {
  return (
  <>
    <Hero />
       <DigitalMarketingMasterSection />
        <DigitalMarketingAiSection />
        <DigitalMarketingPartnerSection />
        <DigitalMarketingPerformanceGrowthSection />
        <DigitalMarketingProcessSection />
  </>
  )
}

export default BestDigitalMarketing