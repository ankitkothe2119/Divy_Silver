import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x600.png"
        alt="Artisan working on a silver murti"
        fill
        className="object-cover z-0 brightness-50"
        priority
        data-ai-hint="artisan workshop"
      />
      <div className="relative z-10 p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Our Sacred Journey
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Three generations of sacred craftsmanship and divine artistry.
        </p>
      </div>
    </section>
  );
}
