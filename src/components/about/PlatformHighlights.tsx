// src/components/marketing/PlatformHighlights.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { Puzzle, Server, Smartphone, ShieldCheck, Zap, Building2 } from 'lucide-react';
import React from 'react';

// Animation variants for Framer Motion
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Data for our highlight items
const highlights = [
  {
    icon: Puzzle,
    title: 'Modular & Customizable',
    description: 'Our modular ERP logic allows for easy customization and seamless integration with your existing school workflows.',
  },
  {
    icon: Building2,
    title: 'Adapts to Your Curriculum',
    description: "Whether you're a CBSE, British, American, or international institution, eduêgate adapts to your specific academic needs.",
  },
  {
    icon: Server,
    title: 'Flexible Deployment',
    description: 'Choose between secure cloud-based access or on-premises deployment for complete control over your data.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'A seamless and intuitive experience for administrators, teachers, students, and parents on any device.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Scalable',
    description: 'Built on a robust architecture that ensures data security, GDPR compliance, and institutional growth.',
  },
  {
    icon: Zap,
    title: 'End-to-End Automation',
    description: 'Automate daily tasks across academics, finance, HR, communication, and reporting to boost efficiency.',
  },
];

export function PlatformHighlights() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Eduêgate Offers
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comprehensive, one-platform solution designed to streamline and enhance every aspect of your school's operations.
          </p>
        </motion.div>

        {/* This is the grid container. It animates its children one by one. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants} className="text-center p-6 border border-transparent hover:border-gray-200 hover:shadow-lg rounded-xl transition-all">
              <div className="inline-block bg-blue-100 text-blue-600 rounded-lg p-3">
                <highlight.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{highlight.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}