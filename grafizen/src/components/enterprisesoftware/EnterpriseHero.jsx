import microsoft from "../../../public/image/customsoftwear/microsoft.jpg";
import google from "../../../public/image/customsoftwear/google.png";
import arrow from "../../../public/image/enterpricesoftware/scribble.png";
import cto from "../../../public/image/customsoftwear/cto.png";
import cfo from "../../../public/image/customsoftwear/cfo.webp";
import saas from "../../../public/image/customsoftwear/saas.png";
import trophy from "../../../public/image/customsoftwear/trophy.png";
import insurance from "../../../public/image/customsoftwear/insurance.png";
import sparkler from "../../../public/image/customsoftwear/sparkler.png";
import programming from "../../../public/image/customsoftwear/programming.png";
import earth from "../../../public/image/customsoftwear/earth.png";

import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Optional partner / badge logos from public directory if available

const bulletPoints = [
  "AI-Augmented. Human-Governed.",
  "NDA-protected delivery with full IP ownership",
  "Custom enterprise software development services",
  "Secure systems with governance and compliance",
];

// Cards that continuously change with animation
const rotatingCards = [
  {
    id: 1,
    badgeLeft: programming,
    badgeRight: earth,
    avatar: cto,
    author: "James P.",
    role: "VP of Technology, Enterprise Cloud",
    quote:
      "Professional, reliable, and results-driven – they delivered our high-throughput enterprise portal on time and within budget.",
    g2Rating: "4.8/5",
    clutchRating: "4.9/5",
    metric: "99.98% Uptime",
    tag: "Fintech & Cloud",
  },
  {
    id: 2,
    badgeLeft: insurance,
    badgeRight: trophy,
    avatar: cfo,
    author: "Elena Rostova",
    role: "Chief Operating Officer, Global Logistics",
    quote:
      "Modernized our legacy monolith into high-performing microservices without a single hour of disruption to live shipments.",
    g2Rating: "4.9/5",
    clutchRating: "5.0/5",
    metric: "3.2x Faster Speeds",
    tag: "Supply Chain & Ops",
  },
  {
    id: 3,
    badgeLeft: sparkler,
    badgeRight: saas,
    avatar: cto,
    author: "David Vance",
    role: "Head of Product, SaaS Infrastructure",
    quote:
      "Their engineering team felt like a high-velocity extension of our in-house team. The automated CI/CD pipeline cut release times in half.",
    g2Rating: "4.8/5",
    clutchRating: "4.9/5",
    metric: "45% Cloud Cost Saved",
    tag: "AI & Platform Scale",
  },
];

export default function EnterpriseHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance cards every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingCards.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCard = rotatingCards[currentIndex];

  return (
    <section className="relative w-full bg-white overflow-hidden py-14 sm:py-18 lg:py-24 px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 selection:bg-[#dd0403] selection:text-white">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(#1111110a_1px,transparent_1px),linear-gradient(90deg,#1111110a_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Decorative Brand Red Ambient Glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#dd0403]/5 blur-[120px]" />

      <div className="pointer-events-none absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#dd0403]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =========================================================
            MOBILE + TABLET
            ========================================================= */}
        <div className="block lg:hidden">

          {/* ================= MOBILE/TABLET TOP CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex flex-col justify-center text-left"
          >
            {/* Top Eyebrow Tag */}
            <div className="mb-4 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-black/45">
              <span className="h-px w-6 sm:w-7 bg-[#dd0403]" />

              <span>ENTERPRISE DIGITAL ARCHITECTURE</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-[28px] sm:text-4xl md:text-5xl md:font-bold  font-[600]
            tracking-tight text-black leading-[1.08]">
              Enterprise Software{" "}
              <span className="text-[#dd0403]">
                Development Company
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-3 text-base sm:text-lg md:text-xl font-[400] italic text-black/75 leading-relaxed">
              Build Scalable Enterprise Software Systems for Complex Business
              Operations
            </p>

            {/* =====================================================
                MOBILE/TABLET REVIEW CARD
                Appears BEFORE description
                ===================================================== */}
            <div
              className="md:mt-8 mt-14 w-full flex justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full max-w-md">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${activeCard.id}`}
                    initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative w-full rounded-3xl border-2 border-black/10 bg-white p-3 
                     sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  >
                    {/* Floating Left Badge */}
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -20,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="absolute -left-3 sm:-left-4 top-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-md"
                    >
                      <img
                        src={activeCard.badgeLeft}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    </motion.div>

                    {/* Floating Right Badge */}
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: 20,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="absolute -right-3 sm:-right-4 bottom-16 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-md"
                    >
                      <img
                        src={activeCard.badgeRight}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                    </motion.div>

                    {/* Client Avatar */}
                    <div className="flex justify-center md:-mt-14 -mt-10 mb-3">
                      <div className="relative">
                        <div className="md:h-20 md:w-20 h-16 w-16 rounded-full border-4 border-white bg-neutral-100 shadow-md overflow-hidden flex items-center justify-center">
                          <img
                            src={activeCard.avatar}
                            alt={activeCard.author}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";

                              if (e.currentTarget.nextElementSibling) {
                                e.currentTarget.nextElementSibling.classList.remove(
                                  "hidden"
                                );
                              }
                            }}
                          />

                          <div className="hidden text-3xl">
                            👨🏽‍💼
                          </div>
                        </div>

                        {/* Live Status */}
                        <span className="absolute bottom-1 right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dd0403] opacity-60" />

                          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#dd0403] border-2 border-white" />
                        </span>
                      </div>
                    </div>

                    {/* Tag */}
                    <div className="flex justify-center mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#dd0403]/10 px-3 py-0.5 text-[10px] sm:text-[11px] font-[400] text-[#dd0403] uppercase tracking-wider">
                        {activeCard.tag}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-center text-[13px] sm:text-[14px] leading-relaxed text-black/55 px-2 min-h-[56px] flex items-center justify-center font-[300]">
                      “{activeCard.quote}”
                    </p>

                    {/* Author */}
                    <div className="md:mt-3 mt-1 text-center">
                      <span className="md:text-sm text-[14px] font-[400] text-black">
                        — {activeCard.author}
                      </span>

                      <span className="block text-xs text-black/55 font-[300] leading-relaxed">
                        {activeCard.role}
                      </span>
                    </div>

                    {/* Metric */}
                    <div className="mt-3 flex justify-center">
                      <span className="md:inline-flex hidden items-center gap-1.5 rounded-lg border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-[400] text-black">
                        <span className="h-2 w-2 rounded-full bg-[#dd0403]" />

                        Result:{" "}
                        <span className="text-[#dd0403]">
                          {activeCard.metric}
                        </span>
                      </span>
                    </div>

                    {/* Ratings */}
                    <div className="md:mt-4 md:pt-3 pt-2 border-t border-black/10 grid grid-cols-2 gap-3 sm:gap-4 text-center">

                      {/* G2 */}
                      <div className="border-r border-black/10 pr-2">
                        <div className="flex justify-center gap-1 text-[#dd0403] mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={13}
                              fill="#dd0403"
                            />
                          ))}
                        </div>

                        <p className="text-[11px] sm:text-xs font-[400] text-black">
                          Rated {activeCard.g2Rating} on{" "}
                          <span className="text-[#dd0403]">
                            G2
                          </span>
                        </p>
                      </div>

                      {/* Clutch */}
                      <div className="pl-2">
                        <div className="flex justify-center gap-1 text-[#dd0403] mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={13}
                              fill="#dd0403"
                            />
                          ))}
                        </div>

                        <p className="text-[11px] sm:text-xs font-[400] text-black">
                          Rated {activeCard.clutchRating} on{" "}
                          <span className="text-black">
                            Clutch
                          </span>
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Mobile/Tablet Navigation */}
                <div className="md:mt-5 mt-2 flex items-center justify-center gap-3">

                  {/* Previous */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(
                        (prev) =>
                          (prev - 1 + rotatingCards.length) %
                          rotatingCards.length
                      )
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:border-[#dd0403] hover:text-[#dd0403] transition-colors shadow-xs"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-1.5">
                    {rotatingCards.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentIndex === dotIdx
                            ? "w-7 bg-[#dd0403]"
                            : "w-2 bg-black/20 hover:bg-black/40"
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(
                        (prev) =>
                          (prev + 1) % rotatingCards.length
                      )
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:border-[#dd0403] hover:text-[#dd0403] transition-colors shadow-xs"
                    aria-label="Next card"
                  >
                    <ChevronRight size={16} />
                  </button>

                </div>
              </div>
            </div>

            {/* ================= DESCRIPTION ================= */}
            <p
              className="mt-3 sm:mt-8 text-sm leading-relaxed text-black/70 max-w-2xl text-[13px] font-[300] sm:text-[14px] text-justify   sm:leading-6"
            >
              Enterprise software development services help organizations build
              scalable systems, modernize operational workflows, and connect
              business-critical platforms across teams and departments. Grafizen
              develops secure and scalable enterprise applications designed for
              complex business environments and evolving operational needs.
            </p>

            {/* ================= BULLET POINTS ================= */}
            <div className="md:mt-7 mt-4 grid grid-cols-1 sm:grid-cols-2 md:gap-3.5 gap-1.5 max-w-2xl">
              {bulletPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#dd0403]">
                    <CheckCircle2
                      size={14}
                      className="stroke-[2.5]"
                    />
                  </div>

                  <span className="text-xs sm:text-[13px] font-[300] text-black/70 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= CTA ================= */}
            <div className="md:mt-9 mt-5 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full sm:w-auto h-10 md:h-12 items-center justify-center gap-3 rounded-full bg-[#dd0403] px-4 md:px-6 text-[13px] md:text-[14px] font-medium text-white md:shadow-[0_14px_35px_rgba(221,4,3,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303]"
              >
                <span>
                  Book 30-min Architecture Call
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 text-white">
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                  />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            LAPTOP / DESKTOP
            Existing layout preserved
            ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Top Eyebrow Tag */}
            <div className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />

              <span>
                ENTERPRISE DIGITAL ARCHITECTURE
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-[52px] font-bold tracking-tight text-black leading-[1.08]">
              Enterprise Software{" "}
              <span className="text-[#dd0403]">
                Development Company
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-3 text-xl font-[400] italic text-black/75 leading-relaxed">
              Build Scalable Enterprise Software Systems for Complex Business
              Operations
            </p>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-6 text-black/70 max-w-2xl font-[300]">
              Enterprise software development services help organizations build
              scalable systems, modernize operational workflows, and connect
              business-critical platforms across teams and departments. Grafizen
              develops secure and scalable enterprise applications designed for
              complex business environments and evolving operational needs.
            </p>

            {/* Bullet Points */}
            <div className="mt-7 grid grid-cols-2 gap-3.5 max-w-2xl">
              {bulletPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#dd0403]">
                    <CheckCircle2
                      size={14}
                      className="stroke-[2.5]"
                    />
                  </div>

                  <span className="text-[13px] font-[300] text-black/70 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#dd0403] px-6 text-[14px] font-medium text-white shadow-[0_14px_35px_rgba(221,4,3,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303]"
              >
                <span>
                  Book 30-min Architecture Call
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full text-white">
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                  />
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* ================= RIGHT REVIEW CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full lg:col-span-6 flex flex-col items-center justify-center relative mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Dashed Hand-Drawn Arrow Guide */}
            <div className="hidden absolute left-10 lg:block w-full text-right -top-18 -mb-3 pointer-events-none">
              <img
                src={arrow}
                alt=""
                className="w-24 rotate-180 rotate-y-180"
              />
            </div>

            {/* Animated Rotating Card Container */}
            <div className="relative w-full max-w-md min-h-[380px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative w-full rounded-3xl border-2 border-black/10 bg-white p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {/* Floating Left Badge */}
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="absolute -left-4 top-10 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#dd0403] shadow-md"
                  >
                    <img
                      src={activeCard.badgeLeft}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  </motion.div>

                  {/* Floating Right Badge */}
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: 20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="absolute -right-4 bottom-16 flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#dd0403] shadow-md"
                  >
                    <img
                      src={activeCard.badgeRight}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  </motion.div>

                  {/* Client Avatar */}
                  <div className="flex justify-center -mt-14 mb-3">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full border-4 border-white bg-neutral-100 shadow-md overflow-hidden flex items-center justify-center">
                        <img
                          src={activeCard.avatar}
                          alt={activeCard.author}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";

                            if (e.currentTarget.nextElementSibling) {
                              e.currentTarget.nextElementSibling.classList.remove(
                                "hidden"
                              );
                            }
                          }}
                        />

                        <div className="hidden text-3xl">
                          👨🏽‍💼
                        </div>
                      </div>

                      {/* Status */}
                      <span className="absolute bottom-1 right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dd0403] opacity-60" />

                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#dd0403] border-2 border-white" />
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="flex justify-center mb-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#dd0403]/10 px-3 py-0.5 text-[11px] font-[400] text-[#dd0403] uppercase tracking-wider">
                      {activeCard.tag}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-center text-[14px] leading-relaxed text-black/55 px-2 min-h-[56px] flex items-center justify-center font-[300]">
                    “{activeCard.quote}”
                  </p>

                  {/* Author */}
                  <div className="mt-3 text-center">
                    <span className="text-sm font-[400] text-black">
                      — {activeCard.author}
                    </span>

                    <span className="block text-xs text-black/55 font-medium leading-relaxed">
                      {activeCard.role}
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="mt-3 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-[400] text-black">
                      <span className="h-2 w-2 rounded-full bg-[#dd0403]" />

                      Result:{" "}
                      <span className="text-[#dd0403]">
                        {activeCard.metric}
                      </span>
                    </span>
                  </div>

                  {/* Ratings */}
                  <div className="mt-4 pt-3 border-t border-black/10 grid grid-cols-2 gap-4 text-center">

                    {/* G2 */}
                    <div className="border-r border-black/10 pr-2">
                      <div className="flex justify-center gap-1 text-[#dd0403] mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="#dd0403"
                          />
                        ))}
                      </div>

                      <p className="text-xs font-[400] text-black">
                        Rated {activeCard.g2Rating} on{" "}
                        <span className="text-[#dd0403]">
                          G2
                        </span>
                      </p>
                    </div>

                    {/* Clutch */}
                    <div className="pl-2">
                      <div className="flex justify-center gap-1 text-[#dd0403] mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="#dd0403"
                          />
                        ))}
                      </div>

                      <p className="text-xs font-[400] text-black">
                        Rated {activeCard.clutchRating} on{" "}
                        <span className="text-black">
                          Clutch
                        </span>
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-5 flex items-center justify-center gap-3">

                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      (prev) =>
                        (prev - 1 + rotatingCards.length) %
                        rotatingCards.length
                    )
                  }
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:border-[#dd0403] hover:text-[#dd0403] transition-colors shadow-xs"
                  aria-label="Previous card"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-1.5">
                  {rotatingCards.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === dotIdx
                          ? "w-7 bg-[#dd0403]"
                          : "w-2 bg-black/20 hover:bg-black/40"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      (prev) =>
                        (prev + 1) % rotatingCards.length
                    )
                  }
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:border-[#dd0403] hover:text-[#dd0403] transition-colors shadow-xs"
                  aria-label="Next card"
                >
                  <ChevronRight size={16} />
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}