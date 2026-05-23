#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const dataDir = path.join(repoRoot, 'data', 'solar-tracker');
const defaultDb = path.join(dataDir, 'entries.json');
const dbPath = process.env.SOLAR_TRACKER_DB || defaultDb;

const STATUSES = ['new', 'warm', 'lead', 'appointment', 'follow-up', 'not-qualified', 'closed'];
const SENTIMENTS = ['interested', 'curious', 'neutral', 'skeptical', 'not-interested'];
const OBJECTIONS = ['cost', 'timing', 'spouse', 'already-solar', 'not-homeowner', 'trust', 'other'];

function ensureDb() {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
}

function readEntries() {
  ensureDb();
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function writeEntries(entries) {
  ensureDb();
  fs.writeFileSync(dbPath, JSON.stringify(entries, null, 2) + '\n');
}

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (!next || next.startsWith('--')) args[key] = true;
      else { args[key] = next; i++; }
    } else args._.push(token);
  }
  return args;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function id() {
  return `st_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

function number(value, fallback = 0) {
  const n = Number(value ?? fallback);
  return Number.isFinite(n) ? n : fallback;
}

function add(args) {
  const entries = readEntries();
  const entry = {
    id: id(),
    date: args.date || today(),
    store: args.store || 'Demo Store',
    engagementType: args.type || 'conversation',
    status: args.status || 'new',
    sentiment: args.sentiment || 'neutral',
    objection: args.objection || 'other',
    people: number(args.people, 1),
    roofs: number(args.roofs, 0),
    pitches: number(args.pitches, 0),
    leads: number(args.leads, 0),
    appointments: number(args.appointments, 0),
    demographic: args.demographic || 'not-specified',
    gender: args.gender || 'not-specified',
    notes: args.notes || '',
    createdAt: new Date().toISOString(),
  };
  entries.push(entry);
  writeEntries(entries);
  console.log(`Added ${entry.id}`);
  printEntry(entry);
}

function printEntry(e) {
  console.log(`${e.date} | ${e.store} | ${e.status} | people=${e.people} roofs=${e.roofs} pitches=${e.pitches} leads=${e.leads} appts=${e.appointments} | sentiment=${e.sentiment} objection=${e.objection}`);
}

function list(args) {
  let entries = readEntries();
  if (args.date) entries = entries.filter(e => e.date === args.date);
  if (args.store) entries = entries.filter(e => e.store.toLowerCase().includes(String(args.store).toLowerCase()));
  const limit = number(args.limit, 20);
  entries.slice(-limit).forEach(printEntry);
  if (!entries.length) console.log('No entries found.');
}

function sumBy(entries, key) {
  return entries.reduce((sum, e) => sum + number(e[key], 0), 0);
}

function top(entries, key) {
  const counts = new Map();
  for (const e of entries) counts.set(e[key] || 'unknown', (counts.get(e[key] || 'unknown') || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
}

function summary(args) {
  let entries = readEntries();
  const selectedDate = args.date || today();
  if (!args.all) entries = entries.filter(e => e.date === selectedDate);
  if (args.store) entries = entries.filter(e => e.store.toLowerCase().includes(String(args.store).toLowerCase()));
  const people = sumBy(entries, 'people');
  const roofs = sumBy(entries, 'roofs');
  const pitches = sumBy(entries, 'pitches');
  const leads = sumBy(entries, 'leads');
  const appointments = sumBy(entries, 'appointments');
  console.log(args.all ? 'All-time summary' : `Summary for ${selectedDate}`);
  console.log(`Entries: ${entries.length}`);
  console.log(`People: ${people}`);
  console.log(`Roofs: ${roofs}`);
  console.log(`Pitches: ${pitches}`);
  console.log(`Leads: ${leads}`);
  console.log(`Appointments: ${appointments}`);
  console.log(`Lead rate: ${people ? ((leads / people) * 100).toFixed(1) : '0.0'}%`);
  console.log(`Appointment rate: ${people ? ((appointments / people) * 100).toFixed(1) : '0.0'}%`);
  console.log('Top sentiments:', top(entries, 'sentiment').map(([k, v]) => `${k} (${v})`).join(', ') || 'none');
  console.log('Top objections:', top(entries, 'objection').map(([k, v]) => `${k} (${v})`).join(', ') || 'none');
}

function exportCsv(args) {
  const entries = readEntries();
  const out = args.out || path.join(repoRoot, 'exports', `solar-tracker-${Date.now()}.csv`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const columns = ['id','date','store','engagementType','status','sentiment','objection','people','roofs','pitches','leads','appointments','demographic','gender','notes','createdAt'];
  const escape = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
  const csv = [columns.join(','), ...entries.map(e => columns.map(c => escape(e[c])).join(','))].join('\n') + '\n';
  fs.writeFileSync(out, csv);
  console.log(`Exported ${entries.length} entries to ${out}`);
}

function seed() {
  const demo = [
    { date: today(), store: 'Demo Store #0421', engagementType: 'roof conversation', status: 'warm', sentiment: 'interested', objection: 'cost', people: 12, roofs: 5, pitches: 4, leads: 2, appointments: 1, demographic: 'homeowner', gender: 'not-specified', notes: 'Demo data only' },
    { date: today(), store: 'Demo Store #0421', engagementType: 'quick pitch', status: 'follow-up', sentiment: 'curious', objection: 'spouse', people: 15, roofs: 7, pitches: 5, leads: 2, appointments: 1, demographic: 'homeowner', gender: 'not-specified', notes: 'Demo data only' },
    { date: today(), store: 'Demo Store #0177', engagementType: 'qualification', status: 'not-qualified', sentiment: 'neutral', objection: 'not-homeowner', people: 10, roofs: 1, pitches: 1, leads: 0, appointments: 0, demographic: 'renter', gender: 'not-specified', notes: 'Demo data only' },
  ].map(e => ({ id: id(), createdAt: new Date().toISOString(), ...e }));
  writeEntries(demo);
  console.log(`Seeded ${demo.length} demo entries. No customer data included.`);
}

function reset() {
  writeEntries([]);
  console.log('Reset database.');
}

function help() {
  console.log(`Solar Field Sales Intelligence Tracker CLI\n\nUsage:\n  npm run tracker -- <command> [options]\n\nCommands:\n  add       Add a field-sales activity entry\n  list      List recent entries\n  summary   Show daily or all-time summary\n  export    Export entries to CSV\n  seed      Replace database with safe demo data\n  reset     Clear local database\n\nExamples:\n  npm run tracker -- seed\n  npm run tracker -- summary --all\n  npm run tracker -- add --store "Demo Store" --people 8 --roofs 3 --pitches 2 --leads 1 --appointments 1 --sentiment interested --objection cost\n  npm run tracker -- export --out exports/solar-tracker-demo.csv\n\nAllowed sentiments: ${SENTIMENTS.join(', ')}\nAllowed objections: ${OBJECTIONS.join(', ')}\nAllowed statuses: ${STATUSES.join(', ')}\n\nPrivacy note: use demo data only. Do not enter real customer names, phone numbers, or addresses.`);
}

const args = parseArgs(process.argv.slice(2));
const command = args._[0] || 'help';

try {
  if (command === 'add') add(args);
  else if (command === 'list') list(args);
  else if (command === 'summary') summary(args);
  else if (command === 'export') exportCsv(args);
  else if (command === 'seed') seed(args);
  else if (command === 'reset') reset(args);
  else help();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
