# Fiza — Portfolio Site

Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Run locally
```
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy
Push to GitHub, then import the repo in Vercel (same flow as your existing site). No extra config needed — Vercel auto-detects Next.js.

## Where to edit content
Almost everything is in one file: **`src/data/content.ts`**. Update project details, skills, experience bullets, and contact links there rather than in the components.

## Placeholders to fill in before launch
Search the codebase for `[` to find them, or check here:
- `education.expectedGraduation` — expected graduation year
- `projects` → Trendora: `github`, `liveUrl`
- `projects` → Cart Abandonment Prediction: `liveUrl` (currently a "coming soon" placeholder for when the Flask app is deployed)

## Structure
- `src/data/content.ts` — all real content (single source of truth)
- `src/components/` — Navbar, Hero, About, Skills, Work, Experience, Contact, Footer
- `src/components/ui/` — shared Button and SectionHeading primitives
- `src/app/globals.css` — color tokens, fonts, base styles
