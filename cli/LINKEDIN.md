# LinkedIn Portfolio CLI

A local drafting helper for Miguel's job-search positioning.

It generates LinkedIn copy for:

- headline
- About section
- Featured project description
- project announcement post
- recruiter/client DM
- target job keywords

## Commands

```bash
npm run linkedin -- headline
npm run linkedin -- about
npm run linkedin -- featured
npm run linkedin -- announce
npm run linkedin -- dm
npm run linkedin -- keywords
npm run linkedin -- all
```

Generated drafts are written to:

```text
exports/linkedin/
```

## Safety

This CLI does not post to LinkedIn. It only generates reviewable drafts.
