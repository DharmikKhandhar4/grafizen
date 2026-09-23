import React from "react";
import webImg from "../../../public/image/customsoftwear/web.png";
import mobileImg from "../../../public/image/customsoftwear/mobile.png";
import cloudImg from "../../../public/image/customsoftwear/cloud.png";
import legacyImg from "../../../public/image/customsoftwear/legacy.png";
import apiImg from "../../../public/image/customsoftwear/api.png";
import { motion } from "framer-motion";
import { Globe,Smartphone,Cloud,RefreshCw,Plug, } from "lucide-react";

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
const serviceIcons = {
  web: Globe,
  mobile: Smartphone,
  cloud: Cloud,
  legacy: RefreshCw,
  api: Plug,
};

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`
        relative
        w-full
        md:max-w-[190px]
        max-w-[230px]
        min-h-[280px]
        rounded-[10px]
        border
        border-slate-500/80
        bg-white
        px-3
        pb-4
        pt-3
        md:shadow-[0_12px_25px_rgba(30,41,59,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_35px_rgba(30,41,59,0.16)]
         scrollbar-hide
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
    </div>
  );
};

/* ─── Mobile timeline card ─── */
const MobileTimelineCard = ({ service, index, isLast }) => {
  const Icon = serviceIcons[service.type];

  return (
    <div className="relative flex gap-4">
      {/* Vertical timeline track */}
      <div className="flex flex-col items-center ">
        {!isLast && (
      <div className=" w-px h-24  bg-[#dd0403] absolute  top-9.5  left-3 " />
       )}

        {/* Icon badge */}
        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_0_0_3px_rgba(221,4,3,0.1)] mt-7">
          <Icon size={14} strokeWidth={1.8} />
        </div>

        {/* Vertical connector */}
        {/* {!isLast && (
          <div className="w-px  flex-1 bg-gradient-to-b from-[#dd0403]/30 via-slate-200 to-slate-100  " />
        )} */}
      </div>

      {/* Card */}
      <div className="mb-5 flex-1 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/80 p-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)] relative">
      <div className=" w-7 h-px bg-[#dd0403]/20 absolute  top-9.5  -left-7 " />
              <div className="flex">
          <div className="pt-0.5 min-w-0">
            {/* Title - one line */}
            <h3 className="text-[13px] font-[400]  text-[#dd0403]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-[11px] leading-[1.45] text-black/45">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FullCycleEngineering() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 pt-16 md:py-16 lg:py-20">
      {/* Heading */}
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
  className="
    mt-3
    text-[28px]
    leading-[1.15]
    tracking-[-0.02em]
    font-[600]
    text-[#111]

    sm:mt-4
    sm:text-[42px]
    sm:leading-[1.05]

    lg:text-[48px]
    lg:leading-[1]
  "
>
  <span className="text-[#dd0403]">
    Full-Cycle
  </span>{" "}
  Software Development Solutions
</motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 md:mt-6 max-w-[620px] text-[13px]  xs:text-sm sm:text-[14px] font-[300]  sm:leading-4 text-black/50 "
          >
            From concept to deployment, we deliver end-to-end software solutions
            engineered for scalability, security, and performance — perfectly
            aligned with your unique business architecture.
          </motion.p>
        </motion.div>   

      {/* ═══════════ Mobile: Vertical Timeline (below sm) ═══════════ */}
      <div className="relative z-10 mx-auto mt-10 max-w-[400px] sm:hidden">
        {services.map((service, index) => (
          <MobileTimelineCard
            key={service.number}
            service={service}
            index={index}
            isLast={index === services.length - 1}
          />
        ))}
      </div>

      {/* ═══════════ Desktop / Tablet: Original layout (sm+) ═══════════ */}
    <div className="relative z-10 mx-auto mt-12 max-w-[1200px] md:px-5 lg:mt-10 hidden sm:block">
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
  <div
    className="
      grid grid-cols-2 justify-items-center
      gap-10
      pb-0

      md:grid-cols-3

      lg:flex
      lg:items-start
      lg:justify-between
      lg:gap-0
    "
  >
    {services.map((service, index) => (
      <div
        key={service.number}
        className="
          w-auto
          md:min-w-[255px]
          shrink
        "
      >
        <ServiceCard
          service={service}
          index={index}
        />
      </div>
    ))}
  </div>
</div>

     
    </section>
  );
}