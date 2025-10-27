// src/components/marketing/KeyFeatures.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Lock, Users, Wallet, FileText, Settings, GraduationCap } from 'lucide-react';

// --- Data for each feature node ---
// We define the title, icon, color, and positioning classes here for easy management.
const features = [
  {
    title: 'Academic Management',
    Icon: Lock,
    color: 'bg-yellow-400',
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Accounting Management',
    Icon: Wallet,
    color: 'bg-violet-500',
    position: 'top-1/4 right-0 -translate-y-1/2 translate-x-1/2',
  },
  {
    title: 'Exam Management',
    Icon: FileText,
    color: 'bg-cyan-400',
    position: 'bottom-1/4 right-0 translate-y-1/2 translate-x-1/2',
  },
  {
    title: 'Administrator Tools',
    Icon: Settings,
    color: 'bg-pink-500',
    position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  },
  {
    title: 'Student Management',
    Icon: Users,
    color: 'bg-green-400',
    position: 'bottom-1/4 left-0 translate-y-1/2 -translate-x-1/2',
  },
  {
    title: 'User Management',
    Icon: GraduationCap,
    color: 'bg-sky-400',
    position: 'top-1/4 left-0 -translate-y-1/2 -translate-x-1/2',
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const zoomIn: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function KeyFeatures() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-semibold text-amber-500">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Check The Key Features Of Our ERP System
          </h2>
        </div>

        {/* This container holds the entire circular layout */}
        {/* It's hidden on mobile and replaced by a simpler grid below. */}
        <motion.div
          className="hidden md:block relative w-full max-w-3xl lg:max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Dotted Circle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] border-2 border-dashed border-gray-300 rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[50%] h-[50%] bg-gray-100/70 rounded-full blur-2xl"></div>
          </div>

          {/* Central Phone Image */}
          <motion.div variants={zoomIn} className="relative z-10 p-20">
            <Image
              src="/features/mobile-app-staff.png" // Make sure this image is in your public/features folder
              alt="School ERP App on Phone"
              width={300}
              height={600}
              className="mx-auto shadow-2xl rounded-3xl"
            />
          </motion.div>

          {/* Feature Icons positioned absolutely */}
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={zoomIn}
              className={`absolute ${feature.position} z-20 flex flex-col items-center gap-2`}
            >
              <div className={`flex items-center justify-center w-16 h-16 rounded-full shadow-md ${feature.color}`}>
                <feature.Icon className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-sm text-center">{feature.title}</p>
            </motion.div>
          ))}
        </motion.div>

<div className="md:hidden grid grid-cols-1 gap-12">
    {features.map((feature) => (
        <div key={feature.title} className="flex items-center gap-4">
             <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full shadow-md ${feature.color}`}>
                <feature.Icon className="h-7 w-7 text-white" />
            </div>
            <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
            </div>
        </div>
    ))}
</div>

      </div>
    </section>
  );
}