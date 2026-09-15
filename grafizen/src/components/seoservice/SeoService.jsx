import React, { useState } from "react";
import { motion, AnimatePresence, number } from "framer-motion";
import keyword from "../../../public/image/keyword.png";
import search from "../../../public/image/search-engine.png";
import seo from "../../../public/image/seo.png";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Star,
  Zap,
  BarChart3,
  X,
  Target,
  Sparkles,
  Layers,
  Award,
  GitBranch,

} from "lucide-react";

export default function SeoService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClusterTab, setSelectedClusterTab] = useState("all");
  const [auditUrl, setAuditUrl] = useState("");
  const [auditEmail, setAuditEmail] = useState("");
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  


 

  // Depth extrusion count for 3D Google logo
  const depthLayers = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="relative w-full bg-white text-[#111111] font-['Poppins',sans-serif] overflow-hidden selection:bg-[#dd0403] selection:text-white px-4 sm:px-6 lg:px-14 flex flex-col py-10 sm:py-16 justify-between">
      {/* ================= ISOMETRIC WIREFRAME BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10 my-auto">
        <div className="relative grid grid-cols-1 items-center gap-8 lg:gap-8 overflow-hidden lg:rounded-3xl lg:grid-cols-12 min-h-0 lg:min-h-[580px]">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/image/seopagebg.png')",
              maskImage:
                "linear-gradient(to right, black 0%, black 72%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 72%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          />

          {/* ──────────────── LEFT COLUMN: Typography & Content ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* 1. Category Tag / Small Heading */}
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]"></span>
              <span> SEO SERVICES</span>
            </div>

            {/* 2. Main Heading */}
            <h1 className="text-[28px] xs:text-4xl sm:text-5xl md:text-[60px] lg:text-[48px] font-[500] text-[#111111] leading-[1.1] md:leading-[1.06] tracking-[-0.03em]">
              <span className="text-[#dd0403]"> SEO Services </span>
              That Drive Real Business Growth
            </h1>

            {/* 3. Image (Mobile Order) */}
            <div className="block lg:hidden my-4">
              <div className="relative w-full max-w-[580px] aspect-[4/3] mx-auto flex items-center justify-center select-none">
                {/* Ground Platform Aperture (Isometric Ellipse) & Tangent Lines */}
                <svg
                  viewBox="0 0 620 460"
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                  fill="none"
                >
                  {/* Platform Disc Layer */}
                  <ellipse
                    cx="310"
                    cy="245"
                    rx="240"
                    ry="110"
                    stroke="#1E1E1E"
                    strokeWidth="1.8"
                  />
                  <ellipse
                    cx="310"
                    cy="245"
                    rx="238"
                    ry="108"
                    fill="#F3ECE0"
                    opacity="0.6"
                  />

                  {/* Perspective Tangent Connecting Lines (Only 2 Lines) */}
                  <line
                    x1="72"
                    y1="195"
                    x2="265"
                    y2="35"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    opacity="0.85"
                  />
                  <line
                    x1="480"
                    y1="340"
                    x2="320"
                    y2="500"
                    stroke="#1E1E1E"
                    strokeWidth="1.5"
                    opacity="0.85"
                  />

                  {/* Signal Green Intersection Dots */}
                  <circle
                    cx="72"
                    cy="195"
                    r="7"
                    fill="#dd0403"
                    fillOpacity="0.25"
                  />
                  <circle
                    cx="72"
                    cy="195"
                    r="4"
                    fill="#dd0403"
                    stroke="#FAF7F2"
                    strokeWidth="1.2"
                  />

                  <circle
                    cx="480"
                    cy="340"
                    r="7"
                    fill="#dd0403"
                    fillOpacity="0.25"
                  />
                  <circle
                    cx="480"
                    cy="340"
                    r="4"
                    fill="#dd0403"
                    stroke="#dd0403"
                    strokeWidth="1.2"
                  />
                </svg>

                {/* Floating 3D Google G Logo */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20 flex items-center justify-center"
                  style={{
                    perspective: 1200,
                  }}
                >
                  {/* 3D Transformed Layer Stack */}
                  <div
                    className="relative w-[150px] xs:w-[180px] sm:w-[220px] md:w-[245px] aspect-square flex items-center justify-center"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(58deg) rotateZ(-34deg)",
                    }}
                  >
                    {/* Cast Shadow on Platform */}
                    <div
                      className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
                      style={{
                        transform:
                          "translateZ(-32px) translateY(26px) scale(0.96)",
                        background:
                          "radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.06) 60%, transparent 80%)",
                        filter: "blur(14px)",
                      }}
                    />

                    {/* 20 Precise 3D Extrusion Depth Slices */}
                    {depthLayers.map((layer) => {
                      const z = layer;
                      const isTop = layer === depthLayers.length - 1;

                      // Shaded colors for 3D extrusion depth
                      const red = isTop ? "#EA4335" : "#9E1815";
                      const yellow = isTop ? "#FBBC05" : "#C46800";
                      const green = isTop ? "#34A853" : "#137333";
                      const blue = isTop ? "#4285F4" : "#174EA6";

                      return (
                        <svg
                          key={layer}
                          viewBox="0 0 24 24"
                          className="absolute inset-0 w-full h-full overflow-visible"
                          style={{
                            transform: `translateZ(${z}px)`,
                            filter: isTop
                              ? "drop-shadow(0 2px 5px rgba(0,0,0,0.12))"
                              : undefined,
                          }}
                        >
                          {/* Blue: horizontal crossbar and top-right arm */}
                          <path
                            fill={blue}
                            stroke="#1E1E1E"
                            strokeWidth={isTop ? "0.45" : "0.3"}
                            strokeLinejoin="round"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                          />
                          {/* Green: bottom circular arc */}
                          <path
                            fill={green}
                            stroke="#1E1E1E"
                            strokeWidth={isTop ? "0.45" : "0.3"}
                            strokeLinejoin="round"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          />
                          {/* Yellow: left-bottom circular arc */}
                          <path
                            fill={yellow}
                            stroke="#1E1E1E"
                            strokeWidth={isTop ? "0.45" : "0.3"}
                            strokeLinejoin="round"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                          />
                          {/* Red: top circular arc */}
                          <path
                            fill={red}
                            stroke="#1E1E1E"
                            strokeWidth={isTop ? "0.45" : "0.3"}
                            strokeLinejoin="round"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          />
                        </svg>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Floating Mini Interactive SEO Metric Pills */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-0 xs:top-2 sm:top-6 right-0 xs:right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 px-3 sm:px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-2.5 sm:gap-3 cursor-default z-30"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dd0403]/10 text-[#dd0403] flex items-center justify-center font-bold shrink-0">
                    <img
                      src={search}
                      alt="Search Engine"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-[#777065] font-medium leading-tight">
                      Rank #1 Google
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#111111]">
                      +320% Traffic
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-0 xs:bottom-4 sm:bottom-6 left-0 xs:left-2 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 px-3 sm:px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-2.5 sm:gap-3 cursor-default z-30"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dd0403]/15 text-[#dd0403] flex items-center justify-center font-bold shrink-0">
                    <img
                      src={keyword}
                      alt="Keyword"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-[#777065] font-medium leading-tight">
                      High Intent Keywords
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#111111]">
                      98.4% Accuracy
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 4. Subheading / Content */}
            <p className="mt-4 sm:mt-6 text-[#555048] text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-normal">
              Our SEO services help businesses improve Google visibility,
              attract high-intent customers, and generate sustainable organic
              traffic through data-driven strategies.
            </p>

            {/* 5. CTA Button */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <motion.a
                href="https://grafizen.com/contact-us"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#dd0403] text-white font-medium text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(221,4,3,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full xs:w-auto lg:w-fit"
              >
                <span>Start Growing </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>

            {/* Trustpilot / Rating Block */}
            <div className="mt-8 sm:mt-12 pt-4 border-t border-[#e6dece] hidden lg:flex">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#777065] tracking-wide uppercase">
                    TRUSTED BY GROWING BUSINESSES
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-[#eab308] rounded flex items-center justify-center text-white shadow-sm"
                        >
                          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white" />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#111111]">
                      4.9 / 5.0
                    </span>
                    <span className="text-xs text-[#777065]">
                      (280+ Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT COLUMN: Authentic 3D Isometric Google 'G' Aperture (Desktop Only) ──────────────── */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 relative items-center justify-center min-h-[320px] xs:min-h-[400px] sm:min-h-[540px]">
            <div className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center select-none">
              {/* Ground Platform Aperture (Isometric Ellipse) & Tangent Lines */}
              <svg
                viewBox="0 0 620 460"
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                fill="none"
              >
                {/* Platform Disc Layer */}
                <ellipse
                  cx="310"
                  cy="245"
                  rx="240"
                  ry="110"
                  stroke="#1E1E1E"
                  strokeWidth="1.8"
                />
                <ellipse
                  cx="310"
                  cy="245"
                  rx="238"
                  ry="108"
                  fill="#F3ECE0"
                  opacity="0.6"
                />

                {/* Perspective Tangent Connecting Lines (Only 2 Lines) */}
                <line
                  x1="72"
                  y1="195"
                  x2="265"
                  y2="35"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  opacity="0.85"
                />
                <line
                  x1="480"
                  y1="340"
                  x2="320"
                  y2="500"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  opacity="0.85"
                />

                {/* Signal Green Intersection Dots */}
                <circle
                  cx="72"
                  cy="195"
                  r="7"
                  fill="#dd0403"
                  fillOpacity="0.25"
                />
                <circle
                  cx="72"
                  cy="195"
                  r="4"
                  fill="#dd0403"
                  stroke="#FAF7F2"
                  strokeWidth="1.2"
                />

                <circle
                  cx="480"
                  cy="340"
                  r="7"
                  fill="#dd0403"
                  fillOpacity="0.25"
                />
                <circle
                  cx="480"
                  cy="340"
                  r="4"
                  fill="#dd0403"
                  stroke="#dd0403"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Floating 3D Google G Logo */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 flex items-center justify-center"
                style={{
                  perspective: 1200,
                }}
              >
                {/* 3D Transformed Layer Stack */}
                <div
                  className="relative w-[150px] xs:w-[180px] sm:w-[220px] md:w-[245px] aspect-square flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(58deg) rotateZ(-34deg)",
                  }}
                >
                  {/* Cast Shadow on Platform */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
                    style={{
                      transform:
                        "translateZ(-32px) translateY(26px) scale(0.96)",
                      background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.06) 60%, transparent 80%)",
                      filter: "blur(14px)",
                    }}
                  />

                  {/* 20 Precise 3D Extrusion Depth Slices */}
                  {depthLayers.map((layer) => {
                    const z = layer;
                    const isTop = layer === depthLayers.length - 1;

                    // Shaded colors for 3D extrusion depth
                    const red = isTop ? "#EA4335" : "#9E1815";
                    const yellow = isTop ? "#FBBC05" : "#C46800";
                    const green = isTop ? "#34A853" : "#137333";
                    const blue = isTop ? "#4285F4" : "#174EA6";

                    return (
                      <svg
                        key={layer}
                        viewBox="0 0 24 24"
                        className="absolute inset-0 w-full h-full overflow-visible"
                        style={{
                          transform: `translateZ(${z}px)`,
                          filter: isTop
                            ? "drop-shadow(0 2px 5px rgba(0,0,0,0.12))"
                            : undefined,
                        }}
                      >
                        {/* Blue: horizontal crossbar and top-right arm */}
                        <path
                          fill={blue}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        {/* Green: bottom circular arc */}
                        <path
                          fill={green}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        {/* Yellow: left-bottom circular arc */}
                        <path
                          fill={yellow}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        {/* Red: top circular arc */}
                        <path
                          fill={red}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    );
                  })}
                </div>
              </motion.div>

              {/* Floating Mini Interactive SEO Metric Pills */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-0 xs:top-2 sm:top-6 right-0 xs:right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 px-3 sm:px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-2.5 sm:gap-3 cursor-default z-30"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dd0403]/10 text-[#dd0403] flex items-center justify-center font-bold shrink-0">
                  <img
                    src={search}
                    alt="Search Engine"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-[#777065] font-medium leading-tight">
                    Rank #1 Google
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">
                    +320% Traffic
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-0 xs:bottom-4 sm:bottom-6 left-0 xs:left-2 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-2 sm:p-3 px-3 sm:px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-2.5 sm:gap-3 cursor-default z-30"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dd0403]/15 text-[#dd0403] flex items-center justify-center font-bold shrink-0">
                  <img
                    src={keyword}
                    alt="Keyword"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] text-[#777065] font-medium leading-tight">
                    High Intent Keywords
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">
                    98.4% Accuracy
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: STRATEGIC KEYWORD PILLAR ARCHITECTURE & RANKING INSIGHT
        ========================================================================= */}
        <div
          id="strategy-breakdown"
          className="mt-12 sm:mt-20 lg:mt-0 pt-8 sm:pt-12"
        >
          {/* Header Section */}
          <div className="mb-6  sm:mb-12 grid gap-2 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end  grid gap-2 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Left */}
            <div>
              <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
                <span className="h-px w-7 bg-[#dd0403]" />
                <span>PROVEN RANKING STRATEGY</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-[36px] md:text-[42px] lg:text-[42px] font-medium leading-[1.15] sm:leading-[1.12] tracking-[-0.035em] text-[#111]">
                Why{" "}
                <span className="text-[#dd0403]">Simple SEO Pages Fail</span>
                <br className="hidden sm:inline" /> And How{" "}
                <span className="text-[#dd0403]">Content Hubs Rank Higher</span>
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-4xl">
              <p className="mt-2 sm:mt-6 max-w-3xl text-xs sm:text-base leading-relaxed sm:leading-5 text-black/55 font-[300]">
                Instead of burning budget competing broadly, we construct
                high-authority dedicated pillar clusters targeting immediate,
                high-intent local and niche commercial searches.
              </p>
            </div>
          </div>

          {/* ── 2-COLUMN STRATEGY COMPARISON & PILLAR ARCHITECTURE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch mb-6">
            {/* Left Card: Strategic Insight & Recommended Focus */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white/90 to-[#fbf8f3] lg:rounded-3xl rounded-2xl p-3 sm:p-6 border border-[#e8ded0] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#dd0403] text-white flex items-center justify-center shadow-md shrink-0">
                    <img src={seo} alt="Keyword" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-[500] text-[#111111] leading-tight">
                      Recommendation for SEO Boost
                    </h3>
                    <span className="text-xs text-[#dd0403] font-semibold">
                      Achievable & High-ROI Strategy
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#444038] leading-relaxed">
                  <p className="bg-[#f7f3ec] p-3.5 sm:p-4 rounded-2xl border border-[#e8ded0]">
                    <strong>Strategic Realism:</strong> Rather than attempting
                    to rank only for the broad keyword <em>“SEO Services”</em>,
                    SEO Boost focuses first on <strong>“SEO Services ”</strong>{" "}
                    and <strong>“SEO Company ”</strong>.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Topical Relevance:</strong> Real local clients
                        ready to hire an agency immediately.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Fast Organic Traction:</strong> Realistic top 3
                        ranking in 3 to 5 months vs 18+ months for broad terms.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Authority Stepping Stone:</strong> Dominating
                        local clusters builds internal link equity to rank for
                        broader national terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="mt-6 pt-5 border-t border-[#e8ded0] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block font-semibold">
                    Target Primary Intent
                  </span>
                  <span className="text-sm font-bold text-[#dd0403]">
                    Global Market
                  </span>
                </div>
                <button
                 href="https://grafizen.com/contact-us"
                  className="bg-[#dd0403] hover:bg-[#dd0403] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Start Plan
                </button>
              </div>
            </div>

            {/* Right Card: SEO Growth Roadmap */}
            <div className="lg:col-span-7 bg-white/95 lg:rounded-3xl rounded-2xl  sm:p-6 lg:border lg:border-[#e8ded0]">
              <div className="flex items-start justify-between gap-4 mb-5 px-1 md:px-0">
                <div>
                  <h3 className="text-base sm:text-lg font-[500] text-[#111111] flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-[#dd0403] shrink-0" />
                    <span>SEO Growth Roadmap</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    A focused process built to improve visibility and generate
                    qualified leads
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#fdeaea] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#dd0403]">
                  90-Day Plan
                </span>
              </div>

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-1 lg:gap-3">
  {[
    {
      number: "01",
      title: "Discover",
      text: "Audit your website, competitors, and highest-value search opportunities.",
      icon: Search,
    },
    {
      number: "02",
      title: "Build",
      text: "Create a technical foundation and content structure that Google can understand.",
      icon: Layers,
    },
    {
      number: "03",
      title: "Optimize",
      text: "Improve pages, local signals, internal links, and conversion-focused content.",
      icon: Target,
    },
    {
      number: "04",
      title: "Grow",
      text: "Earn authority through relevant content, digital PR, and quality backlinks.",
      icon: TrendingUp,
    },
    {
      number: "05",
      title: "Measure",
      text: "Track rankings, traffic, leads, and monthly opportunities for continuous growth.",
      icon: BarChart3,
    },
  ].map((step) => {
    const StepIcon = step.icon;

    return (
      <div
        key={step.number}
        className={`group flex items-start gap-2 rounded-2xl border border-[#e8ded0] bg-[#fbf9f5] p-2 transition-all hover:border-[#dd0403]/50 hover:bg-white hover:shadow-sm sm:items-center sm:gap-3 sm:p-2.5 lg:p-3 ${
          step.number === "05" ? "col-span-2 sm:col-span-1" : ""
        }`}
      >
        <div className=" h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#dd0403] text-white md:h-8 md:w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 hidden md:flex">
          <StepIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>

        <div className=" flex md:hidden flex-col ">

       <div className=" flex gap-3 items-center  ">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#dd0403] text-white md:h-8 md:w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
          <StepIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
          <h4 className="text-xs font-semibold text-[#111111] sm:text-sm">
              {step.title}
            </h4>
       </div>


             <p className="mt-2 text-[10.5px] leading-snug text-gray-600 sm:text-[11.5px]">
            {step.text}
          </p>
         </div>
         

        <div className="min-w-0 flex-1 hidden md:block">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-semibold text-[#111111] sm:text-sm">
              {step.title}
            </h4>
          </div>

          <p className="mt-0.5   text-[10.5px] leading-snug text-gray-600 sm:text-[11.5px]">
            {step.text}
          </p>
        </div>
      </div>
    );
  })}
</div>
            </div>
          </div>

          {/* ── TARGET KEYWORDS QUICK LIST ── */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 sm:p-6 border border-dashed border-[#e8ded0] mb-5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
              SEO Strategy Built Around Your Business
            </h4>

            <p className="text-xs leading-5 text-gray-600">
              We shape our SEO services around your business model, target
              audience, and growth goals. Whether you are a local service
              provider, B2B company, ecommerce brand, or growing startup, we
              build the right strategy to attract qualified customers and turn
              search visibility into measurable business growth.
            </p>
          </div>
        </div>

        {/* ================= SECTION 3: 4 CORE SERVICE FEATURE CARDS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-1.5 flex overflow-x-auto gap-4 py-2 pb-4 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:py-0 sm:pb-0"
        >
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group w-[260px] xs:w-[280px] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
                Technical SEO Audit
              </h4>
              <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
                In-depth crawling, site architecture fixes, Core Web Vitals
                optimization, and indexing speed improvements.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group w-[260px] xs:w-[280px] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
                Keyword & Competitor Intel
              </h4>
              <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
                Pinpoint high-intent commercial search queries to capture
                ready-to-buy customers before your competitors do.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group w-[260px] xs:w-[280px] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
                Local SEO & Google Maps
              </h4>
              <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
                Dominate Google Map Pack (Local 3-Pack) for high-intent searches
                in Rajkot, Gujarat, and across India.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group w-[260px] xs:w-[280px] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
                Authority Backlinks & PR
              </h4>
              <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
                Earn high-authority editorial backlinks and digital PR mentions
                that multiply domain rating and rankings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL: INSTANT SEO AUDIT / GET STARTED ================= */}
  
    </section>
  );
}
