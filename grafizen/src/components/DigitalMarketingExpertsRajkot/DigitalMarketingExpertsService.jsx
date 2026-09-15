import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Megaphone,
  Share2,
  MousePointerClick,
  FileText,
} from "lucide-react";
import bulk from "../../../public/image/digitalmarketing/Video.png";
import Socialmedia from "../../../public/image/digitalmarketing/Socialmedia.png";
import campaign from "../../../public/image/digitalmarketing/Video.png";
import segmentation from "../../../public/image/digitalmarketing/Strategy.png";
import personalization from "../../../public/image/digitalmarketing/Conversion.png";
import automation from "../../../public/image/digitalmarketing/infu.png";

export default function EmailServices() {
  const [active, setActive] = useState(0);

  const services = [
    {
      number: "01",
      title: " Video Marketing",
      description:
        "Using engaging video content on websites, social media, or platforms like YouTube to tell a brand's story, explain products, or educate the audience.",
      keyword: "VIRAL GROWTH",
      image: campaign,
      icon: Clapperboard,
    },
    {
      number: "02",
      title: "Performance & Influencer Marketing",
      description:
        "Partner with relevant creators and run data-led campaigns to build social trust and drive measurable revenue growth.",
      keyword: "REACH",
      // Aap yahan naya image variable import karke laga sakte hain
      image: automation,
      icon: Megaphone,
    },
    {
      number: "03",
      title: "Social Media Marketing",
      description:
        "Engaging content creation and audience management across major platforms to build brand authority and foster loyal client communities.",
      keyword: "ENGAGEMENT",
      image: Socialmedia,
      icon: Share2,
    },
    {
      number: "04",
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Strategic landing page design and user experience tweaks engineered to turn casual website visitors into active, paying customers.",
      keyword: "CONVERSIONS",
      image: personalization,
      icon: MousePointerClick,
    },
    {
      number: "05",
      title: "Content Marketing & Strategy",
      description:
        "High-value written and visual storytelling tailored to address user intent, build industry trust, and nurture leads through the sales funnel.",
      keyword: "AUTHORITY",
      image: segmentation,
      icon: FileText,
    },
  ];

  // Zig-zag positioning
  const positions = [
    "lg:ml-0",
    "lg:ml-[12%]",
    "lg:ml-[25%]",
    "lg:ml-[12%]",
    "lg:ml-0",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 lg:py-12  py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1350px]">
        {/* HEADER */}
        <div className="mb-10 flex flex-col justify-between md:gap-6 lg:flex-row lg:items-end">
          <div>
            {/* <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dd0403]" />

              <span className="text-[9px] font-bold tracking-[0.3em] text-[#dd0403]">
                OUR SERVICES
              </span>
            </div> */}
            <div class="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span class="h-px w-7 bg-[#dd0403]"></span>
              <span> OUR SERVICES</span>
            </div>

            <h2 className="max-w-2xl text-3xl font-medium  tracking-[-0.05em] text-black sm:text-4xl lg:text-[48px]">
              Everything Your Growth <br />
              <span> Strategy</span>
              <span className="text-[#dd0403] ml-2">Needs.</span>
            </h2>
          </div>

          <p className="mt-6 max-w-xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]">
            From search optimization to targeted ads and conversions, we build
            full-funnel digital marketing systems tailored around your target
            audience.
          </p>
        </div>

        {/* MAIN AREA */}
        <div className="grid lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* ZIG ZAG SERVICES */}
          <div className="relative">
            {services.map((service, index) => {
              const isActive = active === index;
              const ServiceIcon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  onMouseEnter={() => setActive(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`relative mb-1 transition-all duration-500 ${positions[index]}`}
                >
                  <div
                    className={`
                      group relative cursor-pointer
                      border-b border-gray-200
                      py-4
                      transition-all duration-500
                      lg:max-w-[570px]
                    `}
                  >
                    <div className="flex md:items-center  md:gap-4 gap-3 ">
                      {/* NUMBER */}
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center bg-white">
                        <motion.div
                          animate={{
                            color: isActive ? "#dd0403" : "#9ca3af",
                            scale: isActive ? 0.8 : 0.6,
                          }}
                          className="flex items-center justify-center"
                        >
                          <ServiceIcon className="h-7 w-7" strokeWidth={1.8} />
                        </motion.div>

                        <motion.span
                          animate={{
                            scale: isActive ? 1  : 0.72,
                            borderColor: isActive ? "#dd0403" : "#e5e7eb",
                          }}
                          className="absolute inset-0 rounded-full border"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <motion.h3
                            animate={{
                              x: isActive ? 6 : 0,
                            }}
                            className={`
                              text-[16px]
                              font-medium
                              tracking-[-0.025em]
                              sm:text-[19px]
                              ${isActive ? "text-[#dd0403]" : "text-gray-500"}
                            `}
                          >
                            {service.title}
                          </motion.h3>

                          {/* ARROW */}
                          <motion.div
                            animate={{
                              backgroundColor: isActive
                                ? "#dd0403"
                                : "transparent",
                              color: isActive ? "#ffffff" : "#d1d5db",
                              rotate: isActive ? 0 : 0,
                            }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 max-w-lg text-[11px] font-light leading-4 text-gray-500 sm:text-[12px]">
                                {service.description}
                              </p>

                              <span className="mt-3 inline-block text-[8px] font-bold tracking-[0.25em] text-gray-500">
                                {service.keyword}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative mt-8 hidden min-h-[440px] lg:mt-0 lg:block -ml-12">
            <div className="sticky top-10 h-[440px] min-w-[400px] overflow-hidden ">
              {/* IMAGE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute inset-[35px] overflow-hidden 
                  min-h-[400px]
               "
                >
                  <img
                    src={services[active].image}
                    alt={services[active].title}
                    className="h-full w-full object-contain"
                  />

                  {/* Image label */}
                  {/* <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between ">
                    <div>
                      <p className="text-[8px] font-bold tracking-[0.3em] text-black">
                        DIGITAL MARKETING
                      </p>

                      <p className="mt-1 max-w-[200px] text-lg font-medium leading-tight text-[#dd0403] ">
                        {services[active].keyword}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        {/* <div className="mt-8 lg:hidden">
          <div className="relative h-[280px] overflow-hidden rounded-[70px_15px_70px_15px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={services[active].image}
                alt={services[active].title}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-5 left-5">
              <p
                className="text-[8px] font-bold tracking-[0.3em] 
              text-white"
              >
                DIGITAL MARKETING
              </p>

              <p className="mt-1 text-xl font-medium text-white">
                {services[active].keyword}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
