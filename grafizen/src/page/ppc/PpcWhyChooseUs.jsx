import React from "react";
import { motion, } from "framer-motion";

export default function WhyChooseUs() {
  // Data for the left column features
  const leftFeatures = [
    {
      title: "Expertise and Experience",
      description:
        "Our team of certified PPC experts has years of experience managing successful campaigns across various industries.",
      offset: "lg:translate-x-12", // Pushes the card towards the center
    },
    {
      title: "Customized Solutions",
      description:
        "Every business has unique needs. We customized our strategies that meet your business needs and goals.",
      offset: "lg:-translate-x-4", // Pushes the card away from the center
    },
    {
      title: "Transparent Reporting",
      description:
        "We believe in open communication. That's why we provide clear, detailed reports so you can see the impact of our efforts.",
      offset: "lg:translate-x-12",
    },
  ];

  // Data for the right column features
  const rightFeatures = [
    {
      title: "Continuous Support",
      description:
       "Our team provides ongoing support and optimization, ensuring your campaigns stay effective and competitive.",
      offset: "lg:-translate-x-12",
    },
    {
      title: "Proven Results",
      description:
        "With years of experience we have a track record of delivering measurable results and maximizing ROI.",
      offset: "lg:translate-x-4",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your satisfaction and your success. For that, we work closely with you to maintain clear communication.",
      offset: "lg:-translate-x-12",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Title */}
        {/* <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-10"
        >
          <h2 className="text-3xl md:text-[48px] font-[500] ">

         Why Choose 
         <span className=" text-[#dd0403] pl-3"> 
                  Grafizen for PPC?         
         </ span>

          </h2>
        </motion.div> */}
         <motion.div
                  
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mx-auto max-w-4xl text-center"
                >
                  <motion.p className="mb-5 flex items-center  justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45 text-center"><span className="h-px w-7 bg-[#dd0403] "></span>
                  <span>  Why Choose Grafizen  </span>
                  </motion.p>
                
        
                  <motion.h2
                 
                    className="mt-3 text-[34px] font-medium leading-[1] tracking-[-0.02em] text-[#111] sm:text-[42px] lg:text-[48px]"
                  >
                      
         Why Choose   {" "}
                    <span className="text-[#dd0403]">
                            Grafizen for PPC?     
                    </span>
                  </motion.h2>
        
                  <motion.p
                 
                    className="mx-auto mt-3 md:mt-4 max-w-[620px] text-[14px] font-[300] leading-4 text-black/50 "
                  >
                  Strategic planning, precise targeting and continuous optimization -
that's how we turn your ad spend into measurable business growth.
                  </motion.p>
                </motion.div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-[1.1fr_0.8fr_1.1fr] gap-10 lg:gap-4 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-md mx-auto">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`
                  bg-[#fef7eb] px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl
                  ${feature.offset} relative z-10 shadow-md transition-shadow
                `}
              >
                <h3 className="text-lg font-bold text-[#dd0403] mb-2
                 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-800 text-xs text-center leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE (ASTRONAUT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="flex justify-center relative z-0 py-10 lg:py-0"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              // Replace this src with your actual astronaut image path (e.g., "/astronaut.png")
              src="./image/whychoose.png" 
              alt="Meditating Astronaut"
              className="w-56 md:w-72 h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-md mx-auto">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`
                  bg-[#fef7eb] px-8 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                  rounded-tr-[6rem] rounded-bl-[6rem] rounded-tl-2xl rounded-br-2xl
                  ${feature.offset} relative z-10 shadow-md transition-shadow
                `}
              >
                <h3 className="text-lg font-bold text-[#dd0403] mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-800 text-xs text-center leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}