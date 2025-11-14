# Font Policy - Eduegate Website

## 🔒 Font Standard: Inter

All components across the Eduegate website use **Inter** as the default system font. This is configured globally in the layout and should NEVER be overridden.

### Why Inter?
- Modern, clean typeface optimized for web
- Excellent readability across all devices and sizes
- Professional appearance consistent with Metronic design system
- System-level font (no custom font files needed)

---

## ⛔ CRITICAL: Font Rules

### ✅ DO:
- Use standard Tailwind font utilities: `font-bold`, `font-semibold`, `font-medium`, `font-normal`
- Let Inter render naturally from the system font
- Focus ONLY on layout, spacing, and design changes
- Example: `<h1 className="text-4xl font-bold">Title</h1>`

### ❌ DON'T:
- **NEVER** use `font-['Poppins']` or any custom font declarations
- **NEVER** use `font-['Poppins:Medium']` or any font-family variants
- **NEVER** override the global font
- **NEVER** change fonts when making design updates
- Example: ❌ `<h1 className="font-['Poppins']">Wrong</h1>`

---

## 📋 Font Configuration

### Global Setup (layout.tsx)
```tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### Component Usage (CORRECT)
```tsx
// ✅ CORRECT - Use standard Tailwind utilities
<h1 className="text-4xl font-bold text-[#111111]">Heading</h1>
<p className="text-base font-medium text-gray-600">Body text</p>
<button className="text-sm font-semibold">Button</button>
```

### Component Usage (WRONG)
```tsx
// ❌ WRONG - Don't use custom fonts
<h1 className="text-4xl font-bold font-['Poppins'] text-[#111111]">Heading</h1>
<p className="text-base font-['Poppins:Medium'] text-gray-600">Body text</p>
<button className="text-sm font-semibold font-['Poppins']">Button</button>
```

---

## 🎨 Typography Scale

When creating components, use these standard sizes and weights:

### Headings
- `text-5xl font-bold` - Page titles
- `text-4xl font-bold` - Section headings
- `text-3xl font-bold` - Card titles
- `text-2xl font-bold` - Subsection titles
- `text-xl font-semibold` - Medium headings

### Body Text
- `text-base font-normal` - Regular paragraph text
- `text-base font-medium` - Emphasized body text
- `text-sm font-normal` - Small helper text
- `text-sm font-semibold` - Small labels

---

## 📝 Component Update Checklist

When updating any component:
1. ✅ Only modify layout, spacing, colors, and sizing
2. ✅ Use standard Tailwind font utilities (bold, semibold, medium, normal)
3. ✅ Remove any `font-['*']` declarations
4. ✅ Test on mobile, tablet, and desktop
5. ❌ Never change or add custom fonts
6. ❌ Never add new font families

---

## 🔄 Migration Guide

If you find old code with custom fonts:

### Before (OLD)
```tsx
<div className="font-['Poppins'] text-base text-gray-600">
  Old custom font
</div>
```

### After (NEW)
```tsx
<div className="text-base text-gray-600">
  New system font (Inter)
</div>
```

---

## 📞 Questions?

This policy ensures consistency, performance, and maintainability. 
Always focus on **design and layout** - let Inter handle the typography! 🚀
