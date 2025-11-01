// src/components/marketing/CleanModules.tsx
import { CheckCircle2 } from 'lucide-react';

// === 1. Data adapted from your image reference ===
const modules = [
  {
    title: "Time Table Management",
    description: "Built-in scheduling engine to organize classes efficiently, reduce conflicts, and optimize faculty time.",
  },
  {
    title: "Digital Exam",
    description: "Secure, mobile-friendly exam module enabling students to attend assessments remotely with integrity and ease.",
  },
  {
    title: "CRM & Admissions",
    description: "Integrated admission management with customizable workflows, lead tracking, and automated communication.",
  },
  {
    title: "Lesson Planner",
    description: "Create detailed lesson plans aligned with curriculum objectives and DLPs—perfect for CBSE and international boards.",
  },
  {
    title: "Accounts & Fee Management",
    description: "Robust finance module with fee tracking, invoicing, receipts, and account summaries—all in one place.",
  },
  {
    title: "Meeting Scheduler",
    description: "Interactive meeting module for staff coordination, parent-teacher meetings, and academic planning.",
  },
];

export function CleanModules() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* === 2. Header Section, styled like your image === */}
        <div className="text-center">
          <p className="font-semibold text-blue-600">Our Modules</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            eduêgate ERP – Modular, Scalable, School-Ready
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            eduêgate ERP offers a comprehensive suite of modules tailored for schools, designed with a modular architecture that allows institutions to activate only the features they need—on the go. Whether you're streamlining academics, admissions, or operations, Eduêgate adapts to your workflow.
          </p>
        </div>

        {/* === 3. The Grid for the Module Cards === */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            // Card container with styles for shadow, border, and rounding
            <div 
              key={module.title} 
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
                <h3 className="mt-4 font-bold text-lg text-gray-900">{module.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}