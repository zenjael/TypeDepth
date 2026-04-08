# TypeDepth — Sprint Plan

## Project Overview
A multi-page HTML website exploring MBTI cognitive function stacks. Built with semantic HTML, vanilla CSS/JS, and Light DOM web components. Primary learning goals: clean semantic HTML and SEO best practices.

---

## Tech Stack
- **HTML:** Separate `.html` file per page (SEO-friendly, crawlable URLs)
- **CSS:** Single shared `styles.css` with CSS custom properties
- **JS:** Vanilla JS + Light DOM Web Components (no Shadow DOM)
- **Fonts:** Google Fonts (separate `<link>` per family)
- **No frameworks:** No React, no Tailwind, no build step

---

## Sprint 0 — Foundation
**Status:** ✅ Complete

- [x] Create DESIGN-SYSTEM.md
- [x] Create SPRINT-PLAN.md
- [x] Create SITEMAP.md
- [x] Scaffold folder structure
- [x] Build `css/styles.css` — design tokens + base component classes
- [x] Build `components/nav-bar.js` — Light DOM web component
- [x] Build `components/site-footer.js` — Light DOM web component
- [x] Create shared `<head>` HTML template (SEO stubs for all pages)
- [x] Create `js/mbti-data.js` — MBTI content data structure (INFP + INFJ complete; remaining 14 types in Sprint 5)

---

## Sprint 1 — Home Page
**Status:** ✅ Complete (static HTML + CSS pass)

**File:** `index.html`
**SEO:** `WebSite` schema stub, H1, meta description, OG tags

Sections:
- [x] Hero — hook + CTA
- [x] Why cognitive functions matter (3 cards: Lime → Lavender → Cream)
- [x] The framework (Jungian typology — 8-function grid)
- [x] How it helps you (numbered benefit list)
- [x] Type selector — 4×4 grid, all 16 types linked

**Next:** Wire up `<nav-bar>` and `<site-footer>` web components after design approval.

---

## Sprint 2 — All MBTIs Overview Page
**Status:** ✅ Complete (static HTML + CSS pass)

**File:** `explore.html`
**SEO:** `CollectionPage` schema

Sections:
- [ ] 16-type grid with type cards (`<type-card>` component)
- [ ] Relationship map (`<relationship-map>` component)
  - Toggle: Friendship / Work / Romance
- [ ] Link through to individual type pages

---

## Sprint 3 — INFP + INFJ Detail Pages (Template)
**Status:** ✅ Complete (static HTML + CSS pass)

**Files:** `types/infp.html`, `types/infj.html`
**SEO:** `Article` schema stub, H1, meta description, OG tags

Sections:
- [x] Type header — badge, tagline, H1, stack preview (Dom → Aux → Tert → Inf)
- [x] Sticky question navigator — anchor links to all sections
- [x] Function stack — all 8 functions (main + shadow groups)
- [x] Natural tendencies — function-tagged list
- [x] Under stress — inferior grip explained + signs list
- [x] Loops — named loops with functions + first-person quote
- [x] What I need — numbered list
- [x] Growth path — 3-step grid
- [x] Compare CTA → links to compare page + explore page

**Next:** Wire up `<function-stack>` and `<question-selector>` components after design approval.

---

## Sprint 4 — Compare Types Page
**Status:** ⏳ Pending

**File:** `compare.html`
**SEO:** `FAQPage` schema

Sections:
- [ ] Type picker (select two types)
- [ ] Side-by-side function stack comparison (`<compare-panel>` component)
- [ ] Shared functions callout
- [ ] Key differences
- [ ] "Often confused?" callout where relevant
- [ ] Links back to individual type pages

---

## Sprint 5 — All 16 Type Pages
**Status:** ⏳ Pending

**Files:** `types/*.html` (14 remaining types)

- [ ] ENTJ, INTJ, ENTP, INTP
- [ ] ENFJ, INFJ ✓, ENFP, INFP ✓
- [ ] ESTJ, ISTJ, ESFJ, ISFJ
- [ ] ESTP, ISTP, ESFP, ISFP

Use template established in Sprint 3.

---

## Sprint 6 — SEO Audit + Polish
**Status:** ⏳ Pending

- [ ] Run each page through Google Rich Results Test
- [ ] Run Lighthouse audit on all pages
- [ ] Verify H1 usage (one per page, matches intent)
- [ ] Check heading hierarchy (H1 → H2 → H3, no skipping)
- [ ] Add JSON-LD schema markup to each page
- [ ] Verify all `<meta>` descriptions are unique and descriptive
- [ ] Check canonical tags
- [ ] Alt text on all images/illustrations
- [ ] Mobile responsiveness check
- [ ] Cross-browser check
- [ ] Copy review for tone consistency

---

## Backlog (Future Sprints)

### Community Tab
A forum-style page where users post questions/experiences tagged by MBTI type. Key features:
- Users declare their MBTI when posting
- Posts filterable by type
- INFJs see other INFJs experiencing the same things
- Anyone can reply to share experience or opinion
- Requires backend (user accounts, posts, replies, moderation)
- **Needs:** Backend/database sprint — out of scope for current MVP

---

## File Structure
```
/MBTI/
  DESIGN-SYSTEM.md
  SPRINT-PLAN.md
  SITEMAP.md
  index.html
  explore.html
  compare.html
  /types/
    infp.html
    infj.html
    ... (14 more)
  /css/
    styles.css
  /js/
    mbti-data.js
  /components/
    nav-bar.js
    site-footer.js
    type-card.js
    function-stack.js
    question-selector.js
    relationship-map.js
    compare-panel.js
```
