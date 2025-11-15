// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

const imgGroup = "https://www.figma.com/api/mcp/asset/952610bc-8b26-4b58-81c3-6fe1b5c575f3";
const imgE04Copy1 = "https://www.figma.com/api/mcp/asset/b8bc2b5d-5e68-4471-8d3e-4c77681850bd";
const imgFacebook = "https://www.figma.com/api/mcp/asset/7230f8a1-c748-4691-b488-6f0aaaa7b273";
const imgLinkedin = "https://www.figma.com/api/mcp/asset/cc124510-e6b5-4e67-9ba1-189489123b82";
const imgInstagram1 = "https://www.figma.com/api/mcp/asset/3f71bf3e-de7c-480c-8eb2-ddbe732f1ffd";
const imgInstagram2 = "https://www.figma.com/api/mcp/asset/6e48ea25-aa2b-41cf-8bba-93561b3f5895";
const imgInstagram3 = "https://www.figma.com/api/mcp/asset/daee12e0-4f3b-4a86-b31b-876dbdac53bf";
const imgIcon = "https://www.figma.com/api/mcp/asset/beed7847-aa38-456f-901d-697bbc44cdf6";

export function Footer() {
  return (
    <footer className="bg-[#144685] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <Image src={imgGroup} alt="Eduegate Logo" width={159} height={30} />
            <Image src={imgE04Copy1} alt="Eduegate Icon" width={28} height={32} />
          </div>
          <div className="text-sm font-sans">
            <p className="mb-0">The ultimate admin dashboard</p>
            <p className="mb-0">solution for your school</p>
            <p>management system.</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook"><Image src={imgFacebook} alt="Facebook" width={24} height={24} /></a>
            <a href="#" aria-label="Linkedin"><Image src={imgLinkedin} alt="Linkedin" width={24} height={24} /></a>
            <a href="#" aria-label="Instagram"><Image src={imgInstagram1} alt="Instagram" width={20} height={20} /></a>
          </div>
        </div>
        {/* Column 2: Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2 font-sans">Info</h3>
          <ul className="flex flex-col gap-2 text-white text-base font-sans">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/our-service">Our Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>
        {/* Column 3: Help */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2 font-sans">Help</h3>
          <ul className="flex flex-col gap-2 text-white text-base font-sans">
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {/* Column 4: Request A Call Back */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2 font-sans">Request A call Back</h3>
          <div className="text-sm font-sans mb-2">
            <p className="mb-0">Our Executive will Get back</p>
            <p>to you once they Available.</p>
          </div>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-[#101828] bg-white border-none rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#075ca9] px-4 py-2 rounded-r-md flex items-center justify-center"
            >
              <Image src={imgIcon} alt="Send" width={20} height={20} />
            </button>
          </form>
        </div>
      </div>
      {/* Figma footer bottom bar - accurate layout */}
      <div className="bg-[#033d6e] flex items-center justify-center px-4 py-3 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
          <span className="text-[#d0d0d0] text-xs md:text-sm font-sans">© 2025 eduegate. All Rights Reserved.</span>
          <div className="flex gap-6 mt-2 md:mt-0 text-[#d0d0d0] text-xs md:text-sm font-sans">
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}