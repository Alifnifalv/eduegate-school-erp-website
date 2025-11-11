import { allFeaturesData } from "../../../lib/featuresData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CtaSection } from "../../../components/marketing/CtaSection";
import { DetailedFeatureList } from "@/components/marketing/DetailedFeatureList";

// Generate static paths for all features
export async function generateStaticParams() {
  return allFeaturesData.map((feature) => ({
    slug: feature.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = allFeaturesData.find((f) => f.slug === slug);
  if (!feature) notFound();

  return {
    title: `${feature.title} - School ERP`,
    description: feature.longDescription,
  };
}

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = allFeaturesData.find((f) => f.slug === slug);
  if (!feature) notFound();

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* === HEADER SECTION === */}
      <header className="py-16 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Optional Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/eduegate-mini-logo.svg" // Optional logo
              alt="Logo"
              width={48}
              height={48}
              className="opacity-80"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold">{feature.title}</h1>
          <p className="text-zinc-600 mt-2 text-sm font-medium">
            {feature.shortDescription || "Modern School ERP Feature Overview"}
          </p>

          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-1 text-sm text-zinc-500 mt-4">
            <Link href="/" className="hover:underline hover:text-zinc-700">Home</Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <Link href="/features" className="hover:underline hover:text-zinc-700">Features</Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <span className="text-zinc-400">{feature.title}</span>
          </nav>
        </div>
      </header>

      {/* === MAIN CONTENT SECTION === */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 leading-relaxed text-zinc-800 space-y-12">
          {/* Feature Image */}
          <div className="flex justify-center">
            <Image
              src={feature.imageSrc}
              alt={feature.title}
              width={704}
              height={569}
              className="rounded-lg shadow-md w-full max-w-3xl object-contain"
            />
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-zinc-900">About the Feature</h2>
            <p className="text-zinc-700">
              {feature.longDescription}
            </p>
          </div>

          {/* What it does */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-zinc-900">
              What It Does
            </h2>
            <p className="text-zinc-700">
              Our School ERP’s {feature.title} module helps schools streamline and optimize key operations — from communication to performance tracking — providing a seamless experience for administrators, teachers, and parents.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-zinc-900">
              Key Highlights
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-700">
              {feature.keyFeatures.map((item) => (
                <li key={item.title}>
                  <strong className="font-medium text-zinc-900">{item.title}:</strong>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-zinc-900">
              Why It Matters
            </h2>
            <p className="text-zinc-700">
              Implementing {feature.title} ensures your institution operates efficiently, securely, and transparently — empowering educators and students to focus on learning rather than logistics.
            </p>
          </div>

          {/* CTA block */}
          <div className="border-t pt-8 mt-12">
            <CtaSection />
          </div>
        </div>
      </section>
    </main>
  );
}
