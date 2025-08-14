import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductList } from '@/components/product-list';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
