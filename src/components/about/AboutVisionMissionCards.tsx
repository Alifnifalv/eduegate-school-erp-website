"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutVisionMissionCards() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white border border-[#dbdbdb] rounded-3xl p-8 flex flex-col items-center text-center shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#144685] font-['Poppins'] mb-4">Our Vision</h3>
          <p className="text-base md:text-lg text-[#484848] font-['Poppins']">
            To revolutionize education management by making technology accessible, intuitive, and impactful for every institution.
          </p>
        </motion.div>
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-[#dbdbdb] rounded-3xl p-8 flex flex-col items-center text-center shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#144685] font-['Poppins'] mb-4">Our Mission</h3>
          <p className="text-base md:text-lg text-[#484848] font-['Poppins']">
            To empower schools with modular, scalable ERP solutions that simplify operations, enhance learning, and foster collaboration among all stakeholders.
          </p>
        </motion.div>
      </div>
      <div className="mt-12 flex justify-center">
        <Image
          src="/about/vision-mission-illustration.svg"
          alt="Vision and Mission Illustration"
          width={420}
          height={220}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
