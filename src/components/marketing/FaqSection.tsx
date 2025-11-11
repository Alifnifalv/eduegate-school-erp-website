// src/components/marketing/FaqSection.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"; // This path is created by shadcn/ui
import Link from "next/link";
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "What is Metronic and why should I buy it?",
    answer: "Metronic is a robust admin dashboard template that helps you build modern, scalable web applications quickly. You should buy it to save months of development time, leverage thousands of pre-built UI components, and ensure a high-quality, professional user interface."
  },
  {
    question: "Can Metronic be used for commercial projects?",
    answer: "Yes, absolutely. The Regular License allows you to create one commercial product for one client. The Extended License allows you to create one commercial product with an unlimited number of end users."
  },
  {
    question: "What are Starter Kits?",
    answer: "Starter kits are minimal, pre-built layouts that provide a clean foundation for your project. They help you skip the reverse-engineering process and start building your actual application logic right away."
  },
  {
    question: "How often does Metronic receive updates?",
    answer: "Metronic receives regular updates that include new features, bug fixes, and improvements. We are committed to keeping the theme up-to-date with the latest web technologies and design trends. All updates are free for life."
  }
];

export function FaqSection() {
  return (
    <section id="faqs" className="border-t border-border/60 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h1 className="text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get instant clarity on features, licenses, and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-10"
          >
          Have more questions?{' '}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact Us
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}