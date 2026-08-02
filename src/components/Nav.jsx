import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "Обо мне" },
  { href: "#domains", label: "Компетенции" },
  { href: "#stack", label: "Стек" },
  { href: "#process", label: "Подход" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-abyss/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest text-ink">
          <span className="text-amber">~/</span>engineer
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-amber/50 px-4 py-1.5 font-mono text-xs font-medium text-amber transition-colors hover:bg-amber hover:text-abyss"
          >
            связаться
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
