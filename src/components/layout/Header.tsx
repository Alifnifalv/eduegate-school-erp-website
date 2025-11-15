// src/components/layout/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

const logoGroup = "https://www.figma.com/api/mcp/asset/a4b8eea5-7835-4cf6-b01e-542dae27e49f";
const logoE04Copy1 = "https://www.figma.com/api/mcp/asset/275beabf-4202-46fa-8ebc-99c56078608d";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Image src={logoGroup} alt="Eduegate Logo" width={159} height={30} />
          <Image src={logoE04Copy1} alt="Eduegate Icon" width={28} height={32} />
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-sans font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/our-service">Our services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 h-9 rounded-md text-sm font-sans font-semibold hover:bg-blue-700 transition-colors">
            Book A Demo
          </button>
        </div>
      </div>
    </header>
  );
}