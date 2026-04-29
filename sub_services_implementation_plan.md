# Implementation Plan: Service Sub-Pages

This checklist outlines the steps required to implement the new sub-services feature, where clicking a principal service navigates to a dedicated page detailing its specific sub-services.

## 1. Data Structure Update
- [ ] Create or update a central data file (e.g., `constants/services.ts` or `lib/data/services.ts`) to store all 13 services.
- [ ] For each service, define:
  - `id` / `slug` (e.g., `droit-des-societes`, `droit-des-investissements`) for the URL.
  - `title` (The principal service name).
  - `subServices` (An array of strings containing the sub-services).
  - `icon` / `description` (If applicable for the main card).

## 2. Update Main Services Component
- [ ] Locate the component rendering the 13 principal services on the homepage (likely `components/Services.tsx` or similar).
- [ ] Wrap each service card with a Next.js `<Link>` component.
- [ ] Set the `href` to point to the dynamic route: `href={\`/services/\${service.slug}\`}`.
- [ ] Add visual cues (like a "Learn more" arrow or hover effect) indicating the card is clickable.

## 3. Create Dynamic Routing
- [ ] Create a new directory structure in the `app` folder: `app/services/[slug]/page.tsx`.
- [ ] Implement the page component to receive the `slug` from the URL parameters.
- [ ] Write logic to find the specific service data based on the `slug` from the central data file.
- [ ] Handle cases where the `slug` is not found (e.g., return a 404 page or redirect).

## 4. Implement Service Detail Page UI
- [ ] Build the layout for `app/services/[slug]/page.tsx`:
  - [ ] Add a "Back to Home" or "Back to Services" navigation link.
  - [ ] Display the principal service title prominently as the page `<h1>`.
  - [ ] Render the `subServices` array in a visually appealing list or grid.
  - [ ] Apply the site's design system (colors, typography, spacing) for a premium look.
  - [ ] Include a "Call to Action" (CTA) section (e.g., "Contact us for a consultation").

## 5. SEO & Metadata (Recommended)
- [ ] In `app/services/[slug]/page.tsx`, export a `generateMetadata` function.
- [ ] Dynamically generate the page title and description based on the specific service being viewed to improve SEO.
