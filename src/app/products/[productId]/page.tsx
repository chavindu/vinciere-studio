
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/lib/constants';
import type { Product } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart as ShoppingCartIcon, Heart } from 'lucide-react';
import { ProductCarousel } from '@/components/home/ProductCarousel';
import { AddToCartButtonClient } from '@/components/products/AddToCartButtonClient';
import { CartSheet } from '@/components/cart/CartSheet';

interface ProductDetailPageProps {
  params: { productId: string }; // productId is the slug
}

// Helper to find product by slug
function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find(p => p.slug === slug);
}

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map(product => ({
    productId: product.slug,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.productId);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <CartSheet />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                layout="fill" 
                objectFit="cover" 
                priority 
                data-ai-hint="product closeup bag"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(0,3).map((img, index) => (
                  <div key={index} className="relative aspect-square w-full rounded overflow-hidden shadow">
                     <Image src={img} alt={`${product.name} - view ${index + 1}`} layout="fill" objectFit="cover" data-ai-hint="product detail bag"/>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="py-4">
            {product.isNew && <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">New Arrival</Badge>}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{product.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
            
            {product.rating && (
              <div className="flex items-center gap-1 mb-4 text-sm text-muted-foreground">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span>({product.reviews} reviews)</span>
              </div>
            )}

            <p className="text-3xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="ml-2 text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </p>
            
            <div className="prose prose-sm text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: product.description || '' }} />

            {/* TODO: Add color/size selectors if available in product data */}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <AddToCartButtonClient product={product} />
              <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary/5">
                <Heart className="w-5 h-5" /> Add to Wishlist
              </Button>
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="text-sm text-muted-foreground">
                Tags: {product.tags.join(', ')}
              </div>
            )}
            {product.stock && product.stock < 10 && (
                <p className="text-destructive text-sm mt-2">Only {product.stock} left in stock!</p>
            )}
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <ProductCarousel title="You Might Also Like" products={relatedProducts} />
        )}
      </main>
      <Footer />
    </div>
  );
}

