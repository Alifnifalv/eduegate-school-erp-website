// src/app/features/page.tsx
import { FeatureHero } from "../../components/marketing/FeatureHero";
import { DetailedFeatureGrid } from "../../components/marketing/DetailedFeatureGrid";

// It's also a good practice to have a call-to-action at the end.
import { CtaSection } from "../../components/marketing/CtaSection"; 
// We'll create this component in the next step.

export default function FeaturesPage() {
  return (
    <main>
      <FeatureHero />
      <DetailedFeatureGrid />
      <CtaSection />
    </main>
  );
}