// src/app/features/page.tsx


// It's also a good practice to have a call-to-action at the end.
import { PlatformHighlights } from "../../components/about/PlatformHighlights"; 
import { VisionMissionSection } from '@/components/about/VisionMissionSection'; 
import { TestimonialsSection } from '@/components/about/TestimonialsSection'; 
// We'll create this component in the next step.

export default function FeaturesPage() {
  return (
    <main>
      <TestimonialsSection />
<VisionMissionSection /> 
      <PlatformHighlights />
    </main>
  );
}