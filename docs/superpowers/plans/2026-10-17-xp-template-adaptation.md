# XP Portfolio Adaptation Implementation Plan

**Goal:** Replace the previous portfolio with the exact upstream XP template personalized for Domenico Avino.

**Architecture:** Reuse upstream Vite/React/TypeScript components and original assets; provide Italian/English JSON content and a small locale state in App. Publish the Vite dist directory through existing GitHub Pages Actions.

**Spec:** docs/superpowers/specs/2026-10-17-xp-template-adaptation.md

## Constraints
- Preserve upstream visual layout, colors, wallpaper, controls and fonts.
- Keep user-provided facts, no projects/work/CV invented, genuine sourced assets.
- Default Italian, saved preference, explicit URL override; update open windows live.
- Windows remain individually draggable and keyboard-usable, with correct active order and closure.

## Tasks
- [x] Import exact upstream source and needed original assets; retain the original README and attribution.
- [x] Content worker: personalize both data locales and four window components; run focused regressions.
- [x] Deployment worker: root Vite base, npm build/test/typecheck Pages pipeline, notices and setup documentation.
- [x] Root: integrate locale, taskbar, loader, window state, metadata and source-fidelity fixes; 27 tests, typecheck and production build pass.
- [x] Root: browser comparison with original on desktop and mobile (1280, 375, 320 pixels), startup, dragging, window order, menus and links. No horizontal overflow or console errors/warnings; all referenced images load.
- [x] Independent reviewer: inspect integrated result and resolve actionable findings. Review clean; retained template assets hash-match upstream; notices preserve the original permission statement.
- [x] Root: publish main and verify workflow/live site. GitHub Actions run 39065735889 passed install, typecheck, tests, build and deploy for commit 30e66e8289e778ab17f3787a3f5c05a7013f1578. https://gyalecta.github.io/ serves the new XP portfolio and original template assets successfully; personalized startup verified in browser.
