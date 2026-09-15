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

// const painPoints = [
//   {
//     id: 1,
//     title: "Invisible on Google Search?",
//     description:
//       "Potential clients in Rajkot are actively searching for your services right now—and finding your competitors instead. Without ranked keywords, your site is an empty storefront.",
//     icon: SearchX,
//     stat: "88% of local searches lead to a call within 24h",
//   },
//   {
//     id: 2,
//     title: "Wasting Budget on Dead Leads?",
//     description:
//       "Burning cash on Meta or Google Ads only to receive wrong numbers and tire-kickers? We fix non-converting ad funnels to secure qualified, high-intent inquiries.",
//     icon: TrendingDown,
//     stat: "Stop burning 40%+ of ad spend",
//   },
//   {
//     id: 3,
//     title: "Unpredictable Sales Cycles?",
//     description:
//       "Turning an inquiry into a closed contract takes months without nurture automation. Warm prospects forget your brand and move to faster responders.",
//     icon: Clock,
//     stat: "Shorten deals by up to 30 days",
//   },
//   {
//     id: 4,
//     title: "Disconnected Content Strategy?",
//     description:
//       "Posting random graphics or festival wishes creates zero sales momentum. You need a structured content engine engineered to build authority.",
//     icon: Share2,
//     stat: 'Move from "likes" to closed leads',
//   },
//   {
//     id: 5,
//     title: "Trapped by Vanity Metrics?",
//     description:
//       "Agencies report high impressions while your revenue stays flat. We measure performance by actual bottom-line growth: calls, forms, and closed sales.",
//     icon: BarChart2,
//     stat: "100% revenue-focused metrics",
//   },
// ];

// Animation Variants
const painPoints = [
  {
    id: 1,
    title: "Not Showing Up on Google Search?",
    description:
      "Customers  are searching for your business online right now—and choosing your competitors instead. Without top Google rankings, your website gets zero visitors.",
    icon: SearchX,
    stat: "88% of local mobile searches lead to a phone call within 24 hours",
    // SEO Focus: Local SEO Rajkot, Google Search Rankings, Local Business SEO
  },
  {
    id: 2,
    title: "Wasting Money on Online Ads?",
    description:
      "Spending money on Facebook or Google Ads only to get wrong phone numbers and fake leads? We fix your ad strategy to get real, paying customers.",
    icon: TrendingDown,
    stat: "Stop wasting 40%+ of your ad budget on useless clicks",
    // SEO Focus: Google Ads Management, PPC Agency Rajkot, Lead Generation
  },
  {
    id: 3,
    title: "Taking Too Long to Close Sales?",
    description:
      "Losing potential clients because following up takes too long? Automated follow-up messages keep your leads interested so you close sales faster.",
    icon: Clock,
    stat: "Close deals up to 30 days faster with automated lead follow-ups",
    // SEO Focus: Sales Automation, Marketing Funnel, Lead Nurturing
  },
  {
    id: 4,
    title: "Posting on Social Media with No Results?",
    description:
      "Sharing random posts or holiday greetings does not bring in sales. You need a simple marketing plan that turns followers into paying customers.",
    icon: Share2,
    stat: "Turn social media likes into real business sales and inquiries",
    // SEO Focus: Content Marketing Strategy, Social Media Marketing Rajkot
  },
  {
    id: 5,
    title: "Paying Marketing Agencies for No Real Growth?",
    description:
      "Most digital marketing agencies report high impressions, but your sales stay the same. We focus only on what matters: phone calls, form fills, and revenue.",
    icon: BarChart2,
    stat: "100% focused on increasing your business revenue",
    // SEO Focus: ROI Digital Marketing, Digital Marketing Agency Rajkot
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PainPointsSection() {
  return (
    <section className="relative bg-white md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-[#111111] ">
      {/* Background Decorative Gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dd0403]/8 rounded-full blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f5d0d0]/60 rounded-full blur-3xl pointer-events-none" /> */}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111108_1px,transparent_1px),linear-gradient(to_bottom,#11111108_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 py-8">
        {/* Header Section */}
        <div className="lg:mb-16 mb-7  grid lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end ">
          {/* Left */}
          <div>
            <div className="lg:mb-5 mb-4  flex items-center gap-3 lg:text-[11px]  text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403] " />
              <span>WHAT’S HOLDING YOUR BUSINESS BACK?</span>
            </div>
            <h2 className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[48px] text-black sm:text-[42px] text-[28px]">
              Are you having trouble <br />
              <span className="text-[#dd0403]">growing your business?</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="lg:mt-6 mt-4  max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]">
              Most businesses struggle with digital marketing not from a lack of
              effort, but from disconnected, outdated tactics.
            </p>
          </div>
        </div>

        {/* Dynamic Cards Grid / Mobile Horizontal Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto gap-4 py-2 pb-4 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:overflow-visible md:py-0 md:pb-0"
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
                className={`group relative rounded-2xl bg-white/90 border border-[#e6e1d7] p-4 shadow-[0_8px_24px_rgba(17,17,17,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-[#dd0403]/40 hover:shadow-[0_16px_30px_rgba(221,4,3,0.12)] flex flex-col justify-between w-[280px] sm:w-[320px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none ${
                  isLast ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Glow Border Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#dd0403]/0 via-[#dd0403]/0 to-[#dd0403]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Header Inside Card */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="lg:p-3 p-1.5 lg:rounded-xl rounded-[12px] bg-[#fdeaea] border border-[#fad5d5] text-[#dd0403] group-hover:text-white group-hover:bg-[#dd0403] group-hover:border-[#dd0403] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* <span className="text-xs font-mono text-[#777065] font-semibold uppercase tracking-widest">
                      0{item.id} / ISSUE
                    </span> */}
                    <h3 className="lg:text-xl  text-[14px] font-semibold text-[#111111] mb-1 group-hover:text-[#dd0403] transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content */}
                  {/* <h3 className="text-xl font-bold text-[#111111] mb-1 group-hover:text-[#dd0403] transition-colors">
                    {item.title}
                  </h3> */}

                  <p className="text-[#555048] lg:text-sm text-[13px] md:leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-3 border-t border-[#e6e1d7] flex lg:items-center items-start justify-between">
                  <span className="md:text-xs text-[11px] font-medium text-[#555048] flex lg:items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dd0403] group-hover:bg-[#111111] transition-colors shrink-0 mt-1 lg:mt-0 " />
                    {item.stat}
                  </span>
            
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
