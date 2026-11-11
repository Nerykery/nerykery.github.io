import { motion, useReducedMotion } from "framer-motion";
import { PRINCIPLES } from "../content.js";

export default function Process() {
  const reduced = useReducedMotion();

  return (
    <section id="process" className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow text-amber">// подход</p>
        <h2 className="font-display mt-3 max-w-2xl text-title">
          Как проект идёт от идеи до продакшена
        </h2>
      </motion.div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <motion.li
            key={p.step}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="glass-card relative p-6"
          >
            <span className="font-display text-3xl text-line select-none" aria-hidden="true">
              {p.step}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-dim">{p.desc}</p>
            {i < PRINCIPLES.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-4 hidden -translate-y-1/2 font-mono text-dim lg:block"
              >
                →
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
