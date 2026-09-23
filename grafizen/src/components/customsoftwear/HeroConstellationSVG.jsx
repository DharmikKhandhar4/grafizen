import React from "react";

export default function HeroConstellationSVG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 selection:bg-transparent">
      {/* TOP RIGHT CONSTELLATION MESH */}
      <div className="absolute -top-12 -right-12 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] opacity-80 sm:opacity-60 hidden md:block">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-[#dd0403]/45" fill="none">
          <defs>
            <radialGradient id="redGlowRight" cx="70%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#dd0403" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#dd0403" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

      
       

          {/* Constellation Polygon Faces */}
          <g strokeWidth="0.9">
            <path d="M 330 70 L 410 30 L 480 100 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 480 100 L 550 50 L 590 130 Z" fill="#dd0403" fillOpacity="0.06" />
            <path d="M 410 30 L 550 50 L 480 100 Z" />
            <path d="M 480 100 L 450 190 L 370 150 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 370 150 L 330 70 L 480 100 Z" />
            <path d="M 450 190 L 560 170 L 480 100 Z" fill="#dd0403" fillOpacity="0.07" />
            <path d="M 560 170 L 590 130 L 480 100 Z" />
            <path d="M 450 190 L 530 260 L 560 170 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 370 150 L 300 230 L 450 190 Z" fill="#dd0403" fillOpacity="0.03" />
            <path d="M 530 260 L 590 240 L 560 170 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 300 230 L 390 300 L 450 190 Z" />
            <path d="M 450 190 L 390 300 L 530 260 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 530 260 L 580 340 L 450 190 Z" />
          </g>

          {/* Node Points - Solid Orbs without Circle Borders */}
          <g>
            <circle cx="330" cy="70" r="3.5" fill="#dd0403" />
            <circle cx="410" cy="30" r="4.5" fill="#dd0403" />
            <circle cx="480" cy="100" r="5.5" fill="#dd0403" />
            <circle cx="550" cy="50" r="4" fill="#dd0403" />
            <circle cx="590" cy="130" r="4.5" fill="#dd0403" />
            <circle cx="370" cy="150" r="3.5" fill="#dd0403" />
            <circle cx="450" cy="190" r="5.5" fill="#dd0403" />
            <circle cx="560" cy="170" r="4.5" fill="#dd0403" />
            <circle cx="300" cy="230" r="3.5" fill="#dd0403" />
            <circle cx="530" cy="260" r="5" fill="#dd0403" />
            <circle cx="390" cy="300" r="4" fill="#dd0403" />
            <circle cx="580" cy="340" r="3.5" fill="#dd0403" />
          </g>
        </svg>
      </div>
        <div className="absolute -top-20 -left-110 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] opacity-80 sm:opacity-60">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-[#dd0403]/45" fill="none">
          <defs>
            <radialGradient id="redGlowRight" cx="70%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#dd0403" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#dd0403" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

      
       

          {/* Constellation Polygon Faces */}
          <g strokeWidth="0.9">
            <path d="M 330 70 L 410 30 L 480 100 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 480 100 L 550 50 L 590 130 Z" fill="#dd0403" fillOpacity="0.06" />
            <path d="M 410 30 L 550 50 L 480 100 Z" />
            <path d="M 480 100 L 450 190 L 370 150 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 370 150 L 330 70 L 480 100 Z" />
            <path d="M 450 190 L 560 170 L 480 100 Z" fill="#dd0403" fillOpacity="0.07" />
            <path d="M 560 170 L 590 130 L 480 100 Z" />
            <path d="M 450 190 L 530 260 L 560 170 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 370 150 L 300 230 L 450 190 Z" fill="#dd0403" fillOpacity="0.03" />
            <path d="M 530 260 L 590 240 L 560 170 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 300 230 L 390 300 L 450 190 Z" />
            <path d="M 450 190 L 390 300 L 530 260 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 530 260 L 580 340 L 450 190 Z" />
          </g>

          {/* Node Points - Solid Orbs without Circle Borders */}
          <g>
            <circle cx="330" cy="70" r="3.5" fill="#dd0403" />
            <circle cx="410" cy="30" r="4.5" fill="#dd0403" />
            <circle cx="480" cy="100" r="5.5" fill="#dd0403" />
            <circle cx="550" cy="50" r="4" fill="#dd0403" />
            <circle cx="590" cy="130" r="4.5" fill="#dd0403" />
            <circle cx="370" cy="150" r="3.5" fill="#dd0403" />
            <circle cx="450" cy="190" r="5.5" fill="#dd0403" />
            <circle cx="560" cy="170" r="4.5" fill="#dd0403" />
            <circle cx="300" cy="230" r="3.5" fill="#dd0403" />
            <circle cx="530" cy="260" r="5" fill="#dd0403" />
            <circle cx="390" cy="300" r="4" fill="#dd0403" />
            <circle cx="580" cy="340" r="3.5" fill="#dd0403" />
          </g>
        </svg>
      </div>

      {/* BOTTOM LEFT CONSTELLATION MESH */}
      <div className="absolute -bottom-16 -left-16 w-[350px] sm:w-[500px] lg:w-[300px] h-[350px] sm:h-[500px] lg:h-[300px] opacity-80 sm:opacity-60">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-[#dd0403]/45" fill="none">
          <defs>
            <radialGradient id="redGlowLeft" cx="30%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#dd0403" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#dd0403" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radial Aura Glow */}
          {/* <circle cx="150" cy="450" r="280" fill="url(#redGlowLeft)" /> */}

          {/* Constellation Polygon Faces */}
          {/* <g strokeWidth="0.9">
            <path d="M 40 440 L 110 370 L 170 430 Z" fill="#dd0403" fillOpacity="0.05" />
            <path d="M 170 430 L 230 360 L 270 440 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 110 370 L 230 360 L 170 430 Z" />
            <path d="M 170 430 L 140 520 L 70 480 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 70 480 L 40 440 L 170 430 Z" />
            <path d="M 140 520 L 240 500 L 170 430 Z" fill="#dd0403" fillOpacity="0.06" />
            <path d="M 240 500 L 270 440 L 170 430 Z" />
            <path d="M 140 520 L 210 580 L 240 500 Z" fill="#dd0403" fillOpacity="0.04" />
            <path d="M 70 480 L 10 560 L 140 520 Z" fill="#dd0403" fillOpacity="0.03" />
          </g> */}

          {/* Node Points - Solid Orbs without Circle Borders */}
          {/* <g>
            <circle cx="40" cy="440" r="3.5" fill="#dd0403" />
            <circle cx="110" cy="370" r="4.5" fill="#dd0403" />
            <circle cx="170" cy="430" r="5.5" fill="#dd0403" />
            <circle cx="230" cy="360" r="4" fill="#dd0403" />
            <circle cx="270" cy="440" r="4.5" fill="#dd0403" />
            <circle cx="70" cy="480" r="3.5" fill="#dd0403" />
            <circle cx="140" cy="520" r="5.5" fill="#dd0403" />
            <circle cx="240" cy="500" r="4.5" fill="#dd0403" />
            <circle cx="10" cy="560" r="3.5" fill="#dd0403" />
            <circle cx="210" cy="580" r="4.5" fill="#dd0403" />
          </g> */}
        </svg>
      </div>
    </div>
  );
}
