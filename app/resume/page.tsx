import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { site, skills } from "@/content/site";

export const metadata = {
  title: "Resume | Miguel Delgadillo",
  description: "Resume overview for AI workflow systems, sales operations, automation, and LLM integrations.",
};

export default function ResumePage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Resume</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Miguel Delgadillo
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            AI Workflow Systems Builder focused on field-sales operations, workflow automation,
            CRM thinking, dashboard design, and practical AI orchestration.
          </p>
        </div>
      </section>

      <Section title="Professional focus">
        <p className="max-w-3xl leading-8 text-slate-700">
          I’m looking for roles involving AI operations, workflow automation, LLM integrations,
          sales operations, CRM workflows, internal tools, and business process improvement.
          My background combines practical sales operations experience with hands-on AI systems work.
        </p>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Section>

      <Section title="Portfolio proof">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/projects/solar-field-sales-intelligence-tracker"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"
          >
            <h2 className="text-xl font-semibold text-slate-950">Solar Field Sales Intelligence Tracker</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Mobile-first field-sales tracking app case study focused on CRM thinking, dashboards,
              and automation-ready data.
            </p>
          </Link>
          <Link
            href={site.github}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"
          >
            <h2 className="text-xl font-semibold text-slate-950">GitHub repository</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Public portfolio source code and project documentation.
            </p>
          </Link>
        </div>
      </Section>

      <Section title="Resume PDF">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          <p className="leading-7">
            Download my current resume as a PDF. The portfolio case study adds more detail on my
            AI workflow systems and field-sales tracking project.
          </p>
          <Link
            href="/resume.pdf"
            className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download Resume PDF
          </Link>
        </div>
      </Section>
    </main>
  );
}
