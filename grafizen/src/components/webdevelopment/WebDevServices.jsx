import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  ShoppingCart,
  Layers,
  FileCode,
  Cloud,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const servicesData = [
  {
    id: "web-apps",
    name: "Custom Web Apps",
    icon: Code2,
    badge: "Full-Stack Engineering",
    title: "High-Performance Custom Web Applications",
    description:
      "We design and engineer bespoke web applications tailored to your precise workflows. Built with scalable architectures, enterprise-grade security, and zero technical debt.",
    deliverables: [
      "Custom responsive frontend architecture",
      "Robust backend API & microservices",
      "Real-time data synchronization & websockets",
      "Role-based access control & enterprise security",
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    previewType: "dashboard",
    stats: [
      { label: "Uptime SLA", val: "99.9%" },
      { label: "Load Speed", val: "< 1.2s" },
      { label: "Security", val: "SOC2 Ready" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    badge: "Conversion-Focused",
    title: "Scalable E-Commerce Stores & Marketplaces",
    description:
      "Transform browsers into buyers with custom storefronts engineered for maximum conversion, frictionless checkouts, and seamless inventory management.",
    deliverables: [
      "Custom headless storefronts & Shopify integrations",
      "High-speed 1-click checkout flows",
      "ERP, CRM & inventory automation",
      "Multi-currency & localized payment gateways",
    ],
    techStack: [
      "Shopify Plus",
      "WooCommerce",
      "Next.js Commerce",
      "Stripe",
      "GraphQL",
    ],
    previewType: "ecommerce",
    stats: [
      { label: "Conversion Lift", val: "+34%" },
      { label: "Checkout Speed", val: "2x Faster" },
      { label: "Cart Abandonment", val: "-22%" },
    ],
  },
  {
    id: "saas",
    name: "SaaS Platforms",
    icon: Layers,
    badge: "Product Development",
    title: "Multi-Tenant SaaS Products Built to Scale",
    description:
      "From MVP conception to millions of daily active users, we architect resilient cloud-native software products with seamless subscription billing and intuitive UX.",
    deliverables: [
      "Multi-tenant database architectures",
      "Stripe recurring billing & seat tiers",
      "Interactive analytics & custom reporting",
      "Self-service onboarding & user management",
    ],
    techStack: ["Next.js", "PostgreSQL", "Docker", "AWS", "Prisma"],
    previewType: "saas",
    stats: [
      { label: "Deployment Cycle", val: "Continuous" },
      { label: "Architecture", val: "Multi-Tenant" },
      { label: "Scalability", val: "Auto-Scale" },
    ],
  },
  {
    id: "cms",
    name: "CMS & Headless",
    icon: FileCode,
    badge: "Content Operations",
    title: "Decoupled Headless CMS & WordPress",
    description:
      "Empower your marketing and content teams with lightning-fast editorial workflows. We connect modern headless frontends to clean, structured backends.",
    deliverables: [
      "Headless CMS setups (Strapi, Sanity, Contentful)",
      "High-performance custom WordPress builds",
      "Instant page preview & multi-language support",
      "Automated SEO metadata & schema markup",
    ],
    techStack: ["Strapi", "WordPress", "Sanity", "Next.js", "GraphQL"],
    previewType: "cms",
    stats: [
      { label: "Lighthouse Score", val: "98/100" },
      { label: "Publish Speed", val: "Instant" },
      { label: "Content APIs", val: "REST / GraphQL" },
    ],
  },
  {
    id: "api-cloud",
    name: "API & Cloud",
    icon: Cloud,
    badge: "Backend & Infrastructure",
    title: "Resilient APIs & Cloud Infrastructure",
    description:
      "Connect your digital ecosystem with high-throughput REST and GraphQL APIs, event-driven microservices, and automated CI/CD deployment pipelines on AWS.",
    deliverables: [
      "High-concurrency RESTful & GraphQL API design",
      "Third-party integrations (Payment, CRM, ERP)",
      "AWS / GCP serverless & containerized deployments",
      "Automated CI/CD pipelines & zero-downtime releases",
    ],
    techStack: ["Node.js", "Express", "AWS Lambda", "Docker", "Redis"],
    previewType: "api",
    stats: [
      { label: "Throughput", val: "10k+ req/sec" },
      { label: "Latency", val: "< 45ms" },
      { label: "Deployment", val: "Zero-Downtime" },
    ],
  },
];

const WebDevServices = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background subtle grid */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      /> */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" flex  justify-between items-end mb-12 ">
          <div className=" max-w-[700px]  ">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/40 mb-3">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-[30px] font-[600] leading-[1.15] tracking-[-0.02em] sm:text-[36px] md:text-[42px] text-black ">
              Comprehensive Web Development{" "}
              <span className="text-[#dd0403]">Services</span>
            </h2>
          </div>

          <p className="mt-4 text-[15px] font-[300] leading-[1.2] max-w-[500px] text-black/55">
            Engineered for speed, built for conversion, and designed to scale
            seamlessly with your growing business demands.
          </p>
        </div>

        {/* ── PILL TABS BAR ── */}
        <div className="flex items-center justify-center mb-4 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-gray-100/80 border border-gray-200/80 shadow-sm max-w-full">
            {servicesData.map((tab) => {
              const isActive = tab.id === activeTab;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-[500] whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white shadow-md shadow-[#dd0403]/20"
                      : "text-black/60 hover:text-black hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTabPill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-[#dd0403]"
                    />
                  )}
                  <span className="relative z-10">
                    <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                  </span>
                  <span className="relative z-10">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MAIN SHOWCASE CONTAINER ── */}
        <div className="relative rounded-3xl border border-gray-200/90 bg-white shadow-xl shadow-black/[0.03] overflow-hidden p-6 sm:p-10 lg:p-8">
          {/* Subtle decorative glow inside card */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(221,4,3,0.06) 0%, transparent 70%)",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* ── LEFT: Content ── */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Eyebrow badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dd0403]/10 text-[#dd0403] text-[11px] font-[500] uppercase tracking-wider mb-4">
                    <Zap size={13} strokeWidth={2.5} />
                    {activeService.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-[24px] sm:text-[28px] font-[600] text-black leading-[1.25] tracking-tight mb-4">
                    {activeService.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] font-[300] text-black/60 leading-[1.8] mb-6">
                    {activeService.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-3 mb-7">
                    <p className="text-[12px] font-[600] uppercase tracking-[0.16em] text-black/40">
                      Key Deliverables
                    </p>
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-[#dd0403] shrink-0 mt-0.5"
                          strokeWidth={2.2}
                        />
                        <span className="text-[13.5px] font-[400] text-black/75 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="text-[12px] font-[500] text-black/40 mr-1">
                      Stack:
                    </span>
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200/90 text-black/70 text-[11.5px] font-[400]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA & Mini Metrics */}
              </div>

              {/* ── RIGHT: Realistic Interactive Preview UI ── */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="w-full max-w-[560px] rounded-2xl border border-gray-200/90 bg-white shadow-2xl overflow-hidden select-none">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between bg-gray-50/90 px-4 py-3 border-b border-gray-200/80">
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-[#dd0403]" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 max-w-[220px] mx-auto rounded-full bg-white border border-gray-200 px-3 py-1 text-[10.5px] font-[400] text-black/40 text-center truncate">
                      grafizen.com/solutions/{activeService.id}
                    </div>
                    <div className="flex items-center gap-1.5 opacity-40">
                      <div className="h-2 w-2 rounded-full bg-black/40" />
                      <div className="h-2 w-2 rounded-full bg-black/40" />
                    </div>
                  </div>

                  {/* Inner Dynamic Preview Content based on tab */}
                  <div className="p-5 sm:p-6 bg-gradient-to-b from-gray-50/50 to-white min-h-[360px] flex flex-col justify-between">
                    {activeService.previewType === "dashboard" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                              Application Metrics
                            </p>
                            <p className="text-[16px] font-[600] text-black">
                              Live Enterprise Dashboard
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-medium border border-emerald-100">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Sync
                          </span>
                        </div>

                        {/* Top KPI Cards */}
                        <div className="grid grid-cols-3 gap-2.5">
                          <div className="p-3 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                            <p className="text-[10.5px] text-black/45">
                              Total Users
                            </p>
                            <p className="text-[17px] font-[600] text-black mt-0.5">
                              248,920
                            </p>
                            <span className="text-[10px] text-emerald-600 font-medium">
                              +18.4%
                            </span>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                            <p className="text-[10.5px] text-black/45">
                              Avg Response
                            </p>
                            <p className="text-[17px] font-[600] text-black mt-0.5">
                              42ms
                            </p>
                            <span className="text-[10px] text-[#dd0403] font-medium">
                              99.98% SLA
                            </span>
                          </div>
                          <div className="p-3 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                            <p className="text-[10.5px] text-black/45">
                              Active Sprints
                            </p>
                            <p className="text-[17px] font-[600] text-black mt-0.5">
                              14
                            </p>
                            <span className="text-[10px] text-black/40">
                              In Production
                            </span>
                          </div>
                        </div>

                        {/* Visual Graph Representation */}
                        <div className="p-4 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-[12px] font-[500] text-black/70">
                              System Throughput (Requests/sec)
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
                              <span className="text-[10.5px] text-black/40">
                                Realtime
                              </span>
                            </div>
                          </div>
                          {/* Simulated SVG Graph */}
                          <div className="h-28 w-full flex items-end gap-1.5 pt-3">
                            {[
                              35, 52, 45, 68, 85, 72, 90, 82, 94, 78, 88, 96,
                            ].map((h, idx) => (
                              <div
                                key={idx}
                                className="flex-1 rounded-t flex flex-col justify-end bg-gray-100 h-full overflow-hidden"
                              >
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{
                                    duration: 0.5,
                                    delay: idx * 0.03,
                                  }}
                                  className={`w-full rounded-t ${
                                    idx === 11
                                      ? "bg-[#dd0403]"
                                      : idx > 8
                                        ? "bg-[#dd0403]/70"
                                        : "bg-gray-300"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeService.previewType === "ecommerce" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                              Storefront Performance
                            </p>
                            <p className="text-[16px] font-[600] text-black">
                              E-Commerce Conversion Suite
                            </p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#dd0403]/10 text-[#dd0403] text-[11px] font-medium">
                            Shopify Plus / Headless
                          </span>
                        </div>

                        {/* Cart & Checkout Preview */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm flex flex-col justify-between">
                            <div>
                              <p className="text-[11px] text-black/40 uppercase">
                                Gross Merchandise
                              </p>
                              <p className="text-[20px] font-[700] text-black mt-1">
                                $482,900
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium mt-3">
                              <TrendingUp size={14} />
                              <span>+42% MoM growth</span>
                            </div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm flex flex-col justify-between">
                            <div>
                              <p className="text-[11px] text-black/40 uppercase">
                                Checkout Speed
                              </p>
                              <p className="text-[20px] font-[700] text-black mt-1">
                                1.1 sec
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#dd0403] text-[11px] font-medium mt-3">
                              <Zap size={14} />
                              <span>Instant Payment API</span>
                            </div>
                          </div>
                        </div>

                        {/* Product Row */}
                        <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm space-y-2">
                          <p className="text-[11px] font-[600] uppercase tracking-wider text-black/40">
                            Frictionless Product Flow
                          </p>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100">
                            <div className="flex items-center gap-2.5">
                              <div className="h-8 w-8 rounded-lg bg-[#dd0403]/15 flex items-center justify-center text-[#dd0403] font-bold text-[11px]">
                                PRO
                              </div>
                              <div>
                                <p className="text-[12px] font-medium text-black">
                                  Flagship Store Item
                                </p>
                                <p className="text-[10px] text-black/40">
                                  Instant Add-to-Cart
                                </p>
                              </div>
                            </div>
                            <span className="text-[12px] font-[600] text-black">
                              $249.00
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeService.previewType === "saas" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                              SaaS Multi-Tenancy
                            </p>
                            <p className="text-[16px] font-[600] text-black">
                              Subscription & Tier Management
                            </p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[11px] font-medium">
                            B2B Architecture
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                            <p className="text-[11px] text-black/40 uppercase">
                              Annual Run Rate
                            </p>
                            <p className="text-[20px] font-[700] text-black mt-1">
                              $1.4M ARR
                            </p>
                            <p className="text-[10px] text-emerald-600 mt-1">
                              Stripe Billing Sync
                            </p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                            <p className="text-[11px] text-black/40 uppercase">
                              Tenants Active
                            </p>
                            <p className="text-[20px] font-[700] text-black mt-1">
                              1,840
                            </p>
                            <p className="text-[10px] text-[#dd0403] mt-1">
                              Isolated Data Pools
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm">
                          <div className="flex items-center justify-between text-[11.5px] font-medium text-black mb-2">
                            <span>Cloud Resource Allocation</span>
                            <span className="text-emerald-600">
                              Auto-Scaling OK
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-full w-3/4 rounded-full bg-[#dd0403]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeService.previewType === "cms" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                              Editorial Flow
                            </p>
                            <p className="text-[16px] font-[600] text-black">
                              Decoupled Headless CMS Studio
                            </p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px] font-medium border border-purple-200">
                            Strapi / Sanity / Next.js
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-gray-200/70 shadow-sm space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11.5px] font-semibold text-black">
                              Content Publishing Status
                            </span>
                            <span className="text-[10.5px] text-emerald-600 font-medium">
                              ✓ Auto-Deployed (Vercel)
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-[11px]">
                            <span className="text-black/70">
                              /blog/modern-web-architecture
                            </span>
                            <span className="text-[#dd0403] font-medium">
                              Published
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-[11px]">
                            <span className="text-black/70">
                              /case-studies/enterprise-portal
                            </span>
                            <span className="text-black/40 font-medium">
                              Draft
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeService.previewType === "api" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-black/40 font-medium">
                              API Gateway
                            </p>
                            <p className="text-[16px] font-[600] text-black">
                              Cloud Endpoint Monitoring
                            </p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                            REST / GraphQL / gRPC
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-gray-900 text-gray-200 font-mono text-[11px] leading-relaxed shadow-inner">
                          <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-gray-800 text-[10px]">
                            <span>POST /v2/api/checkout/session</span>
                            <span className="text-emerald-400">
                              200 OK (38ms)
                            </span>
                          </div>
                          <div className="pt-2 text-gray-300">
                            <span className="text-purple-400">{"{"}</span>
                            <br />
                            &nbsp;&nbsp;
                            <span className="text-sky-300">"status"</span>:{" "}
                            <span className="text-emerald-300">
                              "authorized"
                            </span>
                            ,
                            <br />
                            &nbsp;&nbsp;
                            <span className="text-sky-300">
                              "cluster"
                            </span>:{" "}
                            <span className="text-yellow-300">
                              "aws-us-east-1"
                            </span>
                            ,
                            <br />
                            &nbsp;&nbsp;
                            <span className="text-sky-300">
                              "encrypted"
                            </span>: <span className="text-red-400">true</span>
                            <br />
                            <span className="text-purple-400">{"}"}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div className="p-2.5 rounded-xl bg-white border border-gray-200/70">
                            <p className="text-[10px] text-black/40">Latency</p>
                            <p className="text-[15px] font-[600] text-black">
                              38ms
                            </p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-gray-200/70">
                            <p className="text-[10px] text-black/40">
                              Availability
                            </p>
                            <p className="text-[15px] font-[600] text-black">
                              99.99%
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Trust Tag */}
                    {/* <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-black/50">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-[#dd0403]" />
                        Enterprise SLA & Dedicated DevOps Support
                      </span>
                      <span className="text-[#dd0403] font-medium cursor-pointer hover:underline">
                        View Docs →
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
