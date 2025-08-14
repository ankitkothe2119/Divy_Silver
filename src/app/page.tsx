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
        <section id="home">
          <Hero />
        </section>
        <section id="product">
          <ProductList />
        </section>
        <section id="about">
          <OurStory />
        </section>
        <section id="contact">
          <BlessingGenerator />
        </section>
      </main>
      <Footer />
    </div>
  );
}
