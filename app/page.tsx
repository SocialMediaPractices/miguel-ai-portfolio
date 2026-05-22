import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { skills, solarFeatures } from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_38%),linear-gradient(135deg,#ffffff,#f8fafc)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              AI Workflow Systems Builder
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Practical AI workflows for sales operations and automation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              I build workflow systems that turn daily business activity into structured data,
              dashboards, and automation-ready processes. My focus is field-sales operations,
              CRM thinking, AI orchestration, and practical LLM integrations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/solar-field-sales-intelligence-tracker"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                View Solar Tracker Case Study
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:border-slate-500"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <p className="text-sm font-semibold text-slate-500">Featured project</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              Solar Field Sales Intelligence Tracker
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              An independent mobile-first tracking app built to improve my own retail solar
              field-sales workflow.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                "Daily goals",
                "Engagements",
                "Roof conversations",
                "Appointments",
                "Sentiments",
                "Store filtering",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-100 px-4 py-3 font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="What I build" title="Systems that make operational work visible.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Workflow tracking",
              "I map real work into structured steps, fields, statuses, and follow-up points.",
            ],
            [
              "Automation-ready data",
              "I design workflows so activity can later connect to CRMs, reminders, lead scoring, and AI coaching.",
            ],
            [
              "AI orchestration",
              "I work with assistant routing, local/cloud LLM choices, and human-in-the-loop task execution.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Flagship case study" title="Solar Field Sales Intelligence Tracker">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="leading-7 text-slate-700">
              Retail field sales creates useful information every day: conversations, objections,
              appointment signals, customer status, store context, and follow-up opportunities.
              I built a mobile-first tracker to capture that activity and make it easier to review.
            </p>
            <Link
              href="/projects/solar-field-sales-intelligence-tracker"
              className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Read the case study
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {solarFeatures.slice(0, 12).map((feature) => (
              <Badge key={feature}>{feature}</Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Practical AI, automation, and operations skills.">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Section>

      <section className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Looking for someone who can turn AI tools into usable workflows?
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            I’m interested in AI operations, workflow automation, LLM integrations,
            sales operations, CRM workflows, and internal tools roles.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
