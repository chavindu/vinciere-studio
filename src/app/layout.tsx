
import type { Metadata } from 'next';
import { quicksand } from '@/lib/fonts';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Vinciere Bags Boutique',
  description: 'Exquisite bags for the modern individual. Vinciere - Elegance Redefined.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable}`}>
      <body className={`antialiased font-quicksand`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
