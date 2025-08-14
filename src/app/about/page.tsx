/**
 * @fileoverview This file defines the "About Us" page of the application.
 * It serves as a container for various sections that tell the story of the company.
 */

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutHero } from '@/components/about-hero';
import { Legacy } from '@/components/legacy';
import { Achievements } from '@/components/achievements';
import { SacredValues } from '@/components/sacred-values';
import { Artisans } from '@/components/artisans';
import { CallToAction } from '@/components/call-to-action';

/**
 * The AboutPage component renders the entire "About Us" page.
 * It assembles various components to create a comprehensive narrative about the brand.
 * @returns {JSX.Element} The rendered About Us page.
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Renders the consistent site-wide header */}
      <Header />
      {/* Main content area for the about page */}
      <main className="flex-grow">
        {/* Hero section specific to the About page */}
        <AboutHero />
        {/* Section detailing the company's history and legacy */}
        <Legacy />
        {/* Section showcasing company achievements and milestones */}
        <Achievements />
        {/* Section outlining the core values of the company */}
        <SacredValues />
        {/* Section introducing the artisans behind the craft */}
        <Artisans />
        {/* A call-to-action section to encourage user engagement */}
        <CallToAction />
      </main>
      {/* Renders the consistent site-wide footer */}
      <Footer />
    </div>
  );
}
