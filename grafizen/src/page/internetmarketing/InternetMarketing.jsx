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
import girl from "../../../public/image/men.png";


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
      <section className="relative isolate min-h-screen overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:linear-gradient(#1111110d_1px,transparent_1px),linear-gradient(90deg,#1111110d_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-white to-transparent" />

        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-10 px-6  sm:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:px-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex w-fit items-center gap-3  "
            >
              <span className="flex h-0.5 w-8 items-center justify-center rounded-lg bg-[#dd0403] text-white">
                {/* <Sparkles size={17} /> */}
              </span>

              <span className="text-sm font-semibold text-[#3b2b2b]">
                Internet Marketing Experts in Rajkot
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-[760px] text-[46px] font-[500] leading-[0.98] text-[#111111] sm:text-[64px] md:text-[76px] lg:text-[68px] xl:text-[48px]"
            >
              Internet Marketing Experts
              <span className="block text-[#dd0403]">
                That Drive Real Growth.
              </span>
            </motion.h1>

            {/* Intro */}
            <motion.div variants={fadeUp} className="mt-7 max-w-[700px]">
              <h2 className="text-xl font-semibold leading-tight text-[#241818] sm:text-2xl">
                Grow Your Business With Strategic Internet Marketing
              </h2>

              <p className="mt-4 text-base leading-5 text-gray-700 sm:text-[15px]">
                Looking for trusted{" "}
                <span className="font-semibold text-gray-900">
                  Internet Marketing Experts in Rajkot?
                </span>{" "}
                We create data-driven digital marketing strategies that help
                businesses increase visibility, attract the right audience,
                generate quality leads, and grow online.
              </p>

              <p className="mt-4 text-base leading-5 text-gray-700 sm:text-[15px]">
                From SEO and Google Ads to social media, content marketing, and
                performance campaigns, we focus on{" "}
                <span className="font-semibold text-gray-900">
                  measurable results and sustainable business growth.
                </span>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#dd0403] px-6 py-2 text-base font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.22)] transition hover:bg-[#dd0403]"
              >
                Get a Free Consultation
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-[#111111]/15 bg-white/85 px-6 py-2 text-base font-semibold text-gray-900 shadow-[0_14px_35px_rgba(17,17,17,0.08)] transition hover:border-[#dd0403] hover:text-[#dd0403]"
              >
                Explore Our Services
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-[550px] grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-3 shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
               <div className=" flex gap-3 ">
                <img
                  src="/internet/customer-engagement.png"
                  alt="Client satisfaction"
                  className=" h-10 w-10 object-contain"
                />
                <div className="text-4xl font-[800] leading-none">
                  95<span className="text-[#dd0403]">%</span>
                </div>
</div>
                <p className="mt-2 text-sm leading-5 text-gray-700">
                  Client Satisfaction
                </p>
              </div>

              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-3 shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
              <div className=" flex gap-3 ">
                  <img
                  src="/internet/wealth.png"
                  alt="Average ROI growth"
                  className=" h-10 w-10 object-contain"
                />
                <div className="text-4xl font-[800] leading-none">
                  3<span className="text-[#dd0403]">x</span>
                </div>
              </div>

                <p className="mt-2 text-sm leading-5 text-gray-700">
                  Average ROI Growth
                </p>
              </div>

              <div className="rounded-lg border border-[#111111]/10 bg-white/75 p-3 shadow-[0_12px_30px_rgba(17,17,17,0.06)]">
                 <div className=" flex gap-3 ">
                <img
                  src="/internet/marketing-automation.png"
                  alt="Campaigns managed"
                  className=" h-10 w-10 object-contain"
                />
                <div className="text-4xl font-[800] leading-none">
                  120<span className="text-[#dd0403]">+</span>
                </div>
</div>
                <p className="mt-2 text-sm leading-5 text-gray-700">
                  Campaigns Managed
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE AREA
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-h-[560px] lg:min-h-[680px]"
          >
            <div className="absolute inset-x-0 bottom-12 mx-auto h-[360px] w-[360px] rounded-full bg-white shadow-[0_35px_100px_rgba(17,17,17,0.12)] sm:h-[470px] sm:w-[470px] lg:bottom-10 lg:h-[440px] lg:w-[440px]" />
            <div className="absolute inset-x-8 bottom-24 mx-auto h-[180px] rounded-full bg-[#dd0403]/10 blur-3xl" />

            {[
              {
                src: "/insta.png",
                alt: "Instagram marketing",
                className: "left-[7%] top-[24%] h-18 w-18 rotate-[-16deg]",
                delay: 0.2,
              },
              {
                src: "/social-media.png",
                alt: "Facebook marketing",
                className: "left-[42%] top-[12%] h-18 w-18 rotate-[8deg]",
                delay: 0.32,
              },
              {
                src: "/whatsapp.png",
                alt: "WhatsApp campaign",
                className: "right-[9%] top-[19%] h-18 w-18 rotate-[18deg]",
                delay: 0.44,
              },
              {
                src: "/image/CompleteServices/google-ads.png",
                alt: "Google Ads marketing",
                className: "left-[4%] top-[43%] h-16 w-16 rotate-[12deg]",
                delay: 0.56,
              },
              {
                src: "/image/CompleteServices/marketing.png",
                alt: "Content marketing",
                className: "right-[4%] top-[45%] h-16 w-16 rotate-[-12deg]",
                delay: 0.68,
              },
            ].map((item) => (
              <motion.div
                key={item.alt}
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
                className={`absolute z-20 flex items-center justify-center rounded-full bg-white p-3 shadow-[0_18px_45px_rgba(17,17,17,0.18)] ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}

            {/* <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.38, duration: 0.8 }}
              className="absolute inset-x-0 bottom-12 z-10 mx-auto flex justify-center"
            >
              <img
                src={girl}
                alt="Digital marketing expert managing social media channels"
                className="h-[340px] w-auto object-contain drop-shadow-[0_34px_40px_rgba(17,17,17,0.22)] sm:h-[430px] lg:h-[500px] object-right-[20%]"
              />
            </motion.div> */}
            <motion.div className="absolute inset-x-0 bottom-14 z-10 mx-auto flex justify-center">
  <img
    src={girl}
    alt="Digital marketing expert managing social media channels"
    className="h-[340px] w-auto object-contain drop-shadow-[0_34px_40px_rgba(17,17,17,0.22)] sm:h-[430px] lg:h-[410px]  "
  />
</motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute bottom-6 left-4 z-30 rounded-lg border border-[#111111]/10 bg-white/95 p-4 shadow-[0_24px_60px_rgba(17,17,17,0.16)] backdrop-blur sm:left-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#dff7f0] text-[#047857]">
                  <CheckCircle2 size={21} />
                </div>
                <div>
                  <p className="font-bold text-[#111111]">120+ campaigns</p>
                  <p className="text-sm text-gray-600">Planned, launched, optimized.</p>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="absolute bottom-20 right-2 z-30 hidden rounded-lg bg-[#f8e2e2] p-4 text-white shadow-[0_24px_60px_rgba(17,17,17,0.22)] sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dd0403]">
                  <TrendingUp size={20} />
                </span>
                <div>
                  <p className="text-2xl font-[800] leading-none text-black">3x ROI</p>
                  <p className="mt-1 text-sm text-black/70">Growth focused</p>
                </div>
              </div>
            </motion.div> */}

          </motion.div>
          
        </div>
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
