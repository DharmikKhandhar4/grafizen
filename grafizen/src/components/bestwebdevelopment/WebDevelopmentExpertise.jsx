import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  ShoppingCart,
  Zap,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Plus,
  Sparkles,
} from "lucide-react";

/**
 * WebDevelopmentExpertise Component
 * Interactive Horizontal Expanding Pillars (Pill Cards):
 * - 6 Pillars: 01, 02, 03, 04, 05, 06
 * - Clicking any card expands its WIDTH (e.g. click 2 -> card 2 width increases and details show)
 * - Clicking another card (e.g. 3) closes card 2 and opens card 3!
 * - Inside the open card, title is horizontal on the right with complete details, deliverables,
 *   tech stack pills, metrics, and CTA.
 * - 100% smooth 60fps Framer Motion spring physics.
 */

const expertiseData = [
  {
    id: "custom-web",
    levelName: "CORE ARCHITECTURE",
    title: "Custom Web Development",
    shortTag: "Bespoke Architecture",
    icon: Code2,
    tagline: "Tailor-made websites built around your unique business requirements.",
    description:
      "Tailor-made websites built around your business requirements, with scalable architecture and seamless functionality. We eliminate cookie-cutter limitations by engineering bespoke digital solutions designed specifically for your operational workflows.",
    points: [
      "Bespoke Component Architecture",
      "Scalable & Maintainable Codebase",
      "Custom Workflow & CRM Integrations",
      "Full IP & Code Ownership",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL"],
    metric: { value: "100%", label: "Custom Architecture" },
  },
  {
    id: "frontend",
    levelName: "PRESENTATION & UI",
    title: "Frontend Development",
    shortTag: "Fluid User Interfaces",
    icon: Layout,
    tagline: "Interactive, responsive interfaces crafted with modern frameworks.",
    description:
      "Interactive, responsive interfaces crafted with modern frameworks to deliver smooth and engaging user experiences. We balance pixel-perfect aesthetics with 60fps micro-interactions to keep visitors engaged on every device.",
    points: [
      "Mobile-First Responsive Systems",
      "60fps Framer Motion Animations",
      "Design System & UI Component Libraries",
      "WCAG 2.1 AA Accessibility Standards",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vue.js"],
    metric: { value: "60 FPS", label: "Fluid Rendering" },
  },
  {
    id: "backend",
    levelName: "SECURE API MESH",
    title: "Backend Development",
    shortTag: "High-Throughput APIs",
    icon: Server,
    tagline: "Secure, reliable server-side solutions, APIs, and databases.",
    description:
      "Secure, reliable server-side solutions, APIs, and database integrations that power complex web applications. Engineered for bank-grade data security, sub-50ms query speeds, and zero-loss transactional integrity.",
    points: [
      "RESTful & GraphQL API Design",
      "Optimized Relational & NoSQL Databases",
      "Role-Based Access & OAuth2 / JWT",
      "Automated CI/CD DevOps Pipelines",
    ],
    techStack: ["Node.js", "Python / Django", "PostgreSQL", "Redis", "Docker"],
    metric: { value: "< 25ms", label: "Average API Latency" },
  },
  {
    id: "ecommerce",
    levelName: "COMMERCE ENGINE",
    title: "E-commerce Development",
    shortTag: "Conversion Commerce",
    icon: ShoppingCart,
    tagline: "Feature-rich online stores with seamless shopping and secure checkout.",
    description:
      "Feature-rich online stores with seamless shopping experiences, secure payments, and efficient product management. Built to handle traffic spikes, maximize average order value (AOV), and convert visitors into loyal repeat buyers.",
    points: [
      "1-Click Frictionless Checkout",
      "Multi-Currency & Global Gateways (Stripe)",
      "Automated Inventory & ERP Synchronization",
      "Headless E-commerce Capabilities",
    ],
    techStack: ["Shopify Plus", "WooCommerce", "Stripe API", "Headless CMS", "Algolia"],
    metric: { value: "+42%", label: "Conversion Lift" },
  },
  {
    id: "performance",
    levelName: "EDGE ACCELERATION",
    title: "Performance & Optimization",
    shortTag: "Core Web Vitals Engine",
    icon: Zap,
    tagline: "Optimized websites focused on faster loading and search engine readiness.",
    description:
      "Optimized websites focused on faster loading, responsive performance, accessibility, and search engine readiness. We optimize every asset, query, and network payload to guarantee top-tier Core Web Vitals and higher Google rankings.",
    points: [
      "100/100 Core Web Vitals Benchmark",
      "Sub-second Largest Contentful Paint (LCP)",
      "Edge CDN Caching & Brotli Compression",
      "SEO Structural Schema & Metadata",
    ],
    techStack: ["Google Lighthouse", "Web Vitals", "Edge CDN", "Next.js Image", "Workbox"],
    metric: { value: "99+", label: "Lighthouse Score" },
  },
  {
    id: "scalable-apps",
    levelName: "CLOUD & SCALING",
    title: "Scalable Web Applications",
    shortTag: "Cloud-Native Power",
    icon: Cloud,
    tagline: "Flexible, cloud-ready web applications built to scale with growth.",
    description:
      "Flexible, cloud-ready web applications designed to support evolving business needs and growing user demands. Architected with containerized microservices and autoscaling cloud infrastructure that effortlessly handles 10x traffic surges.",
    points: [
      "Cloud-Native Serverless & Kubernetes",
      "Horizontal Auto-scaling Clusters",
      "Real-Time WebSocket & Push Protocols",
      "99.99% High-Availability SLA",
    ],
    techStack: ["AWS / GCP", "Docker", "Kubernetes", "Kafka", "Terraform"],
    metric: { value: "99.99%", label: "Availability SLA" },
  },
];

const WebDevelopmentExpertise = () => {
  // Card 02 (Frontend Development) open by default as in user example, or 01
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-28 selection:bg-[#dd0403]/15 selection:text-[#dd0403]">
      {/* Background Soft Tech Grid & Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(#00000008_1px,transparent_1px),linear-gradient(90deg,#00000008_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#dd0403]/6 blur-[150px]" />
        <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#dd0403]/4 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-100">
          <div className="">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-500 mb-3">
              <span className="h-px w-8 bg-[#dd0403]"></span>
              <span>Our Web Development Expertise</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-black leading-[1.12]">
                   Powerful  {" "}
              <span className="text-[#dd0403]">  Web Solutions</span>{" "} <br />
              That Scale
            </h2>
 

            {/* Subtitle */}
     
          </div>

          {/* Top Quick Pill Tabs: 1 2 3 4 5 6 */}
               <p className="mt-4 text-base sm:text-[14px] font-light leading-5 text-black/55 max-w-2xl">
              From modern web applications to powerful eCommerce platforms, our expertise combines
              innovative technologies, seamless functionality, and intuitive design to deliver
              exceptional digital experiences.
            </p>
        </div>

        {/* ─── HORIZONTAL EXPANDING ACCORDION (WIDTH INCREASES ON CLICK) ─── */}
        <div className="mt-10 flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[400px] w-full items-stretch">
          
          {expertiseData.map((item, idx) => {
            const isOpen = activeCardIndex === idx;
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveCardIndex(idx)}
                transition={{
                  layout: { type: "spring", stiffness: 280, damping: 28 },
                }}
                className={`group relative rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "flex-[4.5] lg:min-w-[580px] xl:min-w-[660px] bg-white border-2 border-[#dd0403] shadow-[0_20px_50px_rgba(221,4,3,0.12)] p-5 sm:p-6 flex flex-col justify-between"
                    : "flex-1 lg:max-w-[85px] xl:max-w-[92px] min-h-[90px] lg:min-h-full bg-white hover:bg-neutral-50/80 border border-neutral-200/90 p-4 sm:p-5 flex flex-row lg:flex-col items-center justify-between hover:border-[#dd0403]/40 shadow-xs"
                }`}
              >
                {/* ─── STATE 1: OPEN CARD (UNIQUE DUAL-POD COCKPIT LAYOUT) ─── */}
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col justify-between h-full w-full relative z-10"
                  >
                    {/* 1. TOP HEADER BAR: Capability Icon + Level Name + Live Ping + Short Tag */}
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <div className="flex items-center gap-2.5">
                     
                        <div className="flex items-center gap-2">
                          <span className="text-[11px]  font-extrabold uppercase tracking-widest text-[#dd0403]">
                            {item.levelName}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403] animate-ping" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-neutral-100/90 border border-neutral-200/60 px-3 py-0.5 text-[11px] font-medium text-neutral-600">
                          {item.shortTag}
                        </span>
                      </div>
                    </div>

                    {/* 2. MAIN COCKPIT BODY: 2-COLUMN SPLIT (Narrative Left | Metric & Deliverables Right) */}
                    <div className=" py-3 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                      
                      {/* ── LEFT POD (7 cols): Title, Tagline, Description, Tech Stack ── */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                        <div>
                          <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-neutral-900 leading-tight">
                            {item.title}
                          </h3>
                          
                          {/* Tagline Pill */}
                          <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg bg-[#dd0403]/5 border border-[#dd0403]/15 px-3 py-1.5 text-xs text-black/55 font-[300] tracking-wide">
                            <Sparkles className="h-3.5 w-3.5 text-[#dd0403] shrink-0" />
                            <span className="font-[300] italic ">"{item.tagline}"</span>
                          </div>

                          {/* Description */}
                          <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-black/55 font-light line-clamp-3 lg:line-clamp-4">
                            {item.description}
                          </p>
                        </div>

                        {/* Tech Stack Pills Bar */}
                        <div className="pt-2 border-t border-neutral-100/80">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px]  uppercase tracking-wider text-neutral-400">
                              Technology Stack
                            </span>
                            <span className="text-[10px]  text-emerald-600 font-semibold">
                              ● Production Verified
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {item.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-neutral-50 border border-neutral-200/80 px-2 py-0.5 text-[11px] font-medium text-black/55 shadow-2xs hover:border-[#dd0403]/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* ── RIGHT POD (5 cols): Metric Card + Deliverable Micro-Cards ── */}
                      <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-neutral-50/80 border border-neutral-200/80 p-3.5 relative overflow-hidden shadow-xs">
                        
                        {/* Metric Accent Card */}
                        <div className="flex items-center justify-between rounded-xl bg-white p-3 border border-neutral-200/70 shadow-2xs">
                          <div>
                            <div className="font-mono text-2xl sm:text-3xl font-black text-neutral-900 leading-none">
                              {item.metric.value}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#dd0403] mt-1">
                              {item.metric.label}
                            </div>
                          </div>
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dd0403]/10 text-[#dd0403]">
                            <IconComp className="h-5 w-5" />
                          </div>
                        </div>

                        {/* 4 Deliverables as Sleek Interactive Tiles */}
                        <div className="space-y-1.5 pt-2.5">
                          <span className="text-[10px] uppercase tracking-wider text-neutral-400 block px-0.5">
                            CORE DELIVERABLES
                          </span>
                          {item.points.map((pt, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 border border-neutral-200/60 shadow-2xs transition-all hover:border-[#dd0403]/40 hover:translate-x-1"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#dd0403] shrink-0" />
                              <span className="text-[11px] font-medium text-neutral-700 line-clamp-1">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Background capability watermark icon */}
                        <IconComp className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 text-neutral-200/25 -rotate-12" />
                      </div>

                    </div>

                    {/* 3. BOTTOM STATUS BAR: Quality & Navigation Indicator */}
                    {/* <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>Enterprise Quality Standard</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                        <span>Click tabs to explore other capabilities</span>
                        <ArrowRight className="h-3 w-3 text-[#dd0403]" />
                      </div>
                    </div> */}
                  </motion.div>
                ) : (
                  /* ─── STATE 2: CLOSED CARD (SLIM PILL COLUMN) ─── */
                  <>
                    {/* Top: Capability Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 group-hover:bg-[#dd0403] group-hover:text-white transition-all shadow-2xs">
                      <IconComp className="h-4 w-4" />
                    </div>

                    {/* Desktop: Vertical Title */}
                    <div className="hidden lg:flex flex-1 items-center justify-center py-6">
                      <span
                        className="text-sm font-bold text-neutral-600 group-hover:text-neutral-900 tracking-wide whitespace-nowrap transition-colors"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Mobile: Horizontal Title */}
                    <div className="lg:hidden flex-1 ml-3.5">
                      <h4 className="font-bold text-sm text-neutral-800 group-hover:text-[#dd0403] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-medium">
                        {item.shortTag}
                      </p>
                    </div>

                    {/* Bottom Expansion Indicator */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 group-hover:bg-[#dd0403] group-hover:text-white transition-all">
                      <Plus className="h-4 w-4" />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}

        </div>


      </div>
    </section>
  );
};

export default WebDevelopmentExpertise;
