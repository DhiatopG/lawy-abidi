# Implementation Plan: Service Sub-Pages

This checklist outlines the steps required to implement the new sub-services feature, where clicking a principal service navigates to a dedicated page detailing its specific sub-services.

## 1. Data Structure Update ✅
- [x] Create or update a central data file → `lib/data/services.ts`
- [x] For each service, defined:
  - `slug` (e.g., `droit-des-societes`, `droit-des-investissements`) for the URL.
  - `title` (The principal service name).
  - `subServices` (An array of strings containing the sub-services).
  - `icon` & `description` (Used for the main card and detail page).

## 2. Update Main Services Component ✅
- [x] `components/Expertise.tsx` now imports data from `lib/data/services.ts`.
- [x] Each service card is wrapped with a Next.js `<Link>` component.
- [x] `href` points to the dynamic route: `/services/${service.slug}`.
- [x] Visual cues added: "En savoir plus" label animates in on hover + arrow button changes color on hover.

## 3. Create Dynamic Routing ✅
- [x] Created `app/services/[slug]/page.tsx`.
- [x] Page receives the `slug` from URL params (async `params` pattern for Next.js 16).
- [x] Logic finds the specific service from the central data file by slug.
- [x] Returns `notFound()` for unknown slugs (automatic 404 page).

## 4. Implement Service Detail Page UI ✅
- [x] "Back to Services" navigation link with animated arrow.
- [x] Principal service title displayed as the page `<h1>`.
- [x] `subServices` rendered in a responsive 2-column checklist grid with hover effects.
- [x] Full site design system applied (colors, typography, spacing, animations).
- [x] CTA section with phone call button and contact form link.

## 5. SEO & Metadata ✅
- [x] `generateMetadata()` exported — generates unique `title`, `description`, `keywords`, `openGraph`, and `twitter` tags per service.
- [x] `generateStaticParams()` exported — all 13 service pages are pre-rendered as static HTML at build time.
