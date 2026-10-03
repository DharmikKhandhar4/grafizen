import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
} from "lucide-react";

/* ─── Page Imports ─────────────────────────────────────────── */
import MainDigitalMarketingConsultant from "./page/Digitalmarketingconsltan/MainDigitalMarketingConsultant";
import MainDExpertsRajkot from "./page/DigitalMarketingExpertsRajkot/MainDExpertsRajkot";
import MainSeoPage from "./page/seoservice/MainSeoPage";
import MainInternetMarketingRajkot from "./page/internet/MainInternetMarketingRajkot";
import MainSocialMediaMarketing from "./page/socialmedia/MainSocialMediaMarketing";
import MainSoftwaerDevelopmentCompany from "./page/softwaredevelopmentcompany/MainSoftwareDevelopmentCompany";
import MainEnterpriseSoftware from "./page/enterprisesoftware/MainEnterpriseSoftware";
import MobileAppDevlopment from "./page/mobileapphero/MobileAppDevlopment";
import MainCustomSoftwear from "./page/customsoftwear/MainCustomSoftwear";
import AndroidAppComapany from "./page/androidapp/AdroidAppComapany";
import WebDevelopmentCompany from "./page/webdevelopment/WebDevelopmentCompany";
import BestDigitalMarketing from "./page/bestdigitalmarketing/BestDigitalMarketing";
import BestWebDevelopmentCompany from "./page/bestwebdevelopment/BestWebDevelopmentCompany";
import IOSAppDevelopmentCompany from "./page/iosdevelopment/IOSAppDevelopmentCompany";
import AISecurityPage from "./page/aisecurity/AISecurityPage";

/* ─── Pages Registry ───────────────────────────────────────── */
const PAGES = [
 
  {
    id: "best-web-development",
    name: "Best Web Development Company",
    tag: "Web",
    component: BestWebDevelopmentCompany,
  },
  {
    id: "web-development",
    name: "Web Development Company",
    tag: "Web",
    component: WebDevelopmentCompany,
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    tag: "Mobile",
    component: MobileAppDevlopment,
  },
  {
    id: "android-app",
    name: "Android App Company",
    tag: "Mobile",
    component: AndroidAppComapany,
  },
  {
    id: "enterprise-software",
    name: "Enterprise Software",
    tag: "Software",
    component: MainEnterpriseSoftware,
  },
  {
    id: "software-development",
    name: "Software Development Company",
    tag: "Software",
    component: MainSoftwaerDevelopmentCompany,
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    tag: "Software",
    component: MainCustomSoftwear,
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    tag: "Marketing",
    component: MainSocialMediaMarketing,
  },
  {
    id: "seo-services",
    name: "SEO Services",
    tag: "Marketing",
    component: MainSeoPage,
  },
  {
    id: "best-digital-marketing",
    name: "Best Digital Marketing",
    tag: "Marketing",
    component: BestDigitalMarketing,
  },
  {
    id: "digital-marketing-consultant",
    name: "Digital Marketing Consultant",
    tag: "Marketing",
    component: MainDigitalMarketingConsultant,
  },
  {
    id: "digital-marketing-experts",
    name: "Digital Marketing Experts Rajkot",
    tag: "Marketing",
    component: MainDExpertsRajkot,
  },
  {
    id: "internet-marketing",
    name: "Internet Marketing Rajkot",
    tag: "Marketing",
    component: MainInternetMarketingRajkot,
  },
   {
    id: "ai-security",
    name: "AI-Powered Security Hero",
    tag: "AI / Cyber",
    component: AISecurityPage,
  },
  {
    id: "ios-development",
    name: "iOS App Development Company",
    tag: "Mobile",
    component: IOSAppDevelopmentCompany,
  },
];

function App() {
  // Initialize from URL hash or localStorage, default to 0 (AI Security) or 1 (iOS)
  const getInitialIndex = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = PAGES.findIndex((p) => p.id === hash);
      if (idx !== -1) return idx;
    }
    const saved = localStorage.getItem("grafizen_active_page_idx");
    if (saved !== null) {
      const num = parseInt(saved, 10);
      if (!isNaN(num) && num >= 0 && num < PAGES.length) return num;
    }
    return 0; // Default to AI Security page
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const menuRef = useRef(null);

  // Sync hash & localStorage when page changes
  const goToPage = (idx) => {
    if (idx < 0 || idx >= PAGES.length) return;
    setCurrentIndex(idx);
    window.location.hash = PAGES[idx].id;
    localStorage.setItem("grafizen_active_page_idx", idx.toString());
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to browser Back/Forward hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const idx = PAGES.findIndex((p) => p.id === hash);
        if (idx !== -1 && idx !== currentIndex) {
          setCurrentIndex(idx);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentIndex]);

  // Keyboard navigation: Left/Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      )
        return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToPage((currentIndex + 1) % PAGES.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPage((currentIndex - 1 + PAGES.length) % PAGES.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const currentPage = PAGES[currentIndex];
  const CurrentComponent = currentPage.component;
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage =
    currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : PAGES[0];

  return (
    <div className="relative min-h-screen bg-white">
      {/* ── Active Page Content ── */}
      <CurrentComponent />

      {/* ════════════════════════════════════════════════════════════
          BOTTOM OF PAGE: "NEXT PAGE" NAVIGATION BANNER
         ════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-neutral-50/80 border-t border-neutral-200/80 py-16 px-5 sm:px-8 lg:px-12 transition-colors">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Previous Page Link */}
            {prevPage ? (
              <button
                onClick={() => goToPage(currentIndex - 1)}
                className="group flex items-center gap-3 text-left p-3 -ml-3 rounded-2xl hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:border-[#dd0403] group-hover:text-[#dd0403] transition-colors bg-white">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                    Previous Page
                  </span>
                  <span className="text-sm font-bold text-neutral-800 group-hover:text-[#dd0403] transition-colors">
                    {prevPage.name}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {/* Next Page Button (Prominent Call-to-Action) */}
            <button
              onClick={() => goToPage(currentIndex + 1 < PAGES.length ? currentIndex + 1 : 0)}
              className="group flex items-center gap-4 bg-[#121214] hover:bg-neutral-900 text-white pl-6 pr-3 py-3 rounded-full shadow-[0_12px_28px_-6px_rgba(221,4,3,0.3)] hover:shadow-[0_16px_36px_-6px_rgba(221,4,3,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-left"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">
                  Next Page ({currentIndex + 1} of {PAGES.length})
                </span>
                <span className="text-sm font-bold text-white tracking-tight">
                  {nextPage.name}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#dd0403] flex items-center justify-center text-white shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FLOATING QUICK-SWITCHER TOOLBAR (Fixed at Bottom-Center)
         ════════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        {collapsed ? (
          /* Collapsed Mini-Button */
          <button
            onClick={() => setCollapsed(false)}
            className="flex items-center gap-2 bg-[#121214]/90 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-white/10 hover:bg-[#dd0403] transition-all duration-300"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Pages ({currentIndex + 1}/{PAGES.length})</span>
          </button>
        ) : (
          /* Full Floating Toolbar */
          <div
            ref={menuRef}
            className="relative flex items-center gap-1.5 bg-[#121214]/95 backdrop-blur-xl text-white p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/10"
          >
            {/* Previous Page Arrow */}
            <button
              onClick={() => goToPage(currentIndex - 1)}
              disabled={currentIndex === 0}
              title="Previous Page (← key)"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Title & Menu Dropdown Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors text-left"
            >
              <span className="w-5 h-5 rounded-full bg-[#dd0403] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                {currentIndex + 1}
              </span>
              <span className="text-xs font-semibold max-w-[150px] sm:max-w-[220px] truncate">
                {currentPage.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">
                ▾
              </span>
            </button>

            {/* Next Page Arrow */}
            <button
              onClick={() => goToPage(currentIndex + 1)}
              disabled={currentIndex === PAGES.length - 1}
              title="Next Page (→ key)"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-[#dd0403] hover:bg-[#b80302] disabled:opacity-30 disabled:hover:bg-[#dd0403] transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            {/* Collapse Button */}
            <button
              onClick={() => setCollapsed(true)}
              title="Minimize bar"
              className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-0.5"
            >
              <X className="w-3 h-3" />
            </button>

            {/* ── Dropdown Menu of All 15 Pages ── */}
            {menuOpen && (
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[360px] max-h-[420px] overflow-y-auto rounded-3xl bg-[#18181b]/98 backdrop-blur-2xl border border-white/10 p-2 shadow-2xl">
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    All Pages ({PAGES.length})
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    Use ← → keys
                  </span>
                </div>

                <div className="space-y-0.5">
                  {PAGES.map((page, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={page.id}
                        onClick={() => goToPage(idx)}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-left transition-all ${
                          isActive
                            ? "bg-[#dd0403] text-white font-bold shadow-md"
                            : "text-neutral-300 hover:bg-white/10 hover:text-white text-xs"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                              isActive
                                ? "bg-white text-[#dd0403]"
                                : "bg-white/10 text-neutral-400"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span className="truncate">{page.name}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                              isActive
                                ? "bg-black/20 text-white"
                                : "bg-white/5 text-neutral-400"
                            }`}
                          >
                            {page.tag}
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;