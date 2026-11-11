const NAV = [
  { href: "#about", label: "Обо мне" },
  { href: "#domains", label: "Компетенции" },
  { href: "#stack", label: "Стек" },
  { href: "#process", label: "Подход" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold tracking-widest text-ink">
              <span className="text-amber">~/</span>engineer
            </p>
            <p className="mt-2 max-w-xs text-sm text-dim">
              Фулл-стек, DevOps и информационная безопасность.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-dim transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-dim">
            <span className="text-amber">$</span> Павлов Кирилл ·{" "}
            {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs text-dim">
            собрано на React · Vite · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
