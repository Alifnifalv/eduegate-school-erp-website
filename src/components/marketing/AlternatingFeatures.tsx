// src/components/marketing/AlternatingFeatures.tsx
import { Book, Zap, DollarSign, ArrowDown, Check, X, Lightbulb } from 'lucide-react';
import React from 'react';

// Reusable component for the check/cross list items
const ListItem = ({ text, isBenefit }: { text: string; isBenefit: boolean }) => (
  <li className="flex items-start gap-3">
    {isBenefit ? 
      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 flex-none" /> : 
      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5 flex-none" />}
    <span className={isBenefit ? "text-gray-900 font-medium" : "text-gray-600"}>{text}</span>
  </li>
);

// Data for the three comparison cards
const comparisonData = [
  {
    icon: <Book className="h-7 w-7 text-white" />,
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    lightBg: "bg-green-100/50",
    title: "Streamlined Administration vs. Manual Paperwork",
    traditional: [
      "Endless spreadsheets and physical files",
      "Repetitive data entry across departments",
      "Inefficient time allocation for staff",
    ],
    ours: [
      "Centralized student & staff database",
      "Automated record-keeping and reports",
      "Real-time feedback and performance insights",
    ],
  },
  {
    icon: <Zap className="h-7 w-7 text-white" />,
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    lightBg: "bg-amber-100/50",
    title: "Speed and Personalization at Your Fingertips",
    traditional: [
      "Hours spent creating manual timetables",
      "One-size-fits-all parent communication",
      "Limited ability to adapt to curriculum changes",
    ],
    ours: [
      "Instant, AI-generated timetables",
      "Personalized parent communication portal",
      "Adaptive content based on student progress",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-white" />,
    bgColor: "bg-gradient-to-br from-violet-500 to-violet-600",
    lightBg: "bg-violet-100/50",
    title: "Cost-Effectiveness and Convenience",
    traditional: [
      "Expensive custom software builds",
      "Multiple tools and subscriptions for different tasks",
      "Limited availability and scheduling issues",
    ],
    ours: [
      "Affordable subscription with all features included",
      "All-in-one unified school platform",
      "Available 24/7, accessible anytime, anywhere",
    ],
  },
];

// Renamed the function to be more descriptive of its new purpose
export function AlternatingFeatures() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Comparison</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Why Choose Our ERP?
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            See how our modern platform transforms traditional school management challenges into streamlined, efficient solutions.
          </p>
        </div>

        {/* The Three-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {comparisonData.map((card) => (
            <div key={card.title} className="group relative h-full flex flex-col">
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Card Header */}
                <div className={`p-6 md:p-8 ${card.bgColor}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20">
                      {card.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col gap-6">
                  {/* Traditional Section */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      Traditional Methods
                    </p>
                    <ul className="space-y-3 text-sm">
                      {card.traditional.map(item => <ListItem key={item} text={item} isBenefit={false} />)}
                    </ul>
                  </div>

                  {/* Arrow Divider */}
                  <div className="flex justify-center py-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                      <ArrowDown className="h-4 w-4 text-amber-600" />
                    </div>
                  </div>
                  
                  {/* Our Solution Section */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Our Solution
                    </p>
                    <ul className="space-y-3 text-sm">
                      {card.ours.map(item => <ListItem key={item} text={item} isBenefit={true} />)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
