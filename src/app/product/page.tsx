/**
 * @fileoverview This file defines the "Product" page of the application.
 * It serves as the main page for displaying the collection of murtis.
 */

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductList } from '@/components/product-list';

/**
 * The ProductPage component renders the product listing page.
 * It includes the standard header and footer and uses the ProductList component
 * to display all available products.
 * @returns {JSX.Element} The rendered product page.
 */
export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Renders the consistent site-wide header */}
      <Header />
      {/* Main content area for the product page */}
      <main className="flex-grow">
        {/* The ProductList component fetches and displays the grid of products */}
        <ProductList />
      </main>
      {/* Renders the consistent site-wide footer */}
      <Footer />
    </div>
  );
}
