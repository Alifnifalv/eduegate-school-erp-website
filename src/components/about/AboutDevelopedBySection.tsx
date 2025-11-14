"use client";
import Image from 'next/image';

export function AboutDevelopedBySection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#144685] mb-6">
          Developed by
        </h2>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logos/softop-logo.svg"
            alt="Softop Solutions Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <p className="text-base md:text-lg text-[#484848] max-w-xl mx-auto">
            Eduêgate is developed by Softop Solutions, a leading EdTech company specializing in modern school management platforms. Our team brings together deep expertise in education, technology, and design to deliver solutions that empower institutions and enrich learning experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
