import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/8 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-amber uppercase">// контакт</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl leading-tight sm:text-5xl">
            Есть задача? Обсудим, как её решить.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-dim">
            Опишите проект в паре предложений — отвечу с конкретикой:
            что можно сделать, за сколько и какие есть риски.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@example.dev"
              className="rounded-full bg-amber px-7 py-3.5 font-mono text-sm font-semibold text-abyss transition-transform hover:scale-[1.04] active:scale-[0.98]"
            >
              hello@example.dev
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-7 py-3.5 font-mono text-sm text-ink transition-colors hover:border-ice hover:text-ice"
            >
              telegram
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-7 py-3.5 font-mono text-sm text-ink transition-colors hover:border-ice hover:text-ice"
            >
              github
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
