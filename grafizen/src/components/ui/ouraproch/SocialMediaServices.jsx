import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BarChart3, Check, ChevronRight } from "lucide-react";
import increase from "../../../../public/image/componentsimage/increase.png";
import webpage from "../../../../public/image/componentsimage/web-page.png";
import branding from "../../../../public/image/componentsimage/branding.png";
import strategy from "../../../../public/image/componentsimage/strategy.png";

const services = [
  {
    number: "01",
    label: "Brand Direction",
    title: "Content Strategy",
    description:
      "We plan what to post, when to post, and how each piece of content supports your brand goals.",
    image: strategy,
    accent: "#DD0403",
    softAccent: "rgba(221, 4, 3, 0.08)",
  },
  {
    number: "02",
    label: "Visual System",
    title: "Creative Post Design",
    description:
      "Custom branded posts, stories, and campaign creatives designed to make your page look professional.",
    image: branding,
    accent: "#DD0403",
    softAccent: "rgba(221, 4, 3, 0.08)",
  },
  {
    number: "03",
    label: "Profile Audit",
    title: "Account Optimization",
    description:
      "We improve your bio, highlights, profile structure, and page presentation for better trust and clarity.",
    image: webpage,
    accent: "#DD0403",
    softAccent: "rgba(221, 4, 3, 0.08)",
  },
  {
    number: "04",
    label: "Growth Engine",
    title: "Growth Management",
    description:
      "We focus on consistency, engagement, and content improvement to help your audience grow naturally.",
    image: increase,
    accent: "#DD0403",
    softAccent: "rgba(221, 4, 3, 0.08)",
  },
];

const benefits = [
  "Monthly content direction",
  "Brand-focused post design",
  "Profile optimization",
  "Engagement improvement",
];

export default function SocialMediaServices() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 lg:py-16 xl:px-20"
    >
      {/* Background Decorative Elements */}
      {/* <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DD0403]/5 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#DD0403]/5 blur-3xl" /> */}

      <div className="relative mx-auto max-w-[1400px]">
        {/* =====================================================
            HEADER / INTRO
        ====================================================== */}
        <div
          className={`grid grid-cols-1 gap-10 transition-all duration-1000 ease-out lg:grid-cols-[1.2fr_0.8fr] lg:items-end ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            {/* <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#DD0403]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DD0403] sm:text-sm">
              
              </span>
            </div> */}
            <div class="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span class="h-px w-7 bg-[#dd0403]"></span>
              <span> WHAT WE DO</span>
            </div>

            {/* Heading */}
            <h2 className="max-w-5xl text-[48px] font-medium leading-[0.92] tracking-[-0.055em] text-[#111111]">
              Social Media That
              <span className="text-[#DD0403] pl-3 pr-3">
                Looks <br /> Good
              </span>
              <span className="text-[#111111]">And Works Smart.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pb-2">
            <p className="max-w-4xl  text-base leading-7 text-neutral-600 sm:text-md sm:leading-6">
              We help your brand stay consistent, active, and professional
              across social platforms with planned content, creative visuals,
              optimized profiles, and result-focused management.
            </p>
          </div>
        </div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}
        <div
          className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-black/10 py-3 transition-all delay-200 duration-1000 sm:mt-10 sm:gap-x-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="group flex items-center gap-2 text-sm text-neutral-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DD0403] text-white">
                <Check size={12} strokeWidth={3} />
              </span>

              <span className="transition-colors duration-300 group-hover:text-[#DD0403]">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* =====================================================
            SERVICE LABEL
        ====================================================== */}
        <div
          className={`mt-10 transition-all delay-300 duration-1000 sm:mt-24 lg:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles
                size={18}
                strokeWidth={1.7}
                className="text-[#DD0403]"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
                Our Social Media Services
              </span>
            </div>

            <span className="hidden text-xs uppercase tracking-widest text-neutral-400 sm:block">
              04 Services
            </span>
          </div> */}
        </div>

        {/* =====================================================
            SERVICE GRID
        ====================================================== */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-4">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA / STATS
        ====================================================== */}
        <div
          className={`mt-5 grid grid-cols-1 gap-4 transition-all delay-700 duration-1000 md:grid-cols-[1fr_auto] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* CTA */}
          {/* Decorative Circle */}
          {/* <div className="group relative overflow-hidden rounded-[24px] bg-[#DD0403] p-7 text-white sm:p-9 lg:p-12">
        
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Ready to grow?
                </p>

                <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                  Let's build a social presence your audience remembers.
                </h3>
              </div>

              <button
                type="button"
                className="group/button flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#DD0403] transition-all duration-300 hover:gap-5 hover:bg-black hover:text-white"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:rotate-45"
                />
              </button>
            </div>
          </div> */}

          {/* MINI STAT */}
          {/* <div className="flex min-h-[190px] flex-col justify-between rounded-[24px] border border-black/10 bg-white p-7 sm:p-9 md:w-[230px] lg:p-10">
            <div className="flex items-center justify-between">
              <BarChart3
                size={22}
                strokeWidth={1.6}
                className="text-[#DD0403]"
              />

              <ArrowUpRight size={18} className="text-neutral-400" />
            </div>

            <div>
              <p className="text-4xl font-medium tracking-tight text-[#111111]">
                360°
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Complete social management
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({ service, index, isVisible }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_14px_28px_rgba(17,17,17,0.03)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(17,17,17,0.08)] sm:p-6 lg:p-7 ${
        index % 2 === 0 ? "lg:min-h-[240px]" : "lg:min-h-[240px]"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${400 + index * 120}ms`,
        background: `#ffffff`,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{
          background: `${service.accent}`,
        }}
      />

      <div
        className="pointer-events-none absolute -right-10 -top-10 h-30 w-30 rounded-full border border-black/5"
        style={{
          background: `${service.softAccent}`,
          boxShadow: `0 0 0 12px ${service.softAccent}`,
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 rounded-tr-[32px] bg-white/30" />
      {/* <div className="pointer-events-none absolute -bottom-8 right-4 h-24 w-24 rounded-full bg-black/5 blur-2xl" /> */}

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit rounded-full border border-black/5 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 backdrop-blur-sm">
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#DD0403] transition-colors duration-300 pr-1">
              {service.number}
            </span>
            {service.label}
          </span>
        </div>

        <div
          className="flex items-center justify-center  text-white  transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 absolute -right-3 -top-3"
          style={{
            borderColor: `${service.accent}33`,
            background: `transparent`,
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-10 w-10 object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 mt-8 sm:mt-4">
        <h3 className="max-w-md text-xl font-medium tracking-tight text-[#111111] transition-colors duration-300 sm:text-2xl">
          {service.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500 transition-colors duration-300 sm:text-[14px] sm:leading-6 ">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-3 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300">
          Explore service
        </span>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/80 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#DD0403]">
          <ChevronRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
        style={{
          background: `${service.softAccent}`,
        }}
      />

      <div className="relative z-20 opacity-100 transition-all duration-300">
        <div className="absolute inset-0" />
      </div>
    </div>
  );
}
