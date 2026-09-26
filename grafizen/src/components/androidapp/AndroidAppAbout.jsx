import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  RotateCw,
} from "lucide-react";

const features = [
  {
    id: "01",
    icon: Code2,
    badge: "100% Native Fidelity",
    badgeColor: "bg-red-50 text-[#dd0403] border-red-200/60",
    title: "Native App Development",
    subtitle: "Java, Kotlin & Swift",
    description:
      "Deep integration with Android SDK and iOS APIs. We leverage Java, Kotlin, and Swift to unlock maximum device performance, fluid 120Hz UI responsiveness, and seamless hardware access.",
    highlights: [
      "Direct Hardware Access",
      "Zero-Latency 120Hz UI",
      "Platform-Specific Security",
      "Optimized Battery & Memory Performance",
    ],
    techTags: ["Java", "Kotlin", "Swift", "Android SDK", "iOS Native"],
  },
  {
    id: "02",
    icon: Layers,
    badge: "2x Faster Time-to-Market",
    badgeColor: "bg-rose-50 text-rose-600 border-rose-200/60",
    title: "Cross-Platform Solutions",
    subtitle: "React Native & Flutter",
    description:
      "Single-codebase efficiency without compromise. Using React Native and Flutter, we build unified applications that deliver a genuine native feel on both Android and iOS while reducing development overhead.",
    highlights: [
      "Shared Business Logic",
      "Near-Native 60 FPS",
      "Unified UI/UX Across OS",
      "Rapid Multi-Platform Deployment",
    ],
    techTags: ["React Native", "Flutter", "Single Codebase"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AndroidAppAbout() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background Soft Glow Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dd0403]/[0.035] blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#dd0403]/[0.035] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="max-w-[900px] mb-12 lg:mb-10">
          {/* Small Category Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/45 mb-3"
          >
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>WHO WE ARE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-[38px] lg:text-[46px] font-[600] leading-[1.1] tracking-tight text-[#111] max-w-[700px]"
          >
            Transforming Ideas into{" "}
            <span className="text-[#dd0403]">Seamless Experiences</span>
          </motion.h2>
        </div>

        {/* =========================================
            MAIN 2-COLUMN SECTION: STORY + 3D FLIP CARDS
        ========================================== */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* =========================================
              LEFT COLUMN: STORY & PARAGRAPHS
          ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div className="space-y-4 text-[14.5px] sm:text-[15px] font-[300] leading-[1.6] text-black/55">
              <motion.p variants={fadeUp}>
                At{" "}
                <strong className="font-semibold text-black">Grafizen</strong>,
                we turn innovative ideas into high-performance mobile
                applications designed around real business needs. Our
                development team builds robust mobile solutions for both{" "}
                <strong className="font-semibold text-[#dd0403]">
                  Android and iOS
                </strong>
                , using modern technologies and frameworks to deliver reliable,
                scalable, and user-friendly experiences.
              </motion.p>

              <motion.p variants={fadeUp}>
                From native app development with{" "}
                <span className="font-medium text-black">
                  Java, Kotlin, and Swift
                </span>{" "}
                to cross-platform solutions using{" "}
                <span className="font-medium text-black">
                  React Native and Flutter
                </span>
                , we choose the right technology based on your project
                requirements, business goals, and target audience.
              </motion.p>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: 3D FLIP CARDS
          ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((item) => {
              const Icon = item.icon;
              const isFlipped = !!flippedCards[item.id];

              return (
                <div
                  key={item.id}
                  className="group relative h-[300px] sm:h-[220px] w-full [perspective:1200px] cursor-pointer"
                  onMouseEnter={() =>
                    setFlippedCards((prev) => ({ ...prev, [item.id]: true }))
                  }
                  onMouseLeave={() =>
                    setFlippedCards((prev) => ({ ...prev, [item.id]: false }))
                  }
                  onClick={() => toggleFlip(item.id)}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="relative w-full h-full [transform-style:preserve-3d]"
                  >
                    {/* =========================================
                        FRONT FACE
                    ========================================== */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl border border-gray-200/90 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden">
                      {/* Top Accent Gradient Bar */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#dd0403] via-red-500 to-transparent" />

                      <div>
                        {/* Top Row: Icon + Badge */}
                        <div className="flex items-center  gap-5 mb-4">
                          <div className="flex  items-center justify-center rounded-2xl  text-[#dd0403] ">
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </div>

                          {/* <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.badgeColor}`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403] animate-pulse" />
                            {item.badge}
                          </span> */}
                   <div>
                             <h3 className="text-[18px] sm:text-[20px] font-[500] text-[#111] leading-tight group-hover:text-[#dd0403] transition-colors">
                          {item.title}
                        </h3>
                          <p className="text-[12px] font-medium text-black/45 mt-0.5">
                          {item.subtitle}
                        </p>
                   </div>

                        </div>

                        {/* Title & Subtitle */}
                      
                      
                        {/* Paragraph Description */}
                        <p className="text-[13px] font-[300] leading-[1.6] text-black/55 mt-3 line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Flip Hint Footer */}
                      {/* <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11.5px] font-medium text-black/45">
                        <span className="flex items-center gap-1.5 text-[#dd0403]">
                          <RotateCw className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" />
                          <span>Flip for tech & deliverables</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-black/35 group-hover:translate-x-1 transition-transform" />
                      </div> */}
                    </div>

                    {/* =========================================
                        BACK FACE
                    ========================================== */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border border-[#dd0403]/30 bg-gradient-to-b from-red-50/40 via-white to-white p-6 shadow-xl shadow-[#dd0403]/10 flex flex-col justify-between overflow-hidden">
                      {/* Top Accent Gradient Bar */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#dd0403]" />

                      <div>
                        {/* Header Row */}
                        <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-100">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#dd0403]">
                              Capability Details
                            </span>
                            <h4 className="text-[16px] font-[600] text-[#111]">
                              {item.title}
                            </h4>
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-[#dd0403]">
                            <RotateCw className="h-3.5 w-3.5" />
                          </div>
                        </div>

                        {/* Highlights List */}
                        <div className=" space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-black/45 block pt-1.5">
                            Key Deliverables
                          </span>
                          {item.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-[12.5px] text-black/75"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#dd0403]" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        {/* <div className="mt-2 pt-2 border-t border-gray-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-black/45 block mb-2">
                            Technologies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.techTags.map((tag, i) => (
                              <span
                                key={i}
                                className="rounded-md bg-stone-100 px-2 py-0.5 text-[10.5px] font-medium text-black/70 border border-gray-200/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div> */}
                      </div>

                      {/* Flip Back Hint */}
                      {/* <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-black/40">
                        <span>Click or leave to flip back</span>
                        <RotateCw className="h-3 w-3 text-[#dd0403]" />
                      </div> */}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
