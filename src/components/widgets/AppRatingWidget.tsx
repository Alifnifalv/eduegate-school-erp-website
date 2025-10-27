// src/components/widgets/AppRatingWidget.tsx
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';

export function AppRatingWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logos/eduegate-logo-icon.svg" alt="Eduegate Logo" width={32} height={32} />
          <div>
            <p className="font-bold text-sm">Eduegate APP</p>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {/* Duplicating for all 5 stars */}
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-0.5" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-0.5" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-0.5" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-0.5" />
              <span className="ml-2 text-xs font-semibold text-gray-600">4.8</span>
            </div>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}