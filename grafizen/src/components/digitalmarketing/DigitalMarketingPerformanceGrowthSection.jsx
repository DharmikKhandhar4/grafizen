import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Target, ArrowRight, TrendingUp, Filter, BarChart3, Zap, DollarSign, Activity } from "lucide-react";

/**
 * Digital Marketing Campaign Showcase Slides
 * Auto-rotating digital marketing campaign performance metrics inside the left frame UI mockup.
 */
const campaignSlides = [
  {
    tag: "Meta Paid Advertising",
    title: "E-Commerce Scale Campaign",
    description: "Targeted lookalike audiences & dynamic catalog ads driving high ROAS.",
    roas: "4.85x ROAS",
    cpa: "$12.40 CPA",
    conversions: "3,420 Sales",
    badge: "Meta Ads Manager",
    graphHeights: [40, 65, 55, 85, 95, 100],
    platformColor: "#dd0403",
  },
  {
    tag: "Google Search & Shopping",
    title: "High-Intent Lead Funnel",
    description: "Capturing active buyer intent with high-converting search copies & smart bidding.",
    roas: "5.20x ROAS",
    cpa: "$9.80 CPL",
    conversions: "1,850 Leads",
    badge: "Google Ads Platform",
    graphHeights: [30, 50, 75, 70, 90, 98],
    platformColor: "#dd0403",
  },
  {
    tag: "Creative Video Testing",
    title: "Short-Form Video Ad Studio",
    description: "High-hook video ad creatives tested across Instagram & TikTok for viral conversion.",
    roas: "6.10x ROAS",
    cpa: "11.4% CTR",
    conversions: "1.2M Reach",
    badge: "Social Ads Studio",
    graphHeights: [45, 60, 80, 85, 92, 100],
    platformColor: "#dd0403",
  },
  {
    tag: "Funnel CRO & Scaling",
    title: "Landing Page Optimization",
    description: "High-converting sales funnel architecture engineered to maximize order value.",
    roas: "+34% Conv. Rate",
    cpa: "$148 AOV",
    conversions: "$482k Revenue",
    badge: "Funnel Architecture",
    graphHeights: [50, 70, 65, 90, 96, 100],
    platformColor: "#dd0403",
  },
];

/**
 * DigitalMarketingPerformanceGrowthSection Component
 * Created as a standalone file for Pure Digital Marketing & Performance Media Buying.
 *
 * Left Column (Strictly white, #dd0403, and #dd0403/5 colors):
 * - Sticky desktop browser frame with inner Digital Marketing Campaign & Performance Dashboard UI.
 * - Auto-rotating campaign performance slides with live graphs, ROAS counters, and platform badges.
 * - Scroll-driven flying paper airplane animation (X: 0 -> 500px, Y: 0 -> -40px, Rotate: -4 -> 6deg).
 *
 * Right Column:
 * - Sub-label bar with crimson divider.
 * - Main headline: "We execute data-driven ad campaigns & growth funnels for global brands".
 * - High-converting digital marketing lead narrative.
 * - 3 Digital Marketing Service Blocks (No SEO, No India/Rajkot, No Card Borders/Shadows):
 *   1. Performance Paid Advertising (Meta & Google Ads)
 *   2. Conversion Rate & Funnel Optimization (CRO)
 *   3. Social Media & Content Performance Strategy
 */
const DigitalMarketingPerformanceGrowthSection = ({
  imageSrc = null,
  imageAlt = "Grafizen Performance Digital Marketing Campaign Showcase",
  badgeText = "BEST DIGITAL MARKETING AGENCY • GRAFIZEN • ",
}) => {
  const sectionRef = useRef(null);

  // Auto-changing slide state for inner mockup UI
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % campaignSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const current = campaignSlides[activeSlide];

  // Track page scroll for smooth spring physics
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  // Subtle Y translation for left device frame on scroll
  const frameY = useTransform(smoothProgress, [0, 1], [25, -25]);

  // Scroll-driven animation for paper airplane (X: 0 -> 500px, Y: 0 -> -40px, Rotate: -4deg -> 6deg)
  const airplaneX = useTransform(smoothProgress, [0, 1], [0, 800]);
  const airplaneY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const airplaneRotate = useTransform(smoothProgress, [0, 1], [-4, 6]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]"
    >
      {/* Ambient Background Lighting Glows (Contained in overflow-hidden div so sticky works) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-[450px] w-[450px] rounded-full bg-[#dd0403]/5 blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-100/35 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1.05fr] lg:items-start lg:gap-12 xl:gap-20">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: Sticky Device Frame (Strictly White & #dd0403 / #dd0403/5 Colors)
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-center py-4 lg:sticky lg:top-24 lg:self-start lg:py-0"
          >
            {/* Outer Browser / Tablet Device Frame */}
            <motion.div
              style={{ y: frameY }}
              className="relative w-full max-w-[640px] rounded-[24px] sm:rounded-[32px]   shadow-2xl "
            >
       
              {/* ── INSIDE FRAME CANVAS DIV (STRICTLY WHITE, #dd0403 & #dd0403/5) ── */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#dd0403]/5 p-3 sm:p-5 select-none text-[#dd0403]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02] rounded-[14px]"
                  />
                ) : (
                  // Coded Digital Marketing Performance UI Mockup
                  <div className="flex h-full w-full flex-col justify-between rounded-[14px] bg-white p-3 sm:p-4 border border-[#dd0403]/20 shadow-sm text-[#dd0403]">
                    
                    {/* Header Nav Bar */}
                    <div className="flex items-center justify-between border-b border-[#dd0403]/15 pb-2 text-[10px] sm:text-xs">
                      <div className="flex items-center gap-3">
                        <span className="rounded bg-[#dd0403] px-2 py-0.5 text-[9px] font-black tracking-widest text-white">
                          GRAFIZEN ADS
                        </span>
                        <div className="hidden items-center gap-2 sm:flex text-[#dd0403] font-semibold opacity-90">
                          <span>Meta Ads</span>
                          <span>Google Ads</span>
                          <span>ROAS Funnels</span>
                        </div>
                      </div>

                      {/* Live Indicator Pill & Slide Dots */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 rounded-full bg-[#dd0403]/5 px-2 py-0.5 text-[8px] font-semibold text-[#dd0403] border border-[#dd0403]/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403] animate-pulse"></span>
                          <span>CAMPAIGN LIVE</span>
                        </div>
                    
                      </div>
                    </div>

                    {/* Main Performance Grid 12 (Strictly White & #dd0403 / #dd0403/5) */}
                    <div className="grid flex-1 items-center gap-3 py-2 grid-cols-12">
                      
                      {/* Left Side Campaign Metrics Card */}
                      <div className="col-span-5 flex flex-col justify-between h-full bg-[#dd0403]/5 p-2.5 rounded-xl border border-[#dd0403]/20">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-1"
                          >
                            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#dd0403]">
                              {current.tag}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-[#dd0403] leading-tight">
                              {current.title}
                            </h4>
                            <p className="hidden sm:block text-[8.5px] leading-tight text-[#dd0403]/80 mt-0.5 line-clamp-2">
                              {current.description}
                            </p>

                            <div className="mt-2 flex flex-col gap-1 pt-1 border-t border-[#dd0403]/15">
                              <div className="flex items-center justify-between text-[9px]">
                                <span className="text-[#dd0403]/70">Target ROAS:</span>
                                <span className="font-extrabold text-[#dd0403]">{current.roas}</span>
                              </div>
                              <div className="flex items-center justify-between text-[9px]">
                                <span className="text-[#dd0403]/70">Acquisition:</span>
                                <span className="font-bold text-[#dd0403]">{current.cpa}</span>
                              </div>
                              <div className="flex items-center justify-between text-[9px]">
                                <span className="text-[#dd0403]/70">Total Output:</span>
                                <span className="font-bold text-[#dd0403]">{current.conversions}</span>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Right Side Live Graph & Analytics Mockup */}
                      <div className="col-span-7 flex flex-col justify-between h-full bg-white p-2.5 rounded-xl border border-[#dd0403]/20">
                        <div className="flex items-center justify-between text-[9px] text-[#dd0403] border-b border-[#dd0403]/15 pb-1">
                          <div className="flex items-center gap-1">
                            <Activity className="h-3 w-3 text-[#dd0403]" />
                            <span className="font-semibold text-[#dd0403]">Live ROAS Growth</span>
                          </div>
                          <span className="text-[8px] font-mono text-[#dd0403]/70">{current.badge}</span>
                        </div>

                        {/* Animated Bar Chart Mockup (Strictly #dd0403 & #dd0403/15 Bars) */}
                        <div className="flex items-end justify-between gap-1.5 h-16 sm:h-20 pt-2 pb-1">
                          {current.graphHeights.map((h, i) => (
                            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="w-full rounded-t"
                                style={{
                                  backgroundColor: i === current.graphHeights.length - 1 ? "#dd0403" : "rgba(221, 4, 3, 0.15)",
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-1 text-[8px] text-[#dd0403]/80 border-t border-[#dd0403]/15">
                          <span>Spend: $10.4k</span>
                          <span className="text-[#dd0403] font-bold">+340% Scale</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Campaign Platform Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#dd0403]/15 text-[8px] sm:text-[9px]">
                      <div className="flex items-center gap-1.5 rounded bg-[#dd0403]/5 p-1.5 border border-[#dd0403]/20">
                        <Target className="h-3 w-3 text-[#dd0403]" />
                        <span className="text-[#dd0403] font-medium">Precision Targeting</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded bg-[#dd0403]/5 p-1.5 border border-[#dd0403]/20">
                        <TrendingUp className="h-3 w-3 text-[#dd0403]" />
                        <span className="text-[#dd0403] font-medium">Scalable ROAS</span>
                      </div>
                      <div className="flex items-center justify-center rounded bg-[#dd0403] font-bold text-white text-[9px] uppercase tracking-wider">
                        Scale Now
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* ── CIRCULAR TEXT STAMP BADGE ── */}
              {/* <motion.div
                style={{ rotate: useTransform(smoothProgress, [0, 1], [0, 360]) }}
                className="absolute -bottom-10 -right-6 z-30 h-32 w-32 sm:-bottom-12 sm:-right-8 sm:h-40 sm:w-40 pointer-events-none select-none"
              >
                <svg viewBox="0 0 160 160" className="h-full w-full">
                  <path
                    id="circlePathPerformanceGrafizen"
                    d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-[#dd0403]">
                    <textPath href="#circlePathPerformanceGrafizen" startOffset="0%">
                      {badgeText}
                    </textPath>
                  </text>
                </svg>
              </motion.div> */}
            </motion.div>

            {/* ── SCROLL-DRIVEN PAPER AIRPLANE FLYING ANIMATION (X: 0->500px, Y: 0->-40px, Rotate: -4->6deg) ── */}
            <motion.div
              style={{ x: airplaneX, y: airplaneY, rotate: airplaneRotate }}
              className="pointer-events-none absolute -bottom-12 -left-20 z-20 sm:-bottom-40"
            >
              <img
                src="./image/androidapp/paln.png"
                alt="Paper airplane accent"
                className="h-[100px] w-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. RIGHT COLUMN: Pure Digital Marketing Header & Service Blocks
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Top Sub-label Divider */}
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]"></span>
              <span>PERFORMANCE DIGITAL MARKETING &amp; MEDIA BUYING</span>
            </div>

            {/* Main Title */}
            <h2 className="mt-3 text-3xl font-[600] tracking-[-0.03em] text-black sm:text-4xl lg:text-[44px] lg:leading-[1.14]">
              We Turn Ads Into 
           
              <span className="font-[600] text-[#dd0403] pl-2">
              Business Growth
              </span>{" "}
          
            </h2>

            {/* Highlighted Lead Paragraph */}
            <p className="mt-6 text-base font-[300] leading-relaxed text-black/55 sm:text-[14px] sm:leading-5">
              As a high-performance digital marketing agency, we specialize in scaling revenue through targeted social ads, search campaigns, conversion rate optimization, and retention funnels. We turn ad spend into predictable profit.
            </p>

            {/* Narrative Body Copy */}
            <p className="mt-4 text-sm leading-relaxed text-black/55 sm:text-[14px] sm:leading-5 font-[300]">
              Grafizen delivers end-to-end performance marketing strategies. Our team of media buyers, creative strategists, and conversion experts manage full-funnel ad campaigns across Meta, Google, TikTok, and LinkedIn. We relentlessly test, optimize, and scale your customer acquisition to achieve maximum return on investment.
            </p>

            {/* 1. Performance Paid Advertising Block */}
            <div className="mt-8 flex items-start gap-4 sm:gap-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <Target className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
                  Performance Paid Advertising (Meta &amp; Google Ads)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
                  Engineered media buying strategies across Meta Ads and Google Search/Shopping. We optimize targeting, ad creatives, and bidding strategies to maximize return on ad spend (ROAS) and lower acquisition costs for sustainable brand scaling.
                </p>
              </div>
            </div>

            {/* 2. Conversion Rate & Funnel Optimization (CRO) Block */}
            <div className="mt-6 flex items-start gap-4 sm:gap-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <Filter className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
                  Conversion Rate &amp; Funnel Optimization (CRO)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
                  Turning ad traffic into paying customers through high-converting landing pages, seamless sales funnels, and user experience testing. We eliminate funnel friction to increase average order value (AOV) and customer lead conversion.
                </p>
              </div>
            </div>

            {/* 3. Social Media & Content Performance Strategy Block */}
            <div className="mt-6 flex items-start gap-4 sm:gap-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
                  Social Media &amp; Content Performance Strategy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
                  High-impact ad creatives, short-form video hooks, and brand storytelling built specifically to capture audience attention and convert cold traffic into loyal brand advocates. We continuously refresh creatives to prevent ad fatigue.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingPerformanceGrowthSection;
