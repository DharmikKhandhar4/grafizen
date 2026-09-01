import React from "react";
import { motion } from "framer-motion";
import {
  SearchX,
  TrendingDown,
  Clock,
  Share2,
  BarChart2,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

const painPoints = [
  {
    id: 1,
    title: "Invisible on Google Search?",
    description:
      "Potential clients in Rajkot are actively searching for your services right now—and finding your competitors instead. Without ranked keywords, your site is an empty storefront.",
    icon: SearchX,
    stat: "88% of local searches lead to a call within 24h",
  },
  {
    id: 2,
    title: "Wasting Budget on Dead Leads?",
    description:
      "Burning cash on Meta or Google Ads only to receive wrong numbers and tire-kickers? We fix non-converting ad funnels to secure qualified, high-intent inquiries.",
    icon: TrendingDown,
    stat: "Stop burning 40%+ of ad spend",
  },
  {
    id: 3,
    title: "Unpredictable Sales Cycles?",
    description:
      "Turning an inquiry into a closed contract takes months without nurture automation. Warm prospects forget your brand and move to faster responders.",
    icon: Clock,
    stat: "Shorten deals by up to 30 days",
  },
  {
    id: 4,
    title: "Disconnected Content Strategy?",
    description:
      "Posting random graphics or festival wishes creates zero sales momentum. You need a structured content engine engineered to build authority.",
    icon: Share2,
    stat: 'Move from "likes" to closed leads',
  },
  {
    id: 5,
    title: "Trapped by Vanity Metrics?",
    description:
      "Agencies report high impressions while your revenue stays flat. We measure performance by actual bottom-line growth: calls, forms, and closed sales.",
    icon: BarChart2,
    stat: "100% revenue-focused metrics",
  },
];

// Animation Variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PainPointsSection() {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#111111] font-sans">
      {/* Background Decorative Gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dd0403]/8 rounded-full blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f5d0d0]/60 rounded-full blur-3xl pointer-events-none" /> */}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111108_1px,transparent_1px),linear-gradient(to_bottom,#11111108_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 rounded-full bg-[#dd0403]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-700 sm:text-[11px]">
              The Growth Bottlenecks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-[48px]"
          >
            Is Your Business Facing These <br className="hidden sm:inline" />
            <span className="block text-[#dd0403]">Growth Roadblocks?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[#555048] leading-5 text-base sm:text-lg"
          >
            Most Rajkot businesses struggle with digital marketing not from a
            lack of effort, but from disconnected, outdated tactics.
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            // Span 2 columns on large screen for the 5th item to keep symmetric balance
            const isLast = index === 4;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl bg-white/90 border border-[#e6e1d7] p-4 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:shadow-[0_16px_30px_rgba(221,4,3,0.12)] flex flex-col justify-between ${
                  isLast ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Glow Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#dd0403]/0 via-[#dd0403]/0 to-[#dd0403]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Header Inside Card */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-[#fdeaea] border border-[#fad5d5] text-[#dd0403] group-hover:text-white group-hover:bg-[#dd0403] group-hover:border-[#dd0403] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#777065] font-semibold uppercase tracking-widest">
                      0{item.id} / ISSUE
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#111111] mb-1 group-hover:text-[#dd0403] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#555048] text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-3 border-t border-[#e6e1d7] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#555048] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dd0403] group-hover:bg-[#111111] transition-colors" />
                    {item.stat}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#777065] group-hover:text-[#dd0403] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout Banner */}
      </div>
    </section>
  );
}
