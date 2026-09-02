import React from "react";

const painPoints = [
  {
    image: "./public/internet/Leads.png",
    title: "Traffic is Slow.",
    description: "Excellent products, but the digital world passes you by.",
  },
  {
    image: "./public/internet/Traffic.png",
    title: "Leads are Rare.",
    description:
      "Quality prospects are hard to find, and your funnel feels weak and frustrating.",
  },
  {
    image: "./public/internet/Conversions.png",
    title: "Conversions Feel Like Wish Thinking.",
    description: "Clicks are rare, not new customers.",
  },
];

export default function Empaty() {
  return (
    <section className="bg-white px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[clamp(2.2rem,3vw,4rem)] font-medium leading-[1.1] tracking-[-0.06em] text-[#111111]">
          Website Feels Empty?
          <span className="block">We Understand Your Pain.</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {painPoints.map(({ image, title, description }) => (
            <div
              key={title}
              className="rounded-[18px] border border-[#dd0403]/20 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-0 flex h-[120px] items-center justify-center ">
                <img
                  src={image}
                  alt={title}
                  className="h-[160px] w-[200px] object-contain"
                />
              </div>

              <h3 className="text-[20px] font-[500] leading-[1.4] text-black text-center">
                {title}
              </h3>

              <p className="mt-2 text-[0.98rem] leading-[1.3] text-black/80 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}