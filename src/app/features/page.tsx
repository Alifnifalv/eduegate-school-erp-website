// src/app/features/page.tsx
import { FeatureHero } from "../../components/marketing/FeatureHero";
import { AllFeaturesSection } from '../../components/marketing/AllFeaturesSection';
import { DetailedFeatureGrid } from "../../components/marketing/DetailedFeatureGrid";
import { AlternatingFeatures } from "../../components/marketing/AlternatingFeatures";
import { KeyFeatures } from "../../components/marketing/KeyFeatures";
import { LearnSmarterSection } from '../../components/marketing/LearnSmarterSection'; 
import { CtaSection } from "../../components/marketing/CtaSection";

export const metadata = {
  title: 'Features - Eduegate',
  description: 'Explore all the powerful features of Eduegate School ERP System designed for modern educational institutions.',
};

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <FeatureHero />
      <AllFeaturesSection />
      <KeyFeatures /> 
      <DetailedFeatureGrid />
      <AlternatingFeatures />
      <CtaSection />
    </main>
  );
}