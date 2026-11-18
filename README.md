# Luma landing page

Buzzvel Front-End Engineer coding challenge: a responsive page built from the Figma design with Next.js App Router, TypeScript and Tailwind CSS.

**Live preview:** https://luma.rubensrafael.com

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/RubensRafael/buzzvel.git
cd buzzvel
npm install
npm run build
npm start
```

Open http://localhost:3000.

## Key decisions

- **Code organization:** one component per section, shared pieces (`Button`, `SectionHeading`, `Eyebrow`) in `components/ui`, and the page copy in constants at the top of each file.
- **Breakpoints:** mobile-first, with the desktop layout from `xl` (1280px, the Figma desktop width). At 768px the courses grid goes to two columns, the Hero and Featured photos use the desktop size and the final CTA buttons sit side by side.
- **Accessibility:** alt text on content images (the collage) and `alt=""` on images described by the text next to them and on decorative shapes. Visible focus on every background, labelled form fields with a required marker, and smooth scrolling only when reduced motion is not requested.
- **Links:** `next/link` everywhere. Links go to a matching section, or to the route the page would have (`/login`, `/courses/...`), which shows a custom 404.
- **Not defined in Figma:** the open mobile menu, sticky header, favicon, metadata and Open Graph image, and the contact form's loading and success states (the form is a mock, since no backend is required). The rating stars use the design's mustard instead of the light yellow, which almost disappears on white.

## Design inconsistencies

Where the Figma file disagrees with itself. To compare with the Figma exports, use a layout width of exactly 1280px or 402px: a visible scrollbar takes about 16px and shifts the right-hand columns.

- Copy: the mobile contact form is in Portuguese and the students and teachers paragraph is lorem ipsum; English and real copy are used.
- Steps: the desktop frame repeats "Step 01", and step 2 has different copy (mobile adds "actually", a third line on desktop) and icon color between frames. The page uses 01, 02, 03 and the desktop copy and icon.
- Some spacing and colors differ between sections or frames (eyebrow to title gap, footer and contact colors, text overflowing its box, buttons 52, 52.5 or 54px tall). The page follows the most common value, which leaves 1–3px differences.
- A 40px circle on the desktop final CTA is almost entirely outside the section (2px visible); it was left out.

## Known gaps

- In Figma, the Featured course, Testimonial and students and teachers sections are 16px wider than the 1120px container used elsewhere. The page keeps 1120px, so the two-column sections use 530px columns instead of 538px and the Testimonial numbers sit 15px further left.

## Time spent

About 18 hours over 2 days (Nov 16–17), including planning, design review and testing.

## AI tools

Claude Code was used throughout the challenge: planning the work in phases, reading measurements from the Figma API and writing one section at a time. Each phase was reviewed before moving on: compared with Figma at several widths, keyboard and form tested by hand, and the code read until every decision was clear. Lighthouse and a production build were run before submitting.
