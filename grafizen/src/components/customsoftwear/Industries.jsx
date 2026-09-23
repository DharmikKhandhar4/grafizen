import React from "react";
import {
  HeartPulse,
  CircleDollarSign,
  BookOpen,
  Plane,
  Grid3X3,
  Truck,
  Building2,
  CookingPot,
  Factory,
  ShieldCheck,
  ShoppingCart,
  CarFront,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Healthcare",
    description: "Better care through smarter technology",
    icon: HeartPulse,
    gradient: "from-red-50 to-pink-50",
  },
  {
    id: 2,
    name: "Finance",
    description: "Secure, efficient financial solutions",
    icon: CircleDollarSign,
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    id: 3,
    name: "Education",
    description: "Modern learning for a brighter future",
    icon: BookOpen,
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    id: 4,
    name: "Travel",
    description: "Seamless journeys, endless possibilities",
    icon: Plane,
    gradient: "from-sky-50 to-cyan-50",
  },
  {
    id: 5,
    name: "Entertainment",
    description: "Engaging experiences, anytime, anywhere",
    icon: Grid3X3,
    gradient: "from-purple-50 to-fuchsia-50",
  },
  {
    id: 6,
    name: "Transportation",
    description: "Smarter mobility for connected cities",
    icon: Truck,
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    id: 7,
    name: "Real Estate",
    description: "Smarter property management & sales",
    icon: Building2,
    gradient: "from-orange-50 to-amber-50",
  },
  {
    id: 8,
    name: "Restaurant",
    description: "Delicious experiences, digital solutions",
    icon: CookingPot,
    gradient: "from-rose-50 to-red-50",
  },
  {
    id: 9,
    name: "Manufacturing",
    description: "Optimized production, higher productivity",
    icon: Factory,
    gradient: "from-slate-100 to-gray-50",
  },
  {
    id: 10,
    name: "Insurance",
    description: "Greater security, brighter tomorrows",
    icon: ShieldCheck,
    gradient: "from-violet-50 to-purple-50",
  },
  {
    id: 11,
    name: "E-Commerce",
    description: "Powering your online growth",
    icon: ShoppingCart,
    gradient: "from-pink-50 to-rose-50",
  },
  {
    id: 12,
    name: "Mobility",
    description: "Flexible. Connected. Future-ready.",
    icon: CarFront,
    gradient: "from-teal-50 to-emerald-50",
  },
];

const Industries = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-[7%] lg:py-16">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-8 lg:mb-9">
          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 md:text-[11px] text-[10px] font-medium uppercase tracking-[0.2em] text-black/45"><span className="h-px w-7 bg-[#dd0403]"></span><span>
            Domain-Specific Software Expertise</span></div>
          <h2 className="max-w-[900px] text-[28px] font-medium leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[48px] mx-auto text-center" >
           
             <span className="text-[#dd0403]"> 
              Industry-Specific </span> Software Solutions
            {" "}
          
          </h2>

          <p className="mt-5 max-w-[900px] text-base leading-7 text-black/55 sm:text-lg md:text-xl 
          lg:text-[14px] lg:leading-[1.6] mx-auto text-center font-[300] hidden md:block">
            We deliver industry-specific software solutions designed to solve
            complex business challenges, streamline operations, and accelerate
            digital transformation. By combining advanced technology,
            strategic thinking, and deep domain understanding, we help
            businesses across the United States improve efficiency, enhance
            customer experience, and stay competitive in rapidly evolving
            markets.
          </p>
            <p className="mt-5 max-w-[900px] text-[13px]  text-black/55 sm:text-lg md:text-xl 
          lg:text-[14px] lg:leading-[1.6] mx-auto text-center font-[300]  md:hidden">
            Smart software solutions built to solve industry challenges and accelerate business growth.
          </p>
        </div>

        {/* ──────────────── Desktop / Tablet cards (md+) ──────────────── */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-5 lg:gap-7">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="group flex md:min-h-[140px] flex-col items-center justify-center rounded-[20px] bg-white px-3 py-5 shadow-[0_5px_10px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:min-h-[180px] lg:min-h-[140px]"
              >
                {/* Icon */}
                <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[15px] bg-[#dd0403]/5 transition-all duration-300 group-hover:bg-[#dd0403]">
                  <Icon
                    strokeWidth={1.8}
                    className="text-[#dd0403] transition-colors duration-300 group-hover:text-white size-8"
                  />
                </div>
                {/* Title */}
                <h3 className="text-center text-base font-[400] text-black sm:text-lg">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* ──────────────── Mobile cards (below md) ──────────────── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="group flex flex-col  gap-2.5 rounded-xl bg-white p-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all duration-300"
              >
                {/* Icon with gradient bg */}
            <div className=" flex items-center gap-2 justify-start ">
                  <div className={`flex  w-[20px] shrink-0 items-start justify-center rounded-xl `}>
                  <Icon
                    strokeWidth={1.8}
                    className="text-[#dd0403] size-5"
                  />
                </div>
                      <h3 className="text-[14px] font-[400] leading-tight text-black">
                    {industry.name}
                  </h3>
            </div>

                {/* Text + arrow */}
                <div className="flex min-w-0 flex-1 flex-col">
            
                  <p className="mt-0.5 text-[11px] leading-[1.35] text-black/45">
                    {industry.description}
                  </p>
                  {/* <ArrowRight className="mt-1 size-3.5 text-[#dd0403]" strokeWidth={2} /> */}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Industries;