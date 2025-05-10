
"use client";

import type { ReactNode } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();


export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}
