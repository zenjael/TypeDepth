# TypeDepth — Sitemap

## Navigation Structure
Two tabs in the main nav:
- **Home** → `index.html`
- **Explore** → `explore.html`

Sub-pages (no tab, reached by clicking):
- **Compare** → `compare.html` (linked from nav + type pages)
- **Type pages** → `types/*.html` (linked from explore grid + home selector)

---

## Pages

### Tab 1 — Home
| | |
|---|---|
| **File** | `index.html` |
| **URL** | `/` |
| **H1** | You Are More Than Your 4 Letters |
| **Purpose** | Explain why cognitive functions matter, introduce the framework, nudge user to select their type |
| **Components** | `<nav-bar>`, `<site-footer>` |
| **Links to** | All type pages (via type selector section) |
| **SEO Schema** | `WebSite` |

**Sections:**
1. Hero
2. Why cognitive functions matter
3. The framework (Jungian typology)
4. How it helps you
5. Type selector → choose your MBTI

---

### Tab 2 — Explore (All MBTIs)
| | |
|---|---|
| **File** | `explore.html` |
| **URL** | `/explore.html` |
| **H1** | Explore All 16 MBTI Types |
| **Purpose** | Overview of all types + relationship compatibility map |
| **Components** | `<nav-bar>`, `<type-card>`, `<relationship-map>`, `<site-footer>` |
| **Links to** | All 16 type pages, compare page |
| **SEO Schema** | `CollectionPage` |

**Sections:**
1. 16-type grid (type cards)
2. Relationship map (Friendship / Work / Romance toggle)

---

### Compare Types
| | |
|---|---|
| **File** | `compare.html` |
| **URL** | `/compare.html` |
| **H1** | Compare Two MBTI Types |
| **Purpose** | Side-by-side comparison of any two types |
| **Components** | `<nav-bar>`, `<compare-panel>`, `<site-footer>` |
| **Links to** | Individual type pages |
| **SEO Schema** | `FAQPage` |

---

### Type Pages (16 total)

All type pages follow the same template. Format: `types/{type}.html`

| Type | File | H1 |
|---|---|---|
| INFP | `types/infp.html` | INFP: The Mediator's Cognitive Function Stack |
| INFJ | `types/infj.html` | INFJ: The Advocate's Cognitive Function Stack |
| ENFP | `types/enfp.html` | ENFP: The Campaigner's Cognitive Function Stack |
| ENFJ | `types/enfj.html` | ENFJ: The Protagonist's Cognitive Function Stack |
| INTP | `types/intp.html` | INTP: The Logician's Cognitive Function Stack |
| INTJ | `types/intj.html` | INTJ: The Architect's Cognitive Function Stack |
| ENTP | `types/entp.html` | ENTP: The Debater's Cognitive Function Stack |
| ENTJ | `types/entj.html` | ENTJ: The Commander's Cognitive Function Stack |
| ISFP | `types/isfp.html` | ISFP: The Adventurer's Cognitive Function Stack |
| ISFJ | `types/isfj.html` | ISFJ: The Defender's Cognitive Function Stack |
| ESFP | `types/esfp.html` | ESFP: The Entertainer's Cognitive Function Stack |
| ESFJ | `types/esfj.html` | ESFJ: The Consul's Cognitive Function Stack |
| ISTP | `types/istp.html` | ISTP: The Virtuoso's Cognitive Function Stack |
| ISTJ | `types/istj.html` | ISTJ: The Logistician's Cognitive Function Stack |
| ESTP | `types/estp.html` | ESTP: The Entrepreneur's Cognitive Function Stack |
| ESTJ | `types/estj.html` | ESTJ: The Executive's Cognitive Function Stack |

**Each type page includes:**
- Components: `<nav-bar>`, `<function-stack>`, `<question-selector>`, `<site-footer>`
- SEO Schema: `Article` + `FAQPage`
- Sections: Function stack · Tendencies · Stress · Loops · Needs · Growth path
- CTA: → Compare with another type

---

## Internal Linking Map

```
index.html
  └── → types/*.html (type selector)
  └── → explore.html (nav)
  └── → compare.html (nav)

explore.html
  └── → types/*.html (type cards)
  └── → compare.html (nav + CTA)

compare.html
  └── → types/*.html (after comparison)

types/*.html
  └── → compare.html (CTA)
  └── → explore.html (nav)
  └── → index.html (nav)
```

---

## Future Pages (Backlog)

| Page | File | Notes |
|---|---|---|
| Community | `community.html` | Forum by MBTI type. Requires backend. Future sprint. |
