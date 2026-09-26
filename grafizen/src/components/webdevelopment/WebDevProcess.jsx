import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GitBranch,
  Layout,
  Terminal,
  ShieldCheck,
  Rocket,
  Check,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "Phase 01",
    timeline: "Week 01",
    title: "Discovery & Architecture",
    description:
      "Deep dive into business goals, technical scoping, data modeling, and end-to-end system architecture blueprinting.",
    tags: ["Tech Feasibility", "System Blueprint", "Data Modeling"],
    artifactType: "architecture",
  },
  {
    step: "02",
    phase: "Phase 02",
    timeline: "Week 02-03",
    title: "UI/UX & Design System",
    description:
      "High-fidelity interactive prototypes,  responsive design tokens, and scalable component design systems.",
    tags: ["Design System", "Interactive Prototype", "Figma Tokens"],
    artifactType: "wireframe",
  },
  {
    step: "03",
    phase: "Phase 03",
    timeline: "Week 04-07",
    title: "Sprint Engineering",
    description:
      "Clean modular code development using modern frameworks, REST/GraphQL APIs, and continuous sprint demo reviews.",
    tags: ["Agile Sprints", "Modular Code", "Weekly Demos"],
    artifactType: "code",
  },
  {
    step: "04",
    phase: "Phase 04",
    timeline: "Week 08",
    title: "QA & Audit Testing",
    description:
      "Cross-browser testing, automated regression, vulnerability audits, and Core Web Vitals speed optimization.",
    tags: ["Vulnerability Audit", "Cross-Browser", "99.9% Pass SLA"],
    artifactType: "qa",
  },
  {
    step: "05",
    phase: "Phase 05",
    timeline: "Week 09+",
    title: "Launch & Cloud DevOps",
    description:
      "Automated CI/CD zero-downtime deployment, DNS & SSL propagation, cloud monitoring, and ongoing 24/7 maintenance.",
    tags: ["Zero Downtime", "CI/CD Pipeline", "24/7 Monitoring"],
    artifactType: "launch",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WebDevProcess = () => {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(221,4,3,0.035) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* ── TOP SECTION HEADING ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-[760px] mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/40 mb-3.5"
          >
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>Our Methodology</span>
            {/* <span className="h-px w-7 bg-[#dd0403]" /> */}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-[30px] font-[600] leading-[1.15] tracking-[-0.02em] sm:text-[38px] md:text-[44px] text-black"
          >
            A Disciplined Engineering{" "}
            <span className="text-[#dd0403]">Pipeline</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 text-[14px] font-[300] leading-[1.8] text-black/55"
          >
            From strategic discovery to zero-downtime launch, our battle-tested
            workflow delivers production-ready web solutions on time, on budget, and
            with zero technical debt.
          </motion.p>
        </motion.div>

        {/* ── HORIZONTAL CONNECTED LASER PIPELINE ── */}
        <div className="relative">
          {/* Laser Connecting Track (visible on lg+) */}
          <div className="hidden lg:block absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#dd0403]/30 to-transparent z-0">
            <div className="absolute inset-0 bg-[#dd0403] opacity-60 blur-[1px]" />
          </div>

          {/* 5-Column Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-gray-200/90 p-5 sm:p-5 shadow-sm hover:shadow-xl hover:border-[#dd0403]/35 hover:-translate-y-1.5 transition-all duration-300 min-h-[310px]"
              >
                {/* Milestone Node on Top of Card */}
          

                {/* ── REALISTIC MINIATURE ARTIFACT ── */}
                <div className="h-[120px] w-full rounded-2xl bg-gray-50/80 border border-gray-100 flex items-center justify-center p-3 mb-5 overflow-hidden select-none group-hover:bg-[#dd0403]/[0.02] group-hover:border-[#dd0403]/20 transition-colors">
                  {/* Artifact 01: System Architecture Graph */}
                  {step.artifactType === "architecture" && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg
                        className="w-full h-full max-w-[160px]"
                        viewBox="0 0 160 80"
                        fill="none"
                      >
                        {/* Connecting lines */}
                        <path
                          d="M 25 40 C 50 40, 50 20, 80 20"
                          stroke="#cbd5e1"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                        />
                        <path
                          d="M 25 40 C 50 40, 50 60, 80 60"
                          stroke="#cbd5e1"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                        />
                        <path
                          d="M 80 20 L 135 20"
                          stroke="#cbd5e1"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M 80 60 L 135 60"
                          stroke="#cbd5e1"
                          strokeWidth="1.5"
                        />
                        {/* Left Node */}
                        <circle
                          cx="25"
                          cy="40"
                          r="10"
                          fill="white"
                          stroke="#dd0403"
                          strokeWidth="2"
                        />
                        <circle cx="25" cy="40" r="4" fill="#dd0403" />
                        {/* Middle Branch Nodes */}
                        <rect
                          x="70"
                          y="12"
                          width="20"
                          height="16"
                          rx="4"
                          fill="white"
                          stroke="#94a3b8"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="70"
                          y="52"
                          width="20"
                          height="16"
                          rx="4"
                          fill="white"
                          stroke="#94a3b8"
                          strokeWidth="1.2"
                        />
                        {/* Right End Nodes */}
                        <rect
                          x="120"
                          y="12"
                          width="26"
                          height="16"
                          rx="4"
                          fill="#f8fafc"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                        />
                        <rect
                          x="120"
                          y="52"
                          width="26"
                          height="16"
                          rx="4"
                          fill="#f8fafc"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Artifact 02: Responsive Wireframe Layout */}
                  {step.artifactType === "wireframe" && (
                    <div className="flex items-center gap-2 w-full justify-center">
                      {/* Mobile Frame */}
                      <div className="h-[75px] w-[34px] rounded-lg border-2 border-gray-300 bg-white p-1 flex flex-col gap-1 shadow-sm">
                        <div className="h-1.5 w-full bg-[#dd0403]/30 rounded-xs" />
                        <div className="h-4 w-full bg-gray-100 rounded-xs flex items-center justify-center">
                          <span className="text-[7px] text-gray-400">×</span>
                        </div>
                        <div className="flex-1 w-full bg-gray-50 rounded-xs flex flex-col gap-0.5 p-0.5">
                          <div className="h-1 w-3/4 bg-gray-200 rounded-xs" />
                          <div className="h-1 w-1/2 bg-gray-200 rounded-xs" />
                        </div>
                      </div>

                      {/* Desktop Wireframe */}
                      <div className="h-[75px] w-[95px] rounded-lg border border-gray-300 bg-white p-1.5 flex flex-col gap-1.5 shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-1">
                          <div className="h-1 w-4 bg-[#dd0403] rounded-xs" />
                          <div className="flex gap-0.5">
                            <div className="h-1 w-2 bg-gray-200 rounded-xs" />
                            <div className="h-1 w-2 bg-gray-200 rounded-xs" />
                          </div>
                        </div>
                        <div className="flex gap-1 flex-1">
                          <div className="w-1/3 bg-gray-100 rounded-xs flex items-center justify-center text-[8px] text-gray-400">
                            ×
                          </div>
                          <div className="flex-1 flex flex-col gap-1">
                            <div className="h-1.5 w-full bg-gray-100 rounded-xs" />
                            <div className="h-1.5 w-2/3 bg-gray-100 rounded-xs" />
                            <div className="h-2 w-full bg-gray-50 rounded-xs mt-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Artifact 03: IDE / Code Terminal */}
                  {step.artifactType === "code" && (
                    <div className="w-full max-w-[170px] rounded-lg bg-gray-950 p-2 font-mono text-[9px] shadow-sm text-gray-300">
                      <div className="flex items-center gap-1 mb-1.5 pb-1 border-b border-gray-800">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        <span className="text-[7.5px] text-gray-500 ml-1">app.tsx</span>
                      </div>
                      <p className="leading-tight">
                        <span className="text-[#dd0403]">const</span> app ={" "}
                        <span className="text-emerald-400">build()</span>;
                      </p>
                      <p className="text-gray-500 leading-tight">
                        // clean modular sprint
                      </p>
                      <p className="text-sky-400 leading-tight">
                        return &lt;<span className="text-yellow-300">Grafizen</span> /&gt;;
                      </p>
                    </div>
                  )}

                  {/* Artifact 04: QA Speedometer / Circular Gauge */}
                  {step.artifactType === "qa" && (
                    <div className="relative flex items-center justify-center">
                      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 70 70">
                        <circle
                          cx="35"
                          cy="35"
                          r="28"
                          stroke="#f1f5f9"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        <circle
                          cx="35"
                          cy="35"
                          r="28"
                          stroke="#dd0403"
                          strokeWidth="5"
                          strokeDasharray="175"
                          strokeDashoffset="10"
                          strokeLinecap="round"
                          fill="transparent"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-[14px] font-[700] text-black leading-none">
                          99.9%
                        </span>
                        <span className="text-[8px] font-[600] uppercase text-[#dd0403] tracking-wider mt-0.5">
                          PASS
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Artifact 05: Launch & Cloud DevOps */}
                  {step.artifactType === "launch" && (
                    <div className="flex flex-col items-center justify-center gap-1.5 text-center">
                      <div className="relative flex items-center justify-center h-11 w-11 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <Rocket size={20} className="text-[#dd0403]" strokeWidth={2} />
                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-medium text-black/70">
                          Production Live (24/7)
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── CARD BODY ── */}
                <div>
                  {/* Step Numeral Header */}
                  <div className="flex items-baseline gap-2 mb-2">
                    {/* <span className="text-[24px] font-[700] text-black/15 group-hover:text-[#dd0403] transition-colors leading-none">
                      {step.step}
                    </span> */}
                    <h3 className="text-[17px] font-semibold   text-black leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[12.5px] font-[300] text-black/60 leading-[1.75] ">
                    {step.description}
                  </p>
                </div>

                {/* ── BOTTOM DELIVERABLE TAGS ── */}
              
              </motion.div>
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default WebDevProcess;
