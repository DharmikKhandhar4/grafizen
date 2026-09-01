import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe2,
  MousePointer2,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.12,
    },
  },
};

export default function DigitalMarketingHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#f7f5f1] text-[#111111]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Top right glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.13, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#dd0703] blur-[130px]"
        />

        {/* Bottom left glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#dd0703] blur-[120px]"
        />
      </div>

      {/* ================= NAV / TOP LABEL ================= */}

      {/* ================= MAIN ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-14 lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* ================= LEFT ================= */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-2.5"
            >
              <div className="h-px w-8 bg-[#dd0703]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-black/55">
                Digital Growth Partner
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className=" text-[48px] font-semibold leading-[0.95] tracking-[-0.05em] mt-10"
            >
              Digital Marketing <br />
              <span className="flex gap-2 items-end  mt-3">
                <span className="relative mt-2 inline-block">
                  <span className="relative z-10 text-white">Company</span>

                  {/* Highlight */}
                  <span className="absolute -inset-x-3 -inset-y-1 -z-0 -skew-x-3 bg-[#dd0703] sm:-inset-x-5 ml-4 " />
                </span>
                {/* <br /> */}
                <span className="block text-black/45 ml-6 ">in India.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7"
            >
              We help ambitious brands grow through{" "}
              <span className="font-semibold text-black">
                SEO, performance marketing, social media, paid advertising
              </span>{" "}
              and conversion-focused digital strategies.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#dd0703] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(221,4,3,0.22)]"
              >
                Grow Your Business
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/50 px-5 py-3 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white"
              >
                Explore Services
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-x-4 gap-y-2"
            >
              {[
                "ROI-focused strategies",
                "Data-driven campaigns",
                "Transparent reporting",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-black/50"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/8">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[570px]"
          >
            {/* Main visual container */}
            <div
              className="relative aspect-[1.18] overflow-hidden rounded-[2rem] border border-black/10 bg-[#dd0403]/10
  p-3  sm:p-4"
            >
              {/* Inner grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Red glow */}
              {/* <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 top-10 h-60 w-72 rounded-full bg-[#dd0703] opacity-25 blur-[90px]"
              /> */}

              {/* Main dashboard */}
              <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl sm:p-5">
                {/* Dashboard header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-balck/40">
                      Campaign performance
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      Growth Overview
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#dd0703] text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>

                {/* Graph */}
                <div className="relative mt-6 h-32 sm:h-36">
                  {/* horizontal lines */}
                  <div className="absolute inset-x-0 top-0 border-t border-black/20" />
                  <div className="absolute inset-x-0 top-1/3 border-t border-black/20" />
                  <div className="absolute inset-x-0 top-2/3 border-t border-black/20" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-black/20" />

                  {/* Graph SVG */}
                  <svg
                    viewBox="0 0 500 190"
                    className="absolute inset-0 h-full w-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#dd0703"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#dd0703"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,160 C50,145 70,150 105,125 C140,100 145,120 185,90 C225,60 245,90 275,72 C305,54 330,60 350,45 C385,25 400,38 425,18 C450,4 470,10 500,-2 L500,190 L0,190 Z"
                      fill="url(#areaGradient)"
                    />

                    <motion.path
                      d="M0,160 C50,145 70,150 105,125 C140,100 145,120 185,90 C225,60 245,90 275,72 C305,54 330,60 350,45 C385,25 400,38 425,18 C450,4 470,10 500,-2"
                      fill="none"
                      stroke="#dd0703"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        delay: 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  {/* Graph label */}
                  <div className="absolute right-0 -top-10 rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                    <span className="text-xs font-semibold text-white">
                      +128%
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/50 bg-white/[0.06] p-3">
                   <div className="flex items-center gap-3">
                     <Search className=" h-4 w-4 text-black/50" />

                    <p className="text-lg font-semibold text-black">SEO</p>
                   </div>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-black/35 ">
                      Visibility
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/50  bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
  <BarChart3 className=" h-4 w-4 text-black/50" />

                    <p className="text-lg font-semibold text-black">PPC</p>
                    </div>
                  

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-black/35">
                      Performance
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/50  bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
 <Users className="mb-3 h-4 w-4 text-black/50" />

                        <p className="text-lg font-semibold text-black">Social</p>
                    </div>
                       

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-black/35">
                      Engagement
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating metric */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-0 top-[24%] hidden rounded-2xl border border-black/10 bg-white/70 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0703]/10 text-[#dd0703]">
                    <MousePointer2 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                      Conversions
                    </p>

                    <p className="mt-1 text-lg font-[500]">+42.8%</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating location */}
              {/* <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-white">
                    <Globe2 className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-black/40">
                      Reach
                    </p>

                    <p className="mt-1 text-sm font-bold">India & Global</p>
                  </div>
                </div>
              </motion.div> */}
            </div>

            {/* Decorative number */}
            {/* <div className="absolute -right-4 -top-8 hidden select-none text-[5rem] font-black leading-none tracking-[-0.08em] text-black/[0.135] lg:block">
              01
            </div> */}
          </motion.div>
        </div>

        {/* ================= BOTTOM TRUST BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-10 border-t border-black/10 pt-7 lg:mt-10"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <TrendingUp className="h-5 w-5 text-[#dd0703]" />
              </div>

              <div>
                <p className="text-sm font-semibold">Growth Focused</p>
                <p className="mt-0.5 text-xs text-black/45">
                  Strategies built around results
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Search className="h-5 w-5 text-[#dd0703]" />
              </div>

              <div>
                <p className="text-sm font-semibold">SEO Driven</p>
                <p className="mt-0.5 text-xs text-black/45">
                  Build sustainable visibility
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <BarChart3 className="h-5 w-5 text-[#dd0703]" />
              </div>

              <div>
                <p className="text-sm font-semibold">Performance Ads</p>
                <p className="mt-0.5 text-xs text-black/45">
                  Turn clicks into customers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Globe2 className="h-5 w-5 text-[#dd0703]" />
              </div>

              <div>
                <p className="text-sm font-semibold">India & Beyond</p>
                <p className="mt-0.5 text-xs text-black/45">
                  Local expertise, wider reach
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
