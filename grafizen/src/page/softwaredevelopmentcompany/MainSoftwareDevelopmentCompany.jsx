import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import CoreServices from "../../components/softwaredevelopmentcompany/CoreServices";
import SoftwareProcessSteps from "../../components/softwaredevelopmentcompany/SoftwareProcessSteps";
import WhyChooseSoftware from "../../components/softwaredevelopmentcompany/WhyChooseSoftware";
// import GrafizenBestPractices from "../../components/softwaredevelopmentcompany/GrafizenBestPractices";

// Hero Image import - fallback or use from public image
import heroIllustration from "../../../public/image/software/bg-2.png";

const stats = [
  ["99.8%", "On-Time Sprint", "Delivery"],
  ["50+", "Enterprise Digital", "Products"],
  ["10+", "Years of Core", "Engineering"],
];

const SoftwareHero = () => {
  const CTAButtons = ({ isMobile = false }) => (
    <div
      className={`flex ${
        isMobile
          ? " sm:flex-row w-full grid grid-cols-2  justify-center sm:justify-start gap-3 sm:gap-4"
          : "flex-wrap items-center gap-4 sm:gap-6 mt-8 "
      }`}
    >
      <motion.a
        href="https://grafizen.com/contact-us"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex md:min-h-11 w-full sm:w-auto items-center justify-center sm:justify-between gap-3 md:rounded-full rounded-xl border-2 border-[#dd0403] bg-[#dd0403] md:px-6 px-4 md:py-2.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-[#dd0403]/20 transition-all duration-300  "
      >
        <span className=" flex gap-1"><span className=" hidden sm:flex">Book a Free </span> <span>Consultation</span></span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full  text-white transition-all duration-300 group-hover:bg-[#dd0403] group-hover:text-white">
          <ArrowRight size={18} strokeWidth={2.5} />
        </span>
      </motion.a>

      <motion.a
        href="https://grafizen.com/services/ai-and-business-software-services"
        whileHover={{ x: 4 }}
        className="group inline-flex md:min-h-11 w-full sm:w-auto items-center justify-center gap-2 md:rounded-full rounded-xl border-2 border-[#dd0403] bg-white md:px-6 px-4 md:py-2.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#dd0403] transition-colors hover:bg-[#dd0403] hover:text-white"
      >
        <span className=" flex gap-1"> <sapn className="hidden sm:flex">View Our </sapn> Solutions</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>
    </div>
  );

  return (
    <section className="relative w-full min-h-[auto] lg:min-h-screen flex items-center justify-center bg-white overflow-hidden py-10 sm:py-14 lg:py-20 px-5    sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Background Subtle Grid Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#1111110a_1px,transparent_1px),linear-gradient(90deg,#1111110a_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* ============================================================ */}
        {/* MOBILE & TABLET VIEW (< lg) - Modeled on Digital Marketing Consultant */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:hidden space-y-4 sm:space-y-5">
          {/* Top Tagline Badge */}
          {/* <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#dd0403]/10 px-3.5 py-1 text-[#dd0403]">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
              SOFTWARE SOLUTIONS COMPANY
            </span>
          </div> */}
              <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>SOFTWARE SOLUTIONS COMPANY</span>
            </div>

          {/* Main Heading */}
          <h1 className="text-[28px] xs:text-[32px] sm:text-[42px] font-bold leading-[1.12] text-[#111111] tracking-tight">
            Custom Software Engineering Built for{" "}
            <span className="text-[#dd0403]">Enterprise Scale</span>
          </h1>

          {/* Mobile & Tablet Center Image Block */}
          <div className="relative flex items-center justify-center w-full my-4 sm:my-4">
            <div className="relative w-full sm:max-w-[500px] overflow-hidden rounded-2xl  border border-black/5  sm:p-5 shadow-sm">
              <img
                src={heroIllustration}
                alt="Custom Software Engineering Built for Enterprise Scale"
                className="max-h-[220px] xs:max-h-[270px] sm:max-h-[340px] w-full object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.parentElement.querySelector(".placeholder-fallback");
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
              <div className="placeholder-fallback hidden flex-col items-center justify-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <p className="font-bold text-black text-xs">[ Image Placeholder ]</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px] sm:text-[15px] font-medium leading-[1.4] text-black/70">
            We design, build, and optimize high-performing digital products —
            from custom web applications to scalable cloud platforms and AI
            automation.
          </p>

          {/* Key Metrics Stats Row */}
          <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 sm:pt-5">
            {stats.map(([value, lineOne, lineTwo]) => (
              <div key={value} className="min-w-0 text-center">
                <p className="text-[20px] xs:text-[22px] sm:text-[28px] font-extrabold leading-none tracking-tight text-[#111111]">
                  {value}
                </p>
                <p className="mt-1 break-words text-[10px] sm:text-[11px] font-medium leading-[1.15] text-[#171717]/70">
                  {lineOne}
                  {lineTwo && <span className="block">{lineTwo}</span>}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 ">
            <CTAButtons isMobile={true} />
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP / LAPTOP VIEW (>= lg) - Exact High-Impact Desktop Setup */}
        {/* ============================================================ */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-8 xl:gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:col-span-7">
            {/* Top Tagline */}
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>SOFTWARE SOLUTIONS COMPANY</span>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] lg:leading-[1.12]"
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

            {/* Desktop CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CTAButtons isMobile={false} />
            </motion.div>

            {/* Desktop Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 grid w-full max-w-[460px] grid-cols-3 gap-6 border-t border-black/10 pt-6"
            >
              {stats.map(([value, lineOne, lineTwo]) => (
                <div key={value} className="min-w-0">
                  <p className="text-[24px] xl:text-[28px] font-bold text-start leading-none tracking-tight text-[#111111]">
                    {value}
                  </p>
                  <p className="mt-1.5 break-words text-start text-[11px] font-medium leading-[1.1] text-black/55">
                    {lineOne}
                    {lineTwo && <span className="block">{lineTwo}</span>}
                  </p>
                </div>
              ))}
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
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl bg-white p-2 sm:p-4">
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