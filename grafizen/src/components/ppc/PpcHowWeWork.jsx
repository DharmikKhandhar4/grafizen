import React from "react";
import { motion } from "framer-motion";

const workSteps = [
  {
    number: "1",
    title: "Initial Consultation",
    description:
      "Our team understands your business goals, target audience, and PPC objectives.",
  },
  {
    number: "2",
    title: "Market and Competitor Research",
    description:
      "Then as per your goal analyze industry trends, and competitor strategies, and identify target demographics.",
  },
  {
    number: "3",
    title: "Keyword Research",
    description:
      "Then we identify high-performing keywords relevant to the client's business and objectives.",
  },
  {
    number: "4",
    title: "Strategy Development",
    description:
      "As per business needs we create a customized PPC strategy, including ad types, target audience segments, and budget allocation.",
  },
  {
    number: "5",
    title: "Performance Monitoring",
    description:
      "After launching a campaign we Track key performance metrics such as CTR, CPC, conversion rate, and ROAS.",
  },
  {
    number: "6",
    title: "Reporting and Analysis",
    description:
      "Provide regular reports detailing campaign performance, insights, and recommendations.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-[500] text-[#dd0403]">
            How We Work?
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {workSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                relative
                min-h-[180px]
                sm:min-h-[190px]
                lg:min-h-[108px]
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-[#dd0403]/5  
                px-6
                sm:px-7
                lg:px-7
                py-4
                shadow-sm
                transition-all
                duration-300
                hover:shadow-lg
                hover:border-[#dd0403]/30
              "
            >

              {/* Large Background Number */}
              <span
                className="
                  absolute
                  right-2
                  top-10
                  -translate-y-1/2
                  text-[110px]
                  sm:text-[120px]
                  lg:text-[60px]
                  font-black
                  leading-none
                  text-gray-200
                  select-none
                  pointer-events-none
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                {step.number}
              </span>

              {/* Card Content */}
              <div className="relative z-10 max-w-[90%]">

                <h3
                  className="
                    text-lg
                    sm:text-lg
                    font-bold
                    text-[#dd0403]
                    mb-2
                    leading-snug
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-sm
                    sm:text-[13px]
                    leading-4
                    text-gray-800
                    font-medium
                  "
                >
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}