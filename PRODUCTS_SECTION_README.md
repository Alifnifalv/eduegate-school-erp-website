# ProductsMaintenanceSection Component

## Overview

A beautifully designed "Under Maintenance" section component implemented from the Figma design. This section features animated icons with decorative backgrounds and maintenance messaging.

## Location

- **Component File**: `src/components/marketing/ProductsMaintenanceSection.tsx`
- **Demo Page**: `src/app/products/page.tsx`

## Features

✨ **Design Features**:
- Gradient background image
- Animated maintenance icons (Setting, Wrench, Warning)
- Decorative oval backgrounds for each icon
- Responsive typography
- Color scheme matching brand guidelines (#144685 primary, #484848 text)

## Usage

### Basic Implementation

```tsx
import { ProductsMaintenanceSection } from "@/components/marketing/ProductsMaintenanceSection";

export default function ProductsPage() {
  return (
    <main>
      <ProductsMaintenanceSection />
    </main>
  );
}
```

### In Existing Pages

```tsx
import { ProductsMaintenanceSection } from "@/components/marketing/ProductsMaintenanceSection";

export function YourPage() {
  return (
    <div>
      <OtherSections />
      <ProductsMaintenanceSection />
      <MoreSections />
    </div>
  );
}
```

## Component Structure

The component includes:

1. **Background Layer**: Full-width gradient background image
2. **Icon Grid**: Three-icon arrangement with:
   - Setting icon (top-left)
   - Wrench icon (center-right)
   - Warning icon (bottom-right)
3. **Text Content**: 
   - Large heading: "Under Maintenance"
   - Subtitle with messaging

## Image Assets

The component uses Figma API URLs for assets (valid for 7 days):

- `imgBanner` - Background gradient image
- `imgSetting` - Settings icon
- `imgWrench` - Wrench/tools icon
- `imgWarning` - Warning icon
- `imgOval` / `imgOval1` / `imgOval2` - Decorative backgrounds

### Important Note on Assets

The image URLs are hosted on Figma's temporary storage and expire after 7 days. To use this component long-term:

**Option 1: Download and Store Locally**

1. Download the image assets from the Figma URLs
2. Save them to `public/images/products/`
3. Update the import paths:

```tsx
const imgBanner = "/images/products/banner.png";
const imgSetting = "/images/products/setting.png";
// ... etc
```

**Option 2: Integrate with CDN**

Upload assets to your CDN and update URLs:

```tsx
const imgBanner = "https://your-cdn.com/products/banner.png";
```

## Responsive Design

The component uses Tailwind CSS utilities:

- **Padding**: `py-[89px] px-[270px]` (adjust for mobile)
- **Icon Positioning**: Absolute positioning for precise layout control
- **Text Sizing**: Responsive font sizes for headings and descriptions

### Mobile Optimization (Recommended)

Add responsive variants to make it mobile-friendly:

```tsx
className="relative w-full py-[89px] px-[270px] md:py-12 md:px-6 bg-white..."
```

## Customization

### Change Text Content

```tsx
<h2 className="text-5xl font-semibold text-[#144685]">
  Your Custom Title
</h2>
<p className="text-2xl text-[#484848]">
  Your custom subtitle
</p>
```

### Adjust Colors

Update the color values:
- Primary color: `#144685` (brand blue)
- Text color: `#484848` (dark grey)

### Modify Icon Sizes

Adjust dimensions for each icon:

```tsx
<div className="relative w-[168px] h-[183px]">
  {/* Your icon */}
</div>
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance Considerations

1. **Image Optimization**: Ensure background image is optimized for web
2. **Lazy Loading**: Consider adding `loading="lazy"` to images if needed
3. **Background Image**: May want to use CSS background for better performance

## Future Enhancements

- [ ] Add countdown timer for maintenance end date
- [ ] Implement animated icon transitions
- [ ] Add email subscription for launch notifications
- [ ] Create variants for different maintenance messages
- [ ] Add dark mode support

## Related Components

- `HeroSection` - Hero banner component
- `CtaSection` - Call-to-action section
- `AllFeaturesSection` - Features listing

## File Reference

From Figma: `https://www.figma.com/design/esO2BuiT9aAUhYxRERWJbv/Eduegate-Website?node-id=485-11886&m=dev`

Node ID: `638:401` (Products/Under Maintenance Section)
