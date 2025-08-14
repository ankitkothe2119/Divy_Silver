/**
 * @fileoverview This component defines the appearance of a single product card.
 * It is used in the ProductList component to display each Murti in a grid.
 */

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Murti } from '@/lib/murtis';
import { Button } from './ui/button';

/**
 * Defines the props required by the ProductCard component.
 */
interface ProductCardProps {
  murti: Murti; // The data for the murti to display.
}

/**
 * A mapping of murti names to specific AI image generation hints.
 * This helps in generating more relevant placeholder images.
 */
const murtiImageHints: { [key: string]: string } = {
  'Silver Ganesha': 'ganesha statue',
  'Silver Lakshmi': 'lakshmi statue',
  'Silver Shiva Parvati': 'shiva parvati',
  'Silver Radha Krishna': 'radha krishna',
  'Silver Hanuman': 'hanuman statue',
  'Silver Saraswati': 'saraswati statue',
};

/**
 * The ProductCard component renders a single product item.
 * @param {ProductCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} A card displaying the product's image, name, significance, and price.
 */
export function ProductCard({ murti }: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col bg-card">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          {/* Display the product image using Next.js Image for optimization */}
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
        {/* Display the product name */}
        <CardTitle className="font-headline text-xl mb-2">{murti.name}</CardTitle>
        {/* Display a short description of the product's significance */}
        <p className="text-muted-foreground text-sm line-clamp-3">
          {murti.significance}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        {/* Display the product price */}
        <p className="text-xl font-bold text-primary">{murti.price}</p>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
}
