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
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import insta from "../../../public/image/social/instagram.png";

const chartData = [
  { month: "Jan", value: 220 },
  { month: "Feb", value: 380 },
  { month: "Mar", value: 340 },
  { month: "Apr", value: 520 },
  { month: "May", value: 480 },
  { month: "Jun", value: 610 },
  { month: "Jul", value: 700 },
  { month: "Aug", value: 880 },
  { month: "Sep", value: 820 },
  { month: "Oct", value: 1040 },
  { month: "Nov", value: 1180 },
  { month: "Dec", value: 1500 },
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

const queries = [
  "it company in rajkot",
  "best app development company in rajkot",
  "digital marketing agency near me",
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
      <section className="mx-auto max-w-[1280px] px-4 sm:px-8 pb-16 pt-8 sm:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-6">
          {/* Left Column: Browser Mockup & Search Stats */}
          <div className="relative w-full">
            <div className="relative z-10 w-full overflow-hidden rounded-[15px] border border-black/10 bg-[#faf9f6] shadow-[2px_6px_0_#e7e2d9] lg:shadow-[16px_18px_0_#e7e2d9] lg:w-[calc(100%-110px)]">
              <div className="flex h-11 items-center border-b border-black/10 bg-[#eeece7] px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dd0403]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d6a33c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6f8f40]" />
                </div>
                <div className="mx-auto flex h-7 w-[min(420px,75%)] items-center gap-2 border border-black/10 bg-white px-3 text-[10px] text-neutral-500 rounded-2xl">
                  <BrowserIcon />
                  <span className="truncate">{query}</span>
                  <span className="h-3 w-px shrink-0 animate-pulse bg-[#dd0403]" />
                </div>
              </div>

              <div className="px-3 py-4 sm:px-14 sm:py-14 lg:px-10 lg:py-8">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#dd0403]">
                  Why digital marketing
                </span>
                <h1 className="mt-3 sm:mt-5 max-w-3xl text-[22px] sm:text-4xl md:text-5xl font-[500] leading-[1.05] sm:leading-[0.94] tracking-[-0.045em] lg:text-[38px]">
                  Your customers are already{" "}
                  <span className="text-[#dd0403]">online.</span>
                </h1>
                <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-neutral-600 lg:text-[13px]">
                  Customers increasingly use search engines, social media and
                  websites to discover and evaluate businesses. Without a strong
                  digital presence, they&apos;ll discover your competitors
                  first.
                </p>
                <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-neutral-500 lg:text-[13px]">
                  A well-planned digital marketing strategy puts your business
                  in front of the right people, at the right moment, with the
                  right message.
                </p>
                <div
                  ref={statRef}
                  className="mt-4  lg:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-black/10 lg:pt-5 pt-3  "
                >
                  <span className="text-xl sm:text-3xl font-bold tabular-nums text-[#dd0403] lg:text-4xl">
                    {searches.toLocaleString()}
                  </span>
                  <span className="text-[10px] uppercase leading-4 tracking-[0.12em] text-neutral-500 hidden
                  md:flex">
                    local searches like these
                    <br />
                    happening right now
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Search Interest Card */}
            <div className="sm:mt-4 mt-6 absolute sm:bottom-6 sm:right-4 lg:bottom-10 lg:right-8 z-20 sm:w-52 w-36 border bottom-2 right-1 border-black/10 bg-white md:p-4 p-2  shadow-[6px_6px_0_#dd0403] lg:shadow-[8px_8px_0_#dd0403] rounded-xl">
              <div className="flex items-center justify-between md:text-[10px] text-[9px] uppercase tracking-[0.12em] text-neutral-500">
                <span>Search interest</span>
                <TrendingUp size={15} className="text-[#dd0403]" />
              </div>
              <div className="mt-3 md:text-2xl text-[16px] font-bold flex items-center justify-between">
                <div>
                  <img
                    src="/image/growth.png"
                    alt="Growth"
                    className="sm:h-10 sm:w-10 h-6 w- 6 object-contain"
                  />
                </div>
                <div >
                  +38%{" "}
                  <span className="md:text-sm text-xs font-medium text-neutral-400">
                    YoY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chart & Stats */}
          <div className="flex flex-col gap-4 md:gap-2">
            {/* Top Card: Chart */}
            <div className="bg-white rounded-3xl shadow-sm p-4 relative border border-gray-100">
              <div className="flex items-start justify-between mb-0">
                <div>
                  <p className="text-xs font-bold tracking-wide text-gray-800">
                    ORGANIC TRAFFIC GROWTH
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
                <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1.5">
                  Last 6 Months
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center justify-end gap-2">
                  <img src="/image/growth.png" alt="Growth" className="h-7 w-7 object-contain" />
                  <div>
                    <h2 className="text-md font-extrabold text-red-600 leading-none">
                      +42.8%
                    </h2>
                    <p className="text-gray-700 text-[12px]">
                      Organic Growth
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 h-[150px] sm:h-[180px] lg:h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData}
                    margin={{ top: 8, right: 8, left: 0, bottom: 4 }}
                  >
                    <CartesianGrid
                      vertical={false}
                      horizontal={false}
                      stroke="#d9d9d9"
                      strokeDasharray="0"
                    />
                    {[500, 1000, 1500].map((value) => (
                      <ReferenceLine key={value} y={value} stroke="#d9d9d9" />
                    ))}
                    <XAxis
                      dataKey="month"
                      axisLine={{ stroke: "#d9d9d9" }}
                      tickLine={false}
                      tick={{ fill: "#4b5563", fontSize: 12 }}
                      tickMargin={10}
                    />
                    <YAxis
                      domain={[0, 1500]}
                      ticks={[0, 500, 1000, 1500]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#4b5563", fontSize: 12 }}
                      width={38}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2997ed"
                      strokeWidth={4}
                      dot={false}
                      activeDot={false}
                      isAnimationActive
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
              {stats.map(({ icon: Icon, label, value, sub }, index) => (
                <div
                  key={label}
                  className={`bg-white rounded-2xl shadow-sm p-3 flex flex-col border border-gray-100 ${
                    index === stats.length - 1 ? "hidden sm:flex" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wide text-gray-500 truncate">
                        {label}
                      </p>
                      <p className="text-md font-extrabold text-red-600 mt-0.5">
                        {value}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <ArrowUp className="w-3 h-3 text-green-500 shrink-0" />
                        <span className="text-[11px] text-gray-400 truncate">{sub}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom banner */}
            <div className="mt-2 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-bold leading-tight text-gray-900">
                    More visibility. More growth.
                  </p>
                  <p className="mt-1 text-xs leading-4 text-gray-500">
                    One connected strategy across every important digital
                    touchpoint.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:shrink-0 sm:gap-3">
                  <div className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl bg-blue-50 px-2 py-2.5 text-center">
                    <Search className="h-4 w-4 text-blue-500" />
                    <span className="text-[10px] font-bold tracking-wide text-gray-600">
                      SEARCH
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl bg-pink-50 px-2 py-2.5 text-center">
                    <img
                      src={insta}
                      alt="Instagram"
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-[10px] font-bold tracking-wide text-gray-600">
                      SOCIAL
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl bg-cyan-50 px-2 py-2.5 text-center">
                    <Globe className="h-4 w-4 text-cyan-500" />
                    <span className="text-[10px] font-bold tracking-wide text-gray-600">
                      WEBSITE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhyDigitalMarketing;
