import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Settings,
  UserRound,
  BarChart3,
  UsersRound,
  Target,
  ShoppingCart,
  TrendingUp,
  Heart,
  CircleCheckBig,
} from "lucide-react";

import email from "../../../public/image/email.png";

const features = [
  {
    title: "Campaigns",
    point: "Create targeted campaigns that reach the right audience.",
    icon: CircleCheckBig,
  },
  {
    title: "Automation",
    point: "Automate timely emails and follow-ups with ease.",
    icon: CircleCheckBig,
  },
  {
    title: "Personalization",
    point: "Deliver relevant messages based on customer behavior.",
    icon: CircleCheckBig,
  },
  {
    title: "Analytics",
    point: "Track performance and improve every campaign.",
    icon: CircleCheckBig,
  },
];

const benefits = [
  {
    title: "Targeted Communication",
    text: "Reach the right audience with the right message.",
    icon: UsersRound,
  },
  {
    title: "Stronger Engagement",
    text: "Engage your subscribers with relevant and valuable content.",
    icon: Target,
  },
  {
    title: "Better Conversions",
    text: "Convert more subscribers into loyal customers.",
    icon: ShoppingCart,
  },
  {
    title: "Customer Loyalty",
    text: "Build lasting relationships that drive repeat business.",
    icon: TrendingUp,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EmailMarketingHero() {
  return (
    <section
      id="email-marketing"
      className="relative overflow-hidden bg-white min-h-[95vh]"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#dd0403]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-10 xl:px-14">
        {/* =========================================================
            HERO
        ========================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-6 xl:gap-10">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative z-10"
          >
            {/* Eyebrow */}

            <motion.div
              variants={item}
              className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"
            >
              <span className="h-px w-7 bg-[#dd0403]" />

              <span>Email Marketing Agency • Rajkot</span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={item}
              className="max-w-[720px] text-[42px] font-[500] leading-[0.98] tracking-[-0.055em] text-black sm:text-[58px] lg:text-[48px] xl:text-[48px]"
            >
              Turn Every Email Into
              <br />
              <span className="text-[#dd0403] whitespace-nowrap">
                A Growth Opportunity.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={item}
              className="mt-7 max-w-[600px] text-[15px] font-[400] leading-6 text-black/55 sm:text-[16px]"
            >
              We create strategic email campaigns that reach the right audience,
              build stronger relationships, and turn subscribers into loyal
              customers.
            </motion.p>

            {/* CTA */}

            {/* =================================================
                FEATURES
            ================================================== */}

            <motion.div
              variants={item}
              className="mt-10 grid max-w-[550px] gap-y-1 grid-cols-2 border-black/10 gap-x-3   "
            >
              {features.map(({ title, point, icon: Icon }, index) => (
                <div
                  key={title}
                  className="  flex  flex-col gap-3 py-1 justify-start"
                >
                  <div className="flex gap-2 items-center">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#dd0403]"
                    />
                    <span className="block text-[13px] font-medium text-black sm:text-[14px]">
                      {title}
                    </span>
                  </div>

                  <div>
                    <span className="mt-1 block text-[11px] leading-4 text-black/50 sm:text-[12px]">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center gap-3 rounded-[10px] bg-[#dd0403] px-3 text-[13px] font-medium text-white shadow-[0_14px_35px_rgba(221,4,3,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303] md:h-12 md:px-6 md:text-[14px]"
              >
                Start Growing With Email
                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#email-marketing-services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-11 items-center rounded-[10px] border border-black/15 bg-white px-3 text-[13px] font-medium text-black transition duration-300 hover:border-[#dd0403]/40 hover:text-[#dd0403] md:h-12 md:px-6 md:text-[14px]"
              >
                Explore Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center lg:min-h-[560px]"
          >
            {/* Soft background glow */}

            <div className="absolute right-[5%] top-[15%] h-[380px] w-[380px] rounded-full bg-[#dd0403]/5 blur-3xl" />

            {/* Decorative dashed circle */}

            {/* <div className="absolute right-[4%] top-[12%] hidden h-[360px] w-[360px] rounded-full border border-dashed border-[#dd0403]/25 lg:block" />group inline-flex h-11 items-center gap-3 rounded-[10px] bg-[#dd0403] px-3 text-[13px] font-medium text-white shadow-[0_14px_35px_rgba(221,4,3,0.17)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#bd0303] md:h-12 md:px-6 md:text-[14px] */}

            {/* Email Image */}

            <motion.img
              src={email}
              alt="Email Marketing"
              className="relative z-10 w-full max-w-[550px] object-contain"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating email badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[4%] top-[16%] z-20 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#dd0403] text-white shadow-[0_15px_35px_rgba(221,4,3,0.25)] sm:flex"
            >
              <Mail size={28} strokeWidth={1.8} />
            </motion.div>

            {/* Floating analytics badge */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10%] left-[5%] z-20 hidden items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dd0403]/10">
                <BarChart3 size={19} className="text-[#dd0403]" />
              </div>

              <div>
                <p className="text-[11px] text-black/40">Campaign Growth</p>

                <p className="text-sm font-semibold text-black">+38.6%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM BENEFITS
        ========================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-6 overflow-hidden rounded-[32px] border border-[#e7e9f2] bg-[#dd0403]/5 p-2 sm:mt-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <div
                key={title}
                className={`
                    group flex items-center gap-4 px-5 py-4
                    lg:px-6 lg:py-2
                    ${
                      index !== benefits.length - 1
                        ? "lg:border-r lg:border-[#dd0403]/25"
                        : ""
                    }
                  `}
              >
             

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dd0403] text-[#dd0403] transition-all duration-300 group-hover:bg-[#dd0403] group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>


                <div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-black sm:text-[15px]">
                    {title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-black/55">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
