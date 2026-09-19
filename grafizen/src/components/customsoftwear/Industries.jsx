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
} from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Healthcare",
    icon: HeartPulse,
  },
  {
    id: 2,
    name: "Finance",
    icon: CircleDollarSign,
  },
  {
    id: 3,
    name: "Education",
    icon: BookOpen,
  },
  {
    id: 4,
    name: "Travel",
    icon: Plane,
  },
  {
    id: 5,
    name: "Entertainment",
    icon: Grid3X3,
  },
  {
    id: 6,
    name: "Transportation",
    icon: Truck,
  },
  {
    id: 7,
    name: "Real Estate",
    icon: Building2,
  },
  {
    id: 8,
    name: "Restaurant",
    icon: CookingPot,
  },
  {
    id: 9,
    name: "Manufacturing",
    icon: Factory,
  },
  {
    id: 10,
    name: "Insurance",
    icon: ShieldCheck,
  },
  {
    id: 11,
    name: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    id: 12,
    name: "Mobility",
    icon: CarFront,
  },
];

const Industries = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-[7%] lg:py-16">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-8 lg:mb-9">
          <div class="mb-4 sm:mb-5 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45"><span class="h-px w-7 bg-[#dd0403]"></span><span>
            Domain-Specific Software Expertise</span></div>
          <h2 className="max-w-[900px] text-4xl font-medium leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[48px] mx-auto text-center" >
           
             <span className="text-[#dd0403]"> 
              Industry-Specific </span> Software Solutions
            {" "}
          
          </h2>

          <p className="mt-5 max-w-[900px] text-base leading-7 text-black/55 sm:text-lg md:text-xl 
          lg:text-[14px] lg:leading-[1.6] mx-auto text-center font-[300]">
            We deliver industry-specific software solutions designed to solve
            complex business challenges, streamline operations, and accelerate
            digital transformation. By combining advanced technology,
            strategic thinking, and deep domain understanding, we help
            businesses across the United States improve efficiency, enhance
            customer experience, and stay competitive in rapidly evolving
            markets.
          </p>
        </div>

        {/* Industries */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-7">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.id}
                className="group flex min-h-[140px] flex-col items-center justify-center rounded-[20px] bg-white px-3 py-5 shadow-[0_5px_20px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:min-h-[180px] lg:min-h-[140px]"
              >
                {/* Icon */}
                <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[15px] bg-[#dd0403]/5 transition-all duration-300 group-hover:bg-[#dd0403]">
                  <Icon
                    size={29}
                    strokeWidth={1.8}
                    className="text-[#dd0403] transition-colors duration-300 group-hover:text-white"
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

      </div>
    </section>
  );
};

export default Industries;