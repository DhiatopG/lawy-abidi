# Implementation Plan: Resolve TypeScript Resolution and Unused Variable Errors

This plan outlines the steps to fix the TypeScript errors reported in the IDE for the `src/App.tsx` file and other components.

## Problem Description
The IDE (VS Code or similar) reports:
1. `Cannot find module './components/Header' or its corresponding type declarations.` (and similar for other components).
2. `'React' is declared but its value is never read.`

## Root Cause Analysis
- **Unused React**: The project is configured with `react-jsx` (React 17+ transform), which means `import React from 'react'` is no longer required for JSX. Since the project has strict linting/compiler rules (`noUnusedLocals`), these imports trigger errors.
- **Module Resolution**: The "Cannot find module" errors in the IDE are likely due to a synchronization issue between the IDE's TypeScript language server and the `moduleResolution: "bundler"` setting in `tsconfig.app.json`. While `tsc` passes in the terminal, the IDE needs a more explicit path or a standard import style.

## Proposed Steps

### Step 1: Fix Unused React Imports
Remove the `import React from 'react'` line from all components where it is not explicitly used for anything other than JSX.
- **Files to update**:
- [x] `src/App.tsx`
- [x] `src/components/Header.tsx` (Convert to `import { useState, useEffect } from 'react'`)
- [x] `src/components/Hero.tsx`
- [x] `src/components/Expertise.tsx`
- [x] `src/components/SocialProof.tsx`
- [x] `src/components/Footer.tsx`

### Step 2: Fix Module Resolution Warnings
To help the IDE resolve the modules correctly:
- [x] Ensure the IDE is using the workspace version of TypeScript.
- [x] If the warning persists, try adding `.tsx` extensions to the imports in `App.tsx` (e.g., `import Header from './components/Header.tsx'`), which is supported by the current `tsconfig` setting `allowImportingTsExtensions: true`.

### Step 3: Verification
- [x] Run `npx tsc --noEmit` in the terminal to confirm that the changes haven't introduced any real compilation errors.
- [x] Verify that the dev server (Vite) correctly reloads the application.

## Success Criteria
- No red squiggly lines in the IDE for `src/App.tsx`.
- The terminal remains clear of TypeScript errors.
- The application continues to function normally at `http://localhost:5174/`.
