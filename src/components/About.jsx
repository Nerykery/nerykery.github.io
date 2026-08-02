import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Braces, Shield, Globe, Cpu, GraduationCap, BadgeCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Braces,
    title: "Full-Stack разработка",
    desc: "Frontend и Backend на современных технологиях",
    accent: "text-ice",
  },
  {
    icon: Shield,
    title: "Информационная безопасность",
    desc: "Защита данных в финансовых структурах",
    accent: "text-amber",
  },
  {
    icon: Globe,
    title: "DevOps & Cloud",
    desc: "CI/CD, контейнеризация, мониторинг",
    accent: "text-ice",
  },
  {
    icon: Cpu,
    title: "AI и нейросети",
    desc: "Интеграция ИИ в бизнес-процессы",
    accent: "text-amber",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-5 py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.25em] text-ice uppercase">// about_me</p>
        <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
          Обо <span className="gradient-text">мне</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-2 border-b border-line pb-4">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-dim">about.md</span>
            </div>

            <div className="space-y-4 leading-relaxed text-ink/90">
              <p>
                <span className="font-mono text-sm text-amber">## </span>
                Привет! Меня зовут{" "}
                <span className="font-semibold text-ink">Павлов Кирилл Андреевич</span>.
              </p>
              <p className="text-dim">
                Я — дипломированный специалист по информационной безопасности
                с подтверждённым дополнительным образованием в области защиты
                финансовых и экономических структур.
              </p>
              <p className="text-dim">
                Разрабатываю фулл-стек решения на{" "}
                <span className="text-ice">Python</span>,{" "}
                <span className="text-ice">C++</span> и{" "}
                <span className="text-ice">1С</span>, выстраиваю
                DevOps-процессы и интегрирую нейросети в бизнес-задачи.
              </p>
              <p className="text-dim">
                Мой подход — от анализа архитектуры до полного деплоя, с фокусом
                на безопасность, производительность и масштабируемость.
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-line pt-6">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Диплом — информационная безопасность
                  </div>
                  <div className="mt-0.5 text-xs text-dim">профильное образование</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-ice" />
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Дополнительное образование — ИБ в финансовых и экономических структурах
                  </div>
                  <div className="mt-0.5 text-xs text-dim">подтверждено документально</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="glass-card group cursor-default p-7"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel-2 transition-transform group-hover:scale-110">
                <item.icon size={22} className={item.accent} />
              </div>
              <h3 className="mb-2 font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-dim">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
