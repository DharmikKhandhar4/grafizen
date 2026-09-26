import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  Wifi,
} from "lucide-react";

const technologies = [
  {
    id: "01",
    title: "AI/ML",
    icon: BrainCircuit,
    description:
      "It is our forte to form smart custom Android apps, smart suggestions, and automated customer support through AI app development services.",
  },
  {
    id: "02",
    title: "Cloud Computing",
    icon: Cloud,
    description:
      "Host your business apps on the cloud in a go and permit  user to enjoy high-end scalability , agile working with our splendid cloud computing services.",
  },
  {
    id: "03",
    title: "Big Data",
    icon: Database,
    description:
      "Infuse big data in your custom Android apps to get your hands on advanced data services to understand your users and adopt the market trends.",
  },
  {
    id: "04",
    title: "IoT",
    icon: Wifi,
    description:
      "Go ahead with the IoT to connect a system for all your apps to apply smart home automation,  customer analytics, warehouse management, etc.",
  },
];

export default function AndroidAppTech({
  centerImage = "/image/androidapp/next.png",
}) {
  const leftTechnologies = technologies.slice(0, 2);
  const rightTechnologies = technologies.slice(2, 4);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
      {/* Background Soft Glow Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#dd0403]/[0.03] blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#dd0403]/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            HEADER SECTION
        ========================================== */}
        <div className="mx-auto max-w-[850px] text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[26px] sm:text-[34px] md:text-[48px] font-[600] leading-[1.1] tracking-tight text-[#111]"
          >
            Next-Gen Tech We Adapt in Our{" "}
            <span className="text-[#dd0403]">Android Applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-[14px] sm:text-[14px] font-[300] leading-relaxed text-black/55 max-w-[650px] mx-auto"
          >
            Whatever the idea you have in mind, we can turn it into reality. See what
            latest technologies we have on our hands.
          </motion.p>
        </div>

        {/* =========================================
            3-COLUMN LAYOUT: 
            LEFT (2 CARDS) | CENTER (IMAGE) | RIGHT (2 CARDS)
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* =========================================
              LEFT COLUMN: 2 CARDS (lg:col-span-4)
          ========================================== */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-1">
            {leftTechnologies.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-[#dd0403]/90 bg-white p-6 sm:p-3 shadow-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:shadow-[0_12px_32px_rgba(221,4,3,0.08)] hover:-translate-y-1 md:px-4"
                >
              <div className="flex items-center gap-4"  >
                    {/* Icon Box */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className=" text-[19px] sm:text-[21px] font-[400] text-[#111] leading-snug transition-colors duration-300 group-hover:text-[#dd0403]">
                    {item.title}
                  </h3>
              </div>

                  {/* Description */}
                  <p className="mt-2 text-[13.5px] sm:text-[14px] font-[300] leading-tight text-black/55">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* =========================================
              CENTER COLUMN: TECH / PHONE IMAGE (lg:col-span-4)
          ========================================== */}
          <div className="lg:col-span-6 flex items-center justify-center order-2 my-4 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[400px] flex items-center justify-center"
            >
              {/* Soft ambient background glow */}
          

              <img
                src={centerImage}
                alt="Next-Gen Android Tech"
                className="relative z-10 w-full max-h-[460px] object-contain rounded-[120px]"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </motion.div>
          </div>

          {/* =========================================
              RIGHT COLUMN: 2 CARDS (lg:col-span-4)
          ========================================== */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-3">
            {rightTechnologies.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-[#dd0403]/90 bg-white p-6 sm:p-3 shadow-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:shadow-[0_12px_32px_rgba(221,4,3,0.08)] hover:-translate-y-1 md:px-4"
                >
                <div className="flex items-center gap-4"  >
                    {/* Icon Box */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd0403] text-white shadow-md shadow-[#dd0403]/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className=" text-[19px] sm:text-[21px] font-[400] text-[#111] leading-snug transition-colors duration-300 group-hover:text-[#dd0403]">
                    {item.title}
                  </h3>
                </div>

                  {/* Description */}
                  <p className="mt-2 text-[13.5px] sm:text-[14px] font-[300] leading-tight text-black/55">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
