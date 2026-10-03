import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Lock, Check } from "lucide-react";
import DitherVeil from "../ui/DitherVeil";

/* ─── Client Avatars for Rating ───────────────────────────── */
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
];

/* ─── Company Logos (Microsoft, AWS, Google Cloud, Azure, IBM) ─── */
const partnerLogos = [
  {
    name: "Microsoft",
    render: () => (
      <div className="flex items-center gap-2 text-neutral-700 hover:text-black transition-colors">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <div className="bg-[#f25022] w-1.5 h-1.5" />
          <div className="bg-[#7fba00] w-1.5 h-1.5" />
          <div className="bg-[#00a4ef] w-1.5 h-1.5" />
          <div className="bg-[#ffb900] w-1.5 h-1.5" />
        </div>
        <span className="font-semibold text-sm tracking-tight text-neutral-600 font-sans">
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "AWS",
    render: () => (
      <div className="flex items-center text-neutral-700 hover:text-black transition-colors">
        <svg className="h-5 w-auto" viewBox="0 0 75 45" fill="none">
          <path
            d="M21.2 24.3c-2.3 0-4.3-.4-5.9-1.2l.9-3.2c1.3.7 3.1 1.2 4.9 1.2 2.3 0 3.7-1 3.7-2.7 0-1.5-1.1-2.4-3.3-3.2-3.4-1.2-5.4-2.8-5.4-5.6 0-3.6 2.9-6 7.4-6 2.1 0 3.8.4 5.1 1l-.9 3.2c-1.1-.5-2.6-.9-4.2-.9-2.3 0-3.5 1.1-3.5 2.6 0 1.4 1 2.2 3.3 3.1 3.4 1.3 5.4 2.8 5.4 5.7-.1 3.8-3 6-7.5 6zm20.8 0c-3.1 0-5.7-1.4-6.8-3.7l-.3 3.3h-3.6V4h4.1v7.6c1.1-2.2 3.6-3.6 6.6-3.6 5 0 8.6 3.9 8.6 8.2s-3.6 8.1-8.6 8.1zm-.7-3.6c3 0 5-2 5-4.6s-2-4.6-5-4.6-5 2-5 4.6 2 4.6 5 4.6z"
            fill="#232F3E"
          />
          <path
            d="M59.3 27.6c-13.4 9.9-32.9 14.8-49.6 14.8-7.7 0-15.1-1-18.7-2.8l1.4-3.3c3.2 1.6 9.8 2.5 17.3 2.5 15.6 0 33.7-4.6 46.2-13.8l3.4 2.6z"
            fill="#FF9900"
          />
          <path
            d="M62.7 23.3l-2.6 7.9-6.3-5.2 8.9-2.7z"
            fill="#FF9900"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Google Cloud",
    render: () => (
      <div className="flex items-center gap-2 text-neutral-700 hover:text-black transition-colors">
        <svg className="h-5 w-auto" viewBox="0 0 24 24" fill="none">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#4285F4"
          />
        </svg>
        <span className="font-semibold text-sm tracking-tight text-neutral-600 font-sans">
          Google Cloud
        </span>
      </div>
    ),
  },
  {
    name: "Azure",
    render: () => (
      <div className="flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M5.4 20h13.2l-3.3-6.5-6.6.1L5.4 20zM13 3.5L4 18.5l3.2 1.9 6.8-11.4 3.7 6.4 3.4-1.9L13 3.5z"
            fill="#0078D4"
          />
        </svg>
        <span className="font-semibold text-sm tracking-tight text-neutral-600 font-sans">
          Azure
        </span>
      </div>
    ),
  },
  {
    name: "IBM",
    render: () => (
      <span className="font-black text-base tracking-[0.2em] text-[#054ada] font-mono">
        IBM
      </span>
    ),
  },
];

/* ─── Security Feature Bullet Points ──────────────────────── */
const securityFeatures = [
  "Monitor and analyze data activity",
  "Detect and block suspicious behavior",
  "Prevent data breaches",
  "Ensure compliance automatically",
  "Generate security reports",
];

export default function AISecurityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-0">
        {/* ── MAIN 3-COLUMN HERO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center min-h-[75vh] -mt-3">
          {/* ════════════════════════════════════════════════════════════
              1. LEFT COLUMN: BADGE, HEADLINE, DESCRIPTION, CTA, RATING
             ════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-center z-20 text-left -mt-16"
          >
            {/* Eyebrow Badge with Brand Red Dash */}
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-5">
              <span className="h-px w-6 bg-[#dd0403]" />
              <span>AI-Powered Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold tracking-tight text-black leading-[1.1] mb-5">
              <span className="text-[#dd0403]">AI Security</span>
            {" "} 
              Agent  <br /> That
             
              Protects Data
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-[14px] font-[300] text-black/55 leading-relaxed max-w-sm mb-8">
              Autonomous AI agents that detect threats, prevent data breaches,
              and keep your business secure 24/7.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <a
                href="#demo"
                className="group inline-flex items-center gap-4 bg-[#121214] text-white rounded-full pl-6 pr-2 py-2 hover:bg-neutral-800 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(221,4,3,0.25)] hover:-translate-y-0.5 active:scale-95"
              >
                <span className="text-sm font-semibold tracking-wide">
                  Book a Demo
                </span>
                <span className="w-9 h-9 rounded-full  flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 ">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Social Proof & Rating */}
            <div className="flex items-center gap-4 pt-2">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="User"
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                  />
                ))}
              </div>

              {/* Stars & Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#dd0403]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#dd0403] stroke-none"
                      />
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-neutral-700">
                    4.9 rating
                  </span>
                </div>
                <span className="text-[11px] font-[300] text-black/55">
                  Trusted by 10,000+ security teams
                </span>
              </div>
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════════
              2. CENTER COLUMN: HUMAN HEAD PORTRAIT + DITHER VEIL
             ════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[460px] sm:min-h-[540px] lg:min-h-[620px]"
          >
            {/* Center ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#dd0403]/6 blur-[100px] pointer-events-none" />

            {/* Interactive DitherVeil Animation Container */}
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] max-w-[500px] flex items-center justify-center">
              <DitherVeil
                src="/image/aisecurity/ai-human-security.jpg"
                fit="contain"
                pattern="floyd"
                pixelSize={2}
                levels={2}
                palette="duotone"
                paperColor="#ffffff"
                inkColor="#18181b"
                contrast={1.15}
                brightness={0}
                revealRadius={180}
                softness={0.6}
                linger={1.2}
                clickBurst={true}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════════
              3. RIGHT COLUMN: FLOATING CARDS & HEADLINE
             ════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col justify-between space-y-8 z-20"
          >
            {/* ── CARD 1: AI Agent Active (Threat Monitor) ── */}
            <div className="bg-white/95 backdrop-blur-md rounded-[1.8rem] p-5 sm:p-6 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08)] border border-neutral-100 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-xs">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 leading-tight">
                    AI Agent Active
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-medium leading-tight mt-0.5">
                    Threats monitored in real-time
                  </p>
                </div>
              </div>

              {/* Bullet Features with Crimson Dots */}
              <ul className="space-y-2 text-[11px] leading-tight font-medium">
                {securityFeatures.map((text, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      i === securityFeatures.length - 1
                        ? "text-neutral-300"
                        : "text-neutral-600"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dd0403] shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── CARD 2: System Protection (99.7%) ── */}
            <div className="bg-white/95 backdrop-blur-md rounded-[1.6rem] p-5 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.06)] border border-neutral-100 max-w-[240px] self-start lg:self-end">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-medium text-neutral-500 leading-snug">
                  System
                  <br />
                  Protection
                </span>
                <span className="text-2xl font-black text-black tracking-tight leading-none">
                  99.7%
                </span>
              </div>
              <div className="flex items-center justify-end gap-1 text-[11px] font-bold text-[#dd0403] mt-2">
                <span>↑</span>
                <span>18% this week</span>
              </div>
            </div>

            {/* ── BOTTOM-RIGHT HEADLINE ── */}
            <div className="pt-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight leading-[1.12]">
                Your Data
                <br />
                <span className="text-[#dd0403]">Stays Protected.</span>
              </h2>
              <p className="text-sm font-[300] text-black/55 mt-2">
                Always. Everywhere.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            4. BOTTOM PARTNERS LOGOS BAR
           ════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 sm:mt-20 -lg:mt-24 pt-8 border-t border-neutral-200/70"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-6 text-center">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partnerLogos.map((partner, index) => {
              const RenderLogo = partner.render;
              return (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
                >
                  <RenderLogo />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
