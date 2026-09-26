import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AndroidAppExpertise({
  topImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // coding on laptop
  bottomImage = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop", // workspace with monitors
  tallImage = "./image/androidapp/uiux.jpg", // mobile UI wireframes and phone
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
      {/* Background Soft Glow Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#dd0403]/[0.03] blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#dd0403]/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
             {/* Small Top Heading / Kicker */}
            {/* <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#dd0403]" />
              <h3 className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#111] sm:text-[15px] md:text-[16px]">
                BUILT FOR BUSINESS GROWTH
              </h3>
            </motion.div> */}
<div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>BUILT FOR BUSINESS GROWTH</span></div>
            {/* Main Headline */}
            <motion.h2
              variants={fadeUp}
              className="
              md:mt-6 max-w-[700px] text-[30px] font-[500] leading-[23px] md:leading-[1.05] tracking-[-0.04em] text-black sm:text-[50px] lg:text-[48px]"
            >
              Our Android App Development{" "}
              <span className="text-[#dd0403]">Expertise</span>
            </motion.h2>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 mt-8">
          
          
          {/* =========================================
              LEFT COLUMN: CONTENT
          ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
       

            {/* Paragraphs */}
            <motion.div
              variants={fadeUp}
              className="space-y-4 text-[14px] font-[300] leading-[1.55] text-black/55 sm:text-[15px]"
            >
              <p>
               Your business grows when you partner with a team that truly understands mobile technology. We specialize in Android app development, delivering complete solutions from start to finish with expert consulting, strategic planning, smart design, thorough testing, and continuous support after launch.
              </p>

              <p>
             Every project we handle focuses on solving business challenges and improving application performance and user experience. As an Android app development company, we build custom connections to payment infrastructure, booking platforms, CRM tools, inventory management, analytics software, and cloud environments. These integrations help your organization work faster and eliminate repetitive tasks.
              </p>

              <p>
               Our skilled professionals create applications that are simple to use, built to last, and easy to maintain. We ensure each solution performs reliably and fits seamlessly into your current systems, boosting operational efficiency while providing real value to your customers.
              </p>

              <p>
             With our experience and commitment to quality, we transform your digital vision into a powerful mobile solution that supports business growth and long-term success.
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: 3-IMAGE COLLAGE
          ========================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-3 items-stretch">
              
              {/* Left Sub-column: 2 stacked images */}
              <div className="col-span-6 flex flex-col justify-between gap-3 sm:gap-4 md:gap-3">
                {/* Top Image: Coding / Laptop */}
                <motion.div
                  variants={imageVariants}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#dd0403]/30 h-[170px] sm:h-[210px] md:h-[180px]"
                >
                  <img
                    src={topImage}
                    alt="Android App Programming & Code Development"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>

                {/* Bottom Image: Developer / Workspace */}
                <motion.div
                  variants={imageVariants}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#dd0403]/30 h-[170px] sm:h-[210px] md:h-[180px]"
                >
                  <img
                    src={bottomImage}
                    alt="Developer Workspace & Engineering Support"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </div>

              {/* Right Sub-column: 1 tall vertical image */}
              <div className="col-span-6 flex">
                <motion.div
                  variants={imageVariants}
                  className="group relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#dd0403]/30 min-h-[352px] sm:min-h-[360px] md:min-h-[360px]"
                >
                  <img
                    src={tallImage}
                    alt="Mobile App UX/UI Prototyping & Architecture"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
