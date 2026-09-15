import React from "react";
import { motion } from "framer-motion";
import { Quote, Rocket, ArrowRight } from "lucide-react";
import leptop from "../../../public/image/CompleteServices/shopping.webp";

const stats = [
  ["500+", "Businesses Scaled", ""],
  ["10+", "Years of Industry", "Experience"],
  ["300%", "Average Client", "ROI Growth"],
];

export default function ReplicatedHero() {
  const ImageBlock = () => (
    <div className="relative flex min-h-[280px] sm:min-h-[390px]  lg:min-h-0 items-end justify-center w-full mb-4 lg:mb-0 sm:my-6 lg:my-0">
      <img 
        src="/image.png"
        alt="Digital marketing consultant"
        className="relative z-10 h-[260px] xs:h-[300px] sm:h-[400px] md:h-[460px] lg:absolute lg:bottom-12 lg:right-[70px] lg:h-[450px] max-w-full object-contain object-bottom  drop-shadow-[0_26px_28px_rgba(17,17,17,0.22)] "
        
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.55 }}
        className="absolute lg:bottom-2 right-0 left-auto translate-x-0 sm:right-auto sm:left-4 z-20 w-[calc(100%-32px)] lg:max-w-[220px] rounded-xl bg-white/95 backdrop-blur-md lg:p-3 p-2  shadow-lg border border-stone-200/80 max-w-[200px] "
      >
        <div className="absolute -top-5 lg:right-2 -right-2  h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#dbe9f5] shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
            alt="Client"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:mt-3 flex gap-2">
          <Quote className="h-4 w-4 shrink-0 fill-[#dd0403] text-[#dd0403]" />
          <p className="text-[10px] sm:text-[11px] font-semibold leading-snug text-[#1f1f1f]">
            "Working with the right digital marketing strategy helped us
            increase our online leads and achieve measurable growth."
          </p>
        </div>
        <p className="lg:mt-2 text-[9px] sm:text-[10px] font-semibold text-[#111111]">
          — Happy Client
        </p>
      </motion.div>
    </div>
  );

  const CTAButton = () => (
    <motion.a
      href="https://grafizen.com/contact-us"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex min-h-10 w-full max-w-[360px] items-center justify-center rounded-full bg-[#dd0403] px-5 py-2.5 text-center text-xs font-bold leading-tight text-white shadow-[0_3px_10px_rgba(221,4,3,0.22)] sm:w-fit sm:px-8 sm:text-sm lg:px-11"
    >
      Claim Your Free 15-Min Strategy Call{" "}
      <ArrowRight className="ml-2 h-4 w-4" />
    </motion.a>
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-3 pb-8 pt-10 text-[#111111] sm:px-6 sm:py-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-0 w-full max-w-[1300px] overflow-hidden rounded-[30px] bg-white sm:rounded-[42px] lg:min-h-[610px] lg:rounded-[54px] "
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
            d="M 62 45 Q 28 45 28 80 L 28 522 Q 28 565 70 565 L 416 565 Q 432 565 432 549 L 432 536 Q 432 520 448 520 L 1062 520 Q 1082 520 1082 500 L 1082 194 Q 1082 154 1044 154 L 605 154 Q 562 154 562 112 L 562 86 Q 562 45 520 45 Z"
            fill="url(#heroGray)"
          />
          <path
            d="M 62 45 Q 28 45 28 80 L 28 522 Q 28 565 70 565 L 416 565 Q 432 565 432 549 L 432 536 Q 432 520 448 520 L 1062 520 Q 1082 520 1082 500 L 1082 194 Q 1082 154 1044 154 L 605 154 Q 562 154 562 112 L 562 86 Q 562 45 520 45 Z"
            fill="none"
            stroke="#dd0403"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>

        {/* <div className="absolute inset-2 rounded-[24px] border-2 border-[#dd0403] bg-gradient-to-br from-[#eeeeee] via-[#f7f7f7] to-[#e9e9e9] sm:inset-4 sm:rounded-[30px] sm:border-[3px] lg:hidden" /> */}

        {/* Mobile & Tablet View (< lg) */}
        <div className="flex flex-col lg:hidden lg:space-y-4 space-y-3 p-1 xs:p-6 sm:p-8">
          {/* Top Tagline Heading */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#dd0403]/10 px-3.5 py-1 text-[#dd0403]">
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em]">
              DATA-DRIVEN DIGITAL MARKETING CONSULTANT
            </span>
          </div>

          {/* Main Heading 1 */}
          <h1 className="text-[26px] xs:text-[30px] sm:text-[42px] font-semibold leading-[1.08] text-[#111111]">
            Digital Marketing
            <span className="block text-[#dd0403]">Consultant</span>
          </h1>

          {/* Heading 2 */}
          <h2 className="text-[17px] xs:text-[20px] sm:text-[24px] font-bold leading-[1.15] text-[#111111] hidden mg:flex">
            Driving Growth, <span>Delivering Results!</span>
          </h2>

          <ImageBlock />

          <div className="space-y-5 pt-1">
            <p className="text-[13px] sm:text-[15px] font-medium leading-[1.35] text-[#171717]">
              Looking for a trusted Digital Marketing Consultant ? We create
              data-driven marketing strategies that help businesses increase
              online visibility, generate quality leads, and achieve measurable
              business growth.
            </p>

            <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4">
              {stats.map(([value, lineOne, lineTwo]) => (
                <div key={value} className="min-w-0">
                  <p className="text-[18px] xs:text-[20px] sm:text-[28px] font-extrabold text-center leading-none tracking-tight text-[#111111]">
                    {value}
                  </p>
                  <p className="mt-1 break-words text-[9px] sm:text-[11px] text-center font-medium leading-[1.1] text-[#171717]">
                    {lineOne}
                    {lineTwo && <span className="block">{lineTwo}</span>}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 flex justify-center sm:justify-start">
            <CTAButton />
          </div>
        </div>

        {/* Desktop View (>= lg) */}
        <div className="relative z-10 hidden lg:grid min-h-0 grid-cols-1 gap-10 px-1 pt-2 sm:gap-12 sm:px-12 sm:pb-10 sm:pt-12 lg:min-h-[610px] lg:grid-cols-[0.58fr_0.42fr] lg:gap-8 lg:px-[74px] lg:pb-11 lg:pt-[78px]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex w-full max-w-[470px] flex-col justify-center "
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full lg:bg-white/45 px-4 py-1.5 shadow-sm backdrop-blur">
              {/* <Rocket className="h-3.5 w-3.5 text-[#dd0403]" /> */}
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#dd0403] sm:text-[11px] sm:tracking-[0.22em]">
                DATA-DRIVEN DIGITAL MARKETING CONSULTANT
              </span>
            </div>

            <h1 className="mt-5 text-[28px] font-semibold leading-[1.05] text-[#111111] sm:text-[52px] sm:leading-[1.08] lg:text-[48px]">
              Digital Marketing
              <span className="block text-[#dd0403]">
                Consultant
                {/* <span className=" text-[#111111]">in Rajkot </span> */}
              </span>
            </h1>

            <h2 className="mt-3 text-[18px] font-bold leading-[1.1] text-[#111111] sm:text-[24px] lg:text-[20px]">
              Driving Growth,
              <span className=" sm:inline"> Delivering Results!</span>
            </h2>

            <p className="lg:mt-0.5-5 max-w-[620px] text-[13px] mt-3 font-medium leading-[1.35] text-[#171717] sm:text-[15px] sm:leading-[1.2]">
              Looking for a trusted Digital Marketing Consultant ? We create
              data-driven marketing strategies that help businesses increase
              online visibility, generate quality leads, and achieve measurable
              business growth.
            </p>

            <div className="mt-6">
              <CTAButton />
            </div>

            <div className="mt-6 grid w-full max-w-[360px] grid-cols-3 gap-2 border-t border-black/10 pt-5 sm:gap-7">
              {stats.map(([value, lineOne, lineTwo]) => (
                <div key={value} className="min-w-0">
                  <p className="text-[20px] font-extrabold text-center lg:text-start leading-none tracking-tight text-[#111111] sm:text-[31px]">
                    {value}
                  </p>
                  <p className="mt-1 break-words text-[9px] text-center lg:text-start   font-medium leading-[1.1] text-[#171717] sm:text-[11px] sm:leading-[1.05]">
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
            className="relative flex items-end justify-center min-h-0"
          >
            <ImageBlock />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
