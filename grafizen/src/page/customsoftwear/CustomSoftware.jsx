import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import softwear from "../../../public/image/customsoftwear/softwear.png";
import softwear2 from "../../../public/image/customsoftwear/softwear2.png";
import HeroConstellationSVG from "../../components/customsoftwear/HeroConstellationSVG";
import oracle from "../../../public/image/customsoftwear/oracle.png";
import microsoft from "../../../public/image/customsoftwear/microsoft.jpg";
import tech from "../../../public/image/customsoftwear/tech.jpg";
import google from "../../../public/image/customsoftwear/google.png";

export default function CustomSoftware() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden selection:bg-[#dd0403] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative isolate px-4 py-12 sm:px-8 sm:py-16 lg:px-12  lg:py-20 max-w-[1600px] mx-auto">
        {/* Futuristic Network Constellation SVG Background (Top-Right & Bottom-Left) */}
        <HeroConstellationSVG />

        {/* Subtle Tech Background Mesh Grid */}
        <div className="pointer-events-none absolute inset-0  opacity-40 [background-image:linear-gradient(#1111110a_1px,transparent_1px),linear-gradient(90deg,#1111110a_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* LEFT SIDE IMAGE (Laptop & Tech Badges) - Desktop & Laptop */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden xl:block absolute left-2 lg:left-3 top-[90%] -translate-y-1/2 w-[290px] lg:w-[240px] xl:w-[300px] pointer-events-none z-10 "
        >
          <motion.img
            src={softwear}
            alt="Custom Software & Web Platforms"
            className="w-full h-auto object-contain "
            // animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* RIGHT SIDE IMAGE (Cloud Server Architecture) - Desktop & Laptop */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden xl:block absolute right-2 lg:right-6 top-[95%] -translate-y-1/2 w-[290px] lg:w-[330px] xl:w-[300px] pointer-events-none z-10"
        >
          <motion.img
            src={softwear2}
            alt="Cloud Infrastructure & Security"
            className="w-full h-auto object-contain opacity-80 "
            // animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-5xl text-center z-20 mt-10">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.12]"
          >
            Custom <span className="text-[#dd0403]">Software Development Services</span>{" "}
            <br className="hidden sm:inline" />
            for Scaling Businesses & Enterprises
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-black/55 sm:text-base"
          >
            We design, build, and deploy high-performance mobile, web, and cloud software
            tailored to your complex business needs—on time and within budget.
          </motion.p>

          {/* Mobile Preview Images Row (Shown on Mobile/Tablet screens) */}
          <div className="flex xl:hidden items-center justify-center gap-4 mt-6 pointer-events-none">
            <img src={softwear} alt="Software" className="w-40 sm:w-56 h-auto object-contain" />
            <img src={softwear2} alt="Software Cloud" className="w-40 sm:w-56 h-auto object-contain" />
          </div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#dd0403] px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#dd0403]/30 transition hover:bg-[#b90303]"
            >
              <span>Request a Tech Consultation</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#dd0403]">
                <ArrowRight className="h-3 w-3 stroke-[3]" />
              </span>
            </motion.a>

            <motion.a
              href="#case-studies"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-800 px-7 py-3 text-sm sm:text-base font-semibold text-neutral-800 transition hover:border-[#dd0403] hover:text-[#dd0403] bg-white/80"
            >
              <span>Explore Our Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Trust Badges / Micro-Proof Box */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
  className="relative mx-auto mt-12 max-w-5xl rounded-2xl border border-neutral-200 bg-white/95 p-5 sm:p-6 shadow-sm"
>
  {/* Centered Top Badge Label */}
  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs font-semibold text-black shadow-xs">
    <ShieldCheck className="h-3.5 w-3.5 text-[#dd0403]" />
    <span>Trusted by Leading Brands</span>
  </div>

  <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-center md:gap-3">
    {/* Column 1: Prominent Clients */}
    <div className="flex flex-col items-center">
      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
        prominent clients
      </span>
      <div className="mt-2.5 flex items-center justify-center gap-4 text-xs font-semibold text-neutral-700">
        {/* Google */}
        <img
          src={google}
          alt="Google"
          className="h-8 w-16 object-contain shrink-0"
        />

        {/* Oracle */}
        <img
          src={oracle}
          alt="Oracle"
          className="h-8 w-16 object-contain shrink-0"
        />

        {/* Tech Mahindra */}
        <img
          src={tech}
          alt="Tech Mahindra"
          className="h-8 w-16 object-contain shrink-0"
        />

        {/* Microsoft */}
        <img
          src={microsoft}
          alt="Microsoft"
          className="h-8 w-16 object-contain shrink-0"
        />
      </div>
    </div>

    {/* Column 2: Clutch/G2 Ratings */}
    <div className="flex flex-col items-center border-y border-neutral-100 py-3 md:border-y-0 md:border-x md:px-3 md:py-0">
      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
        Clutch/G2 Ratings
      </span>
      <div className="mt-2.5 flex items-center justify-center gap-2">
        {/* Clutch Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#dd0403] px-3 py-1 text-xs font-bold text-white shadow-xs">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#dd0403]">
            C
          </span>
          <span>4.9/5 stars</span>
        </div>

        {/* G2 Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e53935] px-3 py-1 text-xs font-bold text-white shadow-xs">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[9px] font-black text-[#e53935]">
            G2
          </span>
          <span>4.8/5 rating</span>
        </div>
      </div>
    </div>

    {/* Column 3: Security Badges */}
    <div className="flex flex-col items-center">
      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
        security badges
      </span>
      <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-700">
        <ShieldCheck className="h-4 w-4 text-[#dd0403]" />
        <span>ISO 27001 Certified</span>
        <span className="text-neutral-300">•</span>
        <span>SOC 2 Compliant</span>
      </div>
    </div>
  </div>
</motion.div>
        </div>
          {/* <Ripple className="text-[#dd0403]" /> */}
      </section>
    </main>
  );
}
