# 🚀 Next.js Migration Checklist (Option A)

This checklist outlines the steps to migrate the **Avocat Abidi** website from Vite to Next.js to achieve "Best-in-Class" SEO and a professional blog system.

## 1. Project Initialization & Setup
- [x] **Initialize Next.js**: Create a new Next.js project using `npx create-next-app@latest`.
- [x] **Configure Tailwind**: Sync the `tailwind.config.js` and `postcss.config.js` with current settings.
- [x] **Global Styles**: Move contents of `src/index.css` to `app/globals.css`.
- [x] **Google Fonts**: Implement fonts using `next/font/google` for better performance.

## 2. Component Migration
- [x] **Port Shared Components**: Move all files from `src/components/` to a new `/components` directory.
- [x] **Add 'use client' Directives**: Identify components with interactivity (hooks, event listeners) and add the `'use client'` directive at the top.
- [x] **Image Optimization**: Replace standard `<img>` tags with `next/image` for automatic optimization and lazy loading.

## 3. Core Layout & Routing
- [x] **Main Layout (`app/layout.tsx`)**: 
    - Include `Header` and `Footer` here to avoid re-rendering between pages.
    - Setup the base HTML structure (`<html>`, `<body>`).
- [x] **Landing Page (`app/page.tsx`)**:
    - Migrate the logic from `src/App.tsx` into the main page file.
    - Assemble `Hero`, `Expertise`, `SocialProof`, and `Location`.

## 4. SEO Excellence (The "H1" Fix)
- [x] **Static Metadata**: Define site-wide metadata (title, description, OG tags) in `layout.tsx`.
- [x] **Page-Specific Metadata**: Implement unique titles/descriptions for the Home page and Blog pages.
- [x] **Verification**: Run `npm run build` and verify that the `h1` is visible in the raw HTML source code.

## 5. Blog System Implementation
- [x] **Blog Directory**: Create `app/blog/page.tsx` for the blog archive. (Structure Ready)
- [x] **Dynamic Routes**: Create `app/blog/[slug]/page.tsx` for individual articles. (Structure Ready)
- [ ] **Content Management**: 
    - Option 1: Markdown/MDX (Local files).
    - Option 2: Headless CMS (Sanity, Strapi, etc.).
- [ ] **Structured Data**: Implement JSON-LD schema for each blog post to get rich snippets in Google.

## 6. Optimization & Cleanup
- [x] **Middleware**: Setup redirects if moving from old URLs. (Not applicable)
- [x] **Remove Vite Files**: Delete `vite.config.ts`, `main.tsx`, and `index.html`.
- [x] **Build Test**: Run `next build` to ensure all pages are statically generated for maximum SEO.

---
**Note:** We will proceed with these steps one by one to ensure no design details are lost during the transition.
