import React from "react";
import { motion } from "framer-motion";
import { Compass, PenTool, GitBranch, Rocket, Image as ImageIcon } from "lucide-react";

// 4-Step Process Content requested by user
const steps = [
  {
    step: 1,
    number: "1",
    phase: "Gather Requirements",
    title: "Discovery & Architecture",
    description:
      "Defining technical requirements, system design, and project roadmaps.",
    color: "#dd0403", // Fresh Green
    bottomBarColor: "bg-[#dd0403]",
    icon: Compass,
    imagePath: "/image/software/foundetion.png",
    altText: "Discovery and System Architecture",
    tagline: "Define Foundation",
  },
  {
    step: 2,
    number: "2",
    phase: "Interactive UX/UI",
    title: "Design & Prototyping",
    description:
      "Building intuitive wireframes and interactive UI prototypes for validation.",
    color: "#dd0403", // Amber / Orange
   bottomBarColor: "bg-[#dd0403]",
    icon: PenTool,
    imagePath: "/image/software/two.avif",
    altText: "Design and Interactive Prototyping",
    tagline: "Design Semantics",
  },
  {
    step: 3,
    number: "3",
    phase: "Sprint Execution",
    title: "Agile Engineering",
    description:
      "Iterative development, automated testing, and bi-weekly product demos.",
    color: "#dd0403", // Vibrant Coral / Red-Orange
     bottomBarColor: "bg-[#dd0403]",
    icon: GitBranch,
    imagePath: "/image/software/thred.png",
    altText: "Agile Engineering and Testing",
    tagline: "Continuous Sprints",
  },
  {
    step: 4,
    number: "4",
    phase: "Observe / Optimize",
    title: "Deployment & Growth",
    description:
      "Seamless launch, performance optimization, and ongoing 24/7 technical support.",
    color: "#dd0403", // Sky / Tech Blue
     bottomBarColor: "bg-[#dd0403]",
    icon: Rocket,
    imagePath: "/image/software/four.avif",
    altText: "Deployment, Monitoring and Growth",
    tagline: "Global Scale",
  },
];

export default function SoftwareProcessSteps() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          {/* <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#dd0403]">
            <span className="h-px w-6 bg-[#dd0403]" />
            <span>HOW WE WORK</span>
            <span className="h-px w-6 bg-[#dd0403]" />
          </div> */}
          <div class="mb-4 sm:mb-5 flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>HOW WE WORK</span></div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-black leading-tight">
            Our <span className="text-[#dd0403]">4-Step Process</span>
          </h2>

          <p className="mt-4 text-sm sm:text-[14px] text-black/55  leading-relaxed max-w-2xl mx-auto font-[300]">
            A battle-tested agile methodology engineered for transparency,
            speed, and scalable enterprise deployments.
          </p>
        </div>

        {/* Isometric Zig-Zag Process Container */}
        <div className="relative">

          {/* Top Bracket Phases (Matching reference image top brackets) */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mb-8 text-xs font-semibold text-black/50 px-4">
            <div className="col-span-2 border-t-2 border-l-2 border-r-2 border-black/15 rounded-t-lg pt-2 text-center pb-3 uppercase tracking-wider ">
              Phase I: Architecture & UI Validation
            </div>
            <div className="col-span-2 border-t-2 border-l-2 border-r-2 border-black/15 rounded-t-lg pt-2 text-center pb-3 uppercase tracking-wider   ">
              Phase II: Engineering, Deployment & Scale
            </div>
          </div>

          {/* Desktop SVG Connecting Stepper Highway (Zig-Zag Line) */}
          <svg
            className="pointer-events-none absolute top-[90px] left-0 right-0 hidden lg:block w-full h-[180px] -z-0"
            viewBox="0 0 1000 180"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Soft shadow line */}
            <path
              d="M 125 70 L 375 140 L 625 50 L 875 130"
              stroke="#e2e8f0"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Primary Connecting Line */}
            <path
              d="M 125 70 L 375 140 L 625 50 L 875 130"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* ================= MOBILE INFINITE PROCESS ================= */}
<div className="block sm:hidden overflow-hidden -mx-4 md:min-h-[260px]">
  <motion.div
    className="flex w-max mt-2 md:mt-0"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      x: {
        duration: 24,
        ease: "linear",
        repeat: Infinity,
      },
    }}
  >
    {[...steps, ...steps].map((item, idx) => {
      const Icon = item.icon;

      return (
        <div
          key={`${item.step}-${idx}`}
          className="w-[285px] shrink-0 px-2"
        >
          <div className="flex flex-col items-center text-center relative">

            {/* Step Isometric Graphic */}
            <div className="relative w-30 h-30 flex items-center justify-center mb-3 group">

              {/* Diamond Background */}
              <div
                className="absolute inset-2 rounded-3xl border border-black/10 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 shadow-[0_15px_35px_rgba(0,0,0,0.06)] transform rotate-45"
                style={{
                  borderColor: `${item.color}35`,
                }}
              />

              {/* Image / Icon */}
              <div className="relative z-10 h-24 w-24 flex items-center justify-center overflow-hidden p-2">

                <img
                  src={item.imagePath}
                  alt={item.altText}
                  className="w-full h-full object-contain hidden rounded-4xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";

                    const fallback =
                      e.currentTarget.parentElement.querySelector(
                        ".image-placeholder-box"
                      );

                    if (fallback) {
                      fallback.classList.remove("hidden");
                    }
                  }}
                  onLoad={(e) => {
                    e.currentTarget.style.display = "block";

                    const fallback =
                      e.currentTarget.parentElement.querySelector(
                        ".image-placeholder-box"
                      );

                    if (fallback) {
                      fallback.classList.add("hidden");
                    }
                  }}
                />

                {/* Fallback */}
                <div className="image-placeholder-box flex flex-col items-center justify-center gap-1.5 text-center">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                      border: `1.5px solid ${item.color}40`,
                    }}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  <span className="text-[9px] font-mono font-bold tracking-tight text-black/40">
                    {item.tagline}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full bg-neutral-50/70 border border-black/10 rounded-2xl p-5 shadow-[0_8px_25px_rgba(0,0,0,0.03)] flex flex-col items-center text-center md:min-h-[155px] relative overflow-hidden ">

              {/* Title */}
              <h3 className="text-lg font-[400] text-black tracking-tight leading-tight mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs min-h-[58px]  flex items-end text-black/55 font-[300] leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Indicator */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-1 rounded-t-full ${item.bottomBarColor}`}
              />
            </div>
          </div>
        </div>
      );
    })}
  </motion.div>
</div>


{/* ================= TABLET + DESKTOP EXISTING GRID ================= */}
<div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-6 items-start">

  {steps.map((item, idx) => {
    const Icon = item.icon;

    const isEven = idx % 2 === 1;

    return (
      <motion.div
        key={item.step}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: idx * 0.15,
        }}
        className={`flex flex-col items-center text-center relative z-10 transition-transform duration-300 hover:-translate-y-2 ${
          isEven ? "lg:translate-y-12" : "lg:-translate-y-2"
        }`}
      >

        {/* Step Isometric Graphic */}
        <div className="relative w-30 h-30 sm:w-38 sm:h-38 flex items-center justify-center md:mb-6 mb-3 group">

          <div
            className="absolute inset-2 rounded-3xl border border-[#dd0403]/20
bg-gradient-to-br from-[#fff5f5] via-white to-[#fee2e2]
shadow-[0_15px_35px_rgba(221,4,3,0.12)]
transform rotate-45 transition-transform duration-500
group-hover:scale-105 group-hover:rotate-[40deg]"
            style={{
              borderColor: `${item.color}35`,
            }}
          />

          <div className="relative z-10 md:w-28 md:h-28 h-24 w-24 flex items-center justify-center overflow-hidden p-2">

            <img
              src={item.imagePath}
              alt={item.altText}
              className="w-full h-full object-contain hidden rounded-4xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";

                const fallback =
                  e.currentTarget.parentElement.querySelector(
                    ".image-placeholder-box"
                  );

                if (fallback) {
                  fallback.classList.remove("hidden");
                }
              }}
              onLoad={(e) => {
                e.currentTarget.style.display = "block";

                const fallback =
                  e.currentTarget.parentElement.querySelector(
                    ".image-placeholder-box"
                  );

                if (fallback) {
                  fallback.classList.add("hidden");
                }
              }}
            />

            <div className="image-placeholder-box flex flex-col items-center justify-center gap-1.5 text-center">

              <div
                className="md:w-14 md:h-14 w-8 h-8 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${item.color}15`,
                  color: item.color,
                  border: `1.5px solid ${item.color}40`,
                }}
              >
                <Icon size={28} strokeWidth={2} />
              </div>

              <span className="text-[10px] font-mono font-bold tracking-tight text-black/40">
                {item.tagline}
              </span>

            </div>
          </div>
        </div>

        {/* Card */}
        <div className="w-full bg-neutral-50/70 border border-black/10 rounded-2xl p-6 sm:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.03)] flex flex-col items-center text-center justify-between md:min-h-[160px] min-h-[160px] relative overflow-hidden">

          <h3 className="text-lg sm:text-xl font-[400] text-black tracking-tight leading-tight mb-2.5">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-black/55 font-[300] leading-relaxed">
            {item.description}
          </p>

          <div
            className={`absolute bottom-0 left-6 right-6 h-1 rounded-t-full ${item.bottomBarColor}`}
          />
        </div>

      </motion.div>
    );
  })}
</div>

          {/* 4 Process Step Cards Grid */}
       

        </div>

      </div>
    </section>
  );
}
