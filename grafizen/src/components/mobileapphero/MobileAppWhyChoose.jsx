import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Smartphone,
  Settings,
  ShieldCheck,
} from "lucide-react";
import whychoose from "../../../public/image/mobileapp/whychoous.png"

const leftItems = [
  {
    icon: BrainCircuit,
    title: "AI-Powered",
    title2: "Mobile Apps",
    description:
      " Integrate smart automation, predictive analytics,  personalized user experiences to streamline workflows and boost engagement.",
  },
  {
    icon: Code2,
    title: "Expert iOS & Android",
    title2: "Developers",
    description:
      "Native and cross-platform expertise across Flutter, React Native, iOS, and Android to deliver seamless digital products.",
  },
  // {
  //   icon: Smartphone,
  //   title: "Custom Mobile Solutions",
  //   title2: "",
  //   description:
  //     "Tailor-made mobile applications designed to solve complex business challenges and drive long-term ROI.",
  // },
];

const rightItems = [
  {
    icon: Settings,
    title: "End-to-End App",
    title2: "Development",
    description:
      "Full-lifecycle support covering product strategy, UI/UX design, agile development, QA testing, and post-launch maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    title2: "Architecture",
    description:
      "Enterprise-grade security protocols, optimized performance, and scalable infrastructure engineered to grow with your business.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MobileAppWhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADING
        ====================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative z-20 mx-auto max-w-[1050px] text-center"
        >
          {/* Small Label */}
          {/* <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center justify-center gap-4"
          >
            <span className="h-[2px] w-12 bg-[#dd0403] sm:w-14" />

            <span className="text-[11px] font-medium tracking-[0.2em] text-[#334155] sm:text-[13px]">
              MOBILE APP DEVELOPMENT
            </span>

            <span className="h-[2px] w-12 bg-[#dd0403] sm:w-14" />
          </motion.div> */}
          <div class="mb-5 flex items-center justify-center  gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>  MOBILE APP DEVELOPMENT</span></div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-[28px] font-[600] leading-[1.08] tracking-[-0.04em] text-black sm:text-[42px] md:text-[50px] lg:text-[48px]"
          >
            Why Choose{" "}
            <span className="text-[#dd0403]">Grafizen</span>
            <br />
            for Mobile App Development
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-[850px] text-sm leading-6 text-black/55 sm:text-base md:text-[14px] md:leading-7"
          >
            Grafizen combines AI-driven technology, modern engineering, and
            strategic UI/UX design to build high-performance mobile
            applications that accelerate business growth.
          </motion.p>
        </motion.div>

        {/* =====================================================
            MAIN VISUAL AREA
        ====================================================== */}
        <div className="relative mt-0 min-h-[760px] md:mt-16 lg:mt-14 lg:min-h-[620px]">

          {/* =================================================
              SVG BACKGROUND
          ================================================== */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewBox="0 0 1600 850"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block -mt-18"
          >
            <defs>

              {/* LEFT SHADE */}
              <linearGradient
                id="leftRedShade"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#dd0403"
                  stopOpacity="0.015"
                />

                <stop
                  offset="55%"
                  stopColor="#dd0403"
                  stopOpacity="0.05"
                />

                <stop
                  offset="100%"
                  stopColor="#dd0403"
                  stopOpacity="0.25"
                />
              </linearGradient>

              {/* RIGHT SHADE */}
              <linearGradient
                id="rightRedShade"
                x1="1"
                y1="0"
                x2="0"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#dd0403"
                  stopOpacity="0.015"
                />

                <stop
                  offset="55%"
                  stopColor="#dd0403"
                  stopOpacity="0.05"
                />

                <stop
                  offset="100%"
                  stopColor="#dd0403"
                  stopOpacity="0.25"
                />
              </linearGradient>

              {/* SOFT GLOW */}
              <radialGradient
                id="centerGlow"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop
                  offset="0%"
                  stopColor="#dd0403"
                  stopOpacity="0.16"
                />

                <stop
                  offset="55%"
                  stopColor="#dd0403"
                  stopOpacity="0.06"
                />

                <stop
                  offset="100%"
                  stopColor="#dd0403"
                  stopOpacity="0"
                />
              </radialGradient>

              <filter
                id="blurGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="25" />
              </filter>
            </defs>

            {/* =============================================
                LEFT FAN / SHADE
            ============================================== */}
            <path
              d="
                M 0 45
                L 0 705
                L 575 420

                C 620 405
                  655 385
                  690 350

                C 655 315
                  620 290
                  575 275

                Z
              "
              fill="url(#leftRedShade)"
            />

            {/* =============================================
                RIGHT FAN / SHADE
            ============================================== */}
            <path
              d="
                M 1600 45
                L 1600 705
                L 1025 420

                C 980 405
                  945 385
                  910 350

                C 945 315
                  980 290
                  1025 275

                Z
              "
              fill="url(#rightRedShade)"
            />

            {/* =============================================
                CENTER SOFT GLOW
            ============================================== */}
            <ellipse  
              cx="800"
              cy="350"
              rx="270"
              ry="260"
              fill="url(#centerGlow)"
              filter="url(#blurGlow)"
            />
          </motion.svg>

          {/* =================================================
              DESKTOP CONTENT GRID
          ================================================== */}
          <div className="relative z-10 hidden h-full lg:grid lg:grid-cols-[1fr_500px_1fr] lg:items-center lg:gap-8">

            {/* =============================================
                LEFT CONTENT
            ============================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
              className="flex flex-col gap-8 mt-8"
            >
              {leftItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex items-start gap-5"
                  >
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#dd0403]/10 bg-white shadow-[0_8px_30px_rgba(221,4,3,0.08)]">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#dd0403]/[0.06]">
                          <Icon
                            size={24}
                            strokeWidth={1.8}
                            className="text-[#dd0403]"
                          />
                        </div>
                      </div>

                      {/* Red Vertical Line */}
                      <span className="absolute -right-[15px] top-3.5 h-[17px] w-[3px] -translate-y-1/2 rounded-full bg-[#dd0403]" />
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                   <h3 className="whitespace-nowrap text-[19px] font-[400] leading-[1.15] tracking-[-0.02em] text-black">
  {item.title}
  {item.title2 && ` ${item.title2}`}
</h3>

                      <p className="mt-2 max-w-[310px] text-[14px] leading-[1.1] font-[300] text-black/55">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* =============================================
                CENTER VISUAL
            ============================================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto flex h-[350px] w-[350px] items-center justify-center"
            >
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-[2px] border-[#dd0403]" />

              {/* Small Decorative Arc - Top */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-[-3px] h-[9px] w-[70px] -translate-x-1/2 rounded-full bg-white" />
              </motion.div>

              {/* Inner Glow */}
              <div className="absolute inset-[25px] rounded-full bg-[#dd0403]/[0.035] blur-2xl" />

              {/* =========================================
                  MOBILE IMAGE
                  
                  Replace this with your actual image
              ========================================== */}
              <div className="relative z-10 flex h-full w-full items-center justify-center">

                <img
                  src={whychoose}
                  alt="Mobile App Development"
                  className="h-[330px] w-[330px] object-contain rounded-full"
                />

              </div>
            </motion.div>

            {/* =============================================
                RIGHT CONTENT
            ============================================== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={containerVariants}
              className="flex flex-col gap-8 items-end mt-12"
            >
              {rightItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex items-start gap-5"
                  >
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#dd0403]/10 bg-white shadow-[0_8px_30px_rgba(221,4,3,0.08)]">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#dd0403]/[0.06]">
                          <Icon
                            size={24}
                            strokeWidth={1.8}
                            className="text-[#dd0403]"
                          />
                        </div>
                      </div>

                      {/* Red Vertical Line */}
                      <span className="absolute left-[50px] top-4  h-[17px] w-[3px] -translate-y-1/2 rounded-full bg-[#dd0403]" />
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      {/* <h3 className="text-[19px] whitespace-nowrap   font-[300] leading-[1.15] tracking-[-0.02em] text-black">
                        {item.title}
                      
                        {item.title2}
                      </h3> */}
                      <h3 className="text-[19px] whitespace-nowrap font-[400] leading-[1.15] tracking-[-0.02em] text-black">
  {item.title} {item.title2}
</h3>

                      <p className="mt-2 max-w-[310px] text-[14px] font-[300] leading-[1.1] text-black/55">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* =================================================
              MOBILE / TABLET VERSION
          ================================================== */}
         <div className="relative z-10 lg:hidden">

  {/* First 2 Mobile Items */}
  <div className="mb-9 grid grid-cols-1 gap-3 sm:grid-cols-2  pt-3">
    {leftItems.slice(0, 2).map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.55,
            delay: index * 0.08,
          }}
          className=" flex items-start flex-col gap-0  border border-dotted   border-[#dd0403] p-3 rounded-2xl"
        >
         <div className=" flex items-center gap-2 ">
           <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#dd0403]/[0.06] md:h-[62px] md:w-[62px]">
            <Icon
              strokeWidth={1.8}
              className="size-5 text-[#dd0403] md:size-6"
            />
          </div>

          <div>
            <h3 className="text-[15px] font-[400] leading-[1.15] text-black">
              {item.title}

              {item.title2 && (
                <>
                  <br className="hidden md:block" />
                  {item.title2}
                </>
              )}
            </h3>

          
          </div>
         </div>
            <p className="mt-2 text-[13px] leading-5 font-[300] text-black/55">
              {item.description}
            </p>
        </motion.div>
      );
    })}
  </div>

  {/* Center Visual */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.9,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
    }}
    className="mx-auto mb-9 flex h-[210px] w-[210px] items-center justify-center sm:h-[400px] sm:w-[400px] sm:mb-12"
  >
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-[0.5px] border-dotted border-[#dd0403]">
      <div className="absolute inset-5 rounded-full bg-[#dd0403]/[0.035] blur-2xl" />

      <img
        src={whychoose}
        alt="Mobile App Development"
        className="relative z-10 h-[180px] w-[180px] zoom-115 object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] sm:h-[320px] sm:w-[320px]"
      />
    </div>
  </motion.div>

  {/* Last 2 Mobile Items */}
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {rightItems.slice(0, 2).map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.55,
            delay: index * 0.08,
          }}
          className="flex items-start flex-col gap-0  border border-dotted   border-[#dd0403] p-3 rounded-2xl"
        >
         <div className=" flex gap-2 items-center ">
           <div className="flex  h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#dd0403]/[0.06] md:h-[62px] md:w-[62px]">
            <Icon
              strokeWidth={1.8}
              className="size-5 text-[#dd0403] md:size-6"
            />
          </div>

          <div>
            <h3 className="text-[17px] font-[400] leading-[1.15] text-black">
              {item.title}

              {item.title2 && (
                <>
                  <br className="hidden md:block" />
                  {item.title2}
                </>
              )}
            </h3>

          </div>
         </div>
          
            <p className="mt-2 text-[13px] leading-5 text-black/55 font-[300]">
              {item.description}
            </p>
           
        </motion.div>
      );
    })}
  </div>

</div> 
        </div>
      </div>
    </section>
  );
};

export default MobileAppWhyChoose;