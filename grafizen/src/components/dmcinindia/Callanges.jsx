import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  // DatabaseFilter,
  Filter,
  MousePointerClick,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

const challenges = [
  {
    number: "01",
    title: "Low Open Rates",
    text: "Overcoming declining open rates with compelling subject lines and sender reputation.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Spam Folders",
    text: "Navigating deliverability hurdles to ensure emails land in the primary inbox.",
    icon: ShieldAlert,
  },
  {
    number: "03",
    title: "Audience Engagement",
    text: "Creating relevant content that resonates and drives interaction with an inactive audience.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Data Segmentation",
    text: "Leveraging precise segmentation for highly targeted and personalized campaigns.",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Unproductive Leads",
    text: "Nurturing and re-engaging cold leads to move them through the sales funnel.",
    icon: Filter,
  },
  {
    number: "06",
    title: "Optimizing Content",
    text: "A/B testing and analysis to continuously refine messaging and performance.",
    icon: BarChart3,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Callanges() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-black sm:px-6 lg:px-10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12  "
        >
          
          <div class="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span> Email Marketing</span></div> 

         <div className=" flex justify-between items-end">
           <h2 className="text-[48px] font-[500] capitalize leading-[1] tracking-normal sm:text-5xl lg:text-[48px]">
            <span className="text-[#dd0403]">The Challenges</span>
            <span className="block font-[500] text-black">
              Unlocking Growth
            </span>
          </h2>

          <p className="mt-4  text-sm font-medium   text-black/60 sm:text-base">
            Navigating the complexities of email marketing
          </p>
         </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0"
        >
          {challenges.map(({ number, title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              variants={item}
              className={`relative flex justify-center ${
                index % 2 === 1 ? "lg:mt-24" : ""
              }`}
            >
              <div className="relative w-full max-w-[245px] lg:max-w-[220px]">
                <div className="absolute left-3 top-6 text-3xl font-semibold text-[#dd0403]/55 sm:text-2xl -rotate-55">
                  {number}
                </div>

                <div
                  className="relative flex aspect-[1.06] flex-col items-center justify-center px-8 py-8 text-center shadow-[0_20px_55px_rgba(221,4,3,0.13)] bg-[#dd0403]/5 "
                  style={{
                    clipPath:
                      "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                    // background:
                    //   "linear-gradient(180deg, #ffffff 0%, #fff7f7 100%)",
                  }}
                >
                  <div className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#dd0403]/25 bg-white text-[#dd0403] shadow-sm">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="relative z-10 text-[13px] font-extrabold uppercase leading-tight text-black">
                    {title}
                  </h3>
                  <p className="relative z-10 mt-2 max-w-[135px] text-[10px] font-medium leading-snug text-black/60">
                    {text}
                  </p>
                </div>

                {/* <div className="absolute -bottom-4 right-5 text-3xl font-semibold text-[#dd0403]/35 sm:text-4xl">
                  {number}
                </div> */}
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
