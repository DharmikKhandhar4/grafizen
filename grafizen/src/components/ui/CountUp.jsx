import React, { useEffect, useRef, useState } from "react";

/**
 * CountUp Component from React Bits (https://reactbits.dev/text-animations/count-up)
 * Smoothly animates numbers from a start to target value when entering viewport.
 *
 * @param {number} to - Final number to count up to
 * @param {number} from - Starting number (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 2)
 * @param {string} prefix - Optional prefix (e.g. "$", "+")
 * @param {string} suffix - Optional suffix (e.g. "%", "+", "M+")
 * @param {number} decimals - Number of decimal places (default: 0)
 * @param {string} className - Additional CSS classes
 */
export default function CountUp({
  to = 100,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  ...props
}) {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / durationMs, 1);

            // Ease-out expo curve for ultra-smooth deceleration
            const easeOutProgress =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentVal = from + (to - from) * easeOutProgress;
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(to);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [from, to, duration]);

  const formattedNumber = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`} {...props}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
