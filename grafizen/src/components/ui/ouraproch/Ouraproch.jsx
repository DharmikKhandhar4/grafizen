import React from "react";
import { ArrowRight } from "lucide-react";
import first from "../../../../public/image/componentsimage/first.png";
import threed from "../../../../public/image/componentsimage/threed.png";
import second from "../../../../public/image/componentsimage/second.png";

const steps = [
  {
    number: "01",
    image: first,
    title: "Strategy First",
    description:
      "We understand your brand, audience, and goals before creating a content direction that works.",
  },
  {
    number: "02",
    image: second,
    title: "Creative & Consistent",
    description:
      "We design high-quality content that represents your brand and keeps your audience engaged.",
  },
  {
    number: "03",
    image: threed,
    title: "Measure & Improve",
    description:
      "We track performance, analyze results, and continuously improve your social media presence.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className=" grid  grid-cols-2 items-end ">
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 rounded-full bg-[#dd0403]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-700 sm:text-[11px]">
                Our Approach
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-[48px]">
              Strategy. Creativity.
              <span className="block text-[#dd0403]">Consistency. Growth.</span>
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[#555048] sm:text-lg">
            A focused growth process built around clarity, creative execution,
            and measurable progress.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 lg:mt-10">
          {/* Desktop connecting lines */}
          <div className="pointer-events-none absolute inset-x-[12%] top-8 hidden lg:block">
            {/* <svg
              viewBox="0 0 1000 100"
              className="h-24 w-full overflow-visible"
              fill="none"
            >
              <path
                d="M -60 35 C 160 -105, 290 85, 360 35"
                stroke="#dd0403"
                strokeWidth="2"
                strokeDasharray="7 8"
                opacity="0.3"
              />
              <path
                d="M 390 35 C 800 -65,600 15, 800 105"
                stroke="#dd0403"
                strokeWidth="2"
                strokeDasharray="7 8"
                opacity="0.3"
              />
            </svg> */}
            <div></div>
          </div>

          <div className="relative grid gap-14 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => {
              return (
                <div
                  key={step.number}
                  className={`relative ${
                    index === 1
                      ? "lg:translate-y-15"
                      : "" || index === 2
                        ? "lg:translate-y-30"
                        : ""
                  }`}
                >
                  {/* Card */}
                  <div className="group relative">
                    {/* Icon box */}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl   transition-all duration-300 group-hover:-translate-y-2 ">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-contain rounded-2xl"
                      />

                      {/* Step number */}
                      <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gray-950 text-[10px] font-bold text-white">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-7 max-w-sm">
                      <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile arrow */}
                    {index < steps.length - 1 && (
                      <div className="mt-8 flex items-center lg:hidden">
                        <div className="h-px flex-1 bg-gray-200" />
                        <div className="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#dd0403]/20">
                          <ArrowRight size={15} className="text-[#dd0403]" />
                        </div>
                        <div className="h-px flex-1 bg-gray-200" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / statement */}
        <div className="mt-20 border-t border-gray-100 pt-8 lg:mt-28">
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
        </div>
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
