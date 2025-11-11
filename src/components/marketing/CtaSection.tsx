"use client";

// src/components/marketing/CtaSection.tsx
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function CtaSection() {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20" />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />

                    {/* Content */}
                    <div className="relative p-8 md:p-12 lg:p-16 text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center mb-6"
                        >
                            <Rocket className="w-10 h-10 text-blue-100" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Ready to See It in Action?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
                        >
                            Schedule a personalized demo with our team today and discover how our ERP can transform your institution with powerful features and seamless integrations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
                        >
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                                Request a Demo
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            
                            <Link href="/features" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all">
                                Explore All Features
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-12 pt-8 border-t border-blue-400/30 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-blue-50 text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-200" />
                                <span>50+ Schools Using Eduegate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-200" />
                                <span>99.9% Uptime Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-200" />
                                <span>24/7 Support Available</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}