# LogisticsFlow Website

A premium, dark-theme logistics business website demo built with Astro, TypeScript, and Tailwind CSS.

LogisticsFlow is designed as a portfolio-quality project that demonstrates production-aware frontend architecture, conversion-focused UX, and scalable implementation patterns for future SaaS evolution.

## Project Overview

LogisticsFlow simulates a modern logistics and freight company website focused on:

- premium visual quality
- service credibility and conversion
- interactive shipment tracking demo
- typed validation and maintainable architecture
- future backend integration boundaries

This is a demo project with realistic UX and content direction, not a live production operator.

## Stack

- Astro (static-first rendering)
- TypeScript
- Tailwind CSS
- Zod (form validation)

## Key Features

- Dark enterprise-grade UI with layered gradients, card depth, and refined hover interactions
- Full multi-page website structure
- Sticky responsive navigation with mobile menu interaction
- Modular reusable component system
- Interactive shipment tracking demo with:
  - strict tracking code validation
  - mocked local tracking dataset
  - loading, error, and success states
  - timeline rendering with status progression
- Contact form architecture with:
  - typed form model
  - client-side validation with Zod
  - inline field errors
  - honeypot field support
  - endpoint integration boundary for Formspree, serverless, or custom API
- SEO foundations:
  - per-page metadata
  - Open Graph and Twitter cards
  - canonical URLs
  - robots.txt
  - Astro sitemap integration

## Pages

- `/` Home
- `/services` Services
- `/about` About
- `/tracking` Tracking
- `/contact` Contact
- `/privacy` Privacy
- `/terms` Terms
- `/404` Not Found

## Tracking Demo Architecture

Tracking is implemented for clean future API replacement:

- data source: `src/data/trackingDemo.ts`
- code validator: `src/lib/tracking/validateTrackingCode.ts`
- lookup helper: `src/lib/tracking/getTrackingRecord.ts`
- UI components:
  - `src/components/tracking/TrackingForm.astro`
  - `src/components/tracking/TrackingResultCard.astro`
  - `src/components/tracking/TrackingTimeline.astro`

To switch to a backend API later:

1. Keep `TrackingForm.astro` UI as-is.
2. Replace local lookup with API request in the submit handler.
3. Maintain server-side validation and response normalization.

## Project Structure

```text
.
|-- public/
|   |-- favicon.svg
|   |-- images/
|   |   `-- og/logisticsflow-og.svg
|   `-- robots.txt
|-- src/
|   |-- components/
|   |   |-- about/
|   |   |-- common/
|   |   |-- contact/
|   |   |-- home/
|   |   |-- layout/
|   |   |-- services/
|   |   `-- tracking/
|   |-- data/
|   |-- lib/
|   |-- pages/
|   |-- styles/
|   `-- types/
|-- docs/
|   `-- deployment-hardening.md
|-- astro.config.mjs
|-- package.json
|-- tailwind.config.mjs
`-- tsconfig.json
```

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build production output:

   ```bash
   npm run build
   ```

4. Optional type and Astro diagnostics:

   ```bash
   npm run check
   ```

## Environment Variables

Use `.env.example` as reference:

- `PUBLIC_SITE_URL`: canonical site origin
- `PUBLIC_CONTACT_ENDPOINT`: optional contact submission endpoint
- `TURNSTILE_SITE_KEY`: reserved for future bot mitigation integration

## Performance Notes

- Static-first architecture with minimal client-side JavaScript
- Interactivity scoped only to tracking and contact flows
- Utility-first styling with reusable tokens and components
- SVG assets for favicon and OG image
- Avoidance of heavy UI/animation libraries

## Security Notes

Frontend-aware hardening already included:

- no secrets in client code
- strong client-side input constraints
- no unsafe HTML injection patterns
- isolated validation helpers
- architecture ready for server-side revalidation

Recommended production hardening is documented in:

- `docs/deployment-hardening.md`

## Deployment Notes

Works with static-friendly platforms such as Netlify, Vercel, and Cloudflare Pages.

Before deployment:

1. Set `PUBLIC_SITE_URL` to your real domain.
2. Configure `PUBLIC_CONTACT_ENDPOINT` if form submission is enabled.
3. Apply server-side protections and headers from `docs/deployment-hardening.md`.

## Future Roadmap

- Real shipment tracking API integration
- Authentication and customer portal
- Admin dashboard for shipment management
- CRM integration for lead routing
- Quote request workflow with backend persistence
- Multilingual content support
- CMS content model for services and testimonials
- Analytics with privacy-aware consent handling
