
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons/Logo';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 p-8 bg-background rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-primary mb-2">Stay Updated with Vinciere</h3>
          <p className="text-muted-foreground mb-6">Subscribe to our newsletter for the latest collections, offers, and style tips.</p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-grow text-base" aria-label="Email for newsletter"/>
            <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link href="/about#story" className="hover:text-accent transition-colors">Brand Story</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Vinciere</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-accent transition-colors">Shop All</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/exchange-policy" className="hover:text-accent transition-colors">Exchange Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="text-secondary-foreground hover:text-accent transition-colors">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
             <div className="mt-6">
              <Logo className="text-2xl"/>
              <p className="text-sm text-muted-foreground mt-2">Elegance Redefined.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Vinciere. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
