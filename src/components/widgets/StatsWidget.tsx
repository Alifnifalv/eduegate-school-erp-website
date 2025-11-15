// src/components/widgets/StatsWidget.tsx
import { User } from 'lucide-react';

export function StatsWidget() {
  return (
    <div className="backdrop-blur-xl rounded-2xl p-4 shadow-lg border" style={{background: 'var(--color-widget-bg)', borderColor: 'var(--color-widget-border)', color: 'var(--color-widget-text)'}}>
        <div className="flex items-center justify-center rounded-lg w-10 h-10 mb-3" style={{background: 'var(--color-widget-icon-bg)'}}>
          <User className="w-5 h-5" style={{color: 'var(--color-widget-icon)'}} />
        </div>
        <p className="text-sm font-roboto" style={{color: 'var(--color-widget-label)'}}>Total Employee&apos;s</p>
        <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-bold font-lato" style={{color: 'var(--color-widget-value)'}}>520</p>
            <p className="text-sm font-semibold font-roboto px-2 py-0.5 rounded-full" style={{color: 'var(--color-widget-change)', background: 'var(--color-widget-change-bg)'}}>+12.3%</p>
        </div>
    </div>
  );
}