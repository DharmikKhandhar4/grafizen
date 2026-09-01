import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  MousePointerClick,
  Megaphone,
  PenLine,
  Mail,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    tag: "SEARCH ENGINE",
    title: "Search Engine Optimization (SEO)",
    description: "Scale the search ranks and become Google’s favorite guest.",
    impact: "High-Intent Keyword Dominance & Continuous Organic Traffic",
    icon: Search,
    size: "large",
  },
  {
    id: "02",
    tag: "PERFORMANCE MEDIA",
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Sniper-sharp targeting that brings fast, flashy results.",
    impact: "Immediate Lead Acquisition & Optimized ROAS Metrics",
    icon: MousePointerClick,
    size: "small",
  },
  {
    id: "03",
    tag: "BRAND ENGAGEMENT",
    title: "Social Media Marketing",
    description: "Spark conversations, stir up buzz and build loyal fans.",
    impact: "Viral Reach, Community Growth & Active Brand Loyalty",
    icon: Megaphone,
    size: "small",
  },
  {
    id: "04",
    tag: "AUTHORITY BUILDER",
    title: "Content Marketing",
    description:
      "Craft scroll-stopping stories that turn clicks into customers.",
    impact: "High Conversion Copy & Immediate Audience Trust",
    icon: PenLine,
    size: "large",
  },
  {
    id: "05",
    tag: "DIRECT CONVERSION",
    title: "Email Marketing",
    description: "Slide into inboxes with messages too tempting to ignore.",
    impact: "Higher Open Rates & Continuous Repeat Customer Revenue",
    icon: Mail,
    size: "small",
  },
  {
    id: "06",
    tag: "FUNNEL OPTIMIZER",
    title: "Conversion Rate Optimization (CRO)",
    description: "Transform window shoppers into loyal brand believers.",
    impact: "Reduced Customer Acquisition Cost (CAC) & Scaled Revenue",
    icon: TrendingUp,
    size: "small",
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

export default function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-16">
      {/* Background Decoration */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[#dd0403]/10" />
        <div className="absolute -right-28 top-32 h-[260px] w-[260px] rounded-full border border-[#dd0403]/10" />

        <div className="absolute left-[-120px] bottom-20 h-[300px] w-[300px] rounded-full bg-[#dd0403]/[0.025] blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#dd0403]" />

              <span className="text-[11px] font-bold tracking-[0.28em] text-[#dd0403]">
                OUR CORE SERVICES
              </span>
            </div>
    <h2 className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em]  sm:text-5xl lg:text-[48px]
    text-black sm:text-[42px] 
    ">
              Architecting{" "}
              <span className="text-[#dd0403]">Digital Dominance</span> for
              Rajkot Businesses
            </h2>
            {/* <p className="text-sm font-medium text-neutral-500">
              DIGITAL GROWTH / 06 SERVICES
            </p> */}
          </div>

          {/* Right */}
          <div className="max-w-4xl">
        

            <p className="mt-6 max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300] "
           
            >
              Tailored, high-performance marketing engines built to capture
              local search intent, maximize conversion rates, and drive
              sustainable ROI.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SERVICE SYSTEM
        ====================================================== */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-neutral-200 lg:block" />

          <div className="space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Number Marker */}
                  <div className="absolute left-2 top-6 z-10 hidden lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-[#f7f5f1] text-xs font-bold text-neutral-400 transition-all duration-500 group-hover:border-[#dd0403] group-hover:bg-[#dd0403] group-hover:text-white">
                      {service.id}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`relative ml-0 overflow-hidden rounded-[13px] border border-neutral-200 bg-white transition-all duration-500 group-hover:border-[#dd0403]/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:ml-[84px] ${
                      service.size === "large"
                        ? "lg:min-h-[70px]"
                        : "lg:min-h-[70px]"
                    }`}
                  >
                    {/* Red Hover Line */}
                    <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#dd0403] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="grid h-full lg:grid-cols-[1fr_0.8fr]">
                      {/* Main Content */}
                      <div className="flex flex-col  p-3 sm:p-4 lg:px-8 " >
                        <div>
                          {/* Mobile Number */}
                          <div className="mb-4 flex items-center justify-between lg:hidden">
                            <span className="text-2xl font-light text-neutral-300">
                              {service.id}
                            </span>

                            <Icon
                              size={22}
                              strokeWidth={1.5}
                              className="text-[#dd0403]"
                            />
                          </div>

                          {/* Tag */}
                          <div className="mb-1 flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403]" />

                            <span className="text-[9px] font-bold tracking-[0.2em] text-[#dd0403]">
                              {service.tag}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="max-w-xl text-md font-semibold leading-tight tracking-[-0.03em] text-neutral-950 sm:text-2xl lg:text-[20px]">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-1 max-w-lg text-sm leading-5 text-neutral-500 sm:text-[14px]">
                            {service.description}
                          </p>
                        </div>

                        {/* Bottom */}
                        {/* <div className="mt-0 flex items-center gap-3">
                          <span className="text-[14px] font-semibold text-neutral-900">
                            Explore service
                          </span>

                          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-[#dd0403] group-hover:bg-[#dd0403] group-hover:text-white">
                            <ArrowUpRight size={13} />
                          </div>
                        </div> */}
                      </div>

                      {/* Impact Panel */}
                      <div className="relative flex flex-col justify-between overflow-hidden  p-5 bg-[#dd0403]/5 text-black sm:p-4 lg:px-8">
                        {/* Decorative Grid */}
                        {/* <div
                          className="pointer-events-none absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                          }}
                        /> */}

                        {/* Glow */}
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl" />

                        <div className="relative">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-[9px] font-bold tracking-[0.18em] text-neutral-500">
                              PRIMARY IMPACT
                            </span>

                            <Icon
                              size={20}
                              strokeWidth={1.5}
                              className="text-[#dd0403]"
                            />
                          </div>

                          <div className="h-px w-full bg-white/10" />

                          <p className="mt-0 max-w-sm text-base font-medium leading-5 text-black sm:text-md">
                            {service.impact}
                          </p>
                        </div>

                        {/* Metric */}
                        {/* <div className="relative mt-2 flex items-end justify-between"> */}
                          {/* <div>
                            <p className="text-[8px] uppercase tracking-[0.18em] text-neutral-500">
                              Growth Engine
                            </p>

                            <p className="mt-1 text-xs font-medium text-neutral-300">
                              Built for scale
                            </p>
                          </div> */}

                          {/* <span className="text-4xl font-light tracking-[-0.06em] text-black/10">
                            {service.id}
                          </span> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 overflow-hidden rounded-[30px] bg-[#dd0403] text-white"
        >
          <div className="relative flex flex-col gap-8 px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
            {/* Background *
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[280px] w-[280px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-[-30px] top-[-50px] h-[180px] w-[180px] rounded-full border border-white/10" />

            <div className="relative">
              <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-white/60">
                READY TO SCALE?
              </p>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                Turn your digital presence into a growth engine.
              </h3>
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative z-10 flex shrink-0 items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-bold text-neutral-950 shadow-xl"
            >
              Request Strategy Engine
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dd0403] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight size={15} />
              </span>
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
