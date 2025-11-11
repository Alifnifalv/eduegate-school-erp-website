// src/components/layout/Header.tsx
import Link from 'next/link';
import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-bold">
          SchoolERP
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/our-support">Support</Link>
          <Link href="/our-service">Our Service</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </Link>
            <button className="bg-blue-600 text-white px-4 h-9 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </header>
  );
}