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
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
           <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Measurable Impact, Proven Results</span>
            </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-[42px]">
            Real Results for{" "}
            <span className="text-[#dd0403]">
              Forward-Thinking Companies
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-black/55 sm:text-[14px]">
            Explore how our custom software solutions help enterprises scale
            infrastructure, lower operating costs, and maintain
            enterprise-grade reliability.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {caseStudies.map((study, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-black/15 bg-white p-4 shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(221,4,3,0.12)] sm:p-5"
              >
                {/* Category + Image */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#dd0403] px-3 py-1.5 text-xs font-[400] text-white sm:text-sm">
                    <study.icon1 size={16} />
                    {study.category}
                  </span>

                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
                    <img
                      src={study.icon}
                      alt={study.category}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-2 max-w-[390px] text-xl font-[400] leading-[1.15] text-black sm:text-[23px]">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-[560px] text-sm leading-5 text-black/55 sm:text-[15px]">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {study.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`flex min-h-[76px] flex-col items-center justify-center rounded-lg border px-2 py-2 text-center ${
                        stat.highlight
                          ? "border-[#dd0403]/50 bg-[#fff7f7]"
                          : "border-black/15 bg-[#fafafa]"
                      }`}
                    >
                      <span
                        className={`text-2xl font-[400] leading-none sm:text-3xl ${
                          stat.highlight
                            ? "text-[#dd0403]"
                            : "text-[#dd0403]"
                        }`}
                      >
                        {stat.value}
                      </span>

                      <span className="mt-1 text-xs text-black font-[300] sm:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-5 flex items-start gap-3">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-[#f5f5f5]">
                    <div className="text-xl grayscale">
                      <img src={cto} alt="" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm italic leading-5 text-black/55 font-[300]">
                      “{study.testimonial}”
                    </p>

                    <p className="mt-2 text-sm font-[400] text-black">
                      — {study.author}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                {/* <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    className="group/btn inline-flex items-center gap-1 text-sm font-medium text-[#dd0403] transition-colors hover:text-black"
                  >
                    Read Full Case Study
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}