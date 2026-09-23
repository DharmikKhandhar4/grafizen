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
//   {
//     id: 9,
//     number: "09",
//     phase: "Phase 3: Scale & Partnership",
//     phaseShort: "Phase 3",
//     phaseColor: "#10b981",
//     title: "Long-Term Client Partnerships",
//     subtitle: "Co-Innovating to Power Continuous Market Leadership",
//     description:
//       "We value lasting relationships and focus on delivering consistent value. By understanding our clients' evolving needs and sharing insights into emerging technologies, we help them stay competitive and prepared for future growth.",
//     icon: Handshake,
//     impactMetric: "96% Retention",
//     impactSub: "Multi-Year Co-Innovation",
//     deliverables: [
//       "Quarterly Technology Roadmaps",
//       "Emerging AI & Cloud Advisory",
//       "Elastic Engineering Scaling",
//       "Dedicated Technical Account Director",
//     ],
//     telemetry: {
//       status: "PARTNERSHIP_ESTABLISHED",
//       spec: "INNOVATION_CYCLE_Q4",
//       signal: "Exponential Growth",
//     },
//     codeSnippet: `// Long-Term Strategic Value
// const partnershipRoadmap = {
//   target: "Enterprise Modernization",
//   emergingTech: ["Agentic AI", "Edge Computing", "Serverless"],
//   roiMultipliers: "Continuous Value Generation"
// };`,
//   },
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
      className="relative w-full bg-white text-black py-10 sm:py-32 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden "
    >
      {/* Subtle Architectural Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:64px_64px] hidden md:block" />

      {/* Ambient Gradient Glows (Soft Grafizen Crimson & Tech Slate) */}
      {/* <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#dd0403]/5 blur-[140px]" /> */}
      {/* <div className="pointer-events-none absolute -bottom-40 left-0 h-[600px] w-[600px] rounded-full bg-slate-900/5 blur-[140px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================================= */}
        {/* SECTION HEADER: Editorial, Architectural, & Bold */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between md:gap-6 pb-7 border-b border-slate-200">
          <div className="max-w-3xl">
            {/* Grafizen Eyebrow Tag — 10–11px, bold, uppercase, tracking-[0.2em], black/45 */}
            <div className="mb-4 sm:mb-5 flex items-center gap-2.5 text-[10px] sm:text-[11px]  uppercase tracking-[0.2em] text-black/45 font-medium">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>ENGINEERING METHODOLOGY</span>
            </div>

            {/* Section H2 — Playfair, 32–48px, font-bold, #111827 */}
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl  font-bold tracking-tight text-[#111827] leading-[1.15]">
              Best Practices Followed by{" "}
              <span className="text-[#dd0403]">Grafizen</span>
            </h2>

          
          </div>
            {/* Sub-description — 14–16px, normal, black/70 */}
          

          {/* Quick Controls: Filter by Phase + Switch View Mode */}
          <div className="flex flex-col sm:flex-col items-end sm:items-end gap-4">
            {/* View Mode Switcher (Interactive Cockpit vs Continuous Conduit) */}
              <p className="mt-4 text-sm sm:text-[14px] text-black/55 leading-relaxed font-[300] max-w-2xl">
              How we assist our customers in developing top-notch software solutions through 9 proven pillars of engineering excellence.
            </p>
            {/* <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/60 shadow-inner">
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
            </div> */}
          </div>
        </div>

   

        {/* ========================================================================= */}
        {/* VIEW MODE 1: INTERACTIVE COCKPIT (NO CARDS - Dynamic Engineering Deck) */}
        {/* ========================================================================= */}
        {viewMode === "interactive" && (
          <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
            {/* LEFT COLUMN — Horizontal scroll on mobile, vertical list on lg+ */}
            <div className="lg:col-span-6 xl:col-span-5 relative">

              {/* MOBILE: Horizontal scroll pill tabs */}
              <div className="flex lg:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] gap-2 pb-2 -mx-1 px-1">
                {filteredSteps.map((step) => {
                  const isActive = step.id === activeStep.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepId(step.id)}
                      className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full border text-[12px] font-[500] transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? "bg-[#dd0403] border-[#dd0403] text-white shadow-md"
                          : "bg-white border-slate-200 text-black/55 hover:border-[#dd0403] hover:text-[#dd0403]"
                      }`}
                    >
                      {/* <span className={`text-[10px] font-bold tabular-nums ${isActive ? "text-white/80" : "text-black/35"}`}>
                        {step.number}
                      </span> */}
                      {step.title}
                    </button>
                  );
                })}
              </div>

              {/* DESKTOP: Vertical rail list */}
              <div className="hidden lg:block relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-[#dd0403]/5" />
                <div className="space-y-1">
                  {filteredSteps.map((step) => {
                    const isActive = step.id === activeStep.id;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStepId(step.id)}
                        className={`group relative pl-12 pr-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-sm border-l-4 border-[#dd0403]"
                            : "hover:bg-slate-50 border-l-4 border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        {/* Rail Node */}
                        <div className={`flex absolute left-4 top-3.5 -translate-x-1/2 h-3 w-3 rounded-full items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#dd0403] ring-2 ring-[#dd0403]/25 scale-110"
                            : "bg-white border-2 border-slate-300 group-hover:border-[#dd0403]"
                        }`} />

                        <h3 className={`mt-0.5 text-[15px] leading-snug tracking-tight transition-colors ${
                          isActive ? "text-[#111827]" : "text-black/55 group-hover:text-[#111827]"
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — bg-[#dd0403] */}
            <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl bg-[#dd0403] text-white p-3 sm:p-8 shadow-[0_20px_50px_rgba(221,4,3,0.30)] overflow-hidden border border-red-500/30"
                >
                  {/* Grid texture */}
                  {/* <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" /> */}

                  {/* Watermark step number */}
                  {/* <div className="pointer-events-none absolute -right-4 -bottom-6  text-[120px] sm:text-[150px] font-bold text-white/[0.08] select-none leading-none">
                    {activeStep.number}
                  </div> */}

                  {/* Top bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 md:pb-5 pb-3 ">
                    <div className="flex items-center gap-3">
                      {/* Icon box */}
                      <div className="h-11 w-11 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center text-white shadow-inner">
                        <activeStep.icon size={22} />
                      </div>
                      <div>
                        {/* Phase label — 10px, bold, uppercase, white/80 */}
                        <div className="text-[10px] sm:text-[11px] font-[400] uppercase tracking-[0.2em] text-white/80">
                          {activeStep.phase}
                        </div>
                        {/* Pillar index — 11px, white/60 */}
                        {/* <div className="text-[11px] text-white/60 ">
                          PILLAR 0{activeStep.id} OF 09
                        </div> */}
                      </div>
                    </div>

                    {/* Impact badge */}
                    <div className="bg-white/20 border border-white/20 rounded-xl px-4 py-2 text-right backdrop-blur-sm hidden
                    md:block">
                      {/* metric — 13px, bold, white */}
                      <div className="text-[13px] font-bold text-white tracking-wide">
                        {activeStep.impactMetric}
                      </div>
                      {/* sub — 10px, white/75 */}
                      <div className="text-[10px] text-white/75 ">
                        {activeStep.impactSub}
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="relative z-10  space-y-4">
                    {/* Step title — Playfair, 22–26px, bold, white */}
                    <div>
                      <h3 className="text-[19px] sm:text-[20px]   tracking-tight font-[400] leading-snug">
                        {activeStep.title}
                      </h3>
                      {/* Subtitle — 13px, white/80, font-medium */}
                      <p className="mt-1 text-[13px] text-white/80 font-[300]  leading-snug">
                        {activeStep.subtitle}
                      </p>
                    </div>

                    {/* Description — 13–14px, white/90, normal */}
                    <p className="text-[13px] sm:text-sm text-white/90 leading-relaxed  font-[300]">
                      {activeStep.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2.5 flex items-center gap-1.5">
                        <Workflow size={12} className="text-white" />
                        Key Deliverables & Methodologies
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeStep.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 md:py-2 py-1  rounded-lg bg-white/20 border border-white/15 text-[12px] sm:text-xs font-[300] text-white "
                          >
                            <CheckCircle2 size={13} className="text-white shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Telemetry bar */}
                    {/* <div className="rounded-xl bg-black/25 border border-white/20 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2  text-[11px]">
                      <span className="font-bold text-white flex items-center gap-2">
                        <Terminal size={13} className="text-white" />
                        SPEC // {activeStep.telemetry.spec}
                      </span>
                      <span className="text-white/70 font-bold">
                        STATUS: <span className="text-white bg-white/25 px-2 py-0.5 rounded ml-1">{activeStep.telemetry.status}</span>
                      </span>
                    </div> */}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: CONTINUOUS BLUEPRINT TIMELINE (NO CARDS - Connected Conduit) */}
        {/* ========================================================================= */}
    

       

      </div>
    </section>
  );
}
