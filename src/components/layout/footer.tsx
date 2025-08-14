import { Twitter, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="font-headline text-2xl font-bold mb-2">Divy Silver</h2>
            <p className="text-white/70 mb-4">Crafting sacred silver murtis with devotion and traditional artistry since decades.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white"><Facebook /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Instagram /></Link>
              <Link href="#" className="text-white/70 hover:text-white"><Twitter /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/product" className="hover:text-white/80 transition-colors text-white/90">Products</Link></li>
              <li><Link href="/about" className="hover:text-white/80 transition-colors text-white/90">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white/80 transition-colors text-white/90">Contact</Link></li>
              <li><Link href="#" className="hover:text-white/80 transition-colors text-white/90">Care Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white/80 transition-colors text-white/90">Lord Ganesha</Link></li>
              <li><Link href="#" className="hover:text-white/80 transition-colors text-white/90">Lord Krishna</Link></li>
              <li><Link href="#" className="hover:text-white/80 transition-colors text-white/90">Goddess Lakshmi</Link></li>
              <li><Link href="#" className="hover:text-white/80 transition-colors text-white/90">Lord Shiva</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-white/70">
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-white/70">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@divysilver.com</span>
              </li>
              <li className="flex items-center text-white/70">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Jaipur, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Divy Silver. All rights reserved.</p>
          <Button variant="outline" size="sm" className="bg-transparent text-white border-white/50 hover:bg-white hover:text-black">Design By ▲</Button>
        </div>
      </div>
    </footer>
  );
}
