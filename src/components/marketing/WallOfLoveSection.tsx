// src/components/marketing/WallOfLoveSection.tsx
import { TestimonialCard } from "./TestimonialCard";
import Link from "next/link";

const testimonials = [
  {
    name: "Halil İbrahim Kalkan",
    title: "Co-founder, AspNetZero",
    imageUrl: "/users/3.png",
    text: "Metronic was one of the best decisions we made. As .NET backend developers, Metronic was so easy-to-use and streamlined our development processes while making it possible for us to create a good-looking, stable and user-friendly frontend.",
  },
  {
    name: "Chris Purser",
    title: "CEO/CXO, Digital Power Solutions",
    imageUrl: "/users/12.png",
    text: "We use Metronic for our primary SaaS platform dashboard and have for many years and it has held up well. Keep your support alive and you'll continually get great assists from this team, even after your version is older. Really fantastic all-in-one solution.",
  },
  {
    name: "Tayyab Akamal",
    title: "CEO, DigitYu",
    imageUrl: "/users/13.png",
    text: "I recently purchased the Metronic Admin Dashboard, and I'm extremely impressed. The code is clean, well-structured, and easy to work with. Whether you're using Tailwind, Bootstrap, React, Vue, or Laravel – everything is seamlessly integrated. Highly recommended.",
  },
  {
    name: "Levan Dvalishvili",
    title: "Chief Software Architect, SolarSpace",
    imageUrl: "/users/7.png",
    text: "Hands down the most developer friendly package that I have worked with.. A+++++",
  },
  {
    name: "Vagner Kaefer",
    title: "CREA PR, Huawei/Datacom",
    imageUrl: "/users/8.png",
    text: "It is the best dashboard system in the Theme Forest!",
  },
   {
    name: "Jolmer",
    title: "CTO, Retailgear",
    imageUrl: "/users/1.png",
    text: "The impact of the Metronic theme on our frontend development is overwhelming. After weeks of comparing, we opted for the Metronic theme.",
  },
];

export function WallOfLoveSection() {
  return (
    <section id="testimonials" className="border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Wall of Love
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Appreciated by thousands of developers delivering the best experience for our customers since 2014.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="space-y-5">
            <TestimonialCard name={testimonials[0].name} title={testimonials[0].title} imageUrl={testimonials[0].imageUrl}>
              <p>{testimonials[0].text}</p>
            </TestimonialCard>
             <TestimonialCard name={testimonials[3].name} title={testimonials[3].title} imageUrl={testimonials[3].imageUrl}>
              <p>{testimonials[3].text}</p>
            </TestimonialCard>
          </div>
          
          {/* Column 2 */}
          <div className="space-y-5">
             <TestimonialCard name={testimonials[1].name} title={testimonials[1].title} imageUrl={testimonials[1].imageUrl}>
              <p>{testimonials[1].text}</p>
            </TestimonialCard>
             <TestimonialCard name={testimonials[4].name} title={testimonials[4].title} imageUrl={testimonials[4].imageUrl}>
              <p>{testimonials[4].text}</p>
            </TestimonialCard>
          </div>

          {/* Column 3 */}
          <div className="space-y-5">
             <TestimonialCard name={testimonials[2].name} title={testimonials[2].title} imageUrl={testimonials[2].imageUrl}>
              <p>{testimonials[2].text}</p>
            </TestimonialCard>
             <TestimonialCard name={testimonials[5].name} title={testimonials[5].title} imageUrl={testimonials[5].imageUrl}>
              <p>{testimonials[5].text}</p>
            </TestimonialCard>
          </div>
        </div>

        <div className="flex justify-center mt-12">
            <Link href="#" className="cursor-pointer inline-flex items-center justify-center gap-2 text-sm font-medium border border-zinc-300 dark:border-border shadow-xs shadow-zinc-950/10 h-10 px-6 rounded-lg hover:bg-zinc-100 transition-colors">
              View <span className="font-bold">8000+</span> more reviews
            </Link>
        </div>
      </div>
    </section>
  );
}