// src/components/marketing/FeaturedModuleSection.tsx
"use client";

import Link from 'next/link';
import { Bus, MapPin, Check } from 'lucide-react';
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
  return (
    // The main section container. We use `overflow-hidden` for the decorative blur circles.
    <section className="relative overflow-hidden bg-sky-900 text-white py-20 sm:py-24">
      
      {/* Decorative background blur circles */}
      <div className="absolute -left-16 -top-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl"></div>
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* === LEFT COLUMN: Text Content === */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              eduTransafe
            </h2>
            <p className="text-lg text-sky-200 leading-relaxed">
              A dedicated Transport Management System, designed to prioritize student safety while streamlining school transport operations. With a mobile app for drivers and real-time monitoring for administrators, eduTransafe ensures every journey is secure, efficient, and accountable.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 text-sky-100">
              <li className="flex items-center gap-3">
                <Check size={20} className="text-yellow-400 shrink-0" />
                <span>Route Optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-yellow-400 shrink-0" />
                <span>Built-in Attendance Marking</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-yellow-400 shrink-0" />
                <span>Driver Behavior Monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-yellow-400 shrink-0" />
                <span>Real-Time Location & Notifications</span>
              </li>
            </ul>
            <div className="pt-6">
              <Link href="/features/transport" className="inline-block bg-yellow-400 text-sky-950 px-8 py-3 rounded-lg text-base font-bold hover:bg-yellow-500 transition-transform hover:scale-105 duration-300 shadow-lg">
                Know More
              </Link>
            </div>
          </motion.div>
          
          {/* === RIGHT COLUMN: Graphic Content === */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-cyan-500 rounded-full flex items-center justify-center">
                <Bus size="60%" className="text-sky-900" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-4 shadow-lg">
                <MapPin size={40} className="text-cyan-600" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}