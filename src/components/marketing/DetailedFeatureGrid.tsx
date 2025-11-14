// src/components/marketing/DetailedFeatureGrid.tsx
import { Users, BookOpen, DollarSign, MessageSquare, ClipboardList, Library } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Student Information System",
    description: "A centralized hub for managing all student profiles, academic records, and personal details securely and efficiently.",
    keyPoints: [
      "Complete student lifecycle from admission to alumni.",
      "Customizable data fields for specific needs.",
      "Secure access for authorized staff only.",
    ]
  },
  {
    icon: <BookOpen className="h-6 w-6 text-white" />,
    title: "Academic & Curriculum Management",
    description: "Effortlessly design and manage courses, subjects, lesson plans, and class schedules.",
    keyPoints: [
      "Drag-and-drop timetable creation.",
      "Subject and teacher allocation.",
      "Syllabus tracking and progress monitoring.",
    ]
  },
  {
    icon: <DollarSign className="h-6 w-6 text-white" />,
    title: "Fee Management & Online Payments",
    description: "Automate invoicing, track payments in real-time, and simplify fee collection through an integrated payment gateway.",
    keyPoints: [
      "Customizable fee structures and categories.",
      "Automatic late fee calculation and alerts.",
      "Secure online payment portal for parents.",
    ]
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-white" />,
    title: "Examination & Gradebook",
    description: "Simplify exam scheduling, manage grading, and generate comprehensive, customizable report cards.",
    keyPoints: [
      "Create and schedule multiple exam types.",
      "Online and offline grade entry.",
      "Automatic generation of academic transcripts.",
    ]
  },
   {
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    title: "Parent & Student Portal",
    description: "Bridge the gap between home and school with a dedicated portal for communication, announcements, and progress reports.",
    keyPoints: [
      "Real-time alerts for attendance and grades.",
      "Direct messaging between parents and teachers.",
      "Access to timetables, assignments, and school calendar.",
    ]
  },
  {
    icon: <Library className="h-6 w-6 text-white" />,
    title: "Library & Resource Management",
    description: "Digitize your entire library, from cataloging books to managing check-ins, check-outs, and tracking inventory.",
    keyPoints: [
      "Barcode-based book management.",
      "Track due dates and automate fine calculation.",
      "Online Public Access Catalog (OPAC) for students.",
    ]
  },
];

export function DetailedFeatureGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Detailed Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-gray-900 leading-tight mb-4">
            Complete Module Breakdown
          </h2>
          
          <p className="text-base md:text-lg font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each module is thoughtfully designed to streamline specific aspects of school management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative h-full">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                {/* Index badge */}
                <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  {index + 1}
                </div>

                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 group-hover:shadow-lg transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-sans text-gray-900 leading-snug pt-1">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-serif text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {feature.description}
                </p>

                {/* Key Points */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold font-sans text-gray-500 uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {feature.keyPoints.map(point => (
                      <li key={point} className="flex gap-3 text-sm font-serif text-gray-700 leading-relaxed">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 flex-none mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// A small checkmark component to avoid importing it in every list item.
function CheckCircle(props: React.ComponentProps<'svg'>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}