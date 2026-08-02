import { useEffect, useRef, useState } from "react";

const GLYPHS = "アイウエオカキクケコサシスセソ01<>/{}#$%&*+=?";

export default function DecryptText({ text, delay = 0, className = "" }) {
  const [out, setOut] = useState(text);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone(true);
      return;
    }

    let frame = 0;
    let raf;
    const total = text.length * 3 + 14;

    const timer = setTimeout(() => {
      const tick = () => {
        frame++;
        const resolved = Math.floor((frame - 8) / 2.2);
        setOut(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " " || ch === "\n") return ch;
              if (i < resolved) return ch;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );
        if (frame < total) {
          raf = requestAnimationFrame(tick);
        } else {
          setOut(text);
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return (
    <span className={className} data-done={done} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
