import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Bot,
  Cpu,
  Globe2,
  Handshake,
  Layers,
  MapPin,
  Settings2,
  Shield,
  Sparkles,
  Star,
  Target,
  Zap,
} from "lucide-react";

const industries = [
  {
    label: "Manufacturing",
    icon: Cpu,
    color: "#dd0403",
  },
  {
    label: "E-commerce",
    icon: Globe2,
    color: "#e05c00",
  },
  {
    label: "Healthcare",
    icon: Shield,
    color: "#00897b",
  },
  {
    label: "Education",
    icon: Star,
    color: "#1565c0",
  },
  {
    label: "Real Estate",
    icon: MapPin,
    color: "#6a1b9a",
  },
  {
    label: "Retail",
    icon: Layers,
    color: "#dd0403",
  },
  {
    label: "Hospitality",
    icon: Sparkles,
    color: "#f59e0b",
  },
  {
    label: "B2B Businesses",
    icon: Handshake,
    color: "#0277bd",
  },
  {
    label: "Startups",
    icon: Zap,
    color: "#dd0403",
  },
  {
    label: "Professional Services",
    icon: Settings2,
    color: "#2e7d32",
  },
  {
    label: "Local Businesses",
    icon: Target,
    color: "#c62828",
  },
  {
    label: "Technology",
    icon: Bot,
    color: "#37474f",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, amount: 0.12 };

function IndustryRow({ industries: rowIndustries, x }) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
      <motion.div style={{ x }} className="flex w-max gap-3 px-3">
        {rowIndustries.map((industry, index) => (
          <div
            key={`${industry.label}-${index}`}
            className="group flex shrink-0 cursor-default items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-3 pr-5 shadow-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:bg-[#dd0403]/5 hover:shadow-md"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${industry.color}18`,
                color: industry.color,
              }}
            >
              {React.createElement(industry.icon, {
                size: 13,
                strokeWidth: 2.2,
              })}
            </span>
            <span className="whitespace-nowrap text-xs font-semibold text-neutral-700 transition-colors group-hover:text-[#dd0403]">
              {industry.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function IndustriesSection() {
  const industryRef = useRef(null);
  const { scrollYProgress: industryScroll } = useScroll({
    target: industryRef,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(industryScroll, [0, 1], ["0px", "-220px"]);
  const xRight = useTransform(industryScroll, [0, 1], ["-220px", "0px"]);
  const repeatedIndustries = [...industries, ...industries, ...industries];

  return (
    <section
      ref={industryRef}
      className="relative overflow-hidden bg-white py-16 sm:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="mx-auto max-w-[95%] px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 flex items-end justify-between gap-3"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#dd0403]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dd0403]">
                Industries We Serve
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-[500] tracking-tight text-neutral-950 sm:text-[48px]">
              Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#dd0403]">every</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 60 4"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2 Q15 0 30 2 Q45 4 60 2"
                    stroke="#dd0403"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              business.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-neutral-500 sm:block">
            From manufacturing to tech startups - your industry, your strategy.
          </p>
        </motion.div>
      </div>

      <div className="relative mb-3">
        <IndustryRow industries={repeatedIndustries} x={xLeft} />
      </div>
      <IndustryRow industries={repeatedIndustries} x={xRight} />
    </section>
  );
}

export default IndustriesSection;
