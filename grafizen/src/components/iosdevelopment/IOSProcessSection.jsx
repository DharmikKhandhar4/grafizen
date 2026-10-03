import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────────── */
const STEPS = [
  {
    id: "01",
    title: "Understand the Product",
    short: "Discovery",
    body: "Business goals, target users, workflows, and product requirements shape the foundation. This stage defines what the application needs to achieve.",
    accent: "#dd0403",
    icon: "/image/ios/process/cube.png",
  },
  {
    id: "02",
    title: "Plan the Apple Experience",
    short: "Strategy",
    body: "Map the product across iPhone, iPad, Mac, Apple Watch, Apple TV, and Vision Pro. Platform capabilities and integrations defined before design begins.",
    accent: "#dd0403",
    icon: "/image/ios/process/development-plan.png",
  },
  {
    id: "03",
    title: "Design the Interface",
    short: "Design",
    body: "User journeys become intuitive interfaces combining brand identity with Apple's HIG interaction patterns ,reating beautiful, accessible, and fluid products.",
    accent: "#dd0403",
    icon: "/image/ios/process/user-experience.png",
  },
  {
    id: "04",
    title: "Build & Integrate",
    short: "Engineering",
    body: "Swift, SwiftUI, UIKit, and Apple frameworks bring the product to life — with security, performance, and AI capabilities at the core.",
    accent: "#dd0403",
    icon: "/image/ios/process/software.png",
  },
  {
    id: "05",
    title: "Test & Prepare for Launch",
    short: "QA & Release",
    body: "Tested across every Apple device and OS. Certificates, provisioning, App Store metadata, and submission prepared for release.",
    accent: "#dd0403",
    icon: "/image/ios/process/exam.png",
  },
  {
    id: "06",
    title: "Launch, Learn & Improve",
    short: "Growth",
    body: "Post-launch analytics, user feedback, and new Apple capabilities continuously guide improvements and ecosystem expansion.",
    accent: "#dd0403",
    icon: "/image/ios/process/increasing.png",
  },
];

/* ─── Single card — icon overflows outside top ─────────────── */
function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-6% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      /* outer wrapper — overflow visible so icon pokes out top */
      className="relative pt-16 group"
    >
      {/* ── Icon — absolutely placed, overflowing above card ── */}
      <div className="absolute top-5 right-2 z-10 [perspective:1000px]">
        <div
          className="w-20 h-20 rounded-[1.6rem] flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 bg-white"
        >
          <img
            src={step.icon}
            alt={step.title}
            className="w-14 h-14 object-contain bg-white transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(360deg)]"
          />
        </div>
      </div>

      {/* ── Card body ── */}
      <div
        className="relative rounded-[1rem] pt-6 pb-7 px-6 border transition-all duration-300 group-hover:shadow-[0_12px_32px_-8px_rgba(221,4,3,0.14)] group-hover:border-[#dd0403]/20"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 16px -4px rgba(0,0,0,0.07)",
        }}
      >
        {/* Step number — top left */}
        {/* <span className="absolute top-4 left-5 text-[0.7rem] font-bold tracking-widest text-neutral-400">
          {step.id}
        </span> */}

        {/* Title — bold uppercase */}
        <h3 className="text-[1.05rem] font-[400] uppercase tracking-tight text-[#dd0403] leading-snug mb-3">
          {step.title}
        </h3>

        {/* Accent divider */}
        {/* <div
          className="w-8 h-[2px] rounded-full mb-3"
          style={{ background: step.accent }}
        /> */}

        {/* Description */}
        <p className="text-[13px] text-black/55 leading-relaxed fron-[300]">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Header ───────────────────────────────────────────────── */
function Header() {
  return (
    <div className="mb-20 sm:mb-24 grid grid-cols-1 lg:grid-cols-2 items-end gap-5">
      <div>
        <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-3">
          <span className="h-px w-6 bg-[#dd0403]" />
          <span>iOS App Development Process</span>
          
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[48px] font-bold tracking-tight text-black leading-[1.12]">
          From Idea to <span className="text-[#dd0403]">App Store</span>
       
        
        </h2>
      </div>
      <div>
        <p className="mt-4 text-base sm:text-[14px] font-[300] text-black/55 leading-5">
          A successful iOS application takes more than development alone. It
          requires a step‑by‑step process followed by a team who can precisely
          turn the application vision into the final product. Here is the one
          our iOS app development company follows.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Export ──────────────────────────────────────────── */
export default function IOSProcessSection() {
  return (
    <section
      id="ios-process"
   
      className="relative bg-white overflow-hidden py-24 sm:py-20"
    >
      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-0">
        <Header />

        {/* 3-column grid — needs overflow-visible so icons poke out */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
          {STEPS.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-neutral-200"
        >
          <div>
            <p className="text-neutral-900 font-bold text-lg">
              Ready to build your iOS app?
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              Let's walk through the process together.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #dd0403 0%, #a50000 100%)",
            }}
          >
            Start Your iOS Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
