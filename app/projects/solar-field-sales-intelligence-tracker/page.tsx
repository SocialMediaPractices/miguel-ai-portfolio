import { Badge } from "@/components/Badge";
import { CaseStudyScreenshot } from "@/components/CaseStudyScreenshot";
import { Section } from "@/components/Section";
import { solarFeatures } from "@/content/site";

export const metadata = {
  title: "Solar Field Sales Intelligence Tracker | Miguel Delgadillo",
  description:
    "Independent mobile-first field-sales tracking app case study for retail solar sales workflow, CRM thinking, dashboards, and future AI coaching.",
};

export default function SolarTrackerCaseStudy() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Case Study
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Solar Field Sales Intelligence Tracker
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            A mobile-first field-sales tracking app I built as an independent personal project to
            improve my retail solar sales workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Independent personal project",
              "Field-sales operations",
              "CRM thinking",
              "Dashboard design",
              "Future AI coaching",
            ].map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Problem" title="Field sales activity is easy to lose if it is not captured immediately.">
        <div className="max-w-3xl space-y-5 leading-8 text-slate-700">
          <p>
            Retail solar sales happens through short, high-volume conversations. In one shift,
            a rep may speak with many people, identify possible roof opportunities, hear repeated
            objections, pitch interested customers, and book appointments.
          </p>
          <p>
            Without a structured tracking system, it is difficult to review what actually happened:
            how many people were engaged, which objections came up, where the funnel dropped off,
            which stores performed better, and what follow-up should happen next.
          </p>
        </div>
      </Section>

      <Section eyebrow="Solution" title="A mobile-first tracker for turning sales conversations into structured data.">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5 leading-8 text-slate-700">
            <p>
              I built a personal sales intelligence tracker to log daily activity, review goals,
              organize customer interaction data, and identify patterns across engagements,
              demographics, objections, sentiments, stores, and appointments.
            </p>
            <p>
              The project is designed around a simple field-sales workflow: engage, qualify,
              pitch, capture lead details, book appointments, track status, and review performance.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-100">
            <p>User engagement</p>
            <p>→ Roof conversation</p>
            <p>→ Pitch / objection / sentiment</p>
            <p>→ Lead or appointment</p>
            <p>→ Customer status</p>
            <p>→ Daily and weekly review</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Screenshots" title="Redacted/demo screenshots to add before publishing.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/daily-summary.svg" title="Daily summary dashboard" />
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/goal-progress.svg" title="Goal progress and key metrics" />
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/engagement-entry.svg" title="Customer engagement entry" />
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/status-timeline.svg" title="Status and timeline" />
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/stats-graph.svg" title="Stats graph / weekly averages" />
          <CaseStudyScreenshot src="/screenshots/solar-tracker/demo/sentiments-objections.svg" title="Objection and sentiment categories" />
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-500">
          These are public-safe demo/redacted assets. Real customer names, phone numbers,
          addresses, and private notes are not included.
        </p>
      </Section>

      <Section eyebrow="Architecture" title="How the workflow turns field activity into sales intelligence.">
        <CaseStudyScreenshot src="/diagrams/solar-tracker-architecture.svg" title="Solar tracker workflow architecture" />
      </Section>

      <Section eyebrow="Features" title="The app tracks the operational signals that matter in a field-sales day.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {solarFeatures.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technical explanation" title="The system follows CRM logic: every conversation becomes a usable record.">
        <div className="max-w-4xl space-y-5 leading-8 text-slate-700">
          <p>
            The tracker is organized around manual mobile data entry and dashboard review. Each
            interaction can be logged with structured fields such as engagement type, demographic
            context, gender, customer status, sentiment, objection category, and store location.
          </p>
          <p>
            Those entries become daily summaries, weekly averages, graphable activity, and all-time
            performance views. The design makes the workflow automation-ready because the same
            structured fields could later connect to reminders, CRM updates, lead scoring, or AI coaching.
          </p>
          <p>
            I also added a small local CLI prototype to the repository. It can seed demo records,
            add activity entries, list recent interactions, generate summaries, and export CSV data.
            This keeps the portfolio honest: it demonstrates the workflow logic without pretending
            the project is a production CRM.
          </p>
        </div>
      </Section>

      <Section eyebrow="Business value" title="The value is better visibility, better follow-up, and better coaching data.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Accountability", "Daily goals and activity summaries make the work easier to review."],
            ["Funnel visibility", "Engagements, pitches, leads, and appointments show where conversion changes."],
            ["Coaching potential", "Objections, sentiments, and outcomes create data for future AI sales coaching."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="AI expansion roadmap" title="Future versions could add AI support without changing the core workflow.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["AI daily coaching", "Summarize the day, identify weak spots, and suggest tomorrow’s focus."],
            ["Lead scoring", "Score opportunities based on roof viability, customer status, sentiment, and appointment urgency."],
            ["Objection analysis", "Track top objections and suggest response frameworks for practice."],
            ["Follow-up automation", "Trigger reminders for callbacks, appointments, and interested-but-not-booked customers."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What I learned" title="A practical system starts with the workflow, not the model.">
        <div className="max-w-3xl space-y-5 leading-8 text-slate-700">
          <p>
            This project reinforced that useful AI and automation work starts by understanding the
            daily process. Before adding AI, the system needs clear fields, statuses, repeatable steps,
            and a way to review results.
          </p>
          <p>
            The tracker is a foundation for automation because it captures the signals that future
            workflows would need: engagement quality, objections, customer status, timing, and outcomes.
          </p>
        </div>
      </Section>

      <section className="border-t border-slate-200 bg-slate-100 px-5 py-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
          <strong className="text-slate-950">Disclaimer:</strong> This is an independent personal
          project built to improve my own field-sales workflow. It is not an official Sunrun product
          and should not include customer data in public screenshots or demos.
        </div>
      </section>
    </main>
  );
}
