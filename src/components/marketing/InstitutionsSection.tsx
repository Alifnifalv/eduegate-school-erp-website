// src/components/marketing/InstitutionsSection.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// --- Animation Variants for Framer Motion ---
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// --- Data for the cards ---
const institutions = [
  {
    name: 'Schools',
    imageSrc: '/institutions/schools.jpg',
  },
  {
    name: 'Universities',
    imageSrc: '/institutions/universities.jpg',
  },
  {
    name: "Academy's",
    imageSrc: '/institutions/academies.jpg',
  },
  {
    name: 'Kinder Gardens',
    imageSrc: '/institutions/kindergartens.jpg',
  },
];

export function InstitutionsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="font-semibold text-gray-500">What We Serve</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-blue-900">
            Tailored ERP for Every Educational Institution
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our ERP is designed to meet the unique needs of all educational institutions. From kindergarten classrooms to university campuses, we understand that education demands more than generic software.
          </p>
        </motion.div>

        {/* --- Grid for the Cards --- */}
        {/* On mobile, it's 2 columns (grid-cols-2), and on larger screens, it's 4 columns (lg:grid-cols-4). */}
        <motion.div 
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {institutions.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={item.imageSrc}
                alt={item.name}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              
              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl font-bold text-center drop-shadow-md">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}