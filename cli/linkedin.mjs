#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, 'exports', 'linkedin');
const portfolioUrl = 'https://miguel-ai-portfolio.vercel.app';
const caseStudyUrl = `${portfolioUrl}/projects/solar-field-sales-intelligence-tracker`;
const linkedInUrl = 'https://www.linkedin.com/in/migueldelgadillojr';

function ensureOut() { fs.mkdirSync(outDir, { recursive: true }); }
function write(name, content) {
  ensureOut();
  const file = path.join(outDir, name);
  fs.writeFileSync(file, content.trim() + '\n');
  console.log(`Wrote ${file}`);
  return file;
}
function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t.startsWith('--')) {
      const k = t.slice(2); const n = argv[i + 1];
      if (!n || n.startsWith('--')) args[k] = true; else { args[k] = n; i++; }
    } else args._.push(t);
  }
  return args;
}

const headline = `AI Workflow Systems Builder | Sales Operations, Automation & LLM Integrations`;

const about = `I build practical AI workflow systems that connect sales operations, structured data, dashboards, and automation-ready processes.\n\nMy background is in field sales, customer operations, dispatch/admin workflows, CRM thinking, digital marketing, and hands-on AI systems. I focus on applied AI: turning real operational work into workflows people can use.\n\nRecent project: Solar Field Sales Intelligence Tracker — an independent mobile-first tracking app and CLI prototype built to improve my own retail solar sales workflow. It tracks daily activity, people engaged, roof conversations, pitches, leads, appointments, objections, sentiments, store context, and performance summaries.\n\nI’m interested in roles involving AI operations, workflow automation, LLM integrations, sales operations, CRM workflows, internal tools, and practical AI implementation.\n\nPortfolio: ${portfolioUrl}`;

const featured = `Solar Field Sales Intelligence Tracker\n\nIndependent personal project: a mobile-first field-sales tracking system for retail solar workflows.\n\nWhat it demonstrates:\n• Field-sales operations\n• CRM thinking\n• Dashboard design\n• Structured data collection\n• Workflow automation potential\n• Future AI coaching and lead-scoring roadmap\n\nCase study: ${caseStudyUrl}`;

const announcement = `I built and published a portfolio case study for a project I’ve been working on: Solar Field Sales Intelligence Tracker.\n\nIt’s an independent personal project built to improve my own retail solar field-sales workflow — not an official company product.\n\nThe idea is simple: field sales creates useful information every day, but most of it disappears unless it gets captured.\n\nThe tracker organizes activity like:\n• people engaged\n• roof conversations\n• pitches\n• leads\n• appointments\n• customer status\n• objections and sentiments\n• store/location context\n• daily goals and weekly summaries\n\nI also added a small local CLI prototype that can seed demo data, add activity entries, generate summaries, and export CSV files.\n\nThe long-term direction is AI coaching, lead scoring, objection analysis, and follow-up automation.\n\nThis is the lane I’m focused on: practical AI workflow systems, sales operations, CRM thinking, and automation-ready data.\n\nPortfolio case study: ${caseStudyUrl}`;

const recruiterDm = `Hi — I’m Miguel Delgadillo, based in San Diego. I’m looking for roles around AI workflow systems, AI operations, automation, LLM integrations, CRM workflows, or sales operations.\n\nI recently published a portfolio showing a practical field-sales tracking system and CLI prototype I built around my retail solar workflow. It demonstrates CRM thinking, dashboard design, structured data collection, and future AI automation potential.\n\nPortfolio: ${portfolioUrl}\nLinkedIn: ${linkedInUrl}`;

const jobKeywords = `AI Automation Specialist\nAI Operations Specialist\nWorkflow Automation Specialist\nLLM Integrations Specialist\nAI Implementation Specialist\nSales Operations Analyst\nCRM Automation Specialist\nRevOps Coordinator\nBusiness Operations Analyst\nCustomer Operations Automation\nInternal Tools Specialist\nAutomation Consultant\nNo-Code Automation Specialist\nn8n Automation Specialist\nZapier Automation Specialist\nMake.com Automation Specialist`;

function help() {
  console.log(`LinkedIn Portfolio CLI\n\nUsage:\n  npm run linkedin -- <command>\n\nCommands:\n  headline       Print recommended LinkedIn headline\n  about          Write LinkedIn About section draft\n  featured       Write Featured project description\n  announce       Write project announcement post\n  dm             Write recruiter/client DM draft\n  keywords       Write target job keywords\n  all            Generate all drafts\n\nOutput folder:\n  exports/linkedin/\n\nNote: this CLI only drafts copy. It does not post to LinkedIn.`);
}

const args = parseArgs(process.argv.slice(2));
const cmd = args._[0] || 'help';

if (cmd === 'headline') console.log(headline);
else if (cmd === 'about') write('about.txt', about);
else if (cmd === 'featured') write('featured-project.txt', featured);
else if (cmd === 'announce') write('announcement-post.txt', announcement);
else if (cmd === 'dm') write('recruiter-dm.txt', recruiterDm);
else if (cmd === 'keywords') write('job-keywords.txt', jobKeywords);
else if (cmd === 'all') {
  write('headline.txt', headline);
  write('about.txt', about);
  write('featured-project.txt', featured);
  write('announcement-post.txt', announcement);
  write('recruiter-dm.txt', recruiterDm);
  write('job-keywords.txt', jobKeywords);
} else help();
