// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Twitter, Github, Facebook, Dribbble, Mail } from 'lucide-react';
import type { FC } from 'react';

// A reusable component for social media links
const SocialLink: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    {children}
  </a>
);

// A reusable component for footer links
const FooterLink: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Upper Footer Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand and Socials */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold">
              SchoolERP
            </Link>
            <p className="text-gray-400 max-w-xs">
              The ultimate admin dashboard solution for your school management system.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com"><Twitter size={20} /></SocialLink>
              <SocialLink href="https://github.com"><Github size={20} /></SocialLink>
              <SocialLink href="https://facebook.com"><Facebook size={20} /></SocialLink>
              <SocialLink href="https://dribbble.com"><Dribbble size={20} /></SocialLink>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/demos">Demos</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </ul>
          </div>

          {/* Column 3: Help & Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/status">Status</FooterLink>
            </ul>
          </div>

          {/* Column 4: Stay Connected (Newsletter) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SchoolERP by YourCompany. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}