// src/components/marketing/AiFeatures.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

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
    <Image src="/AI/ai generate ai lessons.svg" alt="AI Generate Video Lessons" width={100} height={100} />
);

const PredictionIcon = () => (
    <Image src="/AI/dropout preduction engine.svg" alt="Dropout Prediction Engine" width={100} height={100} />
);

const PlannerIcon = () => (
    <Image src="/AI/ai lesson planner.svg" alt="AI Lesson Planner" width={100} height={100} />
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
        <section
            className="relative overflow-hidden text-white py-24 sm:py-36"
            style={{
                backgroundColor: '#1A1926',
                backgroundImage: "url('/backgrounds/ai-section-main-page.png'), linear-gradient(180deg, #1A1926 0%, #23213A 100%)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
            }}
        >
            {/* Background SVG Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: `url("backgrounds/ai-section-main-page.svg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
                <header className="text-center">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                    >
                        <p className="font-semibold font-roboto text-base md:text-lg mb-2" style={{ color: 'var(--color-secondary)' }}>The best educational ERP in the industry</p>
                        <h2 className="text-4xl md:text-5xl font-bold font-lato tracking-tight mt-2 mb-4" style={{ color: 'var(--color-primarywhite)' }}>
                            AI-Powered Educational ERP for the Future of Learning
                        </h2>
                        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-roboto leading-8" style={{ color: 'var(--color-secondarylight)' }}>
                            By blending automation, intelligence, and innovation, eduēgate empowers schools, colleges, and universities to deliver smarter, more personalized learning experiences.
                        </p>
                    </motion.div>
                </header>
                <main>
                    <motion.div 
                        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.article 
                                key={index} 
                                variants={fadeInUp}
                                className="bg-white/95 backdrop-blur rounded-3xl p-10 text-center flex flex-col items-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                                aria-label={feature.title}
                            >
                                <div className="mb-8"><feature.Icon /></div>
                                <h3 className="text-xl md:text-2xl font-bold font-lato mb-2" style={{ color: 'var(--color-primary)' }}>{feature.title}</h3>
                                <p className="mt-2 text-base md:text-lg font-roboto leading-relaxed" style={{ color: 'var(--color-text)' }}>{feature.description}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </main>
            </div>
        </section>
    )
}