import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import androind from "../../../public/image/androidapp/appbg.png";

const AndroidAppHero = () => {
  const features = [
    "Custom Enterprise App Solutions",
    "Engaging User Experience Design",
    "Cross-Platform Development Support",
    "Future-Ready Android Innovation",
  ];

  const brands = [
    {
      name: "Google",
      logo: "/image/digitalmarketing/clientlogo.png",
    },
    {
      name: "Microsoft",
       logo: "/image/digitalmarketing/clientlogo2.png",
    },
    {
      name: "Amazon",
       logo: "/image/digitalmarketing/clientlogo3.png",
    },
    {
      name: "Samsung",
       logo: "/image/digitalmarketing/clientlogo4.png",
    },
    {
      name: "Adobe",
      logo: "/image/digitalmarketing/clientlogo5.png",
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* HERO */}
      <div
        className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-full items-start justify-start  overflow-hidden px-5 sm:px-8 md:px-10 lg:min-h-[720px] lg:px-10 xl:px-20 flex-col"
        style={{
          backgroundImage: `url(${androind})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-[820px] mt-30"
        >

          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/45 mb-3" ><span className="h-px w-7 bg-[#dd0403]"></span><span>Android App Development</span></div>
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-[600px] text-[32px] font-[600] leading-[1.1] tracking-[-0.02em] sm:text-[38px] md:text-[44px] lg:text-[48px]"
          >
            <span className="text-[#dd0403]">Android App </span>
            Development Company
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[600px] text-[16px] font-[300] leading-[1.8] text-black/55 sm:text-[17px] md:text-[15px]"
          >
            As a leading Android app development company, we offer custom
            Android app development services designed to address all your
            Android challenges — helping you build fast, scalable, and
            revenue-focused Android solutions that your users will love.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            className="mt-6 grid max-w-[600px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#dd0403]"
                />

                <span className="text-[14px] font-[300] leading-6 text-black/55 md:text-[14px]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-9">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#dd0403] px-4 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#bd0303] md:px-5"
            >
              <span>Talk to Our Android Experts</span>

              <ArrowRight
                size={20}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>
         {/* TRUSTED BY BRANDS */}
      <div className=" absolute -bottom-6  overflow-hidden  py-10 md:py-8 ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-1 text-center "
        >
          <p className="text-[15px]  flex text-left font-medium uppercase tracking-[0.22em] text-black/45">
            Trusted By Brands
          </p>

          <div className="mx-auto mt-3 h-[2px] w-8 bg-[#dd0403]" />
        </motion.div>

        {/* Logo Slider */}
        <div className="relative w-full overflow-hidden  backdrop-blur-sm">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 " />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 " />

          <motion.div
            className="flex w-max items-center gap-14 md:gap-20 lg:gap-24 bg-transparent drop-shadow-md"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex h-14 w-[120px] shrink-0 items-center justify-center md:w-[140px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-9 max-w-[120px] object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      </div>

     
    </section>
  );
};

export default AndroidAppHero;