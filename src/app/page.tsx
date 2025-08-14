import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';
import { ProductList } from '@/components/product-list';
import { OurStory } from '@/components/our-story';
import { BlessingGenerator } from '@/components/blessing-generator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <div id="product">
          <ProductList />
        </div>
        <div id="about">
          <OurStory />
        </div>
        <BlessingGenerator />
      </main>
      <Footer />
    </div>
  );
}
