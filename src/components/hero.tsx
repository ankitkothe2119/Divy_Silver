/**
 * @fileoverview This component defines the Hero section for the homepage.
 * It's the large, visually prominent area at the top of the landing page,
 * designed to capture user attention.
 */

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

/**
 * The Hero component displays a full-width background image with centered text
 * and a call-to-action button.
 * @returns {JSX.Element} The rendered hero section.
 */
export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      {/* Background Image using Next.js Image component for optimization */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A collection of beautifully crafted silver murtis"
        fill // Makes the image cover the entire section
        className="object-cover z-0 brightness-50" // Ensures image covers space, lowers brightness for text readability
        priority // Preloads the image as it's likely "Largest Contentful Paint" (LCP)
        data-ai-hint="sacred statues" // Hint for AI image generation tools
      />
      {/* Content overlay */}
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Divine Craftsmanship in Pure Silver
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Experience spiritual elegance with our handcrafted Murtis, where sacred tradition meets timeless artistry.
        </p>
        {/* Call-to-action button linking to the product page */}
        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <Link href="/product">Explore Collections</Link>
        </Button>
      </div>
    </section>
  );
}
