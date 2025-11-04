// src/components/marketing/AiFeatures.tsx
"use client";

import { motion, Variants } from 'framer-motion';

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Custom Icon Components (SVG) ---
// These are simple React components that render the custom icons from your design.
const VideoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor:'#34D399', stopOpacity:1}} /><stop offset="100%" style={{stopColor:'#3B82F6', stopOpacity:1}} /></linearGradient></defs>
    <path d="M38 12H10C7.79086 12 6 13.7909 6 16V32C6 34.2091 7.79086 36 10 36H38C40.2091 36 42 34.2091 42 32V16C42 13.7909 40.2091 12 38 12Z" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L29 24L21 27V21Z" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8L16 10" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 8L34 10" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 38L16 40" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 38L34 40" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PredictionIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor:'#34D399', stopOpacity:1}} /><stop offset="100%" style={{stopColor:'#6366F1', stopOpacity:1}} /></linearGradient></defs>
    <path d="M24 18C26.7614 18 29 15.7614 29 13C29 10.2386 26.7614 8 24 8C21.2386 8 19 10.2386 19 13C19 15.7614 21.2386 18 24 18Z" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 38V35C35 31.134 31.866 28 28 28H20C16.134 28 13 31.134 13 35V38" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 18L36 20" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18L14 20" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlannerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{stopColor:'#2DD4BF', stopOpacity:1}} /><stop offset="100%" style={{stopColor:'#3B82F6', stopOpacity:1}} /></linearGradient></defs>
    <path d="M16 42H10C7.79086 42 6 40.2091 6 38V13C6 11.3431 7.34315 10 9 10H16" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 6H38C40.2091 6 42 7.79086 42 10V35C42 36.6569 40.6569 38 39 38H32" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="6" width="16" height="36" rx="2" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 14L26 18" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 18L22 20" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
    {
        Icon: VideoIcon,
        title: "AI-Generated Video Lesson",
        description: "Transforms traditional notes into engaging, interactive video content. The system auto-generates topic-wise videos tailored to your curriculum.",
    },
    {
        Icon: PredictionIcon,
        title: "Dropout Prediction Engine",
        description: "Our AI analyzes academic performance, attendance trends, and behavioral patterns of students to predict potential dropouts.",
    },
    {
        Icon: PlannerIcon,
        title: "AI-Powered Lesson Planner",
        description: "eduēgate’s intelligent planner crafts structured, curriculum-aligned lesson plans in minutes. It adapts to board standards of CBSE, ICSE, IB, and more.",
    },
]

export function AiFeatures() {
    return (
        <section className="relative overflow-hidden bg-gray-900 text-white py-20 sm:py-32">
            {/* Background SVG Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cpath fill='none' stroke='%233B82F6' stroke-width='0.5' d='M-400 0C-400 441.83 223.86 800 500 800S1400 441.83 1400 0S876.14-800 500-800 -400-441.83-400 0z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                >
                    <p className="font-semibold text-blue-400">The best educational ERP in the industry</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
                        AI-Powered Educational ERP for the Future of Learning
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
                        By blending automation, intelligence, and innovation, eduēgate empowers schools, colleges, and universities to deliver smarter, more personalized learning experiences.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeInUp}
                            className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="mb-6"><feature.Icon /></div>
                            <h3 className="text-xl font-bold text-blue-900">{feature.title}</h3>
                            <p className="mt-4 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}