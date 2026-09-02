import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  BarChart3,
  Users,
  Rocket,
  TrendingUp,
  Crown,
  Hexagon,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  X,
  ExternalLink,
  ShieldCheck,
  Award,
} from "lucide-react";
import first from "../../../public/image/CompleteServices/front-end-programming.png";
import growth from "../../../public/image/growth.png";
import growingbusiness from "../../../public/image/growing-business.png";
import webpage from "../../../public/image/componentsimage/web-page.png";

export default function DigitalMarketingExperts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SEO & Growth",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <section className="relative w-full min-h-screen bg-white text-[#1a1a1a] font-['Poppins',sans-serif] overflow-hidden selection:bg-[#dd0403] selection:text-white   px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
      {/* ================= BACKGROUND ELEMENTS ================= */}
      {/* Subtle dotted world map / grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#c8beae" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Top right ambient gradient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#fde6e6]/60 via-[#faebe4]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#f3e7da]/40 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1380px] w-full mx-auto relative z-10">
        {/* ================= HERO CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center min-h-[620px]">
          {/* ──────────────── LEFT COLUMN: Typography & Content ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center pt-2 lg:pt-0"
          >
            {/* Eyebrow badge with red horizontal line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#dd0403] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#dd0403] uppercase">
                Digital Strategy, Real Impact
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[54px] xl:text-[54px] font-[600] text-[#111111] leading-[1.08] tracking-[-0.02em]">
              Digital Marketing <br className="hidden sm:inline" />
              Experts In <br className="hidden sm:inline" />
              <span className="text-[#dd0403]  [600]">Rajkot.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[#555048] text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              We help businesses in Rajkot grow online, generate quality leads
              and achieve measurable success.
            </p>

            {/* 4 Feature Badges in a Row */}
            <div className="mt-8 pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 items-stretch border-t border-b sm:border-y-0 border-[#e5dcce]/70 py-4 sm:py-0">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5 pr-2 sm:border-r border-[#e5dcce]">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <img
                    src={first}
                    alt="Data-driven strategies"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="text-[12px] font-semibold text-[#222] leading-snug">
                  Data-Driven <br />
                  <span className="font-medium text-[#666]">Strategies</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5 sm:px-2 sm:border-r border-[#e5dcce]">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <img
                    src={growth}
                    alt="Measurable growth"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="text-[12px] font-semibold text-[#222] leading-snug">
                  Measurable <br />
                  <span className="font-medium text-[#666]">Growth</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5 sm:px-2 sm:border-r border-[#e5dcce]">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <img
                    src={growingbusiness}
                    alt="ROI focused campaigns"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="text-[12px] font-semibold text-[#222] leading-snug">
                  ROI Focused <br />
                  <span className="font-medium text-[#666]">Campaigns</span>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-2.5 sm:pl-2">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <img
                    src={webpage}
                    alt="Faster results"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="text-[12px] font-semibold text-[#222] leading-snug">
                  Faster <br />
                  <span className="font-medium text-[#666]">Results</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-2.5 bg-[#dd0403] hover:bg-[#c00302] text-white font-medium text-[15px] px-7 py-3 rounded-xl shadow-[0_8px_20px_rgba(221,4,3,0.26)] hover:shadow-[0_12px_26px_rgba(221,4,3,0.36)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#our-work"
                className="group inline-flex items-center gap-2 text-[#111111] hover:text-[#dd0403] font-semibold text-[15px] transition-colors duration-150 cursor-pointer py-2"
              >
                <span>See Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* ──────────────── CENTER & RIGHT AREA: Rocket, Growth Wave & Floating Metric Cards ──────────────── */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[480px] lg:min-h-[480px] mt-6 lg:mt-0">
            {/* Background Warm Arch Dome */}
            <div className="absolute w-[360px] sm:w-[440px] md:w-[480px] h-[480px] sm:h-[490px] rounded-t-[240px] bg-gradient-to-t from-[#ebdacf]/60 via-[#f4eae0]/40 to-transparent border-t border-l border-r border-[#e5d6c4]/60 -bottom-6 z-0" />

            {/* Dynamic Growth Trajectory Curve Behind Rocket */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
              viewBox="0 0 600 500"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="curveGold"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#C1904B" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#C1904B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E5A93C" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient
                  id="curveRed"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#dd0403" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#dd0403" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff2a29" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* Lower Golden Wave */}
              <motion.path
                d="M 50 380 Q 140 330 220 370 T 380 320 Q 460 270 540 280 T 600 240"
                stroke="url(#curveGold)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Ascending Red Trajectory Line */}
              <motion.path
                d="M 120 400 Q 210 320 280 350 T 420 260 Q 480 180 570 70"
                stroke="url(#curveRed)"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />

              {/* Glowing Milestone Dots Along the Line */}
              <circle
                cx="210"
                cy="335"
                r="4.5"
                fill="#f7f5f1"
                stroke="#C1904B"
                strokeWidth="2.5"
              />
              <circle
                cx="280"
                cy="350"
                r="4.5"
                fill="#f7f5f1"
                stroke="#dd0403"
                strokeWidth="2.5"
              />
              <circle
                cx="420"
                cy="260"
                r="5"
                fill="#f7f5f1"
                stroke="#C1904B"
                strokeWidth="3"
              />
              <circle
                cx="500"
                cy="150"
                r="4.5"
                fill="#f7f5f1"
                stroke="#dd0403"
                strokeWidth="2.5"
              />

              {/* Arrow Head at top right */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              >
                <path d="M 565 65 L 575 70 L 570 80 Z" fill="#dd0403" />
              </motion.g>
            </svg>

            {/* 3D Rocket Graphic Container with Hover & Floating animation */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 flex flex-col items-center justify-center -ml-8 sm:-ml-12 lg:-ml-20 rotate-20"
            >
              {/* Rocket SVG Illustration */}
              <div className="relative w-[180px] sm:w-[220px] md:w-[250px] h-[340px] sm:h-[390px] md:h-[420px] flex items-center justify-center  ">
                <svg
                  viewBox="0 0 280 440"
                  className="w-full h-full drop-shadow-[0_20px_35px_rgba(221,4,3,0.18)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Rocket Body Gradient */}
                    <linearGradient
                      id="bodyGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="35%" stopColor="#FAF7F2" />
                      <stop offset="70%" stopColor="#EDE6DC" />
                      <stop offset="100%" stopColor="#D5C7B5" />
                    </linearGradient>

                    {/* Red Nose & Fins Gradient with #dd0403 */}
                    <linearGradient
                      id="redNoseGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ff3837" />
                      <stop offset="50%" stopColor="#dd0403" />
                      <stop offset="100%" stopColor="#9e0202" />
                    </linearGradient>

                    {/* Left Wing Gradient */}
                    <linearGradient
                      id="wingLeftGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#ff3837" />
                      <stop offset="70%" stopColor="#dd0403" />
                      <stop offset="100%" stopColor="#870202" />
                    </linearGradient>

                    {/* Right Wing Gradient */}
                    <linearGradient
                      id="wingRightGrad"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#e81312" />
                      <stop offset="70%" stopColor="#b50302" />
                      <stop offset="100%" stopColor="#690101" />
                    </linearGradient>

                    {/* Gold Ring Gradient */}
                    <linearGradient
                      id="goldRing"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F5D59A" />
                      <stop offset="50%" stopColor="#C1904B" />
                      <stop offset="100%" stopColor="#875E26" />
                    </linearGradient>

                    {/* Window Glass Gradient */}
                    <radialGradient id="windowGlass" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#3A536B" />
                      <stop offset="60%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </radialGradient>

                    {/* Thruster Flame Gradient */}
                    <linearGradient
                      id="thrusterFire"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="20%" stopColor="#FFF2A3" />
                      <stop offset="55%" stopColor="#FFA629" />
                      <stop
                        offset="85%"
                        stopColor="#dd0403"
                        stopOpacity="0.85"
                      />
                      <stop offset="100%" stopColor="#9e0202" stopOpacity="0" />
                    </linearGradient>

                    {/* Outer Flame Glow */}
                    <radialGradient id="fireGlow" cx="50%" cy="10%" r="90%">
                      <stop offset="0%" stopColor="#FFDE6A" stopOpacity="0.9" />
                      <stop
                        offset="40%"
                        stopColor="#FF9E1B"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="80%"
                        stopColor="#dd0403"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#f7f5f1" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Left Fin */}
                  <path
                    d="M 98 210 C 85 240 50 265 42 290 C 38 305 48 310 65 304 C 85 296 98 275 104 260 Z"
                    fill="url(#wingLeftGrad)"
                  />
                  <path
                    d="M 98 210 C 88 238 60 262 52 284 C 55 284 75 275 99 248 Z"
                    fill="#ff4d4d"
                    opacity="0.5"
                  />

                  {/* Right Fin */}
                  <path
                    d="M 182 210 C 195 240 230 265 238 290 C 242 305 232 310 215 304 C 195 296 182 275 176 260 Z"
                    fill="url(#wingRightGrad)"
                  />
                  <path
                    d="M 182 210 C 192 238 220 262 228 284 C 225 284 205 275 181 248 Z"
                    fill="#690101"
                    opacity="0.4"
                  />

                  {/* Thruster Nozzle */}
                  <path
                    d="M 118 280 L 162 280 L 168 298 L 112 298 Z"
                    fill="#3A332E"
                  />
                  <path
                    d="M 122 280 L 158 280 L 162 294 L 118 294 Z"
                    fill="#1F1A16"
                  />
                  <ellipse cx="140" cy="298" rx="28" ry="6" fill="#14100C" />

                  {/* Animated Thruster Flame */}
                  <g className="animate-pulse">
                    {/* Outer Glow */}
                    <path
                      d="M 115 298 Q 95 360 140 420 Q 185 360 165 298 Z"
                      fill="url(#fireGlow)"
                    />
                    {/* Inner Intense Flame */}
                    <path
                      d="M 124 298 Q 112 345 140 395 Q 168 345 156 298 Z"
                      fill="url(#thrusterFire)"
                    />
                    {/* White-Hot Core */}
                    <ellipse
                      cx="140"
                      cy="308"
                      rx="14"
                      ry="16"
                      fill="#FFFFFF"
                      opacity="0.95"
                    />
                  </g>

                  {/* Rocket Main Body */}
                  <path
                    d="M 140 40 
                       C 112 75 96 130 96 220 
                       C 96 250 102 272 108 284 
                       L 172 284 
                       C 178 272 184 250 184 220 
                       C 184 130 168 75 140 40 Z"
                    fill="url(#bodyGrad)"
                  />

                  {/* Body Longitudinal Highlight (3D Specular Sheen) */}
                  <path
                    d="M 140 42 
                       C 126 78 116 125 116 210 
                       C 116 235 120 260 124 280 
                       C 120 260 114 235 114 210 
                       C 114 125 124 78 140 42 Z"
                    fill="#FFFFFF"
                    opacity="0.8"
                  />

                  {/* Nose Cone in #dd0403 */}
                  <path
                    d="M 140 38 
                       C 125 60 114 88 108 118 
                       L 172 118 
                       C 166 88 155 60 140 38 Z"
                    fill="url(#redNoseGrad)"
                  />
                  {/* Nose Cone Highlight */}
                  <path
                    d="M 140 40 C 132 55 126 75 122 98 C 125 80 132 60 140 40 Z"
                    fill="#FFFFFF"
                    opacity="0.4"
                  />

                  {/* Center Dorsal Fin / Detail Strip */}
                  <path
                    d="M 137 220 L 143 220 L 142 282 L 138 282 Z"
                    fill="#dd0403"
                  />

                  {/* Round Porthole Window */}
                  {/* Outer Gold Ring Shadow */}
                  <circle
                    cx="140"
                    cy="170"
                    r="23"
                    fill="#6B4B1B"
                    opacity="0.3"
                  />
                  {/* Outer Gold Bezel */}
                  <circle cx="140" cy="168" r="22" fill="url(#goldRing)" />
                  {/* Inner Dark Rim */}
                  <circle cx="140" cy="168" r="17" fill="#1C1814" />
                  {/* Glass Porthole */}
                  <circle cx="140" cy="168" r="15" fill="url(#windowGlass)" />
                  {/* Glass Glare Reflection */}
                  <path
                    d="M 131 159 Q 140 156 149 161 Q 142 163 133 167 Z"
                    fill="#FFFFFF"
                    opacity="0.75"
                  />
                </svg>
              </div>

              {/* Billowing Volumetric Launch Smoke Clouds */}
              <div className="absolute -bottom-14 flex items-center justify-center w-[320px] pointer-events-none">
                {/* Cloud Puff 1 */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-t from-[#e8decb] via-[#FAF7F2] to-[#FFFFFF] shadow-[0_4px_20px_rgba(230,210,185,0.7)] -mr-8 z-10 opacity-95" />
                {/* Cloud Puff 2 (Center glowing underneath) */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-t from-[#f5d5b5] via-[#FFF8EE] to-[#FFFFFF] shadow-[0_-5px_25px_rgba(255,160,80,0.3)] z-20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-[#FFA629]/35 rounded-full blur-md mt-6" />
                </div>
                {/* Cloud Puff 3 */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-t from-[#e4dac6] via-[#FAF7F2] to-[#FFFFFF] shadow-[0_4px_20px_rgba(230,210,185,0.7)] -ml-8 z-10 opacity-95" />
                {/* Extra ambient cloud layers */}
                <div className="absolute w-44 h-16 bg-[#ebdacf] rounded-full blur-lg bottom-2 z-0 opacity-80" />
              </div>
            </motion.div>

            {/* ──────────────── 3 FLOATING STAT CARDS (Stacked on the right) ──────────────── */}
            <div className="absolute -right-12 top-90 -translate-y-1/2 w-full max-w-[280px] sm:max-w-[260px] space-y-4.5 z-30 pointer-events-auto pr-1">
              {/* ── CARD 1: Organic Traffic (+178%) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-2 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#ede3d5] flex items-center justify-between gap-3 group transition-all duration-300 cursor-default"
              >
                {/* Left Icon Badge in #dd0403 */}
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#dd0403] text-white flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>

                {/* Center Numbers */}
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 tracking-wide">
                    Organic Traffic
                  </div>
                  <div className="text-[18px] font-[500] text-[#dd0403] leading-none my-1 tracking-tight">
                    +178%
                  </div>
                  <div className="text-[10.5px] text-gray-400 font-normal">
                    vs Last 6 Months
                  </div>
                </div>

                {/* Right Sparkline (Red Wave in #dd0403) */}
                <div className="w-16 h-9 shrink-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 65 35"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="redFill" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#dd0403"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#dd0403"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 26 Q 16 28 26 18 T 48 12 T 65 4 L 65 35 L 0 35 Z"
                      fill="url(#redFill)"
                    />
                    <path
                      d="M 0 26 Q 16 28 26 18 T 48 12 T 65 4"
                      fill="none"
                      stroke="#dd0403"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* ── CARD 2: Leads Generated (+243%) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-2 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#ede3d5] flex items-center justify-between gap-3 group transition-all duration-300 cursor-default"
              >
                {/* Left Icon Badge (Gold) */}
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#C1904B] text-white flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5" />
                </div>

                {/* Center Numbers */}
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 tracking-wide whitespace-nowrap">
                    Leads Generated
                  </div>
                  <div className="text-[18px] font-[500] text-[#C1904B] leading-none my-1 tracking-tight">
                    +243%
                  </div>
                  <div className="text-[10.5px] text-gray-400 font-normal">
                    vs Last 6 Months
                  </div>
                </div>

                {/* Right Sparkline (Gold Wave) */}
                <div className="w-16 h-9 shrink-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 65 35"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#C1904B"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#C1904B"
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 28 Q 18 29 28 20 T 48 14 T 65 6 L 65 35 L 0 35 Z"
                      fill="url(#goldFill)"
                    />
                    <path
                      d="M 0 28 Q 18 29 28 20 T 48 14 T 65 6"
                      fill="none"
                      stroke="#C1904B"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* ── CARD 3: Keywords Ranked (+156%) ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-2 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#ede3d5] flex items-center justify-between gap-3 group transition-all duration-300 cursor-default"
              >
                {/* Left Icon Badge in #dd0403 */}
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#dd0403] text-white flex items-center justify-center shadow-sm">
                  <BarChart3 className="w-5 h-5" />
                </div>

                {/* Center Numbers */}
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-gray-500 tracking-wide whitespace-nowrap">
                    Keywords Ranked
                  </div>
                  <div className="text-[18px] font-[500] text-[#dd0403] leading-none my-1 tracking-tight">
                    +156%
                  </div>
                  <div className="text-[10.5px] text-gray-400 font-normal">
                    vs Last 6 Months
                  </div>
                </div>

                {/* Right Bar Chart Visual in #dd0403 */}
                <div className="w-14 h-8 shrink-0 flex items-end justify-end gap-1.5 pb-1">
                  <span className="w-2.5 h-[35%] bg-[#dd0403]/40 rounded-t-sm" />
                  <span className="w-2.5 h-[55%] bg-[#dd0403]/70 rounded-t-sm" />
                  <span className="w-2.5 h-[80%] bg-[#dd0403]/90 rounded-t-sm" />
                  <span className="w-2.5 h-[100%] bg-[#dd0403] rounded-t-sm" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TRUST BAR & STATS BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 lg:mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-[#e8ded1] shadow-[0_8px_30px_rgba(0,0,0,0.03)] px-6 sm:px-8 py-3"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Tag + Brand Logos Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 w-full lg:w-auto">
              {/* Trust Label */}
              <div className="text-center sm:text-left shrink-0">
                <p className="text-[13.5px] font-semibold text-gray-800 leading-snug">
                  Trusted by <br />
                  <span className="text-gray-600 font-medium">
                    growing brands
                  </span>
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-9 w-[1px] bg-[#E7DAC9]" />

              {/* Brand Logos */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-9">
                {/* Brand 1: VED INTERNATIONAL */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="text-gray-900 font-serif font-black tracking-[0.25em] text-[15px] border-b-2 border-gray-900 pb-0.5 group-hover:text-[#dd0403] group-hover:border-[#dd0403] transition-colors">
                    V E D
                  </div>
                  <span className="text-[8.5px] font-semibold tracking-[0.22em] text-gray-500 mt-0.5 uppercase">
                    International
                  </span>
                </div>

                {/* Brand 2: Royal CERAMICA */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <Crown className="w-3.5 h-3.5 text-gray-800 group-hover:text-[#dd0403] transition-colors mb-0.5" />
                  <div className="text-[15px] font-serif font-bold tracking-tight text-gray-900 leading-none group-hover:text-[#dd0403] transition-colors">
                    Royal
                  </div>
                  <span className="text-[8px] font-bold tracking-[0.25em] text-gray-500 uppercase mt-0.5">
                    Ceramica
                  </span>
                </div>

                {/* Brand 3: MATRIX GYM & FITNESS */}
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="text-[15px] font-extrabold tracking-wider text-gray-900 group-hover:text-[#dd0403] transition-colors">
                    MATRIX
                  </div>
                  <span className="text-[7.5px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    Gym & Fitness
                  </span>
                </div>

                {/* Brand 4: Shubham INDUSTRIES */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-800 group-hover:bg-[#fdeaea] group-hover:text-[#dd0403] transition-colors">
                    <Hexagon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-bold text-gray-900 leading-tight group-hover:text-[#dd0403] transition-colors">
                      Shubham
                    </span>
                    <span className="text-[8px] font-bold tracking-[0.18em] text-gray-500 uppercase">
                      Industries
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stat Counters */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 w-full lg:w-auto border-t lg:border-t-0 border-[#E7DAC9] pt-4 lg:pt-0">
              {/* Stat 1: 100+ Happy Clients */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[19px] font-bold text-gray-900 leading-none">
                    100+
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="h-9 w-[1px] bg-[#E7DAC9]" />

              {/* Stat 2: 10+ Years of Impact */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdeaea] border border-[#fad5d5] flex items-center justify-center text-[#dd0403] shadow-sm">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[19px] font-bold text-gray-900 leading-none">
                    10+
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                    Years of Impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL: START A PROJECT ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#f7f5f1] border border-[#e8ded1] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#e8ded1] flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Our digital marketing strategist in Rajkot will contact you
                    within 2 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#dd0403] rounded-full inline-block" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#dd0403]">
                      Grow With Us in Rajkot
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                    Start Your Project
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 mb-6">
                    Fill out the form below and let's supercharge your business
                    growth.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patel"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                      >
                        <option value="SEO & Growth">
                          Search Engine Optimization (SEO)
                        </option>
                        <option value="Google Ads">
                          Google Ads & Performance Marketing
                        </option>
                        <option value="Social Media">
                          Social Media Marketing
                        </option>
                        <option value="Complete Digital Strategy">
                          Complete 360° Digital Growth
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Project Brief (Optional)
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Tell us about your business goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#dd0403] hover:bg-[#c00302] text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-150 cursor-pointer"
                    >
                      Request Free Proposal & Strategy
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
