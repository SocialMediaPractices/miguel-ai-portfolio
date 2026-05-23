# Solar Field Sales Intelligence Tracker CLI

A small local CLI prototype for the portfolio case study.

It demonstrates the operational model behind the Solar Field Sales Intelligence Tracker:
field interactions become structured records, then summaries, CSV exports, and future automation hooks.

## Privacy

Use demo data only. Do not enter real customer names, phone numbers, addresses, or private notes.

The default database is local JSON:

```text
data/solar-tracker/entries.json
```

## Commands

```bash
npm run tracker -- seed
npm run tracker -- list
npm run tracker -- summary
npm run tracker -- summary --all
npm run tracker -- export --out exports/solar-tracker-demo.csv
```

Add a demo entry:

```bash
npm run tracker -- add \
  --store "Demo Store #0421" \
  --type "roof conversation" \
  --status warm \
  --sentiment interested \
  --objection cost \
  --people 8 \
  --roofs 3 \
  --pitches 2 \
  --leads 1 \
  --appointments 1 \
  --notes "Demo data only"
```

## Portfolio value

This CLI is intentionally simple. It proves the workflow logic without pretending to be a production CRM:

1. Capture field-sales activity.
2. Store structured records.
3. Summarize daily/all-time performance.
4. Export to CSV.
5. Leave room for future AI coaching, lead scoring, and follow-up automation.
