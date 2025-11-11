// src/components/marketing/SuccessStoriesSection.tsx
"use client"; // This is essential for interactive components

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stories = [
  {
    imageSrc: "/success-cases/retailgear-team.png",
    logoSrc: "/success-cases/retailgear-logo.png",
    companyUrl: "https://retailgear.com",
    quote: "The impact of the Metronic theme on our frontend development is overwhelming. After weeks of comparing, we opted for Metronic. The main points we considered were overall design, performance, and multi-framework support.",
  },
  {
    imageSrc: "/success-cases/aspnetzero-team.png",
    logoSrc: "/success-cases/aspnetzero-logo.svg",
    companyUrl: "https://aspnetzero.com",
    quote: "Metronic was one of the best decisions we made. It was so easy-to-use and streamlined our development processes whilst making it possible for us to create a good-looking, stable and user-friendly frontend. It helped us reach the market quickly.",
  },
];

export function SuccessStoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="success-stories" className="border-t border-border/60 bg-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h1 className="text-3xl font-semibold md:text-4xl">
            Success Stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover how leading companies leverage Metronic to build exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm" ref={emblaRef}>
            <div className="flex">
              {stories.map((story, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative shrink-0 w-full md:w-[500px] h-[300px] md:h-[625px] bg-gray-100">
                      <Image
                        src={story.imageSrc}
                        alt={`${story.companyUrl} team`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative grow p-8 md:p-12 flex flex-col justify-start items-start">
                      <Quote className="size-6 absolute top-10 left-5 fill-background stroke-background drop-shadow-lg" />
                      <blockquote className="text-base leading-7 text-foreground mb-8 pt-10">
                        <p>{story.quote}</p>
                      </blockquote>
                      <div className="mt-auto flex flex-col items-start justify-center gap-1.5">
                        <Image
                          src={story.logoSrc}
                          alt={`${story.companyUrl} logo`}
                          width={100}
                          height={30}
                          className="object-contain"
                        />
                        <Link
                          target="_blank"
                          className="font-semibold text-foreground hover:underline hover:underline-offset-4"
                          href={story.companyUrl}
                        >
                          {story.companyUrl.replace('https://', '')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-3">
             <button onClick={scrollPrev} aria-label="Previous story" className="size-10 flex items-center justify-center rounded-md border bg-card hover:bg-accent transition-colors">
                <ArrowLeft className="size-4" />
            </button>
             <button onClick={scrollNext} aria-label="Next story" className="size-10 flex items-center justify-center rounded-md border bg-card hover:bg-accent transition-colors">
                <ArrowRight className="size-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}