import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Heart, Share2, Sparkles, TrendingUp } from "lucide-react";
import face from "../../../public/face.png";
import insta from "../../../public/insta.png";
import whatsapp from "../../../public/whatsapp.png";
import facebook from "../../../public/image/CompleteServices/facebook.png";

// Floating animation helper
const float = (delay = 0, yOffset = 15) => ({
  animate: {
    y: [0, -yOffset, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

export default function SocialMediaHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5f1] py-20 flex items-center justify-center text-[#111]">
      
      {/* -- BACKGROUND DECORATIVE ELEMENTS -- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #111 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient color blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dd0403] blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500 blur-[130px]"
        />
      </div>

      {/* -- MAIN LAYOUT CONTAINER -- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        
        {/* -- FLOATING SOCIAL ICONS (DESKTOP) -- */}
        {/* Instagram (Top Left) */}
        <motion.div
          variants={float(0, 18)}
          animate="animate"
          className="absolute -left-[50%] top-[10%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img src={insta} alt="Instagram" className="h-9 w-9 object-contain" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Instagram</p>
            <p className="text-xs font-bold text-neutral-800">Community Growth</p>
          </div>
        </motion.div>

        {/* Facebook (Top Right) */}
        <motion.div
          variants={float(1, 16)}
          animate="animate"
          className="absolute -right-[50%] top-[12%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img src={facebook} alt="Facebook" className="h-9 w-9 object-contain" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Facebook</p>
            <p className="text-xs font-bold text-neutral-800">Targeted Ads</p>
          </div>
        </motion.div>

        {/* WhatsApp (Middle Left) */}
        <motion.div
          variants={float(2, 20)}
          animate="animate"
          className="absolute left-[-30%] top-[45%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img src={whatsapp} alt="WhatsApp" className="h-9 w-9 object-contain" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">WhatsApp</p>
            <p className="text-xs font-bold text-neutral-800">Direct Conversion</p>
          </div>
        </motion.div>

        {/* YouTube (Middle Right) */}
        <motion.div
          variants={float(1.5, 15)}
          animate="animate"
          className="absolute right-[-35%] top-[48%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">YouTube</p>
            <p className="text-xs font-bold text-neutral-800">Video Content</p>
          </div>
        </motion.div>

        {/* LinkedIn (Bottom Left) */}
        <motion.div
          variants={float(3, 14)}
          animate="animate"
          className="absolute left-[-8%] bottom-[10%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">LinkedIn</p>
            <p className="text-xs font-bold text-neutral-800">B2B Leads</p>
          </div>
        </motion.div>

        {/* X / Twitter (Bottom Right) */}
        <motion.div
          variants={float(2.5, 17)}
          animate="animate"
          className="absolute right-[-8%] bottom-[8%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">X / Twitter</p>
            <p className="text-xs font-bold text-neutral-800">Real-time Buzz</p>
          </div>
        </motion.div>

        {/* -- CENTER CONTENT GROUP -- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Tagline */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full ">
            {/* <Sparkles size={13} className="text-[#dd0403]" /> */}
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-600">
          SOCIAL MEDIA MARKETING AGENCY IN RAJKOT
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[36px] font-[600] leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">
            Social Media Marketing <br />
            <span className="bg-gradient-to-r from-[#dd0403] via-[#ff4d4d] to-[#e05c00] bg-clip-text text-transparent">
             That Drives Real Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-neutral-500 max-w-xl mx-auto">
       We create strategic social media campaigns, engaging content, and targeted advertising that help Rajkot businesses build visibility, generate leads, and grow online.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#dd0403] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(221,4,3,0.22)]"
            >
           Get Your Free Social Audit
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white"
            >
            Explore Our Work
            </a>
          </div>

          {/* Micro Stats Grid */}
          <div className="mt-20 grid grid-cols-3 gap-4 border-t border-black/[0.08] pt-8 max-w-lg mx-auto">
            {[
              { label: "Follower Growth", val: "3.5x", icon: TrendingUp },
              { label: "Post Engagement", val: "+84%", icon: Heart },
              { label: "Total Reach", val: "10M+", icon: Share2 }
            ].map(({ label, val, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-neutral-800">
                  <Icon size={14} className="text-[#dd0403]" />
                  <span className="text-lg font-bold">{val}</span>
                </div>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* -- MOBILE SOCIAL ICONS STRIP -- */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 lg:hidden">
          <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 shadow-md">
            <img src={insta} alt="Instagram" className="h-6 w-6 object-contain" />
            <span className="text-xs font-semibold text-neutral-700">Instagram</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 shadow-md">
            <img src={face} alt="Facebook" className="h-6 w-6 object-contain" />
            <span className="text-xs font-semibold text-neutral-700">Facebook</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/45 px-3 py-1.5 shadow-md">
            <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 object-contain" />
            <span className="text-xs font-semibold text-neutral-700">WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
