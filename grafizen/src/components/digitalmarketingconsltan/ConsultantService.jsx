import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import email from "../../../public/image/emailpage/emialservice.png";
import advertising from "../../../public/image/emailpage/advertising.png";
import conversion from "../../../public/image/emailpage/good-conversion-rate.png";
import people from "../../../public/image/emailpage/people.png";
import growth from "../../../public/image/growth.png";
import conslaten from "../../../public/image/conslatanservice.png";

const serviceCards = [
  {
    icon: people,
    alt: "Strategic growth planning",
    title: "Strategic Growth Planning",
    desc: "Custom digital roadmaps tailored around your specific business goals, target audience, and local market.",
  },
  {
    icon: advertising,
    alt: "Multi-channel campaign execution",
    title: "Targeted Multi-Channel Campaigns",
    desc: "Data-driven strategy across Google, Meta, and Email to reach high-intent prospects at the right time.",
  },
  {
    icon: conversion,
    alt: "Funnel and conversion optimization",
    title: "Turn Visitors Into Clients",
    desc: "Optimize landing pages and sales paths to turn casual website visitors into real, more paying clients.",
  },
  {
    icon: growth,
    alt: "Performance tracking and reporting",
    title: "Performance Tracking",
    desc: "Transparent 1-on-1 reporting focused purely on sales, cost per lead, and bottom-line business growth.",
  },
];

export default function MarketingConsultingService() {
  return (
    <section className="relative bg-white px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1300px]">
        {/* Header Section */}
        <div className="mb-6 grid lg:gap-8  lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]"></span>
              <span> DIGITAL MARKETING CONSULTING</span>
            </div>

            <h2 className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[48px] text-black sm:text-[42px] text-[28px]">
              Digital Marketing{" "}
              <span className="text-[#dd0403]">
                Consulting <br />
              </span>{" "}
              for Business Growth
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="mt-6 max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]">
              Build a clear growth strategy with data-driven marketing
              campaigns, sales funnels, and personal guidance designed to
              increase visibility, attract qualified leads, and maximize
              revenue.
            </p>
          </div>
        </div>

        {/* ==========================================
            MOBILE & TABLET VIEW (< lg)
            One horizontal auto infinite scrolling row for all cards
        ========================================== */}
        <div className="lg:hidden space-y-6 mt-6">
          {/* Illustration Image */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[340px] max-h-[220px]">
              <img
                src={conslaten}
                alt="Digital marketing consulting and growth strategy"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Cards Infinite Horizontal Marquee */}
          <div className="overflow-hidden w-full py-2">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear",
              }}
            >
              {[...serviceCards, ...serviceCards].map((card, index) => (
                <div
                  key={index}
                  className="w-[280px] xs:w-[300px] shrink-0 flex gap-3 rounded-2xl border border-[#dd0403] p-3.5 bg-white shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold leading-tight text-gray-900">
                      {card.title}
                    </h4>
                    <p className="text-[13px] leading-tight text-black/55">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ==========================================
            DESKTOP / LAPTOP VIEW (>= lg)
            100% Unchanged original 3-column grid
        ========================================== */}
        <div className="hidden lg:grid grid-cols-[minmax(0,1fr)_minmax(340px,440px)_minmax(0,1fr)] items-center gap-8">
          {/* Left cards */}
          <div className="grid gap-10">
            <div className="flex gap-3 border p-3 rounded-2xl border-[#dd0403] ">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={people}
                  alt="Strategic growth planning"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div>
                <h4 className="mb-1 text-[14px] font-semibold leading-tight text-gray-900">
                  Strategic Growth Planning
                </h4>
                <p className="text-[13px] leading-tight text-black/55">
                  Custom digital roadmaps tailored around your specific business
                  goals, target audience, and local market.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#dd0403] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={advertising}
                  alt="Multi-channel campaign execution"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div>
                <h4 className="mb-1 text-[14px] font-semibold leading-tight text-gray-900">
                  Targeted Multi-Channel Campaigns
                </h4>
                <p className="text-[13px] leading-tight text-black/55">
                  Data-driven strategy across Google, Meta, and Email to reach
                  high-intent prospects at the right time.
                </p>
              </div>
            </div>
          </div>

          {/* Center illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[440px]">
              <img
                src={conslaten}
                alt="Digital marketing consulting and growth strategy"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Right cards */}
          <div className="grid gap-10">
            <div className="flex gap-3 rounded-2xl border border-[#dd0403] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={conversion}
                  alt="Funnel and conversion optimization"
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <h4 className="mb-1 text-[14px] font-semibold leading-tight text-gray-900">
                  Turn Visitors Into Clients
                </h4>
                <p className="text-[13px] leading-tight text-gray-600">
                  Optimize landing pages and sales paths to turn casual website
                  visitors into real, more  paying clients.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#dd0403] p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dd0403]/15 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={growth}
                  alt="Performance tracking and reporting"
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <h4 className="mb-1 text-[14px] font-semibold leading-tight text-gray-900">
                  Performance Tracking
                </h4>
                <p className="text-[13px] leading-tight text-black/55">
                  Transparent 1-on-1 reporting focused purely on sales, cost per
                  lead, and bottom-line business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
