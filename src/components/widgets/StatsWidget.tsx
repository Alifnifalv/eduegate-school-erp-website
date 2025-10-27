// src/components/widgets/StatsWidget.tsx
import { User } from 'lucide-react';

export function StatsWidget() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200/50">
        <div className="flex items-center justify-center bg-blue-100 rounded-lg w-10 h-10 mb-3">
            <User className="w-5 h-5 text-blue-600" />
        </div>
        <p className="text-sm text-gray-500">Total Employee&apos;s</p>
        <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-bold">520</p>
            <p className="text-sm font-semibold text-green-500 bg-green-100 px-2 py-0.5 rounded-full">+12.3%</p>
        </div>
    </div>
  );
}