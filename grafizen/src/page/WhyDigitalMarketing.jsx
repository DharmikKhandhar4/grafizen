import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  ChevronDown,
  Users,
  TrendingUp,
  ArrowUp,
  Globe,
  Camera,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import arrow from "../../public/arrow-down.png";

const chartData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 34 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 48 },
  { month: "May", value: 62 },
  { month: "Jun", value: 92 },
];

const stats = [
  {
    icon: Search,
    label: "SEARCH VISIBILITY",
    value: "+68%",
    sub: "vs last 6 months",
  },
  {
    icon: Users,
    label: "QUALIFIED LEADS",
    value: "+41%",
    sub: "vs last 6 months",
  },
  {
    icon: TrendingUp,
    label: "WEBSITE TRAFFIC",
    value: "+55%",
    sub: "vs last 6 months",
  },
];

// Custom dot: only render a visible dot on Jan, Mar, May, Jun (matches reference)
const CustomDot = (props) => {
  const { cx, cy, index } = props;
  const visibleIndexes = [0, 2, 4, 5];
  if (!visibleIndexes.includes(index)) return null;

  const isLast = index === 5;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={isLast ? 7 : 5}
      fill="#ffffff"
      stroke="#DC2626"
      strokeWidth={isLast ? 3 : 2.5}
    />
  );
};
const queries = [
  "it company in rajkot",
  "best app development company in rajkot",
  "digital marketing agency near me",
  "top rated dentist 2026",
  "furniture store open now",
];

const lanes = [
  {
    number: "01",
    label: "Awareness",
    title: "Get discovered",
    description: "Show up where people are already looking.",
    cards: [
      [
        Search,
        "Increase Google visibility",
        "Help more customers find your business online.",
      ],
      [
        Sparkles,
        "Build brand awareness",
        "Create a stronger, more recognizable brand.",
      ],
      [
        TrendingUp,
        "Increase website traffic",
        "Bring relevant visitors to your digital presence.",
      ],
    ],
  },
  {
    number: "02",
    label: "Consideration",
    title: "Earn the trust",
    description: "Give people a reason to pick you.",
    cards: [
      [
        Users,
        "Reach new customers",
        "Connect with audiences actively looking for you.",
      ],
      [
        ShieldCheck,
        "Build customer trust",
        "Build credibility through a consistent presence.",
      ],
    ],
  },
  {
    number: "03",
    label: "Conversion",
    title: "Turn interest into revenue",
    description: "Make it easy to take the next step.",
    cards: [
      [
        Target,
        "Generate qualified leads",
        "Turn online attention into valuable enquiries.",
      ],
      [
        MessageCircle,
        "Increase online enquiries",
        "Make it easier for prospects to contact you.",
      ],
      [
        BarChart3,
        "Support business growth",
        "Turn digital marketing into long-term growth.",
      ],
    ],
  },
];

function BrowserIcon() {
  return <Search size={16} strokeWidth={1.8} />;
}

function WhyDigitalMarketing() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(128400);
  const statRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let queryIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer;

    if (reducedMotion) {
      setQuery(queries[0]);
    } else {
      const tick = () => {
        const current = queries[queryIndex];
        characterIndex += deleting ? -1 : 1;
        setQuery(current.slice(0, characterIndex));

        if (!deleting && characterIndex === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1400);
          return;
        }
        if (deleting && characterIndex === 0) {
          deleting = false;
          queryIndex = (queryIndex + 1) % queries.length;
        }
        timer = window.setTimeout(tick, deleting ? 35 : 70);
      };
      timer = window.setTimeout(tick, 70);
    }

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return undefined;

    let counter;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (!reducedMotion) {
          counter = window.setInterval(() => {
            setSearches((value) => value + Math.floor(Math.random() * 9) + 3);
          }, 220);
        }
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearInterval(counter);
    };
  }, []);

  return (
    <main className="min-h-[50vh] overflow-hidden bg-white text-[#171717] selection:bg-[#dd0403] selection:text-white">
      <section className="mx-auto max-w-[1280px] px-5 pb-24 pt-8 sm:px-8 sm:pt-12  lg:pt-16">
        <div className="grid-cols-[1fr_0.8fr] grid gap-6 lg:grid">
          <div className="relative min-h-[400px] lg:min-h-[400px]  w-full ">
            <div className="relative z-10 w-full overflow-hidden rounded-[15px] border border-black/10 bg-[#faf9f6] shadow-[16px_18px_0_#e7e2d9] lg:w-[calc(100%-110px)] ">
              <div className="flex h-11 items-center border-b border-black/10 bg-[#eeece7] px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dd0403]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d6a33c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6f8f40]" />
                </div>
                <div className="mx-auto flex h-7 w-[min(420px,60%)] items-center gap-2 border border-black/10 bg-white px-3  text-[10px] text-neutral-500 rounded-2xl">
                  <BrowserIcon />
                  <span>{query}</span>
                  <span className="h-3 w-px animate-pulse bg-[#dd0403]" />
                </div>
              </div>
              <div className="px-7 py-12 sm:px-14 sm:py-14 lg:px-10 lg:py-8">
                <span className=" text-[10px]  uppercase tracking-[0.22em] text-[#dd0403]">
                  Why digital marketing
                </span>
                <h1 className="mt-5 max-w-3xl  text-5xl font-[500] leading-[0.94] tracking-[-0.045em]  lg:text-[38px]">
                  Your customers are already{" "}
                  <span className="text-[#dd0403]">online.</span>
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-4 text-neutral-600 sm:text-[13px]">
                  Customers increasingly use search engines, social media and
                  websites to discover and evaluate businesses. Without a strong
                  digital presence, they&apos;ll discover your competitors
                  first.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-4 text-neutral-500 sm:text-[13px]">
                  A well-planned digital marketing strategy puts your business
                  in front of the right people, at the right moment, with the
                  right message.
                </p>
                <div
                  ref={statRef}
                  className="mt-6  flex items-center gap-4 border-t border-black/10 pt-5"
                >
                  <span className=" text-3xl font-bold tabular-nums text-[#dd0403] sm:text-4xl">
                    {searches.toLocaleString()}
                  </span>
                  <span className=" text-[10px] uppercase leading-4 tracking-[0.12em] text-neutral-500">
                    local searches like these
                    <br />
                    happening right now
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 right-0 z-20 w-44 border border-black/10 bg-white p-4 shadow-[8px_8px_0_#dd0403] rounded-xl sm:w-52 sm:p-5 lg:right-8">
              <div className="flex items-center justify-between  text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                <span>Search interest</span>
                <TrendingUp size={15} className="text-[#dd0403]" />
              </div>
              <div className="mt-3  text-2xl font-bold">
                +38%{" "}
                <span className="text-sm font-medium text-neutral-400">
                  YoY
                </span>
              </div>
            </div>
          </div>
          <div className=" ">
            {/* Top Card: Chart */}
            <div className="bg-white rounded-3xl shadow-sm p-5 relative">
              <div className="flex items-start justify-between mb-0">
                <div>
                  <p className="text-xs font-bold tracking-wide text-gray-800">
                    ORGANIC TRAFFIC GROWTH
                  </p>
                </div>
                <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1.5">
                  Last 6 Months
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-end justify-between mb-2">
                <div>
                  <h2 className="text-xl font-extrabold text-red-600 leading-none">
                    +42.8%
                  </h2>
                  <p className="text-gray-700 mt-1 text-sm text-[12px]">
                    Organic Growth
                  </p>
                </div>
              </div>

              <div className="relative h-30 mt-0">
                {/* Callout bubble */}
                <div className="absolute right-10 -top-10 z-10">
                  <div className="border border-red-300 bg-white rounded-xl px-2 py-1.5 text-[11px] leading-tight text-red-600 font-semibold shadow-sm">
                    Highest Growth
                    <br />
                    This Year
                  </div>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="fillRed" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#DC2626"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="100%"
                          stopColor="#DC2626"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 12 }}
                      dy={10}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#DC2626"
                      strokeWidth={2.5}
                      fill="url(#fillRed)"
                      dot={<CustomDot />}
                      activeDot={false}
                      isAnimationActive={true}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {stats.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl shadow-sm p-3 flex flex-col"
                >
                  <div className=" flex  items-start gap-3 ">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex  items-center justify-center ">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-wide text-gray-500">
                        {label}
                      </p>
                      <p className="text-md font-extrabold text-red-600 mt-1">
                        {value}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <ArrowUp className="w-3 h-3 text-green-500" />
                        <span className="text-[11px] text-gray-400">{sub}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom banner */}
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-white rounded-2xl shadow-sm p-4 flex-1">
                <p className="text-md font-bold text-gray-900 mb-4">
                  More visibility. More customers. More growth.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold text-gray-600 tracking-wide">
                      SEARCH
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center">
                      <Camera className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 tracking-wide">
                      SOCIAL MEDIA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-gray-600 tracking-wide">
                      WEBSITE
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-18 h-18 rounded-full bg-red-600 flex items-center justify-center ring-8 ring-red-100 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20  lg:mt-28">
          <span className=" text-[10px] font-medium uppercase tracking-[0.22em] text-[#dd0403]">
            From search to sale
          </span>
          <h2 className="mt-4  text-4xl font-[500] leading-none tracking-[-0.04em] sm:text-[32px]">
            What good digital marketing does at each stage
          </h2>
        </div>
        <div className="relative mt-12">
          <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-10">
            {lanes.map((lane, laneIndex) => (
              <div key={lane.number} className="relative">
                <div className="mb-7">
                  <span className=" text-[10px] uppercase tracking-[0.14em] text-[#dd0403]">
                    {lane.number} — {lane.label}
                  </span>
                  <h3 className="mt-1     text-xl font-bold tracking-[-0.035em]">
                    {lane.title}
                  </h3>
                  <p className=" text-sm text-neutral-500">
                    {lane.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {lane.cards.map(([Icon, title, description]) => (
                    <article
                      key={title}
                      className="group flex gap-4 border border-black/10 bg-[#faf9f6]/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#dd0403]/40 hover:shadow-[5px_5px_0_#dd0403] rounded-xl"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#eeece7] text-[#dd0403] transition group-hover:bg-[#dd0403] group-hover:text-white rounded-xl">
                        <Icon size={17} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className=" text-base font-bold leading-tight">
                          {title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-5 text-neutral-500">
                          {description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
            
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default WhyDigitalMarketing;
