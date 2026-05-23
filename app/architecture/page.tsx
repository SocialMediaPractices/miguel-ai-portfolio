import { CaseStudyScreenshot } from "@/components/CaseStudyScreenshot";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Architecture | Miguel Delgadillo",
  description: "Practical AI workflow architecture for operators, routing, tools, memory, and automation.",
};

export default function ArchitecturePage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Architecture</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            How I think about practical AI workflow systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            I look at AI systems as operational layers: user interface, routing, models, tools,
            automation, memory, and human review.
          </p>
        </div>
      </section>

      <Section title="Solar tracker workflow architecture">
        <CaseStudyScreenshot src="/diagrams/solar-tracker-architecture.svg" title="Solar tracker workflow architecture" />
      </Section>

      <Section title="Core workflow pattern">
        <div className="rounded-3xl bg-slate-950 p-6 font-mono text-sm leading-8 text-white">
          <p>User request</p>
          <p>→ Chat, form, dashboard, or CLI</p>
          <p>→ AI operator / workflow layer</p>
          <p>→ Routing decision</p>
          <p>→ Model, tool, automation, or human review</p>
          <p>→ Result, record, follow-up, or dashboard update</p>
        </div>
      </Section>

      <Section title="CLI/API workflow layer">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Authorized workflow inspection</h2>
            <p className="mt-3 leading-7 text-slate-700">
              For the SunrunOne-related work, I built local read-only CLI/API tooling around my
              authorized session to inspect profile state, navigation, store context, and appointment
              workflow signals where access allowed.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">AI-ready tool surface</h2>
            <p className="mt-3 leading-7 text-slate-700">
              The same pattern can expose safe MCP-style tools to an AI operator: check status,
              map workflows, summarize signals, and support human decisions without publishing
              secrets, customer records, or unauthorized data.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Local vs. cloud model routing">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Cloud models</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Better for complex reasoning, coding, long-context work, reliability, and important tasks.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Local models</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Useful for private, low-cost, offline-capable, or lightweight assistant workflows when hardware allows.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Human-in-the-loop automation">
        <p className="max-w-3xl leading-8 text-slate-700">
          I do not think AI should blindly act on sensitive workflows. Sending messages, changing
          records, deleting files, booking appointments, and handling customer data should include
          approval steps, audit trails, and clear boundaries.
        </p>
      </Section>
    </main>
  );
}
