import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Keyword Research and Analysis",
    description:
      "Our team identifies the most relevant and profitable keywords for your business.",
  },
  {
    title: "Campaign Creation and Management",
    description:
      "We set up and manage PPC campaigns across various platforms like Google Ads, and meta ads.",
  },
  {
    title: "Ad Copywriting",
    description:
      "Our team of copywriters creates an ad copy that attracts people to click on your ads and get more conversions.",
  },
  {
    title: "Bid Management",
    description:
      "With years of expertise our team closely looks at your ads and optimizes bid strategies to maximize ad spend efficiency.",
  },
  {
    title: "A/B Testing",
    description:
      "We test different ad variations to determine the most effective approach with the A/B test.",
  },
  {
    title: "Performance Monitoring",
    description:
      "Our team tracks and analyzes the campaign performance to make data-driven decisions.",
  },
  {
    title: "Conversion Tracking ",
    description:
      "PPC experts set up and monitor conversion to measure the effectiveness of your campaigns.",
  },
  {
    title: "Reporting and Analysis ",
    description:
      "Our team provides detailed reports on campaign performance and insights for improvement.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function PpcServices() {
  return (
    <section className="relative overflow-hidden 
    bg-white
     py-16 sm:py-20 lg:py-10">
      {/* Background Soft Glows */}
      {/* <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" /> */}

      <div className="relative mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
           <motion.div
                         
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.2 }}
                         className="mx-auto max-w-4xl text-center"
                       >
                         <motion.p className="mb-5 flex items-center  justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45 text-center"><span className="h-px w-7 bg-[#dd0403] "></span>
                         <span>  PPC ADVERTISING SERVICES  </span>
                         </motion.p>
                       
               
                         <motion.h2
                        
                           className="mt-4 text-[34px] font-medium leading-[1] tracking-[-0.02em] text-[#111] sm:text-[42px] lg:text-[48px]"
                         >
                             
                          Ppc Advertising Services    {" "}
                           <span className="text-[#dd0403]">
                                        in Rajkot
                           </span>
                         </motion.h2>
               
                         <motion.p
                        
                           className="mx-auto mt-3 md:mt-4 max-w-[620px] text-[14px] font-[300] leading-4 text-black/50"
                         >
                      Data-driven PPC strategies, precise audience targeting, and continuous campaign optimization — built to turn your advertising budget into qualified leads, conversions, and measurable business growth.
                         </motion.p>
                       </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group max-h-[150px] relative flex flex-col items-center justify-center rounded-2xl border border-[#dd0403]/10 bg-white p-4 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)] border-b-2 border-b-[#dd0403]"
            >
              {/* Icon Circle */}
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full  bg-[#dd0403]  shadow-md shadow-amber-500/20 transition-transform duration-300 group-hover:scale-110 shrink-0">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 14l5-5-5-5" />
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0b192c] sm:text-xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[12px] text-neutral-500 sm:text-xs leading-tight ">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
