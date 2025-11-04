// src/app/features/page.tsx
import { FeatureHero } from "../../components/marketing/FeatureHero";
import { AllFeaturesSection } from '../../components/marketing/AllFeaturesSection';
import { DetailedFeatureGrid } from "../../components/marketing/DetailedFeatureGrid";
import { AlternatingFeatures } from "../../components/marketing/AlternatingFeatures";
import { KeyFeatures } from "../../components/marketing/KeyFeatures";
import { LearnSmarterSection } from '../../components/marketing/LearnSmarterSection'; 
// It's also a good practice to have a call-to-action at the end.
import { CtaSection } from "../../components/marketing/CtaSection"; 
// We'll create this component in the next step.

export default function FeaturesPage() {
  return (
    <main>
       <AllFeaturesSection />
            <LearnSmarterSection />

      <FeatureHero />
      <KeyFeatures /> 
      <DetailedFeatureGrid />
         <AlternatingFeatures /> 
      <CtaSection />
    </main>
  );
}