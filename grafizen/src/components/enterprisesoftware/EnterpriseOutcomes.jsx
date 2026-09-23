import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  BrainCircuit,
  Rocket,
  TrendingDown,
  Workflow,
  ShieldCheck,
  Network,
  CheckCircle2,
} from "lucide-react";

const outcomes = [
  {
    id: 1,
    tabTitle: "Process Intelligence",
    tag: "AI & Decision Logic",
    title: "AI-Augmented Process Intelligence",
    description:
      "Enterprise software that captures operational data but does nothing with it is leaving efficiency on the table. We build AI-driven process intelligence directly into enterprise applications. Automated decision routing, anomaly detection, and predictive workflow optimization reduce manual intervention without requiring a separate AI layer bolted on afterward.",
    image: "/image/enterpricesoftware/first.png",
    icon: BrainCircuit,
    metric: "Less Manual Intervention",
    value: "AI Core",
    highlights: [
      "Automated Decision Routing",
      "Real-time Anomaly Detection",
      "Predictive Workflow Engines"
    ],
  },
  {
    id: 2,
    tabTitle: "Time-to-Production",
    tag: "Velocity & Delivery",
    title: "Faster Time-to-Production for Complex Initiatives",
    description:
      "Large software programs have a tendency to absorb timelines. We address this through rigorous scope governance, modular delivery structures, and enterprise-grade software development practices that allow parallel workstreams. Teams move from initial architecture to production release with significantly fewer delays than industry averages.",
    image: "/image/enterpricesoftware/second.png",
    icon: Rocket,
    metric: "Faster Release Cycles",
    value: "60% ↗",
    highlights: [
      "Rigorous Scope Governance",
      "Parallel Workstream Delivery",
      "Zero-Downtime Releases"
    ],
  },
  {
    id: 3,
    tabTitle: "Cost Reduction",
    tag: "Resource Optimization",
    title: "Operational Cost Reduction at Scale",
    description:
      "We architect systems with cost efficiency integrated into the data layer, infrastructure provisioning, and integration design. Our teams target waste in processing overhead, redundant services, and licensing inefficiency across enterprise portfolios. Enterprise software should cost less to run as adoption grows, not more.",
    image: "/image/enterpricesoftware/thred.png",
    icon: TrendingDown,
    metric: "Lower Cost of Ownership",
    value: "40% ↓",
    highlights: [
      "Optimized Cloud Footprint",
      "License Waste Elimination",
      "Data Layer Streamlining"
    ],
  },
  {
    id: 4,
    tabTitle: "Workflow Automation",
    tag: "Operational Efficiency",
    title: "Reduction in Manual Operational Overhead",
    description:
      "Where human intervention fills the gaps in poorly designed systems, we build the software logic that should have been there from the start. Workflow automation, intelligent routing, exception handling, and audit trail generation are scoped into the architecture from the first sprint.",
    image: "/image/enterpricesoftware/four.png",
    icon: Workflow,
    metric: "Reduced Manual Overhead",
    value: "Zero Gap",
    highlights: [
      "Automated Exception Handling",
      "Native Audit Generation",
      "End-to-End Orchestration"
    ],
  },
  {
    id: 5,
    tabTitle: "Compliance Ready",
    tag: "Governance by Design",
    title: "Compliance Readiness without Engineering Paralysis",
    description:
      "Regulatory requirements can slow down software programs when treated as post-build checkboxes. We incorporate compliance controls, audit mechanisms, and data governance standards during architecture. The result is software that passes regulatory scrutiny without requiring a parallel compliance engineering effort.",
    image: "/image/enterpricesoftware/five.png",
    icon: ShieldCheck,
    metric: "Compliance by Design",
    value: "100% Audit",
    highlights: [
      "SOC2 & GDPR Frameworks",
      "Built-in Audit Trails",
      "Role-Based Cryptographic Access"
    ],
  },
  {
    id: 6,
    tabTitle: "System Integration",
    tag: "Fidelity & Scale",
    title: "Integration Fidelity Across Heterogeneous Environments",
    description:
      "Most enterprise environments run dozens of systems with inconsistent APIs, aging middleware, and data models that were never designed to communicate. We build integration layers that handle this reality, connecting modern applications with legacy infrastructure through well-governed, monitored pipelines.",
    image: "/image/enterpricesoftware/six.png",
    icon: Network,
    metric: "Connected Architecture",
    value: "Sync",
    highlights: [
      "Bi-Directional Pipeline Sync",
      "Legacy & Cloud Connectors",
      "Real-Time Stream Monitoring"
    ],
  },
];

export default function EnterpriseOutcomes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeOutcome = outcomes[activeIndex];
  const Icon = activeOutcome.icon;

  // Auto advance every 6.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % outcomes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const nextOutcome = () => {
    setActiveIndex((prev) => (prev + 1) % outcomes.length);
  };

  const prevOutcome = () => {
    setActiveIndex((prev) => (prev === 0 ? outcomes.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 md:py-16  py-10 sm:px-6 lg:px-8 lg:pt-12">
      {/* Soft Background Elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dd0403]/[0.025] blur-3xl" />
      {/* <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#dd0403]/[0.03] blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER (EXACT SAME FONT, SIZE & COLOR)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-6 max-w-3xl text-center sm:mb-8"
        >
          {/* Small Label */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-5 bg-[#dd0403]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-[9px]">
              Enterprise Outcomes
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[28px] font-[600] leading-[1.05] tracking-[-0.035em] text-[#111] sm:text-[40px] md:text-[46px]">
            Enterprise Outcomes{" "}
            <span className="text-[#dd0403]">
              We Engineer
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[650px] text-[12px] leading-5 text-black/50 sm:text-[14px] sm:leading-6">
            Our enterprise software development enables lower
            cost-per-transaction, faster release cycles, measurable
            reduction in manual intervention, and infrastructure
            that's effortless to maintain.
          </p>
        </motion.div>

        {/* =====================================================
            UNIQUE ARCHITECTURAL SHOWCASE (NO CARDS)
        ====================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative "
        >
          {/* TOP STEPPER NAVIGATION (BORDERLESS PILL RAIL) */}
          <div className="md:mb-10 mb-4 sm:mb-8 overflow-x-auto no-scrollbar 
`overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max mx-auto justify-start lg:justify-center px-2  ">
              {outcomes.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full  text-xs transition-all duration-300${
                      isActive
                        ? "bg-[#dd0403]/10 text-[#dd0403] font-semibold shadow-sm "
                        : "text-black/55 hover:text-black   bg-[#dd0403]/5  "
                    }`}
                  >
                    {/* <span
                      className={` text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#dd0403] text-white"
                          : "bg-slate-100 text-black/40 group-hover:text-black/70"
                      }`}
                    >
                      0{idx + 1}
                    </span> */}

                    <span className="tracking-tight whitespace-nowrap">
                      {item.tabTitle}
                    </span>

                    
                    {isActive && (
                      <motion.span
                        layoutId="activeTabGlow"
                        className="absolute -bottom-1 left-4 right-4 bg-[#dd0403] rounded-full shadow-[0_2px_8px_rgba(221,4,3,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN STAGE: EDITORIAL LEFT + FRAMELESS 3D DIAGRAM RIGHT */}
        <div className="w-full max-w-[1600px] mx-auto">
      {/* ========================================================= */}
      {/* 1. DESKTOP / LAPTOP LAYOUT (lg:block - UNCHANGED DESIGN) */}
      {/* ========================================================= */}
      <div className="hidden lg:grid grid-cols-[1fr_1.3fr] gap-14 items-center min-h-[500px] border-0 p-0 rounded-2xl">
        {/* LEFT COLUMN: EDITORIAL CONTENT & METRICS */}
        <div className="flex flex-col justify-between h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Category Tag & Icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#dd0403]/10 text-[#dd0403] flex items-center justify-center shrink-0">
                  {Icon && <Icon size={20} strokeWidth={2} />}
                </div>
                <div>
                  <p className="text-[13px] font-[400] uppercase tracking-[0.2em] text-[#dd0403]">
                    {activeOutcome.tag}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[32px] font-[400] text-[#111] leading-[1.18] tracking-[-0.025em]">
                {activeOutcome.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-justify text-black/55 font-[300] max-w-xl">
                {activeOutcome.description}
              </p>

              {/* Key Highlights Checklist */}
              <div className="space-y-2">
                {activeOutcome.highlights?.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-[13px] font-[300] text-black/70"
                  >
                    <CheckCircle2 size={14} className="text-[#dd0403] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-black/[0.08] flex items-center gap-6" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: FRAMELESS 3D ARCHITECTURAL DIAGRAM */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Soft Ambient Radiance in Background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-[#dd0403]/[0.04] via-[#dd0403]/[0.015] to-transparent blur-3xl" />
            <div className="w-[60%] h-[60%] rounded-full border border-black/[0.03] animate-[spin_60s_linear_infinite]" />
          </div>

          {/* Pure Frameless 3D Illustration */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.03, y: -15 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full flex items-center justify-center"
            >
              <img
                src={activeOutcome.image}
                alt={activeOutcome.title}
                className="w-full max-h-[460px] object-contain select-none transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE & TABLET LAYOUT (lg:hidden - TAILORED MOBILE CARD) */}
      {/* ========================================================= */}
      <div className="block lg:hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:gap-5 gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-4 sm:p-7 shadow-xs"
          >
            {/* Top Bar: Icon + Category Tag */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#dd0403]/10 text-[#dd0403] flex items-center justify-center shrink-0">
                  {Icon && <Icon size={16} strokeWidth={2} />}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#dd0403]">
                  {activeOutcome.tag}
                </span>
              </div>
            </div>

            {/* Mobile Title */}
            <h3 className="text-xl sm:text-2xl font-[400] text-[#111] leading-snug tracking-tight">
              {activeOutcome.title}
            </h3>

            {/* Architectural Image Box with Radiant Background */}
            <div className="relative w-full rounded-xl md:bg-gradient-to-b from-neutral-50 to-neutral-100/60 md:p-4 border border-neutral-100 flex items-center justify-center overflow-hidden min-h-[185px] sm:min-h-[260px]">
              <div className="absolute inset-0 md:bg-[#dd0403]/5 blur-2xl pointer-events-none" />
              <img
                src={activeOutcome.image}
                alt={activeOutcome.title}
                className="relative z-10 w-full max-h-[220px] sm:max-h-[280px] object-contain select-none"
              />
            </div>

            {/* Mobile Description */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal hidden md:flex">
              {activeOutcome.description}
            </p>

            {/* Key Highlights Checklist (Compact Grid for Mobile) */}
            {/* {activeOutcome.highlights && activeOutcome.highlights.length > 0 && (
              <div className="pt-2 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeOutcome.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle2 size={14} className="text-[#dd0403] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}