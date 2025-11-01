// src/components/marketing/VisionMissionSection.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// --- Reusable animation variant for a gentle fade-in-up effect ---
const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function VisionMissionSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Animated container for the illustration */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          {/* A background decorative shape for added visual interest */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-50"></div>
          
          <Image
            src="/images/vision-illustration.svg" // Your downloaded SVG illustration
            alt="An illustration representing educational growth and technology"
            width={500}
            height={300}
            className="relative mx-auto"
          />
        </motion.div>
        
        {/* The horizontal divider line with a margin */}
        <div className="relative my-12 md:my-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
            </div>
        </div>

        {/* The two-column grid for Vision and Mission */}
        {/* This will stack vertically on mobile screens automatically */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Vision Column */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To lead the future of education with smart, inclusive, and impactful technology—bridging gaps and unlocking the full potential of every student.
            </p>
          </motion.div>
          
          {/* Mission Column */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To deliver cutting-edge EdTech solutions that simplify school management, enhance transparency, and foster the empowerment of every stakeholder.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}