import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Search,
  Megaphone,
  BarChart3,
  Target,
  TrendingUp,
  Sparkles,
  Users,
  Mail,
  MessageCircle,
  Zap,
  CheckCircle2,
  LineChart,
} from "lucide-react";
import girl from "../../../public/internet/bg.png";

const services = [
  {
    icon: Globe,
    title: "Website Marketing",
    description:
      "Drive targeted traffic to your website through strategic campaigns, landing page optimization, and conversion-focused design that turns visitors into customers.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Boost your online visibility with proven SEO strategies including keyword research, on-page optimization, technical SEO, and high-quality link building.",
  },
  {
    icon: Megaphone,
    title: "Pay-Per-Click Advertising",
    description:
      "Maximize your ROI with precisely targeted PPC campaigns on Google Ads and Bing, reaching customers actively searching for your products or services.",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description:
      "Build meaningful connections with your audience through strategic social media campaigns across Instagram, Facebook, LinkedIn, and emerging platforms.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns, automated workflows, and data-driven strategies that deliver measurable results.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    description:
      "Make informed decisions with comprehensive analytics, performance tracking, and transparent reporting that shows the real impact of your marketing investment.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Targeted Reach",
    text: "Connect with the right audience at the right time.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    text: "Track every click, lead, and conversion.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    text: "Strategies that grow with your business.",
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    text: "Stand out in a crowded digital space.",
  },
];

const process = [
  {
    step: "01",
    title: "Research & Analysis",
    description:
      "We analyze your business, industry, competitors, and target audience to build a strong marketing foundation.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Custom internet marketing strategies aligned with your business goals, budget, and growth targets.",
  },
  {
    step: "03",
    title: "Campaign Execution",
    description:
      "Launch and manage multi-channel campaigns with precision targeting and compelling messaging.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description:
      "Continuous optimization based on real-time data to maximize performance and scale what works.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function InternetMarketing() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative isolate min-h-screen overflow-hidden bg-white py-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:linear-gradient(#1111110d_1px,transparent_1px),linear-gradient(90deg,#1111110d_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-4 px-4 sm:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-y-0
          lg:gap-x-6 lg:px-16"
        >
          {/* =====================================================
              1. HEADING
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 flex flex-col justify-center lg:col-start-1 lg:row-start-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]"></span>
              <span>Internet Marketing Experts </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[760px] text-[28px] font-[500] leading-[0.98] text-[#111111] sm:text-[64px] md:text-[76px] lg:text-[68px] xl:text-[48px]">
              Marketing Experts
              <span className="block text-[#dd0403]">
                That Drive Real Growth.
              </span>
            </h1>
          </motion.div>

          {/* =====================================================
              2. IMAGE AREA
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-h-[400px] sm:min-h-[560px] lg:min-h-[680px] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:self-center"
          >
            {[
              {
                label: "Organic Traffic",
                value: "+178%",
                icon: TrendingUp,
                className: "left-[30%] top-[8%] sm:left-[30%] sm:top-[20%]",
                delay: 0.2,
              },
              {
                image: "/image/google.png",
                className: "left-[8%] top-[17%] sm:left-[15%] sm:top-[25%]",
                delay: 0.26,
                hideOnMobile: true,
              },
              {
                label: "Social Media",
                value: "+243%",
                icon: Users,
                className: "-left-2 top-[31%] sm:left-0 sm:top-[38%]",
                delay: 0.32,
              },
              {
                image: "/image/search.png",
                className: "right-[10%] top-[16%] sm:right-[25%] sm:top-[25%]",
                delay: 0.26,
              },
              {
                image: "/image/marketing (1).png",
                className: "left-[5%] top-[49%] sm:left-[10%] sm:top-[55%]",
                delay: 0.26,
              },
              {
                label: "Leads Generated",
                value: "+243%",
                icon: Users,
                className: "-right-2 top-[34%] sm:right-6 sm:top-[40%]",
                delay: 0.44,
              },
              {
                label: "Keywords Ranked",
                value: "+156%",
                icon: BarChart3,
                className: "-right-3 top-[53%] sm:right-6 sm:top-[58%]",
                delay: 0.56,
              },
              {
                label: "ROI Growth",
                value: "3.8x",
                icon: Target,
                className: "left-[28%] top-[84%] sm:left-[8%] sm:top-[67%]",
                delay: 0.68,
              },
            ].map((item) => {
              if (item.image) {
                return (
                  <motion.div
                    key={item.image}
                    initial={{ opacity: 0, y: 24, scale: 0.86 }}
                    animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
                    transition={{
                      opacity: { delay: item.delay, duration: 0.45 },
                      scale: { delay: item.delay, duration: 0.45 },
                      y: {
                        delay: item.delay,
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`absolute z-20 ${
                      item.hideOnMobile ? "hidden sm:flex" : "flex"
                    } h-10 w-10 items-center justify-center rounded-full bg-white p-1.5 shadow-[0_18px_45px_rgba(17,17,17,0.14)] sm:h-14 sm:w-14 sm:p-2 ${item.className}`}
                  >
                    <img
                      src={item.image}
                      alt="Google"
                      className="h-full w-full object-contain "
                    />
                  </motion.div>
                );
              }

              const MetricIcon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24, scale: 0.86 }}
                  animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
                  transition={{
                    opacity: { delay: item.delay, duration: 0.45 },
                    scale: { delay: item.delay, duration: 0.45 },
                    y: {
                      delay: item.delay,
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute z-20 flex w-[130px] items-center gap-2 rounded-xl border border-[#f2d8d8] bg-white/95 px-2 py-1.5 shadow-[0_5px_15px_rgba(17,17,17,0.14)] sm:w-40 sm:gap-3 sm:px-3 sm:py-2 ${item.className}`}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdeaea] text-[#dd0403] sm:h-10 sm:w-10">
                    <MetricIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="truncate text-[10px] font-semibold text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-base font-bold leading-none text-[#dd0403] sm:text-xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[8px] text-gray-400">
                      vs Last 6 Months
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex justify-center">
              <div className="h-[370px] w-auto overflow-hidden rounded-full sm:h-[550px]">
                <img
                  src={girl}
                  alt="Digital marketing expert managing social media channels"
                  className="h-full w-auto max-w-[90vw] object-contain lg:drop-shadow-[0_34px_40px_rgba(17,17,17,0.22)] sm:w-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              3. CONTENT
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 flex flex-col justify-center lg:col-start-1 lg:row-start-2"
          >
            {/* Intro */}
            <div className="max-w-[700px]">
              <h2 className="font-semibold leading-tight text-[#241818] sm:text-2xl md:text-xl">
                Grow Your Business With Strategic Marketing
              </h2>

              <p className="mt-4 text-[13px] leading-5 text-gray-700 sm:text-[15px]">
                Looking for trusted{" "}
                <span className="font-semibold text-gray-900">
                  Internet Marketing Experts ?
                </span>{" "}
                We create data-driven digital marketing strategies that help
                businesses increase visibility, attract the right audience,
                generate quality leads, and grow online.
              </p>

              <p className="mt-3 text-[13px] leading-5 text-gray-700 sm:text-[15px] md:mt-4">
                Google Ads to social media, content marketing, and performance
                campaigns, we focus on{" "}
                <span className="font-semibold text-gray-900">
                  measurable results and sustainable business growth.
                </span>
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid max-w-[550px] grid-cols-3 gap-1 sm:grid-cols-3 md:gap-3">
              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-2 shadow-[0_12px_30px_rgba(17,17,17,0.06)] md:p-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/internet/customer-engagement.png"
                    alt="Client satisfaction"
                    className="h-6 w-7 object-contain md:h-10 md:w-10"
                  />
                  <div className="text-xl font-[800] leading-none md:text-4xl">
                    95<span className="text-[#dd0403]">%</span>
                  </div>
                </div>
                <p className="mt-1 text-center text-xs text-gray-700 md:mt-2 md:text-left md:text-sm md:leading-5">
                  Client Satisfaction
                </p>
              </div>

              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-2 shadow-[0_12px_30px_rgba(17,17,17,0.06)] md:p-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/internet/wealth.png"
                    alt="Average ROI growth"
                    className="h-6 w-7 object-contain md:h-10 md:w-10"
                  />
                  <div className="text-xl font-[800] leading-none md:text-4xl">
                    3<span className="text-[#dd0403]">x</span>
                  </div>
                </div>

                <p className="mt-2 text-center text-xs text-gray-700 md:text-left md:text-sm md:leading-5">
                  Average ROI Growth
                </p>
              </div>

              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-2 shadow-[0_12px_30px_rgba(17,17,17,0.06)] md:p-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src="/internet/marketing-automation.png"
                    alt="Campaigns managed"
                    className="h-6 w-7 object-contain md:h-10 md:w-10"
                  />
                  <div className="text-xl font-[800] leading-none md:text-4xl">
                    120<span className="text-[#dd0403]">+</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-xs text-gray-700 md:text-left md:text-sm md:leading-5">
                  Campaigns Managed
                </p>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              4. LAST BUTTON
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 flex w-full md:w-fit items-center gap-3 sm:gap-4 lg:col-start-1 lg:row-start-3"
          >
            <motion.a
              href="https://grafizen.com/contact-us"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex-1 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#dd0403] px-3 sm:px-6 py-2.5 text-[13px] sm:text-base font-semibold text-white lg:shadow-[0_5px_5px_rgba(17,17,17,0.22)] transition hover:bg-[#dd0403]"
            >
              <span className="hidden sm:inline whitespace-nowrap ">Get a Free </span>Consultation
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 size-4 md:size-5 shrink-0"
              />
            </motion.a>

            <motion.a
              href="https://grafizen.com/service"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex-1 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#111111]/15 bg-white/85 px-3 sm:px-6 py-2.5 text-[13px] sm:text-base font-semibold text-gray-900 
              lg:shadow-[0_14px_35px_rgba(17,17,17,0.08)] transition hover:border-[#dd0403] hover:text-[#dd0403]"
            >
              <span className="hidden sm:inline">Explore Our </span>Services
              <ArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 size-4 md:size-5 shrink-0"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}

      {/* =========================================================
          OUR PROCESS SECTION
      ========================================================= */}

      {/* =========================================================
          WHY CHOOSE US SECTION
      ========================================================= */}

      {/* =========================================================
          CTA SECTION
      ========================================================= */}
      {/* <section
        id="contact"
        className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#111111] px-7 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#dd0403]">
            Let's Grow Together
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-1.5px] sm:text-5xl lg:text-6xl">
            Ready to dominate the
            <span className="text-[#dd0403]"> internet?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Let's build an internet marketing strategy that brings more
            visibility, qualified leads, and measurable growth to your business
            in Rajkot and beyond.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#dd0403] px-8 py-4 font-semibold text-white transition hover:bg-[#b90303]"
          >
            Get a Free Consultation
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
      </section> */}
    </main>
  );
}
