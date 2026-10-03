import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import RotatingCards from "./RotatingCards";

/**
 * BestWebDevelopmentHero Component
 * - Left Column: "Websites Engineered For Relentless Growth" typography, pill badge,
 *   dual CTA buttons, and key metrics proof row.
 * - Right Column: 3D circular arc RotatingCards component inspired by React Bits Pro,
 *   with draggable tangential cards, auto-play rotation, and pause-on-hover.
 */
const BestWebDevelopmentHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Backg round Subtle Tech Grid */}
   

      {/* Ambient Crimson Radial Glow behind right interactive carousel */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#dd0403]/10 blur-[140px] z-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ─── LEFT COLUMN: TYPOGRAPHY, CTAS, STATS ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            {/* Top Pill Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-[#dd0403] px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-sm"
            >
             Best Web Development Company
            </motion.div> */}
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/45 mb-3" ><span className="h-px w-7 bg-[#dd0403]"></span><span>        Best Web Development Company</span></div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-[48px] xl:text-[48px] font-bold tracking-tight text-black leading-[1.08]"
            >
              We turn your business
                ideas into <span className="text-[#dd0403]" >
                   successful websites
                </span>

           
              
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-[530px] text-base sm:text-[17px] font-light leading-relaxed text-neutral-600"
            >
              We build high-performance, scalable websites that drive business growth, deliver seamless user experiences, and turn your digital presence into a powerful growth engine.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary Solid Crimson Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#dd0403] px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#b80302] hover:shadow-md hover:-translate-y-0.5"
              >
                Start Your Project
              </a>

              {/* Secondary Outlined Button */}
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#b80302] px-7 py-3 text-[15px] font-medium text-[#b80302] transition-all duration-300 hover:bg-[#dd0403]/5 hover:-translate-y-0.5"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Key Metrics / Social Proof Row (Laptop & Desktop Optimized) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-7 pt-5 border-t border-neutral-100"
            >
              <div className="flex flex-col gap-4">
                {/* Top Row: Core Metrics & Client Avatars */}
                <div className="flex items-center gap-5 sm:gap-7 flex-wrap lg:flex-nowrap">
                  {/* Stat 1: Projects Delivered */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                        450<span className="text-[#dd0403]">+</span>
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs sm:text-[13px] font-medium text-neutral-500 whitespace-nowrap">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="hidden sm:block h-8 w-px bg-neutral-200" />

                  {/* Stat 2: Server Uptime */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                        99.8<span className="text-[#dd0403]">%</span>
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs sm:text-[13px] font-medium text-neutral-500 whitespace-nowrap">
                      Server Uptime
                    </p>
                  </div>

                  <div className="hidden sm:block h-8 w-px bg-neutral-200" />

                  {/* Stat 3: Client Avatars & Star Rating */}
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-2 shrink-0">
                      <img
                        src="/image/customsoftwear/cto.png"
                        alt="Client"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-xs bg-neutral-100"
                      />
                      <img
                        src="/face.png"
                        alt="Client"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-xs bg-neutral-100"
                      />
                      <img
                        src="/image/customsoftwear/cfo.webp"
                        alt="Client"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-xs bg-neutral-100"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-neutral-900 leading-none">
                          4.9/5
                        </span>
                        <div className="flex text-[#dd0403]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-[#dd0403]" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-0.5 text-[11px] text-neutral-500 font-medium whitespace-nowrap">
                        Client Rating
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Official Review Badges from Project Images */}
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    Reviewed On:
                  </span>
                  
                  {/* Google Badge */}
                  <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-2.5 py-1 border border-neutral-200/80 transition-all hover:bg-neutral-100/80">
                    <img
                      src="/image/mobileapp/google.png"
                      alt="Google Reviews"
                      className="h-4 sm:h-[18px] w-auto object-contain"
                    />
                  </div>

                  {/* Clutch Badge */}
                  <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-2.5 py-1 border border-neutral-200/80 transition-all hover:bg-neutral-100/80">
                    <img
                      src="/image/mobileapp/clutch.png"
                      alt="Clutch Top Agency"
                      className="h-4 sm:h-[18px] w-auto object-contain"
                    />
                  </div>

                  {/* Upwork Badge */}
                  <div className="flex items-center gap-2 rounded-lg bg-neutral-50 px-2.5 py-1 border border-neutral-200/80 transition-all hover:bg-neutral-100/80">
                    <img
                      src="/image/mobileapp/upwork.png"
                      alt="Upwork Top Rated"
                      className="h-4 sm:h-[18px] w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN: 3D ROTATING CARDS CIRCULAR CAROUSEL ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6 xl:col-span-6 flex items-center justify-center overflow-visible"
          >
            <RotatingCards />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BestWebDevelopmentHero;
