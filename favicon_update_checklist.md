# 🔖 Favicon Update Checklist

This checklist outlines the steps to replace the default favicon with the custom logo: `avocat-en-droit-immobilier.svg`.

## 🛠️ Phase 1: Preparation
- [x] **Verify Source Asset**: Ensure `public/avocat-en-droit-immobilier.svg` is optimized and has a square aspect ratio for best results.
- [x] **Backup Existing Favicon**: (Optional) Keep a copy of the original `public/favicon.svg`.

## 🚀 Phase 2: Implementation
- [x] **Asset Replacement**: Overwrite the content of `public/favicon.svg` with the content of `public/avocat-en-droit-immobilier.svg`.
- [x] **Metadata Update**: Update the `icons` field in `app/layout.tsx` metadata to explicitly reference the SVG favicon:
    ```typescript
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    }
    ```

## 🧪 Phase 3: Verification
- [ ] **Browser Hard Refresh**: Press `Ctrl + F5` (or `Cmd + Shift + R`) to clear the browser's icon cache.
- [ ] **Tab Verification**: Confirm the new logo appears in the browser tab.
- [ ] **Mobile Preview**: Inspect the site in mobile view to ensure the "Apple Touch Icon" placeholder is correct.
