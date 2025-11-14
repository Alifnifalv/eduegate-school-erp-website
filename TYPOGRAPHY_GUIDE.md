# Professional Typography System: Montserrat + Lora

## Overview
This website uses an elegant and professional font pairing: **Montserrat** (headings/titles) + **Lora** (body text). This combination conveys sophistication, authority, and warmth.

## Font Specifications

### Montserrat (Display/Headlines)
- **Usage**: All headings (h1-h6), navigation, buttons, titles
- **Weight**: 600-700 (semi-bold to bold for emphasis)
- **Characteristics**: Geometric, clean, modern sans-serif
- **Best for**: Headlines, CTAs, navigation elements, strong visual hierarchy
- **CSS Variable**: `var(--font-montserrat)` or use Tailwind: `font-sans`

**Weights Available:**
- 400 (Regular) - Not typically used for headings
- 500 (Medium) - Subtle emphasis  
- 600 (Semi-Bold) - Default heading weight
- 700 (Bold) - Main headings, strong emphasis
- 800 (Extra-Bold) - Hero titles only

### Lora (Body Text)
- **Usage**: Body paragraphs, descriptions, long-form content
- **Weight**: 400-600 (regular to semi-bold)
- **Characteristics**: Classic serif font with contemporary elegance
- **Best for**: Readability, trust, sophistication in body text
- **CSS Variable**: `var(--font-lora)` or use Tailwind: `font-serif`

**Weights Available:**
- 400 (Regular) - Body text, default
- 500 (Medium) - Emphasis within body text
- 600 (Semi-Bold) - Highlighted callouts
- 700 (Bold) - Important statements

## Implementation Examples

### Headings
```tsx
// h1 - Main Page Title (Montserrat, 700)
<h1 className="text-5xl font-bold text-[#111111] font-sans">
  Main Title
</h1>

// h2 - Section Title (Montserrat, 700)
<h2 className="text-4xl font-bold text-[#144685] font-sans">
  Section Title
</h2>

// h3 - Subsection (Montserrat, 600)
<h3 className="text-2xl font-semibold text-[#144685] font-sans">
  Subsection Title
</h3>
```

### Body Text
```tsx
// Standard paragraph (Lora, 400)
<p className="text-base md:text-lg text-[#484848] font-serif leading-relaxed">
  Long form content goes here...
</p>

// Callout/Emphasized text (Lora, 600)
<p className="text-lg font-semibold text-[#111111] font-serif">
  Important message
</p>
```

### Navigation & Buttons
```tsx
// Navigation (Montserrat, 500-600)
<nav className="font-sans font-medium">
  <a href="#">Link</a>
</nav>

// CTA Button (Montserrat, 600)
<button className="font-sans font-semibold text-white bg-[#144685]">
  Call to Action
</button>
```

## Color Palette (Professional Brand Colors)
- **Primary Blue**: #144685 (headings, CTAs)
- **Accent Yellow**: #F9D716 (highlights, buttons)
- **Dark Text**: #111111 (headings, primary text)
- **Medium Gray**: #484848 (body text)
- **Light Gray**: #666 or #dbdbdb (secondary text)

## Hierarchy Rules

### Page Structure
1. **h1** (Montserrat, 700, 2.5-3rem) - Page title
2. **h2** (Montserrat, 700, 2-2.5rem) - Section headers
3. **h3** (Montserrat, 600, 1.5rem) - Subsections
4. **p** (Lora, 400, 1-1.2rem) - Body text
5. **Button/Nav** (Montserrat, 500-600) - Interactive elements

### Contrast & Legibility
- Headlines: High contrast with background (dark blue or black)
- Body text: Legible contrast ratio (4.5:1 minimum)
- Use 1.5-1.8 line height for body text for optimal readability
- Montserrat: Letter-spacing -0.02em for h1/h2 (tighter for impact)
- Lora: Standard letter-spacing (0em) for natural readability

## Responsive Typography

### Mobile-First Approach
```tsx
{/* Responsive heading example */}
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
  Section Title
</h2>

{/* Responsive body text */}
<p className="text-sm sm:text-base md:text-lg font-serif text-[#484848]">
  Lorem ipsum dolor sit amet...
</p>
```

## CSS Classes to Use

### Recommended Tailwind + Custom Utilities
```css
/* Use these font classes throughout */
.font-sans  → Montserrat (headings, buttons, nav)
.font-serif → Lora (body text)
.font-semibold → 600 weight (h3, emphasized text)
.font-bold → 700 weight (h1, h2, CTAs)
```

## Important Guidelines

### DO ✅
- Use **Montserrat** for all headings (h1-h6)
- Use **Montserrat** (500-600) for navigation and buttons
- Use **Lora** for all body content and descriptions
- Mix weights for visual hierarchy (e.g., h1 700, h3 600)
- Use letter-spacing utilities for tighter headings
- Apply proper line-height for readability (1.5-1.8)

### DON'T ❌
- **NEVER** use custom `font-['*']` declarations
- **NEVER** use system fonts (Inter, Geist) for headings - use Montserrat
- **NEVER** mix multiple serif/sans-serif fonts arbitrarily
- **NEVER** use Montserrat for body text paragraphs
- **NEVER** use Lora for navigation or buttons
- **NEVER** change font-family in individual components

## Font Loading Performance
- Both Montserrat and Lora are optimized Google Fonts
- Weights are pre-loaded: Montserrat (400, 500, 600, 700, 800), Lora (400, 500, 600, 700)
- Fonts are variable fonts supporting smooth weight transitions
- Minimal CLS (Cumulative Layout Shift) impact due to font-display: swap

## Future Development
When adding new components:
1. Use `font-sans` class for headings/buttons
2. Use `font-serif` class for body content
3. Reference this guide for weight selections
4. Never introduce new custom fonts
5. Test typography on mobile, tablet, and desktop views

## Questions?
Refer to the Figma font pairing documentation or typography resources for professional pairing guidelines.
