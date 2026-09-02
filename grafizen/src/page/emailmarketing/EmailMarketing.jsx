import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Check,
  Sparkles,
  MousePointer2,
  BarChart3,
} from "lucide-react";
import email from "../../../public/image/email.png";

const services = [
  {
    number: "01",
    title: "Email Campaigns",
    text: "Engaging campaigns designed to reach the right audience at the right time.",
  },
  {
    number: "02",
    title: "Email Automation",
    text: "Automated customer journeys that nurture leads and drive repeat engagement.",
  },
  {
    number: "03",
    title: "Personalization",
    text: "Relevant email experiences built around customer interests and behavior.",
  },
  {
    number: "04",
    title: "Analytics & Optimization",
    text: "Continuous testing and performance analysis to improve every campaign.",
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

export default function EmailMarketingServices() {
  return (
    <section
      id="email-marketing-services"
      className="relative overflow-hidden bg-[#f7f5f1] py-10"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#dd0403]/5 blur-3xl" />

        {/* <div className="absolute -left-40 bottom-20 h-[350px] w-[350px] rounded-full bg-[#dd0403]/5 blur-3xl" /> */}

        {/* <div className="absolute left-1/2 top-0 h-full w-px bg-black/[0.035]" /> */}
      </div>

      <div className="relative mx-auto max-w-[90%] px-5 sm:px-8 lg:px-10">

        {/* =========================================================
            HEADER
        ========================================================== */}
   <div className=" flex justify-between ">
   <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#dd0403]" />

            <span className="text-xs font-[500] uppercase tracking-[0.22em] text-[#dd0403]">
              Email Marketing Services in Rajkot
            </span>
          </div>

          {/* Heading */}

         <h2 className="text-4xl font-[500] leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[48px]">
  Result-Driven{" "}
  <span className="text-[#dd0403]">
    Email Marketing
  </span>{" "}
  <br />
  Services in Rajkot
</h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-5 text-black/55 sm:text-md">
       Grow your business with strategic email marketing campaigns, automation, personalization and data-driven optimization designed to generate leads, increase engagement and drive conversions.
          </p>
        </motion.div>
    <div className=" flex  space-evenly w-[250px] ">
    {/* <div className="w-[300px] "> */}
          <img src={email} alt="Email Marketing" className="w-full h-auto" />
        </div>
    {/* </div> */}
   </div>
     

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <div className="mt-4 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* =======================================================
              LEFT — EMAIL VISUAL
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[250px]"
          >
            {/* Vertical line */}

            <div className="absolute left-4 top-0 h-[70%] w-px bg-black/10" />

            {/* Step 01 */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex gap-5"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f7f5f1]">
                <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
              </div>

              <div className="pt-0">
                {/* <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                  Step 01
                </p> */}

                <h3 className="mt-0 text-xl font-semibold">
                  Reach
                </h3>

                <p className="mt-0 max-w-xs text-xs leading-3 text-black/50">
               Reach the right customers with targeted email campaigns.
                </p>
              </div>
            </motion.div>

            {/* Step 02 */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="relative mt-8 flex gap-5"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f7f5f1]">
                <span className="h-2 w-2 rounded-full bg-[#dd0403]" />
              </div>

              <div className="pt-0">
                {/* <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                  Step 02
                </p> */}

                <h3 className="mt-0 text-xl font-semibold">
                  Engage
                </h3>

                <p className="mt-0 max-w-xs text-xs leading-4 text-black/50">
                  Build meaningful relationships through personalized email experiences.
                </p>
              </div>
            </motion.div>

            {/* Step 03 */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative mt-4 flex gap-5"
            >
              <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ml-0.5 border-[#dd0403]/30 bg-[#dd0403] text-white">
                <Check size={17} strokeWidth={3} />
              </div>

              <div className="">
                {/* <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dd0403]">
                  Step 03
                </p> */}

                <h3 className="mt-0 text-xl font-semibold">
                  Convert
                </h3>

                <p className="mt-0 max-w-xs text-xs leading-4 text-black/50">
              Turn engaged subscribers into qualified leads, sales and loyal customers.
                </p>
              </div>
            </motion.div>

            {/* Floating email notification */}

            {/* <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 bottom-18 hidden w-52 rounded-2xl border border-black/10 bg-transparent p-3 shadow-[0_20px_50px_rgba(0,0,0,0.09)] sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#dd0403]/10 text-[#dd0403]">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    Campaign Sent
                  </p>

                  <p className="mt-0.5 text-[10px] text-black/40">
                    Right audience · Right time
                  </p>
                </div>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "82%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full rounded-full bg-[#dd0403]"
                />
              </div>
            </motion.div> */}

          </motion.div>

          {/* =======================================================
              RIGHT — SERVICES
          ======================================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="border-t border-black/10"
          >
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={item}
                className="group border-b border-black/10 py-1.5"
              >
                <div className="flex items-start gap-5 sm:gap-8">

                  {/* Number */}

                  <span className="pt-1 text-xs font-[500] text-black/25">
                    {service.number}
                  </span>

                  {/* Content */}

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-5 ">
                      <h3 className="text-2xl font-[500] tracking-tight transition-colors duration-300 group-hover:text-[#dd0403] sm:text-[15px] ">
                        {service.title}
                      </h3>

                      <motion.div
                        whileHover={{
                          rotate: 45,
                          scale: 1.1,
                        }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors group-hover:border-[#dd0403] group-hover:bg-[#dd0403] group-hover:text-white"
                      >
                        <ArrowUpRight size={14} />
                      </motion.div>
                    </div>

                    <p className=" max-w-xl text-sm leading-4 text-black/50 sm:text-xs">
                      {service.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM PERFORMANCE STRIP
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-0 border-y border-black/10 py-2"
        >
          <div className="grid gap-6 sm:grid-cols-3">

            {/* Item */}

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Mail size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Personalized
                </p>

                <p className="text-xs text-black/40">
                  Messages that matter
                </p>
              </div>
            </div>

            {/* Item */}

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8  items-center justify-center rounded-full bg-[#dd0403] text-white">
                <BarChart3 size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Data Driven
                </p>

                <p className="text-xs text-black/40">
                  Measure every campaign
                </p>
              </div>
            </div>

            {/* Item */}

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Sparkles size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Conversion Focused
                </p>

                <p className="text-xs text-black/40">
                  Built for business growth
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-7 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#dd0403]">
              Ready to connect?
            </p>

            <p className="mt-1 text-xl font-semibold tracking-tight">
              Let's turn your inbox into a growth channel.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center justify-center gap-3 bg-[#dd0403] px-4 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_15px_35px_rgba(221,4,3,0.2)]"
          >
            Start Your Campaign

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}