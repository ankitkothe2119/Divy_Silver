/**
 * @fileoverview This component defines the header for the website.
 * It is sticky, meaning it stays at the top of the viewport as the user scrolls.
 * It contains the site logo/name and the main navigation links.
 */

import Link from 'next/link';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * The Header component renders the main navigation bar.
 * @returns {JSX.Element} The rendered header component.
 */
export function Header() {
  return (
    // The header is sticky, with a blurred background for a modern look.
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          {/* Site Title/Logo linking to the homepage */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg font-headline">Divy Silver</span>
          </Link>
          {/* Main navigation links, hidden on smaller screens */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link href="/product" className="transition-colors hover:text-foreground/80 text-foreground">
              Product
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        {/* Right-aligned action icons */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping Bag</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
