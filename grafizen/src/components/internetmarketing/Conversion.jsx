import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const timeline = [
  {
    title: "Get More Qualified Visitors",
    text: "Bring in ready-to-buy local and global customers through targeted Google Ads and performance marketing.",
  },
  {
    title: "Turn Visitors Into Customers",
    text: "Convert casual website browsers into paying clients with clear, persuasive messaging and conversion-focused design.",
  },
  {
    title: "Maximize Your Sales & Profits",
    text: "Stop guessing what works — get clear reports, higher returns on ad spend, and lower acquisition costs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Conversion() {
  return (
    <section className="bg-white px-4 py-10 text-black sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.08fr_1.02fr] lg:items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 sm:space-y-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Partner Benefits</span>
            </div>

            <h2 className="max-w-[650px] text-[26px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium leading-[1.08] lg:leading-[0.96] tracking-[-0.04em] text-black">
              The Benefits of{" "}
              <span className="block mt-1 sm:mt-0">
                <span className="text-[#dd0403]">Partnering With Us</span>
              </span>
            </h2>

            <h3 className="max-w-[620px] text-[20px] sm:text-[18px] md:text-[28px] lg:text-2xl leading-[1.1] lg:leading-[0.98] tracking-[-0.05em] lg:tracking-[-0.06em] text-black/70">
              What Real Digital Growth Looks Like For Your Business.
            </h3>

            <p className="max-w-[620px] text-[15px] sm:text-[16px] lg:text-[15px] leading-relaxed lg:leading-[1.08] text-black/55">
              Turn clicks into revenue with data-driven strategies tailored for growing businesses.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <motion.a
                href="https://grafizen.com/contact-us"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center gap-2 sm:gap-3 rounded-full bg-[#dd0403] px-5 text-[13px] font-medium text-white transition duration-300 hover:bg-[#bd0303] md:h-12 md:px-6 md:text-[15px] shadow-[0_4px_14px_rgba(221,4,3,0.2)]"
              >
                <span>Request a Proposal</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Timeline Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative pl-3 sm:pl-4 md:pl-0"
          >
            <div className="absolute left-[12px] sm:left-0 top-6  h-[74%]  sm:h-[75%] w-[3px] rounded-full bg-[#dd0403]" />

            <div className="space-y-5">
              {timeline.map(({ title, text }) => (
                <motion.div key={title} variants={fadeUpVariants} className="relative pl-7 sm:pl-8">
                  <div className="absolute sm:-left-[8px] -left-[8px] top-4   sm:top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#dd0403] bg-white text-[10px] text-black shadow-[0_0_0_4px_rgba(221,4,3,0.08)]">
                    <span className="block h-2 w-2 rounded-full bg-[#dd0403]" />
                  </div>

                  <div className="rounded-[15px] border border-black/10 bg-white p-4 sm:p-5 shadow-[0_12px_30px_rgba(17,17,17,0.04)] sm:shadow-[0_18px_40px_rgba(17,17,17,0.04)] transition-all duration-300 hover:border-[#dd0403]/30">
                    <div className="mb-1.5 flex items-center gap-3 text-[15px] sm:text-[16px] font-[400] leading-[1.2] tracking-[-0.04em] sm:tracking-[-0.01em] text-black">
                      <span>{title}</span>
                    </div>

                    <p className="max-w-[620px] text-[13px] sm:text-[14px] leading-relaxed text-black/60 sm:text-black/55  font-[300]">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}