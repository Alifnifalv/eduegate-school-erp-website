"use client"
import { motion } from 'framer-motion';
import { AboutHeroSection } from '@/components/about/AboutHeroSection';
import { AboutOffersSection } from '@/components/about/AboutOffersSection';
import { AboutDevelopedBySection } from '@/components/about/AboutDevelopedBySection';
import { AboutSoftopSection } from '@/components/about/AboutSoftopSection';
import { AboutVisionMissionCards } from '@/components/about/AboutVisionMissionCards';
import { PlatformHighlights } from "../../components/about/PlatformHighlights"; 
import { VisionMissionSection } from '@/components/about/VisionMissionSection'; 
import { TestimonialsSection } from '@/components/about/TestimonialsSection'; 

export default function FeaturesPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <AboutHeroSection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <AboutOffersSection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <AboutDevelopedBySection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <AboutSoftopSection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <AboutVisionMissionCards />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <TestimonialsSection />
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <VisionMissionSection /> 
      </motion.div>
      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <PlatformHighlights />
      </motion.div>
    </main>
  );
}