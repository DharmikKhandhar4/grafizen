import React from "react";
import { motion } from "framer-motion";
import {
  // ArrowUpRight,
  Search,
  Target,
  Megaphone,
  BarChart3,
  Globe2,
} from "lucide-react";

const channels = [
  {
    number: "01",
    name: "SEO",
    icon: Search,
  },
  {
    number: "02",
    name: "Paid Ads",
    icon: Target,
  },
  {
    number: "03",
    name: "Social",
    icon: Megaphone,
  },
  {
    number: "04",
    name: "Analytics",
    icon: BarChart3,
  },
];

export default function DigitalMarketingHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5f1] text-black">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Large circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[180px] -top-[180px] h-[620px] w-[620px] rounded-full border border-black/[0.055]"
        />

        <div className="absolute -right-[80px] -top-[80px] h-[420px] w-[420px] rounded-full border border-[#dd0403]/10" />

        {/* vertical grid */}
        <div className="absolute left-[12%] top-0 h-full w-px bg-black/[0.035]" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-black/[0.035]" />
        <div className="absolute left-[88%] top-0 h-full w-px bg-black/[0.035]" />

        {/* horizontal grid */}
        <div className="absolute left-0 top-[32%] h-px w-full bg-black/[0.035]" />
        <div className="absolute left-0 top-[72%] h-px w-full bg-black/[0.035]" />

        {/* red glow */}
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#dd0403]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* ================= TOP BAR ================= */}

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex h-20 items-center justify-between border-b border-black/10"
        >
          <div className="flex items-center gap-3">

            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rotate-45 bg-[#dd0403]" />

              <span className="relative text-xs font-bold text-white">
                +
              </span>
            </div>

            <span className="text-sm font-semibold tracking-tight">
              Digital Growth
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
              Rajkot / Gujarat
            </span>

            <span className="h-4 w-px bg-black/10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#dd0403]">
              2026
            </span>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-xs font-semibold"
          >
            Let's Talk

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all group-hover:border-[#dd0403] group-hover:bg-[#dd0403] group-hover:text-white">
              {/* <ArrowUpRight size={13} />
              
              
              */}
            </span>
          </a>
        </motion.header>

        {/* ================= MAIN HERO ================= */}

        <main className="relative min-h-[calc(100vh-80px)] py-16 lg:py-20">

          {/* Small label */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#dd0403]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/45">
              Professional Digital Marketing Services in Rajkot
            </span>
          </motion.div>

          {/* ================= HUGE TYPOGRAPHY ================= */}

          <div className="relative">

            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[1250px] text-[15vw] font-semibold leading-[0.78] tracking-[-0.09em] sm:text-[12vw] lg:text-[10.5vw]"
            >
              Digital
              <br />

              <span className="relative">
                Marketing

                {/* red slash */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-[5px] w-[48%] origin-left bg-[#dd0403] sm:h-2"
                />
              </span>
            </motion.h1>

            {/* ================= FLOATING RAJKOT ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -7,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-[3%] top-[18%] z-20 hidden sm:block"
            >
              <div className="relative">

                {/* rotating ring */}

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-5 rounded-full border border-dashed border-[#dd0403]/30"
                />

                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_20px_60px_rgba(221,4,3,0.2)] lg:h-40 lg:w-40">

                  <Globe2 size={20} strokeWidth={1.5} />

                  <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em]">
                    Based in
                  </span>

                  <span className="mt-1 text-lg font-semibold">
                    Rajkot
                  </span>

                </div>
              </div>
            </motion.div>

            {/* ================= SECOND LINE ================= */}

            <div className="mt-10 flex flex-col gap-8 lg:ml-[18%] lg:flex-row lg:items-end lg:justify-between">

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="max-w-4xl text-[9vw] font-medium leading-[0.82] tracking-[-0.07em] text-black/20 sm:text-[7vw] lg:text-[5.5vw]"
              >
                that makes
                <br />

                <span className="text-black">
                  businesses move.
                </span>
              </motion.h2>

              {/* Description */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                }}
                className="max-w-sm lg:pb-2"
              >
                <div className="mb-5 h-px w-12 bg-[#dd0403]" />

                <p className="text-sm leading-6 text-black/55 sm:text-base">
                  We combine strategy, creativity and performance marketing
                  to help businesses build visibility, attract qualified
                  customers and create measurable digital growth.
                </p>

                <motion.a
                  href="#services"
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Explore our services

                  {/* <ArrowUpRight
                    size={17}
                    className="text-[#dd0403]"
                  /> */}
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* ================= SERVICE MARQUEE ================= */}

          <div className="mt-20 overflow-hidden border-y border-black/10 py-5">

            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center"
            >
              {[...channels, ...channels].map((channel, index) => {
                const Icon = channel.icon;

                return (
                  <React.Fragment key={index}>

                    <div className="mx-8 flex items-center gap-4 sm:mx-12">

                      <span className="text-[9px] font-bold text-black/25">
                        {channel.number}
                      </span>

                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#dd0403]"
                      />

                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        {channel.name}
                      </span>

                    </div>

                    <span className="h-1 w-1 rounded-full bg-black/20" />

                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>

          {/* ================= BOTTOM AREA ================= */}

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <div className="relative h-2 w-2">
                <motion.span
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#dd0403]"
                />

                <span className="absolute inset-0 rounded-full bg-[#dd0403]" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Strategy · Visibility · Conversion
              </span>
            </div>

            <div className="flex items-center gap-5">

              <span className="text-xs text-black/35">
                Scroll to discover
              </span>

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
              >
                {/* <ArrowDownRight
                  size={16}
                  className="text-[#dd0403]"
                /> */}
              </motion.div>

            </div>
          </div>
        </main>
      </div>
    </section>
  );
}