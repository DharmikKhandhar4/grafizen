import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Clock,
  Cpu,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
  Server,
  Lock,
} from "lucide-react";

// React Bits UI Components
import TiltedCard from "../ui/TiltedCard";
import DecryptedText from "../ui/DecryptedText";
import ShinyText from "../ui/ShinyText";
import CountUp from "../ui/CountUp";

/**
 * WebDevAboutUs Component
 * Modern About Us / Agency Section:
 * - Left side: 3D interactive Web Engineering Cockpit powered by React Bits TiltedCard in a crisp LIGHT THEME,
 *   with ONLY the inner code block styled dark.
 * - Right side: Clean, high-impact editorial typography & paragraphs (no card containers).
 * - Bottom: React Bits CountUp statistics row.
 */
export default function WebDevAboutUs() {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <section
      id="about-us"
      className="relative w-full overflow-hidden bg-white py-20 sm:py-28 lg:py-20 selection:bg-[#dd0403]/15 selection:text-[#dd0403]"
    >
      {/* Subtle Ambient Lighting Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-28 top-12 h-[450px] w-[450px] rounded-full bg-[#dd0403]/5 blur-[120px]" />
        <div className="absolute right-10 bottom-16 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.1fr] lg:items-start lg:gap-12 xl:gap-20">
          
          {/* ══════════════════════════════════════════════════════════════
              1. LEFT COLUMN: 3D Light-Themed Web Engineering Cockpit
              (Powered by React Bits TiltedCard - ONLY Code is Dark)
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col items-center justify-center lg:sticky lg:top-24 lg:self-start">
            <TiltedCard
              maxTilt={9}
              scale={1.015}
              showGlare={true}
              className="w-full max-w-[620px]"
            >
              {/* Outer Window Container: Clean Light Theme */}
              <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border-2 border-neutral-200/90 bg-white p-5 sm:p-7 text-black shadow-2xl shadow-neutral-900/10">
                
                {/* Subtle Ambient Red Glow inside Light Frame */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#dd0403]/10 blur-[70px]" />
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-orange-100/50 blur-[70px]" />

                {/* macOS Light Window Header */}
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2  text-[11px] font-medium text-neutral-500">
                      grafizen-web.config.js
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[10px]  font-semibold text-emerald-700 border border-emerald-200/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Interactive Navigation Tabs inside Mockup */}
                <div className="mt-2 flex items-center gap-2 border-b border-neutral-200/70 pb-2">
                  {[
                    { id: "architecture", label: "Architecture", icon: Cpu },
                    { id: "performance", label: "Performance", icon: Zap },
                    { id: "stack", label: "Tech Stack", icon: Layers },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                          isActive
                            ? "bg-[#dd0403] text-white shadow-xs"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-black border border-neutral-200/60"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Light Canvas Wrapper */}
                <div className="relative mt-4 min-h-[300px] rounded-2xl bg-[#f8fafc] p-4 sm:p-4 border border-neutral-200/80">
                  
                  {/* TAB 1: Architecture View (ONLY the Code Block is Dark) */}
                  {activeTab === "architecture" && (
                    <div className="flex flex-col justify-between h-full space-y-3.5 font-mono">
                      
                      {/* Dark Code Block */}
                      <div className="rounded-xl bg-[#0f172a] p-4  text-xs border border-slate-800 text-slate-200 shadow-md">
                        <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                          <span className="flex items-center gap-1.5 text-[11px]">
                            <Terminal className="h-3 w-3 text-[#dd0403]" />
                            <span>Modern Web Architecture</span>
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold">STATUS: COMPILED</span>
                        </div>
                        <div className="mt-3 space-y-1 text-slate-300 text-[11px] leading-relaxed">
                          <p>
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-sky-300">grafizenEngine</span> ={" "}
                            <span className="text-amber-300">createPlatform</span>(&#123;
                          </p>
                          <p className="pl-4">
                            <span className="text-slate-400">framework:</span>{" "}
                            <span className="text-emerald-300">"Next.js 15 + React 19"</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-slate-400">hydration:</span>{" "}
                            <span className="text-emerald-300">"Sub-50ms Zero-Lag"</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-slate-400">conversionFunnel:</span>{" "}
                            <span className="text-emerald-300">"Multi-Tier CRO Mesh"</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-slate-400">security:</span>{" "}
                            <span className="text-emerald-300">"Enterprise SSL + Edge Shield"</span>,
                          </p>
                          <p>&#125;);</p>
                        </div>
                      </div>

                      {/* Light Highlight Boxes below code */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-neutral-200/90 shadow-xs">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dd0403]/10 text-[#dd0403]">
                            <Server className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-black">Scalable Architecture</div>
                            <div className="text-[10px] text-neutral-500">Built for growth</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 rounded-xl bg-white p-3 border border-neutral-200/90 shadow-xs">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <Lock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-black">Secure Development</div>
                            <div className="text-[10px] text-neutral-500">Security-focused</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* TAB 2: Performance View (Light Theme) */}
                  {activeTab === "performance" && (
                    <div className="space-y-3 py-0.5">
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between border-b border-neutral-200/70 pb-2.5">
                        <span className="text-xs font-bold text-black">
                          Website Speed &amp; Optimization
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Optimized
                        </span>
                      </div>

                      {/* Main Score Display */}
                      <div className="flex flex-col items-center justify-center pt-0.5">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-[3.5px] border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-500/10">
                          <span className=" text-2xl font-black text-emerald-600">99</span>
                        </div>
                        <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-black">
                          WEBSITE PERFORMANCE
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          Illustrative score; replace with actual results.
                        </div>
                      </div>

                      {/* Metrics List */}
                      <div className="space-y-1.5 pt-1">
                        {[
                          { label: "First Contentful Paint (FCP)", value: "0.4s", score: "99%" },
                          { label: "Largest Contentful Paint (LCP)", value: "0.7s", score: "100%" },
                          { label: "Interaction to Next Paint (INP)", value: "80ms", score: "99%" },
                          { label: "Cumulative Layout Shift (CLS)", value: "0.00", score: "100%" },
                        ].map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between rounded-lg bg-white px-3 py-1.5 text-[11px] border border-neutral-200/80 shadow-xs"
                          >
                            <span className="text-neutral-600 font-medium">{metric.label}</span>
                            <div className="flex items-center gap-2">
                              <span className=" font-bold text-emerald-600">{metric.value}</span>
                              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
                                {metric.score}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Tech Stack View (Light Theme) */}
                  {activeTab === "stack" && (
                    <div className="space-y-2 py-1">
                      <div className="text-xs font-bold text-black border-b border-neutral-200/70 pb-2">
                        Modern Web Development Stack
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {[
                          { name: "React.js", role: "UI Development" },
                          { name: "Next.js", role: "Web Framework" },
                          { name: "JavaScript", role: "Dynamic Logic" },
                          { name: "Tailwind CSS", role: "Responsive Design" },
                          { name: "Node.js", role: "Backend Runtime" },
                          { name: "REST APIs", role: "Data Integration" },
                        ].map((tech, i) => (
                          <div
                            key={i}
                            className="flex flex-col justify-center rounded-xl bg-white p-2.5 border border-neutral-200/90 shadow-xs transition-all hover:border-[#dd0403]/50"
                          >
                            <span className="text-[11px] font-bold text-black">{tech.name}</span>
                            <span className="text-[9px] text-neutral-500">{tech.role}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2.5 rounded-xl bg-[#dd0403]/5 p-3 border border-[#dd0403]/20">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#dd0403]">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Built for Performance &amp; Scalability</span>
                        </div>
                        <p className="mt-1 text-[10px] leading-relaxed text-neutral-600">
                          Modern technologies, clean code and flexible architecture to create responsive, secure and scalable web experiences.
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Accents in Left Card */}
                {/* <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-200/80 text-[11px] text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#dd0403]" />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>SEO Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Responsive Design</span>
                  </div>
                </div> */}

              </div>
            </TiltedCard>
            
          </div>

          {/* ══════════════════════════════════════════════════════════════
              2. RIGHT COLUMN: Editorial Narrative in Flowing Paragraphs
              (No Cards, Pure Editorial Typography with Icons)
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-center">
            
            {/* Top Sub-Label with React Bits DecryptedText */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#dd0403]" />
              {/* <DecryptedText
                text="WEB DEVELOPMENT AGENCY"
                speed={30}
                maxIterations={10}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/55 "
              /> */}
              <span className="text-[11px] font-[400] uppercase tracking-[0.22em] text-black/55 ">WHO WE ARE</span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-2 text-3xl font-[600] tracking-[-0.03em] text-black sm:text-4xl lg:text-[44px] lg:leading-[1.14]">
              We build innovative{" "}
              <span className="font-[600] text-[#dd0403]">
             web solutions
              </span>
            </h2>

            {/* Highlighted Lead Paragraph */}
            <p className="mt-5 text-base font-[300] leading-relaxed text-black/55 sm:text-[14px] sm:leading-5">
            We are a web development company focused on building high-performance websites and scalable digital solutions that help businesses grow.
            </p>

            {/* Narrative Body Copy */}
            <p className="mt-4 text-sm leading-relaxed text-black/55 sm:text-[14px] sm:leading-5 font-[300]">
             At Grafizen, we combine modern technologies, creative design and reliable development to deliver seamless digital experiences. From custom websites to complex web applications, we turn ideas into powerful solutions tailored to your business goals.
            </p>

             <div className="mt-8 sm:mt-7 pt-6 border-t border-neutral-100">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center sm:items-center">
              <div className=" text-3xl font-bold text-black sm:text-4xl lg:text-4xl">
                <CountUp to={10} duration={2.2} suffix="+" />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-black/85">
                Years of Engineering
              </div>
              <p className="mt-1 text-[11px] text-black/55">
                Continuous digital craftsmanship
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center sm:items-center">
              <div className=" text-3xl font-extrabold text-[#dd0403] sm:text-4xl lg:text-4xl">
                <CountUp to={250} duration={2.5} suffix="+" />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-black/85 ">
                Websites Delivered
              </div>
              <p className="mt-1 text-[11px] text-black/55">
                High-performance platforms
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center sm:items-center">
              <div className=" text-3xl font-bold text-black sm:text-4xl lg:text-4xl">
                <CountUp to={99.8} decimals={1} duration={2.4} suffix="%" />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-black/85">
                Client Satisfaction
              </div>
              <p className="mt-1 text-[11px] text-black/55">
                Retention and SLA compliance
              </p>
            </div>

            {/* Metric 4 */}
            {/* <div className="flex flex-col items-center sm:items-start">
              <div className=" text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">
                <CountUp to={15} duration={2.0} suffix="M+" />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Monthly Traffic Handled
              </div>
              <p className="mt-1 text-[11px] text-neutral-400">
                Across global edge deployments
              </p>
            </div> */}

          </div>
        </div>

          </div>
          

        </div>

        {/* ─── 3. PROVEN TRACK RECORD METRICS BAR (React Bits CountUp) ─── */}


      </div>
    </section>
  );
}
