import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { OurStory } from '@/components/our-story';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
