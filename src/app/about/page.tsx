import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AboutHero } from '@/components/about-hero';
import { Legacy } from '@/components/legacy';
import { Achievements } from '@/components/achievements';
import { SacredValues } from '@/components/sacred-values';
import { Artisans } from '@/components/artisans';
import { CallToAction } from '@/components/call-to-action';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AboutHero />
        <Legacy />
        <Achievements />
        <SacredValues />
        <Artisans />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
