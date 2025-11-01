// src/components/layout/AnnouncementBar.tsx
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function AnnouncementBar() {
  return (
    <div 
      className=" animate-background-pan text-white overflow-hidden py-3 text-sm "
      style={{
        background: 'linear-gradient(90deg, #c026d3, #ec4899, #a855f7, #6366f1, #a855f7, #ec4899, #c026d3)',
        backgroundSize: '400% 100%',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 animate-background-pan">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 shrink-0" />
          <p>
         <strong>Transform Your Institution:</strong>
            &nbsp; Seamlessly connect administration, teachers, and parents.
          </p>
        </div>
        <Link 
          href="#concepts"
          className="hidden md:inline-flex items-center justify-center whitespace-nowrap font-medium text-xs rounded-lg px-3 py-1.5 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
        >
                Downlode Brochure
        </Link>
      </div>
    </div>
  );
}