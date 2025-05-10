
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StyleAdvisorClient } from '@/components/style-advisor/StyleAdvisorClient';
import { CartSheet } from '@/components/cart/CartSheet';

export default function StyleAdvisorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Vinciere Style Advisor</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Let our AI-powered stylist help you discover the perfect bag to match your unique taste.
          </p>
        </div>
        <StyleAdvisorClient />
      </main>
      <Footer />
    </div>
  );
}
