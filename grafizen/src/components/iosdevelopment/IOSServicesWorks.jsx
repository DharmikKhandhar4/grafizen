import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Smartphone, Layers, ShieldCheck, Wrench, RefreshCw, Cpu } from "lucide-react";

// Import images from public/image/ios folder and public/image
import uiuxImg from "../../../public/image/ios/uiux.webp";
import customImg from "../../../public/image/ios/custom.jpg";
import testingImg from "../../../public/image/ios/text.png";
import maintenanceImg from "../../../public/image/ios/maintence.jpeg";
import migrationImg from "../../../public/image/ios/migration.avif";
import consultingImg from "../../../public/image/conslatanservice.png";

/**
 * Fallback visual card styling if image fails to render
 */
const defaultPlaceholders = [
  {
    bg: "from-rose-500/20 via-neutral-100 to-white",
    icon: Cpu,
    screenTitle: "Strategy & Tech Blueprint",
    subtitle: "Architecture Specification",
    badge: "iOS 18 Ready",
    detail: "Swift 6 Architecture • Modular Microservices",
  },
  {
    bg: "from-blue-500/20 via-neutral-100 to-white",
    icon: Layers,
    screenTitle: "Apple HIG UI/UX Design",
    subtitle: "Figma Component Library",
    badge: "HIG Compliant",
    detail: "Dynamic Island • Liquid Motion 120Hz",
  },
  {
    bg: "from-red-500/20 via-neutral-100 to-white",
    icon: Smartphone,
    screenTitle: "Swift & SwiftUI Native",
    subtitle: "Cross-Device Apple Build",
    badge: "Native Core",
    detail: "iPhone, iPad, Watch, Mac & Vision Pro",
  },
  {
    bg: "from-emerald-500/20 via-neutral-100 to-white",
    icon: ShieldCheck,
    screenTitle: "TestFlight & QA Suite",
    subtitle: "Automated Edge Testing",
    badge: "0-Crash SLA",
    detail: "XCTest Suite • App Store Pre-Flight",
  },
  {
    bg: "from-amber-500/20 via-neutral-100 to-white",
    icon: Wrench,
    screenTitle: "SLA Support & Continuity",
    subtitle: "Active App Store Maintenance",
    badge: "99.9% Uptime",
    detail: "Version Upgrades • Real-time Monitoring",
  },
  {
    bg: "from-purple-500/20 via-neutral-100 to-white",
    icon: RefreshCw,
    screenTitle: "Legacy Modernization",
    subtitle: "Objective-C → SwiftUI",
    badge: "SwiftUI Migration",
    detail: "2.4x Speedup • Modern Reactive Stack",
  },
];

const defaultServices = [
  {
    id: "consulting",
    title: "iOS App Consulting",
    tag: "Strategy-Led Architecture",
    description:
      "Our consulting team reviews your app idea, recommends the right architecture, and develops a clear roadmap aligned with Apple's guidelines and your business ROI.",
    image: consultingImg,
  },
  {
    id: "uiux",
    title: "iOS UI/UX Design",
    tag: "HIG-Compliant Interfaces",
    description:
      "We design iOS app screens in Sketch and Figma following Apple's Human Interface Guidelines (HIG), ensuring pixel-perfect ergonomics, tactile haptics, and fluid micro-interactions.",
    image: uiuxImg,
  },
  {
    id: "custom-dev",
    title: "Custom iOS App Development",
    tag: "Multi-Device Native Build",
    description:
      "We develop custom iOS apps for iPhone, iPad, Apple Watch, and Apple TV using native Swift and SwiftUI, leveraging Apple Silicon optimization and core Apple frameworks.",
    image: customImg,
  },
  {
    id: "testing",
    title: "iOS App Testing & QA",
    tag: "Performance-Verified Releases",
    description:
      "As a trusted iOS app development company, we test your iOS app both manually and with smart tools to eliminate bugs, optimize battery consumption, and guarantee App Store approval.",
    image: testingImg,
  },
  {
    id: "maintenance",
    title: "iOS App Maintenance & Support",
    tag: "Version-Ready Continuity",
    description:
      "We keep your iOS app running smoothly with regular updates, fast bug fixes, and day-one support for new iOS versions and Apple hardware so your app never breaks.",
    image: maintenanceImg,
  },
  {
    id: "migration",
    title: "iOS App Migration & Upgradation",
    tag: "Swift-Forward Modernization",
    description:
      "Easily move your Android or hybrid app to native iOS or upgrade legacy Objective-C code to modern, ultra-fast Swift and SwiftUI architectures ready for tomorrow.",
    image: migrationImg,
  },
];

const IOSServicesWorks = ({
  title = "Our Services And Works",
  subtitle = "Complete end-to-end iOS engineering solutions designed to build scalable, secure, and revenue-driving applications across the Apple ecosystem.",
  services = defaultServices,
  onServiceClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePlaceholder = defaultPlaceholders[activeIndex] || defaultPlaceholders[0];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* Ambient background diffusion */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dd0403]/4 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-[400px] w-[400px] rounded-full bg-[#dd0403]/3 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* ── SECTION HEADER ── */}

        <div className="mb-12 sm:mb-16 lg:mb-10 grid items-end  grid-cols-2  gap-5">
         <div>
           <div className="flex items-center gap-2.5 text-[11px]  font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-3">
            <span className="h-px w-6 bg-[#dd0403]" />
            <span>Capabilities &amp; Deliverables</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-neutral-900 leading-[1.12]">
            {title.includes("Services And Works") ? (
              <>
                Our <span className="text-[#dd0403]">Services And Works</span>
              </>
            ) : (
              title
            )}
          </h2>
         </div>

       <div>
           {subtitle && (
            <p className="mt-4  text-base sm:text-[14] font-[300] text-black/55 leading-relaxed">
              {subtitle}
            </p>
          )}
       </div>
        </div>

        {/* ── ACCORDION LIST ROWS (MATCHING REFERENCE IMAGE LAYOUT) ── */}
        <div className="relative border-t border-neutral-200">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = defaultPlaceholders[index]?.icon || Smartphone;

            return (
              <div
                key={service.id || index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index);
                  if (onServiceClick) onServiceClick(service, index);
                }}
                className={`group relative border-b border-neutral-200 transition-colors duration-300 cursor-pointer ${
                  isActive ? "bg-neutral-50/90" : "bg-transparent hover:bg-neutral-50/50"
                }`}
              >
                {/* Active Indicator Left Accent Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeLeftIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0 bg-[#dd0403]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="py-7 sm:py-9 lg:py-6 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
                    
                    {/* 1. Service Title Column */}
                    <div className="lg:col-span-3 flex items-baseline gap-3">
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-[20px] font-[400] tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-neutral-900"
                            : "text-neutral-800 group-hover:text-[#dd0403]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* 2. Service Description Column */}
                    <div className="lg:col-span-6">
                      <p className="text-sm sm:text-xs font-light text-black/55 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    {/* 3. Action Arrow Button Column (Matches Reference Layout) */}
                    <div className="lg:col-span-3 flex items-center justify-end">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/30 scale-105"
                            : "border border-neutral-300 text-neutral-600 bg-white group-hover:border-[#dd0403] group-hover:text-[#dd0403]"
                        }`}
                      >
                        {isActive ? (
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        ) : (
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        )}
                      </div>
                    </div>

                  </div>

                  {/* ── Mobile/Tablet Connected Preview (when active on < lg screens) ── */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="lg:hidden mt-5 pt-5 border-t border-neutral-200/70"
                    >
                      <div className="relative w-full max-w-sm mx-auto h-48 rounded-2xl bg-white p-2 shadow-lg border border-neutral-200 overflow-hidden">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          <div
                            className={`w-full h-full rounded-xl bg-gradient-to-br ${defaultPlaceholders[index]?.bg || "from-neutral-100 to-white"} p-3.5 flex flex-col justify-between border border-neutral-200/60`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase text-neutral-800 shadow-2xs">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403]" />
                                {defaultPlaceholders[index]?.badge}
                              </span>
                              <Icon className="w-4 h-4 text-[#dd0403]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-neutral-900">
                                {defaultPlaceholders[index]?.screenTitle}
                              </h4>
                              <p className="text-[10px] text-neutral-500">
                                {defaultPlaceholders[index]?.subtitle}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* ── CONNECTED FLOATING PREVIEW IMAGE (MATCHING REFERENCE IMAGE) ── */}
                {/* Renders right above/on the active hovered row */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, y: 0, rotate: 3 }}
                      exit={{ opacity: 0, scale: 0.92, y: 8, rotate: -1 }}
                      transition={{ type: "spring", stiffness: 320, damping: 26 }}
                      className="hidden lg:block absolute right-24 sm:right-32 lg:right-36 -top-12 z-30 pointer-events-none"
                    >
                      <div className="relative w-72 sm:w-80 h-44 sm:h-48 rounded-2xl bg-white p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.08)] border-2 border-white transition-transform duration-300">
                        {service.image ? (
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100 shadow-inner">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        ) : (
                          /* High-fidelity Apple tech preview card */
                          <div
                            className={`relative w-full h-full rounded-xl bg-gradient-to-br ${activePlaceholder.bg} p-4 flex flex-col justify-between overflow-hidden border border-neutral-200/60`}
                          >
                            {/* Glass Specular Glare */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/60 blur-xl pointer-events-none" />

                            {/* Card Top Row: Badge + Icon */}
                            <div className="relative z-10 flex items-center justify-between">
                              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-2xs">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403]" />
                                {activePlaceholder.badge}
                              </span>
                              <div className="h-7 w-7 rounded-lg bg-white/90 flex items-center justify-center shadow-2xs">
                                <Icon className="w-4 h-4 text-[#dd0403]" />
                              </div>
                            </div>

                            {/* Card Center: Screen/Work Preview Content */}
                            <div className="relative z-10 my-auto">
                              <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                                {activePlaceholder.screenTitle}
                              </h4>
                              <p className="text-[11px] text-neutral-500 font-medium">
                                {activePlaceholder.subtitle}
                              </p>
                              <div className="mt-1.5 inline-block text-[10px] font-mono text-neutral-600 bg-white/80 px-2 py-0.5 rounded border border-neutral-200/50">
                                {activePlaceholder.detail}
                              </div>
                            </div>

                            {/* Card Bottom */}
                            <div className="relative z-10 flex items-center justify-between pt-1 border-t border-black/5 text-[10px] text-neutral-400">
                              <span className="text-neutral-500 font-medium">
                                iOS Work Preview
                              </span>
                              <span className="text-[#dd0403] font-semibold flex items-center gap-1">
                                Featured Case
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IOSServicesWorks;
