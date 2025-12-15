# PitchBook — Stock Pitch Blog

A clean, fast, mobile-friendly stock pitch blog built with Next.js (App Router) and MDX. Posts are organized with tags and tied to a transparent pitch ledger that tracks publish dates, tickers, thesis summaries, and prices.

## Pages
- **Home**: Hero, latest posts, ledger snapshot, newsletter placeholder.
- **Posts**: All MDX posts with tags.
- **Pitch Ledger**: Table of all pitches with publish date, ticker, thesis, price, and a link to the full write-up.
- **About** and **Disclosures**: Static pages for context and compliance.
- **RSS**: `/rss.xml` feed generated from posts.

## Prerequisites
- Node.js 18+ (matches the Next.js 14 runtime)
- npm installed (comes with Node)
- Access to the npm registry (or configure your private registry)

## Getting started (local)
1. Install dependencies
   ```bash
   npm install
   ```
   > If your environment blocks npm registry access, set an allowed registry or fetch dependencies through your proxy first.
2. Run the dev server
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to browse the site.
4. Use `npm run lint` before committing to catch common issues.

## Writing posts
1. Add a new `.mdx` file under `content/posts`.
2. Include frontmatter:
   ```mdx
   ---
   title: Title here
   date: YYYY-MM-DD
   tags: [growth, software]
   ticker: TICK
   thesis: One-line thesis
   priceAtPublish: "$123.45"
   excerpt: Optional short teaser
   ---
   ```
3. Use Markdown/MDX for the body. Tags automatically show up on the listing and RSS feed.

## Updating the pitch ledger
1. Open `lib/pitches.ts`.
2. Add a new `Pitch` object to the `pitchLedger` array with `date`, `ticker`, `thesis`, `priceAtPublish`, and `slug` (matching the post filename without `.mdx`).
3. The ledger table on `/pitches` and previews on the home page will update automatically.

## Configuring site metadata and RSS
1. Edit `lib/site.ts` to update the site name, description, and `url` (use your production domain for correct RSS links).
2. RSS lives at `/rss.xml` and is generated from the MDX post metadata.

## Newsletter placeholder
- The form is a placeholder component in `components/newsletter.tsx`. Swap the `handleSubmit` implementation with your email platform (e.g., Resend, ConvertKit, Mailchimp) or embed their script.

## Styling notes
- Global styles live in `app/globals.css`. Tweak typography, spacing, or color tokens here.
- Components live under `components/`; page layouts are in `app/` using the Next.js App Router.

## Deploying to Vercel
1. Create a new Vercel project and import this repo.
2. Set **Framework Preset** to **Next.js**.
3. No extra environment variables are required. The default build command (`npm run build`) and output (`.next`) work out of the box.
4. Add a **Production Domain** (e.g., `yourdomain.com`) and set `siteConfig.url` in `lib/site.ts` to the production URL for correct RSS links.
5. Trigger a deploy; Vercel will handle build, static generation, and edge caching automatically.

## Scripts
- `npm run dev` — start the local dev server.
- `npm run build` — production build.
- `npm start` — serve the production build.
- `npm run lint` — lint the project.
