import React from "react";
import { motion } from "framer-motion";
import ai from "../../../public/image/androidapp/aisection.png";

/**
 * DigitalMarketingAiSection Component
 * Next section following the Master Section.
 * Inspired by the 2-column "AI Can Generate... But Can It...?" layout.
 *
 * Theme:
 * - Brand Color: #dd0403 (Grafizen Crimson Red)
 * - Soft blush off-white background (#fef5f7 to #fdf2f4)
 * - Global audience focus (no "India" or "Rajkot")
 * - Zero SEO-related text (pure performance marketing, ads, funnels, and growth)
 */
const DigitalMarketingAiSection = ({
  imageSrc,
  imageAlt = "Digital Marketing Growth Specialists vs AI",
}) => {
  const points = [
    {
      number: "1",
      title: "AI Writes Copy. We Engineer High-Converting Funnels",
      description:
        "AI can generate basic ad copy and ideas, but businesses need predictable, high-converting customer journeys and sustainable unit economics. At Grafizen, we build marketing funnels engineered for real business operations, qualified lead acquisition, and long-term brand equity.",
    },
    {
      number: "2",
      title: "Audience Targeting & Data Optimization Matter",
      description:
        "An ad campaign is never complete without precise demographic targeting, custom conversion tracking, creative A/B testing, and continuous budget optimization. Grafizen provides relentless data-driven management to keep your acquisition costs low and your ROAS consistently high.",
    },
    {
      number: "3",
      title: "Multi-Channel Growth Requires Real Expertise",
      description:
        "Modern scaling brands rely on connected marketing ecosystems. At Grafizen, we develop integrated cross-platform strategies combining Google Performance Max, Meta advertising, viral social storytelling, high-speed landing experiences, and customer retention systems.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── AMBIENT PASTEL GLOWS ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* <div className="absolute -left-28 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dd0403]/5 blur-[120px]" /> */}
        <div className="absolute right-0 top-10 h-[550px] w-[550px] rounded-full bg-rose-200/30 blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-100/35 blur-[110px]" />
      </div>

      {/* Decorative Carousel Dot on Left Margin (Matching reference image) */}
      {/* <div className="pointer-events-none absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 shadow-md">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1.15fr] lg:gap-12 xl:gap-20">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: Illustration / Uploaded Graphic
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient Radial Backlight behind illustration */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-rose-200/40 blur-[100px] sm:h-96 sm:w-96" />
            </div>

            {/* Illustration Container */}
            <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center sm:max-w-[540px] lg:max-w-[580px]">
              <img
                src={ai}
                alt={imageAlt}
                className="h-auto w-full max-h-[520px] object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. RIGHT COLUMN: Pill, Main Headline & Numbered Points
          ════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-center">

            {/* Top Pill Badge (#dd0403 brand colored) */}
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-start"
            >
              <span className="rounded-full bg-[#dd0403] px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-white shadow-sm shadow-[#dd0403]/30 sm:px-5 sm:py-2 sm:text-xs">
                
              </span>
            </motion.div> */}
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span className="h-px w-7 bg-[#dd0403]"></span><span>MORE THAN AI-GENERATED ADS • BUILT BY GROWTH EXPERTS</span></div>

            {/* Main Section Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 text-3xl font-[600] tracking-[-0.03em] text-black sm:text-4xl lg:text-[42px] lg:leading-[1.18]   flex  justify-end"
            >
             AI Creates Ads.{" "}
              <span className="font-[600] text-[#dd0403]">
                We Create Growth.
              </span>
            </motion.h2>

            {/* Numbered Points with Vertical Guide Line */}
            <div className="relative mt-10 flex flex-col gap-8 sm:mt-8 sm:gap-10">

              {/* Vertical connector line */}
              <div
                className="absolute left-[16px] top-6 bottom-6 w-[1.5px] bg-slate-200/80"
                aria-hidden="true"
              />

              {points.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.12 }}
                  className="relative flex items-start gap-5 sm:gap-6"
                >
                  {/* Number Badge Circle */}
                  <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-base font-[800] text-[#1e293b] shadow-md shadow-neutral-900/10 ring-1 ring-black/5 transition-transform duration-300 hover:scale-110">
                    <span className="text-[#dd0403]">{item.number}</span>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-[400] text-black sm:text-md sm:leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] font-[300] sm:leading-5">
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

export default DigitalMarketingAiSection;
