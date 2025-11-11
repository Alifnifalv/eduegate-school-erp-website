'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Lightbulb } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

function ServiceItem({ title, description, image, index }: ServiceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <div className="group relative mb-6 md:mb-8">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className={`bg-white border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl ${
        isExpanded ? 'ring-2 ring-blue-500/20' : ''
      }`}>
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-8 items-start lg:items-center`}>
          {/* Image Container */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                  <Lightbulb className="w-4 h-4" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {title}
                </h3>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
              {description}
            </p>

            {/* Expandable Button */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                aria-label="Learn more about this service"
              >
                <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="mt-4 pt-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 md:p-6">
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Request More Information
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  const services = [
    {
      title: 'Document Digitalization & Archival',
      description:
        'Educational institutions often hold decades of student records, certificates, and administrative documents in paper format. Our Document Digitalization Service transforms these physical archives into secure, searchable digital assets—preserving institutional memory and enabling instant access.',
      image: 'https://www.figma.com/api/mcp/asset/3682b16e-e326-4d50-a270-cdb11f85b8c1',
    },
    {
      title: 'Data Migration Services',
      description:
        'Many schools remain locked into outdated ERP systems simply because their entire institutional data—student records, fee transactions, academic results—is trapped in legacy formats. We solve this challenge with end-to-end Data Migration Services that ensure a smooth, secure transition to modern platforms.',
      image: 'https://www.figma.com/api/mcp/asset/016476dd-30e3-4e85-9d72-08cfb3c658aa',
    },
    {
      title: 'Software & ERP Auditing + Consultation',
      description:
        'Schools often invest in ERP systems without fully realizing their potential—or worse, operate with misaligned workflows, redundant modules, or compliance risks. Our Software & ERP Auditing Service identifies gaps, inefficiencies, and opportunities for optimization.',
      image: 'https://www.figma.com/api/mcp/asset/20a0494d-8888-44cf-a112-e1785c1450eb',
    },
    {
      title: 'Integration Services',
      description:
        'Many schools operate with fragmented systems—legacy ERPs, mobile apps, biometric devices, fee portals, and more—leading to data silos, duplication, and communication breakdowns. Our Integration Services unify these systems into a seamless, intelligent ecosystem.',
      image: 'https://www.figma.com/api/mcp/asset/6c41f26a-c3f4-4e93-ba77-3f8f7f7c8a90',
    },
    {
      title: 'Custom Software & Mobile App Development',
      description:
        'With deep domain expertise in education, our team delivers tailor-made software and mobile applications that align with your institution\'s unique workflows, compliance needs, and user expectations.',
      image: 'https://www.figma.com/api/mcp/asset/369a890b-0069-447c-82b8-bc5c85fb20cc',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16 lg:mb-20 max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-blue-600 rounded-full" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Additional Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Specialized Solutions
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Beyond our core ERP platform, we offer comprehensive services to optimize your institution's technology infrastructure.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Institution?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss how our services can meet your specific needs.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
