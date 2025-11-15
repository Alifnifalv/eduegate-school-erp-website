import { AboutHeroSection } from '../../components/about/AboutHeroSection';
import { AboutOffersSection } from '../../components/about/AboutOffersSection';
import { AboutDevelopedBySection } from '../../components/about/AboutDevelopedBySection';
import { AboutSoftopSection } from '../../components/about/AboutSoftopSection';
import { AboutVisionMissionCards } from '../../components/about/AboutVisionMissionCards';
import { TestimonialsSection } from '../../components/about/TestimonialsSection';
import { VisionMissionSection } from '../../components/about/VisionMissionSection';
import { PlatformHighlights } from '../../components/about/PlatformHighlights';
import { AboutMapSection } from '../../components/about/AboutMapSection';

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutOffersSection />
      <AboutDevelopedBySection />
      <AboutSoftopSection />
      <AboutVisionMissionCards />
      {/* <TestimonialsSection /> */}
      {/* <VisionMissionSection />
      <PlatformHighlights />
      <AboutMapSection /> */}
    </main>
  );
}