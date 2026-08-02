export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-7 sm:flex-row">
        <p className="font-mono text-xs text-dim">
          <span className="text-amber">$</span> Павлов Кирилл · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-dim">
          собрано на React · Vite · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
