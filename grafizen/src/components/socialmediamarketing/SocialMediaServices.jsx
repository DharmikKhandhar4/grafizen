import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import analysis from "../../../public/image/socialmediamarketing/analysis.png";
import promotion from "../../../public/image/socialmediamarketing/promotion.png";
import performanceReview from "../../../public/image/socialmediamarketing/performance-review (1).png";
import socialJustice from "../../../public/image/socialmediamarketing/social-justice.png";
import targetAudience from "../../../public/image/socialmediamarketing/target-audience.png";

const aboutImages = [
  "/image/about/first.png",
  "/image/about/statrgy.png",
  "/image/about/automation.png",
  "/image/about/lead.png",
  "/image/about/audins.png",
];

const services = [
  {
    id: "01",
    image: analysis,
    title: "Multi-Channel Media Buying & Scaling",
    description:
      "We manage and optimize paid campaigns across Meta, Instagram, YouTube, and emerging social platforms — balancing prospecting, retargeting, and scaling for efficient, sustainable growth.",
  },
  {
    id: "02",
    image: promotion,
    title: "Product-Led Campaign Planning",
    description:
      "Social campaigns are aligned with your products, offers, pricing, and promotional cycles to reach the right audience at the right time and maximize campaign performance.",
  },
  {
    id: "03",
    image: performanceReview,
    title: "Smart Automation & Budget Optimization",
    description:
      "Using intelligent automation, we optimize campaign budgets, identify opportunities, reduce wasted spend, and scale high-performing campaigns for consistent growth.",
  },
  {
    id: "04",
    image: socialJustice,
    title: "High-Performance Creative Strategy",
    description:
      "We create scroll-stopping creatives across different campaign stages — combining strong brand storytelling with performance-focused messaging to drive engagement and conversions.",
  },
  {
    id: "05",
    image: targetAudience,
    title: "Advanced Audience Targeting & Segmentation",
    description:
      "Through data-driven insights, we segment and target audiences based on behavior, intent, demographics, and interests to connect your brand with the most relevant users.",
  },
];

export default function SocialMediaServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 text-[#111]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="mb-2.5 sm:mb-3 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
            <span className="h-px w-5 sm:w-7 bg-[#dd0403]" />
            Social Media Marketing Services
          </p>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[40px] lg:text-5xl font-medium tracking-tight text-[#111] leading-[1.2] sm:leading-tight">
            How We Drive{" "}
            <span className="text-[#dd0403]">Social Media Success</span>
          </h2>
        </div>

        {/* 3-Column Split Interactive Layout */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-12 lg:grid-cols-12 items-stretch lg:items-center">
          {/* Left Column: Interactive Selector List */}
          <div className="flex flex-col gap-2 sm:gap-2.5 md:col-span-6 lg:col-span-4">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex items-center justify-between rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-stone-50 border border-stone-200/80 "
                      : "hover:bg-stone-50/60 border border-stone-200/80"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                    {/* <span
                      className={`text-sm font-bold tracking-widest ${
                        isActive ? "text-[#dd0403]" : "text-black/30 group-hover:text-black/60"
                      }`}
                    >
                      {service.id}
                    </span> */}
                    <div className="flex h-7 w-7 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3
                      className={`text-xs xs:text-sm sm:text-[14px] font-[400] transition-colors duration-200 leading-snug ${
                        isActive
                          ? "text-[#111]"
                          : "text-black/50 group-hover:text-black/80"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Red Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLightIndicator"
                      className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-[#dd0403]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Center Column: Dynamic Preview Display Card */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="relative min-h-[240px] xs:min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100/40 p-5 sm:p-6 lg:p-7 shadow-sm flex flex-col justify-between h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Icon & ID */}
                    <div className="mb-3 sm:mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white p-2.5 sm:p-3 shadow-sm border border-stone-200/60">
                        <img
                          src={services[activeIndex].image}
                          alt={services[activeIndex].title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      {/* <span className="text-4xl font-extrabold text-black/10">
                        {services[activeIndex].id}
                      </span> */}
                    </div>

                    {/* Active Title */}
                    <h3 className="mb-2 sm:mb-3 text-lg xs:text-xl sm:text-2xl font-[400] leading-snug sm:leading-tight text-[#111]">
                      {services[activeIndex].title}
                    </h3>

                    {/* Active Description */}
                    <p className="text-xs xs:text-sm sm:text-[14px] leading-relaxed text-black/55 font-[300]">
                      {services[activeIndex].description}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[10px] sm:text-xs font-[300] tracking-wider text-black/40">
                    <span>STRATEGY & EXECUTION</span>
                    {/* <span className="text-[#dd0403]">
                      0{activeIndex + 1} / 0{services.length}
                    </span> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Image Display Card */}
          <div className="md:col-span-12 lg:col-span-3">
            <div className="relative min-h-[220px] xs:min-h-[240px] sm:min-h-[260px] lg:min-h-[300px] overflow-hidden rounded-2xl bg-white  sm:p-4 flex flex-col items-center justify-center text-center md:border md:border-stone-100 md:border-transparent lg:border-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-full w-full"
                >
                  <img
                    src={aboutImages[activeIndex] || "/image/about/first.png"}
                    alt={services[activeIndex].title}
                    className="h-full  xs:max-h-[260px] sm:max-h-[280px] lg:max-h-[320px] w-full rounded-xl object-contain transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
