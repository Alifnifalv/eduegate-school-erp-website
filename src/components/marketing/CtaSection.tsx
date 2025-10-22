// src/components/marketing/CtaSection.tsx
import Link from 'next/link';

export function CtaSection() {
    return (
        <section className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Ready to See It in Action?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Schedule a personalized demo with our team today and discover how our ERP can transform your institution.
                </p>
                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow"
                    >
                        Request a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}