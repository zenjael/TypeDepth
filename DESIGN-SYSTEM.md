# TypeDepth — Design System

## Brand
- **Name:** TypeDepth
- **Tagline:** You Are More Than Your 4 Letters
- **Tone:** Warm, intelligent, empathetic — like a knowledgeable friend, not a textbook
- **Illustration style:** Line-art with dark indigo outlines, minimal fill, hand-drawn feel

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#1C1A5E` | Text, nav, dark buttons, outlines |
| `--color-accent` | `#C8D840` | CTAs, card 1 (Lime) |
| `--color-lavender` | `#D0C8FF` | Card 2, highlights |
| `--color-lilac` | `#EAE4FF` | Section backgrounds |
| `--color-cream` | `#F5F0E4` | Page background, card 3 |

### Card Colour Order
Always: **Lime → Lavender → Cream** (left to right, or top to bottom on mobile)

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Headings | `Lato` | 900 | H1, H2, H3, card function letters |
| Body | `Inter` | 300–600 | Paragraphs, labels, buttons, nav links |
| Handwriting | `Nothing You Could Do` | 400 + `-webkit-text-stroke: 0.5px` | Section eyebrows, callout labels |

### Google Fonts — always use separate link tags
```html
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
```

### Type Scale
```css
--text-xs:   0.75rem;
--text-sm:   0.875rem;
--text-base: 1rem;
--text-lg:   1.125rem;
--text-xl:   1.25rem;
--text-2xl:  1.5rem;
--text-3xl:  1.875rem;
--text-4xl:  2.25rem;
```

---

## Spacing
```css
--space-xs:  4px;
--space-sm:  8px;
--space-md:  16px;
--space-lg:  24px;
--space-xl:  32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

---

## Shape & Radius
```css
--radius-sm:      8px;    /* tags, badges */
--radius-md:      14px;   /* nav inner elements */
--radius-card:    22px;   /* all cards */
--radius-section: 28px;   /* section blocks */
--radius-pill:    28px;   /* all buttons */
```

---

## Components

### Buttons
- **Primary:** Lime background `#C8D840`, Indigo text, pill shape
- **Dark:** Indigo background `#1C1A5E`, white text, pill shape
- **Font:** Inter 600, font-size `--text-sm`

### Cards
- Always use the Lime → Lavender → Cream order
- Border radius: `--radius-card`
- Padding: `--space-xl` top/sides, `--space-lg` bottom
- Card button: always dark (Indigo) except Lavender card which uses Lime button

### Navigation
- Background: `--color-cream`
- Logo: Lato 900
- Links: Inter 500
- CTA button: Dark (Indigo bg, white text)

### Section Eyebrows
- Font: Nothing You Could Do
- Size: 1.35rem
- Stroke: `-webkit-text-stroke: 0.5px var(--color-primary)`
- Colour: `--color-primary` at 55% opacity

---

## Web Components (Light DOM)
All reusable UI is built as Light DOM web components — no Shadow DOM so content remains SEO-crawlable. Styles come from the global `styles.css`.

| Component | File | Description |
|---|---|---|
| `<nav-bar>` | `components/nav-bar.js` | Site navigation, shared across all pages |
| `<site-footer>` | `components/site-footer.js` | Site footer, shared across all pages |
| `<type-card>` | `components/type-card.js` | MBTI type card for explore grid |
| `<function-stack>` | `components/function-stack.js` | 8-function visual stack |
| `<question-selector>` | `components/question-selector.js` | Interactive Q&A on type pages |
| `<relationship-map>` | `components/relationship-map.js` | Friendship/work/romance toggle map |
| `<compare-panel>` | `components/compare-panel.js` | Side-by-side type comparison |

---

## CSS File Structure
```
/css/
  styles.css    ← all design tokens + component classes
```

Single stylesheet. No CSS frameworks. No Tailwind.
