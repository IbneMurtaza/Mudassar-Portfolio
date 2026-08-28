# Muhammad Mudassar — Portfolio

Personal portfolio for Muhammad Mudassar, Senior iOS Developer. Built with
Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, Turbopack, Server Components by default)
- TypeScript, strict mode
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- `next/font` for self-hosted Space Grotesk, Newsreader and JetBrains Mono
- `next/og` for a generated favicon, apple touch icon and Open Graph image

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/            Routes, layout, metadata, generated icons/OG image
  components/
    layout/       Navbar (scroll-spy), Footer
    sections/     One component per page section (Hero, About, Record, …)
    ui/           Small reusable primitives (Button, Chip, Reveal, …)
  data/           All page content — see "Content" below
  hooks/          Scroll-spy, count-up, and scroll-reveal hooks
  lib/            cn() class-name helper
public/
  resume/         Muhammad-Mudassar-CV.pdf, linked from the Contact section
  projects/       Project screenshots, one folder per app (see below)
  portrait.jpeg   Hero photo, referenced by profile.portraitSrc
```

## Content

All copy, links and structured data live in `src/data/*.ts` — nothing is
hardcoded in the components. Update these files instead of the JSX:

| File | Controls |
| --- | --- |
| `profile.ts` | Name, title, contact info, hero tagline, about paragraphs |
| `stats.ts` | The four "Record" counters |
| `skills.ts` | Toolkit chip groups |
| `experience.ts` | Job history and its bullets/links |
| `projects.ts` | Project cards |
| `education.ts` | Education list and the "Beyond" interest cards |
| `nav.ts` | Nav pill labels/order |
| `config.ts` | Two toggles: `animateCounters`, `projectLayout` |

Content was sourced from the provided CV. The LinkedIn profile URL is linked
from the Contact section, but its content could not be fetched automatically
(LinkedIn requires a login to view profiles), so nothing from LinkedIn was
merged in — verify the CV-derived copy against LinkedIn yourself and adjust
`src/data/*.ts` if anything's out of date.

Project screenshots (`public/projects/*`, referenced from `projects.ts`
`shots` fields) are the official App Store marketing screenshots for
GrocerApp, AgeWiser AI, CareWiser and NinjaHR, fetched via Apple's public
iTunes lookup API. They're marketing images (each with its own baked-in
device frame and brand color), not raw screen captures — that's why
`ProjectCard`'s screenshot tiles are plain rounded image cards rather than a
simulated phone bezel. Ride Safr and Drive Safr have no App Store listing, so
they're shown without screenshots rather than with placeholders.

## Still needed before shipping

- **`metadataBase` / canonical URL** — `src/app/layout.tsx`,
  `src/app/robots.ts` and `src/app/sitemap.ts` use a placeholder domain
  (`muhammadmudassar.dev`). Point them at your real domain once you have one.
- **Contact form** — has client-side validation and hands off to a `mailto:`
  link (no backend required). Swap in a real form provider (Resend,
  Formspree, etc.) if you'd rather not rely on the visitor's mail client.

## Design fidelity notes

The layout, spacing, typography scale and color tokens were ported
pixel-for-pixel from the original Claude Design reference (see the design
tokens in the `@theme`/`:root` blocks of `globals.css`). A few deliberate
departures from the reference:

- No icon library dependency — a handful of Unicode glyphs (`↗`, `—`, `↑`)
  cover what the design needed, to avoid a dependency for three characters.
- Section entrances (fade/rise on scroll) were added beyond the reference,
  respecting `prefers-reduced-motion`.
- The reference's design-tool "component props" (`animateCounters`,
  `projectLayout`) became the plain constants in `src/data/config.ts`.
