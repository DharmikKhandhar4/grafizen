import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import mobile from "../../../public/image/androidapp/mobile.png";

/**
 * DigitalMarketingMasterSection Component
 * Next section following the Hero Section.
 * Inspired by the 3-column "We Are The Master of..." layout with central mobile device mockup,
 * botanical floating accents, rotating circular stamp badge, and "Your Reliable Digital Partner" headline.
 *
 * Theme:
 * - Brand Color: #dd0403 (Grafizen Crimson Red)
 * - Soft blush off-white background with subtle ambient glows
 * - Global audience focus (no "India" or "Rajkot")
 */
const DigitalMarketingMasterSection = ({
  imageSrc,
  imageAlt = "Digital Marketing & Performance Growth Showcase",
}) => {
  const sectionRef = useRef(null);

  // Track scroll position of this section relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 10%"],
  });

  // Silky smooth spring interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  // Default is -8deg rotation; when scrolling to top, straightens to 0deg (rotate-z-0)
  const rotateZ = useTransform(smoothProgress, [0, 1], [18, 0]);

  // Default is -28px (-left-7); when scrolling to top, returns to 0px (left-0)
  const xOffset = useTransform(smoothProgress, [0, 1], [-28, 0]);

  // Track page scroll for circular badge: rotates only when scrolling, speed matches scroll, stops when scroll stops
  const { scrollY } = useScroll();
  const badgeRotate = useTransform(scrollY, (y) => y * 0.45);
  const smoothBadgeRotate = useSpring(badgeRotate, {
    stiffness: 140,
    damping: 24,
    mass: 0.15,
  });

  const activeImage = imageSrc || mobile;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-20 text-neutral-900 sm:py-28 lg:py-32 selection:bg-[#dd0403]/15 selection:text-[#dd0403]"
    >
      {/* ── AMBIENT PASTEL GLOWS & MESH GRADIENTS ──────────────── */}
      {/* <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-[#dd0403]/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[550px] w-[550px] rounded-full bg-rose-200/30 blur-[130px]" />
        <div className="absolute bottom-10 left-1/4 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-[110px]" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1.1fr_0.95fr] lg:gap-8 xl:gap-14">

          {/* ════════════════════════════════════════════════════════
              1. LEFT COLUMN: "We Are The Master of..." & Narrative
          ════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Main Headline */}
            <h2 className="text-3xl font-[600] tracking-[-0.03em] text-black sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
              We Are The Master of{" "}
              <span className="block font-[600] text-black sm:text-4xl lg:text-[40px]">
                Digital Marketing &amp;{" "}
                <span className="text-[#dd0403] lg:text-[40px]">Performance Growth</span>
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-8 text-sm leading-tight text-black/55 sm:text-[14px] sm:leading-5">
              We pride ourselves on delivering engaging, data-driven marketing campaigns that truly make a difference. As a full-service digital marketing agency, we provide comprehensive, end-to-end growth solutions. First and foremost, our growth specialists take the time to understand your unique business model, unit economics, and target audience. Afterward, we leverage our deep expertise to engineer high-converting strategies tailored to your exact market goals. Ultimately, our mission is to ensure your long-term market dominance.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 text-sm leading-tight text-black/55 sm:text-[14px] sm:leading-5">
              Our agency specializes in creating highly productive, conversion-focused campaigns for scaling businesses. Additionally, Grafizen offers creative performance marketing services that convey your brand value effectively to first-time visitors. Moreover, our SEO, ads, and web specialists assist you in building a digital presence that is not only optimized but engineered for maximum conversions, ensuring measurable revenue growth for your business.
            </p>

            {/* CTA Link Button */}
            {/* <div className="mt-9">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#dd0403] transition-colors duration-200 hover:text-[#dd0403] sm:text-sm"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2 text-[#dd0403]"
                />
              </a>
            </div> */}
          </motion.div>

          {/* ════════════════════════════════════════════════════════
              2. CENTER COLUMN: Image Showcase (Upload your image here)
          ════════════════════════════════════════════════════════ */}
          <div className="relative flex items-center justify-center py-6 lg:py-0">
            {/* Ambient Radial Glow Behind Graphic */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-[#dd0403]/10 blur-[90px] sm:h-80 sm:w-80" />
            </div>

            {/* Uploaded Image Container with Scroll-Driven Rotation & Translation */}
            <motion.div
              style={{
                rotateZ,
                x: xOffset,
              }}
              className="relative mx-auto flex w-full max-w-[420px]    items-center justify-center rounded-2xl sm:max-w-[460px] lg:max-w-[330px]"
            >
              <img
                src={activeImage}
                alt={imageAlt}
                className="h-auto w-full max-h-[580px] lg:w-fit object-contain border-4 transition-transform duration-300 hover:scale-[1.02] rounded-4xl"
              />
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════════════════
              3. RIGHT COLUMN: Rotating Stamp & "Your Reliable..."
          ════════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between self-stretch lg:py-6">

            {/* Top Right: Outline Rotating Stamp Badge (Matching Image) */}
            <div className="flex justify-end">
              <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
                {/* Rotating Outline Circular Text (Rotates with scroll speed, stops when scrolling stops) */}
                <motion.svg
                  style={{ rotate: smoothBadgeRotate }}
                  className="absolute inset-0 h-full w-full origin-center"
                  viewBox="0 0 160 160"
                >
                  <defs>
                    <path
                      id="masterBadgePath"
                      d="M 80, 80 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
                    />
                  </defs>
                  <text
                    fontSize="10"
                    fontWeight="700"
                    letterSpacing="3"
                    fill="#1e293b"
                    className="uppercase"
                  >
                    <textPath href="#masterBadgePath" startOffset="0%">
                      ★ BEST DIGITAL AGENCY ★  BEST DIGITAL AGENCY ★
                    </textPath>
                  </text>
                </motion.svg>

                {/* Little decorative #dd0403 accent dot on the perimeter */}
                <div className="h-2 w-2 rounded-full bg-[#dd0403] shadow-sm shadow-[#dd0403]/50" />
              </div>
            </div>

            {/* Bottom Right: "Your Reliable Digital Partner" Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-14 lg:mt-auto"
            >
              <h3 className="text-3xl font-[400] tracking-[-0.03em] text-black sm:text-4xl lg:text-[38px] lg:leading-[1.18]">
                Your Reliable{" "}
                <span className="block font-[400] text-black sm:text-4xl lg:text-[38px]">
                  Digital Marketing &amp;{" "}
                  <span className="text-[#dd0403] font-[400] ">Growth Partner</span>
                </span>
              </h3>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingMasterSection;
