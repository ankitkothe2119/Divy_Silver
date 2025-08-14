/**
 * @fileoverview This file defines the "Contact" page of the application.
 * Currently, it features the AI-powered Blessing Generator as its main content.
 */

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlessingGenerator } from '@/components/blessing-generator';

/**
 * The ContactPage component renders the contact page layout.
 * It includes the standard header and footer, with the BlessingGenerator component
 * as the primary content in the main section.
 * @returns {JSX.Element} The rendered contact page.
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Renders the consistent site-wide header */}
      <Header />
      {/* Main content area for the contact page */}
      <main className="flex-grow">
        {/* The BlessingGenerator component provides an interactive AI feature */}
        <BlessingGenerator />
      </main>
      {/* Renders the consistent site-wide footer */}
      <Footer />
    </div>
  );
}
