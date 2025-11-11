import React, { ReactNode } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface Props {
  title: string;
  children: ReactNode;
}

export function ServiceCard({ title, children }: Props) {
  return (
    <article className="group relative h-full">
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="relative h-full p-6 md:p-8 border border-gray-200 rounded-2xl bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
          </div>
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 ml-3" />
        </div>
        
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
          {children}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm md:text-base group-hover:text-blue-700 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </article>
  );
}

export default ServiceCard;
