"use client";
import { Quote } from 'lucide-react';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Suspense } from 'react';
import { ThreeBackground } from './ThreeBackground'; 
import { ThreeScene } from '../three/ThreeScene'; 

import { AppRatingWidget } from '../widgets/AppRatingWidget';
import { StatsWidget } from '../widgets/StatsWidget';
import { MobileAppWidget } from '../widgets/MobileAppWidget';
import { TypingText } from '../widgets/TypingText';

// Data for the orbiting logos
const marqueeLogos = [
  { src: '/logos/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/logos/react.png', alt: 'React' },
  { src: '/logos/html.png', alt: 'HTML 5' },
  { src: '/logos/typescript.svg', alt: 'TypeScript' },
  { src: '/logos/javascript.svg', alt: 'JavaScript' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      // Stagger the animation of children by 0.1 seconds
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 }, // Start 20px below and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99], // A nice easing curve
    },
  },
};

export function NewHeroSection() {
  return (
    <section className="relative border-b border-gray-200 bg-gray-50/50 py-16 lg:py-20">
    <div className="absolute top-0 left-0 w-full h-full z-0">
      
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          {/* <ThreeBackground /> */}
            {/* <ThreeScene /> */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundColor: "#000",
      backgroundImage: "url('/backgrounds/white.8d3d9fa1.png')",
      backgroundSize: "150px 150px",
      backgroundPosition: "top",
      backgroundRepeat: "repeat",
      opacity: 0.05,
      zIndex: -2,
    }}
  ></div>


        </Suspense>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Column with Updated Text */}
          <motion.div  initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants} className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-12">
            <div className="space-y-2">
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold leading-tight">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span>The</span>
                  <span className="py-2.5 text-3xl md:text-5xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              <TypingText />
                 
                  </span>
                </div>
              </motion.h1>
                 <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold leading-tight">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span>Way, to Run a School.</span>
                </div>
              </motion.h1>
              <motion.h2 variants={fadeInUp} className="text-lg lg:text-3xl font-semibold text-gray-800">
                The All-in-One School Management System
              </motion.h2>
            </div>
            <div className="rounded-xl bg-white shadow-lg border border-gray-200/80 p-5 space-y-3.5 relative w-full max-w-md">
              <Quote className="size-6 absolute -top-3 right-4 fill-white stroke-black drop-shadow-lg" />
              <p className="text-base text-gray-600">
                &quot;This ERP solution has been transformative for our institution. It streamlined our operations and improved parent-teacher communication immensely. &quot;
              </p>
              <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2.5">
                <span className="text-sm text-gray-900 font-semibold">John Doe</span>
                <span className="text-xs">
                  <span className="text-gray-500">Principal at </span>
                  <span className="text-gray-900 font-semibold">Future Minds Academy</span>
                </span>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                <Image src="/users/user1.png" alt="User 1" width={48} height={48} className="rounded-full border-2 border-white shadow-md" />
                <Image src="/users/user2.png" alt="User 2" width={48} height={48} className="rounded-full border-2 border-white shadow-md" />
                <Image src="/users/user3.png" alt="User 3" width={48} height={48} className="rounded-full border-2 border-white shadow-md" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400">★★★★★</div>
                <span className="font-semibold text-sm text-gray-800">Trusted by 5+ Institutions</span>
              </div>
            </div>
          </motion.div>
             <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
             <Image 
                // The single image you will provide.
                src="/widgets/hero-image-combined.svg" 
                alt="Eduegate ERP Dashboard and App Widgets"
                width={600}
                height={550}
                className="w-full h-auto"
              />
          </motion.div>


        {/* <div className="hidden lg:flex items-center justify-center h-[500px] w-full relative">

        <div className="absolute z-20 flex items-center justify-center size-36 rounded-2xl border border-gray-200 bg-white/30 shadow-2xl backdrop-blur-sm">
         <Image src="/logos/eduegate-mini-logo.svg" alt="Logo" width={80} height={80} />
         </div>
           <div className="w-full h-full flex flex-col justify-center items-center gap-y-10 overflow-hidden">
             <div className="group flex gap-x-10 animate-marquee">
               {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                 <div key={index} className="flex items-center justify-center size-14 border border-gray-200 bg-white shadow-sm rounded-lg">
                   <Image src={logo.src} alt={logo.alt} width={30} height={30} />
                 </div>
               ))}
             </div>
             <div className="group flex gap-x-10 animate-marquee-reverse">
                {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                 <div key={index} className="flex items-center justify-center size-14 border border-gray-200 bg-white shadow-sm rounded-lg">
                   <Image src={logo.src} alt={logo.alt} width={30} height={30} />
                 </div>
               ))}
             </div>
           </div>
           <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50/50 to-transparent"></div>
           <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50/50 to-transparent"></div>

        </div> */}
      </div>
      </div>
    </section>
  );
}

