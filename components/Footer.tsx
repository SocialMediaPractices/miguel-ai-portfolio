export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Miguel Delgadillo</p>
        <p>AI workflow systems, sales operations, and automation portfolio.</p>
      </div>
    </footer>
  );
}
