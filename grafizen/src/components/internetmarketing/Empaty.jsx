import React from "react";
import { motion } from "framer-motion";

const painPoints = [
  {
    image: "/internet/Leads.png",
    title: "Traffic is Slow.",
    description: "Excellent products, but the digital world passes you by.",
  },
  {
    image: "/internet/Traffic.png",
    title: "Leads are Rare.",
    description:
      "Quality prospects are hard to find, and your funnel feels weak and frustrating.",
  },
  {
    image: "/internet/Conversions.png",
    title: "Conversions Feel Like Wish Thinking.",
    description: "Clicks are rare, not new customers.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Empaty() {
  return (
    <section className="relative overflow-hidden bg-white py-10 px-4 sm:px-6 sm:py-14 lg:px-10 lg:py-16 text-[#111111]">
      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Eyebrow & Heading Section */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>Digital Challenges</span>
          </div>

          <h2 className="text-[26px] font-[500] leading-[1.08] tracking-[-0.045em] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#111111]">
            Digital Presence Lacking Traction?
            <span className="block text-[#dd0403] mt-1">We Get the Frustration.</span>
          </h2>
        </div>

        {/* Pain Points Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 sm:mt-12 flex overflow-x-auto gap-4 py-2 pb-4 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:overflow-visible sm:py-0 sm:pb-0"
        >
          {painPoints.map(({ image, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-[20px] border border-[#dd0403]/15 bg-white p-4 sm:p-6 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:shadow-[0_16px_32px_rgba(221,4,3,0.1)] flex flex-col items-center text-center w-[270px] xs:w-[290px] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none"
            >
              <div className="md:mb-4 flex h-[90px] sm:h-[150px] w-full items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="h-[80px] sm:h-[140px] w-auto max-w-full object-contain transition-transform duration-300 sm:scale-125 zoom-150
                  sm:zoom-100"
                />
              </div>

              <h3 className="text-[18px] sm:text-[20px] font-[400] leading-snug text-[#111111] group-hover:text-[#dd0403] transition-colors">
                {title}
              </h3>

              <p className="mt-2 text-[13px] sm:text-[14px] font-[300] leading-relaxed text-black/55">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}