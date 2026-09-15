import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Heart, TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const sessionsData = [
  { name: "Referral", value: 1278, color: "#ef1f2f" },
  { name: "Organic", value: 352, color: "#ff9f43" },
  { name: "Social", value: 623, color: "#2f90ed" },
  { name: "Direct", value: 654, color: "#38b765" },
  { name: "Display", value: 8956, color: "#7328c9" },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function UnifiedDigitalGrowth() {
  const ImageShowcase = () => (
    <div className="group relative my-4 sm:my-6 w-full max-w-[600px] rounded-2xl p-2 sm:p-3 transition-all duration-500 flex justify-center mx-auto">
      <img
        src="/image/about/Unified.png"
        alt="Grafizen digital marketing and technology dashboard"
        className="h-full max-h-[280px] xs:max-h-[320px] sm:max-h-[330px] w-full max-w-[400px] rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="absolute right-0 xs:right-2 -top-4 z-10 flex items-center gap-1.5 sm:gap-2 rounded-xl border border-emerald-100 bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg backdrop-blur-sm sm:right-8 sm:top-3">
        <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
        <div>
          <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-wide text-black/45">
            Return on Ad Spend
          </p>
          <p className="text-xs sm:text-sm font-bold text-emerald-600">
            4.8x ROAS
          </p>
        </div>
      </div>

      <div className="absolute left-0 xs:left-2 top-2 sm:top-6 z-10 flex items-center gap-1.5 sm:gap-2 rounded-xl border border-rose-100 bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg backdrop-blur-sm sm:left-2">
        <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-rose-500 text-rose-500" />
        <div>
          <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-wide text-black/45">
            Engagement Rate
          </p>
          <p className="text-xs sm:text-sm font-bold text-rose-500">+312%</p>
        </div>
      </div>

      <div className="absolute md:-right-1 xs:right-0 md:bottom-12 right-1 bottom-29 z-10 flex items-center gap-1.5 sm:gap-2 rounded-xl border border-sky-100 bg-white/95 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg backdrop-blur-sm sm:-right-8 sm:bottom-12">
        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-sky-500 p-0.5 text-white" />
        <div>
          <p className="text-[8px] sm:text-[9px] font-medium uppercase tracking-wide text-black/45">
            Qualified Leads
          </p>
          <p className="text-xs sm:text-sm font-bold text-sky-600">2,450+</p>
        </div>
      </div>

      <div className="absolute -bottom-2 md:left-1/2 left-26 -translate-x-1/2 xs:left-2 xs:translate-x-0 z-10 flex w-[200px] xs:w-[270px] items-center gap-1.5 sm:gap-2 rounded-xl border border-stone-200 bg-white/90 backdrop-blur-md p-1.5 sm:p-2 shadow-lg sm:left-4">
        <div className="relative h-[100px] w-[100px] sm:h-[122px] sm:w-[122px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sessionsData}
                dataKey="value"
                nameKey="name"
                innerRadius={32}
                outerRadius={48}
                paddingAngle={1}
                stroke="none"
              >
                {sessionsData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs sm:text-[17px] font-bold leading-none text-[#111]">
              11,863
            </span>
            <span className="mt-0.5 text-[8px] sm:text-[9px] text-black/60">
              Sessions
            </span>
          </div>
        </div>

        <div className="space-y-0.5 sm:space-y-1 text-[9px] sm:text-[10px] leading-3 sm:leading-4">
          {sessionsData.map((entry) => (
            <div
              key={entry.name}
              className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <span
                className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-black/75">
                {entry.name} - {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CTAButton = () => (
    <a
      href="https://grafizen.com/contact-us"
      className="flex items-center gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bs-grafizen text-white text-sm sm:text-base font-semibold rounded-[10px] md:rounded-xl shadow-md shadow-orange-500/20 bg-[#dd0403] w-fit"
    >
      <span>Build Your Growth System</span>
      <span className="text-base">
        <ArrowRight />
      </span>
    </a>
  );

  return (
    <section className="relative bg-white py-10 sm:py-16 lg:py-16 text-[#111] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        
        {/* ==========================================
            MOBILE & TABLET VIEW (< lg)
            Order: Tag -> Heading -> Image -> Content -> Button
        ========================================== */}
        <div className="flex flex-col lg:hidden space-y-6">
          {/* 1. Category Tag */}
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
            <span className="h-px w-6 bg-[#dd0403]" />
            <span>End-to-End Digital Marketing</span>
          </div>

          {/* 2. Main Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-[#111]">
            Turn Your Online Presence Into a{" "}
            <span className="font-semibold text-[#dd0403]">
              Lead-Generating System
            </span>
          </h2>

          {/* 3. Image Showcase */}
          <ImageShowcase />

          {/* 4. Content (Narrative + Feature Bullets) */}
          <div className="space-y-6 pt-2">
            <p className="text-xs xs:text-sm sm:text-base pl-2  md:pl-0  leading-relaxed text-black/60 font-[300]">
              Bring your brand, marketing, technology, and customer experience
              together through a unified strategy engineered to create
              measurable business growth.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-stone-200 md:pl-4 pl-2 transition-colors duration-300 hover:border-[#dd0403]">
                <h3 className="text-sm sm:text-base font-bold text-[#111]">
                  Stop Wasting Ad Spend
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-black/60 max-w-md">
                  If your current presence isn’t building visibility or scaling
                  leads, it's time to align creativity with performance.
                </p>
              </div>

              <div className="border-l-2 border-stone-200 md:pl-4 pl-2 transition-colors duration-300 hover:border-[#dd0403]">
                <h3 className="text-sm sm:text-base font-bold text-[#111]">
                  Active Community Engagement
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-black/60 max-w-md">
                  We don't just post photos—we interact with your audience, reply
                  to comments, and build an active online community around your
                  brand.
                </p>
              </div>
            </div>
          </div>

          {/* 5. CTA Button Last */}
          <div className="pt-2">
            <CTAButton />
          </div>
        </div>

        {/* ==========================================
            DESKTOP / LAPTOP VIEW (>= lg)
            100% Unchanged original grid layout
        ========================================== */}
        <div className="hidden lg:block">
          {/* Header Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
                <span className="h-px w-7 bg-[#dd0403]" />
                <span>End-to-End Digital Marketing</span>
              </div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-[#111] sm:text-4xl lg:text-[48px]"
              >
                Turn Your Online Presence Into a{" "}
                <span className="font-semibold text-[#dd0403]">
                  Lead-Generating System
                </span>
              </motion.h2>
            </div>

            <motion.div variants={fadeUp} className="lg:col-span-5">
              <p className="max-w-[570px] text-[14px] font-[300] leading-5 text-black/55">
                Bring your brand, marketing, technology, and customer experience
                together through a unified strategy engineered to create
                measurable business growth.
              </p>
            </motion.div>
          </motion.div>

          {/* Body Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Feature Column */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col space-y-10 lg:col-span-6"
            >
              <motion.div
                variants={fadeUp}
                className="border-l-2 border-stone-200 pl-5 transition-colors duration-300 hover:border-[#dd0403]"
              >
                <h3 className="mt-1 text-base font-bold text-[#111]">
                  Stop Wasting Ad Spend
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-black/60 sm:text-sm max-w-md">
                  If your current presence isn’t building visibility or scaling
                  leads, it's time to align creativity with performance.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="border-l-2 border-stone-200 pl-5 transition-colors duration-300 hover:border-[#dd0403]"
              >
                <h3 className="mt-1 text-base font-bold text-[#111]">
                  Active Community Engagement
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-black/60 sm:text-sm max-w-md">
                  We don't just post photos—we interact with your audience, reply
                  to comments, and build an active online community around your
                  brand.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-2">
                <CTAButton />
              </motion.div>
            </motion.div>

            {/* Right Showcase Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:col-span-6"
            >
              <ImageShowcase />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
