import { useMemo } from "react";

const CHARS = "01アイウエオカキクケコサシスセソ{}[]<>/=+*&^%$#@!";

function MatrixRain() {
  const columns = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: `${(i / 26) * 100}%`,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 10}s`,
        fontSize: `${10 + Math.random() * 8}px`,
        opacity: 0.04 + Math.random() * 0.12,
        amber: Math.random() < 0.2,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {columns.map((col) => (
        <span
          key={col.id}
          className="matrix-char"
          style={{
            left: col.left,
            fontSize: col.fontSize,
            opacity: col.opacity,
            color: col.amber ? "rgba(255,178,36,0.5)" : "rgba(121,192,255,0.4)",
            animationDuration: col.duration,
            animationDelay: col.delay,
          }}
        >
          {col.char}
        </span>
      ))}
    </div>
  );
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => {
        const amber = Math.random() < 0.3;
        const color = amber ? "rgba(255,178,36,0.35)" : "rgba(121,192,255,0.3)";
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          size: 2 + Math.random() * 4,
          duration: `${10 + Math.random() * 20}s`,
          delay: `${Math.random() * 15}s`,
          color,
        };
      }),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function BackgroundFX() {
  return (
    <div aria-hidden="true">
      <div className="bg-blobs" />
      <div className="bg-grid" />
      <FloatingParticles />
      <MatrixRain />
    </div>
  );
}
