import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="font-headline text-2xl font-bold mb-2">Divyam Murti</h2>
            <p className="text-muted-foreground">Crafting divinity in silver. Each piece a testament to faith and artistry.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#blessing" className="hover:text-primary transition-colors">AI Blessing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Connect With Us</h3>
            <p className="text-muted-foreground mb-4">
              123 Sacred Path, Varanasi, India
              <br />
              info@divyammurti.com
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Divyam Murti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
