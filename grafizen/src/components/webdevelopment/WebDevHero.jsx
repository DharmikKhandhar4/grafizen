import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap, Search, Gauge } from "lucide-react";

const WebDevHero = () => {
  const features = [
    "Custom Website & Web App Development",
    "Responsive & Mobile-First Design",
    "SEO-Optimized & High-Performance Builds",
    "Scalable Architecture & Cloud Deployment",
  ];

  const brands = [
    { name: "Google", logo: "/image/digitalmarketing/clientlogo.png" },
    { name: "Microsoft", logo: "/image/digitalmarketing/clientlogo2.png" },
    { name: "Amazon", logo: "/image/digitalmarketing/clientlogo3.png" },
    { name: "Samsung", logo: "/image/digitalmarketing/clientlogo4.png" },
    { name: "Adobe", logo: "/image/digitalmarketing/clientlogo5.png" },
  ];

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "5★", label: "Average Rating" },
    { value: "98%", label: "Client Retention Rate" },
  ];

  const floatingBadges = [
    { icon: Search, label: "SEO Ready", top: "12%", right: "2%" },
    { icon: Zap, label: "Blazing Fast", top: "18%", right: "30%" },
    { icon: Shield, label: "Secure", bottom: "19%", left: "8%" },
    { icon: Gauge, label: "99.9% Uptime", bottom: "19%", right: "4%" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      {/* <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      /> */}

      {/* Red top accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#dd0403] z-10" /> */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[720px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8 py-20 lg:py-0">

          {/* ─── LEFT CONTENT ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 max-w-[620px]"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/45 mb-3"
            >
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Web Development Company</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[32px] font-[600] leading-[1.1] tracking-[-0.02em] sm:text-[38px] md:text-[44px] lg:text-[48px]"
            >
              We Build{" "}
              <span className="text-[#dd0403]">Websites</span>{" "}
              That Work On{" "}
              <span className="relative inline-block">
                Every Device
                {/* <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#dd0403] origin-left"
                /> */}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15px] font-[300] leading-[1.8] text-black/55 sm:text-[16px]"
            >
              Deliver seamless, responsive user experiences across desktop, tablet,
              and mobile with our expert development services. We create
              high-performance websites optimized for growth and conversion.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2.5}
                    className="shrink-0 text-[#dd0403]"
                  />
                  <span className="text-[13px] font-[300] leading-5 text-black/55">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#dd0403] px-5 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#bd0303]"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} strokeWidth={2} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#dd0403] px-5 text-[14px] font-medium text-[#dd0403] transition hover:-translate-y-0.5 hover:bg-[#dd0403]/5"
              >
                See Portfolio
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-8 border-t border-black/8 pt-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-[22px] font-[600] text-center
                   leading-none text-black">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-[300] uppercase tracking-[0.15em] text-black/45">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: 3D Device Stack ─── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex-1 flex items-center justify-center min-h-[480px] lg:min-h-[600px]"
          >
            {/* Floating Badge Pills */}
            {floatingBadges.map(({ icon: Icon, label, ...pos }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                style={{
                  position: "absolute",
                  zIndex: 20,
                  animationDuration: `${3 + i * 0.5}s`,
                  ...pos,
                }}
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-lg"
              >
                <Icon size={14} className="text-[#dd0403]" strokeWidth={2} />
                <span className="text-[12px] font-[500] text-black/70">{label}</span>
              </motion.div>
            ))}

            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="h-[300px] w-[500px] rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #dd0403 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* ── DEVICE MOCKUP STACK ── */}
            <div className="relative w-full max-w-[520px] select-none">

              {/* Desktop Monitor */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, rotateX: 4 }}
                style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
                className="relative z-10 mx-auto w-full"
              >
                {/* Monitor frame */}
                <div className="rounded-xl border-2 border-[#dd0403]/30 bg-white shadow-2xl overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 border-b border-black/8">
                    <div className="h-3 w-3 rounded-full bg-[#dd0403]" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <div className="mx-auto flex-1 max-w-[180px] rounded-full bg-white border border-black/10 px-3 py-0.5 text-[10px] text-black/30 text-center">
                      grafizen.dev
                    </div>
                  </div>
                  {/* Screen preview */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-4 min-h-[180px]">
                    {/* Fake website preview */}
                    <div className="w-full rounded-lg bg-white border border-black/8 shadow-sm p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-4 w-20 rounded bg-[#dd0403]/20" />
                        <div className="flex gap-2">
                          <div className="h-3 w-10 rounded bg-black/10" />
                          <div className="h-3 w-10 rounded bg-black/10" />
                          <div className="h-3 w-10 rounded bg-black/10" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="h-5 w-32 rounded bg-black/80 mb-2" />
                          <div className="h-3 w-28 rounded bg-black/15 mb-1" />
                          <div className="h-3 w-24 rounded bg-black/10 mb-3" />
                          <div className="h-7 w-24 rounded-full bg-[#dd0403]" />
                        </div>
                        <div className="rounded-lg bg-gray-100 h-[90px]" />
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="rounded-lg bg-gray-50 border border-black/5 p-2">
                            <div className="h-5 w-5 rounded-full bg-[#dd0403]/20 mb-1.5" />
                            <div className="h-2 w-full rounded bg-black/10 mb-1" />
                            <div className="h-2 w-3/4 rounded bg-black/6" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Monitor stand */}
                <div className="mx-auto mt-0 w-12 h-4 bg-gray-200 rounded-b-lg" />
                <div className="mx-auto w-24 h-1.5 bg-gray-300 rounded-full" />
              </motion.div>

              {/* Tablet */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: -20, y: -40 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: -30, y: -50 }}
                className="absolute left-0 bottom-0 z-20 w-[180px]"
              >
                <div className="rounded-2xl border-[3px] border-[#dd0403]/40 bg-white shadow-xl overflow-hidden">
                  <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-center">
                    <div className="h-1 w-8 rounded-full bg-gray-600" />
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-2 min-h-[130px]">
                    <div className="rounded-lg bg-white border border-black/8 p-2 h-full">
                      <div className="h-10 rounded-md bg-[#dd0403]/10 mb-2" />
                      <div className="h-2 w-full rounded bg-black/10 mb-1" />
                      <div className="h-2 w-3/4 rounded bg-black/8 mb-1" />
                      <div className="h-5 w-16 rounded-full bg-[#dd0403] mt-2" />
                    </div>
                  </div>
                  <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-center">
                    <div className="h-1 w-4 rounded-full bg-gray-600" />
                  </div>
                </div>
              </motion.div>

              {/* Mobile Phone */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 20, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 30, y: -30 }}
                className="absolute right-0 bottom-0 z-20 w-[100px]"
              >
                <div className="rounded-3xl border-[3px] border-[#dd0403]/50 bg-gray-900 shadow-xl overflow-hidden">
                  <div className="bg-gray-900 py-2 flex items-center justify-center">
                    <div className="h-1 w-8 rounded-full bg-gray-700" />
                  </div>
                  <div className="bg-gradient-to-b from-white to-gray-50 p-1.5 min-h-[170px]">
                    <div className="rounded-xl bg-white border border-black/8 p-2 h-full">
                      <div className="h-8 rounded-lg bg-[#dd0403]/15 mb-2" />
                      <div className="h-1.5 w-full rounded bg-black/10 mb-1" />
                      <div className="h-1.5 w-4/5 rounded bg-black/8 mb-1" />
                      <div className="h-1.5 w-3/4 rounded bg-black/6 mb-2" />
                      <div className="h-5 w-full rounded-full bg-[#dd0403]" />
                    </div>
                  </div>
                  <div className="bg-gray-900 py-2 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full border border-gray-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── TRUSTED BY BRANDS ─── */}
      {/* <div className="relative z-10 border-t border-black/8 bg-white py-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8"
        >
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
            Trusted By Brands
          </p>
          <div className="mx-auto mb-3 h-[2px] w-8 bg-[#dd0403]" />
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-14 md:gap-20 lg:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex h-14 w-[120px] shrink-0 items-center justify-center md:w-[140px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-9 max-w-[120px] object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div> */}
    </section>
  );
};

export default WebDevHero;

