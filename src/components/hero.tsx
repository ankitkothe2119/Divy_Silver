import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A collection of beautifully crafted silver murtis"
        fill
        className="object-cover z-0 brightness-50"
        priority
        data-ai-hint="sacred statues"
      />
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Divine Craftsmanship in Pure Silver
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Experience spiritual elegance with our handcrafted Murtis, where sacred tradition meets timeless artistry.
        </p>
        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <Link href="#collections">Explore Collections</Link>
        </Button>
      </div>
    </section>
  );
}
