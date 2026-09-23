import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Share2,
  TrendingUp,
} from "lucide-react";
import face from "../../../public/face.png";
import insta from "../../../public/insta.png";
import instagramwhite from "../../../public/image/instagramwhite.png";
import whatsapp from "../../../public/whatsapp.png";
import facebook from "../../../public/image/CompleteServices/facebook.png";
import facebookwhite from "../../../public/image/facebookwhite.png";
import follow from "../../../public/image/follow.png";
import post from "../../../public/image/post.png";
import reach from "../../../public/image/reach.png";

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
  const [typedText, setTypedText] = useState("");
  const typingText = "Paying Customers";

  useEffect(() => {
    let characterIndex = 0;
    let typingForward = true;
    let typingTimer;

    const typeNextCharacter = () => {
      if (typingForward) {
        characterIndex += 1;
      } else {
        characterIndex -= 1;
      }

      setTypedText(typingText.slice(0, characterIndex));

      if (characterIndex === typingText.length) {
        typingForward = false;
        typingTimer = setTimeout(typeNextCharacter, 1400);
      } else if (characterIndex === 0) {
        typingForward = true;
        typingTimer = setTimeout(typeNextCharacter, 400);
      } else {
        typingTimer = setTimeout(typeNextCharacter, typingForward ? 90 : 55);
      }
    };

    typingTimer = setTimeout(typeNextCharacter, 90);

    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <section className="relative md:min-h-screen overflow-hidden bg-white py-12 sm:py-16 lg:py-20 flex items-center justify-center text-[#111]">
      {/* -- BACKGROUND DECORATIVE ELEMENTS -- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />

      {/* -- MAIN LAYOUT CONTAINER -- */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 text-center">
        {/* -- FLOATING SOCIAL ICONS (DESKTOP ONLY) -- */}
        {/* Instagram (Top Left) */}
        <motion.div
          variants={float(0, 18)}
          animate="animate"
          className="absolute -left-[50%] top-[10%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img src={insta} alt="Instagram" className="h-9 w-9 object-contain" />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Instagram
            </p>
            <p className="text-xs font-bold text-neutral-800">
              Community Growth
            </p>
          </div>
        </motion.div>

        {/* Facebook (Top Right) */}
        <motion.div
          variants={float(1, 16)}
          animate="animate"
          className="absolute -right-[50%] top-[12%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img
            src={facebook}
            alt="Facebook"
            className="h-9 w-9 object-contain"
          />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Facebook
            </p>
            <p className="text-xs font-bold text-neutral-800">Targeted Ads</p>
          </div>
        </motion.div>

        {/* WhatsApp (Middle Left) */}
        <motion.div
          variants={float(2, 20)}
          animate="animate"
          className="absolute left-[-30%] top-[45%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="h-9 w-9 object-contain"
          />
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              WhatsApp
            </p>
            <p className="text-xs font-bold text-neutral-800">
              Direct Conversion
            </p>
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
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              YouTube
            </p>
            <p className="text-xs font-bold text-neutral-800">Video Content</p>
          </div>
        </motion.div>

        {/* LinkedIn (Bottom Left) */}
        <motion.div
          variants={float(3, 14)}
          animate="animate"
          className="absolute left-[-8%] bottom-[16%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              LinkedIn
            </p>
            <p className="text-xs font-bold text-neutral-800">B2B Leads</p>
          </div>
        </motion.div>

        {/* X / Twitter (Bottom Right) */}
        <motion.div
          variants={float(2.5, 17)}
          animate="animate"
          className="absolute right-[-10%] bottom-[16%] hidden lg:flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/45 p-3 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              X / Twitter
            </p>
            <p className="text-xs font-bold text-neutral-800">Real-time Buzz</p>
          </div>
        </motion.div>

        {/* -- CENTER CONTENT GROUP (FLEX WITH ORDER ON MOBILE) -- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-2xl mx-auto flex flex-col items-center text-center"
        >
          {/* 1. TITLE & TAGLINE (order-1) */}
          <div className="order-1 flex flex-col items-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full">
              <span className="rounded-full border border-[#dd0403]/20 px-3.5 py-1 text-[10px] sm:text-[11px] font-[400] uppercase tracking-[0.2em] text-[#dd0403]">
                SOCIAL MEDIA MARKETING AGENCY
              </span>
            </div>

            <h1 className="text-[26px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-[600] leading-[1.15] lg:leading-[1.1] tracking-[-0.03em]">
              Turn Everyday Scrollers Into <br className="hidden sm:inline" />
              <span className="text-[#dd0403]">
                {typedText}
                <span className="ml-1 inline-block animate-pulse text-[24px] sm:text-[36px]">
                  |
                </span>
              </span>
            </h1>
          </div>

          {/* 2. MOBILE SOCIAL ICONS STRIP (order-2 on mobile, hidden on desktop) */}
          <div className="order-2 my-5 flex flex-wrap justify-center gap-x-16 gap-y-3   lg:hidden">
            <div className="flex items-center gap-2 rounded-xl  md:bg-white/75 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] px-3 py-1.5 shadow-xs backdrop-blur-md">
              <img
                src={instagramwhite}
                alt="Instagram"
                className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              />
              <span className="text-xs font-semibold md:text-neutral-800 text-white
              ">
                Instagram
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl  bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] md:bg-white/75 px-3 py-1.5 shadow-xs backdrop-blur-md">
              <img src={facebookwhite} alt="Facebook" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
              <span className="text-xs font-semibold md:text-neutral-800 text-white ">
                Facebook
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/75 px-3 py-1.5 shadow-xs backdrop-blur-md">
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              />
              <span className="text-xs font-semibold text-neutral-800">
                WhatsApp
              </span>
            </div>
          </div>

          {/* 3. IMAGES & STATS GRID (order-3 on mobile, lg:order-4 on desktop) */}
          <div className="order-3 lg:order-4 my-3 sm:my-8 lg:mt-16 grid grid-cols-3 gap-2 sm:gap-4 border-y lg:border-t lg:border-b-0 border-black/[0.08] py-4 sm:py-8 lg:pt-8 lg:pb-0 w-full max-w-lg mx-auto">
            {[
              { label: "Follower Growth", val: "3.5x", icon: TrendingUp, image: follow },
              { label: "Post Engagement", val: "+84%", icon: Heart, image: post },
              { label: "Total Reach", val: "10M+", icon: Share2, image: reach },
            ].map(({ label, val, icon: Icon, image }) => (
              <div key={label} className="text-center">
                <img
                  src={image}
                  alt={label}
                  className="mx-auto h-9 w-9 sm:h-14 sm:w-14 object-contain"
                />
                <div className="mt-1.5 flex items-center justify-center gap-1.5 sm:gap-2 text-black">
                  {/* <Icon size={16} className="text-[#dd0403] sm:w-5 sm:h-5 shrink-0" /> */}
                  <span className="text-lg sm:text-2xl font-[400]">{val}</span>
                </div>
                <p className="mt-1 text-[9px] sm:text-[11px] md:text-[12px] font-[300] uppercase tracking-wider text-black/55">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* 4. DESCRIPTION CONTENT (order-4 on mobile, lg:order-2 on desktop) */}
          <p className="order-4 lg:order-2 mt-0 sm:mt-6 text-xs sm:text-base leading-relaxed text-black/55 max-w-xl mx-auto font-[300]">
            We create strategic social media campaigns, engaging content, and
            targeted advertising that help businesses build visibility, generate
            leads, and grow online.
          </p>

          {/* 5. ACTION BUTTONS (order-5 on mobile, lg:order-3 on desktop) */}
          <div className="order-5 lg:order-3 mt-6 sm:mt-8 flex  sm:flex-row justify-center items-center gap-3 sm:gap-3 w-full sm:w-auto">
            <a
              href="https://grafizen.com/contact-us"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl bg-[#dd0403] px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(221,4,3,0.22)]  "
            >
               <span className=" md:flex hidden whitespace-nowrap  "> Book Your  Free</span>   Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://grafizen.com/industries-we-work"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/50 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white"
            >
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
