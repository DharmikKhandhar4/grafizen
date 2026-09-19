import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    image: "/internet/progress.png",
    title: "Audit & Analyze",
    description:
      "We dig deep into your digital presence — what’s shining bright and what’s gathering digital cobwebs. A full-scale digital marketing audit to spot wins and fix the flops.",
  },
  {
    image: "/internet/idea.png",
    title: "Strategy Crafting",
    description:
      "Time to cook up a custom digital marketing strategy — your brand’s secret recipe for online success, social media, and content marketing brilliance.",
  },
  {
    image: "/internet/download.png",
    title: "Content Optimization",
    description:
      "Give your content a glow-up! Fun, engaging, and keyword rich, because Google loves clever content almost as much as your audience does.",
  },
  {
    image: "/internet/performance-review.png",
    title: "Paid Media Magic",
    description:
      "We roll out laser-focused ad campaigns across Google Ads and social platforms crafted to charm your target audience and drive real conversions.",
  },
  {
    image: "/internet/marketing.png",
    title: "Social Media Execution",
    description:
      "Create buzz, grow loyal fans, and keep your brand top-of-mind with social media marketing that turns heads and sparks conversations.",
  },
  {
    image: "/internet/social-media (1).png",
    title: "Tracking & Tweaking",
    description:
      "We don’t just launch and leave — we track, test, and tweak using real-time analytics. No guesswork here, just sharp digital marketing performance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardClass =
  "flex flex-col items-center text-center text-[#0a2f45] md:items-start md:text-left p-4 sm:p-0 rounded-2xl sm:border-none bg-[#faf9f6]/40 sm:bg-transparent transition-all duration-300 hover:border-[#dd0403]/30 sm:hover:border-none";

export default function Herachikal() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveStep(Math.min(Math.max(index, 0), steps.length - 1));
  };

  const scrollToStep = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveStep(index);
  };

  return (
    <section className="bg-white px-4 py-10 text-[#111111] sm:px-8 sm:py-14 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center justify-center md:justify-start gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
          <span className="h-px w-7 bg-[#dd0403]" />
          <span>Proven Process</span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[1200px] text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-[500] leading-[1.08] sm:leading-[1.02] xl:leading-[0.96] tracking-[-0.045em] xl:tracking-[-0.06em] text-[#111111] text-center md:text-left">
          Proven Steps to Turn Digital Traffic into{" "}
          <br className="hidden sm:inline" />
          <span className="text-[#dd0403]">Real Business Revenue</span>
        </h2>

        {/* Desktop Steps Grid (Laptop Only: sm and above) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 sm:mt-14 hidden sm:grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 sm:gap-x-10 sm:gap-y-12"
        >
          {steps.map(({ image, title, description }) => (
            <motion.article key={title} variants={cardVariants} className={cardClass}>
              <div className="mb-2 flex h-16 sm:h-20 w-20 sm:w-24 items-center justify-center text-black">
                <img
                  src={image}
                  alt={title}
                  className="h-[56px] sm:h-[72px] w-[56px] sm:w-[72px] object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="mb-1 text-[18px] sm:text-[20px] font-[400] leading-tight tracking-[-0.04em] text-[#dd0403]">
                {title}
              </h3>

              <p className="max-w-full md:max-w-[350px] font-[300] text-[13px] sm:text-[14px] leading-[1.35] sm:leading-[1.30] text-black/60 md:text-black/55">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile View: Connected Timeline Flow (No Cards - Matches Reference Image) */}
        <div className="mt-8 sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {steps.map(({ image, title, description }, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;

              return (
                // <div
                //   key={title}
                //   className= {` 
                //     ${ index===1 || index===3 || index===6 || ? " mt-6":" "
                //     }
                //     w-[240px] shrink-0 snap-center flex flex-col items-center text-center `}
                // >
                <div
  key={title}
  className={`
    ${[1, 3, 5].includes(index) ? "mt-6" : ""}
    w-[240px] shrink-0 snap-center flex flex-col items-center text-center
  `}
>
                  {/* Top Icon with Soft Red Blob Background */}
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#dd0403]/10">
                    <img
                      src={image}
                      alt={title}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  {/* Connected Red Line + Step Badge */}
                  {/* <div className="relative my-2 flex w-full items-center justify-center"> */}
             
                    {/* <div
                      className={`absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#dd0403]/40 ${
                        isFirst
                          ? "left-1/2 right-0"
                          : isLast
                          ? "left-0 right-1/2"
                          : "left-0 right-0"
                      }`}
                    /> */}

        
                    {/* <div
                      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ring-4 ring-white transition-all ${
                        activeStep === index
                          ? "bg-[#dd0403] text-white shadow-md scale-110"
                          : index === 0
                          ? "bg-[#dd0403] text-white"
                          : "border-2 border-[#dd0403] bg-white text-[#dd0403]"
                      }`}
                    >
                      0{index + 1}
                    </div> */}
                  {/* </div> */}

                  {/* Title */}
                  <h3 className=" text-[16px] font-bold text-black leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[13px] leading-relaxed text-black/60 font-[300]">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators / Dots */}
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToStep(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === i ? "w-6 bg-[#dd0403]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
