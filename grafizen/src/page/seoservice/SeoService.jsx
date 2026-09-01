import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import keyword from "../../../public/image/keyword.png";
import search from "../../../public/image/search-engine.png";
import seo from "../../../public/image/seo.png";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Star,
  Zap,
  BarChart3,
  X,
  Target,
  Sparkles,
  Layers,
  Award,
  GitBranch,
  ShieldCheck,
  Check,
  Building2,
  ShoppingBag,
  Cpu,
  MapPin,
  HelpCircle,
} from "lucide-react";

export default function SeoService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClusterTab, setSelectedClusterTab] = useState("all");
  const [auditUrl, setAuditUrl] = useState("");
  const [auditEmail, setAuditEmail] = useState("");
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const keywordClusters = [
    {
      id: "rajkot-services",
      keyword: "SEO Services in Rajkot",
      category: "local",
      priority: "Top Priority ",
      priorityType: "high",
      intent: "Commercial / High-Intent",
      difficulty: "Achievable Win",
      description:
        "Direct targeted queries from Rajkot businesses searching for expert SEO partners.",
      metrics: { rankPotential: "Top 3 (3-5 Months)", conversionRate: "14.8%" },
    },
    {
      id: "rajkot-company",
      keyword: "SEO Company in Rajkot",
      category: "local",
      priority: "Top Priority ",
      priorityType: "high",
      intent: "High Commercial Intent",
      difficulty: "Achievable Win",
      description:
        "Businesses actively looking to hire a reputable agency in the Rajkot market.",
      metrics: { rankPotential: "Top 3 (3-5 Months)", conversionRate: "16.2%" },
    },
    {
      id: "rajkot-agency",
      keyword: "Best SEO Agency in Rajkot",
      category: "local",
      priority: "High Recommended",
      priorityType: "high",
      intent: "Decision / Transactional",
      difficulty: "Low-Medium",
      description:
        "Comparative searches evaluating the best-rated digital marketing agencies.",
      metrics: { rankPotential: "Top 5 (2-4 Months)", conversionRate: "18.5%" },
    },
    {
      id: "local-seo",
      keyword: "Local SEO Services in Rajkot",
      category: "local",
      priority: "Fast Impact",
      priorityType: "medium",
      intent: "Local 3-Pack Maps",
      difficulty: "Achievable",
      description:
        "Google Business Profile and Google Maps optimization for local footfall & calls.",
      metrics: {
        rankPotential: "Rank 1 Maps (2 Months)",
        conversionRate: "22.4%",
      },
    },
    // {
    //   id: "technical-seo",
    //   keyword: "Technical SEO Services",
    //   category: "technical",
    //   priority: "Core Service",
    //   priorityType: "medium",
    //   intent: "Informational & B2B",
    //   difficulty: "Medium",
    //   description:
    //     "Core Web Vitals, site architecture, crawl budget & JavaScript rendering fixes.",
    //   metrics: { rankPotential: "National Reach", conversionRate: "9.6%" },
    // },
    // {
    //   id: "ecommerce-seo",
    //   keyword: "Ecommerce SEO Services",
    //   category: "ecommerce",
    //   priority: "High Value",
    //   priorityType: "high",
    //   intent: "Transactional B2B",
    //   difficulty: "Medium-High",
    //   description:
    //     "Category and product page SEO for online retail stores and D2C brands.",
    //   metrics: { rankPotential: "Revenue Scaler", conversionRate: "12.1%" },
    // },
    // {
    //   id: "shopify-seo",
    //   keyword: "Shopify SEO Services",
    //   category: "ecommerce",
    //   priority: "Platform Specific",
    //   priorityType: "medium",
    //   intent: "High Buying Intent",
    //   difficulty: "Medium",
    //   description:
    //     "Custom app indexation, schema markup, and collection optimization on Shopify.",
    //   metrics: { rankPotential: "High Margin", conversionRate: "15.0%" },
    // },
    // {
    //   id: "small-business",
    //   keyword: "SEO Services for Small Businesses",
    //   category: "specialized",
    //   priority: "SMB Focus",
    //   priorityType: "medium",
    //   intent: "Commercial / Budget",
    //   difficulty: "Medium",
    //   description:
    //     "High ROI affordable ranking strategies designed specifically for SMB scale.",
    //   metrics: { rankPotential: "High Volume", conversionRate: "11.7%" },
    // },
    // {
    //   id: "audit-services",
    //   keyword: "SEO Audit Services",
    //   category: "technical",
    //   priority: "Lead Magnet",
    //   priorityType: "medium",
    //   intent: "Audit & Analysis",
    //   difficulty: "Medium",
    //   description:
    //     "Full in-depth site diagnostics, penalty recovery, and ranking gap breakdown.",
    //   metrics: { rankPotential: "Fast Onboarding", conversionRate: "20.3%" },
    // },
    // {
    //   id: "international-seo",
    //   keyword: "International SEO Services",
    //   category: "specialized",
    //   priority: "Global Expansion",
    //   priorityType: "medium",
    //   intent: "Multi-Region / Hreflang",
    //   difficulty: "High",
    //   description:
    //     "Global targeting with multi-language hreflang implementation and CDN optimization.",
    //   metrics: { rankPotential: "Enterprise Value", conversionRate: "8.9%" },
    // },
  ];

  const filteredClusters =
    selectedClusterTab === "all"
      ? keywordClusters
      : keywordClusters.filter((c) => c.category === selectedClusterTab);

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setAuditSubmitted(true);
    setTimeout(() => {
      setAuditSubmitted(false);
      setIsModalOpen(false);
      setAuditUrl("");
      setAuditEmail("");
    }, 2200);
  };

  // Depth extrusion count for 3D Google logo
  const depthLayers = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="relative w-full min-h-screen bg-white text-[#111111] font-['Poppins',sans-serif] overflow-hidden selection:bg-[#dd0403] selection:text-white  px-4 sm:px-6 lg:px-14 flex flex-col justify-between">
      {/* ================= ISOMETRIC WIREFRAME BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient soft glow blobs */}
        {/* <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#4285F4]/10 via-[#34A853]/10 to-[#EA4335]/10 rounded-full blur-3xl pointer-events-none" /> */}
        {/* <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#dd0403]/5 rounded-full blur-3xl pointer-events-none" /> */}
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-[1400px] w-full mx-auto relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* ──────────────── LEFT COLUMN: Typography & Content ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow badge */}
            <div className="flex items-center gap-3 mb-10 mt-24">
              <span className="w-8 h-[2px] bg-[#dd0403] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#dd0403] uppercase">
                SEO SERVICES IN RAJKOT
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[48px] font-[500] text-[#111111] leading-[1.06] tracking-[-0.03em]">
              <span className="text-[#dd0403]"> SEO Services </span> in Rajkot
              That Drive Real Business Growth
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-[#555048] text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Our SEO services in Rajkot help businesses improve Google
              visibility, attract high-intent customers, and generate
              sustainable organic traffic through data-driven strategies.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 bg-[#dd0403]  text-white font-medium text-[15px] px-8 py-2.5 rounded-xl border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(221,4,3,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start Growing </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#strategy-breakdown"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#555048] hover:text-[#dd0403] transition-colors py-2"
              >
                <GitBranch className="w-4 h-4 text-[#dd0403]" />
                <span>Explore SEO Strategy</span>
              </a>
            </div>

            {/* Trustpilot / Rating Block */}
            <div className="mt-12 pt-4 border-t border-[#e6dece]">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#777065] tracking-wide uppercase">
                    TRUSTED BY GROWING BUSINESSES
                  </span>
                  <div className="flex items-center gap-1 mt-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="w-6 h-6 bg-[#eab308] rounded flex items-center justify-center text-white shadow-sm"
                      >
                        <Star className="w-3.5 h-3.5 fill-white" />
                      </div>
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#111111]">
                      4.9 / 5.0
                    </span>
                    <span className="text-xs text-[#777065] ml-1">
                      (280+ Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT COLUMN: Authentic 3D Isometric Google 'G' Aperture ──────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
            <div className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center select-none">
              {/* Ground Platform Aperture (Isometric Ellipse) & Tangent Lines */}
              <svg
                viewBox="0 0 620 460"
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                fill="none"
              >
                {/* Platform Disc Layer */}
                <ellipse
                  cx="310"
                  cy="245"
                  rx="240"
                  ry="110"
                  fill="#FAF7F2"
                  stroke="#1E1E1E"
                  strokeWidth="1.8"
                />
                <ellipse
                  cx="310"
                  cy="245"
                  rx="238"
                  ry="108"
                  fill="#F3ECE0"
                  opacity="0.6"
                />

                {/* Perspective Tangent Connecting Lines (Only 2 Lines) */}
                <line
                  x1="72"
                  y1="195"
                  x2="265"
                  y2="35"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  opacity="0.85"
                />
                <line
                  x1="480"
                  y1="340"
                  x2="320"
                  y2="500"
                  stroke="#1E1E1E"
                  strokeWidth="1.5"
                  opacity="0.85"
                />

                {/* Signal Green Intersection Dots */}
                <circle
                  cx="72"
                  cy="195"
                  r="7"
                  fill="#dd0403"
                  fillOpacity="0.25"
                />
                <circle
                  cx="72"
                  cy="195"
                  r="4"
                  fill="#dd0403"
                  stroke="#FAF7F2"
                  strokeWidth="1.2"
                />

                <circle
                  cx="480"
                  cy="340"
                  r="7"
                  fill="#dd0403"
                  fillOpacity="0.25"
                />
                <circle
                  cx="480"
                  cy="340"
                  r="4"
                  fill="#dd0403"
                  stroke="#dd0403"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Floating 3D Google G Logo */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 flex items-center justify-center"
                style={{
                  perspective: 1200,
                }}
              >
                {/* 3D Transformed Layer Stack */}
                <div
                  className="relative w-[190px] sm:w-[220px] md:w-[245px] aspect-square flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(58deg) rotateZ(-34deg)",
                  }}
                >
                  {/* Cast Shadow on Platform */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
                    style={{
                      transform:
                        "translateZ(-32px) translateY(26px) scale(0.96)",
                      background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.06) 60%, transparent 80%)",
                      filter: "blur(14px)",
                    }}
                  />

                  {/* 20 Precise 3D Extrusion Depth Slices */}
                  {depthLayers.map((layer) => {
                    const z = layer;
                    const isTop = layer === depthLayers.length - 1;

                    // Shaded colors for 3D extrusion depth
                    const red = isTop ? "#EA4335" : "#9E1815";
                    const yellow = isTop ? "#FBBC05" : "#C46800";
                    const green = isTop ? "#34A853" : "#137333";
                    const blue = isTop ? "#4285F4" : "#174EA6";

                    return (
                      <svg
                        key={layer}
                        viewBox="0 0 24 24"
                        className="absolute inset-0 w-full h-full overflow-visible"
                        style={{
                          transform: `translateZ(${z}px)`,
                          filter: isTop
                            ? "drop-shadow(0 2px 5px rgba(0,0,0,0.12))"
                            : undefined,
                        }}
                      >
                        {/* Blue: horizontal crossbar and top-right arm */}
                        <path
                          fill={blue}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        {/* Green: bottom circular arc */}
                        <path
                          fill={green}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        {/* Yellow: left-bottom circular arc */}
                        <path
                          fill={yellow}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        {/* Red: top circular arc */}
                        <path
                          fill={red}
                          stroke="#1E1E1E"
                          strokeWidth={isTop ? "0.45" : "0.3"}
                          strokeLinejoin="round"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    );
                  })}
                </div>
              </motion.div>

              {/* Floating Mini Interactive SEO Metric Pills */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-2 sm:top-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-3 cursor-default z-30"
              >
                <div className="w-8 h-8 rounded-lg bg-[#dd0403]/10 text-[#dd0403] flex items-center justify-center font-bold">
                  <img src={search} alt="Search Engine" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-[#777065] font-medium">
                    Rank #1 Google
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    +320% Traffic
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-[#e8ded0] flex items-center gap-3 cursor-default z-30"
              >
                <div className="w-8 h-8 rounded-lg bg-[#dd0403]/15 text-[#dd0403] flex items-center justify-center font-bold">
                  {/* <Target className="w-4 h-4" /> */}
                  <img src={keyword} alt="Keyword" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-[#777065] font-medium">
                    High Intent Keywords
                  </div>
                  <div className="text-sm font-bold text-[#111111]">
                    98.4% Accuracy
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: STRATEGIC KEYWORD PILLAR ARCHITECTURE & RANKING INSIGHT
        ========================================================================= */}
        <div id="strategy-breakdown" className="mt-20 lg:mt-28 pt-12 ">
          {/* Header Tag & Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-9">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4">
              {/* <Sparkles className="w-4 h-4 text-[#dd0403]" /> */}
              <span className="w-8 h-[2px] bg-[#dd0403] rounded-full inline-block"></span>
              <span className="text-xs font-[500] uppercase tracking-widest text-[#dd0403]">
                Proven Ranking Strategy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[500] text-[#111111] tracking-tight">
              Why Broad <span className="text-[#dd0403]">"SEO Services"</span>{" "}
              Fails & How Cluster Pillars Win
            </h2>

            <p className="mt-4 text-[#555048] text-[13px] leading-relaxed">
              The keyword{" "}
              <strong className="text-[#111111]">“SEO services”</strong> is
              fiercely competitive on a global level. Instead of burning budget
              competing broadly, we construct high-authority dedicated pillar
              clusters targeting immediate, high-intent local and niche
              commercial searches.
            </p>
          </div>

          {/* ── 2-COLUMN STRATEGY COMPARISON & PILLAR ARCHITECTURE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-6 ">
            {/* Left Card: Strategic Insight & Recommended Focus */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white/90 to-[#fbf8f3] rounded-3xl p-6 sm:p-6 border border-[#e8ded0] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#dd0403] text-white flex items-center justify-center shadow-md">
                    {/* <Target className="w-5 h-5" /> */}
                    <img src={seo} alt="Keyword" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[500] text-[#111111] leading-tight">
                      Recommendation for SEO Surgex
                    </h3>
                    <span className="text-xs text-[#dd0403] font-semibold">
                      Achievable & High-ROI Strategy
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#444038] leading-relaxed">
                  <p className="bg-[#f7f3ec] p-4 rounded-2xl border border-[#e8ded0]">
                    <strong>Strategic Realism:</strong> Rather than attempting
                    to rank only for the broad keyword <em>“SEO Services”</em>,
                    SEO Surgex focuses first on{" "}
                    <strong>“SEO Services in Rajkot”</strong> and{" "}
                    <strong>“SEO Company in Rajkot”</strong>.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Topical Relevance:</strong> Real local clients
                        in Rajkot ready to hire an agency immediately.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Fast Organic Traction:</strong> Realistic top 3
                        ranking in 3 to 5 months vs 18+ months for broad terms.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <p className="text-xs text-gray-700">
                        <strong>Authority Stepping Stone:</strong> Dominating
                        local clusters builds internal link equity to rank for
                        broader national terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="mt-6 pt-5 border-t border-[#e8ded0] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block font-semibold">
                    Target Primary Intent
                  </span>
                  <span className="text-sm font-bold text-[#dd0403]">
                    Rajkot & Gujarat Regional Market
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#dd0403] hover:bg-[#dd0403] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Start Plan
                </button>
              </div>
            </div>

            {/* Right Card: Visual Keyword Pillar Architecture Tree */}
            <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-6 border border-[#e8ded0] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-[500] text-[#111111] flex items-center gap-2">
                      <GitBranch className="w-5 h-5 text-[#dd0403]" />
                      <span>SEO Keyword Pillar Hierarchy</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Structured Hub & Spoke Content Model for SEO Surgex
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-1.5 bg-[#f7f5f1] p-1 rounded-xl border border-[#e8ded0]">
                    {[
                      { id: "all", label: "All Hubs" },
                      { id: "local", label: "Rajkot & Local " },
                      { id: "technical", label: "Technical" },
                      { id: "ecommerce", label: "Ecommerce" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedClusterTab(tab.id)}
                        className={`text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                          selectedClusterTab === tab.id
                            ? "bg-[#dd0403] text-white shadow-sm"
                            : "text-gray-600 hover:text-[#dd0403]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Visual Root Pillar Node ── */}
                <div className="relative mb-4">
                  <div className="bg-[#dd0403]/10 text-white p-3 rounded-2xl flex items-center justify-between shadow-md border-l-4 border-[#dd0403]">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#dd0403] flex items-center justify-center text-white font-[500] text-sm">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          Main Core Pillar
                        </div>
                        <div className="text-base sm:text-md font-[500] text-black ">
                          SEO Services (Main Pillar Page)
                        </div>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block bg-[#dd0403] text-xs font-semibold px-3 py-1 rounded-full text-white  ">
                      High Authority Hub
                    </span>
                  </div>
                </div>

                {/* ── Sub-Cluster Branches Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {filteredClusters.map((cluster) => (
                    <motion.div
                      key={cluster.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="p-3.5 rounded-2xl border border-[#e8ded0] bg-[#fbf9f5] hover:bg-white hover:border-[#dd0403]/50 transition-all hover:shadow-sm group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                            cluster.priorityType === "high"
                              ? "bg-[#fdeaea] text-[#dd0403] border border-[#fad5d5]"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {cluster.priority}
                        </span>
                        <span className="text-[10.5px] font-medium text-gray-400">
                          {cluster.intent}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors leading-tight">
                        {cluster.keyword}
                      </h4>

                      <p className="text-[11.5px] text-gray-600 mt-1 leading-snug line-clamp-2">
                        {cluster.description}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-gray-200/60 flex items-center justify-between text-[10.5px] text-gray-500">
                        <span> {cluster.metrics.rankPotential}</span>
                        <span className="font-semibold text-gray-800">
                          Conv: {cluster.metrics.conversionRate}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── TARGET KEYWORDS QUICK LIST (FROM USER'S STRATEGY) ── */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-6 border border-[#e8ded0] mb-5">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
              Priority Target Keywords for Rajkot & Specialized Search Clusters
            </h4>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {[
                { tag: "SEO Services in Rajkot", isTop: true },
                { tag: "SEO Company in Rajkot", isTop: true },
                { tag: "Best SEO Agency in Rajkot", isTop: true },
                { tag: "Local SEO Services in Rajkot", isTop: true },
                { tag: "Technical SEO Services", isTop: false },
                { tag: "Ecommerce SEO Services", isTop: false },
                { tag: "Shopify SEO Services", isTop: false },
                { tag: "SEO Services for Small Businesses", isTop: false },
                { tag: "SEO Audit Services", isTop: false },
                { tag: "International SEO Services", isTop: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    item.isTop
                      ? "bg-[#dd0403] text-white shadow-sm hover:bg-[#dd0403]"
                      : "bg-[#f5eee3] text-[#333] border border-[#e2d5c3] hover:border-[#dd0403] hover:text-[#dd0403]"
                  }`}
                >
                  {item.isTop && <span className="text-[#ffffff]">★</span>}
                  <span>{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: 4 CORE SERVICE FEATURE CARDS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className=" pt-1.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
              Technical SEO Audit
            </h4>
            <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
              In-depth crawling, site architecture fixes, Core Web Vitals
              optimization, and indexing speed improvements.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
              Keyword & Competitor Intel
            </h4>
            <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
              Pinpoint high-intent commercial search queries to capture
              ready-to-buy customers before your competitors do.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
              Local SEO & Google Maps
            </h4>
            <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
              Dominate Google Map Pack (Local 3-Pack) for high-intent searches
              in Rajkot, Gujarat, and across India.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#e8ded0] hover:border-[#dd0403]/40 shadow-sm hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-[#fdeaea] text-[#dd0403] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] group-hover:text-[#dd0403] transition-colors">
              Authority Backlinks & PR
            </h4>
            <p className="text-xs text-[#666055] mt-1.5 leading-relaxed">
              Earn high-authority editorial backlinks and digital PR mentions
              that multiply domain rating and rankings.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL: INSTANT SEO AUDIT / GET STARTED ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#f7f5f1] border border-[#e8ded1] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#e8ded1] flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {auditSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    SEO Audit Request Received!
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Our SEO specialists will analyze your website and email the
                    detailed report within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#dd0403] rounded-full inline-block" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#dd0403]">
                      Free SEO Opportunity Report
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                    Unlock Your Website's Potential
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 mb-6">
                    Enter your website URL to get a comprehensive SEO ranking
                    and keyword breakdown.
                  </p>

                  <form onSubmit={handleAuditSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Website URL
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourbrand.com"
                        value={auditUrl}
                        onChange={(e) => setAuditUrl(e.target.value)}
                        className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address (For Audit Report)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={auditEmail}
                        onChange={(e) => setAuditEmail(e.target.value)}
                        className="w-full bg-white border border-[#e2d7c7] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#dd0403] hover:bg-[#c00302] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#dd0403]/20 transition-all duration-150 cursor-pointer"
                    >
                      Generate Free SEO Audit
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
