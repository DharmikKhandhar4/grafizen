import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  MousePointer2,
  TrendingUp,
  MoveUpRight,
} from "lucide-react";

const services = ["SEO", "Google Ads", "Social Media", "Content", "Local SEO"];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OnlineMarketingHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] text-[#111]">
  

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            TOP BAR
        ====================================================== */}

        {/* <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center justify-between border-b border-black/10 py-5"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dd0403] text-white">
              <MoveUpRight size={15} />
            </span>

            <span className="text-sm font-semibold tracking-tight">
              Digital Growth Studio
            </span>
          </div>

          <div className="hidden text-xs font-medium uppercase tracking-[0.2em] text-black/40 sm:block">
            Rajkot · Gujarat · India
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
            Available for Projects
          </div>
        </motion.div> */}

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="relative py-16 sm:py-20 lg:py-24">
          {/* Small eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#dd0403]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#dd0403]">
              Online Marketing Company
            </span>
          </motion.div>

          {/* =====================================================
              HUGE TYPOGRAPHY
          ====================================================== */}

          <div className="relative z-10 ">
            <div className="flex items-center whitespace-nowrap ">
       

          
            </div>

            <div className="relative flex flex-col items-start lg:flex-row lg:items-start lg:justify-between">
           <div className="flex  flex-col lg:items-start"> 
              <div className="flex items-center">
                  <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[14vw] font-[500] leading-[0.78] tracking-[-0.075em] sm:text-[12vw] lg:text-[4vw]"
              >
                ONLINE
              </motion.h1>

            
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-20 text-[14vw] font-[500] leading-[0.85] tracking-[-0.075em] sm:text-[12vw] lg:text-[4vw] pl-5"
                >
                  MARKETING 
                </motion.h1>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[14vw] font-[500] leading-[0.85] tracking-[-0.075em] sm:text-[12vw] 
                lg:text-[4vw]"
              >
                <span className="text-[#dd0403]"> IN RAJKOT</span>
              </motion.h1>
           </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-8 max-w-sm lg:mb-3 lg:mr-[5%] lg:mt-0"
              >
                <p className="text-sm leading-6 text-black/55 sm:text-base">
                  We turn search visibility, paid traffic and social attention
                  into measurable business growth.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#dd0403]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Strategy × Performance
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =====================================================
              MAIN INTERACTIVE AREA
          ====================================================== */}

          <div className="relative mt-8 grid gap-10 lg:grid-cols-[180px_1fr_230px] lg:items-end">
            {/* LEFT SERVICE NAV */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
                What We Do
              </p>

              <div className="space-y-0">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    whileHover={{ x: 8 }}
                    className="group flex cursor-pointer items-center justify-between border-t border-black/10 py-2 transition-all"
                  >
                    <span className="text-sm font-medium text-black/60 group-hover:text-black">
                      {service}
                    </span>

                    <span className="text-[10px] text-black/20">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                CENTRAL GROWTH GRAPH
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="relative order-1 h-[210px] overflow-hidden border-y border-black/10 lg:order-2"
            >
              {/* Search bar */}
              <div className="absolute left-0 top-2 z-20 flex w-full max-w-[390px] items-center gap-3 border border-black/10 bg-white/70 px-4 py-2 backdrop-blur-md rounded-xl">
                <Search size={16} className="text-black/40" />

                <span className="text-xs text-black/45">
                  online marketing company in Rajkot
                </span>

                <span className="ml-auto text-[10px] font-bold text-[#dd0403]">
                  SEARCH
                </span>
              </div>

              {/* Graph */}
              <svg
                viewBox="0 0 900 330"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                {/* Grid */}
                <line
                  x1="0"
                  y1="80"
                  x2="900"
                  y2="80"
                  stroke="black"
                  strokeOpacity="0.06"
                />

                <line
                  x1="0"
                  y1="160"
                  x2="900"
                  y2="160"
                  stroke="black"
                  strokeOpacity="0.06"
                />

                <line
                  x1="0"
                  y1="240"
                  x2="900"
                  y2="240"
                  stroke="black"
                  strokeOpacity="0.06"
                />

                {/* Main growth path */}
                <motion.path
                  d="M0 285 C80 280 95 260 160 270 C230 280 245 210 310 225 C375 240 390 190 455 205 C520 220 545 150 610 165 C675 180 700 110 760 125 C820 140 850 70 900 35"
                  fill="none"
                  stroke="#dd0403"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2.2,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                />

                {/* Shadow line */}
                <motion.path
                  d="M0 295 C80 290 95 270 160 280 C230 290 245 220 310 235 C375 250 390 200 455 215 C520 230 545 160 610 175 C675 190 700 120 760 135 C820 150 850 80 900 45"
                  fill="none"
                  stroke="#dd0403"
                  strokeOpacity="0.08"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </svg>

              {/* Floating data */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-2 left-[40%] border border-black/10 bg-white px-4 py-2 shadow-sm rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp size={15} className="text-[#dd0403]" />

                  <span className="text-xs font-bold">Visibility ↑</span>
                </div>
              </motion.div>

              {/* Cursor */}
              <motion.div
                animate={{
                  x: [0, 30, 15, 45, 0],
                  y: [0, -10, 20, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[18%] top-[38%]"
              >
                <MousePointer2
                  size={24}
                  fill="#dd0403"
                  className="text-[#dd0403]"
                />
              </motion.div>

              {/* Bottom label */}
              <div className="absolute bottom-5 right-0 text-right">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                  Growth trajectory
                </p>

                <p className="mt-1 text-sm font-semibold">Built to compound</p>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT STAT
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="order-3 border-l border-black/10 pl-6"
            >
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
                  The Objective
                </p>

                <p className="mt-3 text-md font-semibold leading-tight tracking-tight">
                  Get found.
                  <br />
                  Get chosen.
                  <br />
                  <span className="text-[#dd0403]">Get remembered.</span>
                </p>
              </div>

              <div className="border-t border-black/10 pt-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-semibold tracking-[-0.05em]">
                      360°
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-black/35">
                      Digital strategy
                    </p>
                  </div>

                  <ArrowUpRight size={25} className="text-[#dd0403]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              CTA STRIP
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-8 flex flex-col justify-between gap-6 border-t border-black/10 pt-6 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                <ArrowDownRight size={16} />
              </span>

              <span className="text-sm font-medium text-black/60">
                Your next customer is already searching.
              </span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#dd0403",
                color: "#fff",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between gap-6 border border-black/15 bg-transparent px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Start a Conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
