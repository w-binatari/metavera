# Metavera Ltd — Website Design Document

## Overview

Metavera Ltd is a Nigerian real estate company requiring a professional marketing website that communicates credibility, modernity, and trust. The site should position Metavera as a serious player in the Nigerian property market — aspirational but accessible.

---

## Goals

- Establish brand credibility and professional presence online
- Showcase properties/projects clearly and attractively
- Generate leads (inquiries, site inspections, consultation requests)
- Work well on mobile (majority of Nigerian web traffic is mobile)

## Non-Goals

- Full property portal or listing search engine (Phase 1)
- Client portal / dashboard (Phase 1)
- Blog/news (can be added later)

---

## Reference Analysis

### Sujimoto (sujimotonig.com)
**What we borrow:** Cinematic hero section with full-screen video/image background. Bold, editorial typography. Premium feel. Strong use of white space. Dramatic project naming and copy tone.

**What we don't copy:** The ultra-luxury, niche positioning. Sujimoto targets the ultra-high-net-worth market — Metavera likely has a broader audience.

### Veritasi Homes (veritasihomes.com)
**What we borrow:** Structured project listings with filters (All / Completed / Under Construction). Stats bar (portfolio value, transactions closed, years active). Team section. Media/press logos section. Newsletter/footer structure. CTA lead capture popup.

**What we don't copy:** The heavy corporate depth (credit ratings, affiliate programs, investor portals) — that's a Phase 2+ concern.

### Greenpasture Homes (greenpasturehomes.com)
**What we borrow:** Site inspection booking form directly on the homepage. Clear estate-by-estate breakdown. Simple, friendly navigation. Testimonials section.

**What we don't copy:** The basic visual execution — Metavera should look more polished.

---

## Pages

### 1. Home (/)
- Hero: Full-screen image or video loop with headline + CTA ("Explore Our Properties" / "Book an Inspection")
- Stats bar: Key numbers (projects delivered, years active, clients served, etc.)
- Featured Projects: 3–4 cards with project name, location, status (Under Construction / Available / Sold Out)
- About Snippet: 2–3 sentence brand statement + "Learn More" link
- Why Choose Us: 3–4 icon + text blocks (Transparency, Quality, etc.)
- Book Inspection Form: Inline form (name, phone, email, estate of interest, preferred date)
- Testimonials: 2–3 client quotes
- Footer: Logo, nav links, social links, contact info

### 2. Projects (/projects)
- Filter tabs: All / Residential / Commercial / Land / Completed / Under Construction
- Grid of project cards: image, name, location, price range or "Contact for Price", status badge

### 3. Project Detail (/projects/[slug])
- Full image gallery
- Description, amenities, specifications
- Location map embed
- Lead capture form sidebar ("Express Interest")

### 4. About (/about)
- Brand story / founding narrative
- Mission & Vision
- Core Values
- Team section (photo, name, role)

### 5. Contact (/contact)
- Contact form
- Office address, phone, email
- Google Maps embed
- Social media links

---

## Design Direction

### Tone
Modern Nigerian luxury — not as extreme as Sujimoto, not as plain as Greenpasture. Think: confident, clean, warm.

### Color Palette (Proposed — adjust to match Metavera brand)
| Role | Color |
|------|-------|
| Primary (brand) | Deep Forest Green or Navy — TBD from brand assets |
| Accent | Gold / Warm Amber |
| Background | Off-white `#FAFAF8` |
| Text | Near-black `#1A1A1A` |
| Muted text | `#6B6B6B` |

> ⚠️ Confirm brand colors from Metavera's existing assets (logo, social media templates) before finalizing.

### Typography
- **Headings:** Serif (e.g. Playfair Display, Cormorant Garamond) — gives editorial, premium weight
- **Body:** Clean sans-serif (e.g. Inter, DM Sans) — readable, modern
- **Size scale:** Large hero headlines (56–72px desktop), generous line-height

### Imagery
- High-quality property photography is critical — if unavailable at launch, use premium stock (Unsplash, licensed)
- Avoid generic stock of smiling families; prefer architectural shots, aerial drone views, interior detail shots

### Motion / Interactions
- Subtle fade-ins on scroll (inspired by Sujimoto)
- Project card hover: slight image zoom + overlay CTA
- No heavy animations that slow mobile load

---

## Layout Structure (Homepage)

```
[NAV: Logo | Projects | About | Contact | CTA Button]

[HERO: Full-bleed video/image | Headline | Subtext | 2 CTAs]

[STATS BAR: X Projects | X Clients | X Years | X Cities]

[FEATURED PROJECTS: 3-col grid → horizontal scroll on mobile]

[ABOUT SNIPPET: Left text | Right image]

[WHY CHOOSE US: 3-col icon blocks]

[BOOK INSPECTION: Split section — left copy, right form]

[TESTIMONIALS: Carousel or 2-col quote cards]

[FOOTER: 4-col links + social + copyright]
```

---

## Technical Notes

- **Framework:** HTML/CSS/JS (static), or WordPress if client needs CMS control
- **Mobile-first:** Design for 375px width up — most visitors will be on mobile
- **Performance:** Optimize images (WebP format), lazy load below-the-fold content
- **Lead capture:** Form submissions should go to email (or a simple CRM like Notion / Google Sheets via webhook)
- **WhatsApp CTA:** Add floating WhatsApp button — standard for Nigerian real estate sites

---

## Open Questions

- [ ] What are Metavera's official brand colors and fonts?
- [ ] How many projects do they currently have to list?
- [ ] Do they need a CMS (can they update content themselves)?
- [ ] Is there a domain already?
- [ ] Do they want a WhatsApp chatbot or just a direct link?
- [ ] Any press/media features to include in a "Featured In" section?

---

## Deliverables (Phase 1)

- [ ] Homepage
- [ ] Projects listing page
- [ ] 1–2 Project detail pages
- [ ] About page
- [ ] Contact page
- [ ] Mobile-responsive across all pages
- [ ] Basic SEO (meta tags, OG images)
