import Image from 'next/image';

const artisans = [
  { name: 'Rajesh Sharma', role: 'Master Craftsman', image: 'https://placehold.co/200x200.png', hint: 'older man artisan' },
  { name: 'Priya Gupta', role: 'Quality Controller', image: 'https://placehold.co/200x200.png', hint: 'woman artisan' },
  { name: 'Amit Patel', role: 'Heritage Specialist', image: 'https://placehold.co/200x200.png', hint: 'artisan portrait' },
];

export function Artisans() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Artisans</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The skilled hands and devoted hearts behind every divine creation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {artisans.map((artisan, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={artisan.image}
                alt={`Portrait of ${artisan.name}`}
                width={160}
                height={160}
                className="rounded-full shadow-lg mb-4"
                data-ai-hint={artisan.hint}
              />
              <h3 className="text-xl font-headline font-semibold">{artisan.name}</h3>
              <p className="text-primary">{artisan.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
