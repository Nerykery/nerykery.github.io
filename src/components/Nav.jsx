import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "Обо мне" },
  { href: "#domains", label: "Компетенции" },
  { href: "#stack", label: "Стек" },
  { href: "#process", label: "Подход" },
];

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001,
  });

  // scroll-spy: подсвечиваем раздел, который сейчас в зоне чтения
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // закрываем мобильное меню по Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // блокируем прокрутку страницы, пока открыто меню
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduced ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-abyss/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold tracking-widest text-ink"
        >
          <span className="text-amber">~/</span>engineer
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className="nav-link text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn min-h-0 px-4 py-1.5 text-xs text-amber"
            style={{
              border: "1px solid rgba(255,178,36,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
          >
            связаться
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="btn btn-ghost min-h-0 px-3 py-2 sm:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* индикатор прочитанного */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduced ? scrollYProgress : progress }}
        className="scroll-progress h-[2px] w-full origin-left bg-gradient-to-r from-amber to-ice"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden border-t border-line/60 bg-abyss/95 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "true" : undefined}
                  className="nav-link text-base"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 w-full"
              >
                связаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
