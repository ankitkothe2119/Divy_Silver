import { murtis } from '@/lib/murtis';
import { ProductCard } from './product-card';

export function ProductList() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Sacred Collections</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each Murti is a masterpiece of devotion, crafted in 925 sterling silver to bring blessings and serenity to your sacred space.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {murtis.map((murti) => (
            <ProductCard key={murti.id} murti={murti} />
          ))}
        </div>
      </div>
    </section>
  );
}
