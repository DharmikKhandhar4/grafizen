import React, { useRef, useState } from "react";

/**
 * SpotlightCard Component from React Bits (https://reactbits.dev/components/spotlight-card)
 * Displays a card with a dynamic mouse-following radial spotlight gradient.
 *
 * @param {React.ReactNode} children - Inner content
 * @param {string} className - Additional CSS classes
 * @param {string} spotlightColor - RGBA or HEX color for the radial flashlight (default: subtle crimson)
 * @param {string} borderColor - Border color on hover
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(221, 4, 3, 0.12)",
  borderColor = "rgba(221, 4, 3, 0.35)",
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white transition-all duration-300 hover:shadow-xl ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Subtle Dynamic Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border transition-opacity duration-300"
        style={{
          opacity,
          borderColor: borderColor,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
