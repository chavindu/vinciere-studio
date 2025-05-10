
"use client";

import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Minus, Plus } from 'lucide-react';


interface AddToCartButtonClientProps {
  product: Product;
}

export function AddToCartButtonClient({ product }: AddToCartButtonClientProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-12 w-12" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
            </Button>
            <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-12 text-center text-base"
                min="1"
            />
            <Button variant="outline" size="icon" className="h-12 w-12" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
        <Button size="lg" onClick={handleAddToCart} className="flex-grow bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <ShoppingCartIcon className="w-5 h-5" /> Add to Cart
        </Button>
    </div>
  );
}
