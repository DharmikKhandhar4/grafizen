import React from "react";
import DigitalMarketingConsultant from "../../components/digitalmarketingconsltan/DigitalMarketingConsultant";
import PainPointsSection from "../../components/digitalmarketingconsltan/PainPointsSection";
import CoreServicesSection from "../../components/digitalmarketingconsltan/CoreServicesSection";

import ConsultantService from "../../components/digitalmarketingconsltan/ConsultantService";

const MainDigitalMarketingConsultant = () => {
  return (
    <>
      {/* <MainDigitalMarketingConsultant /> */}
      <DigitalMarketingConsultant />
      <ConsultantService />
      <PainPointsSection />
      <CoreServicesSection />
      {/* <Services /> */}
      {/* <ProcessSteps /> */}
    </>
  );
};

export default MainDigitalMarketingConsultant;
