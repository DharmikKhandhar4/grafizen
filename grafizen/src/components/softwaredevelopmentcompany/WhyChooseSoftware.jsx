import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users2, Trophy } from "lucide-react";

const reasons = [
 {
  id: "agile",
  title: "Agile Sprint Delivery",
  description:
    "Two-week development cycles with total progress transparency and continuous delivery.",

  // Card tilt and translation like in image
  rotation: "-rotate-6",
  hoverRotation: "-rotate-2",
  translateY: "lg:-translate-y-4",
  translateX: "-translate-x-4",

  // 3D Top Badge Sphere colors
  topOrbGradient: "from-[#dd0403] to-[#a90302]",
  topOrbShadow: "shadow-[0_8px_16px_rgba(221,4,3,0.35)]",

  // Pastel Inner Card Background
  cardBg: "bg-[#fef2f2]", // Soft pastel red
  cardBorder: "border-[#fecaca]",
  icon: Zap,
  iconColor: "text-[#dd0403]",
  iconBg: "bg-[#fecaca]/60",
},
  {
    id: "security",
    title: "Enterprise Security Standards",
    description:
      "Built-in compliance with ISO 27001, GDPR, SOC 2, and end-to-end encryption protocols.",
    rotation: "rotate-6",
    hoverRotation: "rotate-2",
    translateY: "lg:translate-y-6",
    translateX: "translate-x-4",
    topOrbGradient: "from-[#dd0403] to-[#a90302]",
    topOrbShadow: "shadow-[0_8px_16px_rgba(221,4,3,0.35)]",
    cardBg: "bg-[#fef2f2]", // Soft pastel purple
    cardBorder: "border-[#f3e8ff]",
    icon: ShieldCheck,
    iconColor: "text-[#dd0403]",
  iconBg: "bg-[#fecaca]/60",
  },
  {
    id: "engagement",
    title: "Flexible Engagement Models",
    description:
      "Scale your project with dedicated engineering teams, project-based contracts, or staff augmentation.",
    rotation: "-rotate-3",
    hoverRotation: "md:rotate-0 -rotate-3",
    translateY: "lg:translate-y-2",
    translateX: "-translate-x-4",
    topOrbGradient: "from-[#dd0403] to-[#a90302]",
    topOrbShadow: "shadow-[0_8px_16px_rgba(221,4,3,0.35)]",
    cardBg: "bg-[#fef2f2]", // Soft pastel pink
    cardBorder: "border-[#fce7f3]",
    icon: Users2,
iconColor: "text-[#dd0403]",
  iconBg: "bg-[#fecaca]/60",
  },
  {
    id: "track-record",
    title: "Proven Track Record",
    description:
      "99.8% on-time deployment rate with proactive post-launch maintenance and technical support.",
    rotation: "rotate-4",
    hoverRotation: "rotate-2",
    translateY: "lg:translate-y-12",
    translateX: "translate-x-4",
    topOrbGradient: "from-[#dd0403] to-[#a90302]",
    topOrbShadow: "shadow-[0_8px_16px_rgba(221,4,3,0.35)]",
    cardBg: "bg-[#fef2f2]", // Soft pastel sky blue
    cardBorder: "border-[#e0f2fe]",
    icon: Trophy,
  iconColor: "text-[#dd0403]",
  iconBg: "bg-[#fecaca]/60",
  },
];

export default function WhyChooseSoftware() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      
      {/* Background Subtle Gray Horizontal Notebook/Blueprint Lines (Identical to image) */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-around opacity-40">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-full h-px bg-slate-200" />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-[600]  text-black tracking-tight">
            Why <span className="italic text-[#dd0403] ">Choose</span> Grafizen?
          </h2>
          <p className="mt-3 text-[13px] sm:text-base text-black/55 font-[300] leading-relaxed">
            Here's why forward-thinking enterprises choose us to engineer their digital systems:
          </p>
        </div>

        {/* SVG Dashed Connecting Trajectory (Matching reference image dashed lines) */}
        <svg
          className="pointer-events-none absolute top-[280px] left-0 right-0 hidden lg:block w-full h-[500px] -z-0 opacity-60"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 280 80 Q 480 120 700 160 T 320 380 T 720 440"
            stroke="#94a3b8"
            strokeWidth="1.8"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Floating Tilted Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 xl:gap-20 max-w-4xl mx-auto">
          {reasons.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex justify-center ${item.translateY}  ${item.translateX}`}
              >
                {/* Main White Elevated Card with Shadow and Tilt */}
                <div
                  className={`
                    relative w-full max-w-[290px] sm:max-w-[360px]
                    md:rounded-[2rem] rounded-[1.3rem] bg-white p-3 pt-8
                    border border-slate-100
                    shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    transition-all duration-500 ease-out
                    ${item.rotation.replace('rotate', 'sm:rotate')} ${item.hoverRotation}
                    hover:scale-105 hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]
                    cursor-pointer group
                  `}
                >
                  {/* Top 3D Cylinder Button / Sphere (Signature badge from image) */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`
                        w-12 h-12 rounded-full bg-gradient-to-b ${item.topOrbGradient}
                        ${item.topOrbShadow}
                        border-2 border-white
                        flex items-center justify-center
                        transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1
                      `}
                    >
                      {/* 3D Reflection Gloss */}
                      <div className="w-8 h-4 rounded-full bg-white/40 blur-[1px] -mt-4" />
                    </div>
                  </div>

                  {/* Inner Pastel Colored Content Pod */}
                  <div
                    className={`
                      w-full md:rounded-[1.5rem] rounded-[1rem] p-3 sm:p-7
                      ${item.cardBg} border ${item.cardBorder}
                      flex flex-col items-start text-left md:min-h-[220px] justify-between
                      transition-colors duration-300
                    `}
                  >
                    <div>
                      {/* Thematic Icon Badge */}
                      <div
                        className={`
                          w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor}
                          flex items-center justify-center mb-4 shadow-xs
                        `}
                      >
                        <Icon size={20} strokeWidth={2.5} />
                      </div>

                      {/* Title */}
                      <h3 className="md:text-xl text-[19px] font-[400] text-black tracking-tight leading-snug md:mb-3 mb-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-black/55 font-[300] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Subtle bottom detail */}
                    <div className="mt-4 pt-3 w-full border-t border-black/5 flex items-center justify-between text-[11px] font-[300] text-black/55">
                      <span>Enterprise Grade</span>
                      {/* <span className="text-[#dd0403] font-bold">0{idx + 1}</span> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
