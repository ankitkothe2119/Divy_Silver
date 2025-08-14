import Image from 'next/image';

export function OurStory() {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Sacred Journey</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Divyam Murti, our journey began with a single vision: to create divine art that resonates with the soul. We are rooted in the sacred traditions of Indian craftsmanship, passed down through generations.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our artisans, with their years of devotion and skill, pour their hearts into every curve and detail of the silver. We believe that each Murti is not just an object, but a vessel of divine energy, ready to grace your home with peace, prosperity, and protection. Our commitment is to purity, authenticity, and the spiritual integrity of our creations.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/800x600.png"
              alt="An artisan carefully crafting a silver murti"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="artisan hands"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
