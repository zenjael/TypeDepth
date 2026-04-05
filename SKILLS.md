# TypeDepth — Design & Development Best Practices

> This document is the source of truth for how TypeDepth is built and maintained.
> Read this at the start of every session before writing any code.
> Applies to all contributors, current and future.

---

## 1. Starting a Session

Before writing any code, always read these files in order:

1. `DESIGN-SYSTEM.md` — colours, fonts, tokens, component rules
2. `SPRINT-PLAN.md` — what has been done, what is in progress, what is next
3. `SITEMAP.md` — page structure and internal linking

This prevents duplicating work, using wrong values, or breaking established patterns. Never skip this step.

---

## 2. Mockup & Build Rules

These rules apply to every page and component, no exceptions.

### First pass = HTML + CSS only
- Build every new page as static HTML + CSS first
- No JavaScript on the first mockup
- Get the layout, content, and design approved before adding interactivity
- Only wire up web components and JS after the static version is signed off

### External files only
- All CSS lives in `css/styles.css`
- All JavaScript lives in `js/` or `components/`
- Data lives in `js/mbti-data.js`

### No internal or inline styles — ever
```html
<!-- ❌ Never do this -->
<style> h1 { color: red; } </style>
<p style="font-size: 14px;">...</p>

<!-- ✅ Always do this -->
<link rel="stylesheet" href="/css/styles.css" />
<p class="footer-tagline">...</p>
```

### No inline scripts — ever
```html
<!-- ❌ Never do this -->
<script> document.querySelector('h1').textContent = 'Hello' </script>

<!-- ✅ Always do this -->
<script src="/js/main.js" defer></script>
```

---

## 3. HTML Best Practices

### One H1 per page
Every page has exactly one `<h1>`. It clearly describes the page's primary purpose and matches what a user would search for.

```html
<!-- ✅ Home page -->
<h1>You Are More Than Your 4 Letters</h1>

<!-- ✅ Type page -->
<h1>INFP: The Mediator's Cognitive Function Stack</h1>
```

### Heading hierarchy — never skip levels
```html
<!-- ❌ Wrong — skips H2 -->
<h1>Page Title</h1>
<h3>Section</h3>

<!-- ✅ Correct -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

### Always use semantic HTML
| Element | Use for |
|---|---|
| `<main>` | Primary page content (one per page) |
| `<nav>` | Navigation menus |
| `<header>` | Page or section header |
| `<footer>` | Page footer |
| `<section>` | Thematic grouping of content — always has a heading |
| `<article>` | Self-contained content (type detail pages) |
| `<aside>` | Supplementary content |
| `<button>` | Interactive actions |
| `<a>` | Navigation and links — never use `<div>` as a link |

### Always add alt text to images
```html
<!-- ❌ Wrong -->
<img src="brain-illustration.svg" />

<!-- ✅ Correct -->
<img src="brain-illustration.svg" alt="Line illustration of a brain with glowing connections" />

<!-- For decorative images only -->
<img src="decorative-squiggle.svg" alt="" role="presentation" />
```

### Always label interactive elements
```html
<button aria-label="Open navigation menu">...</button>
<nav aria-label="Main navigation">...</nav>
<section aria-labelledby="functions-heading">
  <h2 id="functions-heading">Your Function Stack</h2>
</section>
```

---

## 4. SEO Best Practices

### Every page must have
- Unique `<title>` — format: `[Page Topic] | TypeDepth`
- Unique `<meta name="description">` — 150–160 characters, describes this specific page
- `<link rel="canonical">` — prevents duplicate content issues
- Open Graph tags — for social sharing previews
- One clear `<h1>` that matches the page's search intent

### Meta description rules
- Must be unique per page — never copy-paste across pages
- 150–160 characters
- Describes the value of this specific page
- Written for humans, not just search engines

```html
<!-- ✅ Good -->
<meta name="description" content="Understand the INFP cognitive function stack — Fi, Ne, Si, Te — and discover your tendencies, stress responses, and the loops you fall into." />

<!-- ❌ Bad — too generic -->
<meta name="description" content="Learn about MBTI types on TypeDepth." />
```

### Internal linking
- Always follow the linking map in `SITEMAP.md`
- Type pages link back to Compare and Explore
- Explore page links to all 16 type pages
- Use descriptive anchor text — never "click here"

```html
<!-- ❌ Bad -->
<a href="/types/infp.html">Click here</a>

<!-- ✅ Good -->
<a href="/types/infp.html">Explore the INFP function stack</a>
```

### JSON-LD Schema (Sprint 6)
Schema markup is added in Sprint 6 after content is finalised. Schema types per page:

| Page | Schema Type |
|---|---|
| `index.html` | `WebSite` |
| `explore.html` | `CollectionPage` |
| `types/*.html` | `Article` + `FAQPage` |
| `compare.html` | `FAQPage` |

---

## 5. Design System Rules

### Always use CSS variables — never hardcode values
```css
/* ❌ Never */
color: #1C1A5E;
border-radius: 22px;

/* ✅ Always */
color: var(--color-primary);
border-radius: var(--radius-card);
```

### Card colour order is always Lime → Lavender → Cream
This is a core visual pattern. Never reverse or randomise.
- Card 1: `.card-lime` — lime green background
- Card 2: `.card-lav` — lavender background
- Card 3: `.card-cream` — cream background

### Button rules
| Situation | Class |
|---|---|
| Primary CTA (hero, section) | `.btn .btn-primary` (lime bg) |
| Navigation CTA | `.btn .nav-cta` (indigo bg) |
| Card on lime | `.btn .btn-dark` (indigo bg) |
| Card on lavender | `.btn .btn-primary` (lime bg) |
| Card on cream | `.btn .btn-dark` (indigo bg) |

### Eyebrow labels
Always use `<span class="text-eyebrow">` for the handwriting-style labels above headings. Never use a heading tag for these.

```html
<span class="text-eyebrow">Know Yourself Deeper</span>
<h2>What Makes You, You</h2>
```

### Never use `!important`
If you need `!important`, the CSS structure is wrong. Fix the specificity instead.

---

## 6. CSS Rules

### Add styles to `styles.css` only
Never add a `<style>` tag to an HTML file. Never use a `style=""` attribute. All CSS lives in `css/styles.css`.

### Follow the existing section structure
`styles.css` is divided into 12 numbered sections. Add new component styles in the correct section or add a new numbered section at the end:

```
1. Design Tokens
2. Reset & Base
3. Typography
4. Layout
5. Navigation
6. Buttons
7. Cards
8. Hero
9. Type Badge
10. Footer
11. Utilities
12. Responsive
```

### Class naming convention
Use lowercase kebab-case. Be descriptive.
```css
/* ✅ Good */
.function-stack-card { }
.question-selector-btn { }

/* ❌ Bad */
.FSCard { }
.qs_btn { }
```

---

## 7. Web Component Rules (Light DOM)

### Always use Light DOM — never Shadow DOM
Shadow DOM hides content from search engine crawlers. Every component uses Light DOM so all content remains SEO-crawlable.

```js
// ❌ Never — Shadow DOM
connectedCallback() {
  this.attachShadow({ mode: 'open' })
  this.shadowRoot.innerHTML = `...`
}

// ✅ Always — Light DOM
connectedCallback() {
  this.innerHTML = `...`
}
```

### One component = one file
Each component lives in its own file in `/components/`. Never combine multiple components in one file.

### Pass data via attributes
```html
<nav-bar active="explore"></nav-bar>
<type-card code="INFP" name="The Mediator"></type-card>
```

Read attributes in the component:
```js
connectedCallback() {
  const code = this.getAttribute('code') || ''
  const name = this.getAttribute('name') || ''
}
```

### Load components with `defer`
Always load component scripts with `defer` in `<head>`. Never at the bottom of `<body>`.
```html
<script src="/components/nav-bar.js" defer></script>
```

### Components use classes from `styles.css`
Components never define their own styles. All visual styling comes from `css/styles.css`.

---

## 8. Content Writing Guidelines

### Tone
- Warm, empathetic, intelligent — like a knowledgeable friend
- First-person framing: "When you're in a loop, you might notice..."
- Never clinical, never jargon-heavy without explanation
- Never condescending — assume the reader is thoughtful and self-aware

### Function notation
Always write cognitive function codes in bold with full name on first use:
- First use: **Fi (Introverted Feeling)**
- Subsequent use: Fi

### Loop naming convention
Every loop has a name and follows this structure:
```
Name: The [Name] Loop
Functions: [Code] + [Code] (bypassing [Code])
Description: What is happening cognitively.
Feels like: "First-person quote of how it feels from the inside."
```

### Questions on type pages
Pre-written questions must be specific and resonant — not generic. Examples:
- "What are my natural tendencies?"
- "What happens to me under stress?"
- "What loops do I fall into?"
- "What do I need from the people around me?"
- "How do I grow beyond my comfort zone?"

---

## 9. File Naming & Structure

```
/MBTI/
  index.html              ← Home
  explore.html            ← All MBTIs
  compare.html            ← Compare types
  DESIGN-SYSTEM.md
  SPRINT-PLAN.md
  SITEMAP.md
  SKILLS.md               ← This file
  /types/
    infp.html             ← Always lowercase type code
    infj.html
    ...
  /css/
    styles.css            ← Single stylesheet, no others
  /js/
    mbti-data.js          ← All MBTI content data
    main.js               ← General JS (added when needed)
  /components/
    nav-bar.js            ← kebab-case always
    site-footer.js
    type-card.js
    function-stack.js
    question-selector.js
    relationship-map.js
    compare-panel.js
```

### Rules
- Type pages: always `types/{lowercase-code}.html`
- Component files: always `{kebab-case}.js`
- No spaces in any filename
- No capital letters in filenames except MD docs

---

## 10. Sprint Completion Checklist

Before marking any sprint task as complete, verify:

**HTML**
- [ ] Exactly one `<h1>` on the page
- [ ] Heading hierarchy is correct (H1 → H2 → H3, no skips)
- [ ] All semantic elements used correctly
- [ ] All images have `alt` text
- [ ] No `<style>` tags anywhere in HTML
- [ ] No `style=""` attributes on any element

**SEO**
- [ ] `<title>` is unique and follows format
- [ ] `<meta name="description">` is unique, 150–160 chars
- [ ] `<link rel="canonical">` is set
- [ ] Open Graph tags are filled in
- [ ] Internal links use descriptive anchor text

**CSS & JS**
- [ ] All styles in `css/styles.css`
- [ ] All JS in `js/` or `components/`
- [ ] No `!important` used
- [ ] CSS variables used, no hardcoded hex or px values

**Components**
- [ ] Light DOM only — no `attachShadow()`
- [ ] `nav-bar active=""` attribute set correctly
- [ ] All component scripts loaded with `defer`

**General**
- [ ] Page loads without console errors
- [ ] Mobile layout looks correct at 375px width
- [ ] All internal links work
- [ ] `SPRINT-PLAN.md` updated to mark task complete
