import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";

// Crisp SVG Icons for Top Web Technologies
const TechIcons = {
  react: () => (
    <svg viewBox="0 0 115.3 100" className="w-10 h-10">
      <ellipse cx="57.6" cy="50" rx="10.8" ry="10.8" fill="#61DAFB" />
      <path
        d="M57.6,17.4c20.3,0,37.3,13.6,44.2,32.6c-6.9,19-23.9,32.6-44.2,32.6S20.3,69,13.4,50C20.3,31,37.3,17.4,57.6,17.4 M57.6,9.4 C30.6,9.4,8.1,27.1,0,50c8.1,22.9,30.6,40.6,57.6,40.6s49.5-17.7,57.6-40.6C107.1,27.1,84.6,9.4,57.6,9.4L57.6,9.4z"
        fill="#61DAFB"
      />
      <ellipse
        cx="57.6"
        cy="50"
        rx="22.2"
        ry="57.6"
        transform="matrix(0.5 -0.866 0.866 0.5 -14.54 64.99)"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="8"
      />
      <ellipse
        cx="57.6"
        cy="50"
        rx="22.2"
        ry="57.6"
        transform="matrix(0.5 0.866 -0.866 0.5 72.14 -24.99)"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="8"
      />
    </svg>
  ),
  nextjs: () => (
    <svg viewBox="0 0 180 180" className="w-10 h-10">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.5 158.4L68.7 54H54v72h13.6V74.8l70.7 91.2c3.7-2.3 7.2-4.8 11.2-7.6z"
        fill="url(#nextG)"
      />
      <rect x="113.8" y="54" width="13.7" height="72" fill="#fff" />
      <defs>
        <linearGradient id="nextG" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  nodejs: () => (
    <svg viewBox="0 0 256 289" className="w-9 h-9">
      <path
        d="M128 0L249 70v140l-121 70-121-70V70z"
        fill="#339933"
      />
      <path
        d="M128 28c5.4 0 10.7 1.4 15.3 4.1l80.2 46.3c9.4 5.4 15.2 15.5 15.2 26.3v92.6c0 10.8-5.8 20.9-15.2 26.3l-80.2 46.3c-9.3 5.4-21.2 5.4-30.6 0l-80.2-46.3C23.1 218.2 17.3 208.1 17.3 197.3V104.7c0-10.8 5.8-20.9 15.2-26.3l80.2-46.3C117.3 29.4 122.6 28 128 28z"
        fill="#026E00"
      />
      <path
        d="M128 65l60 35v70l-60 35-60-35v-70z"
        fill="#66CC33"
      />
      <text x="128" y="152" fill="#fff" fontSize="62" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        JS
      </text>
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <rect width="100" height="100" rx="16" fill="#3178C6" />
      <path
        d="M48 37h-28v-9h68v9h-28v45h-12zM75 58c3 2 6 4 9 4s6-2 6-5c0-4-4-6-10-8-9-3-15-7-15-16 0-9 7-16 19-16 6 0 12 2 16 5l-4 9c-4-2-8-4-12-4-5 0-8 2-8 5 0 3 4 5 11 8 9 4 14 8 14 16 0 10-8 17-21 17-7 0-14-2-19-6z"
        fill="#fff"
      />
    </svg>
  ),
  javascript: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <rect width="100" height="100" rx="16" fill="#F7DF1E" />
      <path
        d="M58 74c2 3 5 5 9 5 5 0 8-3 8-7 0-5-3-7-9-10-9-4-15-8-15-17 0-8 6-15 16-15 6 0 11 2 14 6l-5 8c-3-2-6-4-9-4-4 0-6 2-6 5s2 4 8 7c9 4 16 7 16 18 0 10-7 16-18 16-8 0-14-3-17-8zM24 74c2 3 4 4 7 4 4 0 7-3 7-10V36h11v32c0 13-7 19-18 19-6 0-11-2-14-5z"
        fill="#000"
      />
    </svg>
  ),
  python: () => (
    <svg viewBox="0 0 110 110" className="w-10 h-10">
      <path
        d="M54.5 4c-13.6 0-22.3 6-22.3 17.5v12.8h23.4v3.3H21.2C9.4 37.6 0 46.8 0 60.1c0 13.5 10 21.6 22.3 21.6h7.3v-10.2c0-11.8 10.1-22.1 22.4-22.1h23.4V36.2C75.4 12.3 68.3 4 54.5 4zm-12.7 7a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
        fill="#3776AB"
      />
      <path
        d="M55.5 106c13.6 0 22.3-6 22.3-17.5V75.7H54.4v-3.3h34.4c11.8 0 21.2-9.2 21.2-22.5 0-13.5-10-21.6-22.3-21.6h-7.3v10.2c0 11.8-10.1 22.1-22.4 22.1H34.6v13.2c0 23.9 7.1 32.2 20.9 32.2zm12.7-7a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
        fill="#FFD43B"
      />
    </svg>
  ),
  aws: () => (
    <svg viewBox="0 0 100 60" className="w-12 h-8">
      <path
        d="M26.2 31.8c-4.4 0-7.5-1-9.5-3-2-2.1-3-5.2-3-9.5 0-4.3 1-7.5 3.1-9.6 2.1-2.1 5.3-3.2 9.4-3.2 4.1 0 7.2 1 9.3 3.1 2.1 2.1 3.1 5.3 3.1 9.7v12.5H26.2zm-2.8-5.4h6V17.2c0-2-.4-3.5-1.3-4.5-.9-1-2.4-1.5-4.5-1.5-2.2 0-3.8.5-4.7 1.5-.9 1-1.4 2.5-1.4 4.6v9.2zm37.3 5.4l-7.4-23.7h6.6l4.2 15.6 4.3-15.6h6.3L67.8 31.8h-7.1zm22.4 0c-2.3 0-4.3-.4-6-1.2-1.7-.8-3-2-3.8-3.5l5.2-3.3c.9 1.4 2.4 2.2 4.5 2.2 1.3 0 2.3-.3 3-.8.7-.5 1-1.2 1-2 0-.8-.3-1.4-1-1.8-.7-.5-1.8-.9-3.4-1.3-3-.8-5.1-1.8-6.3-3.1-1.2-1.3-1.8-3.1-1.8-5.3 0-2.5.9-4.5 2.7-5.9 1.8-1.5 4.3-2.2 7.3-2.2 2.2 0 4.1.4 5.6 1.3 1.5.8 2.6 2 3.3 3.4l-5 3.1c-.8-1.3-2.1-1.9-3.8-1.9-1.2 0-2.1.3-2.7.8-.6.5-.9 1.1-.9 1.9 0 .8.3 1.4.9 1.8.6.4 1.7.8 3.3 1.2 3.1.8 5.3 1.8 6.5 3.1 1.2 1.3 1.8 3.1 1.8 5.3 0 2.5-.9 4.5-2.8 6-1.9 1.5-4.4 2.3-7.6 2.3z"
        fill="#232F3E"
      />
      <path
        d="M10 44c23 15 54 15 76-2-2-2-7-1-10 1-19 12-46 12-66 1z"
        fill="#FF9900"
      />
      <path d="M86 42l10 2-4-9z" fill="#FF9900" />
    </svg>
  ),
  docker: () => (
    <svg viewBox="0 0 100 80" className="w-10 h-8">
      <path
        d="M98 38c-1.3-1-3.6-1.4-6.3-.9-1.1-3.6-3.8-6.3-7.5-7.7l-2.4-.9-.8 2.4c-1.1 3.5-.8 7.3.7 10.5C76 43 70 47 62 47H10C4.5 47 0 51.5 0 57c0 10 8 18 20 18 25 0 46-10 60-26 10-1.5 16-6.5 18-11z"
        fill="#2496ED"
      />
      <rect x="22" y="24" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="33" y="24" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="44" y="24" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="22" y="34" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="33" y="34" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="44" y="34" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="55" y="34" width="8" height="8" rx="1" fill="#2496ED" />
      <rect x="44" y="14" width="8" height="8" rx="1" fill="#2496ED" />
    </svg>
  ),
  shopify: () => (
    <svg viewBox="0 0 100 114" className="w-9 h-10">
      <path
        d="M74.4 17.5c-.3-.2-.7-.2-.9 0-.2.1-8.1 4.7-8.1 4.7s-5.4-5.3-7.4-7.3c-.6-.6-1.5-.7-2.3-.3l-3.3 1.8c-1.9-5.3-5.2-10-10.4-12.8-8.8-4.8-19.1-2.3-24.5 5.8-3.8 5.7-4.2 13-.9 20.3L2.2 38.6c-.6.3-1 1-1 1.7 0 .2 6.5 49.3 17.8 71.9 1.1 2.2 3.3 3.6 5.8 3.6h47.8c2.4 0 4.6-1.4 5.7-3.6C89.5 89.6 98.7 41 98.7 40.5c.1-.8-.3-1.6-1-1.9L74.4 17.5zM48.8 20.7l-5.6 3.1c-1.8-4.3-1.5-8.4.9-12 3.6-5.5 10.4-7.2 16.3-4 3.7 2 6.1 5.3 7.4 9.1-7.2 1.4-13.9 2.5-19 3.8z"
        fill="#95BF47"
      />
      <path
        d="M55.8 14.9c-.8-.8-1.7-1.1-2.5-.7l-4.5 2.5c5.1-1.3 11.8-2.4 19-3.8-3.7-2-6.1-5.3-7.4-9.1-1.9 4-3.5 8.1-4.6 11.1z"
        fill="#5E8E3E"
      />
      <path
        d="M58.3 46.2c-5.8 0-9.8 4.2-9.8 9.3 0 9.2 12.8 10.5 12.8 17.3 0 3.3-2.6 5.4-6.3 5.4-4.8 0-8.2-3.1-8.2-3.1l-1.9 6.8s4 2.8 10 2.8c9.5 0 14.5-5.9 14.5-12 0-10.4-12.8-11.4-12.8-17.5 0-2.4 1.8-4.3 4.9-4.3 3.6 0 6.6 2 6.6 2l1.8-6.4s-3.7-2.3-8.6-2.3z"
        fill="#fff"
      />
    </svg>
  ),
  graphql: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <path
        d="M50 7L13 28v44l37 21 37-21V28L50 7zm0 8.2l29.8 17-9.5 16.5H29.7l-9.5-16.5L50 15.2zM21 34.6l7.8 13.5L21 61.6V34.6zm6.8 33.6l9.5-16.4h25.4l9.5 16.4L50 80.9 27.8 68.2zM79 61.6l-7.8-13.5L79 34.6v27z"
        fill="#E10098"
      />
      <circle cx="50" cy="7" r="7" fill="#E10098" />
      <circle cx="13" cy="28" r="7" fill="#E10098" />
      <circle cx="87" cy="28" r="7" fill="#E10098" />
      <circle cx="13" cy="72" r="7" fill="#E10098" />
      <circle cx="87" cy="72" r="7" fill="#E10098" />
      <circle cx="50" cy="93" r="7" fill="#E10098" />
    </svg>
  ),
  postgresql: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <path
        d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 10c14.2 0 26.6 8.5 32.2 20.8-2.6-1.5-6.7-2.8-11.4-2.8-11.2 0-18.7 6.4-18.7 15.6v.4H42v-7.8c0-3.8-2.5-6.8-6.3-6.8-2.2 0-4.2 1-5.4 2.7-3.1-4.8-4.8-10.7-4.8-16.9C25.5 24.3 36.6 15 50 15z"
        fill="#4169E1"
      />
    </svg>
  ),
  mongodb: () => (
    <svg viewBox="0 0 100 120" className="w-8 h-10">
      <path
        d="M50 0C48 5 30 40 30 65c0 20 12 38 20 45 8-7 20-25 20-45C70 40 52 5 50 0z"
        fill="#47A248"
      />
      <path
        d="M50 115v-10c0-5 2-8 3-10 10-15 15-30 15-40 0-25-18-55-18-55s-2 20-2 40c0 15 3 25 3 35 0 20-1 40-1 40z"
        fill="#499D4A"
      />
      <path
        d="M50 115c-1 3-3 5-4 5s-3-2-4-5c0-5 3-10 4-15 1 5 4 10 4 15z"
        fill="#C4C2B4"
      />
    </svg>
  ),
  redis: () => (
    <svg viewBox="0 0 100 85" className="w-10 h-8">
      <path
        d="M50 0L0 25v35l50 25 50-25V25L50 0z"
        fill="#DC382D"
      />
      <path
        d="M50 12L12 30v25l38 18 38-18V30L50 12z"
        fill="#B71C1C"
      />
      <ellipse cx="50" cy="30" rx="20" ry="10" fill="#fff" opacity="0.3" />
    </svg>
  ),
  tailwind: () => (
    <svg viewBox="0 0 100 60" className="w-11 h-7">
      <path
        d="M26 10c-11 0-17 6-18 17 5-7 11-9 18-6 4 2 7 5 10 8 5 6 12 11 24 11 11 0 17-6 18-17-5 7-11 9-18 6-4-2-7-5-10-8-5-6-12-11-24-11zm24 20c-11 0-17 6-18 17 5-7 11-9 18-6 4 2 7 5 10 8 5 6 12 11 24 11 11 0 17-6 18-17-5 7-11 9-18 6-4-2-7-5-10-8-5-6-12-11-24-11z"
        fill="#06B6D4"
      />
    </svg>
  ),
  angular: () => (
    <svg viewBox="0 0 100 106" className="w-9 h-10">
      <path
        d="M50 0L5 16l7 59 38 21 38-21 7-59L50 0z"
        fill="#DD0031"
      />
      <path
        d="M50 0v96l38-21 7-59L50 0z"
        fill="#C3002F"
      />
      <path
        d="M50 19L27 71h9l5-12h18l5 12h9L50 19zm7 33H43l7-17 7 17z"
        fill="#fff"
      />
    </svg>
  ),
  azure: () => (
    <svg viewBox="0 0 100 100" className="w-9 h-9">
      <path
        d="M34 10l-26 73h28l12-34 16 34h28L57 10H34z"
        fill="#0078D4"
      />
      <path
        d="M48 49l-12 34h36z"
        fill="#50E6FF"
      />
    </svg>
  ),
  html5: () => (
    <svg viewBox="0 0 100 112" className="w-9 h-10">
      <path
        d="M9 0l8 92 33 10 33-10 8-92H9zm65 31H34l1 13h38l-3 34-19 5-19-5-1-15h11l1 7 8 2 8-2 1-11H22L19 18h64l-1 13z"
        fill="#E34F26"
      />
    </svg>
  ),
  css3: () => (
    <svg viewBox="0 0 100 112" className="w-9 h-10">
      <path
        d="M9 0l8 92 33 10 33-10 8-92H9zm65 31H34l1 13h38l-3 34-19 5-19-5-1-15h11l1 7 8 2 8-2 1-11H22L19 18h64l-1 13z"
        fill="#1572B6"
      />
    </svg>
  ),
  java: () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <path
        d="M45 75c-15 0-25-3-25-7s10-7 25-7 25 3 25 7-10 7-25 7zm22-20c-3-1-7-1-12-1-12 0-22 3-22 7s10 7 22 7c8 0 15-2 18-5l-6-8zm-8-12c-4 0-9 1-14 1-15 0-25 3-25 7s10 7 25 7c10 0 18-1 22-4l-8-11z"
        fill="#5382A1"
      />
      <path
        d="M48 20c5 5 2 12-2 18 5-4 10-10 8-16-1-4-4-6-6-2zm-6-8c7 6 5 15-1 23 8-7 14-16 10-24-2-4-6-4-9 1z"
        fill="#E76F00"
      />
    </svg>
  ),
  magento: () => (
    <svg viewBox="0 0 100 115" className="w-9 h-10">
      <path
        d="M50 0L5 26v63l15-9V34l30-17 30 17v46l15 9V26L50 0zm0 34L28 47v34l14 8V55l8-5 8 5v34l14-8V47L50 34z"
        fill="#EE672F"
      />
    </svg>
  ),
  googlecloud: () => (
    <svg viewBox="0 0 100 80" className="w-11 h-9">
      <path
        d="M37 62h39c11 0 20-9 20-20 0-10-8-19-18-20-2-12-12-21-25-21-11 0-20 7-24 16-3-2-7-3-11-3-11 0-20 9-20 20 0 3 1 5 2 8C7 45 0 53 0 62c0 10 8 18 18 18h19v-18z"
        fill="#4285F4"
      />
    </svg>
  ),
};

// 4 Columns of technologies matching the user screenshot layout
const col1 = [
  { name: "Node.js", icon: TechIcons.nodejs },
  { name: "Java", icon: TechIcons.java },
  { name: "Shopify", icon: TechIcons.shopify },
  { name: "AWS", icon: TechIcons.aws },
  { name: "GraphQL", icon: TechIcons.graphql },
  { name: "React", icon: TechIcons.react },
];

const col2 = [
  { name: "Next.js", icon: TechIcons.nextjs },
  { name: "Tailwind", icon: TechIcons.tailwind },
  { name: "Angular", icon: TechIcons.angular },
  { name: "Azure", icon: TechIcons.azure },
  { name: "Python", icon: TechIcons.python },
  { name: "Docker", icon: TechIcons.docker },
];

const col3 = [
  { name: "Azure", icon: TechIcons.azure },
  { name: "Magento", icon: TechIcons.magento },
  { name: "TypeScript", icon: TechIcons.typescript },
  { name: "PostgreSQL", icon: TechIcons.postgresql },
  { name: "Docker", icon: TechIcons.docker },
  { name: "MongoDB", icon: TechIcons.mongodb },
];

const col4 = [
  { name: "HTML5", icon: TechIcons.html5 },
  { name: "JavaScript", icon: TechIcons.javascript },
  { name: "Google Cloud", icon: TechIcons.googlecloud },
  { name: "CSS3", icon: TechIcons.css3 },
  { name: "Redis", icon: TechIcons.redis },
  { name: "Node.js", icon: TechIcons.nodejs },
];

// Single Marquee Column Component for Seamless Vertical Auto-Scroll
const MarqueeColumn = ({ items, reverse = false, duration = 24 }) => {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden h-full flex flex-col justify-start">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          y: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex flex-col gap-4 py-2"
      >
        {repeated.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white border border-gray-100/90 shadow-[0_8px_25px_rgba(0,0,0,0.06)] flex items-center justify-center p-3 sm:p-4 hover:scale-105 hover:shadow-lg transition-transform duration-200 shrink-0 select-none cursor-pointer"
              title={item.name}
            >
              <Icon />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const WebDevTechStack = () => {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Text Content (Styled to match website) ── */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow matching website signature style */}
            <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/40 mb-3.5">
              <span className="h-px w-7 bg-[#dd0403]" />
              <span>Our Tech Stack</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-[600] text-black leading-[1.15] tracking-[-0.02em] mb-4">
              Key Technologies &{" "}
              <span className="text-[#dd0403]">Platforms</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[14px] sm:text-[15px] font-[300] leading-[1.8] text-black/55 mb-8 max-w-[500px]">
              We work with leading platforms and technologies that empower digital
              transformation, accelerate delivery, and drive measurable business
              results.
            </p>

            {/* CTA Button matching website signature button */}
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#dd0403] px-6 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#bd0303] shadow-md shadow-[#dd0403]/20"
            >
              <span>Explore Tech Stack</span>
              <ArrowRight size={16} strokeWidth={2} />
            </a>

            {/* SEO Trust Micro-Badges */}
       
          </div>

          {/* ── RIGHT COLUMN: Rounded Container with 4 Vertical Auto-Scrolling Logo Columns ── */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] bg-slate-50/70 border border-gray-200/80 p-6 sm:p-8 h-[480px] sm:h-[500px] overflow-hidden shadow-inner">
              
              {/* Top & Bottom Gradient Fades for Infinite Window Effect */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent z-10" />

              {/* 4 Vertical Columns Grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 h-full justify-items-center">
                <MarqueeColumn items={col1} reverse={false} duration={22} />
                <MarqueeColumn items={col2} reverse={true} duration={26} />
                <MarqueeColumn items={col3} reverse={false} duration={24} />
                <MarqueeColumn items={col4} reverse={true} duration={28} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDevTechStack;
