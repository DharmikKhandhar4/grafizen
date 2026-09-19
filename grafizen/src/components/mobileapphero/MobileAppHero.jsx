import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";

import google from "../../../public/image/mobileapp/google.png";
import apple from "../../../public/image/mobileapp/apple-store.png";
import clutch from "../../../public/image/mobileapp/clutch.png";
import googleplay from "../../../public/image/mobileapp/Google-Play.png";
import upwork from "../../../public/image/mobileapp/Upwork.png";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


export default function MobileAppHero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="
            grid
            min-h-[680px]
            items-center
            gap-10
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-6
            lg:pt-0
            xl:min-h-[550px]
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 max-w-[700px]"
          >
            {/* Grafizen Signature Eyebrow Tag */}
            <div className="mb-4 sm:mb-5 flex items-center gap-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/40 ">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>MOBILE APP DEVELOPMENT</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[48px]
                xl:text-[48px]
                font-[600]
                tracking-tight
                text-[#111827]
                leading-[1.12]
              "
            >
              Custom{" "}
              <span className="text-[#dd0403]">
                Mobile App
              </span>

              <span className="block">
                Development Company
              </span>
            </h1>


            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-6
                max-w-[580px]
                text-sm
                sm:text-base
                leading-relaxed
                text-black/55
                font-[300]
              "
            >
              We are experts in delivering high-quality web and mobile app
              development services, with a focus on custom ERP and CRM,
              and tailor solutions to all types of businesses and all sizes.
              Trusted by companies of all sizes to deliver innovative and
              scalable apps.
            </motion.p>


            {/* Button */}
            <motion.div
              variants={fadeUp}
              className="mt-8"
            >
              <button
                className="
                  group
                  inline-flex
                  h-11
                  md:h-12
                  items-center
                  gap-3
                  rounded-full
                  bg-[#dd0403]
                  px-6
                  md:px-7
                  text-xs
                  sm:text-sm
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-[0_10px_25px_rgba(221,4,3,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#c00302]
                  hover:shadow-[0_14px_30px_rgba(221,4,3,0.35)]
                "
              >
                <span>Schedule a Call</span>

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={18} />
                </span>
              </button>
            </motion.div>


            {/* Small Benefits */}
            {/* <motion.div
              variants={fadeUp}
              className="
                mt-10
                flex
                flex-wrap
                gap-x-7
                gap-y-4
                text-sm
                text-[#64748B]
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DD0403]" />
                Custom Solutions
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DD0403]" />
                Scalable Apps
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DD0403]" />
                Expert Developers
              </div>
            </motion.div> */}

          </motion.div>


          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <motion.div
            variants={fadeRight}
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              lg:min-h-[500px]
            "
          >

            {/* Background Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
             
                blur-3xl
                sm:h-[450px]
                sm:w-[450px]
              "
            />


            {/* Main Image Container */}
            <motion.div
              variants={floating}
              animate="animate"
              className="
                relative
                z-10
                w-[300px]
                sm:w-[390px]
                lg:w-[480px]
                xl:w-[450px]
              "
            >
              <img
                src="/image/mobileapp/mobilebg.png"
                alt="Custom mobile app development"
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </motion.div>


            {/* Floating Android */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[12%]
                left-[3%]
                z-20
                hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                sm:block
              "
            >
              <div className="text-xs font-bold text-[#111827]">
                Android
              </div>
            </motion.div>


            {/* Floating Flutter */}
            <motion.div
              animate={{
                y: [0, 9, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[4%]
                top-[15%]
                z-20
                hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                px-4
                py-3
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                sm:block
              "
            >
              <div className="text-xs font-bold text-[#111827]">
                Flutter
              </div>
            </motion.div>

          </motion.div>

        </motion.div>
      </div>


      {/* =========================================================
          TRUST / REVIEW BAR
          IMAGE ONLY
      ========================================================= */}
      <div className="border-t border-gray-100 bg-[#FFF8F8]">

        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-2
            divide-x
            divide-gray-200
            px-5
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >

          {/* Google */}
          <TrustItem image={google} alt="Google" />


          {/* Clutch */}
          <TrustItem image={clutch} alt="Clutch" />


          {/* Google Play */}
          <TrustItem image={googleplay} alt="Google Play" />


          {/* Apple Store */}
          <TrustItem
            image={apple}
            alt="Apple Store"
          />


          {/* Upwork */}
          <TrustItem image={upwork} alt="Upwork" />

        </div>

      </div>


      {/* =========================================================
          WHATSAPP / CHAT BUTTONS
      ========================================================= */}


    </section>
  );
}


/* ============================================================
   TRUST ITEM
   IMAGE ONLY
============================================================ */

function TrustItem({ image, alt }) {
  return (
    <div
      className="
        flex
        min-h-[130px]
        items-center
        justify-center
        px-5
      "
    >
      <img
        src={image}
        alt={alt}
        className="
          max-h-[65px]
          max-w-[150px]
          w-auto
          object-contain
        "
      />
    </div>
  );
}