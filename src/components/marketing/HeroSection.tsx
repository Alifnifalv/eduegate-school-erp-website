// src/components/marketing/HeroSection.tsx
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
          The World's #1{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Bootstrap, React,
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Vue & Laravel Admin Dashboard
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          A professional, feature-rich, and mobile-first admin dashboard theme, UI kit, and design system.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Purchase Now
          </button>
          <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold">
            Live Preview
          </button>
        </div>

        {/* This is where you'd place the large dashboard image */}
        <div className="mt-16">
          <Image
            src="/dashboard-showcase.png" // Add your main product image to the `public` folder
            alt="School ERP Dashboard Showcase"
            width={1200}
            height={700}
            className="rounded-lg mx-auto shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}