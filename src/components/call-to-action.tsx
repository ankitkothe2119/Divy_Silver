import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="bg-accent text-accent-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Begin Your Sacred Journey</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Discover our curated selection of silver murtis and bring spiritual elegance to your home.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link href="/product">Explore Collections</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
