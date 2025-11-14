# Montserrat + Lora Implementation Checklist

## ✅ System Setup Complete
- [x] Added Montserrat font import (weights: 400, 500, 600, 700, 800)
- [x] Added Lora font import (weights: 400, 500, 600, 700)
- [x] Created CSS variables: `--font-montserrat`, `--font-lora`
- [x] Updated layout.tsx with new font configuration
- [x] Updated globals.css with typography system
- [x] Updated tailwind.config.js with fontFamily extensions
- [x] Created TYPOGRAPHY_GUIDE.md for developers

## 📋 Component Implementation Guide

### By Section Priority

#### HIGH PRIORITY (Visible on every page)
- [ ] **Header.tsx** - Navigation should use Montserrat (font-sans)
- [ ] **Footer.tsx** - All footer text to use Lora (font-serif) for body, Montserrat for headings
- [ ] **HeroSection.tsx** - Main h1 needs Montserrat, body needs Lora

#### FEATURES PAGE
- [ ] **AllFeaturesSection.tsx** - h2 Montserrat, descriptions Lora
- [ ] **FeatureCard.tsx** - Titles Montserrat, descriptions Lora
- [ ] **KeyFeatures.tsx** - Structure headings Montserrat, content Lora
- [ ] **DetailedFeatureList.tsx** - Ensure proper hierarchy

#### MARKETING COMPONENTS
- [ ] **CtaSection.tsx** - Heading Montserrat, body Lora
- [ ] **SocialProof.tsx** - Headings Montserrat, body Lora
- [ ] **TestimonialCard.tsx** - Names/titles Montserrat, quotes Lora
- [ ] **FeaturedClients.tsx** - Headings Montserrat
- [ ] **SuccessStoriesSection.tsx** - Headlines Montserrat, stories Lora

#### ABOUT PAGE
- [ ] **AboutHeroSection.tsx** - Already partially updated, ensure consistent
- [ ] **AboutVisionMissionCards.tsx** - Already updated, verify Montserrat on titles
- [ ] **AboutSoftopSection.tsx** - Already updated
- [ ] **AboutOffersSection.tsx** - Already updated
- [ ] **AboutMapSection.tsx** - Already updated
- [ ] **AboutDevelopedBySection.tsx** - Already updated

#### SUPPORT/SERVICE PAGES
- [ ] **RequestCallBack.tsx** - Already updated
- [ ] Other service pages - Apply same pattern

#### SPECIFIC COMPONENTS
- [ ] **FaqSection.tsx** - Question titles Montserrat (bold), answers Lora
- [ ] **PackageSection.tsx** - Package names Montserrat, features Lora
- [ ] **DemoCard.tsx** - Titles Montserrat, descriptions Lora
- [ ] **MobileAppSection.tsx** - Headings Montserrat, body Lora
- [ ] **SchoolErpSection.tsx** - Structure with Montserrat headings

## 🔧 Implementation Pattern

### For Existing Components

**Before:**
```tsx
<h1 className="text-4xl font-bold text-[#111111]">Title</h1>
<p className="text-base text-[#484848]">Body text here...</p>
```

**After (Montserrat + Lora):**
```tsx
<h1 className="text-4xl font-bold text-[#111111] font-sans">Title</h1>
<p className="text-base text-[#484848] font-serif">Body text here...</p>
```

### For New Components

**Headings:**
```tsx
// Use Montserrat (font-sans)
<h1 className="text-4xl md:text-5xl font-bold font-sans">Heading</h1>
<h2 className="text-3xl md:text-4xl font-bold font-sans">Section Title</h2>
<h3 className="text-2xl font-semibold font-sans">Subsection</h3>
```

**Body Text:**
```tsx
// Use Lora (font-serif)
<p className="text-base md:text-lg font-serif text-[#484848] leading-relaxed">
  Body content with proper line height
</p>
```

**Buttons & Navigation:**
```tsx
// Use Montserrat (font-sans)
<button className="font-sans font-semibold px-6 py-3">
  CTA Button
</button>
```

## 📊 Font Weight Reference Chart

| Element | Font | Weight | Tailwind Class | Size |
|---------|------|--------|----------------|------|
| h1 | Montserrat | 700 | font-bold | 2.5-3rem |
| h2 | Montserrat | 700 | font-bold | 2-2.5rem |
| h3 | Montserrat | 600 | font-semibold | 1.5rem |
| h4 | Montserrat | 600 | font-semibold | 1.25rem |
| Navigation | Montserrat | 500-600 | font-medium/semibold | 1rem |
| Button | Montserrat | 600 | font-semibold | varies |
| Body | Lora | 400 | font-normal | 1-1.2rem |
| Emphasis | Lora | 600 | font-semibold | same |
| Quote | Lora | 500 | font-medium | 1.1rem |

## 🎯 Testing Checklist

### Visual Testing
- [ ] Headings appear bold and geometric (Montserrat)
- [ ] Body text appears elegant with serifs (Lora)
- [ ] Font weights create clear visual hierarchy
- [ ] Line spacing is comfortable for reading
- [ ] Mobile typography scales properly

### Responsive Testing
```
Viewport Sizes:
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px)
- [ ] Large Desktop (1440px)
```

### Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Performance Checks
- [ ] Fonts load quickly (no FOUT)
- [ ] No layout shift (CLS)
- [ ] Lighthouse performance score maintained

## 📝 Before/After Examples

### Example 1: Section with CTA
```tsx
// BEFORE
<section>
  <h2 className="text-4xl font-bold">Learn Smarter</h2>
  <p className="text-lg">Transform your school management...</p>
  <button>Get Started</button>
</section>

// AFTER (Montserrat + Lora)
<section>
  <h2 className="text-4xl font-bold font-sans text-[#144685]">Learn Smarter</h2>
  <p className="text-lg font-serif text-[#484848] leading-relaxed">
    Transform your school management...
  </p>
  <button className="font-sans font-semibold">Get Started</button>
</section>
```

### Example 2: Feature Card
```tsx
// BEFORE
<div className="card">
  <h3 className="text-2xl font-bold">Feature Name</h3>
  <p className="text-base">Feature description with benefits...</p>
</div>

// AFTER (Montserrat + Lora)
<div className="card">
  <h3 className="text-2xl font-semibold font-sans text-[#144685]">
    Feature Name
  </h3>
  <p className="text-base font-serif text-[#484848] leading-relaxed">
    Feature description with benefits...
  </p>
</div>
```

## 🚀 Rollout Plan

1. **Phase 1**: Update header/footer/navigation (visible on all pages)
2. **Phase 2**: Update marketing components and CTAs
3. **Phase 3**: Update all about/support page components
4. **Phase 4**: Update remaining components systematically
5. **Phase 5**: QA testing across all pages
6. **Phase 6**: Performance optimization & verification

## ⚠️ Common Mistakes to Avoid

- ❌ Forgetting `font-sans` on headings
- ❌ Using Montserrat for body paragraphs
- ❌ Mixing fonts within a component unnecessarily
- ❌ Not using proper font weights (should be 600-700 for headings)
- ❌ Forgetting line-height on body text (should be 1.5-1.8)
- ❌ Adding custom font declarations like `font-['Montserrat']`
- ❌ Not testing on mobile devices

## 📞 Questions?

Refer to:
- `TYPOGRAPHY_GUIDE.md` - Detailed typography documentation
- Figma Font Pairings: Montserrat + Lora professional pairing
- Tailwind CSS font utilities: https://tailwindcss.com/docs/font-family

---

**Status**: Ready for implementation
**Last Updated**: November 13, 2025
