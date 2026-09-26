import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  RefreshCw,
  Palette,
  Smartphone,
  Layers,
  ShieldCheck,
  Gauge,
  Headphones,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: Lightbulb,
    title: "Android App Consulting Firm",
    shortTitle: "App Consulting",
    badge: "+70% Revenue Potential",
    description:
      "We have a skilled team of Android app developers who can transform your business idea into a high-quality Android app. As a dedicated Android app development company, we work closely with you to understand your needs and create a mobile app designed to grow your business and increase your revenue by up to 70%.",
    details: [
      "Strategic tech stack advisory (React Native vs Hybrid, Kotlin Native)",
      "Database architecture selection (SQLite vs Room Database)",
      "App Store Optimization (ASO) to rank higher and maximize organic downloads",
      "Scalable backend planning for high concurrent user loads",
    ],
    tags: ["Tech Stack Advisory", "React Native vs Hybrid", "SQLite & Room", "ASO Strategy"],
  },
  {
    id: "02",
    icon: RefreshCw,
    title: "Android App Modernization",
    shortTitle: "Modernization",
    badge: "Zero Data Loss Migration",
    description:
      "Our team of expert developers will not only assist you in updating your old Android applications but also in converting your outdated hybrid app to a more modern native Android app immediately.",
    details: [
      "Convert Ionic to Kotlin without any data loss",
      "Migrate legacy Java codebases to clean, modern Kotlin",
      "Transform React Native hybrid apps into high-performance Native Android",
      "20+ years of collective application re-engineering experience",
    ],
    tags: ["Ionic to Kotlin", "Java to Kotlin", "React Native to Kotlin", "Zero Data Loss"],
  },
  {
    id: "03",
    icon: Palette,
    title: "Android App UI/UX Design",
    shortTitle: "UI/UX Design",
    badge: "+75% Engagement Rate",
    description:
      "We can help you create an engaging UI/UX design for your application which will improve app usability. Better UI/UX focuses on providing the best user experience from the moment users land on your app to the final purchase.",
    details: [
      "User journey mapping and high-converting wireframes",
      "Interactive Figma prototyping and visual design systems",
      "Intuitive navigation designed to boost user retention",
      "Proven UI patterns that increase engagement by up to 75%",
    ],
    tags: ["User Flow", "Wireframing", "Interactive Prototyping", "Design System"],
  },
  {
    id: "04",
    icon: Smartphone,
    title: "Custom Android App Development",
    shortTitle: "Custom Dev",
    badge: "Enterprise Scale",
    description:
      "We develop custom Android applications for a wide range of industries that get your app ahead. As an Android app development company, we develop customized applications that are aligned with your business goals and requirements.",
    details: [
      "Bespoke Android architecture tailored to your business model",
      "Engineered to achieve millions of downloads in a short span of time",
      "Seamless API integrations, payment gateways & real-time sync",
      "Optimized for high concurrency and enterprise data security",
    ],
    tags: ["Custom Architecture", "Enterprise Scalability", "Payment Gateways", "Play Store Scale"],
  },
  {
    id: "05",
    icon: Layers,
    title: "Kotlin Multi-Platform (KMM) Integration",
    shortTitle: "KMM Multiplatform",
    badge: "Cross-Platform Native",
    description:
      "Our Kotlin Multiplatform Mobile (KMM) developers design apps supporting multi-platform integration across iOS, Android, macOS, Windows, Linux, and more—maintaining a native UX on each platform with a shared codebase.",
    details: [
      "Unified shared business logic across Android & iOS",
      "Eliminates duplicate code and reduces long-term maintenance costs",
      "100% native performance and UI rendering on each device",
      "Rapid deployment across mobile, desktop, and web environments",
    ],
    tags: ["Kotlin Multiplatform", "Shared Codebase", "iOS & Android", "Native Performance"],
  },
  {
    id: "06",
    icon: ShieldCheck,
    title: "Android App Testing & Quality Assurance",
    shortTitle: "Testing & QA",
    badge: "100% Bug-Free Guarantee",
    description:
      "Whether your Android app was developed by your in-house team, a development partner, or another agency, we serve as your reliable testing partner to ensure your application is completely bug-free.",
    details: [
      "Comprehensive automated and manual QA testing cycles",
      "Security auditing, penetration tests, and vulnerability checks",
      "Real-device testing across 500+ Android screen sizes & OS versions",
      "Robustness and high-load stress testing for flawless user experience",
    ],
    tags: ["Automated QA", "Security Audits", "Device Lab Testing", "Bug-Free Guarantee"],
  },
  {
    id: "07",
    icon: Gauge,
    title: "Android App Optimization",
    shortTitle: "App Optimization",
    badge: "Ultra-Fast Speed",
    description:
      "We specialize in Android app optimization to deliver fast, responsive, and high-performing apps. Our experts analyze your code, images, and resources to eliminate performance bottlenecks and improve efficiency.",
    details: [
      "Code profiling and memory leak elimination",
      "Image and resource compression for lightning-fast launch times",
      "Higher user retention and reduced Play Store uninstall rates",
      "Improved Google Play Store ranking and performance scores",
    ],
    tags: ["Speed Bottlenecks", "Asset Compression", "Memory Optimization", "Play Store Ranking"],
  },
  // {
  //   id: "08",
  //   icon: Headphones,
  //   title: "Android App Maintenance & Support",
  //   shortTitle: "Support & Maintenance",
  //   badge: "24/7 OS Compatibility",
  //   description:
  //     "Partner with our Android development company for experienced developers and support teams who ensure your app stays up-to-date, secure, and running smoothly with full support.",
  //   details: [
  //     "Rapid bug resolution and regular patch deployments",
  //     "Guaranteed compatibility with the latest Android OS releases",
  //     "24/7 uptime monitoring, server health checks, and data backups",
  //     "Ongoing feature enhancements and third-party API updates",
  //   ],
  //   tags: ["Latest Android OS Support", "Bug Resolution", "Security Patches", "24/7 Monitoring"],
  // },
];

export default function AndroidAppServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
      {/* Background Soft Glow Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#dd0403]/[0.03] blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#dd0403]/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            HEADER SECTION
        ========================================== */}
        <div className="mx-auto max-w-[850px] text-center mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2.5 text-[11px] font-[300] uppercase tracking-[0.22em] text-black/45"
          >
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>OUR SERVICES</span>
            {/* <span className="h-px w-7 bg-[#dd0403]" /> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-[600] leading-[1.18] tracking-tight text-[#111]"
          >
            <span className="text-[#dd0403]">Android App Development</span> Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-[13.5px] sm:text-[14px] font-[300] leading-tight text-black/55 max-w-[680px] mx-auto"
          >
            Choose a service from the left to view comprehensive capabilities, deliverables, and architecture details.
          </motion.p>
        </div>

        {/* =========================================
            MOBILE & TABLET TABS (< lg)
        ========================================== */}
        <div className="block lg:hidden mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-hide snap-x">
            {services.map((item, index) => {
              const isActive = activeIndex === index;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-[12.5px] font-medium transition-all duration-200 snap-center whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#dd0403] border-[#dd0403] text-white shadow-md shadow-[#dd0403]/25"
                      : "bg-white border-gray-200 text-black/70 hover:border-[#dd0403] hover:text-[#dd0403]"
                  }`}
                >
                  <ItemIcon className="h-4 w-4" />
                  <span>{item.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            DESKTOP SPLIT LAYOUT:
            LEFT: List of Service Names
            RIGHT: Card Content Changing on Click
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-start">
          
          {/* =========================================
              LEFT SIDE: LIST OF SERVICES (lg:col-span-5)
          ========================================== */}
          <div className="hidden lg:flex flex-col space-y-2.5 lg:col-span-4">
            {services.map((item, index) => {
              const isActive = activeIndex === index;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center justify-between w-full py-2.5 px-3 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#dd0403] text-white shadow-[0_10px_28px_rgba(221,4,3,0.22)] scale-[1.01]"
                      : "bg-white border border-gray-200/90 text-black/80 hover:border-[#dd0403]/40 hover:bg-stone-50/80 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    {/* Icon Box */}
                    <div
                      className={`flex h-6 w-6shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : " text-black/60  group-hover:text-[#de5454]"
                      }`}
                    >
                      <ItemIcon className="h-5 w-5" />
                    </div>

                    {/* Service Name & Number */}
                    <div className="min-w-0">
                      {/* <span
                        className={`text-[10px] font-bold tracking-wider uppercase block ${
                          isActive ? "text-white/75" : "text-black/40 group-hover:text-[#dd0403]"
                        }`}
                      >
                        Service {item.id}
                      </span> */}
                      <h3
                        className={`text-[14.5px] font-[400] leading-snug truncate transition-colors ${
                          isActive ? "text-white" : "text-[#111] group-hover:text-[#dd0403]"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Arrow Indicator */}
                  <div
                    className={`flex h-6 w-6shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? " text-white"
                        : "text-black/30 group-hover:text-[#dd0403] group-hover:translate-x-1"
                    }`}
                  > 
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* =========================================
              RIGHT SIDE: CARD CONTENT (lg:col-span-7)
              Changes smoothly when left button is clicked
          ========================================== */}
          <div className="lg:col-span-8 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 lg:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dd0403] to-transparent" />

                {/* Subtle Background Watermark Number */}
                {/* <div className="pointer-events-none absolute -bottom-6 -right-4 text-[130px] font-extrabold text-stone-900/[0.03] select-none leading-none">
                  {activeService.id}
                </div> */}

                {/* Card Top: Number + Icon + Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/25">
                      <ActiveIcon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className=" text-[22px] sm:text-[20px] font-[400] text-[#111] leading-tight">
                  {activeService.title}
                </h3>
                  </div>
                </div>

                {/* Service Headline */}
               

                {/* Paragraph Content */}
                <p className="mt-2 text-[14px] sm:text-[14px] font-[300] leading-tight text-black/55">
                  {activeService.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <h4 className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-black/65 mb-3.5 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#dd0403]" />
                    <span>KEY CAPABILITIES & DELIVERABLES</span>
                  </h4>

                  <div className="space-y-2.5">
                    {activeService.details.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-black/55">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#dd0403] mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {activeService.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-stone-100/90 px-3 py-1 text-[11px] font-medium text-black/70 border border-gray-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[12px] font-normal text-black/50">
                    Need custom specifications for this service?
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#dd0403] px-5 py-2.5 text-[12.5px] font-semibold text-white shadow-md shadow-[#dd0403]/20 transition-all duration-200 hover:bg-black hover:shadow-lg"
                  >
                    <span>Talk to our experts</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
