// src/components/marketing/FeaturedModuleSection.tsx
"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// A simple fade-in-up animation variant for reuse
const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function FeaturedModuleSection() {
  const imgFrame1000003084 = "https://www.figma.com/api/mcp/asset/37113c0a-e4b4-4641-8570-3864af90e6c6";

  return (
    <section className="relative overflow-hidden bg-[#144685] text-white py-32 px-6 sm:px-8 lg:px-28">
      {/* Background image overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          alt="background pattern" 
          className="absolute max-w-none object-cover size-full opacity-40" 
          src={imgFrame1000003084} 
        />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-5"
        >
          {/* Title */}
          <motion.div variants={fadeInUp} className="mb-5">
            <h2 className="text-5xl md:text-6xl font-medium font-sans leading-tight">
              eduTransafe
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <p className="text-lg font-serif leading-relaxed text-white">
              A dedicated Transport Management System, designed to prioritize student safety while streamlining school transport operations. With a mobile app for drivers and real-time monitoring for administrators, eduTransafe ensures every journey is secure, efficient, and accountable.
            </p>
          </motion.div>

          {/* Features Grid - Two columns */}
          <motion.div variants={fadeInUp} className="space-y-3 pt-2">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-8">
              <ul className="text-base font-serif text-white list-disc pl-6">
                <li className="leading-8">Route Optimization</li>
              </ul>
              <ul className="text-base font-serif text-white list-disc pl-6">
                <li className="leading-8">Built-In Attendance Marking</li>
              </ul>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-8">
              <ul className="text-base font-serif text-white list-disc pl-6">
                <li className="leading-8">Driver Behavior Monitoring</li>
              </ul>
              <ul className="text-base font-serif text-white list-disc pl-6">
                <li className="leading-8">Real-Time Location & Notifications</li>
              </ul>
            </div>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div variants={fadeInUp} className="pt-4">
            <Link 
              href="/features/transport" 
              className="inline-flex items-center justify-center bg-[#f9d716] text-[#111111] px-5 py-3 rounded-lg text-sm font-semibold font-sans hover:bg-yellow-500 transition-colors duration-300"
            >
              Know More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}