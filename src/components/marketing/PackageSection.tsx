"use client";

// src/components/marketing/PackageSection.tsx
import { Check, Ship } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const packageIncludes = [
  "Complete Tailwind(v9) & Bootstrap(v8) packages",
  "Complete source code for all packages",
  "Complete documentations for all packages",
  "Starter kits with 14 pre-built layouts",
  "10 Tailwind 4 Demos for HTML, React and Next.js",
  "64 Bootstrap 5 Demos for HTML & JavaScript",
  "150+ Tailwind 4 pages for HTML, React and Next.js",
  "100+ Tailwind 4 components for HTML, React and Next.js",
  "1000+ Tailwind 4 UI blocks for HTML, React and Next.js",
  "Angular, Vue, Laravel starter kits for Bootstrap",
  "Asp.net Core, Blazor Server starter kits for Bootstrap",
  "Unlimited access to all source code",
  "Access to all legacy v4, v5, v6, v7 versions",
  "Lifetime free updates and support",
];

export function PackageSection() {
  return (
    <section id="package" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl border border-border bg-muted/50 p-5 text-center shadow-sm"
        >
          <div className="relative z-10">
            <div className="pt-10 pb-12">
              <div className="mx-auto max-w-2xl text-center space-y-3.5">
                <h1 className="text-3xl font-semibold md:text-4xl">
                  Package
                </h1>
                <p className="text-muted-foreground mx-auto max-w-5xl text-lg">
                  With a single purchase, you will get the whole package of Metronic.
                </p>
              </div>
            </div>
            
            {/* Background Decorative Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center opacity-5 -z-10"
            >
              <Ship className="size-[500px] text-foreground" strokeWidth={0.5} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="mx-auto max-w-4xl mb-12"
            >
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {packageIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center justify-start gap-2.5 text-left"
                  >
                    <Check className="size-4 text-green-600 shrink-0" />
                    <span className="text-sm text-secondary-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link
                href="/pricing"
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-sm text-primary-foreground border border-zinc-950/25 bg-gradient-to-t from-primary to-primary/85 shadow-md shadow-zinc-950/20 ring-1 ring-inset ring-white/20 transition-transform hover:scale-105 active:scale-95 h-10 rounded-lg px-6"
              >
                Buy Metronic
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}