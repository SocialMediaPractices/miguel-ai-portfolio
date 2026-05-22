import { Section } from "@/components/Section";

export const metadata = {
  title: "Contact | Miguel Delgadillo",
  description: "Contact Miguel Delgadillo for AI workflow systems, automation, and operations roles or projects.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Let’s talk about practical AI workflows.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            I’m open to job opportunities and client conversations around AI operations,
            workflow automation, sales systems, CRM workflows, and LLM integrations.
          </p>
        </div>
      </section>

      <Section title="For employers">
        <p className="max-w-3xl leading-8 text-slate-700">
          I can help teams map repetitive workflows, structure operational data, test AI tools,
          document systems, and build practical workflows that connect business needs with AI capabilities.
        </p>
      </Section>

      <Section title="For clients">
        <p className="max-w-3xl leading-8 text-slate-700">
          I can help research and design automation workflows for lead intake, follow-up, appointment reminders,
          customer communication, CRM updates, and internal operations. The goal is practical improvement,
          not AI for the sake of AI.
        </p>
      </Section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Contact details</h2>
          <p className="mt-3 text-slate-700">Add email, LinkedIn, and GitHub links here before publishing.</p>
        </div>
      </section>
    </main>
  );
}
