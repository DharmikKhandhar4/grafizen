import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * BlurText Component from React Bits (https://reactbits.dev/text-animations/blur-text)
 * Words or characters smoothly blur and slide into focus when scrolled into view.
 *
 * @param {string} text - Text to animate
 * @param {number} delay - Stagger delay between words in ms (default: 80)
 * @param {string} className - Additional CSS classes
 * @param {boolean} animateBy - 'words' or 'letters' (default: 'words')
 */
export default function BlurText({
  text = "",
  delay = 80,
  className = "",
  animateBy = "words",
  ...props
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={`inline-block ${className}`} {...props}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(12px)", opacity: 0, y: 14 }}
          animate={
            inView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(12px)", opacity: 0, y: 14 }
          }
          transition={{
            duration: 0.6,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
