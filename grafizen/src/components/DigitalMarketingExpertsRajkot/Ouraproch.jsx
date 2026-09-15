import React from "react";
import { ArrowRight } from "lucide-react";
import first from "../../../public/image/componentsimage/first.png";
import threed from "../../../public/image/componentsimage/threed.png";
import second from "../../../public/image/componentsimage/second.png";
import analys from "../../../public/image/analays.png";

const steps = [
  {
    number: "01",
    image: analys,
    title: "Analyze Your Business",
    description:
      "We analyze your brand, audience, and market to find growth opportunities.",
  },
  {
    number: "02",
    image: first,
    title: "Strategy First",
    description:
      "We understand your brand, audience, and goals before creating a content direction that works.",
  },
  {
    number: "03",
    image: second,
    title: "Creative & Consistent",
    description:
      "We design high-quality content that represents your brand and keeps your audience engaged.",
  },
  {
    number: "04",
    image: threed,
    title: "Track & Scale",
    description:
      "Monitoring analytics daily to optimize performance and increase ROI.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-8 min-h-[80vh] lg:py-8">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Heading */}

        <div class="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
          <span class="h-px w-7 bg-[#dd0403]"></span>
          <span> Our Approach</span>
        </div>
        <div className=" grid  md:grid-cols-2 items-end   ">
          <div className="flex flex-col items-start">
            <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-[48px]">
              Our 4-Step
              <span className="block text-[#dd0403]">Growth Framework</span>
            </h2>
            {/* Strategy. Creativity. */}
          </div>

          <p
            className=" mt-4
md:mt-6 md:ml-auto max-w-md text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300] md:text-right"
          >
            A focused growth process built around clarity, creative execution,
            and measurable progress.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-28 lg:mt-16">
          {/* Desktop connecting lines */}
          {/* <div className="pointer-events-none absolute inset-x-[12%] top-8 hidden lg:block">
            <svg
              viewBox="0 0 1000 280"
              className="h-64 w-full overflow-visible"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M -60 24 C 75 20 145 28 205 62 S 295 106 335 103 S 430 108 500 145 S 595 178 665 171 S 765 175 835 213 S 925 237 1000 236"
                stroke="#d8dee5"
                strokeWidth="2"
              />
              <path
                d="M -60 24 C -20 22 20 23 60 26 M 290 100 C 305 102 320 103 335 103 M 630 175 C 645 173 700 172 700 176 M 940 231 C 960 243 925 237 1000 236"
                stroke="#dd0403"
                strokeWidth="2"
              />
              <circle cx="-60" cy="24" r="3" fill="#dd0403" />
              <circle cx="290" cy="100" r="3" fill="#dd0403" />
              <circle cx="630" cy="175" r="3" fill="#dd0403" />
              <circle cx="1000" cy="236" r="3" fill="#dd0403" />
            </svg>
          </div> */}

          <div className="relative grid gap-0 lg:grid-cols-4 lg:gap-10  ">
            {steps.map((step, index) => {
              return (
                <div
                  key={step.number}
                  className={`relative -mt-8 md:mt-0   ${
                    index % 2 === 1 ? "ml-auto lg:ml-0 " : "mr-auto lg:mr-0"
                  } ${index === 1 || index === 3 ? "lg:translate-y-20" : ""}`}
                >
                  <div
                    className={`absolute h-1 w-28 hidden md:flex top-41 left-[250px] rotate-45 ${
                      index === 3 || index === 1
                        ? "opacity-0"
                        : "approach-connector-flow"
                    }`}
                  />
                  <div
                    className={`absolute h-1 w-27  hidden md:flex  top-21 left-[250px] -rotate-45 ${
                      index === 0 || index === 3 || index === 2
                        ? "opacity-0"
                        : "approach-connector-flow"
                    }`}
                  />

                  <div className="relative h-[200px] w-[185px] lg:h-auto lg:w-full lg:max-w-[270px]  -mt-18  md:mt-0  ">
                    <div
                      className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-[#dd0403]/5 px-7 text-center shadow-[0_20px_55px_rgba(221,4,3,0.13)] md:min-h-[250px] md:px-8 md:py-10"
                      style={{
                        clipPath:
                          "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                      }}
                    >
                      <div className="relative md:mb-3 mb-1 flex md:h-16 md:w-16 h-10 w-10  items-center justify-center rounded-full border border-[#dd0403]/25 bg-white shadow-sm overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="md:h-12 md:w-12 h-8 w-8 object-contain"
                        />
                      </div>

                      <h3 className="text-[13px] font-extrabold uppercase leading-tight text-black">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[145px] text-[10px] font-medium leading-snug text-black/60">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile arrow */}
                    {/* {index < steps.length - 1 && (
                      <div className="mt-8 flex items-center lg:hidden">
                        <div className="h-px flex-1 bg-gray-200" />
                        <div className="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#dd0403]/20">
                          <ArrowRight size={15} className="text-[#dd0403]" />
                        </div>
                        <div className="h-px flex-1 bg-gray-200" />
                      </div>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / statement */}
        {/* <div className="mt-20 border-t border-gray-100 pt-8 lg:mt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-gray-500">
              Strategy. Creativity.{" "}
              <span className="text-[#dd0403]">Consistency. Growth.</span>
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-950">
              <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
              Built for sustainable brand growth
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

// import React, { useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// const Ouraproch = () => {
//   const approaches = [
//     {
//       id: 1,
//       icon: '📊',
//       title: 'Strategy First',
//       description: 'We understand your brand, audience, and goals before creating a content direction that works.'
//     },
//     {
//       id: 2,
//       icon: '🎨',
//       title: 'Creative & Consistent',
//       description: 'We design high-quality content that represents your brand and keeps your audience engaged.'
//     },
//     {
//       id: 3,
//       icon: '📈',
//       title: 'Measure & Improve',
//       description: 'We track performance, analyze results, and continuously improve your social media presence.'
//     }
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden py-20 px-4 md:px-8">

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto">

//         {/* Header Section */}
//         <div className="text-center mb-24">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             OUR <span className="text-[#dd0403]">APPROACH</span>
//           </h2>

//           <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8">
//             <span className="text-lg md:text-xl font-semibold text-gray-700">Strategy.</span>
//             <span className="text-lg md:text-xl font-semibold text-[#dd0403]">Creativity.</span>
//             <span className="text-lg md:text-xl font-semibold text-gray-700">Consistency.</span>
//             <span className="text-lg md:text-xl font-semibold text-[#dd0403]">Growth.</span>
//           </div>
//         </div>

//         {/* Process Flow Container */}
//         <div className="relative">
//           {/* Desktop Connecting Lines */}
//           <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
//             {/* Left Line */}
//             <div className="absolute top-0 left-[15%] right-[65%] h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400" style={{backgroundImage: 'repeating-linear-gradient(90deg, #dd0403 0px, #dd0403 10px, transparent 10px, transparent 20px)'}}></div>

//             {/* Right Line */}
//             <div className="absolute top-0 left-[65%] right-[15%] h-0.5 bg-gray-300 border-t-2 border-dashed border-gray-400" style={{backgroundImage: 'repeating-linear-gradient(90deg, #dd0403 0px, #dd0403 10px, transparent 10px, transparent 20px)'}}></div>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
//             {approaches.map((approach, index) => (
//               <div
//                 key={approach.id}
//                 className="group flex flex-col items-start"
//               >
//                 {/* Icon Box */}
//                 <div className="mb-6 flex items-center justify-center w-24 h-24 bg-[#dd0403]/10 border-2 border-[#dd0403] rounded-2xl group-hover:bg-[#dd0403]/20 transition-all duration-300 transform group-hover:scale-110">
//                   <span className="text-5xl">{approach.icon}</span>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                     {approach.title}
//                   </h3>

//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {approach.description}
//                   </p>
//                 </div>

//                 {/* Hover Accent */}
//                 <div className="mt-6 h-1 w-0 bg-[#dd0403] rounded-full group-hover:w-12 transition-all duration-300"></div>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Connecting Lines (Vertical) */}
//           <div className="lg:hidden mt-8 flex flex-col gap-4">
//             <div className="h-8 border-l-2 border-dashed border-[#dd0403] mx-auto"></div>
//             <div className="h-8 border-l-2 border-dashed border-[#dd0403] mx-auto"></div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20">
//           <p className="text-xl text-gray-700 mb-6">
//             Ready to transform your brand with our strategic approach?
//           </p>

//           <button className="inline-flex items-center gap-2 bg-[#dd0403] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#c00302] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
//             <span>Start Your Journey</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ouraproch;
