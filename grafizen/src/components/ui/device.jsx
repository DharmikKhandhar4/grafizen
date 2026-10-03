import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Device Component from React Bits Pro
 * https://pro.reactbits.dev/docs/components/device
 *
 * Performant CSS device mockup with customizable screen content,
 * realistic hardware details (Dynamic Island, sensors, side buttons, gloss reflections),
 * interactive hover parallax, 3D perspective rotation, and auto-animation.
 *
 * @param {string} [image] - URL of the image displayed on the device screen
 * @param {number} [scale=1] - Scale factor for the device size (recommended: 0.5 to 1.5)
 * @param {boolean} [isScrollable=false] - Whether the screen content can scroll vertically
 * @param {boolean} [enableParallax=true] - Enable subtle parallax movement effect on hover
 * @param {number} [parallaxStrength=15] - Parallax movement strength in pixels
 * @param {boolean} [enableRotate=true] - Enable subtle rotation effect on hover (includes Z-axis)
 * @param {number} [rotateStrength=3] - Rotation strength in degrees
 * @param {boolean} [autoAnimate=false] - Auto-animate with smooth simulated cursor movement in figure-8
 * @param {string} [className=""] - Additional CSS classes for the wrapper element
 * @param {React.ReactNode} [children] - Custom content to display inside device screen (overrides image)
 */
export default function Device({
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  scale = 1,
  isScrollable = false,
  enableParallax = true,
  parallaxStrength = 15,
  enableRotate = true,
  rotateStrength = 3,
  autoAnimate = false,
  className = "",
  children,
  style = {},
  ...props
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  // Auto-animate figure-8 Lissajous movement
  useEffect(() => {
    if (!autoAnimate || isHovered) return;

    let frameId;
    const startTime = performance.now();

    const loop = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.0018;
      const nx = Math.sin(elapsed);
      const ny = Math.sin(elapsed * 2) * 0.5;

      if (enableParallax) {
        setParallax({
          x: nx * parallaxStrength,
          y: ny * parallaxStrength,
        });
      }

      if (enableRotate) {
        setRotation({
          x: -ny * rotateStrength,
          y: nx * rotateStrength,
          z: -nx * (rotateStrength * 0.3),
        });
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [
    autoAnimate,
    isHovered,
    enableParallax,
    parallaxStrength,
    enableRotate,
    rotateStrength,
  ]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    if (enableParallax) {
      setParallax({
        x: nx * parallaxStrength,
        y: ny * parallaxStrength,
      });
    }

    if (enableRotate) {
      setRotation({
        x: -ny * rotateStrength,
        y: nx * rotateStrength,
        z: -nx * (rotateStrength * 0.3),
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!autoAnimate) {
      setParallax({ x: 0, y: 0 });
      setRotation({ x: 0, y: 0, z: 0 });
    }
  };

  // Base dimensions of the React Bits CSS device mockup
  const baseWidthRem = 35.6;
  const baseHeightRem = 72.2;
  const scaledWidth = baseWidthRem * scale;
  const scaledHeight = baseHeightRem * scale;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center select-none",
        className
      )}
      style={{
        width: `${scaledWidth}rem`,
        height: `${scaledHeight}rem`,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Scaled wrapper maintaining crisp proportions and bounded footprint */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          width: `${baseWidthRem}rem`,
          height: `${baseHeightRem}rem`,
        }}
      >
        {/* Interactive 3D Tilt & Parallax transformation plane */}
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{
            transformStyle: "preserve-3d",
            display: "inline-block",
            transform: `perspective(1000px) translate3d(${parallax.x}px, ${parallax.y}px, 0px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          }}
        >
          {/* Main phone body */}
          <div
            className="relative w-[35.6rem] h-[72.2rem] rounded-[6rem] flex justify-center select-none bg-black transition-shadow duration-300"
            style={{
              boxShadow: "0 0 2rem 1rem rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* Screen Viewport */}
            <div className="absolute inset-[1.9rem] overflow-hidden rounded-[5rem] bg-neutral-950 flex items-center justify-center">
              {children ? (
                <div
                  className={cn(
                    "w-full h-full",
                    isScrollable ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
                  )}
                >
                  {children}
                </div>
              ) : (
                <img
                  src={image}
                  alt="Device screen"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              )}
            </div>

            {/* Dynamic Island / Hardware notch with sensors & speaker */}
            <div className="absolute top-[2.8rem] left-1/2 -translate-x-1/2 w-[12.6rem] h-[3.7rem] bg-black rounded-[3rem] z-20 flex items-center justify-between px-6 pointer-events-none">
              {/* Left dual sensors */}
              <div className="flex gap-1 shrink-0">
                <div
                  className="w-[0.4rem] h-[0.4rem] rounded-full"
                  style={{
                    backgroundColor: "#1a1a2e",
                    border: "0.1rem solid #0a0a15",
                  }}
                />
                <div
                  className="w-[0.4rem] h-[0.4rem] rounded-full"
                  style={{
                    backgroundColor: "#1a1a2e",
                    border: "0.1rem solid #0a0a15",
                  }}
                />
              </div>

              {/* Speaker grill */}
              <div className="flex-1 flex items-center justify-center gap-[0.15rem] mx-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[0.15rem] h-[1.2rem] bg-[#0a0a15] rounded-full opacity-60"
                  />
                ))}
              </div>

              {/* Front camera lens with reflective flare */}
              <div
                className="w-[1.1rem] h-[1.1rem] rounded-full shrink-0"
                style={{
                  backgroundColor: "#1a1a2e",
                  border: "0.15rem solid #0a0a15",
                  boxShadow: "inset 0 0 0.3rem rgba(0, 100, 200, 0.5)",
                }}
              />
            </div>

            {/* Hardware side buttons (Left: Action button, Volume Up, Volume Down) */}
            <div
              className="absolute top-[9.8rem] left-[-0.2rem] w-[0.3rem] h-10 bg-[#484848] rounded-tl-[0.3rem] rounded-bl-[0.3rem]"
              style={{
                border: "0.1rem solid rgba(0, 0, 0, 0.1)",
                borderRight: "none",
              }}
            />
            <div
              className="absolute top-60 left-[-0.2rem] w-[0.3rem] h-20 bg-[#484848] rounded-tl-[0.3rem] rounded-bl-[0.3rem]"
              style={{
                border: "0.1rem solid rgba(0, 0, 0, 0.1)",
                borderRight: "none",
              }}
            />
            <div
              className="absolute top-[21.6rem] left-[-0.2rem] w-[0.3rem] h-20 bg-[#484848] rounded-tl-[0.3rem] rounded-bl-[0.3rem]"
              style={{
                border: "0.1rem solid rgba(0, 0, 0, 0.1)",
                borderRight: "none",
              }}
            />

            {/* Hardware side button (Right: Power / Siri button) */}
            <div
              className="absolute top-[16.9rem] right-[-0.3rem] w-[0.3rem] h-20 bg-[#484848] rounded-tl-[0.3rem] rounded-bl-[0.3rem]"
              style={{
                border: "0.1rem solid rgba(0, 0, 0, 0.1)",
                borderRight: "none",
                transform: "rotate(180deg)",
              }}
            />

            {/* Device Bezels & Realistic Light Reflections */}
            <div className="absolute inset-0 border-[0.4rem] border-[#484848] rounded-[6rem] pointer-events-none" />
            <div className="absolute inset-[0.3rem] border-[1.6rem] border-black rounded-[5.6rem] pointer-events-none" />
            <div
              className="absolute inset-[1.1rem] border-[0.3rem] border-[#484848] rounded-[5rem] pointer-events-none opacity-50"
              style={{ filter: "blur(1px)" }}
            />
            <div
              className="absolute inset-[0.7rem] border-[0.4rem] border-[#bcbcbc] rounded-[5.6rem] pointer-events-none opacity-50"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Device };
