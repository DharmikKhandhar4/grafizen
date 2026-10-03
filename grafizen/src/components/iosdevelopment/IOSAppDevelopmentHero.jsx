import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import iphone from "../../../public/image/ios/iphone.png";

/* ─── Floating feature cards data ─────────────────────────── */
const leftCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#dd0403" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "SwiftUI",
    sub: "Modern UI",
    pos: { top: "18%", left: "18px" },   // ← adjust freely
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#dd0403" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="#dd0403" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Native iOS",
    sub: "High Performance",
    pos: { top: "40%", left: "-20px" },   // ← adjust freely
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#dd0403" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#dd0403" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "120 FPS",
    sub: "Smooth Animations",
    pos: { top: "60%", left: "18px" },   // ← adjust freely
  },
];

const rightCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#dd0403" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Enterprise Grade",
    sub: "Security First",
    pos: { top: "20%", right: "18px" },   // ← adjust freely
  },
  {
    // Apple black icon — no text card, just a square icon
    isAppleIcon: true,
    pos: { top: "46%", right: "-20px" },   // ← adjust freely
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#1d1d1f"/>
        <path d="M15.5 8.5c-.8-.9-1.9-1.5-3.1-1.5C10.1 7 8 9.1 8 11.7c0 2.6 2.1 4.7 4.4 4.7 1.2 0 2.3-.5 3.1-1.3.2-.2.4-.5.5-.8h-3.6V13h5.1c.1.4.1.8.1 1.2 0 3-2.4 5.3-5.3 5.3-2.9 0-5.3-2.4-5.3-5.3S9.1 9 12 9" stroke="#fff" strokeWidth="1" fill="#1d1d1f"/>
      </svg>
    ),
    title: "App Store Ready",
    sub: "Launch with Confidence",
    pos: { top: "70%", right: "-8px" },   // ← adjust freely
  },
];

/* ─── Tech pills bottom-right ──────────────────────────────── */
const techPills = [
  // { img: "/image/ios/swift.png",      label: "Swift",       sub: "Modern Language" },
  { img: "/image/ios/swift.png",      label: "SwiftUI",     sub: "Beautiful UI" },
  { img: "/image/ios/apple-logo.png", label: "iOS / iPadOS",sub: "All Devices" },
  { img: "/image/ios/watch.png",      label: "Apple Watch", sub: "Wearables" },
  { img: "/image/ios/app-store.png",  label: "App Store",   sub: "Global Launch" },
];

/* ─── Brand logos ──────────────────────────────────────────── */
const brands = [
  { name: "Apple", render: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-neutral-700 hover:fill-[#dd0403] transition-colors">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )},
  { name: "Nike", render: () => (
    <svg viewBox="0 0 60 24" className="h-5 w-auto fill-neutral-700 hover:fill-[#dd0403] transition-colors">
      <path d="M56.1 0L20.4 15.4c-2.9 1.2-5.4 1.8-7.4 1.8-3.2 0-5.4-1.4-5.8-3.7-.6-3.4 3.1-7 9.8-9.5L56.1 0zM14.8 6.4C9 8.7 5.5 12 6 14.8c.3 1.9 2.2 3 5 3 1.7 0 3.8-.5 6.4-1.5L48.7 3 14.8 6.4z"/>
    </svg>
  )},
  { name: "Disney", render: () => (
    <span className="font-black text-lg tracking-tight text-neutral-700 hover:text-[#dd0403] transition-colors" style={{fontFamily:"serif",fontStyle:"italic"}}>Disney</span>
  )},
  { name: "Spotify", render: () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-neutral-700 hover:fill-[#dd0403] transition-colors">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )},
  { name: "Uber", render: () => (
    <span className="font-black text-lg tracking-tight text-neutral-700 hover:text-[#dd0403] transition-colors">Uber</span>
  )},
  { name: "Airbnb", render: () => (
    <span className="font-black text-lg tracking-tight text-neutral-700 hover:text-[#dd0403] transition-colors" style={{color:"inherit"}}>airbnb</span>
  )},
];

/* ─── Floating Card ────────────────────────────────────────── */
function FloatCard({ icon, title, sub, delay, floatOffset = 0, pos }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -(6 + floatOffset * 3), 0] }}
      transition={{
        opacity: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        y: {
          delay: delay + 0.6,
          duration: 2.8 + floatOffset * 0.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
      style={pos ? { position: "absolute", ...pos } : {}}
      className="flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] border border-neutral-100 whitespace-nowrap z-20"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#dd0403]/8 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-neutral-900 leading-tight">{title}</p>
        <p className="text-[10px] text-neutral-400 leading-tight">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ────────────────────────────────────────────── */
const IOSAppDevelopmentHero = ({ onConsultClick, onExploreClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-20 pb-0 sm:pt-24 lg:pt-8  selection:text-[#dd0403]">

      {/* Background soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[#dd0403]/6 via-[#dd0403]/3 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#dd0403]/5 blur-3xl" /> */}
        {/* Red curved wave */}
        {/* <svg className="absolute bottom-0 right-0 w-[60%] h-[60%] opacity-10" viewBox="0 0 600 400" fill="none">
          <ellipse cx="400" cy="350" rx="300" ry="200" fill="#dd0403" />
        </svg> */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-0">

        {/* ── MAIN 2-COL GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[80vh]">

          {/* ── LEFT: TEXT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 lg:pr-8 py-10"
          >
            {/* Badge pill */}
            {/* <div className="inline-flex items-center gap-2 self-start">
              <span className="flex items-center gap-2 border border-[#dd0403]/30 bg-white rounded-full px-4 py-1.5 text-[12px] font-semibold text-[#dd0403]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#dd0403]">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iOS App Development
              </span>
            </div> */}
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-3"><span className="h-px w-6 bg-[#dd0403]"></span><span>iOS App Development </span></div>

            {/* Heading */}
            <div>
              <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[48px] font-bold leading-[1.05] tracking-tight">
                <span className="text-[#dd0403]">iOS App Development</span>
                <br />
                <span className="text-neutral-900">Built for the Apple</span>
                <br />
                <span className="text-neutral-900">Ecosystem</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[15px] text-black/55 leading-relaxed max-w-md font-[300]">
              Native iOS applications engineered for performance, security, and effortless
              user experiences — from idea to App Store launch.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onConsultClick}
                className="group inline-flex items-center gap-2.5 bg-[#dd0403] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_8px_24px_-4px_rgba(221,4,3,0.45)] hover:bg-[#b80302] hover:shadow-[0_12px_28px_-4px_rgba(221,4,3,0.55)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                Let's Build Your iOS App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 text-neutral-700 font-semibold text-sm hover:text-[#dd0403] transition-colors"
              >
                Explore Our Capabilities
                <span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs hover:border-[#dd0403] transition-colors">
                  <ArrowRight className="w-3 h-3  group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT: IPHONE + FLOATING CARDS ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center h-full max-h-[450px]"
          >
            {/* Soft red glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#dd0403]/12 blur-[80px] pointer-events-none" />

            {/* iPhone image */}
            <img
              src={iphone}
              alt="iOS App"
              className="relative z-10 w-auto h-[420px] sm:h-[480px] lg:h-[450px] object-contain drop-shadow-2xl"
            />

            {/* ── LEFT FLOATING CARDS — each positioned independently ── */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {leftCards.map((c, i) => (
                <FloatCard
                  key={c.title}
                  {...c}
                  delay={0.4 + i * 0.12}
                  floatOffset={i}
                  pos={c.pos}
                />
              ))}
            </div>

            {/* ── RIGHT FLOATING CARDS — each positioned independently ── */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {rightCards.map((c, i) =>
                c.isAppleIcon ? (
                  <motion.div
                    key="apple-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity: { delay: 0.64, duration: 0.45 },
                      scale:   { delay: 0.64, duration: 0.45 },
                      y: { delay: 1.3, duration: 3.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                    }}
                    style={{ position: "absolute", ...c.pos }}
                    className="w-12 h-12 rounded-2xl bg-[#1d1d1f] flex items-center justify-center shadow-lg"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </motion.div>
                ) : (
                  <FloatCard
                    key={c.title}
                    {...c}
                    delay={0.52 + i * 0.12}
                    floatOffset={1.5 - i * 0.5}
                    pos={c.pos}
                  />
                )
              )}
            </div>

            {/* Decorative red dots */}
            <div className="absolute bottom-8 left-6 w-2 h-2 rounded-full bg-[#dd0403] opacity-60" />
            <div className="absolute top-16 right-4 w-1.5 h-1.5 rounded-full bg-[#dd0403] opacity-40" />
          </motion.div>
        </div>

        {/* ── BOTTOM: BRANDS LEFT + TECH PILLS RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-neutral-200/70 py-6"
        >
          {/* Brand logos */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400 mb-4">
              Trusted by Innovative Brands
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {brands.map((b) => {
                const Logo = b.render;
                return (
                  <div key={b.name} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                    <Logo />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-6">
            {techPills.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-1.5 text-center">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center p-1.5">
                  <img
                    src={p.img}
                    alt={p.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[11px] font-semibold text-neutral-700 leading-tight">{p.label}</p>
                <p className="text-[9px] text-neutral-400 leading-tight">{p.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IOSAppDevelopmentHero;
