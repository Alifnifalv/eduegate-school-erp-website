// src/components/marketing/DetailedFeatureGrid.tsx
import { Users, BookOpen, DollarSign, Calendar, MessageSquare, GraduationCap, ClipboardList, Library, Bus } from 'lucide-react';

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
    <section className="py-20 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background rounded-xl border p-6 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-blue-600 rounded-lg p-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">{feature.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {feature.keyPoints.map(point => (
                   <li key={point} className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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