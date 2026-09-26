import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Settings2,
  HeadphonesIcon,
  BadgeDollarSign,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WebDevBenefits = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/40 mb-3"
          >
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>Why Choose Grafizen</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-[28px] font-[600] leading-[1.1] tracking-[-0.02em] sm:text-[34px] md:text-[40px] max-w-[500px]"
          >
            Benefits That Set Us{" "}
            <span className="text-[#dd0403]">Apart</span>
          </motion.h2>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* ──────── LEFT: LARGE FEATURED BOX ──────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-sm p-7 sm:p-6 min-h-[270px] flex flex-col justify-between"
          >
            {/* Big stat watermark */}
            {/* <div
              className="pointer-events-none absolute -right-6 -top-6 text-[160px] font-[700] leading-none select-none"
              style={{ color: "rgba(0,0,0,0.03)" }}
            >
              200+
            </div> */}

            {/* Red corner glow */}
            {/* <div
              className="pointer-events-none absolute bottom-0 left-0 h-[220px] w-[220px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at bottom left, rgba(221,4,3,0.08) 0%, transparent 70%)",
              }}
            /> */}

            <div>
       <div className="flex items-start justify-between gap-3">
               <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dd0403]/10">
                  <Code2 size={22} className="text-[#dd0403]" strokeWidth={2} />
                </div>
              {/* Stat */}
              <div className="mb-6 flex flex-col  gap-2">
               <div className="flex items-center gap-1">
                 <span className="text-[48px] font-[700] leading-none text-black">
                  200
                </span>
                <span className="text-[36px] font-[700] leading-none text-[#dd0403]">
                  +
                </span>
               </div>
                <span className="ml-2 text-[12px] font-[400] uppercase tracking-[0.18em] text-black/40">
                  Projects Delivered
                </span>
              </div>
       </div>

              {/* Icon and H3 in one row */}
              <div className="flex  mb-3 mt-6">
                
                <h3 className="text-[20px] font-[400] leading-[1.3] text-black">
                  Technical Excellence That Scales With Your Business
                </h3>
              </div>

              <p className="text-[14px] font-[300] leading-[1.8] text-black/55">
                Our senior engineers bring deep expertise in modern frameworks —
                building fast, secure, and scalable web solutions tailored to
                your goals.
              </p>
            </div>

            {/* Feature pills */}
            {/* <div className="mt-8 flex flex-wrap gap-2">
              {["Clean Code", "Secure Architecture", "High Performance"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-[400] text-black/65"
                  >
                    {pill}
                  </span>
                )
              )}
            </div> */}
          </motion.div>

          {/* ──────── RIGHT: 2×2 BENTO GRID ──────── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Box 1 — (Responsive) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl p-5 sm:p-4 flex flex-col justify-between min-h-[110px] bg-white border border-gray-200/90 shadow-sm"
            >
              <ArrowUpRight
                size={18}
                className="absolute top-5 right-5 text-[#dd0403]"
                strokeWidth={1.5}
              />
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10">
                    <Smartphone size={18} className="text-[#dd0403]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-[400] leading-tight text-black">
                    Responsive by Default
                  </h3>
                </div>
                <p className="text-[12px] font-[300] text-black/65 leading-[1.7]">
                  Every pixel perfected across mobile, tablet & desktop.
                </p>
              </div>
            </motion.div>

            {/* Box 2 — LIGHT GRAY (Modern Tech) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-5 sm:p-4 flex flex-col justify-between min-h-[110px]"
            >
              {/* Accent corner */}
              {/* <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-[#dd0403]/8" /> */}
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10">
                    <Zap size={18} className="text-[#dd0403]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-[400] text-black leading-tight">
                    Modern Tech Stack
                  </h3>
                </div>
                <p className="text-[12px] font-[300] text-black/50 leading-[1.7]">
                  React, Next.js, Node.js, AWS — always future-ready.
                </p>
              </div>
            </motion.div>

            {/* Box 3 — WHITE BORDERED (Custom Solutions) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-sm p-5 sm:p-4 flex flex-col justify-between min-h-[110px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10">
                    <Settings2 size={18} className="text-[#dd0403]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-[400] text-black leading-tight">
                    Fully Custom Solutions
                  </h3>
                </div>
                <p className="text-[12px] font-[300] text-black/55 leading-[1.7]">
                  No templates. No shortcuts. Built exactly for your brand.
                </p>
              </div>
            </motion.div>

            {/* Box 4 — WHITE (Support) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-sm p-5 sm:p-4 flex flex-col justify-between min-h-[110px]"
            >
              {/* Subtle glow */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(221,4,3,0.08) 0%, transparent 70%)",
                }}
              />
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10">
                    <HeadphonesIcon
                      size={18}
                      className="text-[#dd0403]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-[17px] font-[400] text-black leading-tight">
                    24/7 Dedicated Support
                  </h3>
                </div>
                <p className="text-[12px] font-[300] text-black/55 leading-[1.7]">
                  We're always here — post-launch, updates & troubleshooting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── BOTTOM ROW: 2 wide boxes ── */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Affordable Pricing - wide light */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-sm p-5 sm:p-4 flex items-center gap-6"
          >
            <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0403]/10">
              <BadgeDollarSign size={26} className="text-[#dd0403]" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-[18px] font-[400] text-black mb-1">
                Affordable & Transparent Pricing
              </h3>
              <p className="text-[13px] font-[300] text-black/55 leading-[1.7]">
                Maximum value, zero hidden costs. Packages for every stage —
                startup to enterprise.
              </p>
            </div>
          </motion.div>

          {/* SEO + Performance — white wide card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-white border border-gray-200/90 shadow-sm p-4 flex items-center gap-6"
          >
            {/* Watermark text */}
            <div
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[70px] font-[700] leading-none select-none"
              style={{ color: "rgba(0,0,0,0.03)" }}
            >
              SEO
            </div>
            <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0403]/10">
              <Zap size={26} className="text-[#dd0403]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[18px] font-[400] text-black mb-1">
                SEO-Optimized & Blazing Fast
              </h3>
              <p className="text-[13px] font-[300] text-black/55 leading-[1.7]">
                Built with Core Web Vitals in mind — your site ranks higher and
                loads faster from day one.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WebDevBenefits;

