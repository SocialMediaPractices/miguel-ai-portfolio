import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { skills } from "@/content/site";

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

      <Section title="Resume PDF">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-slate-700">
          Add a downloadable resume PDF at <code className="rounded bg-slate-100 px-2 py-1">public/resume.pdf</code>,
          then link it here.
        </div>
      </Section>
    </main>
  );
}
