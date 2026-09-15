import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image as ImageIcon, MessageCircle } from "lucide-react";

const channels = [
  {
    title: "Facebook ",

    image: "/image/social/communication.png",
    description:
      "Grow your Facebook presence through content, targeted ads, and audience engagement that generate leads and business growth.",
  },
  {
    title: "Instagram ",

    image: "/image/social/instagram.png",
    description:
      "Build your Instagram presence with engaging content, Reels, targeted campaigns, and ads that turn followers into customers.",
  },
  {
    title: "YouTube ",

    image: "/image/social/video.png",
    description:
      "Use YouTube strategy and engaging videos to reach the right audience, build authority, and generate leads.",
  },
  {
    title: "X (Twitter) ",

    image: "/image/social/twitter.png",
    description:
      "Increase visibility on X with strategic content, real-time engagement, audience targeting, and paid campaigns.",
  },
  {
    title: "LinkedIn ",

    image: "/image/social/linkedin.png",
    description:
      "Connect with decision-makers through LinkedIn content, page optimization, engagement, and B2B lead-generation campaigns.",
  },
  // {
  //   title: "Pinterest Marketing",

  //   image: "/image/pinterest.png",
  //   description:
  //     "Turn visual discovery into website traffic and business opportunities with Pinterest marketing. We create and optimize engaging Pins, develop content strategies, and target relevant audiences to increase brand visibility, attract new visitors, and support long-term organic growth.",
  // },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function SocialMediaChannels() {
  const [activeChannel, setActiveChannel] = useState(0);

  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] w-full px-5 xs:px-5 sm:px-8 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p className="mb-3 sm:mb-5 flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45 text-center">
            <span className="h-px w-5 sm:w-7 bg-[#dd0403]"></span>
            <span> Social Media Marketing </span>
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-[42px] lg:text-[48px] font-medium leading-tight sm:leading-[1] tracking-[-0.02em] text-[#111]"
          >
            Social Media Channels We Optimize{" "}
            <span className="text-[#dd0403]">for Your Business</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 md:mt-1 max-w-[620px] text-xs xs:text-sm sm:text-[14px] font-[300] leading-relaxed sm:leading-4 text-black/50"
          >
            We create platform-specific social media strategies that help
            businesses build visibility, engage the right audience, generate
            qualified leads, and create sustainable digital growth.
          </motion.p>
        </motion.div>

        {/* ================= CHANNELS ================= */}
        <div className="mt-8 sm:mt-16 lg:mt-20">
          <div className="relative ml-5 sm:ml-8 lg:ml-0 pl-6 sm:pl-10 space-y-4 sm:space-y-3">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative group"
              >
                {/* Connecting Line Segment (Starts at Facebook center, ends at LinkedIn center) */}
                {index < channels.length - 1 && (
                  <div className="absolute left-[-25px] sm:left-[-40px] top-1/2 h-[calc(100%+16px)] sm:h-[calc(100%+12px)] w-px bg-stone-200 pointer-events-none z-0" />
                )}

                {/* Timeline Image Icon Node */}
                <div className="absolute -left-[45px] sm:-left-[60px] top-1/2 -translate-y-1/2 flex h-10 w-10 overflow-hidden items-center justify-center bg-white text-xs font-bold text-[#dd0403] transition-transform duration-300 group-hover:scale-110 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <img
                      src={channel.image}
                      alt={channel.title}
                      className="h-7 w-7 sm:h-8 sm:w-8 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-center rounded-2xl border border-stone-200/80 bg-stone-50/50 p-3 sm:p-5 lg:p-6 transition-all duration-300 hover:border-[#dd0403]/30 hover:bg-white hover:shadow-md">
                  {/* Content */}
                  <div className="lg:col-span-9">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-[#111]">
                      {channel.title}
                    </h3>
                    <p className="md:mt-1 text-xs xs:text-sm sm:text-[14px] leading-tight sm:leading-tight text-black/55">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
