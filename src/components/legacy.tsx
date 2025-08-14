import Image from 'next/image';

export function Legacy() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Legacy of Divine Craftsmanship</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1985 by our grandfather, Late Shri Mohan Lal Sharma, Divy Silver began as a small workshop in the heart of Rajasthan. What started with a simple dream of creating divine art has blossomed into one of India's most trusted names in silver and gold murtis.
            </p>
            <p className="text-muted-foreground">
              Our journey is woven through stories of unwavering faith. It has been a life journey to give art a soul so that it can give faith a form. We continue to create these murtis with the legacy of our grandfather's purity of craftsmanship, and spiritual authenticity. Our murtis grace temples, homes, and workspaces across the globe, every idol a category and devotion wherever they go.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/800x600.png"
              alt="A collection of silver murtis in a workshop"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="silver statues"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground font-bold text-2xl px-6 py-4 rounded-md shadow-lg">
              1985
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
