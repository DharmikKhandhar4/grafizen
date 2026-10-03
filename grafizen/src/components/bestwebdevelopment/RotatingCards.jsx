import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";

/**
 * RotatingCards Component
 * 3D Infinite Circular Carousel inspired by React Bits Pro.
 * Updates:
 * - Decreased radius (from 410 to 280) and tightened stageHeight (from 440 to 350)
 *   so the green-marked arch is tighter and the empty gap below the cards is eliminated.
 * - Non-center cards: Clean White (bg-white) with dark typography.
 * - Center card at apex: Signature Grafizen Crimson Red (#dd0403) with white typography & glowing shadow.
 * - Numbers removed completely from the cards.
 * - 360-degree seamless infinite virtual loop with zero blank space.
 */
const defaultCards = [
  {
    id: 1,
    tag: "Next.js & React",
    title: "Full-Stack Web Apps",
    description: "Lightning-fast, SEO-optimized web applications with modern SSR & dynamic edge rendering.",
    tech: ["Next.js 15", "React", "TypeScript"],
    image: "/image/bestwebdevelopment/card_devices.jpg",
  },
  {
    id: 2,
    tag: "E-Commerce",
    title: "Headless Storefronts",
    description: "High-converting online shopping platforms with frictionless checkout and custom integrations.",
    tech: ["Shopify", "Stripe", "GraphQL"],
    image: "/image/bestwebdevelopment/card_isometric.jpg",
  },
  {
    id: 3,
    tag: "Cloud & SaaS",
    title: "Enterprise Portals",
    description: "Scalable cloud-native platforms with secure multi-tenant architectures and robust APIs.",
    tech: ["Node.js", "PostgreSQL", "AWS"],
    image: "/image/bestwebdevelopment/web_sculpture_3d.jpg",
  },
  {
    id: 4,
    tag: "3D & Motion",
    title: "Interactive UI Experiences",
    description: "Award-winning WebGL visual storytelling, smooth micro-interactions, and mobile-first design.",
    tech: ["Three.js", "Framer", "Tailwind"],
    image: "/image/bestwebdevelopment/card_portal.jpg",
  },
  {
    id: 5,
    tag: "AI Platforms",
    title: "Intelligent Web Systems",
    description: "Next-gen web applications supercharged with custom AI workflows, chatbots, and neural search.",
    tech: ["OpenAI", "Python", "Vector DB"],
    image: "/image/bestwebdevelopment/hero_engine_full.jpg",
  },
];

const normalizeAngle = (angle) => {
  let a = angle % 360;
  if (a > 180) a -= 360;
  if (a < -180) a += 360;
  return a;
};

// 15 continuous slots (3 repeats of 5 cards = 360 deg) for seamless infinite looping
const TOTAL_SLOTS = 15;
const ANGLE_STEP = 360 / TOTAL_SLOTS; // 24 degrees exactly

const RotatingCards = ({
  cards = defaultCards,
  radius: propRadius = 280, // Decreased radius to tighten the arc & close the gap
  autoPlay = true,
  autoPlaySpeed = 0.22,
  pauseOnHover = true,
  draggable = true,
  className = "",
}) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(2); // Card 3 starts at apex

  // Responsive dimensions configuration with tighter radius and compact stage height
  const [dims, setDims] = useState({
    radius: propRadius || 280,
    cardWidth: 190,
    cardHeight: 250,
    stageHeight: 350,
    topClearance: 120,
  });

  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const dragRef = useRef({
    startX: 0,
    startRotation: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  // Responsive listener for mobile & tablet
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setDims({
          radius: 220,
          cardWidth: 145,
          cardHeight: 200,
          stageHeight: 290,
          topClearance: 100,
        });
      } else if (w < 1024) {
        setDims({
          radius: 250,
          cardWidth: 170,
          cardHeight: 230,
          stageHeight: 320,
          topClearance: 110,
        });
      } else {
        setDims({
          radius: propRadius || 280,
          cardWidth: 190,
          cardHeight: 250,
          stageHeight: 350,
          topClearance: 120,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [propRadius]);

  const { radius, cardWidth, cardHeight, stageHeight, topClearance } = dims;

  // Auto-play infinite rotation loop with momentum decay
  useEffect(() => {
    let lastTimestamp = performance.now();

    const loop = (now) => {
      const delta = (now - lastTimestamp) / 16.66;
      lastTimestamp = now;

      if (!isDragging) {
        if (Math.abs(dragRef.current.velocity) > 0.01) {
          setRotation((prev) => prev + dragRef.current.velocity * delta);
          dragRef.current.velocity *= 0.93;
        } else if (autoPlay && (!pauseOnHover || !isHovered)) {
          setRotation((prev) => prev + autoPlaySpeed * delta);
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [autoPlay, autoPlaySpeed, pauseOnHover, isHovered, isDragging]);

  // Determine active card at apex
  useEffect(() => {
    let minDiff = Infinity;
    let bestSlot = 0;

    for (let slot = 0; slot < TOTAL_SLOTS; slot++) {
      const rawAngle = (slot - 2) * ANGLE_STEP + rotation;
      const norm = Math.abs(normalizeAngle(rawAngle));
      if (norm < minDiff) {
        minDiff = norm;
        bestSlot = slot;
      }
    }

    setActiveCardIndex(bestSlot % cards.length);
  }, [rotation, cards.length]);

  // Drag handlers
  const handlePointerDown = (e) => {
    if (!draggable) return;
    setIsDragging(true);
    dragRef.current.startX = e.clientX;
    dragRef.current.startRotation = rotation;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastTime = performance.now();
    dragRef.current.velocity = 0;

    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const now = performance.now();
    const dt = Math.max(now - dragRef.current.lastTime, 1);
    const dx = e.clientX - dragRef.current.lastX;

    const deltaTotal = (e.clientX - dragRef.current.startX) * 0.22;
    setRotation(dragRef.current.startRotation + deltaTotal);

    dragRef.current.velocity = (dx / dt) * 3.5;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastTime = now;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  // Click on a visible card to rotate it directly to the apex
  const handleSlotClick = (slot) => {
    const rawAngle = (slot - 2) * ANGLE_STEP + rotation;
    const diff = normalizeAngle(rawAngle);
    setRotation((prev) => prev - diff);
  };

  // Click on indicator dot to rotate closest instance of that card to apex
  const handleDotClick = (targetCardIdx) => {
    let minDiff = Infinity;
    let bestDiff = 0;

    for (let slot = 0; slot < TOTAL_SLOTS; slot++) {
      if (slot % cards.length === targetCardIdx) {
        const rawAngle = (slot - 2) * ANGLE_STEP + rotation;
        const diff = normalizeAngle(rawAngle);
        if (Math.abs(diff) < minDiff) {
          minDiff = Math.abs(diff);
          bestDiff = diff;
        }
      }
    }

    setRotation((prev) => prev - bestDiff);
  };

  // Step next/prev
  const handlePrev = useCallback(() => {
    setRotation((prev) => prev + ANGLE_STEP);
  }, []);

  const handleNext = useCallback(() => {
    setRotation((prev) => prev - ANGLE_STEP);
  }, []);

  // 15 virtual slots for infinite 360 loop
  const slots = Array.from({ length: TOTAL_SLOTS }, (_, k) => ({
    slot: k,
    card: cards[k % cards.length],
  }));

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      className={`relative flex flex-col items-center justify-center select-none w-full overflow-visible ${className}`}
    >
      {/* Soft Ambient Glow */}
      <div className="pointer-events-none absolute top-4 h-[280px] w-[420px] rounded-full bg-[#dd0403]/10 blur-[120px]" />

      {/* ── 3D ARC CAROUSEL STAGE ── */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "pan-y",
          height: `${stageHeight}px`,
        }}
        className="relative w-full max-w-[899px] overflow-visible"
      >
        {/* Pivot center of rotation placed below the viewport with decreased radius */}
        <div
          className="absolute left-1/2"
          style={{
            top: `${radius + topClearance}px`,
            transform: "translate(-50%, -50%)",
            width: "0px",
            height: "0px",
          }}
        >
          {slots.map(({ slot, card }) => {
            const rawAngle = (slot - 2) * ANGLE_STEP + rotation;
            const normAngle = normalizeAngle(rawAngle);
            const absAngle = Math.abs(normAngle);

            // Visibility window along the top arc (-68 deg to +68 deg)
            const isVisible = absAngle <= 68;
            if (!isVisible) return null;

            const distRatio = Math.min(absAngle / 68, 1);
            const scale = Math.max(1.06 - distRatio * 0.28, 0.78);
            const opacity = Math.max(1 - Math.pow(distRatio, 2.2) * 0.85, 0);
            const zIndex = Math.round((1 - distRatio) * 50);
            const isActive = absAngle < ANGLE_STEP / 2;

            if (opacity <= 0.02) return null;

            return (
              <div
                key={`slot-${slot}`}
                onClick={() => handleSlotClick(slot)}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformOrigin: "center center",
                  transform: `translate(-50%, -50%) rotate(${normAngle}deg) translateY(-${radius}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: isDragging
                    ? "none"
                    : "transform 0.16s ease-out, opacity 0.2s ease-out, background-color 0.3s ease, border-color 0.3s ease",
                }}
                className={`group relative rounded-[24px] overflow-hidden border p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#dd0403] text-white border-[#dd0403] shadow-2xl shadow-[#dd0403]/40"
                    : "bg-white text-neutral-900 border-neutral-200/90 shadow-lg hover:border-neutral-300 hover:shadow-xl"
                }`}
              >
                {/* ── CARD TOP IMAGE CONTAINER ── */}
                <div className="relative h-[110px] w-full rounded-[16px] overflow-hidden shrink-0 bg-neutral-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm transition-colors ${
                        isActive
                          ? "bg-black/50 text-white border border-white/20"
                          : "bg-white/95 text-neutral-900 border border-black/5"
                      }`}
                    >
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#dd0403] animate-pulse" />
                      )}
                      {card.tag}
                    </span>
                  </div>

                  {/* Floating Action Arrow */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
                        isActive
                          ? "bg-white text-[#dd0403] shadow-md shadow-black/20"
                          : "bg-neutral-900/80 text-white backdrop-blur-md"
                      }`}
                    >
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

                {/* ── CARD BODY DETAILS ── */}
                <div className="flex flex-1 flex-col justify-between pt-2">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1">
                    {card.tech?.map((t, i) => (
                      <span
                        key={i}
                        className={`rounded-md px-1.5 py-0.5 text-[8.5px] font-medium transition-colors ${
                          isActive
                            ? "bg-white/20 text-white border border-white/25"
                            : "bg-neutral-100 text-neutral-600 border border-neutral-200/70"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <div className="mt-1">
                    <h4
                      className={`text-[12.5px] font-bold leading-tight transition-colors line-clamp-1 ${
                        isActive
                          ? "text-white"
                          : "text-neutral-900 group-hover:text-[#dd0403]"
                      }`}
                    >
                      {card.title}
                    </h4>
                    <p
                      className={`mt-0.5 line-clamp-2 text-[10px] font-light leading-relaxed transition-colors ${
                        isActive ? "text-white/90" : "text-neutral-500"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CONTROLS & STATUS BAR (Sits snug right below the decreased arc) ── */}
      <div className="relative z-20 mt-10 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous card"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-[#dd0403] hover:text-[#dd0403] hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Drag Hint Pill */}
        <div className="flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/95 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium text-neutral-500 shadow-sm">
          <Sparkles className="h-3 w-3 text-[#dd0403]" />
          <span>Drag or click cards to explore web solutions</span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next card"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-[#dd0403] hover:text-[#dd0403] hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Indicators Dots */}
      <div className="mt-2.5 flex items-center gap-1.5">
        {cards.map((card, i) => (
          <button
            key={card.id}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to ${card.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeCardIndex
                ? "w-6 bg-[#dd0403]"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCards;
