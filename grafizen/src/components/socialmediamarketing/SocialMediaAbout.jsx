import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

export default function SocialMediaAbout() {
  const ImageBlock = () => (
    <div className="relative mx-auto max-w-[480px] lg:max-w-none w-full">
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 max-h-[280px] sm:max-h-[360px] lg:max-h-[380px] shadow-sm">
        <img
          src="/image/about.png"
          alt="Grafizen Social Media Marketing Growth"
          className="h-full w-full rounded-xl object-cover object-bottom transition-transform duration-500 hover:scale-105 flex items-end justify-end"
        />
      </div>
    </div>
  );

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 text-[#111]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        
        {/* ==========================================
            MOBILE & TABLET VIEW (< lg)
            Order: Heading 1 -> Heading 2 -> Image -> Content
        ========================================== */}
        <div className="flex flex-col lg:hidden space-y-4 sm:space-y-6">
          {/* 1. Category Tag / Small Heading */}
          <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
            <span className="h-px w-6 sm:w-7 bg-[#dd0403]" />
            <span>About Our Social Media Services</span>
          </div>

          {/* 2. Main Headline */}
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-[1.12] tracking-[-0.035em] text-[#111]">
            Social Media Marketing That Drives Real{" "}
            <span className="font-semibold text-[#dd0403]">
              Business Revenue
            </span>
          </h2>

          {/* 3. Image (Mobile Order) */}
          <div className="my-2 sm:my-4">
            <ImageBlock />
          </div>

          {/* 4. Content (Paragraphs & Feature Points) */}
          <div className="space-y-4 pt-1">
            <p className="text-sm sm:text-base leading-relaxed text-black/80">
              At <strong className="font-bold text-[#dd0403]">Grafizen</strong>,
              we help businesses turn ideas into powerful digital experiences
              and meaningful growth. From digital marketing and social media
              management and branding, we bring creativity and strategy
              together.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-black/60">
              We believe successful digital growth is more than simply being
              visible online. Our team combines strategic marketing with modern
              technology to connect businesses with the right audience and
              achieve measurable results.
            </p>

            {/* Feature Points */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 pt-2">
              <div className="rounded-xl bg-stone-50/60 md:px-4 md:py-3 px-2 py-2 transition-all duration-300 hover:border-[#dd0403]/40 hover:bg-white hover:shadow-sm border-l-4 border-l-[#dd0403]">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#111]">
                  Targeted Audience
                </h3>
                <p className="mt-1 text-xs md:leading-relaxed text-black/60">
                  Connecting your brand with relevant, high-intent customers.
                </p>
              </div>

              <div className="rounded-xl bg-stone-50/60 md:px-4 py-2   px-2 md:py-3 transition-all duration-300 hover:border-[#dd0403]/40 hover:bg-white hover:shadow-sm border-l-4 border-l-[#dd0403]">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#111]">
                  Measurable Growth
                </h3>
                <p className="mt-1 text-xs md:leading-relaxed text-black/60">
                  Data-backed campaigns focused on long-term ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            DESKTOP / LAPTOP VIEW (>= lg)
            100% Unchanged 2-column layout
        ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:items-center"
        >
          {/* LEFT SIDE: Content */}
          <motion.div variants={fadeUp} className="lg:col-span-6">
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>About Our Social Media Services</span>
            </div>

            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium leading-[1.12] lg:leading-[1.08] tracking-[-0.035em] text-[#111]">
              Social Media Marketing That Drives Real{" "}
              <span className="font-semibold text-[#dd0403]">
                Business Revenue
              </span>
            </h2>

            <p className="mt-3  sm:mt-6 text-sm sm:text-base leading-relaxed text-black/80 lg:text-lg ">
              At <strong className="font-bold text-[#dd0403]">Grafizen</strong>,
              we help businesses turn ideas into powerful digital experiences
              and meaningful growth. From digital marketing and social media
              management and branding, we bring creativity and strategy
              together.
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-black/60 lg:text-base">
              We believe successful digital growth is more than simply being
              visible online. Our team combines strategic marketing with modern
              technology to connect businesses with the right audience and
              achieve measurable results.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-xl bg-stone-50/60 px-4 py-3 transition-all duration-300 hover:border-[#dd0403]/40 hover:bg-white hover:shadow-sm border-l-4 border-l-[#dd0403]">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#111]">
                  Targeted Audience
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  Connecting your brand with relevant, high-intent customers.
                </p>
              </div>

              <div className="rounded-xl bg-stone-50/60 px-4 py-1 transition-all duration-300 hover:border-[#dd0403]/40 hover:bg-white hover:shadow-sm border-l-4 border-l-[#dd0403]">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#111]">
                  Measurable Growth
                </h3>
                <p className="mt-1 text-xs md:leading-relaxed leading-tight text-black/60">
                  Data-backed campaigns focused on long-term ROI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image Block */}
          <motion.div variants={fadeUp} className="lg:col-span-6">
            <ImageBlock />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
