import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Layers,
  Zap,
} from "lucide-react";
import local from "../../../public/image/local-seo.png";
import website from "../../../public/image/website.png";
import growth from "../../../public/image/growth.png";
import target from "../../../public/image/target.png";

const services = [
  {
    id: "seo",
    title: "Local & Organic SEO",
    tagline: "Dominate Search Engine Rankings",
    image: local,
    description:
      "We optimize your digital presence so local customers in Rajkot and national B2B clients find your business at the exact moment they are ready to buy.",
    features: [
      "Google Business Profile (Map Pack) Domination",
      "High-Intent Local Rajkot & Regional Keyword Targeting",
      "Technical SEO Audits & Core Web Vitals Optimization",
      "Authority Building & High-Quality Backlink Acquisition",
    ],
    metric: "Top 3 Map Pack Rankings within 90 Days",
    accent: "from-emerald-500 to-cyan-500",
    borderGlow: "hover:border-emerald-500/50",
  },
  {
    id: "ppc",
    title: "Performance Marketing",
    tagline: "High-Converting Paid Campaigns",
    image: website,
    description:
      "Stop burning ad budget on low-quality inquiries. We build hyper-targeted PPC funnels that generate verified calls, forms, and direct sales.",
    features: [
      "Google Search & High-Intent Shopping Ads",
      "Hyper-Targeted Meta Ads (Facebook & Instagram)",
      "A/B Testing on Ad Creatives & Landing Pages",
      "Automated Lead Screening & Conversion Tracking",
    ],
    metric: "Average 3.5x - 5x Return on Ad Spend (ROAS)",
    accent: "from-cyan-500 to-blue-500",
    borderGlow: "hover:border-cyan-500/50",
  },
  {
    id: "branding",
    title: "Content & Brand Strategy",
    tagline: "Turn Visitors into Brand Advocates",
    image: growth,
    description:
      "Random social media graphics build zero revenue. We engineer structured content engines that position your brand as the leading authority in your industry.",
    features: [
      "High-Converting Landing Page UI/UX Design",
      "Strategic Social Media Content & Reel Production",
      "B2B Email & WhatsApp Lead Nurturing Workflows",
      "Brand Positioning & Visual Identity Systems",
    ],
    metric: "40%+ Increase in Lead-to-Customer Conversions",
    accent: "from-blue-500 to-indigo-500",
    borderGlow: "hover:border-blue-500/50",
  },
];

export default function CoreServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="relative bg-white  py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#111111] font-sans  border-[#e6e1d7]">
      {/* Background Decorative Lighting */}
      {/* <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#dd0403]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" /> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5d0d0]/60 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#dd0403]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#dd0403]">
                CORE REVENUE DRIVERS
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[48px] text-black sm:text-[42px]"
            >
              Data-Driven Strategies{" "}
              <span className="text-[#dd0403]">For Business Expansion</span>
            </motion.h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]"
            >
              We don't offer one-size-fits-all packages. We deploy targeted
              growth channels tailored to your exact industry and business
              goals.
            </motion.p>
          </div>
        </div>

        {/* Interactive Desktop Tab Selector */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-6">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative px-5 py-3 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 w-1/3 ${
                  isActive
                    ? "bg-white border-[#dd0403]/30 shadow-[0_10px_24px_rgba(221,4,3,0.08)]"
                    : "bg-white/70 border-[#e6e1d7] hover:border-[#dd0403]/30 hover:bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg ${isActive ? "bg-[#fdeaea]" : "bg-[#f7f5f1]"}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3
                    className={`font-bold text-sm ${isActive ? "text-[#111111]" : "text-[#222222]"}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#777065] mt-0.5">
                    {service.tagline}
                  </p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-xl border-2 border-[#dd0403]/60 pointer-events-none"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Interactive Content Box */}
        <div className="hidden lg:block relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white border border-[#e6e1d7] p-8 sm:p-5 shadow-[0_12px_32px_rgba(17,17,17,0.05)] grid grid-cols-12 gap-8 items-center relative overflow-hidden"
            >
              <div className="col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dd0403] bg-[#fdeaea] px-3 py-1 rounded-md border border-[#fad5d5]">
                  <Zap className="w-3.5 h-3.5" />
                  {activeService.tagline}
                </div>

                <h3 className="text-3xl font-medium text-[#111111]">
                  {activeService.title}
                </h3>

                <p className="text-[#555048] text-base leading-tight">
                  {activeService.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#dd0403] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#333231] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e6e1d7] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#1b7a53] text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{activeService.metric}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#dd0403] hover:bg-[#c00302] text-white font-bold text-sm transition-all shadow-[0_8px_20px_rgba(221,4,3,0.22)]">
                    <span>Discuss Strategy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Visual Card */}
              <div className="col-span-5 relative">
                <div
                  className={`w-full h-54 rounded-xl bg-linear-to-br from-[#dd0403] via-[#f53b3b] to-[#ff6b6b] p-0.5 shadow-xl`}
                >
                  <div className="w-full h-full bg-white  rounded-[11px] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-white border border-[#e6e1d7] rounded-lg">
                        {/* <Layers className="w-6 h-6 text-[#dd0403]" /> */}
                        <img src={target} alt="" className="w- h-8" />
                      </div>
                      <span className="text-xs font-mono text-[#777065] uppercase">
                        Live Engine
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-[#777065] uppercase tracking-wider">
                        Targeted Metric
                      </div>
                      <div className="text-2xl font-medium text-[#111111]">
                        {activeService.metric}
                      </div>
                      <div className="w-full bg-[#e7e2d9] h-2 rounded-full overflow-hidden mt-3">
                        <div className="bg-linear-to-r from-[#dd0403] to-[#ff6b6b] h-full w-4/5 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile / Tablet Responsive Stack Cards */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white border border-[#e6e1d7] p-6 shadow-[0_8px_20px_rgba(17,17,17,0.04)] space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-[#fdeaea] border border-[#fad5d5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#777065]">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-[#555048] text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#dd0403] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#333231]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e6e1d7] flex items-center justify-between text-xs font-semibold text-[#1b7a53]">
                  <span>{service.metric}</span>
                  <ChevronRight className="w-4 h-4 text-[#777065]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
