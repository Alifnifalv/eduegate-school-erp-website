// src/components/marketing/FeatureCard.tsx
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function FeatureCard({ title, description, imageUrl }: FeatureCardProps) {
  return (
    <div className="flex flex-col pt-5 pb-10 relative group lg:border-b lg:border-r border-gray-200 dark:border-neutral-800">
      {/* Gradient overlay on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>

      <div className="group-hover:scale-110 transition-transform duration-200 px-4">
        <Image src={imageUrl} alt={title} width={400} height={250} />
      </div>

      <div className="text-lg font-bold font-sans mt-4 mb-2 relative z-10 px-10">
        {/* Accent line */}
        <div className="absolute left-0 top-0 h-6 group-hover:h-8 w-1 rounded-r-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200"></div>
        <span className="group-hover:translate-x-2 transition-transform duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm font-serif text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
}