import React from "react";

const steps = [
  {
    image: "./public/internet/progress.png",
    title: "Audit & Analyze",
    description:
      "We dig deep into your digital presence — what’s shining bright and what’s gathering digital cobwebs. A full-scale digital marketing audit to spot wins and fix the flops.",
  },
  {
    image: "./public/internet/idea.png",
    title: "Strategy Crafting",
    description:
      "Time to cook up a custom digital marketing strategy — your brand’s secret recipe for online success, sprinkled with SEO, social media, and content marketing brilliance.",
  },
  {
    image: "./public/internet/download.png",
    title: "Content Overhaul",
    description:
      "Give your content a glow-up! Fun, engaging, and SEO-optimized — because Google loves clever content almost as much as your audience does.",
  },
  {
    image: "./public/internet/performance-review.png",
    title: "Paid Media Magic",
    description:
      "We roll out laser-focused ad campaigns across Google Ads and social platforms — crafted to charm your target audience and drive real conversions.",
  },
  {
    image: "./public/internet/marketing.png",
    title: "Social Media Shenanigans",
    description:
      "Create buzz, grow loyal fans, and keep your brand top-of-mind with social media marketing that turns heads and sparks conversations.",
  },
  {
    image: "./public/internet/social-media (1).png",
    title: "Tracking & Tweaking",
    description:
      "We don’t just launch and leave — we track, test, and tweak using real-time analytics. No guesswork here, just sharp digital marketing performance.",
  },
];

const cardClass =
  "flex flex-col items-center text-center text-[#0a2f45] md:items-start md:text-left";

export default function Herachikal() {
  return (
    <section className="bg-white px-4 py-12 text-[#111111] sm:px-8 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="max-w-[1200px] text-[48px] font-[500] leading-[0.96] tracking-[-0.06em] text-[#111111]">
          Follow These <span className="text-[#dd0403]">Hilariously</span>{" "}
          Effective
          <span className="block">
            Steps to <span className="text-[#dd0403]">Transform</span> Your
            Digital Mess
          </span>
          <span className="block">
            into <span className="text-[#dd0403]">Conversion</span> Success!
          </span>
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {steps.map(({ image, title, description }) => (
            <article key={title} className={cardClass}>
              <div className="mb-2 flex h-20 w-24 items-center justify-center text-black">
                <img
                  src={image}
                  alt={title}
                  className="h-[72px] w-[72px] object-contain"
                />
              </div>

              <h3 className="mb-1 text-[20px] font-medium leading-tight tracking-[-0.04em] text-[#111111]">
                {title}
              </h3>

              <p
                className="max-w-[350px] text-[14px] 
              leading-[1.30] text-black/55"
              >
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
