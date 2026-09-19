import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileCode2,
  Sparkles,
  Cpu,
  GitMerge,
  ShieldCheck,
  RefreshCw,
  MessageSquareQuote,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Activity,
  Workflow,
  SlidersHorizontal,
  Layers,
  Sparkle,
  Zap,
} from "lucide-react";

// The 9 Best Practices Followed by Grafizen
const bestPracticesData = [
  {
    id: 1,
    number: "01",
    phase: "Phase 1: Foundation & Discovery",
    phaseShort: "Phase 1",
    phaseColor: "#dd0403",
    title: "Discovery & Requirement Analysis",
    subtitle: "Aligning Business Goals with Technical Feasibility",
    description:
      "Every successful project starts with a clear understanding of business goals. Our team at Grafizen works closely with stakeholders to gather requirements, identify challenges, define objectives, and establish a roadmap for development.",
    icon: Compass,
    impactMetric: "100% Scope Clarity",
    impactSub: "Zero Ambiguous Requirements",
    deliverables: [
      "Stakeholder Goal Mapping",
      "Technical Feasibility Audit",
      "System Architecture Roadmap",
      "Detailed Scope of Work (SOW)",
    ],
    telemetry: {
      status: "ANALYSIS_LOCKED",
      spec: "PRD_v2.4_VERIFIED",
      signal: "Optimal",
    },
    codeSnippet: `// Discovery & Scope Validation
const projectScope = await grafizen.discovery.audit({
  stakeholders: ["Product", "Tech", "Executive"],
  feasibilityCheck: true,
  riskMitigation: "Strict"
});`,
  },
  {
    id: 2,
    number: "02",
    phase: "Phase 1: Foundation & Discovery",
    phaseShort: "Phase 1",
    phaseColor: "#dd0403",
    title: "Clear Project Documentation",
    subtitle: "Single Source of Truth Across All Teams",
    description:
      "Well-organized documentation keeps everyone aligned throughout the project lifecycle. It supports communication, collaboration, decision-making, and knowledge sharing across teams and stakeholders.",
    icon: FileCode2,
    impactMetric: "Zero Knowledge Silos",
    impactSub: "Frictionless Developer Onboarding",
    deliverables: [
      "OpenAPI 3.0 & Swagger Specs",
      "Architecture Decision Records (ADRs)",
      "Database Schema Diagrams",
      "Interactive Developer Docs",
    ],
    telemetry: {
      status: "DOCS_SYNCHRONIZED",
      spec: "LIVING_SPEC_ENGINE",
      signal: "Healthy",
    },
    codeSnippet: `// Living Architecture Documentation
openapi: "3.0.3"
info:
  title: Grafizen Enterprise Architecture
  version: "1.0.0"
paths:
  /api/v1/system/health:
    get:
      summary: Verified System Telemetry`,
  },
  {
    id: 3,
    number: "03",
    phase: "Phase 1: Foundation & Discovery",
    phaseShort: "Phase 1",
    phaseColor: "#dd0403",
    title: "User-Centric UX/UI Design",
    subtitle: "Intuitive Interfaces Engineered for Engagement",
    description:
      "Creating a positive user experience is a key part of our process. Our UX/UI specialists design intuitive, visually appealing, and accessible interfaces that help users interact with applications effortlessly.",
    icon: Sparkles,
    impactMetric: "98.4% Usability Score",
    impactSub: "WCAG 2.1 AA Compliance",
    deliverables: [
      "Interactive Figma Prototypes",
      "Modular Atomic Design System",
      "Usability & Heuristic Testing",
      "Responsive Micro-interactions",
    ],
    telemetry: {
      status: "DESIGN_TOKEN_READY",
      spec: "FIGMA_DS_SYNCED",
      signal: "100% Contrast",
    },
    codeSnippet: `// Design Tokens & Accessibility
export const theme = {
  colors: { primary: "#dd0403", dark: "#0f172a" },
  accessibility: { contrastRatio: "7:1", a11y: "WCAG_AA" },
  animations: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
};`,
  },
  {
    id: 4,
    number: "04",
    phase: "Phase 2: Agile Engineering",
    phaseShort: "Phase 2",
    phaseColor: "#2563eb",
    title: "Development Best Practices",
    subtitle: "Enterprise-Grade Standards & Clean Architecture",
    description:
      "Grafizen follows industry-recognized coding standards and development methodologies to create secure, scalable, maintainable, and high-performing software solutions.",
    icon: Cpu,
    impactMetric: "99.99% Reliability",
    impactSub: "SOLID Principles & Static Typing",
    deliverables: [
      "Modular Microservices / Monolith",
      "Strict ESLint & TypeScript Checks",
      "Automated Security Scanning",
      "Zero-Downtime Deployment",
    ],
    telemetry: {
      status: "CI_CD_ACTIVE",
      spec: "CODE_CLIMATE_GRADE_A",
      signal: "Optimized",
    },
    codeSnippet: `// Clean Modular Engineering
interface EnterpriseService<T> {
  execute(params: T): Promise<ServiceResult>;
  validateSecurity(token: AuthToken): boolean;
  logAuditTrail(event: AuditEvent): void;
}`,
  },
  {
    id: 5,
    number: "05",
    phase: "Phase 2: Agile Engineering",
    phaseShort: "Phase 2",
    phaseColor: "#2563eb",
    title: "Structured Project Execution",
    subtitle: "Predictable Sprint Velocity & Continuous Adaptability",
    description:
      "A defined development process helps keep projects organized and moving forward. Through regular communication, collaboration, and adaptability, we align project activities with business objectives and evolving requirements.",
    icon: GitMerge,
    impactMetric: "2-Week Sprints",
    impactSub: "100% Milestone Predictability",
    deliverables: [
      "Bi-Weekly Product Demos",
      "Jira / Linear Issue Transparency",
      "Continuous Backlog Prioritization",
      "Sprint Retrospectives & Burndown",
    ],
    telemetry: {
      status: "SPRINT_HEALTHY",
      spec: "VELOCITY_42_PTS",
      signal: "On Track",
    },
    codeSnippet: `// Sprint Pipeline & Burndown
const sprintExecution = {
  cadence: "14_DAYS",
  reviewMilestones: ["Demo", "Retro", "Planning"],
  burndownVariance: "< 3%"
};`,
  },
  {
    id: 6,
    number: "06",
    phase: "Phase 2: Agile Engineering",
    phaseShort: "Phase 2",
    phaseColor: "#2563eb",
    title: "Rigorous Quality Testing",
    subtitle: "Automated Test Harness & Zero-Defect Standards",
    description:
      "Quality is integrated into every stage of development. By combining manual and automated testing, we evaluate functionality, performance, security, and reliability before software is released.",
    icon: ShieldCheck,
    impactMetric: ">92% Test Coverage",
    impactSub: "Zero Critical Production Bugs",
    deliverables: [
      "End-to-End Playwright Automation",
      "Unit & Integration Test Suites",
      "OWASP Top 10 Security Penetration",
      "High-Concurrency Load Benchmarking",
    ],
    telemetry: {
      status: "ALL_TESTS_PASSED",
      spec: "COVERAGE_94.8%",
      signal: "Zero Vulnerabilities",
    },
    codeSnippet: `// Automated Regression & Security Test
describe("Checkout & Order Pipeline", () => {
  it("processes 10,000 req/sec under 45ms latency", async () => {
    const stress = await runLoadTest({ concurrency: 10000 });
    expect(stress.errorRate).toBe(0.00);
  });
});`,
  },
  {
    id: 7,
    number: "07",
    phase: "Phase 3: Scale & Partnership",
    phaseShort: "Phase 3",
    phaseColor: "#10b981",
    title: "Ongoing Maintenance & Support",
    subtitle: "Proactive Monitoring & 24/7 Production Resilience",
    description:
      "Software continues to evolve after launch. Grafizen provides ongoing support, updates, monitoring, and issue resolution to help applications perform reliably and adapt to changing business needs.",
    icon: RefreshCw,
    impactMetric: "99.99% Uptime SLA",
    impactSub: "Instant Hotfix Protocol",
    deliverables: [
      "24/7 Datadog / Grafana Telemetry",
      "Proactive Security Patches",
      "Database & Query Tuning",
      "Automated Cloud Backups & Failover",
    ],
    telemetry: {
      status: "MONITORING_ONLINE",
      spec: "SLA_TIER_1_ACTIVE",
      signal: "99.99% Live",
    },
    codeSnippet: `// Proactive Health Engine
monitor.subscribe("system.uptime", (metric) => {
  if (metric.p99Latency > 200) {
    autoScale.spinWorkerInstance();
    alertEngineeringTeam({ severity: "P2" });
  }
});`,
  },
  {
    id: 8,
    number: "08",
    phase: "Phase 3: Scale & Partnership",
    phaseShort: "Phase 3",
    phaseColor: "#10b981",
    title: "Transparent Communication",
    subtitle: "Open Channels, Direct Access, No Surprises",
    description:
      "Strong partnerships are built on openness and trust. We maintain clear communication, provide regular progress updates, set realistic expectations, and encourage feedback throughout the engagement.",
    icon: MessageSquareQuote,
    impactMetric: "Real-Time Sync",
    impactSub: "Direct Senior Developer Access",
    deliverables: [
      "Dedicated Slack / Teams Channels",
      "Weekly Strategic Sync Video Calls",
      "Transparent Milestone Budgets",
      "Asynchronous Loom Walkthroughs",
    ],
    telemetry: {
      status: "CHANNELS_OPEN",
      spec: "FEEDBACK_LOOP_ACTIVE",
      signal: "Synchronized",
    },
    codeSnippet: `// Direct Communication Protocol
const teamEngagement = {
  directSlackAccess: true,
  dailyStandupNotes: "Shared",
  weeklyExecutiveSync: "Scheduled",
  blockerResolution: "< 2 Hours"
};`,
  },
  {
    id: 9,
    number: "09",
    phase: "Phase 3: Scale & Partnership",
    phaseShort: "Phase 3",
    phaseColor: "#10b981",
    title: "Long-Term Client Partnerships",
    subtitle: "Co-Innovating to Power Continuous Market Leadership",
    description:
      "We value lasting relationships and focus on delivering consistent value. By understanding our clients' evolving needs and sharing insights into emerging technologies, we help them stay competitive and prepared for future growth.",
    icon: Handshake,
    impactMetric: "96% Retention",
    impactSub: "Multi-Year Co-Innovation",
    deliverables: [
      "Quarterly Technology Roadmaps",
      "Emerging AI & Cloud Advisory",
      "Elastic Engineering Scaling",
      "Dedicated Technical Account Director",
    ],
    telemetry: {
      status: "PARTNERSHIP_ESTABLISHED",
      spec: "INNOVATION_CYCLE_Q4",
      signal: "Exponential Growth",
    },
    codeSnippet: `// Long-Term Strategic Value
const partnershipRoadmap = {
  target: "Enterprise Modernization",
  emergingTech: ["Agentic AI", "Edge Computing", "Serverless"],
  roiMultipliers: "Continuous Value Generation"
};`,
  },
];

export default function GrafizenBestPractices() {
  const [activeStepId, setActiveStepId] = useState(1);
  const [activePhaseFilter, setActivePhaseFilter] = useState("all");
  const [viewMode, setViewMode] = useState("interactive"); // 'interactive' or 'stream'

  const activeStep =
    bestPracticesData.find((item) => item.id === activeStepId) ||
    bestPracticesData[0];

  const filteredSteps =
    activePhaseFilter === "all"
      ? bestPracticesData
      : bestPracticesData.filter((item) => {
          if (activePhaseFilter === "phase1")
            return item.phase.includes("Phase 1");
          if (activePhaseFilter === "phase2")
            return item.phase.includes("Phase 2");
          if (activePhaseFilter === "phase3")
            return item.phase.includes("Phase 3");
          return true;
        });

  // Next / Previous step handler
  const handlePrev = () => {
    setActiveStepId((prev) => (prev > 1 ? prev - 1 : 9));
  };
  const handleNext = () => {
    setActiveStepId((prev) => (prev < 9 ? prev + 1 : 1));
  };

  return (
    <section
      id="best-practices"
      className="relative w-full bg-[#fafafa] text-slate-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden font-sans"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Ambient Gradient Glows (Soft Grafizen Crimson & Tech Slate) */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#dd0403]/5 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[600px] w-[600px] rounded-full bg-slate-900/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================================= */}
        {/* SECTION HEADER: Editorial, Architectural, & Bold */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-slate-200">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
              <span className="h-px w-8 bg-[#dd0403]" />
              <span>ENGINEERING METHODOLOGY</span>
              <span className="h-2 w-2 rounded-full bg-[#dd0403] animate-ping" />
            </div>

            {/* Main Title with Playfair Display font */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-slate-950 leading-[1.15]">
              Best Practices Followed by{" "}
              <span className="relative inline-block text-[#dd0403]">
                Grafizen
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#dd0403]/30"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 7 C 20 0, 80 0, 100 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>

            {/* Sub-headline directly from user request */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              How does Grafizen assist its customers in developing top-notch software
              solutions? Through a disciplined, transparent, and user-centric 9-pillar
              execution framework engineered for high performance.
            </p>
          </div>

          {/* Quick Controls: Filter by Phase + Switch View Mode */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* View Mode Switcher (Interactive Cockpit vs Continuous Conduit) */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode("interactive")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  viewMode === "interactive"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Interactive Cockpit
              </button>
              <button
                type="button"
                onClick={() => setViewMode("stream")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  viewMode === "stream"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Continuous Blueprint
              </button>
            </div>
          </div>
        </div>

        {/* Phase Pill Filter Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2 flex items-center gap-1.5">
              <SlidersHorizontal size={13} />
              Filter Phase:
            </span>
            {[
              { key: "all", label: "All 9 Pillars" },
              { key: "phase1", label: "01-03: Strategy & Blueprint" },
              { key: "phase2", label: "04-06: Agile Engineering" },
              { key: "phase3", label: "07-09: Scale & Partnership" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActivePhaseFilter(tab.key)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  activePhaseFilter === tab.key
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-500 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              100% ISO Standards
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Agile Two-Week Sprints
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
              Dedicated Tech Director
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: INTERACTIVE COCKPIT (NO CARDS - Dynamic Engineering Deck) */}
        {/* ========================================================================= */}
        {viewMode === "interactive" && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Seamless Vertical Circuit Spine (Not Cards) */}
            {/* LEFT COLUMN: Seamless Vertical Circuit Spine (Compact height, Not Cards) */}
            <div className="lg:col-span-6 xl:col-span-5 relative">
              
              {/* Continuous Circuit Rail (Left Vertical Hairline) */}
              <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#dd0403] via-slate-300 to-emerald-500 hidden sm:block" />

              <div className="space-y-2 max-h-[540px] overflow-y-auto pr-1.5">
                {filteredSteps.map((step) => {
                  const isActive = step.id === activeStep.id;

                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStepId(step.id)}
                      className={`group relative pl-0 sm:pl-12 pr-3 py-2.5 rounded-xl cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border-l-4 border-[#dd0403]"
                          : "hover:bg-slate-100/80 border-l-4 border-transparent opacity-80 hover:opacity-100"
                      }`}
                    >
                      {/* Luminous Node on the Vertical Circuit Rail */}
                      <div
                        className={`hidden sm:flex absolute left-4 top-5 -translate-x-1/2 h-4 w-4 rounded-full items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#dd0403] text-white ring-4 ring-[#dd0403]/20 shadow-md scale-110"
                            : "bg-white border-2 border-slate-300 group-hover:border-[#dd0403]"
                        }`}
                      >
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-white" : "bg-slate-400"
                          }`}
                        />
                      </div>

                      {/* Header Row of Item: Number, Phase tag, Metric */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded ${
                              isActive
                                ? "bg-[#dd0403]/10 text-[#dd0403]"
                                : "bg-slate-200/80 text-slate-600 group-hover:text-slate-900"
                            }`}
                          >
                            STEP {step.number}
                          </span>
                          <span className="text-[10px] font-bold tracking-wide uppercase text-slate-400">
                            {step.phaseShort}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono font-bold text-slate-600">
                          {step.impactMetric}
                        </span>
                      </div>

                      {/* Step Title - with font-playfair and font-bold */}
                      <div className="mt-1 flex items-center justify-between">
                        <h3
                          className={`text-sm sm:text-base font-playfair font-bold tracking-tight transition-colors ${
                            isActive
                              ? "text-slate-950"
                              : "text-slate-700 group-hover:text-slate-950"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <ChevronRight
                          size={16}
                          className={`transition-all duration-200 ${
                            isActive
                              ? "text-[#dd0403] translate-x-0.5"
                              : "text-slate-300 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>

                      {/* Brief Teaser */}
                      <p
                        className={`text-xs text-slate-500 line-clamp-1 leading-normal font-normal ${
                          isActive ? "text-slate-700 font-medium" : ""
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive High-Tech Blueprint Console (Sticky, bg-[#dd0403], Compact Height) */}
            <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl bg-[#dd0403] text-white p-5 sm:p-7 shadow-[0_20px_50px_rgba(221,4,3,0.35)] overflow-hidden border border-red-500/40"
                >
                  {/* Subtle Blueprint Grid inside Red Canvas */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />

                  {/* Corner Accent Tech Crosshairs */}
                  <div className="pointer-events-none absolute top-3.5 left-4 text-[10px] font-mono font-bold text-white/60">
                    + GRAFIZEN ARCHITECTURE // 0{activeStep.id}
                  </div>
                  <div className="pointer-events-none absolute top-3.5 right-4 text-[10px] font-mono font-bold text-white/70 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    LIVE TELEMETRY
                  </div>

                  {/* Giant Watermark Step Number */}
                  <div className="pointer-events-none absolute -right-4 -bottom-6 font-mono text-[110px] sm:text-[140px] font-bold text-white/[0.08] select-none leading-none">
                    {activeStep.number}
                  </div>

                  {/* Top Bar Details */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 pb-4 border-b border-white/20">
                    <div className="flex items-center gap-2.5">
                      <div className="h-10 w-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-inner">
                        <activeStep.icon size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
                          {activeStep.phase}
                        </div>
                        <div className="text-[11px] text-white/70 font-mono font-bold">
                          PILLAR 0{activeStep.id} OF 09
                        </div>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-1.5 text-right">
                      <div className="text-xs font-bold text-white tracking-wide">
                        {activeStep.impactMetric}
                      </div>
                      <div className="text-[10px] text-white/80 font-mono font-bold">
                        {activeStep.impactSub}
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area - Compact Height */}
                  <div className="relative z-10 my-4 space-y-3.5">
                    {/* Title with font-playfair and font-bold */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-playfair font-bold tracking-tight text-white">
                        {activeStep.title}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-white/90 font-bold">
                        {activeStep.subtitle}
                      </p>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
                      {activeStep.description}
                    </p>

                    {/* Key Deliverables Matrix */}
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 mb-2 flex items-center gap-1.5 font-bold">
                        <Workflow size={12} className="text-white" />
                        Key Deliverables & Methodologies
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeStep.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-black/20 border border-white/15 text-xs text-white font-medium"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-white shrink-0"
                            />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compact Telemetry Bar (Manages height neatly, replaces giant code block) */}
                    <div className="rounded-xl bg-black/25 border border-white/20 px-3.5 py-2.5 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-white text-[11px] font-bold">
                        <Terminal size={14} className="text-white" />
                        <span>SPEC // {activeStep.telemetry.spec}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-white/80 font-bold">STATUS:</span>
                        <span className="font-bold text-white bg-white/25 px-2 py-0.5 rounded text-[10px]">
                          {activeStep.telemetry.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Controls Bar: Step navigation + CTA */}
                  <div className="relative z-10 pt-3.5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Step indicator pills */}
                    <div className="flex items-center gap-1.5">
                      {bestPracticesData.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveStepId(s.id)}
                          aria-label={`Go to step ${s.id}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            s.id === activeStep.id
                              ? "w-6 bg-white"
                              : "w-2 bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Nav Prev / Next */}
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="p-2 rounded-lg bg-black/20 hover:bg-black/35 border border-white/25 text-white transition-colors"
                        aria-label="Previous step"
                      >
                        <ChevronLeft size={15} />
                      </button>

                      <span className="text-xs font-mono font-bold text-white/90">
                        0{activeStep.id} / 09
                      </span>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="p-2 rounded-lg bg-black/20 hover:bg-black/35 border border-white/25 text-white transition-colors"
                        aria-label="Next step"
                      >
                        <ChevronRight size={15} />
                      </button>

                      <a
                        href="#contact"
                        className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#dd0403] text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
                      >
                        <span>Consult Grafizen</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: CONTINUOUS BLUEPRINT TIMELINE (NO CARDS - Connected Conduit) */}
        {/* ========================================================================= */}
        {viewMode === "stream" && (
          <div className="mt-16 relative">
            {/* Central High-Tech Conduit / Laser Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#dd0403] via-blue-600 to-emerald-500 opacity-60" />

            <div className="space-y-16 lg:space-y-24">
              {filteredSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    {/* Central Anchor Node on Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border-2 border-slate-900 items-center justify-center shadow-lg group hover:scale-110 transition-transform">
                      <span className="font-mono text-xs font-black text-slate-900">
                        {step.number}
                      </span>
                    </div>

                    {/* Left Column content */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven
                          ? "lg:pr-14 lg:text-right"
                          : "lg:order-2 lg:pl-14 lg:text-left"
                      }`}
                    >
                      {/* Micro Stage Header */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-[#dd0403] uppercase tracking-wider">
                          {step.phase}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403]" />
                        <span className="text-xs font-mono text-slate-400">
                          PILLAR {step.number}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-950 tracking-tight">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {step.subtitle}
                      </p>

                      {/* Description Paragraph */}
                      <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>

                      {/* Key Deliverables pills */}
                      <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        {step.deliverables.map((deliv, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 size={12} className="text-[#dd0403]" />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (Architecture Spec / Telemetry - Not a generic card!) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven
                          ? "lg:pl-14"
                          : "lg:order-1 lg:pr-14"
                      }`}
                    >
                      <div className="relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                        {/* Blueprint decorative top bar */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs font-mono">
                          <div className="flex items-center gap-2 text-slate-800 font-bold">
                            <StepIcon size={16} className="text-[#dd0403]" />
                            <span>EXECUTION TELEMETRY</span>
                          </div>
                          <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[10px]">
                            {step.telemetry.status}
                          </span>
                        </div>

                        {/* Impact Stat Highlight */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                          <div>
                            <div className="text-xs text-slate-500">
                              Core Impact Metric
                            </div>
                            <div className="text-sm font-bold text-slate-900">
                              {step.impactMetric}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] text-slate-400 font-mono">
                              Benchmark
                            </div>
                            <div className="text-xs font-medium text-[#dd0403]">
                              {step.impactSub}
                            </div>
                          </div>
                        </div>

                        {/* Code Telemetry Preview */}
                        <div className="rounded-lg bg-slate-900 text-slate-200 p-3 font-mono text-[11px] overflow-x-auto leading-relaxed">
                          <pre>
                            <code>{step.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM CALL-TO-ACTION BANNER: Architectural & Modern */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28 relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white p-8 sm:p-12 overflow-hidden border border-slate-800">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dd0403]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#dd0403] mb-3">
                <Sparkle size={14} />
                READY TO ENGINEER HIGH-PERFORMANCE SOFTWARE?
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold tracking-tight">
                Experience Grafizen's Engineering Best Practices in Action
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                Let's discuss your project requirements, establish a clear architecture roadmap,
                and deploy enterprise-grade software built for scale.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#dd0403] hover:bg-[#c00302] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#dd0403]/30 hover:scale-105"
              >
                <span>Schedule a Technical Discovery</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
