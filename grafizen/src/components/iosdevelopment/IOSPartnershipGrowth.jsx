import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  RefreshCw,
  Cpu,
  Layers,
  Activity,
  Award,
  PhoneCall,
} from "lucide-react";
import CountUp from "../ui/CountUp";

const partnershipPillars = [
  {
    id: "submission",
    icon: Award,
    title: "App Store Submission & Approval SLA",
    badge: "90%+ First-Pass Approval",
    description:
      "We navigate Apple's rigorous Human Interface Guidelines (HIG) and App Store Review Standards, handling sandbox provisioning, TestFlight beta cohorts, and submission compliance to prevent rejections.",
    metrics: [
      { label: "Approval Track Record", value: "90%+" },
      { label: "Review Turnaround", value: "24-48h" },
      { label: "Compliance Check", value: "100% HIG" },
    ],
    liveStatus: "App Store Certified & Signed",
    gradient: "from-rose-500/10 via-neutral-50 to-white",
    dynamicIslandText: "App Store SLA",
  },
  {
    id: "compatibility",
    icon: Cpu,
    title: "Day-One Apple OS & Hardware Upgrades",
    badge: "Zero-Downtime Releases",
    description:
      "When Apple releases new iOS versions, iPhone form factors, or device capabilities (Dynamic Island, Apple Intelligence, Action Button), our engineers test against Xcode beta seeds so your app works seamlessly on day one.",
    metrics: [
      { label: "Beta Seed Testing", value: "Day 1" },
      { label: "API Deprecation Fixes", value: "Instant" },
      { label: "Multi-Device Parity", value: "100%" },
    ],
    liveStatus: "iOS 18+ & Apple Silicon Optimized",
    gradient: "from-blue-500/10 via-neutral-50 to-white",
    dynamicIslandText: "iOS 18 Ready",
  },
  {
    id: "telemetry",
    icon: Activity,
    title: "Real-Time Telemetry & 0-Crash Architecture",
    badge: "99.9% Crash-Free SLA",
    description:
      "Post-launch success relies on continuous health monitoring. We integrate live telemetry to track memory leaks, battery consumption, cold launch times, and crash rates, resolving anomalies before users notice.",
    metrics: [
      { label: "Crash-Free Rate", value: "99.98%" },
      { label: "Cold Launch Target", value: "<1.2s" },
      { label: "Telemetry Uptime", value: "24/7/365" },
    ],
    liveStatus: "Real-Time Telemetry Active",
    gradient: "from-emerald-500/10 via-neutral-50 to-white",
    dynamicIslandText: "Telemetry: 99.98%",
  },
  {
    id: "evolution",
    icon: Sparkles,
    title: "Dedicated iOS Pods & Product Evolution",
    badge: "Continuous Innovation",
    description:
      "Software isn't finished when it ships. Our dedicated iOS engineering pods work alongside your product managers to run A/B feature experiments, refine UX micro-interactions, and scale backend APIs as user demand surges.",
    metrics: [
      { label: "Release Cadence", value: "Bi-Weekly" },
      { label: "Sprint Velocity", value: "Predictable" },
      { label: "App Store Rating", value: "4.8+ Avg" },
    ],
    liveStatus: "Dedicated Swift Pod Engaged",
    gradient: "from-purple-500/10 via-neutral-50 to-white",
    dynamicIslandText: "Pod Active",
  },
];

export default function IOSPartnershipGrowth({ onContactClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = partnershipPillars[activeTab];
  const ActivePillarIcon = activePillar.icon;

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactSection = document.getElementById("contact") || document.getElementById("consultation");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "#contact";
      }
    }
  };

  return (
    <section
      id="partnership"
      className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28 selection:bg-[#dd0403]/15 selection:text-[#dd0403]"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* ── SECTION HEADER (MATCHING IOSServicesWorks LAYOUT & TYPOGRAPHY) ── */}
        <div className="mb-12 sm:mb-16 lg:mb-10 grid grid-cols-2 items-end gap-5">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-3">
              <span className="h-px w-6 bg-[#dd0403]" />
              <span>Long-Term iOS Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-black leading-[1.12]">
              Partnership &amp; Growth{" "}
              <span className="text-[#dd0403]">Beyond Launch</span>
            </h2>
          </div>

          <div>
            <p className="mt-4 text-base sm:text-[14px] font-[300] text-black/55 leading-5">
              Our iOS teams stay engaged through App Store submission, post-launch monitoring,
              and each major iOS version update, so your app never breaks when Apple ships a new release.
            </p>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ════ LEFT COLUMN: Interactive Partnership Pillars (Cols 1-7) ════ */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
            {partnershipPillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              const PillarIcon = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative py-6 sm:py-5 transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-neutral-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl" : "hover:bg-neutral-50/40"
                  }`}
                >
                  {/* Left accent bar for active item */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarBar"
                      className="absolute left-0 top-3 bottom-3 w-0 bg-[#dd0403] rounded-r"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/25"
                            : "bg-neutral-100 text-neutral-600 group-hover:bg-[#dd0403]/10 group-hover:text-[#dd0403]"
                        }`}
                      >
                        <PillarIcon className="h-5 w-5" strokeWidth={isActive ? 2.2 : 2} />
                      </div>
                      <h3
                        className={`text-lg sm:text-xl lg:text-[18px] font-[400] tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-black font-semibold"
                            : "text-neutral-800 group-hover:text-[#dd0403]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] flex items-center justify-center font-medium transition-colors ${
                        isActive
                          ? "bg-[#dd0403]/10 text-[#dd0403] font-semibold"
                          : "bg-neutral-100 text-black/55 group-hover:bg-neutral-200/60"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3.5 text-sm sm:text-xs font-light text-black/55 leading-relaxed sm:pl-[54px]">
                          {pillar.description}
                        </p>

                        {/* Pillar Metrics row */}
                        <div className="mt-4 sm:pl-[54px] grid grid-cols-3 gap-3">
                          {pillar.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-2xs"
                            >
                              <div className="text-base sm:text-lg font-bold text-black">
                                {m.value}
                              </div>
                              <div className="text-[10px] sm:text-[11px] text-black/55 font-normal">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ════ RIGHT COLUMN: All Right-Side Information Inside Tall iPhone Mockup ════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className="relative w-full max-w-[350px] sm:max-w-[365px] mx-auto">
              {/* <div className="pointer-events-none absolute -inset-4 rounded-[60px] bg-gradient-to-b from-[#dd0403]/8 via-neutral-100/20 to-[#dd0403]/6 blur-2xl" /> */}

              {/* ── Tall Front-Facing iPhone Device Frame ── */}
              <div className="relative w-full rounded-[52px] sm:rounded-[56px] bg-[#0c0c0c] p-2.5 sm:p-2 shadow-[0_30px_70px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.06)] border-[5px] sm:border-[6px] border-[#d8d8d8] ring-1 ring-black/10">
                
                {/* Physical Titanium Side Buttons */}
                {/* <div className="absolute -left-[7px] top-24 h-7 w-[2.5px] rounded-l bg-[#c8c8c8]" />
                <div className="absolute -left-[7px] top-36 h-12 w-[2.5px] rounded-l bg-[#c8c8c8]" />
                <div className="absolute -left-[7px] top-52 h-12 w-[2.5px] rounded-l bg-[#c8c8c8]" />
                <div className="absolute -right-[7px] top-36 h-16 w-[2.5px] rounded-r bg-[#c8c8c8]" /> */}

                {/* iPhone Screen Container (All Content Inside) */}
                <div className="relative rounded-[42px] sm:rounded-[46px] bg-gradient-to-b from-[#f8f9fc] via-white to-[#f5f6fa] overflow-hidden p-4 sm:p-4.5 pt-3 min-h-[610px] sm:min-h-[620px] flex flex-col justify-between border border-neutral-200/70 shadow-inner">
                  
                  {/* Top Area: Status Bar & Dynamic Island */}
                  <div>
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-xs font-semibold tracking-tight text-black">9:41</span>
                      
                      {/* Pill Dynamic Island */}
                      <div className="flex items-center gap-1.5 rounded-full bg-neutral-950 px-2.5 py-1 text-[9.5px] text-white shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="tracking-tight text-[9px] font-medium">{activePillar.dynamicIslandText}</span>
                      </div>

                      <div className="flex items-center gap-1 text-black">
                        <span className="text-[10px] font-bold tracking-tight">5G</span>
                        <div className="w-4 h-2.5 border border-neutral-900 rounded-2xs p-0.5 flex items-center rounded-sm">
                          <div className="w-full h-full bg-neutral-900 rounded-xs " />
                        </div>
                      </div>
                    </div>

                    {/* App Store Connect Live Header (Inside Phone) */}
                    <div className="flex items-center justify-between border-b border-neutral-200/70 pb-3 mb-2.5 mt-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-neutral-950 flex items-center justify-center text-white shadow-xs">
                          <Layers className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-black leading-tight">
                            App Store Connect Live
                          </h4>
                          <p className="text-[10px] text-black/55 font-medium mt-0.5">
                            Production Pod: Active
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 border border-emerald-200/70 text-[9.5px] font-bold uppercase tracking-wider text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Healthy</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Area: Dynamic Active Stage Card (Inside Phone) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar.id}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`relative rounded-2xl bg-gradient-to-br ${activePillar.gradient} p-3.5 border border-neutral-200/80 shadow-2xs my-1`}
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="uppercase tracking-wider font-semibold text-neutral-400">Current Phase</span>
                        {/* <span className="inline-flex items-center gap-1 rounded-full bg-[#dd0403]/10 px-2 py-0.5 text-[10px] font-bold text-[#dd0403]">
                          <ActivePillarIcon className="w-3 h-3" />
                          <span>{activePillar.badge}</span>
                        </span> */}
                      </div>

                      <div className="mt-1.5 text-sm sm:text-[15px] font-[400] text-black tracking-tight leading-snug">
                        {activePillar.liveStatus}
                      </div>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-black/55 font-[300]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Continuous iOS SLA Monitoring &amp; Support</span>
                      </div>

                      {/* Mini metric tags */}
                      <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
                        {activePillar.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="rounded-xl bg-white/95 p-1.5 border border-neutral-200/70 shadow-2xs">
                            <div className="text-xs font-[400] text-black leading-tight">{m.value}</div>
                            <div className="text-[9.5px] text-black/55 font-[300] truncate leading-tight mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Key SLA Indicators (Inside Phone) */}
                  <div className="space-y-2 my-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#dd0403]/10 flex items-center justify-center text-[#dd0403]">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-neutral-800">
                          Crash-Free User Rate
                        </span>
                      </div>
                      <span className="text-xs  font-[300] text-black">
                        99.98%
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#dd0403]/10 flex items-center justify-center text-[#dd0403]">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-neutral-800">
                          First-Pass App Store Pass
                        </span>
                      </div>
                      <span className="text-xs  font-[300] text-black">
                        &gt; 90%
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#dd0403]/10 flex items-center justify-center text-[#dd0403]">
                          <RefreshCw className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-neutral-800">
                          Major iOS Upgrade Continuity
                        </span>
                      </div>
                      <span className="text-xs font-mono font-[300] text-[#dd0403]">
                        Day SLA
                      </span>
                    </div>
                  </div>

                  {/* Bottom Area: CTA Button & Home Bar Indicator (Inside Phone) */}
                  <div className="pt-2.5 border-t border-neutral-200/70">
                    <button
                      onClick={handleContact}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#dd0403] py-2.5 sm:py-3 px-4 text-xs sm:text-[13px] font-semibold text-white shadow-md shadow-[#dd0403]/25 transition-all duration-300 hover:bg-[#c00302] hover:shadow-lg hover:shadow-[#dd0403]/35 cursor-pointer active:scale-[0.98]"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Talk to Our iOS Team</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <p className="mt-1.5 text-center text-[10.5px] text-black/55 font-[300]">
                      Free 30-min architecture review with an iOS lead.
                    </p>

                    {/* iOS Home Bar Indicator */}
                    <div className="mt-2 flex justify-center pb-0.5">
                      <div className="h-1 w-28 rounded-full bg-neutral-900/30" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
}
