ChatReply Landing Edits — Conversion & SEO Checklist

1) Added slim top banner with deadline and live slots left. Improves urgency and CTR.
2) Hero rewritten with Pain/Promise, clear primary CTA, and founding-member CTA.
3) Social proof: dynamic businesses-joined counter (rounded display) near CTAs.
4) Site-wide waitlist anchors: all early-access links target /waitlist#waitlist.
5) Kept all existing SEO metadata, JSON-LD, robots, and sitemap intact.
6) Server components used for banner and hero counters (no client-only hooks).
7) Accessible labels on banner CTA and waitlist form.
8) Copy includes keyword-rich phrases: "WhatsApp", "AI customer service", "24/7".
9) Internal linking: prominent links to /waitlist; preserved pricing/contact paths.
10) Performance: no extra libraries; minimal DOM changes; Tailwind styles reused.
11) Scarcity/urgency messaging: 87 total slots, Sept 12 deadline, days left.
12) Reward framing: founding members get 50% forever on Starter & Growth plans.
13) Consistent brand styles: existing card/focus-ring/brand colors.

## ChatReply SEO Implementation (Next.js 14 App Router)

Changes made:

- Central SEO config `src/lib/seo.ts` with site metadata, keywords, canonical, OG images.
- `src/app/layout.tsx` now sources Metadata from `seo.ts` and sets icons with cache-busting.
- Structured data injector `src/components/JsonLd.tsx` (client component).
- App Router SEO routes: `src/app/sitemap.ts` and `src/app/robots.ts` using canonical; weekly changefreq and priorities.
- Pricing page enhanced with SoftwareApplication + Offers JSON-LD, clearer copy.
- New `/faq` page with 8 questions and FAQPage JSON-LD.
- Internal links: CTA anchors to `#waitlist`, links among Home, Pricing, FAQ.
- Images use `next/image` with width/height and descriptive alt where applicable.
- Favicons: single source `/favicon-6.ico?v=6` and logo PNG. Cache-control must-revalidate set in `next.config.js`.

Verification checklist:

- Metadata
  - Title/description match DEFAULT_SEO
  - Canonical points to https://chatreply.online
  - OpenGraph/Twitter images resolve

- Structured Data
  - Home: WebSite + Organization (via JsonLd in Home if added)
  - Pricing: SoftwareApplication + Offers
  - FAQ: FAQPage with 8 Q&As

- Crawlability
  - `/sitemap.xml` returns routes with current `lastModified`
  - `/robots.txt` includes `Sitemap:` line and `Host:`

- Performance
  - next/image used with dimensions
  - No large libraries added
  - Icons cache-busted and headers set in `next.config.js`

Deployment steps:
1. Commit changes
2. Vercel → Redeploy with “Clear build cache”
3. Validate in Lighthouse (SEO ≥ 95), Core Web Vitals
4. Test structured data using Google Rich Results Test


