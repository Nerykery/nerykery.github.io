import { useEffect, useState } from "react";

export default function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 45, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplayText(texts[0]);
      return;
    }

    const current = texts[index];
    let timeout;

    if (phase === "typing") {
      if (displayText === current) {
        timeout = setTimeout(() => setPhase("deleting"), pauseTime);
      } else {
        timeout = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          typingSpeed
        );
      }
    } else {
      if (displayText === "") {
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      } else {
        timeout = setTimeout(
          () => setDisplayText((t) => t.slice(0, -1)),
          deletingSpeed
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
