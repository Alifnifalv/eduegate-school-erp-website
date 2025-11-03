// src/components/marketing/AlternatingFeatures.tsx
import { Book, Zap, DollarSign, ArrowDown, Check, X } from 'lucide-react';
import React from 'react';

// Reusable component for the check/cross list items
const ListItem = ({ text, isBenefit }: { text: string; isBenefit: boolean }) => (
  <li className="flex items-start gap-3">
    {isBenefit ? 
      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" /> : 
      <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />}
    <span className={isBenefit ? "text-gray-800" : "text-gray-600"}>{text}</span>
  </li>
);

// Data for the three comparison cards
const comparisonData = [
  {
    icon: <Book className="h-7 w-7 text-green-700" />,
    bgColor: "bg-green-100/60",
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
    icon: <Zap className="h-7 w-7 text-amber-700" />,
    bgColor: "bg-amber-100/60",
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
    icon: <DollarSign className="h-7 w-7 text-violet-700" />,
    bgColor: "bg-violet-100/60",
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
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our ERP?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how our modern platform transforms traditional school management challenges into streamlined, efficient solutions.
          </p>
        </div>

        {/* The Three-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {comparisonData.map((card) => (
            <div key={card.title} className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Card Header */}
              <div className={`p-6 rounded-t-2xl ${card.bgColor}`}>
                <div className="flex items-center gap-4">
                  {card.icon}
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{card.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Traditional Methods</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {card.traditional.map(item => <ListItem key={item} text={item} isBenefit={false} />)}
                </ul>

                <div className="my-6 flex justify-center">
                  <ArrowDown className="h-6 w-6 text-amber-500" />
                </div>
                
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">With Edugate ERP</p>
                 <ul className="mt-4 space-y-3 text-sm">
                  {card.ours.map(item => <ListItem key={item} text={item} isBenefit={true} />)}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}