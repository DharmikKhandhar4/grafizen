import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * TiltedCard Component from React Bits (https://reactbits.dev/components/tilted-card)
 * Interactive 3D tilt card powered by Framer Motion spring physics.
 * Supports layered depth (translateZ), mouse glare reflection, and smooth spring reset.
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {number} maxTilt - Maximum tilt angle in degrees (default: 12)
 * @param {boolean} showGlare - Whether to display realistic light reflection (default: true)
 * @param {number} scale - Hover scale factor (default: 1.02)
 */
export default function TiltedCard({
  children,
  className = "",
  maxTilt = 12,
  showGlare = true,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for natural elastic feel
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 18 });

  // Map mouse coordinates to 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare position calculation
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize between -0.5 and 0.5
    const normalizedX = mouseX / rect.width - 0.5;
    const normalizedY = mouseY / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`relative inline-block w-full select-none ${className}`}
      {...props}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative h-full w-full rounded-2xl will-change-transform"
      >
        {children}

        {/* Dynamic Light Glare Reflection */}
        {showGlare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.2 : 0,
              background: `radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255,255,255,0.7), transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
