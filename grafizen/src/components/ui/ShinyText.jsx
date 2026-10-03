import React from "react";

/**
 * ShinyText Component from React Bits (https://reactbits.dev/text-animations/shiny-text)
 * Creates a subtle moving metallic or glowing light sweep across text.
 *
 * @param {string} text - Text to display
 * @param {boolean} disabled - Whether shine animation is disabled
 * @param {number} speed - Duration of the shine loop in seconds (default: 3)
 * @param {string} className - Additional CSS classes
 */
export default function ShinyText({
  text = "",
  disabled = false,
  speed = 3,
  className = "",
  children,
  ...props
}) {
  const content = text || children;

  return (
    <span
      className={`relative inline-block overflow-hidden bg-[linear-gradient(110deg,#111827,45%,#dd0403,55%,#111827)] bg-[length:250%_100%] bg-clip-text text-transparent ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
      {...props}
    >
      {content}
    </span>
  );
}
