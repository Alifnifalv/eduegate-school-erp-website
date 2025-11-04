// src/components/marketing/MobileAppSection.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Settings, UserCog, Users, Gauge } from 'lucide-react';
import Link from 'next/link';

// Animation variants for Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Data for the side icons
const sideIcons = [
  { Icon: Settings },
  { Icon: UserCog },
  { Icon: Users },
  { Icon: Gauge },
];

// Data for the role-based access list
const roles = [
  "Teachers", "Admins", "Owners",
  "Visitors", "Parents", "Bus Attenders",
  "Students", "Security"
];

export function MobileAppSection() {
  return (
    <section className="relative w-full bg-blue-700 text-white overflow-hidden">
      {/* Background SVG Wave */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path fill="#0099ff" fillOpacity="0.4" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Decorative Foreground Circles */}
      <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-cyan-400/50 rounded-full blur-xl"></div>
      <div className="absolute -right-24 -bottom-12 w-80 h-80 bg-cyan-400/50 rounded-full blur-2xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >

          {/* Left Column: Phone Image */}
          <motion.div variants={fadeInUp}>
            <Image 
              src="/features/phone-app-mockup.png" // Replace with your phone mockup image
              alt="Eduêgate Teachie Mobile App"
              width={450}
              height={900}
              className="mx-auto w-[280px] h-auto md:w-[350px]"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="flex items-start gap-4">
            
            {/* Side Icons */}
            <motion.div variants={staggerContainer} className="hidden sm:flex flex-col gap-4 pt-16">
              {sideIcons.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="bg-white/10 p-3 rounded-lg">
                  <item.Icon className="h-6 w-6" />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Main Text Block */}
            <motion.div variants={staggerContainer} className="space-y-6">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
                edûegate Teachie
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-blue-100 max-w-md">
                A powerful mobile app that keeps students, parents, teachers, and administrators connected—no matter where they are.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <h3 className="font-semibold mb-3">Role based access for:</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-blue-200">
                  {roles.map((role) => (
                    <li key={role} className="flex items-center gap-2">
                        <span className="text-cyan-300">•</span> {role}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                 <Link href="#">
                    <Image src="/badges/google-play-badge.svg" alt="Get it on Google Play" width={135} height={40} />
                </Link>
                 <Link href="#">
                    <Image src="/badges/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} />
                </Link>
              </motion.div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}