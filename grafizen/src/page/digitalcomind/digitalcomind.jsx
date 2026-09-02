import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe2,
  Layers,
  MapPin,
  Megaphone,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import img1  from "../../../public/image/CompleteServices/img2.png";

/* --- animation variants --- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* --- service pills --- */
const services = [
  { label: "SEO", icon: Search, color: "#dd0403" },
  { label: "Google Ads", icon: Megaphone, color: "#e05c00" },
  { label: "Social Media", icon: Users, color: "#0277bd" },
  { label: "Performance Mktg", icon: BarChart3, color: "#2e7d32" },
  { label: "Branding", icon: Sparkles, color: "#6a1b9a" },
  { label: "Web Dev", icon: Layers, color: "#dd0403" },
];

/* --- ticker --- */
const ticker = [
  "SEO","•","Google Ads","•","Social Media","•","Branding","•",
  "Web Development","•","Performance Marketing","•","Content Marketing","•","AI Solutions","•",
];

/* --- metrics --- */
const metrics = [
  { label: "Organic Reach", value: "+180%", icon: TrendingUp },
  { label: "Conversion Rate", value: "+63%", icon: Target },
  { label: "Markets Served", value: "India-wide", icon: Globe2 },
];

/* --- trust bullets --- */
const trust = [
  "Full-service digital team",
  "ROI-focused campaigns",
  "Transparent reporting",
  "Local + National reach",
];

export default function DigitalCoIndia() {
  return (
    <section className="relative overflow-hidden bg-white text-[#111]">

      {/* -- BACKGROUND -- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #111 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#dd0403] blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-[#1565c0] blur-[120px]"
        />
      </div>

      {/* -- TICKER STRIP -- */}
      {/* <div className="relative z-10 overflow-hidden border-b border-black/[0.07] bg-white/40 backdrop-blur-sm py-2">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-6 whitespace-nowrap px-4"
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                item === "•" ? "text-[#dd0403]" : "text-neutral-500"
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div> */}

      {/* -- MAIN HERO -- */}
      <div className="relative z-10 mx-auto max-w-[95%] px-4 pb-14 pt-10 sm:px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">

          {/* -- LEFT -- */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow pill */}
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full   py-1.5"
            >
              {/* <span className="relative flex h-1.5 w-1.5"> */}
                {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dd0403]/60" /> */}
                <span className="relative inline-flex h-[2px] w-10  bg-[#dd0403]" />
              {/* </span> */}
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] ">
                Digital Marketing Company in India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[32px] font-[600] leading-[1.12] tracking-[-0.03em] sm:text-[38px] lg:text-[42px]"
            >
              Your Growth Partner
              <span className="block mt-1 text-neutral-400 font-[400]">
                for Digital India.
              </span>
              <span className="mt-2 block">
                <span className="relative inline-block">
                  <span className="relative z-10 text-white px-1 ">Smarter Marketing,</span>
                  <span className="absolute inset-0 -skew-x-10 bg-[#dd0403] " />
                </span>{" "}
                <span className="text-[#dd0403]">Real Results.</span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-[13px] leading-6 text-neutral-500 sm:text-sm sm:leading-7"
            >
              Grafizen is a full-service digital marketing company helping
              businesses across India grow through{" "}
              <span className="font-semibold text-neutral-700">
                SEO, paid advertising, social media, branding
              </span>{" "}
              and conversion-optimised web experiences.
            </motion.p>

            {/* Trust bullets 2-col grid */}
            <motion.div variants={fadeUp} className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[12px] font-medium text-neutral-500">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10">
                    <Check size={10} strokeWidth={3} className="text-[#dd0403]" />
                  </span>
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#dd0403] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(221,4,3,0.25)]"
              >
                Get a Free Strategy Call
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={11} />
                </span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-5 py-2.5 text-xs font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white"
              >
                View Our Services
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* City strip */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
              <MapPin size={13} className="text-[#dd0403]" />
              <span>Serving businesses across</span>
              {["Mumbai", "Delhi", "Bangalore", "Rajkot", "Pune", "+more"].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-black/[0.07] bg-white/70 px-2 py-0.5 font-medium text-neutral-600 shadow-sm"
                >
                  {city}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* -- RIGHT visual panel -- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img src={img1} alt="" />
            {/* <div className="relative overflow-hidden rounded-[1.8rem] border border-black/[0.08] bg-white/50 p-5 shadow-[0_4px_40px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:p-6">

          
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Campaign Dashboard
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-neutral-800">
                    India-Wide Performance
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/30">
                  <TrendingUp size={15} />
                </div>
              </div>

        
              <div className="relative mt-4 h-28 w-full">
                {[0, 33, 66, 100].map((pct) => (
                  <div
                    key={pct}
                    className="absolute inset-x-0 border-t border-black/[0.06]"
                    style={{ top: `${pct}%` }}
                  />
                ))}
                <svg
                  viewBox="0 0 480 110"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="indiaGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#dd0403" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#dd0403" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,95 C40,88 60,90 100,72 C140,54 150,68 195,48 C240,28 255,52 290,36 C325,20 345,28 380,14 C415,2 440,8 480,0 L480,110 L0,110 Z"
                    fill="url(#indiaGrad)"
                  />
                  <motion.path
                    d="M0,95 C40,88 60,90 100,72 C140,54 150,68 195,48 C240,28 255,52 290,36 C325,20 345,28 380,14 C415,2 440,8 480,0"
                    fill="none"
                    stroke="#dd0403"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="480" cy="0" r="4" fill="#dd0403"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                  />
                </svg>
                <div className="absolute right-0 -top-3 rounded-lg border border-[#dd0403]/20 bg-[#dd0403]/8 px-2.5 py-1">
                  <span className="text-xs font-bold text-[#dd0403]">+147% growth</span>
                </div>
              </div>

          
              <div className="mt-4 grid grid-cols-3 gap-2">
                {metrics.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-2xl border border-black/[0.07] bg-white/60 px-3 py-2.5"
                  >
                    <Icon size={13} className="text-[#dd0403]" />
                    <p className="text-sm font-bold text-neutral-900 leading-none">{value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>

        
              <div className="mt-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                  What we do
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map(({ label, icon: Icon, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 shadow-sm"
                    >
                      <Icon size={11} style={{ color }} />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Floating badge — Pan-India */}
            {/* <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 hidden rounded-2xl border border-black/[0.09] bg-white px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dd0403]/10">
                  <Globe2 size={15} className="text-[#dd0403]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Reach</p>
                  <p className="text-sm font-bold text-neutral-900 leading-tight">Pan-India</p>
                </div>
              </div>
            </motion.div> */}

            {/* Floating badge — Campaigns */}
            {/* <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-10 hidden rounded-2xl border border-black/[0.09] bg-white px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dd0403]/10">
                  <Zap size={15} className="text-[#dd0403]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Campaigns</p>
                  <p className="text-sm font-bold text-neutral-900 leading-tight">Live & Scaling</p>
                </div>
              </div>
            </motion.div> */}

          </motion.div>
        </div>

        {/* -- BOTTOM TRUST BAR -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 border-t border-black/[0.08] pt-7"
        >
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
            Built for every kind of Indian business
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Search, title: "SEO-First Approach", sub: "Rank higher, attract the right audience" },
              { icon: BarChart3, title: "Performance Ads", sub: "Google & Meta campaigns that convert" },
              { icon: Users, title: "Social Media Growth", sub: "Build community and brand authority" },
              { icon: Globe2, title: "Nationwide Reach", sub: "Local expertise, pan-India execution" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-black/[0.07]">
                  <Icon size={16} className="text-[#dd0403]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-800">{title}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-400 leading-snug">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
