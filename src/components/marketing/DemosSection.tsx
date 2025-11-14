// src/components/marketing/DemosSection.tsx
import { DemoCard } from './DemoCard';

const demos = [
  { title: "Metronic Original", category: "Classic Dashboard", imageUrl: "/demos/demo1.png" },
  { title: "SaaS Application", category: "Modern & Clean", imageUrl: "/demos/demo2.png" },
  { title: "Project Management", category: "Task-oriented", imageUrl: "/demos/demo3.png" },
  // ... add more demo data
];

export function DemosSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans">30+ Unique Demos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-serif text-muted-foreground leading-relaxed">
            Explore a variety of layouts and designs, perfect for any application.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map(demo => (
            <DemoCard key={demo.title} {...demo} />
          ))}
        </div>
      </div>
    </section>
  );
}