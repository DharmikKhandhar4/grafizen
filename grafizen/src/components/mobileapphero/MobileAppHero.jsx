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
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 py-6 md:py-0">

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
            grid-cols-1
            lg:grid-cols-[1fr_0.9fr]
            
            lg:gap-x-12
            lg:gap-y-0
            items-center
            min-h-[680px]
            xl:min-h-[550px]
          "
        >

          {/* =====================================================
              1. HEADING + SUBHEADING (Mobile: 1st, Laptop: Col 1 Row 1)
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 max-w-[700px] lg:col-start-1 lg:row-start-1"
          >
            {/* Grafizen Signature Eyebrow Tag */}
            <div className="mb-3 sm:mb-5 flex items-center gap-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/40 ">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>MOBILE APP DEVELOPMENT</span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[28px]
                xs:text-3xl
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
              </span>{" "}
              <span className="block">
                Development Company
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-lg md:text-xl font-[400] text-black/75 leading-relaxed">
              Build Scalable, High-Performing iOS & Android Apps for Your Business
            </p>
          </motion.div>


          {/* =====================================================
              2. RIGHT IMAGE (Mobile: 2nd, Laptop: Col 2 Rows 1 & 2)
          ===================================================== */}
          <motion.div
            variants={fadeRight}
            className="
              relative
              flex
              min-h-[250px]
              xs:min-h-[340px]
              sm:min-h-[400px]
              lg:min-h-[500px]
              items-center
              justify-center
              lg:col-start-2
              lg:row-start-1
              lg:row-span-2
              lg:self-center
              my-3
              sm:my-4
              lg:my-0
            "
          >

            {/* Background Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                sm:h-[360px]
                sm:w-[360px]
                lg:h-[450px]
                lg:w-[450px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-red-50/50
                blur-3xl
              "
            />


            {/* Main Image Container */}
            <motion.div
              variants={floating}
              animate="animate"
              className="
                relative
                z-10
                w-[260px]
                xs:w-[300px]
                sm:w-[380px]
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


          {/* =====================================================
              3. CONTENT & BUTTON (Mobile: 3rd, Laptop: Col 1 Row 2)
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="
              relative
              z-10
              max-w-[580px]
              lg:col-start-1
              lg:row-start-2
              md:-mt-35
            "
          >
            {/* Description */}
            <p
              className="
                text-[13px]
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
            </p>


            {/* Button */}
            <div
              className="mt-4 sm:mt-8"
            >
              <a
              href="https://grafizen.com/contact-us"
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
                  shadow-[0_7px_14px_rgba(221,4,3,0.25)]
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
              </a>
            </div>

          </motion.div>

        </motion.div>
      </div>


      {/* =========================================================
          TRUST / REVIEW BAR
          IMAGE ONLY
      ========================================================= */}
      <div className="border-t border-b border-gray-100 ">

        <div
          className="
            mx-auto
            max-w-[1500px]
            flex
            overflow-x-auto
            [&::-webkit-scrollbar]:hidden
            [scrollbar-width:none]
            divide-x
            divide-gray-200
            px-4
            sm:px-6
            lg:px-5
            lg:grid
            lg:grid-cols-5
            lg:overflow-visible
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
        min-h-[90px]
        sm:min-h-[110px]
        lg:min-h-[130px]
        min-w-[140px]
        xs:min-w-[160px]
        sm:min-w-[180px]
        lg:min-w-0
        shrink-0
        lg:shrink
        items-center
        justify-center
        px-5
      "
    >
      <img
        src={image}
        alt={alt}
        className="
          max-h-[45px]
          sm:max-h-[55px]
          lg:max-h-[65px]
          max-w-[120px]
          sm:max-w-[140px]
          lg:max-w-[150px]
          w-auto
          object-contain
        "
      />
    </div>
  );
}