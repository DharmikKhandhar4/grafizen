import React, { useState, useEffect, useRef } from "react";

/**
 * DecryptedText Component from React Bits (https://reactbits.dev/text-animations/decrypted-text)
 * High-tech cyberpunk character scrambling text reveal effect.
 *
 * @param {string} text - The original target text to reveal
 * @param {number} speed - Interval between scramble iterations in ms (default: 40)
 * @param {number} maxIterations - Iterations before resolving final char (default: 12)
 * @param {boolean} sequential - Whether characters resolve sequentially or together (default: true)
 * @param {boolean} revealOnView - Whether animation triggers when entering viewport (default: true)
 * @param {boolean} animateOnHover - Whether hovering re-triggers the animation (default: true)
 * @param {string} className - Additional CSS classes
 * @param {string} characters - Characters used for scrambling
 */
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><";

export default function DecryptedText({
  text = "",
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealOnView = true,
  animateOnHover = true,
  className = "",
  parentClassName = "",
  characters = DEFAULT_CHARS,
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const originalText = text;
    const textLength = originalText.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return originalText
          .split("")
          .map((char, index) => {
            // Keep whitespace intact
            if (char === " ") return " ";

            if (sequential) {
              const charProgress = Math.floor(iteration / (maxIterations / textLength));
              if (index < charProgress) {
                return originalText[index];
              }
            } else {
              if (iteration >= maxIterations) {
                return originalText[index];
              }
            }

            // Pick random scramble character
            const randomIndex = Math.floor(Math.random() * characters.length);
            return characters[randomIndex];
          })
          .join("");
      });

      iteration += 1;

      if (iteration > (sequential ? maxIterations + textLength * 2 : maxIterations)) {
        clearInterval(interval);
        setDisplayText(originalText);
        setIsAnimating(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (!revealOnView) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text, revealOnView]);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => {
        if (animateOnHover && !isAnimating) startAnimation();
      }}
      className={`inline-block cursor-default select-none font-mono ${parentClassName}`}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
