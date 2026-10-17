# Space Portfolio Implementation Plan

> **For agentic workers:** Execute the scoped tasks below using the project's authorized autonomous workflow. Keep ownership separate and review the complete result before deployment.

**Goal:** Publish Domenico Avino's bilingual single-page space-themed portfolio to GitHub Pages.

**Architecture:** Buildless semantic HTML, responsive CSS and a small classic JavaScript language controller. GitHub Actions publishes only the static files.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** docs/superpowers/specs/2026-10-17-space-portfolio-design.md

## Global Constraints
- One scrolling page, Italian and English, no invented projects or credentials.
- Cisco Scholarship is participation; backend is an interest being explored.
- Original portrait content is preserved in an optimized WebP delivery copy and framed with CSS; no CV.
- All graphic assets are sourced files: Bootstrap Icons v1.13.2, NASA/ESA Hubble M7, NASA/JPL/SSI Cassini Saturn; credits and licenses are included. No handwritten SVG/CSS artwork or emoji.
- No runtime framework, backend or external runtime dependencies.

## Review Focus
- Narrow screens: no clipped text, horizontal overflow or inaccessible navigation.
- Language changes: all visible prose, accessibility labels, dates and metadata translate.
- Blocked localStorage: interaction still works.
- Without JavaScript: Italian content and links remain usable.
- Deployment: only site files are published and the public page resolves successfully.

## Tasks
- [x] Root: create index.html, styles.css, optimized portrait.webp, licensed graphic assets, favicon and local font; check semantics and all supplied facts.
- [x] Language worker: create script.js against the agreed data-i18n contract; verify syntax and behavior in browser.
- [x] Deployment worker: create .github/workflows/deploy.yml and README.md; verify official Actions and repository state.
- [x] Root: serve locally; inspect page and test language, persistence, anchors, links, keyboard and blocked-storage behavior. Responsive widths 320, 375, 620, 768 and 1440 have no horizontal overflow; keyboard skip link focuses main; browser error/warning log is empty.
- [x] Independent reviewer: check correctness, accessibility and brief coverage; root resolves actionable issues. Degree level confirmed in original user brief; OG metadata localized; optimized portrait; icon filters and license summary corrected; favicon derived from licensed icon for dark-tab visibility.
- [ ] Root: commit, push main, enable GitHub Actions as Pages source, verify deployment and open the public result.

Local verification uses browser behavior checks appropriate to this static portfolio; a test framework is not added for low-impact presentational content.
