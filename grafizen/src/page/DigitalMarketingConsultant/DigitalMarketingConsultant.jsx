import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../../public/image/CompleteServices/man.webp";
import {
  ArrowUpRight,
  Search,
  Target,
  Send,
  TrendingUp,
  X,
  CheckCircle2,
  Users,
  Bot,
} from "lucide-react";

export default function DigitalMarketingConsultant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGridHovered, setIsGridHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationGoal: "360° Digital Growth Strategy",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        consultationGoal: "360° Digital Growth Strategy",
        message: "",
      });
    }, 2200);
  };

  const features = [
    { icon: Search, title: "Audit", desc: "We find opportunities" },
    { icon: Target, title: "Strategy", desc: "We plan the growth" },
    { icon: Send, title: "Execute", desc: "We implement with precision" },
    {
      icon: TrendingUp,
      title: "Grow",
      desc: "We optimize for maximum results",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white text-slate-900 font-['Poppins',sans-serif] overflow-hidden selection:bg-[#dd0403] selection:text-white py-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#dd0403]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left xl:pr-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full  mb-8">
            <span className="flex h-0.5 w-12  bg-[#dd0403] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-[#dd0403] uppercase">
              Digital Marketing Consultant in Rajkot
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[48px] font-[500] leading-[1.1] tracking-tight text-slate-900 mb-6">
            Digital Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dd0403] to-red-500">
              Consultant
            </span>
            {/* <br /> */}
            <span className="text-4xl sm:text-5xl lg:text-[48px] text-slate-600 font-[500] ml-3">
              in Rajkot
            </span>
          </h1>

          <p className="text-md text-slate-600 mb-10 max-w-xl leading-relaxed">
            We turn business goals into clear digital strategies that improve
            visibility, attract the right audience and create{" "}
            <span className="font-semibold text-slate-900 text-[#dd0403]">
              measurable growth.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 bg-[#dd0403] hover:bg-[#b80302] text-white font-medium px-8 py-2.5 rounded-xl transition-all duration-300 shadow-[0_3px_6px_rgb(221,4,3,0.3)] hover:shadow-[0_8px_30px_rgb(221,4,3,0.4)] hover:-translate-y-1"
            >
              Book a Consultation
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#approach-workflow"
              className="group flex items-center gap-2 bg-white text-slate-700 font-medium px-8 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              See Our Approach
              <ArrowUpRight className="w-4 h-4 text-[#dd0403] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
              <div className="absolute left-0 bottom-0 flex items-center gap-3 bg-white/90  px-5 py-3.5 rounded-2xl ">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/67.jpg",
                  "https://randomuser.me/api/portraits/women/17.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-[2.5px] border-white object-cover"
                  />
                ))}
              </div>

              {/* Text & Rating */}
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-slate-800 leading-tight">
                  Trusted by 100+ Businesses in Rajkot
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3.5 h-3.5 ${star <= 4 ? "text-[#dd0403]" : "text-[#dd0403]/60"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[12px] font-medium text-slate-500">
                    4.9/5 Client Rating
                  </span>
                </div>
              </div>
            </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex items-center justify-center min-h-[520px]"
        >
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,_rgba(221,4,3,0.08),_transparent_45%)]" />
          <div className="absolute inset-y-10 left-10 right-0 bg-[radial-gradient(circle,_rgba(80,80,80,0.06)_1px,transparent_1px)] bg-[size:18px_18px] opacity-70" />

          <div className="relative z-10 h-[500px] w-full max-w-[590px]">
            <div className="absolute -left-6 top-8 w-[210px] h-[120px] rounded-[20px] bg-white/90 border border-[#f0ebe8] shadow-[0_20px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <div className="flex items-center justify-between px-5 pt-5">
                <div className="text-[13px] font-medium text-slate-700">
                  Blog Traffic
                </div>
                <div className="flex items-center gap-1 text-[#1bb37a] text-[12px] font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +16.5%
                </div>
              </div>
              <div className="px-5 mt-3 text-[25px] font-semibold text-slate-900 leading-none">
                125,536
              </div>
              <div className="px-5 mt-2 text-[13px] text-slate-500">
                Since last week
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[300px] rounded-[32px] bg-[linear-gradient(135deg,#fbe8df_0%,#f3ece8_45%,#f7f3f0_100%)] border border-[#f1e4de] shadow-[0_25px_40px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-x-0 top-0 h-20 rounded-t-[32px] bg-gradient-to-b from-[#f3ece7] to-transparent" />
              <div className="absolute left-6 top-6 h-14 w-14 rounded-[18px] bg-white shadow-[0_10px_20px_rgba(15,23,42,0.08)] flex items-center justify-center border border-[#f1e5de]">
                <div className="w-7 h-7 rounded-lg bg-[#ff6f61] relative rotate-45">
                  <div className="absolute inset-[4px] rounded-md bg-[#f7f3f0]" />
                </div>
              </div>

              {/* <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[190px] h-[140px] rounded-[18px] bg-[linear-gradient(180deg,#d1a989_0%,#7e5b4a_100%)] shadow-[0_18px_25px_rgba(94,70,54,0.28)]">
                <div className="absolute left-1/2 top-4 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-[#f2c5a0] border-[5px] border-[#f8d5b5]" />
                <div className="absolute left-1/2 top-[74px] -translate-x-1/2 h-[28px] w-[86px] rounded-[16px] bg-[#3a2d2b]" />
                <div className="absolute left-[38px] top-[86px] h-[38px] w-[38px] rounded-full bg-[#f2c5a0]" />
                <div className="absolute right-[38px] top-[86px] h-[38px] w-[38px] rounded-full bg-[#f2c5a0]" />
                <div className="absolute left-[56px] top-[104px] h-[10px] w-[62px] rounded-full bg-[#f3d9c5]" />
              </div> */}
              {/* 
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[200px] h-[90px] rounded-[18px] bg-[linear-gradient(180deg,#eec2aa_0%,#d09f88_100%)] shadow-[0_15px_30px_rgba(94,70,54,0.22)]">
                <div className="absolute inset-x-6 top-5 h-4 rounded-full bg-[#5e4d40] opacity-80" />
                <div className="absolute inset-x-5 bottom-4 h-8 rounded-[12px] bg-[#e8b79b]" />
              </div> */}
              <img src={image1} alt="" />

              <div className="absolute -right-40 -bottom-10 -translate-x-1/2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_10px_20px_rgba(15,23,42,0.05)] text-[14px] text-slate-700 font-medium max-w-[180px]">
                <span className="mr-2 text-[#dd0403]">✦</span>
                Creating Marketing Models...
              </div>
            </div>

            <div className="absolute right-10 top-15 flex flex-col gap-4">
              <div
                className="relative"
                onMouseEnter={() => setIsGridHovered(true)}
                onMouseLeave={() => setIsGridHovered(false)}
              >
                <div className="w-[55px] h-[55px] rounded-[10px] bg-white border border-[#f0ebea] shadow-[0_20px_30px_rgba(15,23,42,0.05)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_20px_30px_rgba(221,4,3,0.1)] hover:border-[#dd0403]/20">
                  <div className="grid grid-cols-2 gap-1.5">
                    <span className="w-3 h-3 rounded-[3px] border border-slate-300" />
                    <span className="w-3 h-3 rounded-[3px] border border-slate-300" />
                    <span className="w-3 h-3 rounded-[3px] border border-slate-300" />
                    <span className="w-3 h-3 rounded-[3px] border border-slate-300" />
                  </div>
                </div>

                <AnimatePresence>
                  {isGridHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] w-[220px] bg-white rounded-[14px] border border-[#f0ebea] shadow-[0_20px_40px_rgba(15,23,42,0.1)] p-4 z-50"
                    >
                      <div className="absolute left-1/2 -top-1.5 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#f0ebea] rotate-45" />

                      <p className="text-[13px] font-semibold text-slate-800 mb-2.5">
                        Our Services
                      </p>
                      <ul className="space-y-2">
                        {[
                          "SEO Optimization",
                          "Google Ads",
                          "Social Media Marketing",
                          "Website Development",
                          "Content Marketing",
                        ].map((service, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-[13px] text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#dd0403] flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* <div className="w-[55px] h-[55px] rounded-[18px] bg-white border border-[#f0ebea] shadow-[0_20px_30px_rgba(15,23,42,0.05)] flex items-center justify-center text-[#dd0403]">
                <div className="w-7 h-7 border-[3px] border-current rounded-md relative">
                  <div className="absolute inset-0 rounded-md border-[3px] border-current border-l-0 border-t-0 rotate-45" />
                </div>
              </div> */}
              {/* <div className="w-[74px] h-[74px] rounded-[18px] bg-white border border-[#f0ebea] shadow-[0_20px_30px_rgba(15,23,42,0.05)] flex items-center justify-center text-slate-600">
                <div className="flex flex-col gap-1.5">
                  <span className="w-6 h-1 rounded-full bg-current" />
                  <span className="w-8 h-1 rounded-full bg-current" />
                  <span className="w-5 h-1 rounded-full bg-current" />
                </div>
              </div> */}
            </div>

            <div className="absolute left-[-8%] bottom-0 flex items-center gap-4">
              <div className="w-[180px] h-[170px] rounded-[20px] bg-white border border-[#f0ebea] shadow-[0_20px_35px_rgba(15,23,42,0.06)] p-4">
                <div className="flex items-center justify-between text-[13px] text-slate-700 font-medium">
                  <span>SEO Analytics</span>
                  <span className="text-[#1bb37a] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +20%
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <div className="relative h-20 w-20 rounded-full bg-[conic-gradient(#ff7a59_0_80%,#f9e5de_80%_100%)]">
                    <div className="absolute inset-[10px] rounded-full bg-white" />
                    <div className="absolute inset-0 flex items-center justify-center text-[22px] font-semibold text-slate-800">
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </motion.div>
      </div>

      {/* Modal Container */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 max-w-lg w-full shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 mx-auto bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    Consultation Booked!
                  </h3>
                  <p className="text-slate-600">
                    Our senior digital marketing consultant will reach out
                    within 2 hours to confirm your discovery call.
                  </p>
                </div>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 mb-6 bg-red-50 px-3 py-1.5 rounded-full">
                    <span className="w-6 h-[2px] bg-[#dd0403] rounded-full inline-block" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#dd0403]">
                      Direct 1-on-1 Consultation
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    Book Your Strategy Call
                  </h3>
                  <p className="text-slate-500 text-sm mb-8">
                    Get an objective audit & actionable growth blueprint
                    tailored for your Rajkot business.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Mehta"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]/20 focus:border-[#dd0403] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]/20 focus:border-[#dd0403] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="anand@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]/20 focus:border-[#dd0403] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Primary Consulting Objective
                      </label>
                      <select
                        value={formData.consultationGoal}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consultationGoal: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]/20 focus:border-[#dd0403] transition-all text-slate-700"
                      >
                        <option value="360° Digital Growth Strategy">
                          360° Digital Growth Strategy
                        </option>
                        <option value="SEO & Organic Reach Domination">
                          SEO & Organic Reach Domination
                        </option>
                        <option value="Google & Meta Performance Ads ROI">
                          Google & Meta Performance Ads ROI
                        </option>
                        <option value="Brand Positioning & Market Expansion">
                          Brand Positioning & Market Expansion
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Current Business / Website (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. www.mybrand.in"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#dd0403]/20 focus:border-[#dd0403] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#dd0403] hover:bg-[#b80302] text-white font-medium py-4 rounded-2xl shadow-[0_8px_30px_rgb(221,4,3,0.2)] transition-all duration-300 hover:-translate-y-1"
                    >
                      Confirm Free Consultation Call
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
