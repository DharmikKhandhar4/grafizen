import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";


const DigitalMarketingHero = () => {
  // ── Left Side Dynamic Text Rotator ──────────────────────────────
  const rotatingKeywords = [
    // { title: "SEO & Google Rank", watermark: "Rank #1" },
    { title: "6.2X ROAS Paid Ads", watermark: "Performance" },
    { title: "Social Media Scale", watermark: "Viral Reach" },
    { title: " Web Design", watermark: "Conversions" },
    { title: "Full-Funnel Growth", watermark: "Top Rated" },
  ];

  const [ currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rotatingKeywords.length]);

  // ── Right Side Interactive Service Slider ────────────────────────
  const services = [
    // {
    //   id: "seo",
    //   category: "Search Engine Optimization (SEO)",
    //   description:
    //     "Grafizen is recognized as the best digital marketing agency for driving predictable organic rankings and high-intent customer traffic. We combine technical SEO audits, high-authority link acquisition, and content architecture that positions your brand at #1 on Google search results.",
    //   link: "/seoservice",
    // },
    {
      id: "ppc",
      category: "Google & Meta Performance Ads",
      description:
        "We engineer high-ROI paid ad campaigns across Google Search, Performance Max, Instagram, and Facebook. With laser-focused audience targeting, conversion tracking, and relentless A/B creative testing, we deliver an average of 6.2x Return on Ad Spend (ROAS).",
      link: "/ppc",
    },
    {
      id: "smm",
      category: "Social Media Growth & Marketing",
      description:
        "Turn passive followers into loyal brand advocates. Our creative team designs scroll-stopping visuals, viral reels, and strategic storytelling that amplify brand awareness, customer engagement, and inbound inquiries across Instagram, LinkedIn, and Meta.",
      link: "/socialmedia",
    },
    {
      id: "web",
      category: "High-Converting Website Development",
      description:
        "A great marketing campaign needs a high-converting destination. We craft fast, mobile-first, and SEO-engineered websites that not only captivate visitors with modern aesthetics but guide them effortlessly toward making inquiries and purchases.",
      link: "/webdevelopment",
    },
    {
      id: "growth",
      category: "Complete Digital Growth Ecosystem",
      description:
        "From brand building to full-scale revenue acceleration, Grafizen acts as your dedicated digital growth partner. We combine data analytics, performance automation, and full-funnel marketing strategy under one roof to maximize your market dominance.",
      link: "/contact",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 4800);
    return () => clearInterval(slideTimer);
  }, [isPaused, services.length]);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white text-neutral-900 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── AMBIENT #dd0403 MESH GLOWS & BOKEH ────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Soft Red Brand Blob top-left */}
        {/* <div className="absolute -left-20 -top-24 h-[550px] w-[550px] rounded-full bg-[#dd0403]/8 blur-[120px]" /> */}
        {/* Soft Warm Coral/Rose Blob bottom-left */}
        {/* <div className="absolute -bottom-24 left-12 h-[480px] w-[480px] rounded-full bg-rose-200/35 blur-[100px]" /> */}
        {/* Soft Crimson Warm Glow right side */}
        {/* <div className="absolute -right-20 top-20 h-[600px] w-[600px] rounded-full bg-[#dd0403]/6 blur-[130px]" /> */}

        {/* Scattered Bokeh Dots in Brand Tones */}
        {/* <div className="absolute left-[8%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#dd0403]/25" /> */}
        {/* <div className="absolute left-[18%] top-[14%] h-3.5 w-3.5 rounded-full bg-rose-300/35" /> */}
        {/* <div className="absolute left-[12%] top-[34%] h-2 w-2 rounded-full bg-[#dd0403]/30" />   */}
        {/* <div className="absolute left-[24%] top-[28%] h-4 w-4 rounded-full bg-white shadow-sm shadow-[#dd0403]/10" /> */}
        <div className="absolute right-[14%] top-[18%] h-3 w-3 rounded-full bg-rose-300/30" />
        <div className="absolute right-[22%] top-[36%] h-2 w-2 rounded-full bg-[#dd0403]/25" />
        <div className="absolute right-[8%] bottom-[24%] h-4 w-4 rounded-full bg-[#dd0403]/20" />
        <div className="absolute right-[16%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-rose-400/30" />
      </div>

      {/* ── FLOATING 3D DECORATIVE SHAPES (Aligned with #dd0403) ── */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden sm:block">
        {/* 3D Red Twist / Macaroni Tube Shape top-left */}
        {/* <motion.div
          animate={{
            y: [-10, 12, -10],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[26%] top-[10%] drop-shadow-md"
        >
          <svg width="46" height="46" viewBox="0 0 50 50" fill="none">
            <path
              d="M12 36C8 30 10 16 22 14C34 12 38 24 34 32C30 40 20 42 16 38"
              stroke="#dd0403"
              strokeWidth="9"
              strokeLinecap="round"
              className="opacity-75"
            />
            <path
              d="M12 36C8 30 10 16 22 14C34 12 38 24 34 32C30 40 20 42 16 38"
              stroke="url(#brandRedTubeGrad)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brandRedTubeGrad" x1="10" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff5252" />
                <stop offset="0.5" stopColor="#dd0403" />
                <stop offset="1" stopColor="#8f0202" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div> */}

        {/* Floating Dark Orb left-center with subtle Red Glow */}
        {/* <motion.div
          animate={{
            y: [0, -14, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[11%] top-[48%] h-6 w-6 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 shadow-md shadow-[#dd0403]/20"
        /> */}

        {/* Floating Silver & Red Toned Leaf bottom-left */}
        <motion.div
          animate={{
            y: [12, -10, 12],
            rotate: [-4, 6, -4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute left-[24%] bottom-[8%] opacity-75"
        >
          <svg width="44" height="60" viewBox="0 0 44 60" fill="none">
            <path
              d="M22 2C24 16 36 28 42 42C34 40 26 34 22 26C18 36 10 44 2 48C8 32 18 16 22 2Z"
              fill="url(#brandLeafGrad)"
            />
            <defs>
              <linearGradient id="brandLeafGrad" x1="2" y1="2" x2="42" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fecdd3" />
                <stop offset="0.6" stopColor="#cbd5e1" />
                <stop offset="1" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT CONTAINER (3-COLUMN LAYOUT) ────────────── */}
      <div className="relative z-20 mx-auto max-w-[1500px] px-6 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.15fr_1.05fr] lg:gap-6 xl:gap-10">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: Text Rotator, Agency Bio & CTA
          ════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow tag with Red Accent Line */}
            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex items-center gap-2.5"
            >
              <span className="h-[2px] w-6 rounded-full bg-[#dd0403]" />
              <p className="text-base font-semibold tracking-tight text-neutral-800 sm:text-lg lg:text-xl">
                10+ Years of Excellence in
              </p>
            </motion.div> */}
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span className="h-px w-7 bg-[#dd0403]"></span><span>Best Digital Marketing Agency</span></div>

            {/* Rotator Heading with Watermark Underlay */}
            <div className="relative mb-5 min-h-[90px] sm:min-h-[110px] lg:min-h-[70px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentKeywordIndex}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative max-w-[450px]"
                >
                  {/* Watermark outline text behind (subtle red stroke) */}
                  {/* <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-15 left-0 select-none text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-[48px] text-[#dd0403]"
                    // style={{
                    //   WebkitTextStroke: "1px #dd0403",
                    //   color: "transparent",
                    // }}
                  >
           
                  </span> */}

                  {/* Sharp foreground headline with #dd0403 brand highlight */}
                  <h1 className="relative text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-[48px] mt-6">
                    <span className="text-[#dd0403] pr-2 ">
                      {rotatingKeywords[currentKeywordIndex].watermark}
                    </span>
                    <span className="text-black">
                      {rotatingKeywords[currentKeywordIndex].title}
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-md text-sm leading-6 text-black/60 sm:text-[15px]"
            >
              Grafizen is recognized as the best digital marketing agency for high-growth brands. We engineer data-backed SEO campaigns, high-converting ad funnels, and performance-driven strategies that position your business at the top and consistently scale revenue.
            </motion.p>

            {/* CTA Button (#dd0403 brand red pill) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#dd0403] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#dd0403]/25 transition-all duration-300 hover:bg-[#b80302] hover:shadow-xl hover:shadow-[#dd0403]/35 hover:-translate-y-0.5 sm:text-sm"
              >
                <span>START A PROJECT</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-700 transition-all duration-300 hover:border-[#dd0403] hover:text-[#dd0403] sm:text-sm"
              >
                OUR WORK
              </a>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════════════════
              2. CENTER COLUMN: Circle Showcase + #dd0403 Waves + Stamp
          ════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center justify-center py-6">

            {/* Top-Right Red Spiral Geometric Wireframe Waves (#dd0403) with transparent left & right ends */}
            <div className="pointer-events-none absolute -top-8 right-2 z-0 h-44 w-44 opacity-85 sm:h-52 sm:w-52">
              <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
                <defs>
                  <linearGradient id="redWireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dd0403" stopOpacity="0" />
                    <stop offset="22%" stopColor="#ff4d4d" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#dd0403" stopOpacity="1" />
                    <stop offset="78%" stopColor="#dd0403" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#dd0403" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="fadeMaskTopRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="20%" stopColor="white" stopOpacity="1" />
                    <stop offset="80%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="maskTopRight">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeMaskTopRight)" />
                  </mask>
                </defs>
                <g mask="url(#maskTopRight)">
                  {[...Array(12)].map((_, i) => (
                    <path
                      key={`red-wave-${i}`}
                      d={`M 180,${20 + i * 8} C 140,${10 + i * 5} 100,${50 + i * 6} ${60 + i * 4},${120 + i * 4}`}
                      stroke="url(#redWireGrad)"
                      strokeWidth="1.3"
                      strokeDasharray={i % 2 === 0 ? "none" : "3 2"}
                      opacity={0.5 + i * 0.04}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Bottom-Left Flowing Contour Ribbons (#dd0403) with transparent left & right ends */}
            <div className="pointer-events-none absolute -bottom-6 left-0 z-0 h-44 w-52 opacity-90 sm:h-56 sm:w-64">
              <svg viewBox="0 0 220 180" fill="none" className="h-full w-full">
                <defs>
                  <linearGradient id="crimsonWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dd0403" stopOpacity="0" />
                    <stop offset="18%" stopColor="#ff6b6b" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#dd0403" stopOpacity="1" />
                    <stop offset="82%" stopColor="#b80302" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#dd0403" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="fadeMaskBottomLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="18%" stopColor="white" stopOpacity="1" />
                    <stop offset="82%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="maskBottomLeft">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#fadeMaskBottomLeft)" />
                  </mask>
                </defs>
                <g mask="url(#maskBottomLeft)">
                  {[...Array(15)].map((_, i) => (
                    <path
                      key={`crimson-wave-${i}`}
                      d={`M 10,${150 - i * 6} C 60,${130 - i * 4} 120,${170 - i * 5} 200,${110 - i * 6}`}
                      stroke="url(#crimsonWaveGrad)"
                      strokeWidth="1.4"
                      opacity={0.45 + i * 0.035}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Center Circle Mask Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex h-[320px] w-[320px] items-center justify-center rounded-full bg-white p-2 shadow-2xl shadow-[#dd0403]/15 ring-1 ring-[#dd0403]/10 sm:h-[400px] sm:w-[400px] lg:h-[530px] lg:w-[530px]"
            >
              {/* Inner Circle with Media Clip */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white shadow-inner">
                <img
                  src="./image/androidapp/digital.png"
                  alt="Grafizen Digital Marketing Team"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle warm gradient overlay on image */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" /> */}
              </div>

              {/* ── ROTATING CIRCULAR STAMP BADGE (Bottom-Right, #dd0403 branded) ── */}
              <motion.a
                href="#services"
                initial={{ rotate: 0 }}
                whileHover={{ scale: 1.06 }}
                className="group absolute -bottom-3 -right-3 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-neutral-950 text-white shadow-xl shadow-[#dd0403]/25 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                title="Explore Services"
              >
                {/* Rotating Circular Text SVG with Red Highlight */}
                <svg
                  className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] group-hover:[animation-duration:9s]"
                  viewBox="0 0 160 160"
                >
                  <defs>
                    <path
                      id="brandStampPath"
                      d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
                    />
                  </defs>
                  <text
                    fontSize="10.8"
                    fontWeight="700"
                    letterSpacing="2.8"
                    fill="white"
                    className="uppercase"
                  >
                    <textPath
                      href="#brandStampPath"
                      startOffset="0%"
                    >
                      ★ BEST DIGITAL MARKETING AGENCY • TOP RATED ★
                    </textPath>
                  </text>
                </svg>

                {/* Center Down Arrow Icon with #dd0403 Accent Ring */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#dd0403] bg-white transition-transform duration-300 group-hover:translate-y-1 sm:h-12 sm:w-12">
                  <ArrowDown size={22} className="stroke-[2.5]" />
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════════════════
              3. RIGHT COLUMN: Interactive Slider (— • • • •)
          ════════════════════════════════════════════════════════ */}
          <div
            className="flex flex-col justify-center lg:pl-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slide Pagination Indicator with #dd0403 Active Bar */}
            {/* <div className="mb-6 flex items-center gap-2.5">
              {services.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className="group relative py-2 focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {activeSlide === idx ? (
                    <motion.div
                      layoutId="activeSlideIndicator"
                      className="h-1.5 w-6 rounded-full bg-[#dd0403] shadow-sm shadow-[#dd0403]/40 transition-all duration-300"
                    />
                  ) : (
                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-300 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#dd0403]/60" />
                  )}
                </button>
              ))}
            </div> */}

            {/* Slider Content Area */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-[400] tracking-tight text-black sm:text-2xl">
                    {services[activeSlide].category}
                  </h3>

                  <p className="mt-4 text-sm leading-tight   text-black/55 sm:text-[15px]">
                    {services[activeSlide].description}
                  </p>

                  {/* In-Touch Link with Arrow in #dd0403 */}
                  <div className="mt-6">
                    <a
                      href={services[activeSlide].link}
                      className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#dd0403]  transition-colors duration-200 hover:text-[#dd0403] sm:text-sm"
                    >
                      <span>GET IN TOUCH</span>
                      <ArrowRight
                        size={15}
                        className="text-[#dd0403] transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* ── FLOATING WHATSAPP TRIGGER ── */}
      {/* <a
        href="https://wa.me/919999999999?text=Hello%20Grafizen,%20I%20want%20to%20grow%20my%20business%20with%20Digital%20Marketing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" stroke="white" strokeWidth="2.5" />
        </svg>
      </a> */}
    </section>
  );
};

export default DigitalMarketingHero;
