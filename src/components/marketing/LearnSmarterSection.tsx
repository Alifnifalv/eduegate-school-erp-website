"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function LearnSmarterSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 40%"], // triggers smoothly near viewport
  });

  // Smooth transition mappings for subtle float-in
  const translateX = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Outer container */}
        <div
          ref={ref}
          className="relative rounded-[32px] border border-zinc-200 bg-[#f6f6f6] 
                     dark:bg-zinc-900 dark:border-zinc-800 p-8 md:p-12 lg:p-16 
                     grid lg:grid-cols-2 gap-16 items-center overflow-hidden min-h-[620px]"
        >
          {/* Text Column */}
          <div className="relative z-10 max-w-lg space-y-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-zinc-900 dark:text-white"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>

            <h3 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
              Summary, quizzes, podcast, and more
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              Understand the key points, test your knowledge, get answers with
              references, and listen to an AI tutor.
            </p>
          </div>

          {/* Animated Image */}
          <motion.div
            style={{
              translateX,
              translateY,
              scale,
              opacity,
              perspective: "1200px",
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              mass: 0.8,
            }}
            className="relative lg:absolute lg:bottom-0 lg:right-0 will-change-transform 
                       flex justify-end items-end pointer-events-none"
          >
            <div
              className="bg-white border-[8px] border-black rounded-2xl overflow-visible 
                         shadow-2xl flex-none w-[704px] h-[569px] lg:translate-x-[60px]
                         md:w-[600px] md:h-[480px] sm:w-[90vw] sm:h-auto"
            >
              <Image
                src=""
                alt="Feature Mockup"
                width={704}
                height={569}
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
