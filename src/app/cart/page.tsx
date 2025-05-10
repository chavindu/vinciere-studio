
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartView } from '@/components/cart/CartView';
import { CartSheet } from '@/components/cart/CartSheet';

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* CartSheet is primarily for the slide-out panel. Main cart page might not need it directly if it's the main view */}
      {/* For consistency, we can keep it in case other pages link here directly */}
      <CartSheet /> 
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Your Shopping Cart</h1>
        </div>
        <div className="max-w-4xl mx-auto bg-background shadow-xl rounded-lg overflow-hidden">
           <CartView /> {/* This component is client-side and handles cart logic */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
