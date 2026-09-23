import React from "react";
import leftImg from "/image/customsoftwear/left.jpeg";
import rightImg from "/image/customsoftwear/right.jpeg";
import cfo from "../../../public/image/customsoftwear/cfo.webp"
import cto from "../../../public/image/customsoftwear/cto.png"
import {CloudUpload ,Lock } from "lucide-react" 

const caseStudies = [
  { icon1:CloudUpload,
    category: "SaaS & Cloud Infrastructure",
    icon: leftImg,
    title: "Scaling a SaaS Platform to 100K+ Active Daily Users",
    description:
      "Modernized backend architecture and automated multi-region deployment pipelines to support rapid user growth while optimizing server expenditure.",
    stats: [
      {
        value: "35%",
        label: "Reduced Cloud Overhead",
        highlight: true,
      },
      {
        value: "99.99%",
        label: "Uptime Achieved",
      },
    ],
    testimonial:
      "Their engineering team felt like an internal extension of our company.",
    author: "CTO, Leading SaaS Enterprise",
  },
  { icon1 : Lock,
    category: "Fintech & Security",
    icon: rightImg,
    title: "Building a High-Concurrency PCI-Compliant Payment Engine",
    description:
      "Engineered a low-latency, secure transaction processing service handling over $50M in daily payments with zero security incidents.",
    stats: [
      {
        value: "3x",
        label: "Faster Checkout Speed",
        highlight: true,
      },
      {
        value: "0",
        label: "Security Incidents",
      },
    ],
    testimonial:
      "Delivered our core fintech portal two months early with flawless compliance.",
    author: "Head of Product, FinTech Global",
  },
];

export default function SoftwareCaseStudies() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
           <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 md:text-[11px]
           text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Measurable Impact, Proven Results</span>
            </div>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
            Real Results for{" "}
            <span className="text-[#dd0403]">
              Forward-Thinking Companies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[13px] md:leading-6 text-black/55 sm:text-[14px]">
            Explore how our custom software solutions help enterprises scale
            infrastructure, lower operating costs, and maintain
            enterprise-grade reliability.
          </p>
        </div>

        {/* Case Study Cards */}
 <div className="flex gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-1 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-2 lg:gap-7">
  {caseStudies.map((study, index) => {
    return (
      <div
        key={index}
        className="group relative w-[88vw] shrink-0 overflow-hidden rounded-xl border border-black/15 bg-white p-4 md:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,4,3,0.12)] sm:w-[75vw] sm:p-5 md:w-auto md:shrink md:p-5"
      >
        {/* Category + Image */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full text-[#dd0403]  px-2.5 py-1.5 text-xs font-[400] border border-[#dd0403] bg-[#dd0403]/5 sm:px-3 sm:text-sm">
            <study.icon1 size={16} className="shrink-0" />
            <span className="truncate">{study.category}</span>
          </span>

          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
            <img
              src={study.icon}
              alt={study.category}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="md:mt-3 mt-1 max-w-[390px] text-lg font-[400] leading-[1.2] text-black sm:mt-2 sm:text-[23px]">
          {study.title}
        </h3>

        {/* Description */}
        <p className="md:mt-4 mt-3 max-w-[560px] text-[13px] leading-5 text-black/55 sm:mt-5 sm:text-[15px]">
          {study.description}
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
          {study.stats.map((stat, statIndex) => (
            <div
              key={statIndex}
              className={`flex min-h-[60px] flex-col items-center justify-center rounded-lg border px-2 py-2 text-center sm:min-h-[76px] ${
                stat.highlight
                  ? "border-[#dd0403]/50 bg-[#fff7f7]"
                  : "border-black/15 bg-[#fafafa]"
              }`}
            >
              <span className="text-md font-[400] leading-none text-[#dd0403] sm:text-3xl">
                {stat.value}
              </span>

              <span className="mt-1 text-[11px] font-[300] text-black sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-4 flex items-start gap-2.5 sm:mt-5 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5] sm:h-10 sm:w-10">
            <div className="text-xl grayscale">
              <img src={cto} alt="" />
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[13px] italic leading-5 text-black/55 font-[300] sm:text-sm">
              “{study.testimonial}”
            </p>

            <p className="mt-1.5 text-[13px] font-[400] text-black sm:mt-2 sm:text-sm">
              — {study.author}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}