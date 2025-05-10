
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/constants';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinksDesktop = (
    <nav className="hidden md:flex gap-6 items-center">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  const navLinksMobile = (
    <nav className="flex flex-col gap-4 p-4">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-lg font-medium text-foreground hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo />

        <div className="flex-1 flex justify-center">
          {navLinksDesktop}
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/account" passHref>
            <Button variant="ghost" size="icon" aria-label="My Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" aria-label="Shopping Cart" onClick={toggleCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {cartItemCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex justify-between items-center p-4 border-b">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                {navLinksMobile}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
