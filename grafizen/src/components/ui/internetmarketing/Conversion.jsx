import React from "react";

const timeline = [
  {
    // icon: "🚀",
    title: "Skyrocketing Organic Traffic",
    text: "Drive consistent, high-intent local & global visitors via targeted SEO & PPC strategies.",
  },
  {
    // icon: "🎯",
    title: "High-Converting Engaged Audience",
    text: "Turn passive window-shoppers into loyal paying customers with conversion-focused UX & copy.",
  },
  {
    // icon: "📈",
    title: "Measurable ROI & Revenue Growth",
    text: "Stop guessing marketing spend—maximize ROAS and lower acquisition costs.",
  },
  // {
  //   // icon: "🏆",
  //   title: "Unbeatable Local & Market Advantage",
  //   text: "Outperform direct competitors in Rajkot and dominate your industry online.",
  // },
];

export default function Conversion() {
  return (
    <section className="bg-white px-4 py-12 text-black sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-8 grid gap-6 md:grid-cols-2 md:items-start">
         

        
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_1.02fr] lg:items-start">
          <div className="space-y-7">
            <h2 className="max-w-[650px] 
            text-[40px] font-medium leading-[0.96] tracking-[-0.07em] text-black">
              Discover the Unbelievable  Conversion
              <span className="block"> Perks of <span className=" text-[#dd0403]">Partnering With Us</span></span>
              
            </h2>

            <h3 className="max-w-[620px] text-3xl  leading-[0.98] tracking-[-0.06em] text-black/90 ">
              What Real Digital Growth Looks
            Like For Your Business.
            </h3>

            <p className="max-w-[620px] text-[18px]  leading-[1.08]  text-black/80">
              Turn clicks into revenue with
              data-driven strategies tailored
             for Rajkot businesses.
            </p>

        

            <div className="flex items-center gap-4 pt-2">
          
              <span className="
              group inline-flex h-11 items-center gap-3 rounded-full bg-[#dd0403] px-5 text-[13px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303] md:h-12 md:px-6 md:text-[15px]
              ">
                Request a Proposal
              </span>
            
            </div>
          </div>

          <div className="relative pl-2 md:pl-0">
            <div className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[3px] rounded-full bg-[#dd0403]" />

            <div className="space-y-5">
              {timeline.map(({ icon, title, text }, index) => (
                <div key={title} className="relative pl-8">
                  <div className="absolute -left-[8px] top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dd0403] bg-white text-[10px] text-black shadow-[0_0_0_4px_rgba(221,4,3,0.08)]">
                    <span className="block h-2 w-2 rounded-full bg-[#dd0403]" />
                  </div>

                  <div className="rounded-[15px] border border-black/10 bg-white p-3 shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
                    <div className="mb-1   flex items-center gap-3 text-[16px]  font-[500] leading-[1.2] tracking-[-0.05em] text-black">
                      {/* <span>{icon}</span> */}
                      <span>{title}</span>
                    </div>

                    <p className="max-w-[620px] text-[13px leading-[1.2] text-black/55">
                      {text}
                    </p>
                  </div>

                  {/* {index < timeline.length - 1 && (
                    <div className="mt-5 flex items-center pl-2">
                      <div className="h-10 w-[2px] bg-[#dd0403]/70" />
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}