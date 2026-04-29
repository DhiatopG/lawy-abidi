# 🛠️ Hydration Mismatch Fix Checklist

This checklist outlines the steps to resolve the console error: *"A tree hydrated but some attributes of the server rendered HTML didn't match the client properties."*

## 🔍 Phase 1: Diagnosis
- [x] **Verify `app/layout.tsx`**: Check if the `<html>` tag has any dynamic attributes or if the `lang` attribute is determined by a variable. (Verified: Hardcoded `lang="fr"`)
- [x] **Check `next.config.js`**: Look for `i18n` configurations that might be setting a default locale to `en` while the layout uses `fr`. (Verified: No `i18n` config found)
- [x] **Inspect `middleware.ts`**: (If exists) Check if there is logic redirecting or setting cookies/headers related to language (`NEXT_LOCALE`). (Verified: File does not exist)
- [x] **Review Metadata**: Ensure `export const metadata` or `generateMetadata` in the root layout isn't conflicting with the manual `lang` attribute. (Verified: `locale: "fr_FR"` matches `lang="fr"`)

## 🛠️ Phase 2: Implementation
- [x] **Apply `suppressHydrationWarning`**: Add this attribute to the `<html>` tag in `app/layout.tsx` to ignore attribute mismatches caused by browser extensions (like Google Translate).
- [x] **Sync Language Config**: Ensure the `lang` attribute in `layout.tsx` matches the primary locale defined in `next.config.js`.
- [x] **Verify Tag Nesting**: Double-check that no invalid HTML nesting exists (e.g., `<p>` inside `<p>`, or `<div>` inside `<span>`) which can also trigger hydration warnings.

## 🧪 Phase 3: Validation
- [x] **Clear Browser Cache/Cookies**: Ensure no stale locale cookies are affecting the client-side render.
- [x] **Test with Extensions Disabled**: Open the site in an Incognito window to verify the error disappears when Google Translate is inactive.
- [x] **Production Build Test**: Run `npm run build && npm run start` to ensure the fix persists in the optimized production environment.
