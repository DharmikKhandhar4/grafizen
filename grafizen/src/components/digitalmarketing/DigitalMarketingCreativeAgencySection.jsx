import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Heart, Share2, ShoppingBag, Search, Volume2, ShoppingCart, Clock } from "lucide-react";

/**
 * Showcase Slides Data
 * Rotating collection items for the inner left frame mockup UI.
 * Both images and corresponding titles, descriptions, tags, and product configs rotate automatically.
 */
const showcaseSlides = [
  {
    tag: "Summer Collection",
    title: "Striped Shirt Dress",
    description: "High-converting e-commerce web architecture designed for seamless user experience.",
    likes: "143k",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
    colorName: "White",
    sku: "REF 7682/256",
    modelSize: "S",
    sizes: ["S", "M", "L", "XS", "XXL"],
    colors: ["#ffffff", "#000000", "#f59e0b", "#2563eb", "#dd0403"],
  },
  {
    tag: "Autumn Essentials",
    title: "Tailored Wool Overcoat",
    description: "Optimized product presentation that drives higher conversion rates and customer engagement.",
    likes: "198k",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOf12uGU3hBzTBWc1xY6MhRssGZqUm4SxU4BE8kfwXDSbW3_XeXx1H-c&s=10",
    colorName: "Charcoal",
    sku: "REF 9421/802",
    modelSize: "M",
    sizes: ["M", "L", "XL"],
    colors: ["#1e293b", "#78716c", "#dd0403"],
  },
  {
    tag: "Minimalist Line",
    title: "Silk Wrap Blouse",
    description: "Responsive UI design with instant preview configurator and swift checkout experience.",
    likes: "225k",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqRBpELWssvmSzPhr19FKKzB_Hp8R-LlhVRnr-fRAUDrqs_T1slLgA7_6&s=10",
    colorName: "Blush Pink",
    sku: "REF 3104/119",
    modelSize: "S",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#fbcfe8", "#ffffff", "#000000", "#dd0403"],
  },
  {
    tag: "Urban Couture",
    title: "Structured Denim Jacket",
    description: "Data-driven brand positioning tailored for performance e-commerce and scaling.",
    likes: "312k",
    image: "https://assets.ajio.com/medias/sys_master/root/20241127/S7sV/67471a2d0f47f80c87b06cb1/-473Wx593H-700195250-black-MODEL.jpg",
    colorName: "Indigo Blue",
    sku: "REF 5519/403",
    modelSize: "L",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1d4ed8", "#475569", "#000000", "#dd0403"],
  },
];

/**
 * DigitalMarketingCreativeAgencySection Component
 * Created based on the reference section ("We are creative web design company in Singapore").
 *
 * Left Column:
 * - Rounded desktop browser frame.
 * - Inside the frame div: Contains an auto-rotating fashion & web design UI slider where
 *   both the center image and the text (title, tag, description, likes) change automatically.
 * - Overlapping circular rotating text stamp badge ("BEST DIGITAL MARKETING AGENCY • GRAFIZEN •").
 * - Floating 3D origami paper airplane accent at bottom left.
 *
 * Right Column:
 * - Sub-label bar with crimson divider.
 * - Main headline: "We are creative web design & digital agency for high-growth brands".
 * - High-converting narrative & Corporate Web Design feature block.
 */
const DigitalMarketingCreativeAgencySection = ({
  imageSrc = null,
  imageAlt = "Grafizen High-Converting Website Design Showcase",
  badgeText = "BEST DIGITAL MARKETING AGENCY • GRAFIZEN • ",
}) => {
  const sectionRef = useRef(null);

  // Auto-changing slide state for inner mockup UI
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const current = showcaseSlides[activeSlide];

  // Track page scroll for smooth badge rotation and subtle frame parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.5,
  });

  // Badge scroll-driven continuous rotation
  const badgeRotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Subtle Y translation for left device frame on scroll
  const frameY = useTransform(smoothProgress, [0, 1], [25, -25]);

  // Scroll-driven animation for paper airplane (X: 0 -> 500px, Y: 0 -> -40px, Rotate: -4deg -> 6deg)
  const airplaneX = useTransform(smoothProgress, [0, 1], [0, 800]);
  const airplaneY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const airplaneRotate = useTransform(smoothProgress, [0, 1], [-4, 6]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]"
    >
      {/* Ambient Pastel Lighting Glows (Overflow Hidden contained here so CSS sticky works on section) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-28 top-10 h-[450px] w-[450px] rounded-full bg-[#dd0403]/5 blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-orange-100/35 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1.05fr] lg:items-start lg:gap-12 xl:gap-20">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: Sticky Browser Frame with Web Design Mockup
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center justify-center py-4 lg:sticky lg:top-24 lg:self-start lg:py-0"
          >
            {/* Main Outer Browser / Tablet Device Frame */}
            <motion.div
              style={{ y: frameY }}
              className="relative w-full max-w-[640px] rounded-[24px] sm:rounded-[32px] border-[3px] border-neutral-900 bg-white p-2.5 sm:p-3.5 shadow-2xl shadow-neutral-900/15"
            >
              {/* Browser Header Notch / Camera Pill (Matching Reference) */}
              <div className="absolute left-6 top-4 z-30 flex items-center gap-2 sm:left-8 sm:top-7">
                <div className="h-2 w-2 rounded-full bg-neutral-900" />
                <div className="h-2 w-2 rounded-full bg-slate-300" />
              </div>

              {/* ── INSIDE FRAME CANVAS DIV: WEB DESIGN UI MOCKUP ── */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#f7f2f5] p-3 sm:p-5 select-none font-sans border border-slate-200/60">
                {imageSrc ? (
                  // Custom uploaded image if provided via prop
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02] rounded-[14px]"
                  />
                ) : (
                  // Auto-Rotating Web Design UI Mockup matching reference screenshot
                  <div className="flex h-full w-full flex-col justify-between rounded-[14px] bg-[#f8f3f6] p-2.5 sm:p-4 text-slate-800">
                    
                    {/* Inner Mockup Header Nav with Slide Indicator Dots */}
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-2 text-[10px] sm:text-xs font-medium text-slate-600">
                      <div className="flex items-center gap-3">
                        <span className="rounded bg-black px-2 py-0.5 text-[9px] font-black tracking-widest text-white">
                          Silhouettes
                        </span>
                        <div className="hidden items-center gap-2 sm:flex text-slate-500">
                          <span className="hover:text-black cursor-pointer">Man</span>
                          <span className="hover:text-black cursor-pointer">Women</span>
                          <span className="hover:text-black cursor-pointer">Children</span>
                          <span className="hover:text-black cursor-pointer">Explore</span>
                        </div>
                      </div>

                      {/* Interactive Slide Indicator Dots */}
                      <div className="flex items-center gap-1.5">
                        {showcaseSlides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeSlide ? "w-4 bg-[#dd0403]" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Volume2 className="h-3 w-3" />
                        <ShoppingBag className="h-3 w-3" />
                        <Search className="h-3 w-3" />
                      </div>
                    </div>

                    {/* Inner Mockup Body Grid (Auto Rotating Image & Text) */}
                    <div className="grid flex-1 items-center gap-2 py-2 grid-cols-12">
                      
                      {/* Left Text Block (Auto Changing Text) */}
                      <div className="col-span-4 flex flex-col justify-center gap-1 sm:gap-1.5 min-h-[110px] sm:min-h-[135px]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col gap-1 sm:gap-1.5"
                          >
                            <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                              {current.tag}
                            </span>
                            <h4 className="text-xs sm:text-base font-bold text-slate-900 leading-tight">
                              {current.title}
                            </h4>
                            <p className="hidden sm:block text-[9px] leading-tight text-slate-500 line-clamp-2">
                              {current.description}
                            </p>
                            <div className="flex items-center gap-1.5 pt-0.5 text-[9px] text-slate-500">
                              <Share2 className="h-2.5 w-2.5" />
                              <Heart className="h-2.5 w-2.5 text-[#dd0403] fill-[#dd0403]" />
                              <span>{current.likes}</span>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Center Image Showcase (Auto Changing Image) */}
                      <div className="col-span-4 flex justify-center h-full max-h-[140px] sm:max-h-[190px] overflow-hidden relative">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeSlide}
                            src={current.image}
                            alt={current.title}
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="h-full w-auto object-cover rounded-lg shadow-sm"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Right Configurator Card (Auto Changing Configs) */}
                      <div className="col-span-4 flex flex-col justify-center gap-1 rounded-lg bg-white/80 p-2 text-[8px] sm:text-[10px] shadow-sm backdrop-blur-sm min-h-[110px] sm:min-h-[135px]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeSlide}
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -6 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex flex-col gap-1"
                          >
                            <div className="flex items-center justify-between text-slate-600 font-medium">
                              <span>Colour: {current.colorName}</span>
                              <div className="flex items-center gap-1">
                                {current.colors.map((c, i) => (
                                  <span
                                    key={i}
                                    style={{ backgroundColor: c }}
                                    className="h-2 w-2 rounded-full ring-1 ring-slate-300/60"
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="text-[7px] sm:text-[9px] text-slate-400 mt-0.5">{current.sku}</div>
                            <div className="text-[7px] sm:text-[9px] text-slate-500">The model size: {current.modelSize}</div>
                            <div className="text-[7px] sm:text-[9px] text-slate-500">Select your size:</div>
                            <div className="flex items-center text-[9px] gap-1 font-semibold text-slate-700 pt-0.5 flex-wrap">
                              {current.sizes.map((sz) => (
                                <span key={sz} className="rounded bg-slate-100 px-1 py-0.5 border border-slate-200">
                                  {sz}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                    </div>

                    {/* Inner Mockup Bottom Row Cards */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/50">
                      <div className="rounded bg-white/70 p-1.5 text-[8px] sm:text-[9px]">
                        <div className="font-semibold text-slate-800">Praesent ut maximus</div>
                        <div className="text-[7px] text-slate-400 line-clamp-1">Custom conversion funnels</div>
                      </div>
                      <div className="rounded bg-white/70 p-1.5 text-[8px] sm:text-[9px]">
                        <div className="font-semibold text-slate-800">Bandeau bodysuit</div>
                        <div className="text-[7px] text-slate-400 line-clamp-1">Mobile responsive UI</div>
                      </div>
                      <div className="flex items-center justify-center rounded bg-black font-bold text-white text-[9px] sm:text-xs">
                        Shop
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* ── CIRCULAR TEXT STAMP BADGE (Bottom-Right Overlap) ── */}
              {/* <motion.div
                style={{ rotate: badgeRotate }}
                className="absolute -bottom-10 -right-6 z-30 h-32 w-32 sm:-bottom-12 sm:-right-8 sm:h-40 sm:w-40 pointer-events-none select-none"
              >
                <svg viewBox="0 0 160 160" className="h-full w-full">
                  <path
                    id="circlePathAgencyGrafizen"
                    d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-black/80">
                    <textPath href="#circlePathAgencyGrafizen" startOffset="0%">
                      {badgeText}
                    </textPath>
                  </text>
                </svg>
              </motion.div> */}
            </motion.div>

            {/* ── SCROLL-DRIVEN PAPER AIRPLANE FLYING ANIMATION (X: 0->500px, Y: 0->-40px, Rotate: -4->6deg) ── */}
            {/* <motion.div
              style={{ x: airplaneX, y: airplaneY, rotate: airplaneRotate }}
              className="pointer-events-none absolute -bottom-12 -left-30 z-20 sm:-bottom-36"
            >
              <img
                src="./image/androidapp/paln.png"
                alt="Paper airplane accent"
                className="h-[100px] w-auto object-contain"
              />
            </motion.div> */}
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. RIGHT COLUMN: Info Label, Typography & Feature Card
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Top Sub-label Divider (Matching Website Header Pattern) */}
            <div className="mb-3 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
              <span className="h-px w-7 bg-[#dd0403]"></span>
              <span> WEB DEVELOPMENT SERVICES</span>
            </div>

            {/* Main Title (Grafizen Website Typography) */}
            <h2 className="mt-3 text-3xl font-[600] tracking-[-0.03em] text-black sm:text-4xl lg:text-[44px] lg:leading-[1.14]">
            {" "}
            We create {" "}  <span className="font-[600] text-[#dd0403]">
                modern  web 
              </span>{" "}experiences {" "}
             
           
            </h2>

            {/* Highlighted Lead Paragraph */}
            <p className="mt-6 text-base font-[300] leading-relaxed text-black/55 sm:text-[14px] sm:leading-5">
             We design and develop high-performance websites that help businesses build a strong online presence. From custom websites to advanced eCommerce platforms, we deliver digital solutions tailored to your business goals.
            </p>

            {/* Narrative Body Copy (Matching Site Body Style: text-black/55 font-[300]) */}
            <p className="mt-4 text-sm leading-relaxed text-black/55 sm:text-[14px] sm:leading-5 font-[300]">
              At Grafizen, we combine creative design, modern technologies and reliable development to build responsive, secure and scalable websites. Our focus is on creating seamless user experiences that support your business growth.
            </p>

            {/* 1. Corporate Web Design Content Block (Clean Inline) */}
            <div className="mt-8 flex items-start gap-4 sm:gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <Globe className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
               Corporate Website Development
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
                We build professional, responsive corporate websites that showcase your brand and communicate your business goals. Our solutions focus on intuitive navigation, modern design and performance across all devices.
                </p>
              
              </div>
            </div>

            {/* 2. e-Commerce Website Development Content Block */}
            <div className="mt-8 flex items-start gap-4 sm:gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
                E-commerce Website Development
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
             We create feature-rich eCommerce websites with seamless shopping experiences, secure payment integration and efficient product management. Our solutions help businesses simplify online shopping and manage their stores effectively.
                </p>
              
              </div>
            </div>

            {/* 3. Website Maintenance Content Block */}
            <div className="mt-8 flex items-start gap-4 sm:gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#dd0403]/10 text-[#dd0403]">
                <Clock className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-[400] text-black sm:text-lg">
                 Website Maintenance & Support
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55 sm:text-[13px] sm:leading-5 font-[300]">
                 We keep your website secure, updated and running smoothly with ongoing maintenance and technical support. From performance improvements to bug fixes, we help your website adapt to your evolving business needs.
                </p>
              
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingCreativeAgencySection;
