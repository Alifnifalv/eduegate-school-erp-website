// src/components/marketing/DemoCard.tsx
import Image from 'next/image';

interface DemoCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

export function DemoCard({ title, category, imageUrl }: DemoCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden group">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={350}
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-background">
        <h3 className="font-semibold font-sans">{title}</h3>
        <p className="text-sm font-serif text-muted-foreground">{category}</p>
      </div>
    </div>
  );
}

