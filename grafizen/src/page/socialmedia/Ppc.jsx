import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  BarChart3,
  MousePointerClick,
  MapPin,
  Star,
} from "lucide-react";

export default function SeoHeroSection() {
  // Schema.org Structured Data for Local Business SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grafizen International",
    url: "https://grafizen.com/",
    logo: "https://grafizen.com/logo.png",
    image: "https://grafizen.com/hero-ppc.jpg",
    description:
      "Leading PPC agency in Rajkot providing Google Ads, Meta Ads, and ROI-driven Pay-Per-Click management services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3039",
      longitude: "70.8022",
    },
    areaServed: ["Rajkot", "Gujarat", "India", "Global"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PPC & Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads Management in Rajkot",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meta Ads & Social Media Advertising",
          },
        },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      {/* Inject Structured Data for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <header
        role="banner"
        className="relative min-h-[90vh] overflow-hidden bg-[#f7f5f1] pt-20 pb-16 text-[#111] lg:pt-28 lg:pb-20 flex flex-col justify-center"
      >
        {/* Decorative Lighting Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] blur-[130px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#dd0403 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto   relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: SEO Copy Content */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Local SEO Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 rounded-full   text-xs font-medium text-neutral-600 "
              >  <span className="relative inline-flex h-[2px] w-10  bg-[#dd0403]" />
                {/* <MapPin className="h-3.5 w-3.5 shrink-0 text-[#dd0403]" /> */}
                <span>
                  <strong>PPC AGENCY  IN  RAJKOT</strong>, GUJARAT
                </span>
                {/* <Sparkles className="ml-1 h-3 w-3 text-[#dd0403]" /> */}
              </motion.div>

              {/* H1 Tag for Core Target Keyword */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-[500] tracking-tight leading-[1.15] lg:text-[48px]"
              >
                Drive Qualified Leads with the Top{" "}
                <span className="text-[#dd0403]">PPC Agency in Rajkot</span>
              </motion.h1>

              {/* Keyword-Rich Subheadline */}
              <motion.p
                variants={itemVariants}
                className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-neutral-500 sm:text-md lg:mx-0"
              >
                At <strong>Grafizen International</strong>, we deliver
                data-driven Google Ads, Meta Ads, and performance marketing
                strategies. Stop wasting ad budget and achieve higher ROAS with
                Rajkot’s premier pay-per-click specialists.
              </motion.p>

              {/* Semantic List Items with Keywords */}
              <motion.ul
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0 list-none"
              >
                {[
                  "Google Search & Shopping Ads",
                  "Facebook & Instagram Meta Ads",
                  "High-Converting Landing Pages",
                  "Transparent ROI & Conversion Tracking",
                ].map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-sm text-neutral-600"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#dd0403]"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-neutral-600">{service}</span>
                  </li>
                ))}
              </motion.ul>

              {/* CTAs with Internal Anchor Navigation */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <a
                  href="#free-ppc-audit"
                  title="Claim your Free Google & Meta Ads Audit in Rajkot"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#dd0403] px-7 py-2 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(221,4,3,0.22)] group sm:w-auto"
                >
                  <span>Get Free PPC Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+919000000000"
                  title="Call Grafizen International PPC Experts"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/50 px-6 py-2 text-base font-medium text-neutral-700 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white sm:w-auto"
                >
                  <PhoneCall className="h-4 w-4 text-[#dd0403]" />
                  <span>Talk to PPC Specialist</span>
                </a>
              </motion.div>

              {/* Social Proof / Search Authority Signals */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-6 border-t border-black/[0.08] pt-6 text-left lg:justify-start"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#dd0403] text-[#dd0403]"
                    />
                  ))}
                </div>
                <div className="text-xs text-neutral-500">
                  <strong className="font-semibold text-neutral-800">
                    4.9/5 Rating
                  </strong>{" "}
                  from 100+ Businesses in Rajkot & Gujarat
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive Graphic with Semantic Data */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Visual Card Wrapper */}
              <div className="relative rounded-2xl border border-white/70 bg-white/60 p-5 text-neutral-900 shadow-xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between border-b border-black/[0.08] pb-3">
                  <span className="text-xs font-semibold text-neutral-700">
                    Live Client ROAS Monitor
                  </span>
                  <span className="rounded-full border border-[#dd0403]/20 bg-[#dd0403]/10 px-2 py-0.5 text-[10px] text-[#dd0403]">
                    Active Campaigns
                  </span>
                </div>

                {/* Dashboard Stats */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-neutral-200/80 bg-white/65 p-4">
                    <div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
                      <span>Total Revenue Driven</span>
                      <span className="flex items-center gap-1 font-semibold text-[#dd0403]">
                        <TrendingUp className="w-3.5 h-3.5" /> +340% Growth
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
                      ₹ 18,45,000+
                    </div>

                    {/* Visual Growth Chart */}
                    <div className="mt-4 flex items-end gap-1.5 h-16 w-full pt-2">
                      {[30, 45, 35, 65, 50, 80, 75, 95, 85, 100].map(
                        (height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-[#dd0403]/40 to-[#ff4d4d]"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + i * 0.04,
                            }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-neutral-200/80 bg-white/65 p-3.5">
                      <div className="mb-1 flex items-center gap-2 text-xs text-neutral-500">
                        <MousePointerClick className="h-3.5 w-3.5 text-[#dd0403]" />
                        <span>Average CPL</span>
                      </div>
                      <div className="text-lg font-bold text-neutral-900">
                        ₹ 65.00
                      </div>
                      <div className="text-[10px] text-[#dd0403]">
                        Low Cost / Lead
                      </div>
                    </div>

                    <div className="rounded-xl border border-neutral-200/80 bg-white/65 p-3.5">
                      <div className="mb-1 flex items-center gap-2 text-xs text-neutral-500">
                        <Target className="h-3.5 w-3.5 text-[#dd0403]" />
                        <span>Verified Leads</span>
                      </div>
                      <div className="text-lg font-bold text-neutral-900">
                        2,100+
                      </div>
                      <div className="text-[10px] text-[#dd0403]">
                        High Intent
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary SEO Floating Badges */}
                <motion.div
                  className="absolute -right-4 -top-4 hidden items-center gap-3 rounded-xl border border-white/70 bg-white/80 p-3 shadow-xl backdrop-blur-md sm:flex"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="rounded-lg bg-[#dd0403]/10 p-2 text-[#dd0403]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-neutral-900">
                      Google Ads Certified
                    </h2>
                    <span className="text-[10px] text-[#dd0403]">
                      Official Partner Agency
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}
