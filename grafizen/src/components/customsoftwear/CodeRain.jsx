import React, { useMemo } from "react";

const codeSnippets = [
  "const dev = build();",
  "import { useState } from 'react';",
  "<Component active={true} />",
  "async function deploy()",
  "{ status: 200, ok: true }",
  "npm run build",
  "git push origin main",
  "const [data, setData] = useState()",
  "api.connect({ ssl: true })",
  "export default App;",
  "01001100 01101111 01100111",
  "await db.query('SELECT *')",
  "docker-compose up -d",
  "const res = await fetch(url);",
  "UI.render(<Software />)",
  "v18.2.0 production build",
  "system.optimize({ speed: '10x' })",
  "headers: { auth: 'Bearer token' }",
  "scale.autoGroup({ replicas: 5 })",
  "// High performance code",
];

export default function CodeRain() {
  const columns = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => {
      const left = Math.floor((i / 22) * 100) + Math.random() * 2;
      const duration = 14 + Math.random() * 16; // 14s to 30s (slower, smoother speed)
      const delay = Math.random() * 15;
      const snippet = codeSnippets[i % codeSnippets.length];
      const isRed = i % 2 === 0;

      return {
        id: i,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `-${delay}s`,
        snippet,
        isRed,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-5 opacity-80 selection:bg-transparent">
      <style>{`
        @keyframes codeRainDrop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.95;
          }
          85% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>

      {columns.map((col) => (
        <div
          key={col.id}
          className={`absolute top-0 font-mono text-[11px] sm:text-[13px] tracking-widest leading-none ${
            col.isRed ? "text-[#dd0403]/85 font-bold" : "text-black/70 font-semibold"
          }`}
          style={{
            left: col.left,
            writingMode: "vertical-rl",
            textOrientation: "upright",
            animation: `codeRainDrop ${col.duration} linear infinite`,
            animationDelay: col.delay,
          }}
        >
          {col.snippet}
        </div>
      ))}
    </div>
  );
}
