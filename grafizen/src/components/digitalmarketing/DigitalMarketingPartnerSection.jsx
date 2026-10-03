import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * DigitalMarketingPartnerSection Component
 * Next section following the AI Section.
 * Inspired by the "ABOUT US — Your Digital Partner for..." 2-column layout
 * featuring an overlapping 3-photo collage, background watermark portrait,
 * horizontal divider, and high-converting performance marketing narrative.
 *
 * Theme:
 * - Brand Color: #dd0403 (Grafizen Crimson Red)
 * - Soft blush off-white background (#fef5f7 to #fdf2f5)
 * - Global audience focus (no "India" or "Rajkot")
 * - Zero SEO-related text (pure performance marketing, ads, funnels, and growth)
 */
const DigitalMarketingPartnerSection = ({
  // Image slots for the 3-photo collage (supports uploaded images)
  image1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80", // Businesswoman at laptop (Top-Right)
  image2 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", // Team in office (Back-Left)
  image3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80", // Professional with glasses (Front-Center)
  bgWatermark = "./image/digitalmarketing/corporatewomen.png", // Ghosted background watermark (portrait)
}) => {
  const sectionRef = useRef(null);

  // Track scroll position of this section relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Silky smooth spring interpolation matching scroll velocity
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  // Scroll animations for left column photos (moving down from top to resting position)
  // Card 2 (Back-Left): starts -120px above top, lands at 0px
  const card2Y = useTransform(smoothProgress, [0, 1], [-120, 0]);
  // Card 1 (Main Top-Right): starts -80px above top, lands at 0px
  const card1Y = useTransform(smoothProgress, [0, 1], [-80, 0]);
  // Card 3 (Front-Center): starts -140px above top, lands at 0px
  const card3Y = useTransform(smoothProgress, [0, 1], [-140, 0]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* ── AMBIENT PASTEL GLOWS & MESH GRADIENTS ──────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* <div className="absolute -left-28 top-10 h-[500px] w-[500px] rounded-full bg-[#dd0403]/5 blur-[120px]" /> */}
        {/* <div className="absolute right-10 top-1/4 h-[550px] w-[550px] rounded-full bg-rose-200/30 blur-[130px]" /> */}
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-100/35 blur-[110px]" />
      </div>

      {/* ── FAINT GHOSTED BACKGROUND WATERMARK (Matching Reference) ── */}
      {/* <div className="pointer-events-none absolute  z-0 flex items-center justify-center overflow-hidden opacity-[0.06] mix-blend-multiply h-[600px] w-[600px] left-90 ">
        <img
          src="./image/digitalmarketing/corporatewomen.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center filter grayscale"
        />
      </div> */}

      {/* Decorative Carousel Indicator Dot on Left Margin */}
      {/* <div className="pointer-events-none absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 shadow-md">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1.15fr] lg:gap-12 xl:gap-20">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: Overlapping 3-Photo Collage
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center py-6 lg:py-0"
          >
            {/* Collage Canvas Container */}
            <div className="relative h-[420px] w-full max-w-[460px] sm:h-[480px] sm:max-w-[500px] lg:h-[520px] lg:max-w-[540px]">

              {/* CARD 2: Back-Left Photo (Team in office) */}
              <motion.div
                style={{ y: card2Y }}
                className="absolute -left-6 top-16 z-10 h-[210px] w-[180px] overflow-hidden  shadow-xl shadow-neutral-900/10 sm:top-20 sm:h-[260px] sm:w-[220px] lg:h-[280px] lg:w-[220px]"
              >
                <img
                  src={image2}
                  alt="Marketing strategists collaborating"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* CARD 1: Main Tall Photo (Top-Right, Businesswoman with Laptop) */}
              <motion.div
                style={{ y: card1Y }}
                className="absolute right-2 top-0 z-20 h-[270px] w-[210px] overflow-hidden shadow-2xl shadow-neutral-900/15 ring-4 ring-white/60 sm:right-4 sm:h-[340px] sm:w-[260px] lg:right-6 lg:h-[370px] lg:w-[260px]"
              >
                <img
                  src={image1}
                  alt="Senior digital marketing strategist"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* CARD 3: Front-Center Photo (Smiling Professional with Glasses) */}
              <motion.div
                style={{ y: card3Y }}
                className="absolute bottom-4 left-16 z-30 h-[190px] w-[160px] overflow-hidden shadow-2xl shadow-neutral-900/20 sm:bottom-6 sm:left-24 sm:h-[230px] sm:w-[190px] lg:bottom-8 lg:left-28 lg:h-[250px] lg:w-[210px]"
              >
                <img
                  src={image3}
                  alt="Performance marketing specialist"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Floating Squiggly Red Ribbon Accent (Bottom-Right of Collage) */}
              {/* <motion.div
                animate={{
                  y: [-4, 6, -4],
                  rotate: [-3, 5, -3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -bottom-4 right-12 z-40 sm:bottom-0 sm:right-20"
              >
                <svg width="28" height="60" viewBox="0 0 28 60" fill="none">
                  <path
                    d="M 14 2 C 24 14 24 24 14 34 C 4 44 4 52 14 58"
                    stroke="#dd0403"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div> */}

            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. RIGHT COLUMN: About Us Header, Headline & Narrative
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Top Label: "ABOUT US" + Horizontal Divider Line */}
            {/* <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1e293b]/75 sm:text-[13px]">
                ABOUT US
              </span>
              <div className="h-px flex-1 bg-slate-300/60" />
            </div> */}
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span className="h-px w-7 bg-[#dd0403]"></span><span>  ABOUT US</span></div>

            {/* Main Headline (Multi-line Two-tone Typography) */}
            <h2 className="mt-6 text-3xl font-[600] tracking-[-0.03em] sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              <span className="block text-black">Your</span>
              <span className="block text-black">Digital Partner</span>
              <span className="block font-[600] text-[#dd0403] sm:text-4xl lg:text-[46px]">
            for Smarter Marketing
              </span>
              {/* <span className="block font-[700] text-[#dd0403] sm:text-4xl lg:text-[46px]">
                &amp; Revenue Growth
              </span> */}
            </h2>

            {/* Comprehensive Partner Narrative */}
            <p className="mt-8 text-sm leading-relaxed text-black/55 sm:text-[14px] sm:leading-5 font-[300]">
            Grafizen is a digital marketing company focused on helping businesses build stronger online visibility, attract qualified audiences, and generate measurable growth.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-black/55 sm:text-[14px] sm:leading-5 font-[300]">
              We don't believe in one-size-fits-all marketing. Every business has different audiences, competitors, challenges, and growth opportunities. That's why we build customized strategies designed around your market, goals, and customers.  
            </p>

        

          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default DigitalMarketingPartnerSection;
