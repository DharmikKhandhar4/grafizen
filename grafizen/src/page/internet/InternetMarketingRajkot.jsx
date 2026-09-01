import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Megaphone,
  // Instagram,
  FileText,
  Globe,
  MapPin,
  MessageCircle,
  BarChart3,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website's visibility on Google with technical SEO, keyword optimization, on-page SEO, local SEO, content strategy, and authority building.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & PPC Marketing",
    description:
      "Reach customers actively searching for your products or services with carefully planned Google Ads and PPC campaigns focused on leads and conversions.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage your target audience through strategic social media campaigns across Instagram, Facebook, LinkedIn, and other platforms.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Create useful, search-friendly content that answers customer questions, builds trust, strengthens your brand authority, and supports long-term growth.",
  },
  {
    icon: Globe,
    title: "Website & Landing Page Optimization",
    description:
      "Turn website visitors into customers with fast, responsive, user-friendly websites and conversion-focused landing pages.",
  },
  {
    icon: MapPin,
    title: "Local Internet Marketing",
    description:
      "Get discovered by customers searching for businesses in Rajkot and nearby areas through local SEO, Google Business Profile optimization, and location-focused marketing.",
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

export default function InternetMarketingRajkot() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-screen bg-white">
        {/* Background glow */}
        {/* <div className="pointer-events-none absolute left-[-180px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-red-300/40 blur-[110px]" /> */}

        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-2  py-10 px-10">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center px-6 py-6 sm:px-10 lg:px-16 xl:px-10"
          >
            {/* Eyebrow */}
            {/* <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3 text-sm font-medium sm:text-base"
            >
              <span className="text-lg">🔥</span>

              <span>
                India Focused. Global Standards.{" "}
                <span className="font-semibold">
                  Result Driven.
                </span>
              </span>
            </motion.div> */}

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-[800px] text-[48px] font-[500] leading-[0.98] tracking-[-2.5px] sm:text-[60px] md:text-[68px] lg:text-[48px] xl:text-[48px]"
            >
              Internet Marketing
              <br />

              <span className="text-[#dd0403]">
                Company
              </span>{" "}
              in Rajkot
            </motion.h1>

            {/* Intro */}
            <motion.div
              variants={fadeUp}
              className="mt-8 max-w-[690px]"
            >
              <h2 className="text-xl font-semibold leading-tight sm:text-xl">
                Grow Your Business With a Result-Driven Internet Marketing
                Company in Rajkot
              </h2>

              <p className="mt-4 text-base leading-5 text-gray-600 sm:text-[14px]">
                Looking for an experienced{" "}
                <span className="font-semibold text-gray-900">
                  internet marketing company near you in Rajkot?
                </span>{" "}
                We help businesses build a stronger online presence through
                strategic SEO, social media marketing, Google Ads, content
                marketing, website optimization, and conversion-focused
                digital campaigns.
              </p>

              <p className="mt-4 text-base leading-5 text-gray-600 sm:text-[14px]">
                Our internet marketing strategies are designed around your
                business goals, target audience, industry, and competition —
                helping you attract relevant visitors, generate quality leads,
                and turn online visibility into{" "}
                <span className="font-semibold text-gray-900">
                  measurable business growth.
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
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#dd0403] px-5 py-2 text-base font-semibold text-white transition hover:bg-[#dd0403]"
              >
                Get a Free Marketing Consultation

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-5 py-2 text-base font-semibold text-gray-900 transition hover:border-[#dd0403] hover:text-[#dd0403]"
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
              className="mt-8 flex  divide-x divide-gray-300 w-full"
            >
              <div className="pr-10">
                <div className="text-5xl font-[500] tracking-tight sm:text-[30px]">
                  95<span className="text-[#dd0403]">%</span>
                </div>

                <p className="mt-2  text-sm leading-5 text-gray-700 sm:text-md">
                  Clients Satisfied &
                  {/* <br /> */}
                  Repeating
                </p>
              </div>

              <div className="pl-10">
                <div className="text-5xl font-[500] tracking-tight sm:text-[30px]">
                  120<span className="text-[#dd0403]">+</span>
                </div>

                <p className="mt-2   text-sm leading-5 text-gray-700 sm:text-base">
                  Projects Completed in
                  {/* <br /> */}
                  11+ Countries
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
            className="relative min-h-[400px]   mt-44  max-h-[410px] lg:min-h-[400]"
          >
            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85"
                alt="Digital marketing team working on analytics"
                className="h-full w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
            </div>

            {/* =================================================
                ANALYTICS CARD
            ================================================= */}
          

            {/* =================================================
                FLOATING CONTACT CARD
            ================================================= */}
            <div   className="absolute -bottom-5  w-[300px] rounded-[18px]   bg-white p-4  sm:-left-6 sm:w-[320px] h-[220px]">
            
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute bottom-3 left-5 w-[280px]  rounded-[18px] bg-white p-4 shadow-2xl sm:left-2 sm:w-[280px]"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xl font-bold text-[#dd0403]">
                  SAY HI! 
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="text-xl font-bold leading-[1.05] tracking-tight">
                Ready to grow
                {/* <br /> */}
                your brand?
                <br />
                Let's talk.
              </h3>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <MessageCircle size={18} />
                </div>

                <p className="text-sm text-gray-600">
                  We usually reply
                  <br />
                  within a few minutes!
                </p>
              </div>
            </motion.div>

            {/* =================================================
                WHATSAPP
            ================================================= */}
            {/* <motion.a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 180,
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-10 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:right-8"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={30} fill="white" />
            </motion.a> */}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
     

      {/* =========================================================
          MARKETING APPROACH SECTION
      ========================================================= */}
   

      {/* =========================================================
          CTA
      ========================================================= */}

    </main>
  );
}