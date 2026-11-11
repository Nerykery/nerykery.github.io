import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send, GitBranch } from "lucide-react";

const LINKS = [
  {
    href: "mailto:pavlovka0109@gmail.com",
    label: "pavlovka0109@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    href: "https://t.me/dota2_developer",
    label: "telegram",
    icon: Send,
    primary: false,
  },
  {
    href: "https://github.com/Nerykery",
    label: "github",
    icon: GitBranch,
    primary: false,
  },
];

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/8 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-28 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow text-amber">// контакт</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-title">
            Есть задача? Обсудим, как её решить.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Опишите проект в паре предложений — отвечу с конкретикой:
            что можно сделать, за сколько и какие есть риски.
          </p>

          {/* одна заполненная кнопка на экран — почта; остальные вторичные */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className={`btn ${l.primary ? "btn-primary" : "btn-ghost"}`}
              >
                <l.icon size={16} aria-hidden="true" />
                {l.label}
              </a>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-dim">
            Обычно отвечаю в течение дня
          </p>
        </motion.div>
      </div>
    </section>
  );
}
