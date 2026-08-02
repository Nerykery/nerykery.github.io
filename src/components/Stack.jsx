import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORIES, EXTRA_TAGS } from "../content.js";

function SkillBar({ name, level, icon, delay, isInView, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-medium text-ink/85 transition-colors group-hover:text-ink">
            {name}
          </span>
        </div>
        <span className="font-mono text-xs text-ice">{level}%</span>
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
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className={`relative h-full rounded-full bg-gradient-to-r ${color}`}
        >
          <div
            className="absolute inset-0 animate-pulse rounded-full bg-white/20"
            style={{ animationDuration: "3s" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="stack" className="relative z-10 border-y border-line bg-panel/30" ref={ref}>
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-ice uppercase">// skills</p>
          <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
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
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * catIdx, duration: 0.5 }}
              className="glass-card p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-lg font-semibold text-ink">{category.title}</h3>
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-dim">А также</p>
          <div className="flex flex-wrap justify-center gap-3">
            {EXTRA_TAGS.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.03 }}
                whileHover={{ y: -2 }}
                className="cursor-default rounded-full border border-line bg-panel-2/60 px-4 py-2 text-sm text-ink/85 transition-colors hover:border-ice/50 hover:text-ice"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
