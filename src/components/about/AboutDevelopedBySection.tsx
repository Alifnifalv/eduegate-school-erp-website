"use client";
import React from 'react';
import Image from 'next/image';

export function AboutDevelopedBySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#144685] mb-6 font-['Poppins']">
          Developed by
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="w-40 h-20 relative">
            <Image src="/logos/softop-logo.svg" alt="Softop Solutions" fill sizes="(max-width: 768px) 200px, 320px" className="object-contain" />
          </div>

          <p className="max-w-3xl text-sm md:text-base text-[#484848] leading-relaxed">
            Softop Solutions is the engineering partner behind eduêgate—bringing together product design, scalable engineering, and education-domain expertise to deliver modern, reliable school management systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutDevelopedBySection;
