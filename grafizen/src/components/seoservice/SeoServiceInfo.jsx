import React from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  FileText,
  Megaphone,
  MapPin,
  Network,
  Search,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import center from "../../../public/image/support.png";

const services = [
  {
    id: "pillar",
    title: "Core SEO Pillar Page",
    description:
      "Build a focused SEO hub that strengthens relevance and authority.",
    icon: Search,
    accent: "#dd0403",
    placement: "left-top",
  },
  {
    id: "local",
    title: "Local SEO & Maps",
    description:
      "Improve local rankings and Google Maps visibility to attract customers.",
    icon: MapPin,
    accent: "#dd0403",
    placement: "left-middle",
  },
  {
    id: "ecommerce",
    title: "E-Commerce SEO",
    description:
      "Optimize product pages and categories to increase organic e-commerce sales.",
    icon: ShoppingCart,
    accent: "#dd0403",
    placement: "left-bottom",
  },
  {
    id: "technical",
    title: "Technical SEO Audits",
    description:
      "Fix crawl errors, improve Core Web Vitals, and ensure indexing.",
    icon: ShieldCheck,
    accent: "#dd0403",
    placement: "right-top",
  },
  {
    id: "content",
    title: "Cluster Content Hubs",
    description:
      "Create connected topics and long-tail content to strengthen search rankings.",
    icon: FileText,
    accent: "#dd0403",
    placement: "right-middle",
  },
  {
    id: "ai",
    title: "AI-Driven Optimization",
    description:
      "Use AI analytics and intent mapping to adapt search strategies.",
    icon: Bot,
    accent: "#dd0403",
    placement: "right-bottom",
  },
];

export default function SeoServiceInfo() {
  return (
    <section className="relative overflow-hidden min-h-0 lg:min-h-screen bg-white px-4 py-10 sm:py-8 sm:px-6 lg:px-10 xl:px-14">
      <div className="pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1300px]">
        <div className="mb-4 sm:mb-16 grid gap-2 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-4 sm:mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>HOW WE RANK YOU HIGHER</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-[500] leading-tight lg:leading-12 tracking-[-0.045em] text-black">
              Structured <span className="text-[#dd0403]">SEO Hubs</span> That
              Drive Real Traffic
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-4xl">
            <p className="mt-2 sm:mt-6 max-w-3xl text-xs sm:text-[14px] leading-relaxed sm:leading-5 text-black/55 font-[300]">
              A stunning website gets attention, but structured search hubs turn
              that traffic into consistent leads, sales, and ranking growth.
            </p>
          </div>
        </div>

        <div className="relative mt-5 sm:mt-10 lg:mt-12">
          <div className="pointer-events-none absolute inset-0  hidden lg:block" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-center lg:gap-8 xl:gap-10">
            <div className="space-y-2 lg:space-y-6 relative">
              <div className="hidden lg:block w-40 h-28 border-t border-dashed border-[#dd0403] absolute right-[-120px] rounded-[105px] top-8" />
              <div className="hidden lg:block w-28 h-28 border-t border-dashed border-[#dd0403] absolute right-[-110px] rounded-[0px] top-40" />
              <div className="hidden lg:block w-40 h-28 border-b border-dashed border-[#dd0403] absolute right-[-130px] rounded-[100px] bottom-1" />
              <ServiceCardLeft item={services[0]} />
              <ServiceCardLeft item={services[1]} />
              <ServiceCardLeft item={services[2]} />
            </div>

            <div className="relative mx-auto flex h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[320px] lg:w-[320px] items-center justify-center">
              {/* Mobile Only: Glowing pulse effect behind center circle */}
              <div className="absolute -inset-1 rounded-full bg-[#dd0403]/15 blur-sm animate-pulse lg:hidden pointer-events-none" />

              {/* Mobile Only: Primary Revolving Ring Circle with Orbiting Satellite Dots */}
              <div className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-full border-2 border-dashed border-[#dd0403]/60 animate-[spin_10s_linear_infinite] lg:hidden">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_12px_rgba(221,4,3,0.8)]" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_10px_rgba(221,4,3,0.8)]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_12px_rgba(221,4,3,0.8)]" />
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-3 w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] shadow-[0_0_10px_rgba(221,4,3,0.8)]" />
              </div>

              <div className="absolute inset-0 rounded-full border-[2px] sm:border-[8px] border-[#dd0403] bg-white md:shadow-[0_0_0_20px_rgba(40,25,92,0.04)] shadow-[0_0_0_10px_rgba(40,25,92,0.04)]" />
              <div className="absolute inset-[14px] sm:inset-[18px] rounded-full bg-[#dd0403]/5" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <img
                  src={center}
                  alt="seo-hub"
                  className="mb-2 sm:mb-4 h-14 w-14 sm:h-20 sm:w-20 object-contain animate-[pulse_2.5s_ease-in-out_infinite] lg:animate-none"
                />
                <h3 className="text-lg sm:text-[24px] lg:text-[20px] font-[400] leading-none tracking-[-0.05em] text-black">
                  Connected
                </h3>
                <h3 className="mt-1 text-xl sm:text-[28px] lg:text-[20px] font-[400] leading-none tracking-[-0.05em] text-black">
                  Content Hub
                </h3>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#c4b7c9] lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4dade]  lg:block" />

              <div className="absolute left-[4%] top-[19%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
              <div className="absolute left-[-4%] top-[47%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
              <div className="absolute left-[7%] top-[81%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
              <div className="absolute right-[5%] top-[19%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
              <div className="absolute right-[-3%] top-[47%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
              <div className="absolute right-[8%] top-[81%] h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#dd0403] ring-4 ring-[#f9dfe0] hidden md:flex" />
            </div>

            <div className="space-y-2 lg:space-y-6 relative">
              <div className="hidden lg:block w-40 h-28 border-t border-dashed border-[#dd0403] absolute left-[-120px] rounded-[105px] top-10" />
              <div className="hidden lg:block w-20 h-28 border-t border-dashed border-[#dd0403] absolute left-[-80px] rounded-[0px] top-40" />
              <div className="hidden lg:block w-40 h-28 border-b border-dashed border-[#dd0403] absolute left-[-130px] rounded-[100px] bottom-0.5" />
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
    <div className="relative mx-auto w-full max-w-full lg:max-w-[420px] rounded-[15px] sm:rounded-[60px] border border-[#ece3dc] bg-white/90 p-3 shadow-[0_12px_30px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(17,17,17,0.06)] lg:p-3 px-4">
      <div className="flex items-center gap-3.5 sm:gap-4 sm:ml-3">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon
            size={20}
            strokeWidth={2.2}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] sm:text-[16px] font-[300] uppercase tracking-[-0.03em] text-black">
            {item.title}
          </h4>
          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-[13px] leading-relaxed sm:leading-5 text-black/55">
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
    <div className="relative mx-auto w-full max-w-full lg:max-w-[420px] rounded-[15px] sm:rounded-[60px] border border-[#ece3dc] bg-white/90 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_38px_rgba(17,17,17,0.06)] lg:p-3 px-4">
      <div className="flex items-center gap-3.5 sm:gap-4 sm:ml-3">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#dd0403] text-white shadow-[0_10px_20px_rgba(44,29,93,0.18)]">
          <Icon
            size={20}
            strokeWidth={2.2}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[13px] sm:text-[16px] font-[300]] uppercase tracking-[-0.03em] text-black">
            {item.title}
          </h4>
          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-[13px] leading-relaxed sm:leading-5 text-black/55">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
