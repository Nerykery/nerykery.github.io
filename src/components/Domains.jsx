import { motion, useReducedMotion } from "framer-motion";
import { DOMAINS } from "../content.js";

export default function Domains() {
  const reduced = useReducedMotion();

  return (
    <section id="domains" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow text-amber">// компетенции</p>
        <h2 className="font-display mt-3 max-w-2xl text-title">
          Девять направлений, одна голова
        </h2>
        <p className="mt-4 max-w-xl text-dim">
          Не «немного всего», а связанная система: код, инфраструктура и
          безопасность усиливают друг друга.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DOMAINS.map((d, i) => {
          const isAmber = d.accent === "amber";
          return (
            <motion.article
              key={d.code}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
              className={`glass-card group relative overflow-hidden p-6 ${
                isAmber ? "hover:border-amber/60" : "hover:border-ice/60"
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 ${
                  isAmber ? "bg-amber" : "bg-ice"
                }`}
              />
              <div className="flex items-start justify-between">
                <span
                  className={`font-mono text-xs font-semibold tracking-widest ${
                    isAmber ? "text-amber" : "text-ice"
                  }`}
                >
                  [{d.code}]
                </span>
                <span className="font-mono text-xs text-dim tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-subtitle text-ink">{d.title}</h3>
              <p className="mt-2.5 text-body-sm leading-relaxed text-dim">{d.desc}</p>
              <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
                {d.points.map((p) => (
                  <li key={p} className="flex items-baseline gap-2 text-sm text-ink/80">
                    <span className={isAmber ? "text-amber" : "text-ice"} aria-hidden="true">
                      ▸
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
