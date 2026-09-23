import React, { useState } from "react";
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
  ChevronDown,
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
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (index) => {
    setOpenCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:pb-24 lg:pt-0">

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
            gap-2
            sm:gap-12
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
            className="relative z-10 w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0"
          >

            {/* Main Heading */}
            <h2
              className="
                max-w-xl
                text-[28px]
                xs:text-[32px]
                sm:text-4xl
                md:text-5xl
                lg:text-[48px]
                xl:text-[48px]
                font-[600]
                md:font-bold
                leading-[1.15]
                lg:leading-[1.1]
                tracking-tight
                lg:tracking-[-2px]
                text-[#111827]
              "
            >
              Why Choose
              <span className="sm:inline md:block pl-1.5 md:pl-0 lg:pl-1.5 text-[#DD0403]">
                Grafizen
              </span>
            </h2>

            {/* Sub Heading */}
            <h3
              className="
                mt-3
                sm:mt-4         
                md:mt-7
                max-w-lg
                text-lg
                sm:text-xl
                md:text-2xl
                font-[400]
                leading-snug
                sm:leading-7
                text-black
              "
            >
              What Makes Grafizen Reliable for Enterprise Software Development
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                sm:mt-6
                md:max-w-xl
                text-[13px]
                md:leading-6
                text-black/55
                sm:text-[14px]
                font-[300]
              "
            >
              Grafizen is a reliable partner for enterprise software
              development, combining technical expertise with a
              client-focused
              approach. We deliver scalable, secure solutions tailored to your
              business needs, with agile processes, strong communication, and
              ongoing support for long-term success.
            </p>

            {/* Mini Benefits */}
            <div className="mt-7 sm:mt-9 flex items-center justify-between sm:justify-start gap-1.5 xs:gap-2 sm:gap-6 w-full">

              <MiniBenefit
                icon={ShieldCheck}
                title="Secure"
                subtitle="Solutions"
              />

              <div className="h-6 sm:h-10 w-px bg-gray-200 sm:bg-gray-300 shrink-0" />

              <MiniBenefit
                icon={Code2}
                title="Expert"
                subtitle="Team"
              />

              <div className="h-6 sm:h-10 w-px bg-gray-200 sm:bg-gray-300 shrink-0" />

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
              min-h-[300px]
              xs:min-h-[340px]
              sm:min-h-[390px]
              md:min-h-[430px]
              lg:min-h-[450px]
              w-full
              max-w-[340px]
              xs:max-w-[380px]
              sm:max-w-[460px]
              md:max-w-[500px]
              lg:max-w-none
              mx-auto
              items-center
              justify-center
              my-2
              sm:my-4
              lg:my-0
            "
          >

            {/* Main Image */}
            <div
              className="
                relative
                z-10
                h-[280px]
                w-[280px]
                xs:h-[250px]
                xs:w-[250px]
                sm:h-[310px]
                sm:w-[310px]
                md:h-[350px]
                md:w-[350px]
                lg:h-[280px]
                lg:w-[280px]
                xl:h-[370px]
                xl:w-[370px]
                overflow-hidden
                rounded-full
                border-[8px]
                xs:border-[10px]
                sm:border-[12px]
                lg:border-[14px]
                border-white
                bg-gradient-to-br
                from-gray-100
                via-white
                to-red-50
                shadow-[0_25px_70px_rgba(15,23,42,0.12)]
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
                xs:right-[4%]
                sm:right-[6%]
                md:right-[10%]
                lg:right-[2%]
                xl:right-[4%]
                top-[12%]
                sm:top-[14%]
                lg:top-[17%]
                z-20
                flex
                h-14
                w-14
                sm:h-16
                sm:w-16
                xl:h-20
                xl:w-20
                items-center
                justify-center
                rounded-full
                border
                border-red-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  xl:h-14
                  xl:w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                "
              >
                <img
                  src="./image/customsoftwear/insurance.png"
                  alt="Security"
                  className="rounded-2xl h-6 sm:h-8 xl:h-10 object-contain"
                />
               
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
                bottom-[6%]
                sm:bottom-[7%]
                lg:bottom-[8%]
                left-[2%]
                xs:left-[4%]
                sm:left-[6%]
                md:left-[10%]
                lg:left-[1%]
                xl:left-[3%]
                z-20
                flex
                h-14
                w-16
                sm:h-16
                sm:w-20
                xl:h-20
                xl:w-24
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
              "
            >

              <div className="relative flex items-center justify-center">
                <img
                  src="./image/customsoftwear/softwear2.png"
                  alt="Server"
                  className="rounded-xl h-8 sm:h-10 xl:h-12 object-contain"
                />

                <span
                  className="
                    absolute
                    -right-2.5
                    -top-2.5
                    flex
                    h-5
                    w-5
                    sm:h-6
                    sm:w-6
                    xl:h-7
                    xl:w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DD0403]
                    text-white
                  "
                >
                  <Cloud className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
                bottom-[4%]
                sm:bottom-[5%]
                lg:bottom-[5%]
                right-[2%]
                xs:right-[4%]
                sm:right-[6%]
                md:right-[10%]
                lg:right-[1%]
                xl:right-[3%]
                z-20
                flex
                h-14
                w-16
                sm:h-16
                sm:w-20
                xl:h-20
                xl:w-24
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.10)]
              "
            >

              <div className="relative flex items-center justify-center">
                <img
                  src="./image/customsoftwear/database.png"
                  alt="Database"
                  className="h-7 sm:h-9 xl:h-12 object-contain"
                />
              </div>

            </motion.div>

          </motion.div>


          {/* =====================================================
              RIGHT FEATURE CARDS
          ===================================================== */}

          <motion.div
            variants={containerVariants}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-2.5
              sm:gap-3
              lg:gap-2
              xl:gap-2.5
              max-w-2xl
              md:max-w-3xl
              lg:max-w-none
              mx-auto
              w-full
            "
          >

            {features.map((feature, index) => {

              const Icon = feature.icon;
              const isLast = index === features.length - 1;
              const isOpen = !!openCards[index];

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 20px 45px rgba(15, 23, 42, 0.08)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  onClick={() => toggleCard(index)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-3
                    sm:p-3.5
                    lg:p-3
                    xl:p-3.5
                    transition-all
                    duration-300
                    hover:border-red-200
                    cursor-pointer
                    sm:cursor-default
                    ${
                      isLast
                        ? "sm:col-span-2"
                        : ""
                    }
                  `}
                >

                  <div className="flex gap-3 sm:gap-4 items-center justify-between">

                    <div className="flex gap-3 sm:gap-4 items-center">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-6
                          w-6
                          sm:h-8
                          sm:w-8
                          lg:h-6
                          lg:w-6
                          xl:h-7
                          xl:w-7
                          shrink-0
                          items-center
                          justify-center
                          md:rounded-full
                          rounded-md
                          bg-[#FEF2F2]
                          transition-all
                          duration-300
                          group-hover:bg-[#DD0403]
                        "
                      >
                        <Icon
                          size={16}
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
                            text-[14px]
                            sm:text-[15px]
                            font-[500]
                            leading-5
                            text-[#111827]
                          "
                        >
                          {feature.title}
                        </h4>
                      </div>

                    </div>

                    {/* Mobile Dropdown Chevron (Visible on mobile for all cards) */}
                    <div
                      className={`
                        sm:hidden
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        
                        text-[#DD0403]
                        transition-all
                        duration-300
                        ${isOpen ? "rotate-180 bg-[#DD0403] text-white" : ""}
                      `}
                    >
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </div>

                  </div>

                  {/* Feature Text / Details (Collapsible on mobile, always visible on tablet/desktop) */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0 sm:grid-rows-[1fr] sm:opacity-100 sm:mt-2"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          text-[12px]
                          sm:text-[13px]
                          leading-relaxed
                          text-black/55
                          font-[300]
                        "
                      >
                        {feature.text}
                      </p>
                    </div>
                  </div>

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
    <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 shrink-0">

      <div
        className="
          flex
          h-7
          w-7
          sm:h-9
          sm:w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-red-50
        "
      >
        <Icon
          strokeWidth={1.8}
          className="text-[#DD0403] h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-[19px] sm:w-[19px]"
        />
      </div>

      <div className="leading-tight">

        <p
          className="
            text-[11px]
            xs:text-xs
            sm:text-sm
            font-[500]
            sm:font-[400]
            text-black
            whitespace-nowrap
          "
        >
          {title}
        </p>

        <p
          className="
            text-[10px]
            xs:text-[11px]
            sm:text-sm
            text-black/55
            font-[300]
            whitespace-nowrap
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
}