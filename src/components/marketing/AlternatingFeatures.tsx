// src/components/marketing/AlternatingFeatures.tsx
"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- Reusable animation variants ---
const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// --- Your feature data ---
const featureData = [
    {
        title: 'AI-Powered Learning & Insights',
        description: 'Enhance student outcomes with Edugate’s advanced AI modules for personalized teaching, score prediction, and performance tracking.',
        imageSrcs: ['/features/feature-ai.png', '/features/feature-communication.png'],
        points: [
          'Edugate AI for deep learning and analytics',
          'Virtual Teacher AI with customizable avatars',
          'Score Prediction AI for academic forecasting',
          'Student performance tracking and insights',
        ],
      },
      {
        title: 'Smart Communication & Engagement',
        description: 'Keep parents, staff, and students connected through multi-channel communication tools and real-time updates.',
        imageSrcs: ['/features/feature-communication.png', '/features/feature-finance.png'],
        points: [
          'Parent and staff communication via email, SMS, and push notifications',
          'Parent App and Portal for academic updates',
          'Meeting and Appointment scheduling systems',
          'Visitor App and Dashboard for campus interactions',
        ],
      },
      {
        title: 'Finance & Operations Automation',
        description: 'Streamline your school’s financial and operational processes with automated tools and integrated reporting.',
        imageSrcs: ['/features/feature-finance.png', '/features/feature-student.png'],
        points: [
          'Automated bank reconciliation and financial audits',
          'Budgeting, variance analysis, and financial reporting',
          'Integrated fee, payroll, and inventory modules',
          'Procurement comparison and vendor management',
        ],
      },
      {
        title: 'Student Lifecycle Management',
        description: 'Track every step of a student’s journey—from admission to graduation—with centralized dashboards and analytics.',
        imageSrcs: ['/features/feature-student.png', '/features/feature-hr.png'],
        points: [
          'Student journey and counseling tracking',
          'Student cockpit dashboard for academic data',
          'Attendance and examination modules',
          'Online exams and report card publishing',
        ],
      },
];

export function AlternatingFeatures() {
  return (
    <section className="py-24 bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        {/* UPDATED: Changed from text-center to text-left within a max-width container */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="font-semibold text-red-900 tracking-[0.2em] uppercase">
            One Platform
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4">
            All-in-one Solution
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We provide comprehensive solutions to streamline school operations, making management effortless for administrators, staff, and parents.
          </p>
        </motion.div>
        
        {/* --- Features List --- */}
        <div className="space-y-28">
          {featureData.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* === TEXT BLOCK === */}
              {/* Text here is already left-aligned by default, which is correct */}
              <motion.div
                variants={fadeInUp}
                className={`space-y-5 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
              >
                <p className="font-semibold text-red-900 tracking-[0.2em] uppercase text-sm">
                  Core Functionality
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                <ul className="space-y-3 pt-4">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0 mt-1" />
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* === IMAGE BLOCK === */}
              <motion.div 
                variants={fadeInUp} 
              >
                <div className="flex flex-col gap-8">
                  <Image
                    src={feature.imageSrcs[0]}
                    alt={`${feature.title} - primary illustration`}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg object-cover" 
                  />
                  <Image
                    src={feature.imageSrcs[1]}
                    alt={`${feature.title} - secondary illustration`}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg object-cover" 
                  />
                </div>
              </motion.div>
              
            </motion.div>
          ))}
        </div>

        {/* --- Final Call to Action Block (Remains centered for emphasis) --- */}
        <motion.div
          className="text-center mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Ready to Transform Your School?
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Let us show you how Edugate can empower your institution. Schedule a personalized demo with our team today.
            </p>
            <div className="mt-8">
                <Link 
                    href="/contact" 
                    className="inline-block bg-red-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-md text-lg"
                >
                    Book A Free Demo
                </Link>
            </div>
        </motion.div>

      </div>
    </section>
  );
}