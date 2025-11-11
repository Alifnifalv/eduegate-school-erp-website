import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const imgGroup1000003066 = "https://www.figma.com/api/mcp/asset/bd7ceb38-1a15-40a2-8260-da8858651a01";

interface ApproachCardProps {
  title: string;
  description: string;
  index: number;
}

function ApproachCard({ title, description, index }: ApproachCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      <div className="relative bg-gradient-to-br from-blue-700 to-blue-800 border border-blue-600 rounded-lg p-6 md:p-8 flex flex-col gap-4 h-full min-h-[320px] md:min-h-[353px] items-center justify-start hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
        <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-blue-600/50 rounded-full">
          <img alt="" className="block w-14 h-14 md:w-16 md:h-16" src={imgGroup1000003066} />
        </div>
        
        <div className="flex flex-col gap-3 items-center w-full flex-1">
          <h3 className="font-semibold text-lg md:text-xl text-white text-center leading-snug">
            {title}
          </h3>
          <p className="font-normal text-sm md:text-base text-blue-50 text-center leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-blue-600 w-full text-center">
          <span className="text-xs md:text-sm font-medium text-blue-200">Step {index + 1}</span>
        </div>
      </div>
    </div>
  );
}

export function OurApproach() {
  const approaches = [
    {
      title: "Proof of Concept",
      description: "Rapid prototyping to validate feasibility, user experience, and alignment with institutional goals."
    },
    {
      title: "Requirement Gathering",
      description: "Deep-dive consultations to capture workflows, compliance needs, and stakeholder expectations."
    },
    {
      title: "Workflow Mapping",
      description: "Visual process maps, exception handling logic, and stakeholder-ready documentation for clarity and compliance."
    },
    {
      title: "Compliance & Data Security Advisory",
      description: "Guidance on regulatory alignment, audit readiness, and secure data practice."
    },
    {
      title: "Continuous Support",
      description: "Dedicated helpdesk, proactive monitoring, and SLA-backed issue resolution."
    },
    {
      title: "Impact Review & Optimization",
      description: "Post-implementation reviews to measure ROI, gather feedback, and refine system performance."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-12 items-start w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-4 items-start w-full max-w-2xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Process</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our Approach
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
              From first consult to long-term impact—our approach is built for clarity, compliance, and growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {approaches.map((approach, index) => (
              <ApproachCard 
                key={index} 
                title={approach.title} 
                description={approach.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
