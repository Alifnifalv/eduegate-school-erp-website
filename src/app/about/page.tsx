// src/app/about/page.tsx
import React from 'react';
import { AboutHeroSection } from '../../components/about/AboutHeroSection';
import { AboutOffersSection } from '../../components/about/AboutOffersSection';
import AboutDevelopedBySection from '../../components/about/AboutDevelopedBySection';
import AboutSoftopSection from '../../components/about/AboutSoftopSection';
import AboutVisionMissionCards from '../../components/about/AboutVisionMissionCards';
import { TestimonialsSection } from '../../components/about/TestimonialsSection';
import { VisionMissionSection } from '../../components/about/VisionMissionSection';
import { PlatformHighlights } from '../../components/about/PlatformHighlights';

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutOffersSection />
      <AboutDevelopedBySection />
      <AboutSoftopSection />
      <AboutVisionMissionCards />
      <TestimonialsSection />
      <VisionMissionSection />
      <PlatformHighlights />
    </main>
  );
}