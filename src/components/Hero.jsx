import { motion } from "framer-motion";
import { ChevronDown, Code2, Shield, Server } from "lucide-react";
import CipherCanvas from "./CipherCanvas.jsx";
import DecryptText from "./DecryptText.jsx";
import useTypingEffect from "../useTypingEffect.js";

const ROLES = [
  "Full-Stack Developer",
  "DevOps Engineer",
  "Security Specialist",
  "AI Integration Expert",
  "Python / C++ / 1C",
];

const fade = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

function OrbitRing({ radius, duration, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute rounded-full border border-ice/10"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: `calc(50% - ${radius}px)`,
        left: `calc(50% - ${radius}px)`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 1 }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-ice/20 bg-panel/80 shadow-lg shadow-ice/10"
        style={{ marginTop: -20, marginLeft: -20 }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <motion.span
          style={{ transform: `translateX(${radius}px)` }}
          className="flex h-10 w-10 items-center justify-center"
        >
          <Icon size={16} className="text-ice" />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(ROLES);

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <CipherCanvas />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-abyss)_92%)]"
      />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <OrbitRing radius={290} duration={38} icon={Code2} delay={0} />
        <OrbitRing radius={390} duration={55} icon={Shield} delay={0.2} />
        <OrbitRing radius={490} duration={72} icon={Server} delay={0.4} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 pb-16">
        <motion.p {...fade(0.1)} className="mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] text-dim uppercase">
          <span className="status-dot inline-block h-2 w-2 rounded-full bg-amber" />
          открыт к проектам
        </motion.p>

        <h1 className="font-display text-[clamp(2rem,6.5vw,4.6rem)] leading-[1.08] font-semibold tracking-tight">
          <DecryptText text="Пишу код." delay={300} className="block text-ink" />
          <DecryptText text="Строю инфраструктуру." delay={900} className="block text-ink" />
          <span className="block">
            <DecryptText text="Защищаю деньги." delay={1700} className="text-amber" />
            <span className="cursor-blink ml-2 inline-block h-[0.85em] w-[0.45em] translate-y-[0.1em] bg-amber align-baseline" aria-hidden="true" />
          </span>
        </h1>

        <motion.div {...fade(0.7)} className="mt-6 flex h-8 items-center">
          <span className="font-mono text-base text-ice sm:text-lg">
            {"{ "}
            <span className="typing-cursor text-ink">{typedText}</span>
            {" }"}
          </span>
        </motion.div>

        <motion.p {...fade(0.9)} className="mt-5 max-w-xl text-lg leading-relaxed text-dim">
          Инженер полного цикла: фулл-стек разработка, DevOps и информационная
          безопасность — включая финансовые структуры, где сбой стоит дороже всего.
          Интегрирую нейросети туда, где они приносят деньги, а не хайп.
        </motion.p>

        <motion.div {...fade(1.2)} className="mt-9 flex flex-wrap items-center gap-4">
          <motion.a
            href="#domains"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 178, 36, 0.35)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-amber px-6 py-3 font-mono text-sm font-semibold text-abyss"
          >
            смотреть компетенции
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-ice hover:text-ice"
          >
            написать мне
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Прокрутить к разделу «Обо мне»"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-dim transition-colors hover:text-amber"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
