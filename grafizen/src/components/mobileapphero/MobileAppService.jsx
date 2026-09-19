import React from "react";
import {
  Palette,
  Apple,
  Smartphone,
  Layers,
  Zap,
  Users,
} from "lucide-react";

const solutions = [
  {
    title: "Design & Prototyping of Apps",
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
  {
    title: "Advanced App Development",
    description:
      "We deliver everything from easy integration and highly-optimized performance to user-friendly interfaces with responsive design. We use cutting-edge technologies, including UI/UX matching operating system standards, for a seamless experience.",
    icon: Zap,
  },
  {
    title: "Hire Expert Mobile App Developers",
    description:
      "Hire professional mobile app development specialists or mobile app development teams with the skills and experience to manage large-scale projects from start to end, depending on your realized and invested needs.",
    icon: Users,
  },
];

const SolutionCard = ({ title, description, icon: Icon }) => {
  return (
    <div
      className="
        group
        relative
        z-20
        m-2
        flex
        min-h-[220px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        hover:border-transparent

        after:absolute
        after:inset-0
        after:-z-10
        after:h-full
        after:w-full
        after:-translate-y-full
        after:rounded-2xl
        after:bg-[#dd0403]
        after:transition-all
        after:duration-500

        hover:after:translate-y-0
      "
    >
      {/* Title */}
      <h3
        className="
          relative
          z-10
          max-w-[330px]
          text-lg
          sm:text-xl
          font-[400]
          leading-snug
          text-gray-900
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative
          z-10
          mt-2.5
          text-xs
          sm:text-sm
          leading-relaxed
          text-black/55
          transition-colors
          duration-300
          group-hover:text-white/90
          font-[300]
        "
      >
        {description}
      </p>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-7xl px-5 text-center">
     
        <div className="mb-4 flex items-center justify-center gap-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-black/45">
          <span className="h-px w-7 bg-[#dd0403]" />
          <span>OUR SOLUTIONS</span>
        </div>   

        <h2
          className="
            mt-3
            text-3xl
           
            font-bold
            tracking-tight
            text-gray-900
            sm:text-4xl
            lg:text-5xl
            leading-[1.18]
          "
        >
          <span className="text-[#dd0403]">Mobile App</span> Development Services
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            sm:text-base
            leading-relaxed
            text-black/55
            font-[300]
          "
        >
          Our mobile app development services help businesses create
          engaging, scalable, and high-performance applications across
          multiple platforms.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-5
          px-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {solutions.map((solution, index) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
          />
        ))}
      </div>

    </section>
  );
};

export default Solutions;