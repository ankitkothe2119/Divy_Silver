import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlessingGenerator } from '@/components/blessing-generator';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <BlessingGenerator />
      </main>
      <Footer />
    </div>
  );
}
