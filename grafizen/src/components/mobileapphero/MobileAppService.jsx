import React, { useState } from "react";
import {
  Palette,
  Apple,
  Smartphone,
  Layers,
  Zap,
  Users,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    title: "Design of Apps",
    description:
      "Designing visually appealing apps that are also interactive and user-friendly have always been at the forefront of our mobile app development services. Our mobile app design team aims at creating highly engaging, easy-to-use, and consistent user interfaces across different types of mobile platforms.",
    icon: Palette,
  },
  {
    title: "iOS App Development",
    description:
      "We know what it requires to make a perfect iPhone application as we have already developed iPhone apps of different categories. We know what it requires to turn a raw app idea into a successful mobile development.",
    icon: Apple,
  },
  {
    title: "Android App Development",
    description:
      "Our full-stack Android developers use cutting-edge technology and years of experience with successful apps, we can create professional mobile applications that will make your business stand out from all others on Google Play.",
    icon: Smartphone,
  },
  {
    title: "Hybrid App Development",
    description:
      "With our dynamic Hybrid app development services, you can now eliminate all your cross-platform app development headaches! Our Hybrid app developers offer a one-size-fits-all solution that enables you to build a single app using one codebase to run on several platforms.",
    icon: Layers,
  },
];

function SolutionRow({ item, index }) {
  const Icon = item.icon;

  // Mobile open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="
        group
        border-b border-gray-200
        py-3 sm:py-6
        cursor-pointer
        transition-all duration-300
      "
    >
      {/* ================= MOBILE ================= */}
      <div className="flex items-center gap-3 md:hidden">
        {/* Number */}
        {/* <span className="w-8 text-sm font-medium text-black/45">
          {String(index + 1).padStart(2, "0")}
        </span> */}

        {/* Icon */}
        <div
          className="
            grid h-10 w-10 shrink-0 place-items-center
            rounded-full
            border border-gray-200
            bg-white
            transition-all duration-300
            group-hover:border-[#dd0403]/40
            group-hover:shadow-[0_5px_20px_rgba(221,4,3,0.12)]
          "
        >
          <Icon
            className="
              h-5 w-5
              text-[#dd0403]
              transition-all duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            flex-1
            text-[15px] sm:text-xl
            font-[500]
            text-black
            leading-tight
          "
        >
          {item.title}
        </h3>

        {/* Arrow */}
        <div
          className={`
            grid h-8 w-8 shrink-0 place-items-center
            rounded-full
            border border-gray-300
            transition-all duration-300
            ${
              isOpen
                ? "rotate-45 border-[#dd0403] text-[#dd0403]"
                : "text-black/60"
            }
          `}
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* ================= MOBILE INFORMATION ================= */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "mt-4 max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <p className="ml-[52px] pr-2 text-[13px] leading-relaxed font-[300] text-black/55">
          {item.description}
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex md:items-center md:gap-10">
        {/* Number + Icon */}
        <div className="relative flex w-[240px] shrink-0 items-center gap-6">
          {/* Number */}
          <span className="text-lg font-medium text-black/50">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <div
            className="
              relative grid
              h-20 w-20
              place-items-center
              rounded-full
              border border-gray-200
              bg-white
              transition-all duration-300
              group-hover:border-[#dd0403]/40
              group-hover:shadow-[0_8px_30px_rgba(221,4,3,0.12)]
            "
          >
            <Icon
              className="
                h-10 w-10
                text-[#dd0403]
                transition-all duration-300
                group-hover:scale-110
                group-hover:rotate-6
              "
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className="
              relative inline-block
              pb-3
              text-xl lg:text-2xl
              font-[500]
              text-black
              after:absolute
              after:left-0
              after:bottom-0
              after:h-0.5
              after:w-10
              after:bg-[#dd0403]
              after:transition-all
              after:duration-300
              group-hover:after:w-full
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              max-w-3xl
              text-sm
              leading-relaxed
              font-[300]
              text-black/55
            "
          >
            {item.description}
          </p>
        </div>

        {/* Desktop Arrow */}
        <div
          className="
            grid h-14 w-14 shrink-0
            place-items-center
            rounded-full
            border border-gray-300
            transition-all duration-300
            group-hover:border-[#dd0403]
            group-hover:text-[#dd0403]
            group-hover:rotate-45
          "
        >
          <ArrowUpRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="w-full bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-8">
          {/* <div
            className="
              mb-4 flex items-center justify-center gap-2.5
              text-[10px] sm:text-[11px]
              font-bold uppercase
              tracking-[0.2em]
              text-black/45
            "
          >
            <span className="h-px w-7 bg-[#dd0403]" />
            <span>OUR SOLUTIONS</span>
            <span className="h-px w-7 bg-[#dd0403]" />
          </div> */}
<div className="mb-3 sm:mb-5 flex items-center  justify-center gap-2.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-black/40 "><span className="h-px w-7 bg-[#dd0403]"></span><span>OUR SOLUTIONS</span></div>
          <h2
            className="
              text-[28px] sm:text-4xl lg:text-5xl
              font-bold
              leading-[1.18]
              tracking-tight
            "
          >
            <span className="text-[#dd0403]">Mobile App</span>{" "}
            Development Services
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-3xl
              text-[13px] sm:text-base
              leading-tight
              font-[300]
              text-black/55
            "
          >
            Our mobile app development services help businesses create
            engaging, scalable, and high-performance applications across
            multiple platforms.
          </p>
        </div>

        {/* Rows */}
        <div>
          {solutions.map((item, index) => (
            <SolutionRow
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}