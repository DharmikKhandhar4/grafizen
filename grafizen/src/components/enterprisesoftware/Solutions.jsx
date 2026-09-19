import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Shield,
  Cpu,
  ChevronRight
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "mobility",
    side: "left",
    image: "/image/enterpricesoftware/mobility.avif",
    title: "Enterprise Mobility Solutions",
    badge: "iOS & Android",
    shortDesc: "We develop scalable mobile solutions that empower your team to work efficiently anytime, anywhere, while ensuring your corporate data stays protected.",
    fullDesc: "Empower your workforce with enterprise-grade mobile applications featuring offline data sync, biometrics, multi-layered device security, and seamless backend integration.",
    features: [
      "Cross-platform React Native / Flutter apps",
      "MDM (Mobile Device Management) integration",
      "End-to-end encrypted offline synchronization",
      "Biometric authentication & SSO support"
    ],
    techStack: ["React Native", "Swift", "Kotlin", "OAuth 2.0", "AWS Cognito"],
    metric: "99.9% Mobile Security Compliance"
  },
  {
    id: "saas",
    side: "left",
    image: "/image/enterpricesoftware/saas.jpg",
    title: "Enterprise SaaS Platform",
    badge: "Cloud Scale",
    shortDesc: "With our highly flexible, cloud-based software solutions, you can minimize infrastructure costs while ensuring seamless scalability, regular updates, and easy integration.",
    fullDesc: "Architect multi-tenant SaaS platforms built for extreme concurrency, automatic failover, localized compliance, and effortless third-party API connectivity.",
    features: [
      "Multi-tenant database architecture & isolation",
      "Automated CI/CD deployment pipelines",
      "Usage-based billing & subscription engines",
      "Global CDN & microservices orchestration"
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Node.js", "PostgreSQL"],
    metric: "10x Faster Deployment Cycles"
  },
  // {
  //   id: "bi-analytics",
  //   side: "left",
  //   image: "/image/enterpricesoftware/business.jpg",
  //   title: "Business Intelligence & Analytics Tools",
  //   badge: "AI Powered",
  //   shortDesc: "We turn your raw, complex datasets into clear and actionable business intelligence, helping your team confidently execute high-level strategic decisions.",
  //   fullDesc: "Extract actionable insights through real-time streaming pipelines, predictive machine learning models, and executive dashboard visualization suites.",
  //   features: [
  //     "Real-time ETL data pipeline processing",
  //     "Predictive analytics & forecast modeling",
  //     "Custom interactive BI dashboards",
  //     "Role-based data access controls"
  //   ],
  //   techStack: ["Python", "Apache Spark", "Snowflake", "PowerBI", "ClickHouse"],
  //   metric: "85% Faster Insight Delivery"
  // },
  {
    id: "erp",
    side: "left",
    image: "/image/enterpricesoftware/enterprise.webp",
    title: "Enterprise Resource Planning (ERP) Software",
    badge: "Core Ops",
    shortDesc: "Integrated and robust systems that connect core business functions such as finance, operations, inventory, and procurement for better visibility and control.",
    fullDesc: "Replace fragmented legacy software with a unified modular ERP solution engineered to streamline ledger accounting, supply chains, and asset management.",
    features: [
      "Centralized financial ledger & automated reporting",
      "Real-time inventory tracking & auto-restock",
      "Procurement & vendor management workflows",
      "Regulatory auditing & compliance trails"
    ],
    techStack: ["Java / Spring Boot", "Oracle Enterprise", "GraphQL", "SAP Connectors"],
    metric: "40% Operational Efficiency Gain"
  },
  {
    id: "project-mgmt",
    side: "right",
    image: "/image/enterpricesoftware/project.jpeg",
    title: "Project Management Software",
    badge: "Agile Scale",
    shortDesc: "Comprehensive tools that streamline project planning, team collaboration, resource allocation, and progress tracking to ensure timely and successful project delivery.",
    fullDesc: "Coordinate complex multi-department projects with automated resource allocation, Gantt charts, real-time collaboration engines, and velocity forecasting.",
    features: [
      "Interactive Kanban, Gantt, and Sprint views",
      "AI-driven resource bottleneck detection",
      "Time tracking & cost estimation models",
      "Slack / Teams / Jira native integrations"
    ],
    techStack: ["React", "WebSockets", "Go", "Redis", "Elasticsearch"],
    metric: "35% Shorter Time-To-Market"
  },
  {
    id: "crm",
    side: "right",
    image: "/image/enterpricesoftware/crm.jpeg",
    title: "Customer Relationship Management (CRM) Systems",
    badge: "360° View",
    shortDesc: "Intelligent platforms that centralize customer data, streamline interactions, and enhance relationship management to boost sales performance and customer satisfaction.",
    fullDesc: "Supercharge your pipeline with 360-degree customer profiling, automated lead scoring, omni-channel support ticketing, and predictive sales forecasting.",
    features: [
      "Automated lead capture & AI scoring",
      "Omnichannel chat, email, and phone integration",
      "Pipeline stage automation & alerts",
      "Customer lifetime value analytics"
    ],
    techStack: ["Python", "GraphQL", "PostgreSQL", "Kafka", "Salesforce API"],
    metric: "2.8x Higher Lead Conversion"
  },
  // {
  //   id: "hrms",
  //   side: "right",
  //   image: "/image/enterpricesoftware/human.jpeg",
  //   title: "Human Resource Management Systems (HRMS)",
  //   badge: "Workforce",
  //   shortDesc: "Get end-to-end HR solutions that efficiently manage employee information, payroll, recruitment, attendance, and performance to improve workforce productivity.",
  //   fullDesc: "Transform human capital management with automated payroll engines, global talent onboarding portals, performance review frameworks, and attendance analytics.",
  //   features: [
  //     "Automated payroll & tax deduction engines",
  //     "Global recruitment & applicant tracking (ATS)",
  //     "Employee self-service mobile portal",
  //     "Performance KPIs & continuous feedback"
  //   ],
  //   techStack: ["TypeScript", "Next.js", "Docker", "Stripe Connect", "SendGrid"],
  //   metric: "60% Less HR Admin Overhead"
  // },
  {
    id: "supply-chain",
    side: "right",
    image: "/image/enterpricesoftware/supply.jpeg",
    title: "Supply Chain Management Software",
    badge: "Logistics",
    shortDesc: "We streamline your entire distribution process from end to end, eliminating supply chain bottlenecks and creating a leaner operation that protects your bottom line.",
    fullDesc: "Achieve total supply chain transparency with live GPS tracking, warehouse management systems (WMS), automated dispatching, and route optimization algorithms.",
    features: [
      "Live GPS fleet tracking & geo-fencing",
      "Warehouse automated picking & packing",
      "Route optimization algorithms",
      "Supplier EDI integration & customs tracking"
    ],
    techStack: ["Rust", "Node.js", "Mapbox API", "MQTT Protocol", "TimescaleDB"],
    metric: "28% Reduced Fuel & Freight Costs"
  }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerRef = useRef(null);
  const hubRef = useRef(null);
  const cardRefs = useRef({});

  const [lines, setLines] = useState([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const leftSolutions = SOLUTIONS.filter((s) => s.side === "left");
  const rightSolutions = SOLUTIONS.filter((s) => s.side === "right");

  const updateLines = useCallback(() => {
    if (!containerRef.current || !hubRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const hubRect = hubRef.current.getBoundingClientRect();

    if (containerRect.width === 0 || hubRect.width === 0) return;

    const cWidth = containerRect.width;
    const cHeight = containerRect.height;
    setSvgSize({ width: cWidth, height: cHeight });

    const hubCenterX = hubRect.left + hubRect.width / 2 - containerRect.left;
    const hubCenterY = hubRect.top + hubRect.height / 2 - containerRect.top;
    const hubRadius = hubRect.width / 2;

    const newLines = [];

    SOLUTIONS.forEach((item) => {
      const el = cardRefs.current[item.id];
      if (!el) return;
      const cardRect = el.getBoundingClientRect();
      const isLeft = item.side === "left";

      // Card anchor: right-center for left cards, left-center for right cards
      const startX = isLeft
        ? cardRect.right - containerRect.left
        : cardRect.left - containerRect.left;
      const startY = cardRect.top + cardRect.height / 2 - containerRect.top;

      // Angle from hub center towards card
      const angle = Math.atan2(hubCenterY - startY, hubCenterX - startX);
      // Hub perimeter connection point
      const endX = hubCenterX - Math.cos(angle) * (hubRadius + 6);
      const endY = hubCenterY - Math.sin(angle) * (hubRadius + 6);

      const bendDist = 40;
      const bendX = isLeft ? startX + bendDist : startX - bendDist;
      const cp1X = isLeft
        ? bendX + (endX - bendX) * 0.4
        : bendX - (bendX - endX) * 0.4;
      const cp1Y = startY;
      const cp2X = endX - Math.cos(angle) * 35;
      const cp2Y = endY - Math.sin(angle) * 35;

      const d = `M ${startX} ${startY} L ${bendX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

      newLines.push({
        id: item.id,
        d,
        startX,
        startY,
        endX,
        endY,
        isLeft
      });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    updateLines();

    const handleResize = () => updateLines();
    window.addEventListener("resize", handleResize);

    let ro;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      ro = new ResizeObserver(() => updateLines());
      ro.observe(containerRef.current);
    }

    const timer = setTimeout(updateLines, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (ro) ro.disconnect();
      clearTimeout(timer);
    };
  }, [updateLines]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#dd0403] selection:text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(#1111110d_1px,transparent_1px),linear-gradient(90deg,#1111110d_1px,transparent_1px)] [background-size:48px_48px]" />

      <main className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:pt-16 pb-10">
        {/* Header section */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 ">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dd0403]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-[11px]">
                Solutions
              </span>
            </div>

            <h2 className="max-w-[1000px] text-[34px] font-[500] leading-[1.08] tracking-[-0.035em] text-[#111] sm:text-[44px] md:text-[50px] lg:text-[48px]">
              Our Enterprise Software Solutions
              <span className="text-[#dd0403] block">
                for Different Business Needs
              </span>
            </h2>
          </motion.div>

          <p className="max-w-[720px] text-[14px] font-[300] leading-6 text-black/55 sm:text-[14px] md:text-[14px] md:leading-relaxed">
            At Grafizen, we build powerful software ecosystems that tackle
            the unique operational hurdles of large-scale organizations.
            From optimizing your supply chain to empowering a mobile
            workforce, we deliver the specialized tools your team needs to
            stay productive and profitable.
          </p>
        </div>

        {/* Network layout container */}
        <div
          ref={containerRef}
          className="relative min-h-[580px] flex items-center justify-center py-4"
        >
          {/* CENTRAL GLOWING ECOSYSTEM HUB */}
          <div
            ref={hubRef}
            className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-60 h-60 rounded-full bg-white border-2 border-[#dd0403] shadow-[0_15px_50px_rgba(221,4,3,0.22)] p-6 text-center group transition-all duration-500 hover:scale-105"
          >
            {/* Outer Decorative Animated Ring */}
            <div className="absolute inset-2 rounded-full border border-dashed border-[#dd0403]/40 animate-[spin_25s_linear_infinite]" />
            {/* <div className="absolute inset-5 rounded-full border border-slate-100" /> */}
 <div className=" h-38 w-44 mt-6  rounded-full ">
              <img src="./image/enterpricesoftware/glogo.png" alt="" className="    h-full w-full " />
              </div>
            
          </div>

          {/* DYNAMIC CONNECTING CIRCUIT SVG PATHS */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox={svgSize.width ? `0 0 ${svgSize.width} ${svgSize.height}` : undefined}
            fill="none"
          >
            <defs>
              <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {lines.map((line) => {
              const isHovered = hoveredCard === line.id;
              return (
                <g key={line.id} className="transition-all duration-300">
                  {/* Glow underlay on hover */}
                  {isHovered && (
                    <path
                      d={line.d}
                      stroke="#dd0403"
                      strokeWidth="5"
                      strokeOpacity="0.3"
                      filter="url(#circuit-glow)"
                      fill="none"
                    />
                  )}

                  {/* Main line */}
                  <path
                    d={line.d}
                    stroke={isHovered ? "#dd0403" : "#cbd5e1"}
                    strokeWidth={isHovered ? "2.5" : "1.75"}
                    strokeDasharray={isHovered ? "6 4" : "none"}
                    className="transition-colors duration-300"
                    fill="none"
                  />

                  {/* Start dot on card edge */}
                  <circle
                    cx={line.startX}
                    cy={line.startY}
                    r={isHovered ? 4.5 : 3}
                    fill={isHovered ? "#dd0403" : "#94a3b8"}
                    className="transition-all duration-300"
                  />

                  {/* End dot on hub perimeter */}
                  <circle
                    cx={line.endX}
                    cy={line.endY}
                    r={isHovered ? 4.5 : 3}
                    fill={isHovered ? "#dd0403" : "#cbd5e1"}
                    className="transition-all duration-300"
                  />

                  {/* Pulsing ring on hub when hovered */}
                  {isHovered && (
                    <circle
                      cx={line.endX}
                      cy={line.endY}
                      r="8"
                      fill="none"
                      stroke="#dd0403"
                      strokeWidth="1.5"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* TWO-COLUMN CARDS CONTAINER */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-80 relative z-20">
            {/* LEFT COLUMN SOLUTIONS */}
            <div className="flex flex-col space-y-4">
              {leftSolutions.map((item) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) cardRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveSolution(item)}
                  className="group relative rounded-2xl p-4 cursor-pointer transition-all duration-300 border bg-white text-slate-900 border-slate-200/90 shadow-md shadow-slate-100 hover:border-[#dd0403] hover:shadow-xl hover:shadow-[#dd0403]/10 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0  bg-white p-1.5 flex items-center justify-center  group-hover:border-[#dd0403]/40  transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-base font-[400] truncate text-black group-hover:text-[#dd0403] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[13px] leading-relaxed line-clamp-2 font-[300] text-black/70">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                    <span className="text-[11px] font-medium text-[#dd0403]">
                      {item.metric}
                    </span>

                    <div className="flex items-center gap-1 font-semibold text-[11px] text-slate-700 group-hover:text-[#dd0403] transition-transform group-hover:translate-x-1">
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN SOLUTIONS */}
            <div className="flex flex-col space-y-4">
              {rightSolutions.map((item) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) cardRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveSolution(item)}
                  className="group relative rounded-2xl p-4 cursor-pointer transition-all duration-300 border bg-white text-slate-900 border-slate-200/90 shadow-md shadow-slate-100 hover:border-[#dd0403] hover:shadow-xl hover:shadow-[#dd0403]/10 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0  bg-white p-1.5 flex items-center justify-center  transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-base font-[400] truncate text-black group-hover:text-[#dd0403] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[13px] font-[300] leading-relaxed line-clamp-2 text-[black]/70 ">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                    <span className="text-[11px] font-medium text-[#dd0403]">
                      {item.metric}
                    </span>

                    <div className="flex items-center gap-1 font-semibold text-[11px] text-[black]/55 group-hover:text-[#dd0403] transition-transform group-hover:translate-x-1">
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIVE SOLUTION MODAL */}
        <AnimatePresence>
          {activeSolution && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSolution(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Close Button */}
                <button
                  onClick={() => setActiveSolution(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-white p-2 shadow-md shadow-[#dd0403]/10 flex items-center justify-center">
                    <img
                      src={activeSolution.image}
                      alt={activeSolution.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#dd0403] uppercase tracking-wider">
                      {activeSolution.badge} Solution
                    </span>
                    <h2 className="text-xl md:text-2xl font-[400] text-black/70">
                      {activeSolution.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-black/55 leading-relaxed  font-[300] mb-6">
                  {activeSolution.fullDesc}
                </p>

                {/* Key Capabilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-[400] text-black/70 uppercase tracking-wider mb-3">
                    Key Architectural Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSolution.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-black/55 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#dd0403] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-[400] text-black/55 uppercase tracking-wider mb-2">
                    Engineered With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSolution.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-slate-100 text-black/55 font-[300] border border-slate-200 "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Call To Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-black/55 text-xs font-semibold">
                    <Shield className="w-4 h-4 text-[#dd0403]" />
                    <span>Enterprise SLA & Governance Protected</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setActiveSolution(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#dd0403] hover:bg-[#bd0303] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-[#dd0403]/25"
                  >
                    <span>Book  Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}