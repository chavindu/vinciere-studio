
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { ImageGridDisplay } from '@/components/home/ImageGridDisplay';
import { AboutBrandSection } from '@/components/home/AboutBrandSection';
import { ProductCarousel } from '@/components/home/ProductCarousel';
import { TextAreaSection } from '@/components/home/TextAreaSection';
import { BlogSection } from '@/components/home/BlogSection';
import { PartnerLogos } from '@/components/home/PartnerLogos';
import { CartSheet } from '@/components/cart/CartSheet'; // Import CartSheet
import { MOCK_PRODUCTS } from '@/lib/constants';


const fullWidthCarouselImages = [
  { id: 'img1', src: 'https://picsum.photos/seed/fwcarousel1/450/800', alt: 'Model with Vinciere Bag 1', hint: 'fashion model bag' },
  { id: 'img2', src: 'https://picsum.photos/seed/fwcarousel2/450/800', alt: 'Vinciere Bag Detail 1', hint: 'bag detail' },
  { id: 'img3', src: 'https://picsum.photos/seed/fwcarousel3/450/800', alt: 'Model with Vinciere Bag 2', hint: 'lifestyle fashion' },
  { id: 'img4', src: 'https://picsum.photos/seed/fwcarousel4/450/800', alt: 'Vinciere Bag Collection', hint: 'bag collection' },
];

export default function HomePage() {
  const recentProducts = MOCK_PRODUCTS.filter(p => p.isNew || p.isFeatured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet /> {/* Add CartSheet here so it's available globally within CartProvider scope */}
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <ImageGridDisplay title="Latest Styles" images={fullWidthCarouselImages} />
        <AboutBrandSection />
        <ProductCarousel title="Recent Arrivals" products={recentProducts} />
        <TextAreaSection />
        <BlogSection />
        <PartnerLogos />
      </main>
      <Footer />
    </div>
  );
}
