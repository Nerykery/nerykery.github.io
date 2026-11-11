import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SKILL_CATEGORIES, EXTRA_TAGS } from "../content.js";
import { CategoryIcon, SkillIcon } from "./skillIcons.jsx";

function SkillBar({ name, level, delay, isInView, color }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line bg-panel-2/70 text-dim transition-colors group-hover:text-ink">
            <SkillIcon name={name} size={13} />
          </span>
          <span className="truncate text-sm font-medium text-ink/85 transition-colors group-hover:text-ink">
            {name}
          </span>
        </div>
        <span className="font-mono text-xs text-ice tabular-nums">{level}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-line/60"
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <motion.div
          initial={reduced ? { width: `${level}%` } : { width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className={`relative h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

function TechTag({ tech, delay, isInView, reduced }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.span
      className="group relative"
      initial={reduced ? false : { opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.3 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        aria-describedby={`tip-${tech.name.replace(/\W/g, "")}`}
        className="block cursor-default rounded-full border border-line bg-panel-2/60 px-4 py-2 text-sm text-ink/85 transition-[color,border-color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:border-ice/50 group-hover:text-ice group-focus-within:border-ice/60 group-focus-within:text-ice"
      >
        {tech.name}
      </button>

      <span
        id={`tip-${tech.name.replace(/\W/g, "")}`}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-60 -translate-x-1/2 transition-opacity duration-150 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="block rounded-xl border border-line bg-panel-2/95 px-4 py-3 text-left shadow-2xl shadow-black/40 backdrop-blur-md">
          <span className="mb-1 block font-mono text-xs tracking-wide text-ice uppercase">
            {tech.name}
          </span>
          <span className="block text-[11px] leading-relaxed text-dim">
            {tech.desc}
          </span>
          <span className="mt-2 block truncate font-mono text-[11px] text-amber/90">
            {tech.example}
          </span>
        </span>
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-line bg-panel-2" />
      </span>
    </motion.span>
  );
}

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduced = useReducedMotion();

  return (
    <section id="stack" className="relative z-10 border-y border-line bg-panel/30" ref={ref}>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-ice">// skills</p>
          <h2 className="font-display mt-3 text-title">
            Технический <span className="gradient-text">стек</span>
          </h2>
          <p className="mt-4 max-w-xl text-dim">
            Полный набор технологий для решения задач любой сложности.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * catIdx, duration: 0.5 }}
              className="glass-card p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${category.color}`} />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-panel-2/70 text-dim">
                  <CategoryIcon title={category.title} size={16} />
                </span>
                <h3 className="text-subtitle text-ink">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={0.1 * catIdx + 0.05 * skillIdx}
                    isInView={isInView}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14"
        >
          <p className="eyebrow mb-5 text-center text-dim">а также</p>
          <div className="flex flex-wrap justify-center gap-3">
            {EXTRA_TAGS.map((tech, i) => (
              <TechTag
                key={tech.name}
                tech={tech}
                delay={0.9 + i * 0.03}
                isInView={isInView}
                reduced={reduced}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-dim/70">
            Наведите курсор или перейдите клавишей Tab, чтобы увидеть описание
          </p>
        </motion.div>
      </div>
    </section>
  );
}
