import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  ShieldCheck,
  Code2,
  Headphones,
  BadgeCheck,
  MessageCircle,
  Server,
  Database,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Scalable Solutions",
    text: "Delivers scalable enterprise solutions tailored to the client's business goals",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    text: "Follows agile methodologies, ensuring faster delivery and iterative improvements",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "Strong focus on security, compliance, and data protection standards",
  },
  {
    icon: Code2,
    title: "Expert Developers",
    text: "Experienced developers with expertise across modern technologies and frameworks",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    text: "Provides long-term support and continuous performance optimization",
  },
  {
    icon: BadgeCheck,
    title: "Quality Testing",
    text: "Comprehensive testing ensures high-quality, reliable, and bug-free software products",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    text: "Transparent communication with regular project updates",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function WhyChooseGrafizen() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:pb-24 lg:pt-0">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[360px] w-[360px] rounded-full bg-red-50/60 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-180px] h-[400px] w-[400px] rounded-full bg-red-50/50 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.95fr_1fr_1.15fr]
            lg:gap-8
            xl:gap-12
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            variants={itemVariants}
            className="relative z-10"
          >

            {/* Top Accent */}
            {/* <div className="mb-5 flex items-center gap-2">
              <span className="h-[5px] w-12 rounded-full bg-[#DD0403]" />
              <span className="h-[5px] w-7 rounded-full bg-red-200" />
            </div> */}

            {/* Main Heading */}
            <h2
              className="
                max-w-xl
                text-5xl
                font-bold
                leading-[1.1]
                tracking-[-2px]
                text-[#111827]
                sm:text-6xl
                lg:text-[48px]
                xl:text-[48px]
              "
            >
              Why Choose
              <span className="block text-[#DD0403]">
                Grafizen
              </span>
            </h2>

            {/* Sub Heading */}
            <h3
              className="
                      
                          text-[13px]
                          
                     
                        
                mt-7
                max-w-lg
                text-xl
                font-[400]
                leading-7
                text-black
                sm:text-2xl
              "
            >
              What Makes Grafizen Reliable for Enterprise Software Development
            </h3>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-6
                text-black/55
                sm:text-[14px]
                font-[300]
              "
            >
              Grafizen is a reliable partner for enterprise software
              development, combining technical expertise with a client-focused
              approach. We deliver scalable, secure solutions tailored to your
              business needs, with agile processes, strong communication, and
              ongoing support for long-term success.
            </p>

            {/* Mini Benefits */}
            <div className="mt-9 flex  items-center gap-x-6 gap-y-5">

              <MiniBenefit
                icon={ShieldCheck}
                title="Secure"
                subtitle="Solutions"
              />

              <div className="hidden h-10 w-px bg-gray-300 sm:block" />

              <MiniBenefit
                icon={Code2}
                title="Expert"
                subtitle="Team"
              />

              <div className="hidden h-10 w-px bg-gray-300 sm:block" />

              <MiniBenefit
                icon={Server}
                title="Long-Term"
                subtitle="Partnership"
              />

            </div>

          </motion.div>


          {/* =====================================================
              CENTER VISUAL
          ===================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              relative
              flex
              min-h-[450px]
              items-center
              justify-center
            "
          >

           

            {/* Main Image */}
            <div
              className="
                relative
                z-10
                h-[280px]
                w-[280px]
                overflow-hidden
                rounded-full
                border-[14px]
                border-white
                bg-gradient-to-br
                from-gray-100
                via-white
                to-red-50
                shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                sm:h-[370px]
                sm:w-[370px]
              "
            >

              <img
                src="/image/enterpricesoftware/why.png"
                alt="Grafizen enterprise software development"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                "
              />

            </div>


            {/* =================================================
                SECURITY FLOATING CARD
            ================================================= */}

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="
                absolute
                right-[2%]
                top-[17%]
                z-20
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-red-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                sm:right-[4%]
                sm:h-16
                sm:w-16
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                "
              >
                <img src="./image/customsoftwear/insurance.png"className="  rounded-2xl h-10"  />
               
              </div>

            </motion.div>


            {/* =================================================
                SERVER FLOATING CARD
            ================================================= */}

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="
                absolute
                bottom-[8%]
                left-[3%]
                z-20
                flex
                h-20
                w-24
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                sm:h-18
                sm:w-20
              "
            >

              <div className="relative">

                {/* <Server
                  size={43}
                  strokeWidth={1.5}
                  className="text-[#111827]"
                /> */}
                <img src="./image/customsoftwear/softwear2.png"className="  rounded-2xl"  />
              

                <span
                  className="
                    absolute
                    -right-3
                    -top-2
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DD0403]
                    text-white
                  "
                >
                  <Cloud size={14} />
                </span>

              </div>

            </motion.div>


            {/* =================================================
                DATABASE FLOATING CARD
            ================================================= */}

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="
                absolute
                bottom-[5%]
                right-[3%]
                z-20
                flex
                h-20
                w-24
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
                sm:h-18
                sm:w-20
              "
            >

              <div className="relative">

       
                  <img src="./image/customsoftwear/database.png"className="  h-12"  />

        

              </div>

            </motion.div>

          </motion.div>


          {/* =====================================================
              RIGHT FEATURE CARDS
          ===================================================== */}

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2"
          >

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 45px rgba(15, 23, 42, 0.08)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-3
                    transition-all
                    duration-300
                    hover:border-red-200
                    ${
                      index === features.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }
                  `}
                >

                  {/* Red Vertical Accent */}
                  {/* <span
                    className="
                      absolute
                      left-0
                      top-5
                      h-9
                      w-[3px]
                      rounded-r-full
                      bg-[#DD0403]
                    "
                  /> */}

                  <div className="flex gap-4 items-center ">

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FEF2F2]
                        transition-all
                        duration-300
                        group-hover:bg-[#DD0403]
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="
                          text-[#DD0403]
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>


                    {/* Feature Content */}
                    <div>

                      <h4
                        className="
                          text-[15px]
                          font-[400]
                          leading-5
                          text-[#111827]
                        "
                      >
                        {feature.title}
                      </h4>

                

                    </div>
                    

                  </div>
                        <p
                        className="
                          mt-2
                          text-[13px]
                          leading-4
                          text-black/55
                          font-[300]
                        "
                      >
                        {feature.text}
                      </p>


                  {/* Hover Arrow */}
                  {/* <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      className="text-[#DD0403]"
                    />
                  </div> */}

                </motion.div>
              );
            })}

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   MINI BENEFIT COMPONENT
========================================================= */

function MiniBenefit({
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex items-center gap-2.5">

      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-red-50
        "
      >
        <Icon
          size={19}
          strokeWidth={1.8}
          className="text-[#DD0403]"
        />
      </div>

      <div className="leading-tight">

        <p
          className="
            text-sm
            font-[400]
            text-black
          "
        >
          {title}
        </p>

        <p
          className="
            text-sm
            text-black/55
            font-[300]
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
}