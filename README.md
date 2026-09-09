# Metavera Ltd Website

Astro static marketing site for Metavera Ltd — structured for a future CMS (content collections for projects, team, and testimonials).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content (CMS-ready)

| Collection | Path | Purpose |
|---|---|---|
| Projects | `src/content/projects/*.md` | Listings + detail pages at `/projects/[slug]` |
| Team | `src/content/team/*.md` | About page leadership |
| Testimonials | `src/content/testimonials/*.md` | Homepage quotes |
| Site settings | `src/lib/site.ts` | Contact, social, stats, form endpoint |

Later: point these collections at Sanity / Contentful / Payload without rewriting page templates.

## Forms

Set `PUBLIC_FORM_ENDPOINT` in `.env` (see `.env.example`) to a Formspree, Web3Forms, or custom API URL. Without it, forms show a success toast only (dev fallback).

## Deploy

Configured for Vercel (`vercel.json` includes legacy `.html` redirects). Domain DNS → Vercel project.
