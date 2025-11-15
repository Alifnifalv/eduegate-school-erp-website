// src/components/layout/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

const logoGroup = "/logos/eduegate Logo.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{borderColor: 'var(--color-border)', background: 'var(--color-background)'}}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Image src={logoGroup} alt="Eduegate Logo" width={159} height={30} />
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-roboto font-medium" style={{color: 'var(--color-text-main)'}}>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/our-service">Our services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 h-9 rounded-md text-sm font-roboto font-semibold transition-colors"
            style={{background: 'var(--color-primary)', color: 'var(--color-on-primary)'}}
          >
            Book A Demo
          </button>
        </div>
      </div>
    </header>
  );
}