import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cloud,
  Cpu,
  RefreshCw,
  Palette,
  ArrowUpRight,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "custom-software",
    index: "01",
    tag: "Core Engineering",
    title: "Custom Software Development",
    shortDesc: "End-to-end web, mobile, and desktop applications tailored to streamline workflows.",
    fullDesc:
      "End-to-end web, mobile, and desktop application development tailored to streamline your business workflows. We engineer robust, enterprise-grade architectures that scale seamlessly with your growing demands.",
    icon: Code2,
    accent: "from-[#dd0403]/20 via-[#dd0403]/5 to-transparent",
    techStack: ["React / Next.js", "Node.js", "TypeScript", "Python", "GraphQL", "PostgreSQL"],
    metrics: { stat: "99.98%", label: "Deployment Reliability" },
    features: [
      "Cross-Platform Native & Web Apps",
      "API-First Microservice Architecture",
      "High-Throughput Data Pipelines",
      "Enterprise Grade Code Security",
    ],
  },
  {
    id: "cloud-devops",
    index: "02",
    tag: "Cloud Infrastructure",
    title: "Cloud & DevOps Solutions",
    shortDesc: "Seamless cloud migration, serverless infra, and automated CI/CD pipelines.",
    fullDesc:
      "Seamless cloud migration, serverless infrastructure, and automated CI/CD pipelines on AWS, Azure, and Google Cloud. Eliminating downtime and drastically cutting deployment lifecycles.",
    icon: Cloud,
    accent: "from-[#dd0403]/20 via-[#dd0403]/5 to-transparent",
    techStack: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform"],
    metrics: { stat: "3.5x", label: "Faster Deployment Cycles" },
    features: [
      "Zero-Downtime Multi-Region Deployments",
      "Automated GitOps CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Cost & Resource Optimization",
    ],
  },
  {
    id: "ai-automation",
    index: "03",
    tag: "Next-Gen Intelligence",
    title: "Enterprise AI & Automation",
    shortDesc: "Smart workflows, analytics, and machine learning models reducing friction.",
    fullDesc:
      "Integrating smart workflows, data analytics, and machine learning models to reduce operational friction. Unleash actionable predictive insights and hyper-automated business logic.",
    icon: Cpu,
    accent: "from-[#dd0403]/20 via-[#dd0403]/5 to-transparent",
    techStack: ["PyTorch", "TensorFlow", "OpenAI / LLMs", "LangChain", "Vector DBs", "Python"],
    metrics: { stat: "60%", label: "Manual Workflow Reduction" },
    features: [
      "Custom Fine-Tuned AI & LLM Copilots",
      "Autonomous RPA & Process Automation",
      "Predictive Analytics & Data Intelligence",
      "Enterprise Knowledge Embeddings",
    ],
  },
  {
    id: "legacy-modernization",
    index: "04",
    tag: "System Evolution",
    title: "Legacy Modernization",
    shortDesc: "Refactoring outdated monolithic codebases into scalable microservices.",
    fullDesc:
      "Refactoring outdated monolithic codebases into secure, scalable microservices architectures. We protect your critical core data while modernizing obsolete tech stacks.",
    icon: RefreshCw,
    accent: "from-[#dd0403]/20 via-[#dd0403]/5 to-transparent",
    techStack: ["Microservices", "Docker", "Kafka", "REST / gRPC", "Golang", "Cloud Native"],
    metrics: { stat: "0 hrs", label: "Business Interruption" },
    features: [
      "Monolith to Microservices Transformation",
      "Legacy Code Audit & Performance Re-engineering",
      "Live Database Migration with Zero Loss",
      "Modern Compliant Cloud-Native Stacks",
    ],
  },
  {
    id: "uiux-design",
    index: "05",
    tag: "Experience & Interface",
    title: "UI/UX & Product Design",
    shortDesc: "User-first wireframing, prototyping, and visual design crafted for conversion.",
    fullDesc:
      "User-first wireframing, prototyping, and visual design crafted for maximum conversion and usability. Designing intuitive design systems that captivate users and elevate brand equity.",
    icon: Palette,
    accent: "from-[#dd0403]/20 via-[#dd0403]/5 to-transparent",
    techStack: ["Figma", "Design Systems", "Prototyping", "User Research", "Micro-Interactions"],
    metrics: { stat: "+85%", label: "User Engagement Boost" },
    features: [
      "Human-Centered Wireframing & Prototyping",
      "Scalable Cross-Platform Design Systems",
      "User Journey & Conversion Rate Optimization",
      "Design-to-Code Seamless Handoff",
    ],
  },
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = services[activeTab];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative w-full bg-white md:py-20  px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:64px_64px]
      hidden md:block" />

      {/* Decorative Red Laser Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#dd0403]/5 blur-[120px] hidden md:block" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-[#dd0403]/5 blur-[120px] hidden md:block" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:pb-12 md:border-b border-black/10">
          <div>
            {/* <div className="mb-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#dd0403]">
              <span className="h-px w-6 bg-[#dd0403]" />
              <span>CAPABILITIES & ARCHITECTURE</span>
            </div> */}
            <div class="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>CAPABILITIES & ARCHITECTURE</span></div>
            
     <h2 className="text-[25px] sm:text-4xl md:text-5xl font-[500] md:font-bold tracking-tight text-black leading-[1.08]">
  Next-Gen{" "}
  <span className="text-[#dd0403]">Core Services</span>
  <br />
  <span className="md:font-[600] font-[500] text-black/90">
    Built For High-Velocity Scale
  </span>
</h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-black/60 font-[300] leading-relaxed">
            Engineered with extreme precision. We deliver battle-tested software,
            cloud native infrastructure, and AI systems tailored to dominate today's digital landscape.
          </p>
        </div>

        {/* Master Futuristic Showcase Layout */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Mobile & Tablet Pill Tabs (< lg) */}
          <div className="flex lg:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden pb-2 gap-2 no-scrollbar  -mx-1 px-1">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#dd0403] text-white shadow-sm shadow-[#dd0403]/30"
                      : "border border-black/10 bg-white text-black/70 hover:bg-neutral-50"
                  }`}
                >
                  <Icon size={14} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* LEFT: Futuristic Service Accordion Selector (5 Columns) - Desktop / Laptop */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeTab === idx;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 p-3 ${
                    isActive
                      ? "border-[#dd0403] bg-gradient-to-r from-neutral-50 via-white to-white shadow-[0_12px_30px_rgba(221,4,3,0.08)]"
                      : "border-black/10 bg-white hover:border-black/30 hover:bg-neutral-50/50"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#dd0403]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Service Index & Icon */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                          isActive
                            ? "border-[#dd0403]/30 bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/25"
                            : "border-black/10 bg-neutral-100 text-black group-hover:border-black/20 group-hover:bg-white"
                        }`}
                      >
                        <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          {/* <span className="text-[10px]  font-bold text-[#dd0403] tracking-wider">
                             {service.index}
                          </span> */}
                          <span className="text-[10px] uppercase tracking-wider  text-black/40 font-[300]">
                            {service.tag}
                          </span>
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-[300] transition-colors ${
                            isActive ? "text-[#dd0403]" : "text-black group-hover:text-black"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className={`shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "rotate-45 text-[#dd0403]"
                          : "text-black/30 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </div>

                  {/* Compact Preview on Inactive, hidden on active */}
                  {!isActive && (
                    <p className="mt-2 text-xs text-black/60 pl-16 line-clamp-1">
                      {service.shortDesc}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: High-Tech Interactive Cockpit / Stage (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden md:rounded-3xl rounded-2xl border border-black/15 bg-white p-3 sm:p-6 lg:p-7 flex flex-col justify-between">
              
              {/* HUD Background Tech Grid Lines */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#dd0403_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

              {/* Glowing Corner Accent */}
              {/* <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#dd0403]/10 blur-3xl" /> */}
              {/* <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" /> */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10 flex flex-col h-full justify-between gap-4"
                >
                  {/* Terminal Header Strip */}
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-3 w-3 rounded-full bg-[#dd0403] animate-pulse" />
                        <span className="h-3 w-3 rounded-full bg-black/20" />
                        <span className="h-3 w-3 rounded-full bg-black/20" />
                        {/* <span className="ml-2  text-[11px] font-[400] text-black/50">
                          GRAFIZEN_OS  MODULE_{activeService.index}
                        </span> */}
                      </div>

                      <div className=" hidden  md:flex items-center gap-2 rounded-full border border-[#dd0403]/20 bg-[#dd0403]/5 px-3 py-1 text-[11px]  font-[400] text-[#dd0403]">
                        <Activity size={12} />
                        <span>ACTIVE_NODE</span>
                      </div>
                    </div>

                    {/* Active Service Title & Category */}
                    <div className="md:mt-3 mt-2 flex md:flex-wrap md:items-center justify-between md:gap-4 gap-2">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dd0403]/10 border border-[#dd0403]/20
                         px-2.5 py-1 md:text-[11px] text-[9px]  font-[400] text-[#dd0403] uppercase">
                          <Zap size={12} />
                          {activeService.tag}
                        </span>
                        <h3 className="mt-2 text-[18px] sm:text-3xl font-[400] text-black tracking-tight">
                          {activeService.title}
                        </h3>
                      </div>

                      {/* Icon Container */}
                      <div className="flex md:h-13 md:w-13 h-6 w-6 items-center justify-center md:rounded-2xl 
                      rounded-md border border-[#dd0403]/20 bg-white text-[#dd0403] shadow-[0_4px_20px_rgba(221,4,3,0.12)]">
                        <ActiveIcon  strokeWidth={1.8} className="md:size-7 size-4" />
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="md:mt-3 mt-1 text-[13px] sm:text-[14px] leading-tight text-black/55 font-[300]">
                      {activeService.fullDesc}
                    </p>
                  </div>

                  {/* Center Content: Architecture Capabilities & Features */}
                  <div className="md:space-y-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-[14px]  uppercase md:tracking-wider text-black font-[400] mb-3">
                        <Terminal size={12} className="text-[#dd0403]" />
                        <span>SYSTEM DELIVERABLES & FEATURES</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-2.5 gap-1">
                        {activeService.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2.5 rounded-xl md:border border-black/10 md:bg-white md:px-3.5 md:py-2.5 text-[13px] font-[300] text-black/55 md:shadow-xs transition-colors hover:border-[#dd0403]/40 hover:bg-[#dd0403]/5"
                          >
                            <CheckCircle2 size={14} className="text-[#dd0403] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <div className="flex items-center gap-2 text-[13px]  uppercase md:tracking-wider text-black font-[400] mb-3">
                        <Layers size={14} className="text-[#dd0403]" />
                        <span>DEPLOYMENT STACK & TOOLS</span>
                      </div>
                      <div className="flex flex-wrap md:gap-2 gap-1">
                        {activeService.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-lg border border-black/15 bg-white px-3 py-1  text-xs font-[300] text-black/55 shadow-2xs transition-all hover:border-[#dd0403] hover:text-[#dd0403]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip: Live Metric & CTA */}
                  <div className="md:pt-3 pt-1 border-t border-black/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between md:gap-4 gap-2 ">
                    <div className="flex items-center gap-3">
                      <div className="text-[18px] sm:text-xl font-[400] text-[#dd0403] ">
                        {activeService.metrics.stat}
                      </div>
                      <div className="text-xs text-black/60 font-[300] leading-tight">
                        {activeService.metrics.label}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="group/cta inline-flex items-center justify-center gap-2.5 rounded-xl md:rounded-full bg-[#dd0403] px-6 py-3 text-xs font-[500] uppercase tracking-wider text-white shadow-xs md:shadow-md shadow-[#dd0403]/25 transition-all duration-300 hover:bg-black hover:text-white w-full sm:w-auto"
                    >
                      <span>Deploy This Service</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Tech Feature Strip */}
        {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-black/10">
          {[
            { label: "Architecture", val: "Microservices & Cloud-Native" },
            { label: "Security Protocol", val: "SOC 2 & ISO 27001 Compliant" },
            { label: "Agile Sprints", val: "2-Week Continuous Cycles" },
            { label: "Uptime SLA", val: "99.99% Enterprise Guarantee" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border border-black/10 bg-neutral-50/70 p-4">
              <span className="text-[10px]  uppercase tracking-wider text-[#dd0403]">
                {item.label}
              </span>
              <p className="mt-1 text-xs sm:text-sm font-bold text-black">{item.val}</p>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}