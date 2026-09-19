import React from "react";
import EnterpriseHero from "../../components/enterprisesoftware/EnterpriseHero";
import Solutions from "../../components/enterprisesoftware/Solutions"
import EnterpriseOutcomes from "../../components/enterprisesoftware/EnterpriseOutcomes"
import Whychoose from "../../components/enterprisesoftware/WhyChoose"


const MainEnterpriseSoftware = () => {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden selection:bg-[#dd0403] selection:text-white">
      {/* Enterprise Software Hero Section */}
      <EnterpriseHero />
      <Solutions />
      <EnterpriseOutcomes />
      <Whychoose />
    
   
    </main>
  );
};

export default MainEnterpriseSoftware;
