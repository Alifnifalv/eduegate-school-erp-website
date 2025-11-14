// src/components/marketing/MobileAppSection.tsx
"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Figma asset URLs
const imgMockup1 = "https://www.figma.com/api/mcp/asset/87185c96-c270-4545-ae43-3ac3bba1e396";
const imgGroup = "https://www.figma.com/api/mcp/asset/20e8675e-6516-4d57-a7c4-5cc4e9eb67d0";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/0e4073aa-05e1-49a2-81a0-e0c843ecdaab";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/f4347855-fe5a-46b2-bef3-7d1ed3c9bfab";
const imgVector = "https://www.figma.com/api/mcp/asset/bf4ba158-e45e-4414-84f3-0af8b121fc01";
const imgApple = "https://www.figma.com/api/mcp/asset/64eef205-35d5-4396-a798-372fa644ba41";
const imgPlaystore = "https://www.figma.com/api/mcp/asset/eaccd0eb-125e-40ac-b8db-35256d2dae6e";
const imgPath90 = "https://www.figma.com/api/mcp/asset/23d8d038-3ad1-40c2-abc4-6f15146489a8";

// Animation variants for Framer Motion
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Side icons data
const sideIcons = [
  { img: imgGroup },
  { img: imgGroup1 },
  { img: imgGroup2 },
  { img: imgVector },
];

export function MobileAppSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#144685' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img alt="" className="absolute max-w-none object-cover size-full" src="https://www.figma.com/api/mcp/asset/42114c7b-cceb-4152-a6f2-f07ee6de2232" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src="https://www.figma.com/api/mcp/asset/146885c2-f368-44ed-be3a-1fba7cf6ddf5" />
      </div>

      {/* Decorative circles */}
      <div className="absolute -left-32 top-1/2 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 top-1/2 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-52 py-16">
        <motion.div 
          className="flex gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Left Column: Phone Mockup + Side Icons */}
          <div className="flex gap-16 items-center">
            {/* Phone Mockup */}
            <motion.div variants={fadeInUp} className="flex-shrink-0 w-48">
              <div className="relative shadow-2xl">
                <img 
                  alt="Teachie Mobile App Mockup" 
                  className="w-full h-auto rounded-2xl" 
                  src={imgMockup1}
                />
              </div>
            </motion.div>

            {/* Side Icons Column */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-3 pt-8">
              {sideIcons.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp} 
                  className="bg-white flex items-center justify-center p-4 rounded-2xl w-20 h-20 shadow-lg"
                >
                  <img alt="" className="w-10 h-10 object-contain" src={item.img} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <motion.div variants={staggerContainer} className="flex-1 flex flex-col gap-10">
            {/* Headline */}
            <motion.h2 variants={fadeInUp} className="text-5xl font-bold font-sans text-white">
              eduêgate Teachie
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-lg font-serif text-white leading-relaxed max-w-2xl">
              A powerful mobile app that keeps students, parents, teachers, and administrators connected—no matter where they are.
            </motion.p>

            {/* Role Based Access */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                Role based access for:
              </h3>
              
              {/* First Row */}
              <div className="flex gap-4 text-white text-lg">
                <ul className="list-disc list-inside">
                  <li>Teachers</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Admins</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Owners</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Bus attenders</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Security</li>
                </ul>
              </div>

              {/* Second Row */}
              <div className="flex gap-4 text-white text-lg">
                <ul className="list-disc list-inside">
                  <li>Visitors</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Parents</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Teachers</li>
                </ul>
                <ul className="list-disc list-inside">
                  <li>Students</li>
                </ul>
              </div>
            </motion.div>

            {/* Download Buttons */}
            <motion.div variants={fadeInUp} className="flex gap-5 pt-4">
              {/* Google Play Button */}
              <a href="#" className="bg-black border border-gray-500 rounded-lg p-2 w-32 h-10 flex items-center justify-center">
                <img alt="Get it on Google Play" className="w-full h-full object-contain" src={imgPlaystore} />
              </a>
              
              {/* App Store Button */}
              <a href="#" className="bg-black border border-gray-500 rounded-lg p-2 w-32 h-10 flex items-center justify-center">
                <img alt="Download on the App Store" className="w-full h-full object-contain" src={imgApple} />
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}