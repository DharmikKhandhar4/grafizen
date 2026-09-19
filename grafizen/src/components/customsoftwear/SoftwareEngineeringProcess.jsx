import React from "react";
import webImg from "../../../public/image/customsoftwear/web.png";
import mobileImg from "../../../public/image/customsoftwear/mobile.png";
import cloudImg from "../../../public/image/customsoftwear/cloud.png";
import legacyImg from "../../../public/image/customsoftwear/legacy.png";
import apiImg from "../../../public/image/customsoftwear/api.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const services = [
  {
    number: "01",
    title: (
      <>
        CUSTOM WEB APP
        <br />
        DEVELOPMENT
      </>
    ),
    description: (
      <>
          Scalable, secure,
        {" "}
        and{" "}
        responsive web
        platforms built with modern frameworks.
      </>
    ),
    type: "web",
    image: webImg,
  },
  {
    number: "02",
    title: (
      <>
        MOBILE APP
        <br />
        ENGINEERING
      </>
    ),
    description: (
      <>
          Native
        (iOS/Android) and{" "}
          cross-platform
        apps designed for{" "}
          performance and seamless UX.
       
      </>
    ),
    type: "mobile",
    image: mobileImg,
  },
  {
    number: "03",
    title: (
      <>
        CLOUD & DEVOPS
        <br />
        INTEGRATION
      </>
    ),
    description: (
      <>
     
          CI/CD pipeline automation,
        
        infrastructure as code, and{" "}
   
          multi-cloud migration.
     
      </>
    ),
    type: "cloud",
    image: cloudImg,
  },
  {
    number: "04",
    title: (
      <>
        LEGACY SYSTEM
        <br />
        MODERNIZATION
      </>
    ),
    description: (
      <>
       
          Refactoring
   
        outdated codebases to{" "}

          microservices
       
        with{" "}
       
          zero downtime.
       
      </>
    ),
    type: "legacy",
    image: legacyImg,
  },
  {
    number: "05",
    title: (
      <>
        API & ENTERPRISE
        <br />
        INTEGRATION
      </>
    ),
    description: (
      <>
        Seamlessly{" "}
       linking your
        software ecosystem with{" "}
        
          secure third-party APIs.
      
      </>
    ),
    type: "api",
    image: apiImg,
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`
        relative
        w-full
        max-w-[190px]
        rounded-[10px]
        border
        border-slate-500/80
        bg-white
        px-3
        pb-4
        pt-3
        shadow-[0_12px_25px_rgba(30,41,59,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_35px_rgba(30,41,59,0.16)]
        ${
          index % 2 === 0
            ? "lg:translate-y-7"
            : "lg:-translate-y-1"
        }
      `}
    >
      {/* Image */}
      <div className="mb-2 h-[145px] overflow-hidden rounded-md flex items-center justify-center">
        <img
          src={service.image}
          alt={service.type}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Heading */}
      <h3 className="min-h-[40px] text-center text-[15px] font-[400] leading-[1.15] text-[#dd0403]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-1 text-center text-[12px] leading-[1.4] text-[black]/55">
        {service.description}
      </p>

      {/* Number */}
      {/* <div className="absolute -bottom-5 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-slate-300 bg-white text-[10px] font-bold text-slate-500 shadow-sm">
        {service.number}
      </div> */}
    </div>
  );
};

export default function FullCycleEngineering() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-16 lg:py-20">
      {/* Decorative background */}
      {/* <FloatingDots /> */}

      {/* Heading */}
      {/* <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-[27px] font-[600] uppercase leading-[1.15] tracking-[-0.5px] text-slate-900 sm:text-[32px] md:text-[40px] lg:text-[48px]">
          <span>
            <span className="text-[#dd0403]">FULL-CYCLE</span>{" "}
            SOFTWARE ENGINEERING
          </span>
          <br />
          <span>
            TAILORED TO{" "}
            <span className="text-[#dd0403]">YOUR ARCHITECTURE</span>
          </span>
        </h2>
      </div> */}
     <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p className="mb-3 sm:mb-5 flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45 text-center">
            <span className="h-px w-5 sm:w-7 bg-[#dd0403]"></span>
            <span className=""> Software Development Services </span>
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-[42px] lg:text-[48px] font-medium leading-tight sm:leading-[1] tracking-[-0.02em] text-[#111]"
          >
             <span className="text-[#dd0403] pr-2">FULL-CYCLE</span>
          SOFTWARE ENGINEERING{" "}
             TAILORED TO
            <span className="text-[#dd0403] pl-2">YOUR ARCHITECTURE</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 md:mt-6 max-w-[620px] text-xs xs:text-sm sm:text-[14px] font-[300] leading-relaxed sm:leading-4 text-black/50 "
          >
            From concept to deployment, we deliver end-to-end software solutions
            engineered for scalability, security, and performance — perfectly
            aligned with your unique business architecture.
          </motion.p>
        </motion.div>   

      {/* Main diagram */}
      <div className="relative z-10 mx-auto mt-12 max-w-[1200px] px-5 lg:mt-10">
        {/* Connection line */}
        <svg
          className="pointer-events-none absolute left-0 right-0 top-[34%] hidden h-[150px] w-full lg:block"
          viewBox="0 0 1050 150"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M 80 55
              C 120 20, 170 20, 205 55
              C 240 90, 285 90, 325 55
              C 365 20, 410 20, 450 55
              C 490 90, 540 90, 580 55
              C 620 20, 665 20, 705 55
              C 745 90, 800 90, 840 55
              C 880 20, 930 20, 970 55
            "
            stroke="#64748b"
            strokeWidth="1.3"
            strokeDasharray="4 5"
          />

          <circle cx="80" cy="55" r="4" fill="#dd0403" />
          <circle cx="325" cy="55" r="4" fill="#3b82f6" />
          <circle cx="580" cy="55" r="4" fill="#dd0403" />
          <circle cx="840" cy="55" r="4" fill="#3b82f6" />
          <circle cx="970" cy="55" r="4" fill="#dd0403" />
        </svg>

        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-0">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom decorative elements */}
      {/* <div className="relative mx-auto mt-10 hidden h-8 max-w-[900px] lg:block">
        <div className="absolute left-[5%] top-1/2 h-px w-20 bg-slate-300" />
        <div className="absolute left-[13%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-slate-400 bg-white" />

        <div className="absolute right-[5%] top-1/2 h-px w-20 bg-slate-300" />
        <div className="absolute right-[13%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-slate-400 bg-white" />
      </div> */}
    </section>
  );
}