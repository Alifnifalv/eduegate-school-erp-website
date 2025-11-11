"use client";

import React from 'react';
import ImageWithFallback from '../ui/ImageWithFallback';

export function AboutDevelopedBySection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Logo - replace src with real asset if available */}
          <ImageWithFallback
            src="/logos/softop-logo.svg"
            alt="Softop Solutions"
            className="h-16 md:h-20 lg:h-24 object-contain"
            fallbackSrc="/logos/eduegate-logo.png"
          />

          <p className="max-w-3xl text-center text-sm md:text-base text-[#484848] leading-relaxed">
            Developed by Softop Solutions, Eduêgate reflects deep domain expertise in education and technology, delivering a
            future-ready platform that empowers every stakeholder.
          </p>

          <a
            href="https://www.softopsolutions.com"
            className="text-sm text-[#144685] font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.softopsolutions.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutDevelopedBySection;
