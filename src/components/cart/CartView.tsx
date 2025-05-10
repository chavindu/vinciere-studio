
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CartView() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart, setIsCartOpen } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10 px-6"> {/* Added padding for better spacing */}
        <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-primary">Your Cart is Empty</h3>
        <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link href="/shop" passHref>
          <Button onClick={() => setIsCartOpen(false)} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow p-6">
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4 py-4 border-b">
              <div className="relative w-20 h-24 rounded overflow-hidden">
                <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" />
              </div>
              <div className="flex-grow">
                <Link href={`/products/${item.slug}`} className="hover:text-accent" onClick={() => setIsCartOpen(false)}>
                  <h4 className="font-semibold text-primary">{item.name}</h4>
                </Link>
                <p className="text-sm text-muted-foreground">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-12 h-8 text-center px-1"
                    min="1"
                  />
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <div className="p-6 border-t bg-secondary">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-primary">Subtotal</p>
          <p className="text-lg font-semibold text-primary">${getCartTotal().toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Shipping and taxes calculated at checkout.</p>
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-2"
          onClick={() => {
            // Implement checkout logic or link to checkout page
            alert('Proceeding to checkout (demo)');
            setIsCartOpen(false);
            // Potentially redirect to a /checkout page
            // import Router from 'next/router'; Router.push('/checkout');
          }}
        >
          Proceed to Checkout
        </Button>
        <Button variant="outline" className="w-full" onClick={clearCart}>Clear Cart</Button>
      </div>
    </div>
  );
}

