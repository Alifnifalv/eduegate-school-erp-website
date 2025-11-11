"use client";

// src/components/marketing/TestimonialCard.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

export function TestimonialCard({ name, title, imageUrl, children }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-xl bg-card border border-border shadow-sm"
    >
      <div className="p-5 grid grid-cols-[auto_1fr] gap-4 pt-6">
        <Image
          src={imageUrl}
          alt={name}
          width={44}
          height={44}
          className="relative flex shrink-0 size-11 rounded-full"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <span className="text-muted-foreground block text-sm tracking-wide">{title}</span>
        </div>
        <blockquote className="col-span-2 mt-3 text-gray-700 dark:text-gray-300">
          {children}
        </blockquote>
      </div>
    </motion.div>
  );
}