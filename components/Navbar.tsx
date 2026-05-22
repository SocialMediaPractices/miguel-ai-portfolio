import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/solar-field-sales-intelligence-tracker", label: "Case Study" },
  { href: "/architecture", label: "Architecture" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight text-slate-950">
          Miguel Delgadillo
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
