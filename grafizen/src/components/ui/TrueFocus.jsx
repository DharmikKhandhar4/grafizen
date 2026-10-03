import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * TrueFocus Component from React Bits (https://reactbits.dev/text-animations/true-focus)
 * Animated interactive focus bracket that highlights words with glowing corners and smooth snapping.
 *
 * @param {string} sentence - Target sentence to render
 * @param {boolean} manualMode - If false, auto-cycles between words
 * @param {number} blurAmount - Blur level applied to unfocused words (default: 2)
 * @param {string} borderColor - Focus bracket border color (default: "#dd0403")
 * @param {string} glowColor - Glow box-shadow color (default: "rgba(221, 4, 3, 0.3)")
 * @param {number} animationDuration - Animation duration in seconds (default: 0.4)
 * @param {number} pauseBetweenAnimations - Pause between auto-cycles in seconds (default: 1.5)
 */
export default function TrueFocus({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 2,
  borderColor = "#dd0403",
  glowColor = "rgba(221, 4, 3, 0.25)",
  animationDuration = 0.4,
  pauseBetweenAnimations = 2,
  className = "",
}) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer select-none transition-all duration-300 ${
              isActive ? "font-bold text-black" : "text-black/60"
            }`}
            style={{
              filter: manualMode
                ? isActive
                  ? "none"
                  : `blur(${blurAmount}px)`
                : isActive
                ? "none"
                : `blur(${blurAmount * 0.4}px)`,
            }}
          >
            {word}
          </span>
        );
      })}

      {/* Floating Focus Brackets Frame */}
      <motion.div
        className="pointer-events-none absolute border"
        animate={{
          x: focusRect.x - 6,
          y: focusRect.y - 4,
          width: focusRect.width + 12,
          height: focusRect.height + 8,
          opacity: currentIndex !== null ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 16px ${glowColor}`,
          borderRadius: "6px",
        }}
      >
        {/* Top-left corner bracket */}
        <span
          className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2"
          style={{ borderColor: borderColor }}
        />
        {/* Top-right corner bracket */}
        <span
          className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2"
          style={{ borderColor: borderColor }}
        />
        {/* Bottom-left corner bracket */}
        <span
          className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2"
          style={{ borderColor: borderColor }}
        />
        {/* Bottom-right corner bracket */}
        <span
          className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2"
          style={{ borderColor: borderColor }}
        />
      </motion.div>
    </div>
  );
}
