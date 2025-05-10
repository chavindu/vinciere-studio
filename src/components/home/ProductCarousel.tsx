
import { ProductCard } from '@/components/products/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/constants';
import type { Product } from '@/types';

interface ProductCarouselProps {
  title: string;
  products?: Product[];
  count?: number; // Number of products to display
}

export function ProductCarousel({ title, products = MOCK_PRODUCTS.filter(p => p.isFeatured).slice(0,4), count = 4 }: ProductCarouselProps) {
  const displayedProducts = products.slice(0, count);

  if (displayedProducts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
