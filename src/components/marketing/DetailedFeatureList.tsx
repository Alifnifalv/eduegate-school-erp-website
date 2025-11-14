// src/components/marketing/DetailedFeatureList.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { Check, Clipboard, DollarSign, Book } from 'lucide-react'; // Example icons

// Define a type for our props for safety
interface KeyFeature {
  title: string;
  description: string;
}

interface DetailedFeatureListProps {
  keyFeatures: KeyFeature[];
}

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// A simple function to pick an icon based on a title keyword
const getIcon = (title: string) => {
  if (title.toLowerCase().includes('invoice') || title.toLowerCase().includes('payment')) return <DollarSign className="h-5 w-5" />;
  if (title.toLowerCase().includes('record') || title.toLowerCase().includes('document')) return <Clipboard className="h-5 w-5" />;
  if (title.toLowerCase().includes('online') || title.toLowerCase().includes('catalog')) return <Book className="h-5 w-5" />;
  return <Check className="h-5 w-5" />; // Default icon
}

export function DetailedFeatureList({ keyFeatures }: DetailedFeatureListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-sans mb-6">Key Capabilities</h2>
      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {keyFeatures.map((point) => (
          <motion.div
            key={point.title}
            variants={fadeInUp}
            className="flex items-start gap-4 p-5 border rounded-lg bg-background hover:bg-slate-50 transition-colors"
          >
            <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-2.5">
              {getIcon(point.title)}
            </div>
            <div>
              <h4 className="font-semibold font-sans text-gray-900">{point.title}</h4>
              <p className="mt-1 text-sm font-serif text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}