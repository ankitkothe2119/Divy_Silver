import { Gem, ShieldCheck, Leaf, Sparkles, Handshake, Recycle } from 'lucide-react';

const values = [
    { icon: Gem, title: "Devotion & Purity", description: "Our murtis are crafted with 99.9% pure silver, reflecting our devotion to authenticity in every detail." },
    { icon: ShieldCheck, title: "Uncompromising Quality", "description": "An unwavering commitment to the fine grade silver you pay for, giving you a murti that is a cultural heirloom for every generation." },
    { icon: Leaf, title: "Heritage Preservation", "description": "Our artisans continue the traditions of their ancestors, preserving a rich heritage for future generations." },
    { icon: Handshake, title: "Customer Centricism", "description": "We are guided by your needs, this service centricity helps us build the murti for your home, and the relationship for a lifetime." },
    { icon: Recycle, title: "Sustainable Practices", "description": "We are committed to ethical sourcing and sustainable workshop practices, to care for our planet as we craft." },
    { icon: Sparkles, title: "Innovation & Tradition", "description": "We blend the timeless values of fine art craftsmanship, with modern design sensibilities and production processes." }
]

export function SacredValues() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Sacred Values</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every aspect of our craftsmanship and service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-secondary/50 p-6 rounded-lg text-center flex flex-col items-center">
               <div className="bg-primary/10 p-3 rounded-full mb-4 w-fit">
                  <value.icon className="h-8 w-8 text-primary" />
               </div>
              <h3 className="text-xl font-headline font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
