import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import  { useState } from "react";

export default function WhyChooseUs() {
  // Data for the left column features
  const leftFeatures = [
    {
      title: "Proven Enterprise Excellence",
      description:
      "Our strength as a reliable enterprise software development company comes from experience across complex environments. Leading brands rely on us to deliver scalable software built for real users, data, and operations.",

      offset: "lg:translate-x-12",
    },
    {
      title: "DevOps and Agile Delivery",
      description:
        "Enterprises want speed, but they also want stability. Our DevOps-first model gives them both. CI/CD pipelines, automated testing suites, and container-led deployments with Docker and Kubernetes help us cut delivery cycles by nearly 40%.",
      offset: "lg:-translate-x-4",
    },
    {
      title: "Security-First Architecture",
      description:
        "Security guides every architectural decision we make. We build systems that naturally align with frameworks like HIPAA, PCI-DSS, and GDPR. Data tokenization, API security, and continuous threat monitoring help reduce risk and limit your compliance exposure.",
      offset: "lg:translate-x-12",
    },
  ];

  // Data for the right column features
  const rightFeatures = [
    {
      title: "Innovation at the Core",
      description:
        "Innovation isn't something we bolted onto our workflow - it's how we approach every project. Whether it's AI and machine learning, data analytics, microservices, or event-driven architectures, we look for ways to ensure your platform doesn't age before it launches.",
      offset: "lg:-translate-x-12",
    },
    {
      title: "2000+ Successful Projects",
      description:
        "Our experience spans more than 2000 successful software projects, giving enterprises the confidence to work with a team experienced in delivering complex digital solutions across industries and business environments.",
      offset: "lg:translate-x-4",
    },
    {
      title: "Trusted Enterprise Partnership",
      description:
        "Our consistent delivery has earned recognition from organizations including Deloitte, Statista, and Clutch. We focus on building long-term technology partnerships that help enterprises adapt, scale, and stay competitive.",
      offset: "lg:-translate-x-12",
    },
  ];
  const [openFeature, setOpenFeature] = useState(null);
  const [openRightFeature, setOpenRightFeature] = useState(null);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden  min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Title */}
        <div className="mb-4 sm:mb-16 grid gap-2 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left - Heading */}
          <div>
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Why Choose Grafizen</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[500] leading-tight lg:leading-12 tracking-[-0.045em] text-black">
              Why Choose Grafizen for{" "} <br />
              <span className="text-[#dd0403]">Software Development</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="max-w-4xl">
            <p className="mt-2 sm:mt-6 max-w-3xl text-[13px] sm:text-[14px] sm:leading-5 text-black/55 font-[300]">
             Choosing a custom software development company takes trust. Our enterprise expertise, secure solutions, and innovative approach help businesses build scalable software for lasting growth.
            </p>
          </div>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 md:mt-16 mt-5 lg:grid-cols-[1.1fr_0.8fr_1.1fr] gap-6 lg:gap-4 items-center">
          {/* LEFT COLUMN */}
         <div className="flex flex-col gap-4 lg:gap-8 w-full max-w-md mx-auto">
  {leftFeatures.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`
        bg-[#feebeb] px-8 md:py-4 py-3
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        md:rounded-tl-[6rem] md:rounded-br-[6rem]
        rounded-tl-[3rem] rounded-br-[3rem]
        rounded-tr-2xl rounded-bl-2xl
        ${feature.offset}
        relative z-10 shadow-md transition-shadow
      `}
    >
      {/* Mobile */}
      <button
        type="button"
        onClick={() =>
          setOpenFeature(openFeature === index ? null : index)
        }
        className="lg:hidden w-full flex items-center justify-between gap-3"
      >
        <h3 className="text-base font-[400] text-[#dd0403] text-left">
          {feature.title}
        </h3>

        <ChevronDown
          size={18}
          className={`text-[#dd0403] shrink-0 transition-transform duration-300 ${
            openFeature === index ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile Description */}
      <motion.div
        initial={false}
        animate={{
          height: openFeature === index ? "auto" : 0,
          opacity: openFeature === index ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden"
      >
        <p className="pt-2 text-black/55 text-xs leading-tight font-[300]">
          {feature.description}
        </p>
      </motion.div>

      {/* Desktop - unchanged */}
      <div className="hidden lg:block">
        <h3 className="text-lg font-[400] text-[#dd0403] mb-1 text-center">
          {feature.title}
        </h3>

        <p className="text-black/55 text-xs text-center leading-tight font-[300]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>

          {/* CENTER IMAGE (ASTRONAUT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="flex justify-center relative z-0  lg:py-0"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              src="./image/whychoose.png"
              alt="Enterprise Software Development"
              className="w-56 md:w-72 h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* RIGHT COLUMN */}
         <div className="flex flex-col gap-4 lg:gap-8 w-full max-w-md mx-auto">
  {rightFeatures.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`
        bg-[#feebeb] px-8 md:py-4 py-3
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        md:rounded-tr-[6rem] md:rounded-bl-[6rem]
         rounded-tr-[3rem] rounded-bl-[3rem]
        rounded-tl-2xl rounded-br-2xl
        ${feature.offset}
        relative z-10 shadow-md transition-shadow
      `}
    >
      {/* Mobile */}
      <button
        type="button"
        onClick={() =>
          setOpenRightFeature(
            openRightFeature === index ? null : index
          )
        }
        className="lg:hidden w-full flex items-center justify-between gap-3"
      >
        <h3 className="text-base font-[400] text-[#dd0403] text-left">
          {feature.title}
        </h3>

        <ChevronDown
          size={18}
          className={`text-[#dd0403] shrink-0 transition-transform duration-300 ${
            openRightFeature === index ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile Description */}
      <motion.div
        initial={false}
        animate={{
          height: openRightFeature === index ? "auto" : 0,
          opacity: openRightFeature === index ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden"
      >
        <p className="pt-2 text-black/55 text-xs text-left leading-tight font-[300]">
          {feature.description}
        </p>
      </motion.div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <h3 className="text-lg font-[400] text-[#dd0403] mb-1 text-center">
          {feature.title}
        </h3>

        <p className="text-black/55 text-xs text-center leading-tight font-[300]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}