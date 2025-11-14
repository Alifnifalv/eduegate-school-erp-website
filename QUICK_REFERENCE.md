# Quick Reference: Montserrat + Lora Font System

## 🚀 TL;DR - Just Show Me The Code

### Headings (Use Montserrat)
```tsx
<h1 className="text-5xl font-bold font-sans">Title</h1>
<h2 className="text-4xl font-bold font-sans">Section</h2>
<h3 className="text-2xl font-semibold font-sans">Subsection</h3>
```

### Body Text (Use Lora)
```tsx
<p className="text-base font-serif text-[#484848] leading-relaxed">Content</p>
```

### Buttons & Nav (Use Montserrat)
```tsx
<button className="font-sans font-semibold">Click Me</button>
<a href="#" className="font-sans font-medium">Link</a>
```

---

## 📋 Cheat Sheet

| Need | Use This | Example |
|------|----------|---------|
| Page Title | `font-sans` + `font-bold` | `<h1 className="text-5xl font-bold font-sans">` |
| Section Head | `font-sans` + `font-bold` | `<h2 className="text-4xl font-bold font-sans">` |
| Subsection | `font-sans` + `font-semibold` | `<h3 className="text-2xl font-semibold font-sans">` |
| Body Text | `font-serif` + `leading-relaxed` | `<p className="text-base font-serif leading-relaxed">` |
| Button | `font-sans` + `font-semibold` | `<button className="font-sans font-semibold">` |
| Nav Link | `font-sans` + `font-medium` | `<a className="font-sans font-medium">` |

---

## ⚡ Copy-Paste Templates

### Hero Section
```tsx
<section>
  <h1 className="text-4xl md:text-6xl font-bold font-sans text-[#144685]">
    Main Headline
  </h1>
  <p className="text-lg font-serif text-[#484848] leading-relaxed mt-4">
    Descriptive body text explaining the main headline...
  </p>
  <button className="font-sans font-semibold mt-6">Get Started</button>
</section>
```

### Feature Card
```tsx
<div className="card">
  <h3 className="text-xl font-semibold font-sans text-[#144685]">
    Feature Name
  </h3>
  <p className="text-base font-serif text-[#484848] leading-relaxed mt-2">
    Feature description with key benefits...
  </p>
</div>
```

### Section with CTA
```tsx
<section className="py-16">
  <h2 className="text-4xl font-bold font-sans text-center mb-6">
    Why Choose Us
  </h2>
  <p className="text-lg font-serif text-[#484848] leading-relaxed max-w-2xl mx-auto">
    Longer explanation of benefits and value proposition goes here...
  </p>
  <div className="mt-8 text-center">
    <button className="font-sans font-semibold bg-[#F9D716] text-[#111111]">
      Learn More
    </button>
  </div>
</section>
```

---

## 🎯 Font Weight Guide

```
Montserrat (headings, buttons, nav):
- 400: Never used for headings
- 500: Small labels
- 600: h3, buttons, nav (most common)
- 700: h1, h2 (main headings)
- 800: Only for hero/large titles

Lora (body text):
- 400: Regular body text (default)
- 500: Slight emphasis
- 600: Strong emphasis
- 700: Rarely used in body
```

---

## 🎨 Font Size Reference

| Element | Size | Mobile | Tablet | Desktop |
|---------|------|--------|--------|---------|
| h1 | 2.5-3rem | 1.875rem | 2.25rem | 3rem |
| h2 | 2-2.5rem | 1.5rem | 2rem | 2.5rem |
| h3 | 1.5rem | 1.25rem | 1.5rem | 1.5rem |
| p | 1rem | 0.875rem | 1rem | 1.125rem |

---

## ✅ Implementation Checklist (Per Component)

### For Each Component, Ask:
- [ ] Are headings using `font-sans`?
- [ ] Is body text using `font-serif`?
- [ ] Are buttons using `font-sans`?
- [ ] Is body text using `leading-relaxed`?
- [ ] Are font weights appropriate (h1=bold, h3=semibold)?

---

## 🚫 Common Mistakes

```tsx
// ❌ WRONG - Montserrat for body text
<p className="font-sans">Body text...</p>

// ✅ RIGHT - Lora for body text
<p className="font-serif">Body text...</p>

// ❌ WRONG - No font class
<h1 className="text-4xl font-bold">Title</h1>

// ✅ RIGHT - Font specified
<h1 className="text-4xl font-bold font-sans">Title</h1>

// ❌ WRONG - Custom font declaration
<h1 className="font-['Montserrat']">Title</h1>

// ✅ RIGHT - Tailwind utility
<h1 className="font-sans">Title</h1>
```

---

## 🔄 Migration Guide (Old → New)

### If you see this old pattern:
```tsx
<h2 className="text-3xl font-bold">Title</h2>
<p className="text-base">Body</p>
```

### Change it to:
```tsx
<h2 className="text-3xl font-bold font-sans text-[#144685]">Title</h2>
<p className="text-base font-serif text-[#484848] leading-relaxed">Body</p>
```

---

## 📱 Responsive Typography Pattern

```tsx
{/* Headlines responsive */}
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
  Section Title
</h2>

{/* Body responsive */}
<p className="text-sm sm:text-base md:text-lg font-serif leading-relaxed">
  Responsive body text...
</p>
```

---

## 🎯 Component Quick-Fill

```tsx
// Header/Nav
<header className="...">
  <nav className="font-sans font-medium">
    <a href="#">Link</a>
  </nav>
  <button className="font-sans font-semibold">Button</button>
</header>

// Hero
<section>
  <h1 className="text-5xl font-bold font-sans">Hero Title</h1>
  <p className="text-lg font-serif leading-relaxed">Hero description</p>
</section>

// Features
<section>
  <h2 className="text-4xl font-bold font-sans">Features</h2>
  <div className="grid">
    <div>
      <h3 className="text-xl font-semibold font-sans">Feature 1</h3>
      <p className="font-serif leading-relaxed">Description</p>
    </div>
  </div>
</section>

// Footer
<footer>
  <h3 className="font-sans font-semibold">Section</h3>
  <p className="font-serif">Footer content</p>
</footer>
```

---

## 🎨 Color + Font Combo

```tsx
// Professional Blue + Montserrat (headings)
<h2 className="font-sans font-bold text-[#144685]">Title</h2>

// Dark Text + Lora (body)
<p className="font-serif text-[#111111]">Body</p>

// Medium Gray + Lora (secondary)
<p className="font-serif text-[#484848]">Secondary text</p>

// Accent Yellow + Montserrat (CTA)
<button className="font-sans bg-[#F9D716] text-[#111111] font-semibold">
  Click Here
</button>
```

---

## 💾 Save This Pattern

```tsx
// Standard Page Section Template
<section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#144685] mb-8">
      Section Title
    </h2>
    <p className="text-base md:text-lg font-serif text-[#484848] leading-relaxed mb-6">
      Section description with key information...
    </p>
    <button className="font-sans font-semibold bg-[#F9D716] text-[#111111] px-6 py-3 rounded">
      Call to Action
    </button>
  </div>
</section>
```

---

## 🚀 Getting Started

1. Copy templates above
2. Paste into your component
3. Update content
4. Test on mobile/desktop
5. Done! ✨

---

## 📞 Need More Details?

- **Full Guide**: See `TYPOGRAPHY_GUIDE.md`
- **Implementation Steps**: See `MONTSERRAT_LORA_IMPLEMENTATION.md`
- **System Overview**: See `FONT_SYSTEM_SUMMARY.md`

---

**Pro Tip**: Use find-replace to quickly update components:
- Find: `<h2 className="text-4xl font-bold">`
- Replace: `<h2 className="text-4xl font-bold font-sans">`
- Find: `<p className="text-base">`
- Replace: `<p className="text-base font-serif text-[#484848] leading-relaxed">`

---

*Updated: November 13, 2025*
*Font System: Montserrat + Lora*
*Status: Ready to Use* ✅
