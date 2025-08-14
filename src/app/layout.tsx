/**
 * @fileoverview This is the root layout for the entire application.
 * Any components or providers wrapped around the `children` prop here will be
 * present on every page of the site. It defines the main HTML structure.
 */

import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

/**
 * Metadata for the website, used for SEO and browser tab information.
 */
export const metadata: Metadata = {
  title: 'Divy Silver - Sacred Silver Murtis',
  description: 'Exquisite silver religious figurines (Murtis), crafted with devotion and spiritual significance.',
};

/**
 * The RootLayout component is the main shell for the application.
 * It sets up the HTML document structure, imports global stylesheets, applies fonts,
 * and renders child pages.
 * @param {Readonly<{ children: React.ReactNode }>} props - Contains the page content to be rendered.
 * @returns {JSX.Element} The root layout of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Import the 'Playfair Display' and 'PT Sans' fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      {/* Apply base font and anti-aliasing to the body for a smoother look */}
      <body className="font-body antialiased">
        {/* `children` will be replaced by the content of the current page */}
        {children}
        {/* The Toaster component is included here to enable toast notifications across the entire app */}
        <Toaster />
      </body>
    </html>
  );
}
