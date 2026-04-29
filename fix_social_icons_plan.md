# Implementation Plan: Fix Missing Social Icons (Lucide-React)

This plan addresses the TypeScript errors in `src/components/Footer.tsx` caused by the removal of brand icons (`Linkedin`, `Facebook`) in `lucide-react` v1.11.0.

## Problem Analysis
- **Error**: `Module '"lucide-react"' has no exported member 'Linkedin'` and `'Facebook'`.
- **Cause**: Lucide-React v1+ does not include brand logos by design.
- **Goal**: Restore the icons using custom SVG implementations to maintain design integrity without adding new dependencies.

## Proposed Steps

### Step 1: Update Imports
- [x] Open `src/components/Footer.tsx`.
- [x] Remove `Linkedin` and `Facebook` from the `lucide-react` import statement.

### Step 2: Define Custom SVG Icons
- [x] Create a local definition for the LinkedIn icon (SVG).
- [x] Create a local definition for the Facebook icon (SVG).
- [x] Ensure they accept standard props like `size` and `className` to match other Lucide icons.

### Step 3: Update Footer JSX
- [x] Replace the `<Linkedin />` component call with the new custom component.
- [x] Replace the `<Facebook />` component call with the new custom component.
- [x] Verify that the styling (borders, hover effects) remains consistent.

### Step 4: Verification
- [x] Run `npx tsc --noEmit` to ensure all TypeScript errors are resolved.
- [x] Check the local dev server (http://localhost:5174/) to confirm the icons render correctly in the footer.

## Success Criteria
- Zero TypeScript errors in `src/components/Footer.tsx`.
- Social icons (LinkedIn and Facebook) are visible and styled correctly in the website footer.
