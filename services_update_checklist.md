# Services and Copy Update Checklist

## 1. Hero / Header Text Updates
- [x] Locate the main header or hero section where the current title and subtitles are defined (likely in `app/page.tsx` or `components/Hero.tsx`).
- [x] Replace "Votre Avocat Conseil en Tunisie" with "Avocat a Ariana".
- [x] Consolidate or replace "Maitre Yosra Abidi" and "Expertise Immobilière" to match the requested format: "avocat a ariana Maitre Yosra Abidi". (Suggestion: use proper capitalization like "Avocat à Ariana - Maître Yosra Abidi" for better presentation).

## 2. Services Section Update
- [x] Locate the Services component (e.g., `components/Services.tsx` or `app/page.tsx`).
- [x] Replace the existing real-estate-only services with the following 13 principal services:
  - [x] 1. **Droit des Sociétés & Fusions-Acquisitions**
  - [x] 2. **Droit des Investissements**
  - [x] 3. **Droit Bancaire, Finance & Marchés des Capitaux**
  - [x] 4. **Droit des Assurances & Réassurance**
  - [x] 5. **Droit du Financement de Projets & Partenariats Public-Privé**
  - [x] 6. **Droit du Contentieux & Arbitrage**
  - [x] 7. **Droit de la Concurrence, de la Consommation & Distribution**
  - [x] 8. **Droit du Travail & Protection Sociale**
  - [x] 9. **Droit Fiscal**
  - [x] 10. **Droit Immobilier, Construction & Tourisme**
  - [x] 11. **Droit des Télécommunications & Nouvelles Technologies**
  - [x] 12. **Droit de la Propriété Intellectuelle & Protection des Données**
  - [x] 13. **Droit du Sport**
- [x] Update the layout to accommodate 13 items instead of the previous layout (e.g., use a responsive CSS grid).
- [x] Update or temporarily remove icons/descriptions for each service so they match the new list.

## 3. Global Text & SEO Updates
- [x] Update `<title>` and `<meta name="description">` tags in `app/layout.tsx` or individual pages to reflect "Avocat à Ariana | Maître Yosra Abidi".
- [x] Ensure "Expertise Immobilière" is no longer the sole focus anywhere on the site.

## 4. Final Review
- [ ] Check mobile responsiveness for the new 13-item grid.
- [ ] Verify spelling and layout in the browser.
