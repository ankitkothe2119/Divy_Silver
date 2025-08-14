/**
 * @fileoverview This is the entry point for the homepage of the application.
 * It defines the structure of the main landing page.
 */

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';

/**
 * The Home component renders the homepage.
 * It assembles the main layout components: Header, Hero, and Footer.
 * @returns {JSX.Element} The rendered homepage.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Renders the consistent site-wide header */}
      <Header />
      {/* Main content area for the homepage */}
      <main className="flex-grow">
        {/* The Hero component is the main banner/welcome section for the site */}
        <Hero />
      </main>
      {/* Renders the consistent site-wide footer */}
      <Footer />
    </div>
  );
}
