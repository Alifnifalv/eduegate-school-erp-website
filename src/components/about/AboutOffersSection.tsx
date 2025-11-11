"use client";

"use client";

import React from 'react';
import { Cloud, Smartphone, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Feature card icons as SVG components
const FeatureIcons = {
  modular: () => (
    <svg className="w-20 h-20" viewBox="0 0 84 84" fill="none">
      <g stroke="#FF6642" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="15" y="28" width="20" height="20" rx="2" />
        <rect x="42" y="28" width="20" height="20" rx="2" />
        <rect x="28" y="42" width="20" height="20" rx="2" />
        <path d="M 35 28 L 42 35" />
        <path d="M 49 42 L 56 49" />
      </g>
    </svg>
  ),
  cloud: () => (
    <svg className="w-20 h-20" viewBox="0 0 126 84" fill="none">
      <g stroke="#FF6642" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 95 40 C 100 25 115 25 120 35 C 122 30 126 32 126 40 C 126 50 120 58 110 58 L 25 58 C 12 58 8 50 8 40 C 8 30 15 22 25 22 C 28 12 40 8 48 15 C 55 8 70 5 85 20" />
        <circle cx="45" cy="70" r="4" fill="#FF6642" />
        <path d="M 45 75 L 45 85" />
      </g>
    </svg>
  ),
  mobile: () => (
    <svg className="w-20 h-20" viewBox="0 0 51 84" fill="none">
      <g stroke="#FF6642" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="31" height="52" rx="3" />
        <rect x="10" y="8" width="31" height="8" fill="none" />
        <circle cx="25.5" cy="72" r="3" fill="#FF6642" />
        <line x1="18" y1="22" x2="33" y2="22" />
        <line x1="18" y1="32" x2="33" y2="32" />
        <line x1="18" y1="42" x2="33" y2="42" />
      </g>
    </svg>
  ),
  security: () => (
    <svg className="w-20 h-20" viewBox="0 0 75 84" fill="none">
      <g stroke="#FF6642" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 37.5 10 L 10 25 L 10 48 C 10 65 37.5 75 37.5 75 C 37.5 75 65 65 65 48 L 65 25 L 37.5 10 Z" />
        <path d="M 28 42 L 35 50 L 50 32" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  ),
  automation: () => (
    <svg className="w-20 h-20" viewBox="0 0 79 84" fill="none">
      <g stroke="#FF6642" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="30" r="8" />
        <path d="M 30 30 L 49 30" />
        <circle cx="59" cy="30" r="8" />
        <path d="M 59 38 L 59 50" />
        <rect x="45" y="50" width="28" height="20" rx="3" />
        <path d="M 50 58 L 62 58 M 50 65 L 67 65" strokeWidth="2" />
        <path d="M 15 55 Q 15 70 45 70 Q 75 70 75 55" fill="none" />
      </g>
    </svg>
  ),
};

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof FeatureIcons;
}

const features: Feature[] = [
  {
    id: 'cloud',
    title: 'Cloud-based and on-premises deployment',
    description: 'Cloud-based and on-premises deployment for flexible access and data control',
    icon: 'cloud',
  },
  {
    id: 'mobile',
    title: 'Mobile-first design',
    description: 'Mobile-first design for seamless use by administrators, teachers, students, and parents',
    icon: 'mobile',
  },
  {
    id: 'security',
    title: 'Secure, scalable architecture',
    description: 'Secure, scalable architecture built for compliance and institutional growth',
    icon: 'security',
  },
  {
    id: 'automation',
    title: 'End-to-end automation',
    description: 'End-to-end automation across academics, finance, HR, communication, and reporting',
    icon: 'automation',
  },
];

export function AboutOffersSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144685] font-['Poppins']">
            What eduêgate offers
          </h2>
        </motion.div>

        {/* Main Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-[#dbdbdb] rounded-3xl p-8 md:p-12 mb-8 md:mb-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <FeatureIcons.modular />
          </div>
          <div className="space-y-5">
            <p className="text-base md:text-lg text-[#111111] font-['Poppins'] leading-relaxed">
              Modular ERP logic for easy customization and integration with existing workflows
            </p>
            <p className="text-base md:text-lg text-[#111111] font-['Poppins'] leading-relaxed">
              Whether you're a CBSE, British, American school, international institution, or a multi-campus group, eduêgate adapts to your needs—making it the top choice for school digital transformation.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = FeatureIcons[feature.icon];
            return (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white border border-[#dbdbdb] rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-8">
                  <IconComponent />
                </div>
                <p className="text-base text-[#111111] font-['Poppins'] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutOffersSection;
