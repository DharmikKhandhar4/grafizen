import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

// Put your uploaded image inside:
// src/assets/mobile-app-development.png
import mobileAppImage from "../../../public/image/mobileapp/overview.png";

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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const points = [
  "Grow your business with the right custom mobile app.",
  "Upgrade business processes and explore new entrepreneurial ideas.",
  "Reach global markets and connect your teams through mobile technology.",
  // "Build seamless Android and iOS experiences with expert developers.",
  // "Create scalable solutions designed for long-term business growth.",
];

export default function MobileAppOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#dd0403]/[0.035] blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#dd0403]/[0.035] blur-3xl" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-6">

        {/* =========================
            SECTION LABEL
        ========================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5 lg:mb-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#dd0403]" />

            <span className="text-[10px]  uppercase tracking-[0.25em] text-black/40 sm:text-xs">
              MOBILE APP DEVELOPMENT
            </span>
          </div>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-4">
              <h2 className="max-w-[750px] text-[28px] font-[600] leading-[1.15] tracking-tight text-black sm:text-3xl lg:text-[48px]">
              Custom Mobile App{" "}
              <span className="text-[#dd0403]">
                Development
              </span>{" "}
              Services 
            </h2>

            {/* Sub Heading */}
            <h3 className="mt-2 lg:mt-6 text-left lg:text-right max-w-[680px] text-[14px] leading-6 font-[300] text-black/50 sm:text-[14px]">
              Partner with us for your startup and enterprise mobile app
              development.
            </h3>

        </div>
        <div className="grid items-start  sm:gap-10 lg:grid-cols-2 lg:gap-20 mt-5">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=" order-2 lg:order-none"
          >
            {/* Heading */}
        
            {/* Description */}
            <div className="  max-w-[680px] md:mt-6 space-y-2 text-[14px] leading-5 font-[300] text-black/52 sm:text-[14px]">
              <p>
                We help you grow your business by developing the right custom
                mobile app. A custom mobile app will be suitable for you if
                you are upgrading your business process, exploring a new
                entrepreneur idea, reaching out to your global market or
                connecting your own teams together.
              </p>

              <p>
                Our expert teams of app developers on{" "}
                <span className="font-semibold text-black text-[14px]">
                  Android and iOS
                </span>{" "}
                platforms will help you to bring your dream to reality.
              </p>

              <p>
                With years of experience, proven methodologies, and high
                standard processes, we ensure that you get the best returns on
                your investment by getting a top-class custom mobile app
                developed.
              </p>
            </div>

            {/* =========================
                KEY POINTS
            ========================== */}
            <div className="mt-5 space-y-2">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="flex md:items-center items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    className=" shrink-0 text-[#dd0403] mt-1"
                  />

                  <p className="text-[14px] md:leading-6 text-black/52 font-[300] sm:text-[14px]">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            {/* <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-9"
            >
              <button className="group inline-flex h-10 md:h-12 items-center gap-3 rounded-[10px] bg-[#dd0403] px-3 md:px-6 text-[13px] md:text-[14px] font-medium text-white shadow-[0_14px_35px_rgba(221,4,3,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303]">
                Discuss Your App Idea

                <span className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </motion.div> */}
          </motion.div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="   relative flex min-h-[280px] sm:min-h-[350px] items-center justify-center lg:h-[400px] order-1 lg:order-none"
          >
            {/* Red soft glow */}
            {/* <div className="absolute h-[330px] w-[330px] rounded-full bg-[#dd0403]/[0.055] blur-3xl sm:h-[430px] sm:w-[430px]" /> */}

            {/* Decorative circle */}
            {/* <div className="absolute h-[300px] w-[300px] rounded-full border border-[#dd0403]/10 sm:h-[410px] sm:w-[410px]" /> */}

            {/* Main Image */}
            <motion.img
              src={mobileAppImage}
              alt="Custom mobile app development"
              className="relative z-10 w-full max-w-[300px] object-cover sm:max-w-[350px] lg:max-w-[490px] lg:h-[400px]"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Red Accent */}
            {/* <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[8%] top-[18%] z-20 h-4 w-4 rounded-full bg-[#dd0403] shadow-[0_0_25px_rgba(221,4,3,0.35)]"
            /> */}

            {/* Floating Accent */}
            {/* <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[18%] left-[8%] z-20 h-3 w-3 rounded-full bg-[#dd0403]/70"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}