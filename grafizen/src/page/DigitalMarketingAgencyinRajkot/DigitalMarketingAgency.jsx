import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import digital2 from "../../../public/digital2.png";
import insta from "../../../public/insta.png";
import face from "../../../public/face.png";
import whatsapp from "../../../public/whatsapp.png";
import technologyOne from "../../../public/image/technology (1).png";
import technology from "../../../public/image/technology.png";
import market from "../../../public/image/market.png";
import aiProcessor from "../../../public/image/CompleteServices/ai-processor.png";
import contentImage from "../../../public/image/CompleteServices/content.png";
import frontendProgramming from "../../../public/image/CompleteServices/front-end-programming.png";
import googleAds from "../../../public/image/CompleteServices/google-ads.png";
import idea from "../../../public/image/CompleteServices/idea.png";
import localSeo from "../../../public/image/CompleteServices/local-seo.png";
import marketing from "../../../public/image/CompleteServices/marketing.png";
import seoImage from "../../../public/image/CompleteServices/seo.png";
import { CometCard } from "../../components/ui/comet-card";
import IndustriesSection from "./IndustriesSection";

import {
  Search,
  Megaphone,
  Users,
  Globe2,
  FileText,
  Palette,
  Code2,
  Bot,
  Check,
  ArrowRight,
  ArrowUpRight,
  Target,
  Settings2,
  Zap,
  BarChart3,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Star,
  Shield,
  Layers,
  Cpu,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const services = [
  {
    id: "seo",
    number: "01",
    icon: Search,
    image: seoImage,
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    description:
      "Improve your visibility on Google and attract customers who are actively searching for your products or services. Our SEO approach builds sustainable organic visibility rather than relying only on paid advertising.",
    points: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Content Optimization",
      "Competitor Research",
      "Website Optimization",
      "SEO Performance Monitoring",
    ],
    accent: "#dd0403",
  },
  {
    id: "ppc",
    number: "02",
    icon: Megaphone,
    image: googleAds,
    title: "Google Ads & Performance Marketing",
    shortTitle: "Google Ads",
    tagline: "Reach High-Intent Customers Instantly.",
    description:
      "Reach high-intent customers when they are searching for your products or services. We continuously analyze campaign performance to improve targeting, traffic quality and conversions.",
    points: [
      "Google Search Ads",
      "Display Advertising",
      "Remarketing",
      "Conversion-Focused Campaigns",
      "Landing Page Optimization",
      "Campaign Tracking",
      "Performance Analysis",
    ],
    accent: "#dd0403",
  },
  {
    id: "social",
    number: "03",
    icon: Users,
    image: marketing,
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    tagline: "Build a Brand That People Actually Follow.",
    description:
      "Social media is more than posting regularly. Your brand needs a strategy that connects content with business objectives. We create strategies designed to increase brand awareness, engagement and customer interaction.",
    points: [
      "Social Media Strategy",
      "Instagram Marketing",
      "Facebook Marketing",
      "Creative Content",
      "Social Media Campaigns",
      "Paid Social Advertising",
      "Audience Engagement",
      "Performance Tracking",
    ],
    accent: "#dd0403",
  },
  {
    id: "local-seo",
    number: "04",
    icon: Globe2,
    image: localSeo,
    title: "Local SEO in Rajkot",
    shortTitle: "Local SEO",
    tagline: "Dominate Local Search. Win Local Customers.",
    description:
      "Want your business to appear when customers search for services in Rajkot? A strong local SEO strategy can help your business connect with customers searching for your services in your target location.",
    points: [
      "Google Business Profile Optimization",
      "Local Keyword Targeting",
      "Location-Based SEO",
      "Local Citation Building",
      "Review Management",
      "Maps Visibility",
      "Hyperlocal Content",
    ],
    accent: "#dd0403",
  },
  {
    id: "content",
    number: "05",
    icon: FileText,
    image: contentImage,
    title: "Content Marketing",
    shortTitle: "Content",
    tagline: "Content That Educates, Engages & Converts.",
    description:
      "Great digital marketing starts with useful content. We create content strategies that help businesses educate their audience, answer customer questions and establish authority within their industry.",
    points: [
      "Website Content",
      "SEO Blogs",
      "Landing Pages",
      "Social Media Content",
      "Brand Storytelling",
      "Marketing Copy",
      "Educational Content",
    ],
    accent: "#dd0403",
  },
  {
    id: "branding",
    number: "06",
    icon: Palette,
    image: idea,
    title: "Branding & Creative Marketing",
    shortTitle: "Branding",
    tagline: "A Brand That Stands Out and Stays Remembered.",
    description:
      "A successful digital strategy needs a memorable brand. Grafizen combines branding and digital marketing to help businesses create a consistent identity across online and offline channels.",
    points: [
      "Brand Identity",
      "Logo Design",
      "Graphic Design",
      "Social Media Creatives",
      "Advertising Creatives",
      "Packaging Design",
      "Marketing Materials",
      "Brand Communication",
    ],
    accent: "#dd0403",
  },
  {
    id: "web",
    number: "07",
    icon: Code2,
    image: frontendProgramming,
    title: "Website Design & Development",
    shortTitle: "Web Dev",
    tagline: "Modern Websites Built for Performance & Growth.",
    description:
      "Your website is the foundation of your digital presence. Grafizen develops modern digital experiences designed around business objectives, user experience and scalability.",
    points: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce Websites",
      "Web Applications",
      "Custom Software",
      "Mobile Applications",
      "UI/UX Design",
      "Digital Products",
    ],
    accent: "#dd0403",
  },
  {
    id: "ai",
    number: "08",
    icon: Bot,
    image: aiProcessor,
    title: "AI-Powered Digital Solutions",
    shortTitle: "AI & Automation",
    tagline: "Smarter Marketing Powered by AI & Automation.",
    description:
      "The future of digital marketing is data-driven and automated. Grafizen brings AI, automation and digital strategy together to help businesses explore smarter ways to market, communicate and operate.",
    points: [
      "Marketing Automation",
      "Customer Engagement",
      "Data-Driven Decision Making",
      "Business Process Automation",
      "AI-Enabled Digital Products",
      "Intelligent Customer Experiences",
    ],
    accent: "#dd0403",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn your business, goals, audience and current digital footprint.",
    icon: Target,
  },
  {
    number: "02",
    title: "Research",
    description: "We study your market, competitors and growth opportunities.",
    icon: Search,
  },
  {
    number: "03",
    title: "Strategize",
    description:
      "We build a custom digital strategy aligned with your objectives.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Our team implements across SEO, ads, content, social and tech.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Measure",
    description: "We track key metrics and analyze performance continuously.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Optimize",
    description: "We refine strategies using data to maximize your ROI.",
    icon: TrendingUp,
  },
];

const whyReasons = [
  {
    icon: Layers,
    title: "Digital + Creative + Technology",
    description:
      "Grafizen brings digital marketing, branding and technology together instead of treating them as separate services.",
  },
  {
    icon: Target,
    title: "Customized Digital Strategies",
    description:
      "Every business has different goals. We develop strategies based on your industry, audience, competition and growth objectives.",
  },
  {
    icon: Shield,
    title: "One Partner for Your Digital Presence",
    description:
      "From branding and website development to SEO, social media and performance marketing — one connected ecosystem.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Approach",
    description:
      "We combine creative thinking with modern technology to help businesses build future-ready digital experiences.",
  },
  {
    icon: TrendingUp,
    title: "Focus on Business Growth",
    description:
      "Our goal is meaningful business outcomes — visibility, qualified traffic, enquiries, leads and customer growth.",
  },
  {
    icon: Star,
    title: "Rajkot's Digital Specialists",
    description:
      "We understand the local business ecosystem and the unique digital challenges of businesses in Rajkot.",
  },
];
const stats = [
  {
    value: "8+",
    label: "Core Services",

    image: technology,
  },
  {
    value: "100%",
    label: "Strategy-Driven",

    image: market,
  },
  {
    value: "1 Roof",
    label: "Complete Digital Partner",
    image: technologyOne,
  },
  // {
  //   value: "Rajkot",
  //   label: "Locally Rooted",
  //   icon: MapPin,
  // },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const viewport = { once: true, amount: 0.12 };

/* ─────────────────────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[#dd0403]" />
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dd0403]">
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
function ServicePage() {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((s) => s.id === activeService);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-neutral-950">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        {/* <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-60 -top-40 h-[600px] w-[600px] rounded-full bg-[#dd0403]/6 blur-3xl" />
          <div className="absolute -left-60 bottom-0 h-[500px] w-[500px] rounded-full bg-[#dd0403]/4 blur-3xl" />
        </div> */}

        <div className="relative mx-auto max-w-[95%] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.85fr] lg:gap-12">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-5xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-3 rounded-full "
              >
                <span className="relative flex h-0.5 w-8">
                  {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dd0403]/50" /> */}
                  <span className="relative inline-flex h-0.5 w-8 rounded-full bg-[#dd0403]" />
                </span>
                <span className="text-xs font-[500] uppercase tracking-[0.15em] text-neutral-700 sm:text-[11px]">
                  Digital Marketing Agency in Rajkot
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-[500] leading-[1.05] tracking-[-0.03em] text-neutral-950 sm:text-5xl lg:text-3xl xl:text-[48px]"
              >
                Our Digital
                <span className="block">
                  Marketing{" "}
                  <span className=" text-[#dd0403]  bg-clip-text ">
                    Services
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-6"
              >
                A complete digital ecosystem combining SEO, performance
                marketing, social media, branding, web development and
                AI-powered solutions — all under one roof.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#dd0403] px-5 py-1.5   text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dd0403]/25"
                >
                  Start Your Digital Growth
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-white/50 px-5 py-1.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:border-[#dd0403] hover:text-[#dd0403]"
                >
                  Explore All Services
                  <ChevronDown size={17} />
                </a>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-8 flex flex-wrap items-center gap-y-3"
              >
                {stats.map((stat, i) => {
                  return (
                    <motion.div
                      key={stat.label}
                      variants={fadeUp}
                      className="flex items-center"
                    >
                      {/* Stat unit */}
                      <div className="group flex items-center gap-2.5 px-4 py-1.5">
                        {/* Icon dot accent */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dd0403]/10 transition-colors duration-300 group-hover:bg-[#dd0403]/20">
                          <img
                            src={stat.image}
                            alt=""
                            className="h-7 w-7 object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-base font-extrabold leading-none tracking-tight text-neutral-950 sm:text-lg">
                            {stat.value}
                          </div>
                          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400 sm:text-[11px]">
                            {stat.label}
                          </div>
                        </div>
                      </div>

                      {/* Divider — hidden after last item */}
                      {i < stats.length - 1 && (
                        <span className="h-8 w-px bg-neutral-300/60" />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem]   ">
                <img
                  src={digital2}
                  alt="Marketing team working together"
                  className="h-[400px] w-full rounded-[1.8rem] 
                  object-cover object-left sm:h-[400px]"
                />

                <motion.img
                  src={insta}
                  alt="Instagram"
                  animate={{ x: [10, 60, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 left-4 z-20 h-12 w-12 rounded-full sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 rotate-12"
                />

                <motion.img
                  src={face}
                  alt="Instagram"
                  animate={{ x: [10, 60, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-45 left-6 z-20 h-12 w-12 rounded-full sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 -rotate-40"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SERVICE EXPLORER ───────────────────────── */}
      <section
        id="services"
        className="relative overflow-hiddenpy-24 sm:py-32 lg:py-16"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#dd0403]/5 blur-3xl" /> */}
          {/* <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#dd0403]/4 blur-3xl" /> */}
          {/* <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" /> */}
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-0 max-w-2xl"
          >
            <SectionLabel>Our Services</SectionLabel>
          </motion.div>
          <div className=" flex items-end">
            <h2 className="mt-0 text-3xl font-[500] leading-14 tracking-tight text-neutral-950 sm:text-4xl lg:text-[48px]">
              Everything you need to{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#dd0403] via-[#f53b3b] to-[#ff6b6b] bg-clip-text text-transparent">
                  grow digitally.
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#dd0403] to-[#ff6b6b] opacity-30" />
              </span>
            </h2>
            <p className="mt-5 text-base leading-tight text-neutral-500 sm:text-md ">
              Select any service below to explore what we deliver — strategy,
              execution, and results.
            </p>
          </div>

          <div className="grid items-start mx-auto  max-w-[100%]  gap-6 
          lg:grid-cols-[280px_0.9fr] xl:grid-cols-[0.6fr_1.4fr] mt-10  ">
            {/* ── Sidebar tabs ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col gap-2 rounded-3xl border border-white/60 bg-white/30 p-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            >
              {services.map((service, idx) => {
                const Icon = service.icon;
                const isActive = service.id === activeService;
                return (
                  <motion.button
                    key={service.id}
                    variants={fadeUp}
                    onClick={() => setActiveService(service.id)}
                    onMouseEnter={() => setActiveService(service.id)}
                    onFocus={() => setActiveService(service.id)}
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-4 py-2 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#dd0403]/25 bg-white shadow-xl shadow-[#dd0403]/8"
                        : "border-white/60 bg-white/50 backdrop-blur-sm hover:border-white hover:bg-white/80 hover:shadow-md"
                    }`}
                  >
                    {/* Active left accent bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#dd0403] to-[#ff4444]" />
                    )}

                    {/* Icon */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#dd0403] to-[#ff4444] text-white shadow-md shadow-[#dd0403]/30"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-[#dd0403]/10 group-hover:text-[#dd0403]"
                      }`}
                    >
                      <Icon size={19} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[15px] font-bold leading-snug transition-colors ${
                          isActive
                            ? "text-neutral-950"
                            : "text-neutral-600 group-hover:text-neutral-800"
                        }`}
                      >
                        {service.shortTitle}
                      </p>
                      {/* <p className="mt-0.5 text-xs text-neutral-400">
                        Service {String(idx + 1).padStart(2, "0")}
                      </p> */}
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      size={16}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-[#dd0403]"
                          : "text-neutral-300 group-hover:translate-x-0.5 group-hover:text-[#dd0403]"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </motion.div>

            {/* ── Detail panel ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  x: 20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
          group
          relative
          overflow-hidden
          rounded-[1.5rem]
          border border-white/60
          bg-white/30
          p-8
          shadow-[0_2px_0px_rgba(0,0,0,0.10)]
          backdrop-blur-2xl
          backdrop-saturate-150
          sm:p-6
        "
              >
                {/* =====================================================
            GLASS BACKGROUND EFFECT
        ====================================================== */}

                {/* Top Right Red Glow */}
                <div
                  className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#dd0403]/10
            blur-[80px]
            transition-all
            duration-700
            group-hover:bg-[#dd0403]/20
          "
                />

                {/* Bottom Left Red Glow */}
                <div
                  className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#ff4444]/10
            blur-[70px]
          "
                />

                {/* Small Red Glow */}
                <div
                  className="
            pointer-events-none
            absolute
            right-1/4
            top-1/3
            h-40
            w-40
            rounded-full
            bg-red-300/10
            blur-[80px]
          "
                />

                {/* =====================================================
            GLASS HIGHLIGHT
        ====================================================== */}

                <div
                  className="
            pointer-events-none
            absolute
            inset-0
            rounded-[2.5rem]
            bg-gradient-to-br
            from-white/50
            via-white/10
            to-transparent
          "
                />

                {/* Top Glass Shine */}
                <div
                  className="
            pointer-events-none
            absolute
            left-8
            right-8
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            opacity-80
          "
                />

                {/* =====================================================
            DOT PATTERN
        ====================================================== */}

                <div
                  className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-40
            w-40
            opacity-20
          "
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #dd0403 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* =====================================================
            CONTENT
        ====================================================== */}

                <div className="relative z-10">
                  {/* =====================================================
              TOP ROW
          ====================================================== */}

                  <div className="flex items-start justify-between gap-4">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotate: 2,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-[#dd0403]
                  to-[#ff4444]
                  text-white
                  shadow-xl
                  shadow-[#dd0403]/30
                "
                      >
                        {React.createElement(active.icon, {
                          size: 24,
                        })}
                      </motion.div>

                      {/* Title */}
                      <div>
                        <p
                          className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#dd0403]
                  "
                        >
                          {active.shortTitle}
                        </p>

                        <h3
                          className="
                    mt-0
                    text-md
                    font-medium
                    leading-tight
                    tracking-tight
                    text-neutral-950
                    sm:text-2xl
                    lg:text-[17px]
                  "
                        >
                          {active.title}
                        </h3>
                      </div>
                    </div>

                    {/* Number */}
                    <span
                      className="
                hidden
                text-5xl
                font-black
                tracking-tighter
                text-neutral-100
                sm:block
              "
                    >
                      {active.number}
                    </span>
                  </div>

                  {/* =====================================================
              TAGLINE
          ====================================================== */}

                  <div
                    className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#dd0403]/15
              bg-[#dd0403]/5
              px-3
              pb-1.5
              pt-1
              backdrop-blur-md
            "
                  >
                    <span
                      className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#dd0403]
                shadow-[0_0_10px_rgba(221,4,3,0.6)]
              "
                    />

                    <p
                      className="
                text-xs
                font-semibold
                text-[#dd0403]
              "
                    >
                      {active.tagline}
                    </p>
                  </div>

                  {/* =====================================================
              DESCRIPTION
          ====================================================== */}

                  <p
                    className="
              mt-4
              text-base
              leading-6
              text-neutral-600
              sm:text-md
            "
                  >
                    {active.description}
                  </p>

                  {/* =====================================================
              WHAT'S INCLUDED
          ====================================================== */}

                  <div
                    className="
              mt-6
              rounded-2xl
              border
              border-white/70
              bg-white/35
              p-6
              shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
              backdrop-blur-xl
            "
                  >
                    <p
                      className="
                mb-5
                flex
                items-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-neutral-400
              "
                    >
                      <span
                        className="
                  h-px
                  w-4
                  bg-[#dd0403]/40
                "
                      />
                      What's Included
                    </p>

                    <ul
                      className="
                grid
                gap-3
                sm:grid-cols-2
              "
                    >
                      {active.points.map((point) => (
                        <motion.li
                          key={point}
                          whileHover={{
                            x: 4,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                        >
                          {/* Check */}
                          <span
                            className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#dd0403]
                      to-[#ff4444]
                      shadow-sm
                      shadow-[#dd0403]/20
                    "
                          >
                            <Check
                              size={11}
                              strokeWidth={3}
                              className="text-white"
                            />
                          </span>

                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* =====================================================
              CTA
          ====================================================== */}

                  <div
                    className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
            "
                  >
                    {/* Get Started */}
                    <motion.a
                      href="/contact"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                group/btn
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#dd0403]
                to-[#ff4444]
                px-7
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-[#dd0403]/25
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-[#dd0403]/30
              "
                    >
                      Get Started
                      <ArrowRight
                        size={16}
                        className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
                      />
                    </motion.a>

                    {/* Learn More */}
                    <motion.a
                      href="/contact"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/40
                px-7
                py-2.5
                text-sm
                font-semibold
                text-neutral-700
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#dd0403]/20
                hover:bg-white/60
                hover:text-[#dd0403]
                hover:shadow-md
              "
                    >
                      Learn More
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES CARDS GRID ─────────────────────────────── */}
      {/* <section className="bg-white py-20 sm:py-16">
        <div className="mx-auto max-w-[95%] px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mx-auto mb-10  "
          >
            <SectionLabel>Complete Services</SectionLabel>
            <div className="flex  items-end gap-3">
              <h2 className="text-3xl font-[500] leading-13 tracking-tight text-neutral-950 sm:text-4xl lg:text-[48px]">
                A complete digital ecosystem{" "}
                <span className="text-[#dd0403]">under one roof.</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
                From the first Google search to the final conversion, we cover
                every touchpoint in your customer's digital journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%] mx-auto"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </div>
      </section> */}

      <IndustriesSection />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────────── */
function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <CometCard className="h-full">
      <motion.article
        variants={fadeUp}
        className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl bg-white border border-neutral-100 shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#dd0403]/20"
      >
        {/* Red top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#dd0403] via-[#ff4d4d] to-[#dd0403]/40 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col p-4 sm:p-5">
          {/* Top row: icon + number */}
          <div className="flex items-center justify-between absolute top-[15px]  ">
            <div
              className="flex h-20 w-20  -rotate-45  absolute  items-center justify-center rounded-xl 
            bg-[#dd0403]/8 text-[#dd0403] transition-all duration-300  group-hover:shadow-[0_4px_12px_rgba(221,4,3,0.25)]"
            >
              <div className="flex h-10 w-10 items-center justify-center mt-3 mr-3 rounded-xl  text-[#dd0403] transition-all duration-300  rotate-45 ">
                <img
                  src={service.image}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
              </div>
            </div>
            {/* <span className="text-[10px] font-black tracking-[0.2em] text-neutral-200 transition-colors duration-300 group-hover:text-[#dd0403]/50">
              {service.number}
            </span> */}
          </div>

          {/* Title + accent line */}
          <div className="mt-13">
            <h3 className="text-[0.95rem] font-bold leading-snug tracking-tight text-neutral-900">
              {service.title}
            </h3>
            <div className="mt-1.5 h-[2px] w-6 rounded-full bg-[#dd0403]/30 transition-all duration-500 group-hover:w-12 group-hover:bg-[#dd0403]" />
          </div>

          {/* Description */}
          <p className="mt-2 text-xs leading-[1.65] text-neutral-500 line-clamp-2">
            {service.description}
          </p>

          {/* Divider */}
          <div className="mt-3 border-t border-neutral-100" />

          {/* Feature points as pill tags */}
          <div className="mt-3 flex-1">
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-widest text-neutral-300">
              What's included
            </p>
            <div className="flex flex-wrap gap-1">
              {service.points.slice(0, 4).map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1 rounded-md bg-neutral-50 border border-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 transition-all duration-300 group-hover:border-[#dd0403]/15 group-hover:bg-[#dd0403]/5 group-hover:text-[#dd0403]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#dd0403]/40 shrink-0 transition-colors duration-300 group-hover:bg-[#dd0403]" />
                  {point}
                </span>
              ))}
              {service.points.length > 4 && (
                <span className="inline-flex items-center rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-400">
                  +{service.points.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Soft corner glow */}
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-[#dd0403]/4 blur-xl transition-all duration-500 group-hover:bg-[#dd0403]/10 group-hover:scale-125" />
        </div>
      </motion.article>
    </CometCard>
  );
}

function ProcessCard({ step, index, total }) {
  const Icon = step.icon;
  const isLast = index === total - 1;
  return (
    <motion.div
      variants={fadeUp}
      className="relative rounded-[1.5rem] border border-neutral-200 bg-white p-6"
    >
      {/* connector line */}
      {!isLast && (
        <div className="absolute -right-2.5 top-1/2 hidden h-px w-5 -translate-y-1/2 bg-neutral-200 xl:block" />
      )}
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dd0403]/10 text-[#dd0403]">
          <Icon size={20} />
        </div>
        <span className="text-xs font-black tracking-widest text-neutral-200">
          {step.number}
        </span>
      </div>
      <h3 className="mt-5 font-bold text-neutral-950">{step.title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-500">
        {step.description}
      </p>
    </motion.div>
  );
}

function WhyCard({ reason }) {
  const Icon = reason.icon;
  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-[1.5rem] border border-neutral-200 bg-[#f7f5f1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#dd0403]/20 hover:bg-white hover:shadow-lg sm:p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dd0403]/10 text-[#dd0403] transition-all duration-300 group-hover:bg-[#dd0403] group-hover:text-white">
        <Icon size={22} />
      </div>
      <h3 className="mt-6 font-bold text-neutral-950">{reason.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-500">
        {reason.description}
      </p>
    </motion.div>
  );
}

export default ServicePage;
