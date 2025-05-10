
"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartView } from './CartView'; // Assuming CartView is in the same directory or adjust path
import { Badge } from '@/components/ui/badge';

export function CartSheet() {
  const { isCartOpen, setIsCartOpen, cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      {/* The trigger is typically in the Header, this component is mainly for the SheetContent */}
      {/* <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItemCount > 0 && (
            <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger> */}
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b flex-row justify-between items-center">
          <SheetTitle className="text-xl font-semibold text-primary">Your Cart</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Close cart</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <CartView />
      </SheetContent>
    </Sheet>
  );
}
