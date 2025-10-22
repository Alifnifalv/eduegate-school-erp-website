import { FeatureCard } from './FeatureCard';

// === ALL FEATURE DATA UPDATED ===
const features = [
  {
    title: "Student Information System",
    description: "A centralized hub for managing all student profiles, academic records, and personal details securely.",
    imageUrl: "/features/theming.png", // Recommended to change these images
  },
  {
    title: "Fee Management & Payments",
    description: "Automate invoicing, track payments in real-time, and accept online fees through a secure integrated gateway.",
    imageUrl: "/features/School-Fee-Management-Software.jpg",
  },
  {
    title: "Academic & Timetabling",
    description: "Effortlessly create and manage class schedules, subjects, and assignments to keep your curriculum on track.",
    imageUrl: "/features/navigations.png",
  },
  {
    title: "Parent Communication Portal",
    description: "Bridge the gap between home and school with a dedicated portal for announcements, progress reports, and direct messaging.",
    imageUrl: "/features/forms.png",
  },
  {
    title: "Examinations & Gradebooks",
    description: "Simplify exam scheduling, manage grading, and generate comprehensive report cards with just a few clicks.",
    imageUrl: "/features/datatables.png",
  },
  {
    title: "Library & Transport Modules",
    description: "Digitize your library operations and manage your school's transportation fleet, routes, and student safety.",
    imageUrl: "/features/charts.png",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-border/60 bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          {/* === SECTION TITLE & DESCRIPTION UPDATED === */}
          <h1 className="text-3xl font-semibold md:text-4xl">
            Core Features for a Smarter Campus
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our suite of modules is engineered to digitize every aspect of your institution, from admissions to alumni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto border-t border-l border-gray-200 dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}



// // src/components/marketing/FeaturesSection.tsx
// import { FeatureCard } from './FeatureCard';

// const features = [
//   {
//     title: "Theming",
//     description: "Customize colors and styles for a unique UI experience, matching your brand identity.",
//     imageUrl: "/features/theming.png",
//   },
//   {
//     title: "UI Elements",
//     description: "Essential components for creating visually appealing interfaces that enhance user interactions.",
//     imageUrl: "/features/ui-elements.png",
//   },
//   {
//     title: "Navigations",
//     description: "Flexible navigation components for an intuitive user experience, helping users find their way easily.",
//     imageUrl: "/features/navigations.png",
//   },
//   {
//     title: "Forms",
//     description: "Customizable form elements for efficient data collection, enhancing accuracy and user experience.",
//     imageUrl: "/features/forms.png",
//   },
//   {
//     title: "Datatables",
//     description: "Robust tables for organizing and displaying data effectively, enhancing data management.",
//     imageUrl: "/features/datatables.png",
//   },
//   {
//     title: "Charts",
//     description: "Advanced charting tools for dynamic, interactive data visualization, providing valuable insights.",
//     imageUrl: "/features/charts.png",
//   },
// ];

// export function FeaturesSection() {
//   return (
//     <section className="border-t border-border/60 bg-background py-20">
//       <div className="container mx-auto px-6">
//         <div className="mx-auto max-w-2xl text-center mb-16">
//           <h1 className="text-3xl font-semibold md:text-4xl">
//             Solid Foundation
//           </h1>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Metronic is a comprehensive toolkit of UI components built with Tailwind CSS, enabling you to create modern, scalable web applications.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto border-t border-l border-gray-200 dark:border-neutral-800">
//           {features.map((feature) => (
//             <FeatureCard key={feature.title} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/marketing/FeaturesSection.tsx
