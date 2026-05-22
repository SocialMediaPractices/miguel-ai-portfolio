import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Projects | Miguel Delgadillo",
  description: "Projects focused on AI workflow systems, field-sales operations, automation, and LLM orchestration.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Practical workflow systems.
          </h1>
        </div>
      </section>
      <Section title="Featured project">
        <Link
          href="/projects/solar-field-sales-intelligence-tracker"
          className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Case Study</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Solar Field Sales Intelligence Tracker</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            A mobile-first field-sales tracking app built as an independent personal project to improve retail solar sales workflow.
          </p>
        </Link>
      </Section>
    </main>
  );
}
