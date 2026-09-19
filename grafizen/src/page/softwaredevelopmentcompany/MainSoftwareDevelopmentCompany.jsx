import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import CoreServices from "../../components/softwaredevelopmentcompany/CoreServices";
import SoftwareProcessSteps from "../../components/softwaredevelopmentcompany/SoftwareProcessSteps";
import WhyChooseSoftware from "../../components/softwaredevelopmentcompany/WhyChooseSoftware";
// import GrafizenBestPractices from "../../components/softwaredevelopmentcompany/GrafizenBestPractices";

// Hero Image import - fallback or use from public image
import heroIllustration from "../../../public/image/software/bg-2.png";

const SoftwareHero = () => {
  return (
    <section className="relative w-full max-h-screen bg-white overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 ">
      {/* Background Subtle Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#1111110a_1px,transparent_1px),linear-gradient(90deg,#1111110a_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="w-full lg:col-span-7">
            {/* Top Tagline */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#dd0403]"
            >
              <span className="h-px w-6 bg-[#dd0403]" />
              <span>SOFTWARE SOLUTIONS COMPANY</span>
            </motion.div> */}
            <div class="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>SOFTWARE SOLUTIONS COMPANY</span></div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.12]"
            >
              Custom Software Engineering Built for{" "}
              <span className="text-[#dd0403]">Enterprise Scale</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base font-[300]"
            >
              We design, build, and optimize high-performing digital products —
              from custom web applications to scalable cloud platforms and AI
              automation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary Consultation Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-between gap-3 rounded-full border-2 border-[#dd0403] bg-[#dd0403] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#dd0403] hover:text-white shadow-sm"
              >
                <span>Book a Free Consultation</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dd0403] text-white transition-all duration-300  ">
                  <ChevronRight size={18} strokeWidth={2.5} />
                </span>
              </motion.a>

              {/* View Solutions Link */}
              <motion.a
                href="#solutions"
                whileHover={{ x: 4 }}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#dd0403] transition-colors hover:text-black"
              >
                <span className="underline underline-offset-4 decoration-2">
                  View Our Solutions
                </span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image / Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center items-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl bg-white p-2 sm:p-4 
            ">
              <img
                src={heroIllustration}
                alt="Custom Software Engineering Built for Enterprise Scale"
                className="h-auto w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement.querySelector(".placeholder-fallback");
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />

              {/* Fallback in case image is missing */}
              <div className="placeholder-fallback hidden flex-col items-center justify-center gap-3 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <p className="font-bold text-black">[ Image Placeholder ]</p>
                <span className="text-xs text-black/50">
                  public/image/software/bg-2.png
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default function MainSoftwareDevelopmentCompany() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden selection:bg-[#dd0403] selection:text-white">
      {/* Hero Section */}
      <SoftwareHero />

      {/* Futuristic Core Services Component */}
      <CoreServices />

   

      {/* Playful Floating Cards Why Choose Us Component */}
      <WhyChooseSoftware />
         {/* 4-Step Isometric Process Steps */}
      <SoftwareProcessSteps />

      {/* 9-Pillar Best Practices Followed by Grafizen (Unique Non-Card Layout) */}
      {/* <GrafizenBestPractices /> */}

    </main>
  );
}