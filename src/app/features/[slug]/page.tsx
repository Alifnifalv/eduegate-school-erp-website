// src/app/features/[slug]/page.tsx
import { allFeaturesData } from '../../../lib/featuresData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CtaSection } from '../../../components/marketing/CtaSection';

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
      {/* === HERO SECTION with background and breadcrumbs === */}
      <section className="relative py-12 bg-green-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('/features/transport-header-bg.png')`}}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {feature.title}
          </h1>
          <nav className="flex items-center text-sm font-medium mt-2">
            <Link href="/" className="hover:underline">School ERP</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-white/80">{feature.title}</span>
          </nav>
        </div>
      </section>

      {/* === MAIN CONTENT SECTION === */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Image */}
            <div className="w-full">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={700}
                height={550}
                className="rounded-lg object-contain"
              />
            </div>
            
            {/* Right Column: Detailed Text */}
            <div className="space-y-6 text-gray-700">
              <p>
                <strong>{`Our School ERP ${feature.title}: ${feature.longDescription.split('.')[0]}.`}</strong>
              </p>
              <p className="text-muted-foreground">
                {feature.longDescription.split('.').slice(1).join('.').trim()}
              </p>

              <div>
                <h2 className="text-xl font-bold mb-4">{`Key Features of Our School ERP ${feature.title}:`}</h2>
                <ol className="list-decimal list-inside space-y-4">
                  {feature.keyFeatures.map((point, index) => (
                    <li key={point.title}>
                      <strong className="font-semibold text-gray-800">{`${point.title}:`}</strong>
                      <span className="ml-2 text-muted-foreground">{point.description}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-sm italic">
                By implementing our {feature.title}, your institution can ensure safety, security, and efficiency. Experience the benefits of a well-optimized system with our comprehensive ERP solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}