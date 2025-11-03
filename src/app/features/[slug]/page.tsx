// src/app/features/[slug]/page.tsx
import { allFeaturesData } from '../../../lib/featuresData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CtaSection } from '../../../components/marketing/CtaSection';
import { DetailedFeatureList } from '@/components/marketing/DetailedFeatureList';

// This function tells Next.js what pages to pre-build (optional but good for performance)
export async function generateStaticParams() {
  return allFeaturesData.map((feature) => ({
    slug: feature.slug,
  }));
}

// Function to generate Metadata dynamically for each page (great for SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = allFeaturesData.find((f) => f.slug === slug);
  if (!feature) {
    return { title: 'Feature Not Found' };
  }
  return {
    title: `${feature.title} - School ERP`,
    description: feature.longDescription,
  };
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 

  // Find the specific feature data that matches the slug from the URL
  const feature = allFeaturesData.find((f) => f.slug === slug);

  // If no feature matches the slug, show a 404 "Not Found" page.
  if (!feature) {
    notFound();
  }

  // --- Render the Page ---
  return (
  <main>
      {/* === UPGRADED HERO SECTION === */}
      <section className="relative py-20 bg-gray-900 text-white">
         {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 bg-repeat opacity-5"
          style={{ backgroundImage: `url('/patterns/circuit-board.svg')`}}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {feature.title}
          </h1>
           <nav className="flex items-center justify-center text-sm font-medium mt-4">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
             <Link href="/features" className="hover:underline opacity-80 hover:opacity-100">Features</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-white/60">{feature.title}</span>
          </nav>
        </div>
      </section>

      {/* === UPGRADED MAIN CONTENT SECTION === */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Column: STICKY IMAGE */}
            <div className="w-full lg:sticky lg:top-28">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={800}
                height={600}
                className="rounded-xl object-contain shadow-2xl"
              />
            </div>
            
            {/* Right Column: Detailed Text & Key Features */}
            <div className="space-y-12">
               <div className="space-y-4">
                 <p className="text-lg text-gray-800">
                    <strong>{`Our School ERP ${feature.title}: ${feature.longDescription.split('.')[0]}.`}</strong>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.longDescription.split('.').slice(1).join('.').trim()}
                  </p>
               </div>
              
              {/* Key features will be rendered by our new Client Component */}
              <DetailedFeatureList keyFeatures={feature.keyFeatures} />

               <p className="text-sm italic text-center p-6 bg-slate-50/50 rounded-lg border">
                By implementing our {feature.title}, your institution can ensure safety, security, and efficiency. Experience the benefits of a well-optimized system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}