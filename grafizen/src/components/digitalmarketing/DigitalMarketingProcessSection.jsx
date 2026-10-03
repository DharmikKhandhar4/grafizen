import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Rocket, TrendingUp } from "lucide-react";

/**
 * DigitalMarketingProcessSection Component
 * Staggered process timeline with clean straight dotted connector lines between cards.
 * - Straight dotted lines connecting Card 1 -> Card 2 -> Card 3 -> Card 4 with matching symmetry.
 * - Color: #dd0403 (Grafizen Crimson Red).
 * - 100% Digital Marketing content.
 */
const processSteps = [
  {
    number: "01",
    phase: "PHASE 1",
    title: " Audience Strategy & Market Research",
    icon: Search,
    description:
      "We analyze target demographics, competitor ad strategies, and buyer pain points to uncover high-intent audience segments for paid social & search ads.",
    pillBg: "bg-[#dd0403] text-white",
    cardBg: "bg-[#dd0403]/5 border-[#dd0403]/15",
    iconBg: "bg-[#dd0403]/10 text-[#dd0403]",
    align: "lg:col-span-6 lg:col-start-1",
  },
  {
    number: "02",
    phase: "PHASE 2",
    title: " Creative Strategy & Funnel Design",
    icon: Palette,
    description:
      "We craft high-converting ad copy, short-form video hooks, and landing page funnels designed to capture attention and motivate instant user action.",
    pillBg: "bg-neutral-900 text-white",
    cardBg: "bg-white border-neutral-200/90",
    iconBg: "bg-neutral-200/80 text-neutral-800",
    align: "lg:col-span-6 lg:col-start-6 lg:mt-3",
  },
  {
    number: "03",
    phase: "PHASE 3",
    title: " Campaign Launch & A/B Testing",
    icon: Rocket,
    description:
      "We deploy multi-channel ad campaigns across Meta & Google Ads, constantly testing ad copy, audience variations, and bidding models to lower customer acquisition cost (CPA).",
    pillBg: "bg-neutral-900 text-white",
    cardBg: "bg-white border-neutral-200/90",
    iconBg: "bg-neutral-200/80 text-neutral-800",
    align: "lg:col-span-6 lg:col-start-2 lg:mt-3",
  },
  {
    number: "04",
    phase: "PHASE 4",
    title: "ROAS Scaling & Revenue Delivery",
    icon: TrendingUp,
    description:
      "We scale winning ad campaign budgets, optimize conversion funnels, and provide transparent real-time analytics to ensure predictable, long-term revenue growth.",
    pillBg: "bg-[#dd0403] text-white",
    cardBg: "bg-[#dd0403]/5 border-[#dd0403]/15",
    iconBg: "bg-[#dd0403]/10 text-[#dd0403]",
    align: "lg:col-span-6 lg:col-start-7 lg:mt-3",
  },
];

const DigitalMarketingProcessSection = () => {
  return (
    <section className="relative w-full bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-28 h-[500px] w-[500px] rounded-full bg-[#dd0403]/5 blur-[130px]" />
        <div className="absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* ── SECTION HEADER ── */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            <span className="h-px w-7 bg-[#dd0403]"></span>
            <span>PROVEN GROWTH METHODOLOGY</span>
          </div>
          <div className="grid grid-cols-2 gap-5 items-end">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Building a Seamless
              <span className="text-[#dd0403]"> Digital Growth Experience</span>
            </h2>
            <p className="mt-4 text-base sm:text-[14px] leading-relaxed text-black/55 font-[300]">
              Beyond just running ad campaigns, we crafted a high-converting
              digital marketing framework that motivates audience action at
              every step—from audience research to scaling continuous ROAS.
            </p>
          </div>
        </div>

        {/* ── STAGGERED PROCESS TIMELINE GRID WITH MATCHING STRAIGHT DOTTED CONNECTORS (#dd0403) ── */}
        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-y-7">
          
          {/* Straight Dotted Connecting Line SVG (#dd0403) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block z-0">
            <svg
              className="h-full w-full"
              fill="none"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
            >
              {/* Straight Line 1 -> 2 (From Card 1 right edge to Card 2 left top) */}
              <line
                x1="490"
                y1="130"
                x2="530"
                y2="265"
                stroke="#dd0403"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeOpacity="0.5"
              />
              {/* Straight Line 2 -> 3 (From Card 2 left edge to Card 3 right top) */}
              <line
                x1="530"
                y1="395"
                x2="490"
                y2="530"
                stroke="#dd0403"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeOpacity="0.5"
              />
              {/* Straight Line 3 -> 4 (From Card 3 right edge to Card 4 left top) */}
              <line
                x1="490"
                y1="660"
                x2="530"
                y2="795"
                stroke="#dd0403"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeOpacity="0.5"
              />
            </svg>
          </div>

          {/* Render Step Cards */}
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative z-10 ${step.align}`}
              >
                <div
                  className={`relative flex items-stretch overflow-hidden rounded-[24px] sm:rounded-[22px] border p-6 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md ${step.cardBg}`}
                >
                  {/* Card Main Body Content */}
                  <div className="flex flex-col justify-center">
                    {/* Icon + Title Row */}
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-10 w-10 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl ${step.iconBg}`}
                      >
                        <IconComponent className="h-5 w-5 sm:h-5 sm:w-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-[400] text-black leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <p className="mt-3 text-xs sm:text-[14px] leading-relaxed text-black/55 font-[300]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingProcessSection;
