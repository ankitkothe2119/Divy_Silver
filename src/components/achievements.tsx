import { Users, Star, Award, Heart } from 'lucide-react';

const achievements = [
  { icon: Users, value: '18,000+', label: 'Happy Families' },
  { icon: Star, value: '25+', label: 'Years of Service' },
  { icon: Award, value: '500+', label: 'Unique Designs' },
  { icon: Heart, value: '99.9%', label: 'Purity Rate' },
];

export function Achievements() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                 <item.icon className="h-10 w-10" />
              </div>
              <p className="text-4xl font-bold text-primary">{item.value}</p>
              <p className="text-muted-foreground mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
