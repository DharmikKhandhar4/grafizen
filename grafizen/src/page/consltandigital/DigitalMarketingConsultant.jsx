import React from "react";
import { motion } from "framer-motion";
import { Quote, Rocket } from "lucide-react";
import leptop from "../../../public/image/CompleteServices/shopping.webp";

const stats = [
  ["500+", "Businesses Helped", ""],
  ["10+", "Years of Industry", "Experience"],
  ["300%", "Average Client", "ROI Growth"],
];

export default function ReplicatedHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-8 text-[#111111] sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-[610px] w-full max-w-[1300px] overflow-hidden rounded-[42px] bg-white sm:rounded-[54px]"
      >
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1120 610"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heroGray" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#eeeeee" />
              <stop offset="55%" stopColor="#f7f7f7" />
              <stop offset="100%" stopColor="#e9e9e9" />
            </linearGradient>
          </defs>
          <path
            d="M 62 45 Q 28 45 28 80 L 28 522 Q 28 565 70 565 L 432 565 L 432 520 L 1082 520 L 1082 194 Q 1082 154 1044 154 L 605 154 Q 562 154 562 112 L 562 86 Q 562 45 520 45 Z"
            fill="url(#heroGray)"
          />
          <path
            d="M 62 45 Q 28 45 28 80 L 28 522 Q 28 565 70 565 L 432 565 L 432 520 L 1082 520 L 1082 194 Q 1082 154 1044 154 L 605 154 Q 562 154 562 112 L 562 86 Q 562 45 520 45 Z"
            fill="none"
            stroke="#dd0403"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>

        <div className="absolute inset-4 rounded-[30px] border-[3px] border-[#dd0403] bg-gradient-to-br from-[#eeeeee] via-[#f7f7f7] to-[#e9e9e9]  lg:hidden" />

        <div className="relative z-10 grid min-h-[610px] grid-cols-1 gap-8 px-8 pb-9 pt-10 sm:px-12 lg:grid-cols-[0.58fr_0.42fr] lg:px-[74px] lg:pb-11 lg:pt-[78px] ">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex max-w-[470px] flex-col"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/45 px-4 py-1.5 shadow-sm backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-[#dd0403]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dd0403]">
                RAJKOT'S TRUSTED DIGITAL MARKETING CONSULTANT
              </span>
            </div>

            <h1 className="mt-5 text-[42px] font-semibold leading-[1.08]  text-[#111111] sm:text-[56px] lg:text-[48px]">
              Digital Marketing
              <span className="block text-[#dd0403]">Consultant <span className=" text-[#111111]">in Rajkot </span></span>
            </h1>

            <h2 className="mt-3 text-[24px] font-bold leading-[1.1] text-[#111111] sm:text-[20px] flex">
              Driving Growth,
              <span className="block">Delivering Results!</span>
            </h2>

            <p className="mt-5  text-[15px] font-medium leading-[1.2] text-[#171717]">
              Looking for a trusted Digital Marketing Consultant in Rajkot? We
              create data-driven marketing strategies that help businesses
              increase online visibility, generate quality leads, and achieve
              measurable business growth.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex h-10 w-fit items-center justify-center rounded-full  bg-[#dd0403]  px-11 text-sm font-bold text-white shadow-[0_16px_34px_rgba(221,4,3,0.22)]"
            >
              Get a Free Strategy Call →
            </motion.a>

            <div className="mt-6 grid max-w-[360px] grid-cols-3 gap-7 pt-5">
              {stats.map(([value, lineOne, lineTwo]) => (
                <div key={value}>
                  <p className="text-[31px] font-extrabold leading-none tracking-tight text-[#111111]">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-[1.05] text-[#171717]">
                    {lineOne}
                    {lineTwo && <span className="block">{lineTwo}</span>}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="relative flex min-h-[390px] items-end justify-center lg:min-h-0"
          >
           

            <img
              src="/image.png"
              alt="Digital marketing consultant"
              className="relative z-10 h-[430px] w-auto object-contain object-bottom drop-shadow-[0_26px_28px_rgba(17,17,17,0.22)] sm:h-[500px] lg:absolute lg:bottom-12 lg:right-[70px] lg:h-[450px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="absolute bottom-[38px] left-0 z-20 w-[190px] rounded-xl bg-white p-4 shadow-[0_18px_40px_rgba(17,17,17,0.14)] sm:left-5 lg:-left-[135px]"
            >
              <div className="absolute -top-6 right-1 h-11 w-11 overflow-hidden rounded-full border-4 border-white bg-[#dbe9f5] ">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 flex gap-2">
                <Quote className="h-5 w-5 shrink-0 fill-[#dd0403] text-[#dd0403]" />
                <p className="text-[11px] font-semibold leading-[1.18] text-[#1f1f1f]">
                  "Working with the right digital marketing strategy helped us
                  increase our online leads and achieve measurable growth."
                </p>
              </div>
              <p className="mt-3 text-[10px] font-semibold text-[#111111]">
                — Happy Client
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
