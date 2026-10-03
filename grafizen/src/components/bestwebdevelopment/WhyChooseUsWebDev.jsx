import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  Zap,
  Sparkles,
  Layers,
  Users2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Code2,
} from "lucide-react";

/**
 * WhyChooseUsWebDev Component
 *
 * Layout:
 * - Header: Matching WebDevelopmentExpertise.jsx (Eyebrow + Large Bold Headline on Left, Subtitle on Right)
 * - Main Body:
 *   - Left Side: High-Resolution Web Engineering Visual with ambient crimson glow & floating live badges
 *   - Right Side: 2 Columns of compact, sleek cards (3 in Col 1, 3 in Col 2 = "3 col 3 col" design)
 * - Verbatim content for all 6 reasons, unchanged and unshortened
 */

const col1Reasons = [
  {
    number: "01",
    levelName: "STRATEGY FIRST",
    rawTitle: "Business-First Development",
    title: "Business-First Development",
    description:
      "We understand your goals before writing code, creating websites that support real business objectives and measurable growth.",
    icon: TrendingUp,
    badge: "Business Objectives & Growth",
  },
  {
    number: "02",
    levelName: "MODERN TECH STACK",
    rawTitle: "Modern Technology Stack",
    title: "Modern Technology Stack",
    description:
      "We use modern frameworks and technologies to create fast, secure, scalable, and future-ready web experiences.",
    icon: Cpu,
    badge: "Fast, Secure & Scalable",
  },
  {
    number: "03",
    levelName: "SPEED & STABILITY",
    rawTitle: "Performance That Matters",
    title: "Performance That Matters",
    description:
      "From optimized code to responsive architecture, we build websites engineered for speed, stability, and seamless performance.",
    icon: Zap,
    badge: "Speed & Stability",
  },
];

const col2Reasons = [
  {
    number: "04",
    levelName: "UI/UX & ENGINEERING",
    rawTitle: "Design Meets Development",
    title: "Design Meets Development",
    description:
      "We bring UI/UX design and development together to create intuitive digital experiences that look exceptional and work effortlessly.",
    icon: Sparkles,
    badge: "Intuitive & Effortless",
  },
  {
    number: "05",
    levelName: "ELASTIC ARCHITECTURE",
    rawTitle: "Built To Scale",
    title: "Built To Scale",
    description:
      "Whether you're launching a startup or expanding an established business, our solutions are designed to evolve as you grow.",
    icon: Layers,
    badge: "Designed to Evolve",
  },
  {
    number: "06",
    levelName: "PROCESS & INTEGRITY",
    rawTitle: "Transparent Collaboration",
    title: "Transparent Collaboration",
    description:
      "From the first idea to final launch, we keep communication clear, timelines organized, and you involved throughout the process.",
    icon: Users2,
    badge: "Clear Timelines & Communication",
  },
];

const WhyChooseUsWebDev = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── Background Soft Tech Grid & Ambient Radial Glow (Matching WebDevelopmentExpertise.jsx) ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] [background-size:48px_48px]" /> */}
        {/* <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#dd0403]/6 blur-[150px]" /> */}
        {/* <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#dd0403]/4 blur-[130px]" /> */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* ─── SECTION HEADER (Exact layout & typography from WebDevelopmentExpertise.jsx) ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 ">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[11px] font-[300] uppercase tracking-[0.24em] text-black/55 mb-3">
              <span className="h-px w-8 bg-[#dd0403]"></span>
              <span>Why Choose Us</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-tight text-black leading-[1.12]">
              Why Businesses Choose Us to <br className="hidden sm:inline" />
              <span className="text-[#dd0403]">Build Better Websites</span>
            </h2>
          </div>

          {/* Subtitle / Supporting Paragraph */}
          <p className="mt-4 text-base sm:text-[14px] font-[300] leading-5 text-black/55 max-w-xl">
            We combine strategic thinking, modern technology, and conversion-focused design to
            build websites that don't just look great — they perform, scale, and grow with your
            business.
          </p>
        </div>

        {/* ─── MAIN CONTENT: LEFT IMAGE + RIGHT 3-COL & 3-COL CARDS ─── */}
        <div className="mt-12 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ════════════════════════════════════════════════════════
              1. LEFT SIDE: ENGINEERING VISUAL & FLOATING BADGES
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[460px] lg:max-w-none flex items-center justify-center">
              {/* Soft Ambient Radial Backlight */}
              {/* <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#dd0403]/15 via-red-500/5 to-transparent blur-3xl" /> */}

              {/* Main Illustration / Image */}
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                src="/image/enterpricesoftware/why.png"
                alt="Web Engineering at Grafizen"
                className="relative z-10 w-full max-h-[500px] object-contain "
              />

              {/* Floating Live Badge 1: Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -top-3 left-2 sm:left-4 z-20 rounded-2xl border border-neutral-100 bg-white/95 backdrop-blur-md p-3 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10 text-[#dd0403]">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">Custom Codebase</div>
                  <div className="text-[10px] text-neutral-500 font-light">Zero Tech Debt</div>
                </div>
              </motion.div>

              {/* Floating Live Badge 2: Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-3 right-2 sm:right-4 z-20 rounded-2xl border border-neutral-100 bg-white/95 backdrop-blur-md p-3 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403] text-white shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900">100% Reliable</div>
                  <div className="text-[10px] text-neutral-500 font-light">Enterprise SLA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. RIGHT SIDE: 3-COL & 3-COL SLEEK COMPACT CARDS
          ════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4 items-stretch">
            
            {/* ─── COLUMN 1: Items 01, 02, 03 ─── */}
            <div className="flex flex-col gap-4">
              {col1Reasons.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-2xl bg-white border border-[#dd0403]/25 hover:border-[#dd0403]/60 p-4 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(221,4,3,0.08)] overflow-hidden"
                >
                  {/* Top Red Accent Line (Default Visible) */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dd0403] to-transparent opacity-100" />

                  <div>
                    {/* Title with Brand Accent Numeral by Default */}
                    <h3 className="text-base sm:text-[17px] font-[400] tracking-tight text-black mt-1 leading-snug">
                      <span className="text-[#dd0403]  mr-1.5">{item.title}</span>
                      
                    </h3>

                    {/* Description (Exact verbatim copy) */}
                    <p className="mt-2 text-xs sm:text-[13px] font-[300] leading-5 text-black/55">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ─── COLUMN 2: Items 04, 05, 06 ─── */}
            <div className="flex flex-col gap-4">
              {col2Reasons.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: (idx + 3) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-2xl bg-white border border-[#dd0403]/25 hover:border-[#dd0403]/60 p-4 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(221,4,3,0.08)] overflow-hidden"
                >
                  {/* Top Red Accent Line (Default Visible) */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dd0403] to-transparent opacity-100" />

                  <div>
                    {/* Title with Brand Accent Numeral by Default */}
                    <h3 className="text-base sm:text-[17px] font-[400] tracking-tight text-black mt-1 leading-snug">
                      <span className="text-[#dd0403]  mr-1.5" > {item.title}</span>
                     
                    </h3>

                    {/* Description (Exact verbatim copy) */}
                    <p className="mt-2 text-xs sm:text-[13px]  leading-5 text-black/55 font-[300]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWebDev;
