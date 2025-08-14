import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Murti } from '@/lib/murtis';
import { Button } from './ui/button';

interface ProductCardProps {
  murti: Murti;
}

const murtiImageHints: { [key: string]: string } = {
  'Silver Ganesha': 'ganesha statue',
  'Silver Lakshmi': 'lakshmi statue',
  'Silver Shiva Parvati': 'shiva parvati',
  'Silver Radha Krishna': 'radha krishna',
  'Silver Hanuman': 'hanuman statue',
  'Silver Saraswati': 'saraswati statue',
};

export function ProductCard({ murti }: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col bg-card">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <Image
            src={murti.image}
            alt={murti.name}
            fill
            className="object-cover"
            data-ai-hint={murtiImageHints[murti.name] || 'silver statue'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{murti.name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {murti.significance}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">{murti.price}</p>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
}
