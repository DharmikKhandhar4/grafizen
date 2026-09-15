import React from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FileText,
  Megaphone,
  Rocket,
  Search,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import marketing from "../../../public/image/marketing (1).png";

const services = [
  {
    id: "cro",
    title: "CONVERSION RATE OPTIMIZATION",
    description:
      "Optimize your website performance to turn existing traffic into paying clients and leads.",
    icon: Rocket,
    accent: "#dd0403",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description:
      "Build brand awareness, engage your audience, and grow your community.",
    icon: Users,
    accent: "#dd0403",
  },
  {
    id: "ads",
    title: "Google Ads Management",
    description:
      "Target the right audience and get instant leads with high-converting ad campaigns.",
    icon: Megaphone,
    accent: "#dd0403",
  },
  {
    id: "content",
    title: "Content Marketing",
    description:
      "Engage, inform, and convert your audience with valuable content that builds trust.",
    icon: FileText,
    accent: "#dd0403",
  },
  {
    id: "automation",
    title: "EMAIL & AUTOMATION",
    description:
      "Drive repeat sales and customer loyalty with smart, automated email campaigns.",
    icon: Bot,
    accent: "#dd0403",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description:
      "Track performance, measure results, and make data-driven decisions for growth.",
    icon: BarChart3,
    accent: "#dd0403",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-10 xl:px-14">
      <div className="relative mx-auto max-w-[1400px]  sm:px-8 lg:px-10">
        {/* Header Section */}
        <div className="mb-10 sm:mb-16 grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>DIGITAL MARKETING SERVICES</span>
            </div>
            <h2 className="text-[28px] font-[500] leading-[1.08] sm:leading-[1.06] tracking-[-0.045em] sm:text-[42px] md:text-5xl lg:text-[48px] text-black">
              Smart Strategies{" "}
              <span className="text-[#dd0403]">For Business Expansion</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="mt-2 sm:mt-6 max-w-3xl text-xs sm:text-base leading-relaxed text-black/55 font-[300]">
              A stunning website gets attention. Our result-driven digital
              marketing turns that attention into traffic, leads, and loyal
              customers.
            </p>
          </div>
        </div>

        {/* 3-Column Grid for Laptop / Stacked for Mobile & Tablet */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          <div className="relative grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center lg:gap-8 xl:gap-10">
            {/* Left 3 Cards */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 relative">
              {/* Curved Dashed Lines (Laptop Only) */}
              <div className="hidden lg:block w-40 h-28 border-t border-dashed border-[#dd0403] absolute right-[-120px] rounded-[105px] top-8" />
              <div className="hidden lg:block w-28 h-28 border-t border-dashed border-[#dd0403] absolute right-[-110px] rounded-[0px] top-40" />
              <div className="hidden lg:block w-40 h-28 border-b border-dashed border-[#dd0403] absolute right-[-130px] rounded-[100px] bottom-1" />

              <ServiceCardLeft item={services[0]} />
              <ServiceCardLeft item={services[1]} />
              <ServiceCardLeft item={services[2]} />
            </div>

            {/* Center Circle Section */}
            <div className="relative mx-auto my-4 sm:my-6 lg:my-0 flex h-[270px] w-[270px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[320px] lg:w-[320px]">
              {/* Mobile Only: Glowing pulse effect behind center circle */}
              <div className="absolute -inset-1 rounded-full bg-[#dd0403]/15 blur-sm animate-pulse lg:hidden pointer-events-none" />

              {/* Mobile Only: Primary Revolving Ring Circle with Orbiting Satellite Dots */}
              <div className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-full border-2 border-dashed border-[#dd0403]/60 animate-[spin_10s_linear_infinite] lg:hidden">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_12px_rgba(221,4,3,0.8)]" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_10px_rgba(221,4,3,0.8)]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_12px_rgba(221,4,3,0.8)]" />
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_10px_rgba(221,4,3,0.8)]" />
              </div>

              <div className="absolute inset-0 rounded-full border-[2px] sm:border-[8px] border-[#dd0403] bg-white shadow-[0_0_0_15px_rgba(40,25,92,0.04)] sm:shadow-[0_0_0_20px_rgba(40,25,92,0.04)]" />
              <div className="absolute inset-[14px] sm:inset-[18px] rounded-full bg-[#dd0403]/5" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <img
                  src={marketing}
                  alt="Marketing"
                  className="mb-3 sm:mb-4 h-16 w-16 sm:h-20 sm:w-20 object-contain animate-[pulse_2.5s_ease-in-out_infinite] lg:animate-none"
                />
                <h3 className="text-[18px] font-[500] leading-none tracking-[-0.05em] text-black sm:text-[28px] lg:text-[20px]">
                  Digital Solutions
                </h3>
                <h3 className="mt-1 text-[22px] font-[500] leading-none tracking-[-0.05em] text-black sm:text-[30px] lg:text-[20px]">
                  That Deliver Results
                </h3>
              </div>

              {/* Decorative Circle Lines (Laptop Only) */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#c4b7c9] lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4dade] lg:block" />

              {/* Ring Dots */}
              <div className="absolute left-[4%] top-[19%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
              <div className="absolute left-[-4%] top-[47%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
              <div className="absolute left-[7%] top-[81%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
              <div className="absolute right-[5%] top-[19%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
              <div className="absolute right-[-3%] top-[47%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
              <div className="absolute right-[8%] top-[81%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:block" />
            </div>

            {/* Right 3 Cards */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 relative">
              {/* Curved Dashed Lines (Laptop Only) */}
              <div className="hidden lg:block w-40 h-28 border-t border-dashed border-[#dd0403] absolute left-[-127px] rounded-[105px] top-10" />
              <div className="hidden lg:block w-20 h-28 border-t border-dashed border-[#dd0403] absolute left-[-80px] rounded-[0px] top-40" />
              <div className="hidden lg:block w-40 h-28 border-b border-dashed border-[#dd0403] absolute left-[-135px] rounded-[100px] bottom-0.5" />

              <ServiceCardRight item={services[3]} />
              <ServiceCardRight item={services[4]} />
              <ServiceCardRight item={services[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCardLeft({ item }) {
  const Icon = item.icon;

  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-[15px] sm:rounded-[60px] border border-[#ece3dc] bg-white p-2 shadow-[0_8px_24px_rgba(17,17,17,0.03)] lg:shadow-[0_12px_30px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(17,17,17,0.06)] lg:p-3 lg:px-6">
      <div className="flex items-center gap-3.5 sm:gap-4">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] sm:text-[16px] font-[500] uppercase tracking-[-0.03em] text-black">
            {item.title}
          </h4>
          <p className="mt-1 text-[12px] leading-relaxed sm:leading-5 text-[#5d5b5b] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCardRight({ item }) {
  const Icon = item.icon;

  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-[15px] sm:rounded-[60px] border border-[#ece3dc] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_38px_rgba(17,17,17,0.06)] lg:p-3 lg:px-6">
      <div className="flex items-center gap-3.5 sm:gap-4">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] sm:text-[16px] font-black uppercase tracking-[-0.03em] text-black">
            {item.title}
          </h4>
          <p className="mt-1 text-[12px] leading-relaxed sm:leading-5 text-[#5d5b5b] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
