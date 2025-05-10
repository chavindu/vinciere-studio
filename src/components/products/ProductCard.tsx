
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if card is wrapped in Link
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      variant: "default",
    });
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to Favorites",
      description: `${product.name} has been added to your favorites. (Demo)`,
    });
  };

  return (
    <Card className="group/product w-full overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out relative flex flex-col">
      <Link href={`/products/${product.slug}`} aria-label={`View details for ${product.name}`}>
        <CardHeader className="p-0 border-b relative">
          <div className="aspect-[3/4] w-full relative overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="group-hover/product:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="fashion bag product"
            />
            {(product.isNew || product.originalPrice) && (
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.isNew && <Badge variant="default" className="bg-accent text-accent-foreground">New</Badge>}
                {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
              </div>
            )}
          </div>
          {/* Hover actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
            <Link href={`/products/${product.slug}`} passHref>
              <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white text-primary rounded-full" aria-label="View Product">
                <Eye className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white text-primary rounded-full" onClick={handleAddToCart} aria-label="Add to Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white text-primary rounded-full" onClick={handleFavorite} aria-label="Favorite">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.slug}`} className="block">
          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
          <CardTitle className="text-lg font-semibold leading-tight hover:text-accent transition-colors">
            {product.name}
          </CardTitle>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
