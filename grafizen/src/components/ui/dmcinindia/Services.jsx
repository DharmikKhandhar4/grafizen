import React from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  FileText,
  Megaphone,
  Search,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import marketing  from "../../../../public/image/marketing (1).png"

const services = [
  {
    id: "seo",
    title: "SEO & AI SEO",
    description:
      "Rank higher on search engines with smart SEO and AI-powered strategies.",
    icon: Search,
    accent: "#dd0403",
    placement: "left-top",
  },
  {
    id: "social",
    title: "Social Media Marketing",
    description:
      "Build brand awareness, engage your audience, and grow your community.",
    icon: Users,
    accent: "#dd0403",
    placement: "left-middle",
  },
  {
    id: "ads",
    title: "Google Ads Management",
    description:
      "Target the right audience and get instant leads with high-converting ad campaigns.",
    icon: Megaphone,
    accent: "#dd0403",
    placement: "left-bottom",
  },
  {
    id: "content",
    title: "Content Marketing",
    description:
      "Engage, inform, and convert your audience with valuable content that builds trust.",
    icon: FileText,
    accent: "#dd0403",
    placement: "right-top",
  },
  {
    id: "ai",
    title: "AI Powered Marketing",
    description:
      "Leverage AI tools and automation to optimize campaigns and maximize ROI.",
    icon: Bot,
    accent: "#dd0403",
    placement: "right-middle",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description:
      "Track performance, measure results, and make data-driven decisions for growth.",
    icon: BarChart3,
    accent: "#dd0403",
    placement: "right-bottom",
  },
];

const bottomStats = [
  { label: "More Visibility", icon: Users },
  { label: "More Leads", icon: Target },
  { label: "More Sales", icon: ShoppingCart },
  { label: "Sustainable Growth", icon: TrendingUp },
];

function MegaphoneMark() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-16 w-16 md:h-20 md:w-20"
      aria-hidden="true"
    >
      <path
        d="M26 50L65 35V85L26 70V50Z"
        fill="none"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M64 35L85 25C92 21 99 25 99 32V88C99 95 92 99 85 95L64 85"
        fill="none"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 58H18C12 58 8 62 8 68V68C8 74 12 78 18 78H31"
        fill="none"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M38 84L48 100M62 84L72 100"
        fill="none"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M75 64L95 64"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M78 72L90 72"
        stroke="#dd0403"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-14">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(221,4,3,0.04)_0,_rgba(221,4,3,0)_60%)]" />
        <div className="absolute inset-x-0 top-16 h-[1px] bg-[#d9d1c8]" /> */}
      </div>

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#dd0403]" />
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#dd0403]">
                DIGITAL MARKETING SERVICES
              </span>
            </div>
            <h2 className="text-4xl font-[500] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[48px] text-black sm:text-[42px]">
              Smart Strategies{" "}
              <span className="text-[#dd0403]">For Business Expansion</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="mt-6 max-w-3xl text-base leading-5 text-neutral-500 sm:text-md text-black/55 text-[13px] font-[300]">
              A stunning website gets attention. Our result-driven digital
              marketing turns that attention into traffic, leads, and loyal
              customers.
            </p>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-12">
          {/* <div className="pointer-events-none absolute left-1/2 top-[62%] hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[9px] border-[#24164d] bg-white/30 lg:block" /> */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center lg:gap-8 xl:gap-10">
            <div className="space-y-5 lg:space-y-6 relative">
              <div className=" w-40 h-28  border-t border-dashed  border-[#dd0403]  absolute right-[-110px] rounded-[105px]  top-10" />
              <div className=" w-28 h-28  border-t border-dashed  border-[#dd0403]  absolute right-[-110px] rounded-[0px]  top-40" />
              <div className=" w-40 h-28  border-b border-dashed  border-[#dd0403]  absolute right-[-120px] rounded-[100px]  bottom-1" />
              <ServiceCardLeft item={services[0]} />
              <ServiceCardLeft item={services[1]} />
              <ServiceCardLeft item={services[2]} />
            </div>

            <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px] lg:h-[320px] lg:w-[320px]">
              <div className="absolute inset-0 rounded-full border-[8px] border-[#dd0403] bg-white shadow-[0_0_0_20px_rgba(40,25,92,0.04)]" />
              <div className="absolute inset-[18px] rounded-full bg-[#dd0403]/5" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {/* <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f5f4] ring-8 ring-[#f3ebf7]">
                  <MegaphoneMark />
                </div> */}
                <img src={marketing} alt="Marketing" className="mb-4 h-20 w-20" />
                <h3 className="text-[20px] font-[500] leading-none tracking-[-0.05em] text-black sm:text-[34px] lg:text-[20px]">
                  Digital Solutions
                </h3>
                <h3 className="mt-1 text-[28px] font-[500] leading-none tracking-[-0.05em] text-black sm:text-[34px] lg:text-[20px]">
                  That Deliver Results
                </h3>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#c4b7c9] lg:block" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4dade] lg:block" />

              <div className="absolute left-[4%] top-[19%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />

              <div className="absolute left-[-4%] top-[47%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />
              <div className="absolute left-[7%] top-[81%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />
              <div className="absolute right-[5%] top-[19%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />
              <div className="absolute right-[-3%] top-[47%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />
              <div className="absolute right-[8%] top-[81%] h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0]" />
            </div>

            <div className="space-y-5 lg:space-y-6 relative">
              <div className=" w-40 h-28  border-t border-dashed  border-[#dd0403]  absolute left-[-110px] rounded-[105px]  top-10" />
              <div className=" w-20 h-28  border-t border-dashed  border-[#dd0403]  absolute left-[-80px] rounded-[0px]  top-40" />
              <div className=" w-40 h-28  border-b border-dashed  border-[#dd0403]  absolute left-[-119px] rounded-[100px]  bottom-0.5" />
              <ServiceCardRight item={services[3]} />

              <ServiceCardRight item={services[4]} />
              <ServiceCardRight item={services[5]} />
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto w-full max-w-[1080px] overflow-hidden rounded-[32px] border border-[#e7e9f2] bg-[#dd0403]/5 p-2 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {bottomStats.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`
          group flex items-center justify-center gap-3
          px-5 py-2
          transition-all duration-300
          
          lg:justify-start
          lg:px-6
          ${
            index !== bottomStats.length - 1
              ? "lg:border-r lg:border-[#dd0403]/50"
              : ""
          }
        `}
              >
                {/* Icon */}
                <div
                  className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            text-[#dd0403]
            transition-transform duration-300
            group-hover:scale-110
          "
                >
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                {/* Label */}
                <span
                  className="
            whitespace-nowrap
            text-[14px]
            font-semibold
            tracking-[-0.02em]
            text-[#dd0403]
            sm:text-[15px]
            lg:text-[16px]
          "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCardLeft({ item }) {
  const Icon = item.icon;

  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-[60px] border border-[#ece3dc] bg-white/90 p-4 shadow-[0_12px_30px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(17,17,17,0.06)] lg:p-3 px-4">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon size={22} strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[14px] font-[500] uppercase tracking-[-0.03em] text-black sm:text-[16px]">
            {item.title}
          </h4>
          <p className="mt-1 text-[12px] leading-5 text-[#5d5b5b] sm:text-[13px]">
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
    <div
      className="relative mx-auto w-full max-w-[420px] 
    rounded-[60px] border border-[#ece3dc] bg-white/90 p-4 transition-all duration-300 hover:-translate-y-1 
    hover:shadow-[0_2px_38px_rgba(17,17,17,0.06)] lg:p-3 px-4"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon size={22} strokeWidth={2.2} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[14px] font-black uppercase tracking-[-0.03em] text-black sm:text-[16px]">
            {item.title}
          </h4>
          <p className="mt-1 text-[12px] leading-5 text-[#5d5b5b] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
