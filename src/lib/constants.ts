
import type { Product, Category, BlogPost, PartnerLogo } from '@/types';
import { Briefcase, ShoppingBag, Backpack, Wand2, Handbag, Wallet } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/style-advisor', label: 'Style Advisor' },
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Totes', href: '/shop?category=totes', icon: Briefcase, image: 'https://picsum.photos/seed/tote/300/200' },
  { id: '2', name: 'Crossbody', href: '/shop?category=crossbody', icon: Handbag, image: 'https://picsum.photos/seed/crossbody/300/200' },
  { id: '3', name: 'Backpacks', href: '/shop?category=backpacks', icon: Backpack, image: 'https://picsum.photos/seed/backpack/300/200' },
  { id: '4', name: 'Clutches', href: '/shop?category=clutches', icon: Wallet, image: 'https://picsum.photos/seed/clutch/300/200' },
  { id: '5', name: 'Shoulder Bags', href: '/shop?category=shoulder-bags', icon: ShoppingBag, image: 'https://picsum.photos/seed/shoulder/300/200' },
  { id: '6', name: 'Luxury', href: '/shop?category=luxury', icon: Wand2, image: 'https://picsum.photos/seed/luxury/300/200' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Tote',
    category: 'Totes',
    price: 189.99,
    imageUrl: 'https://picsum.photos/seed/product1/400/550',
    images: ['https://picsum.photos/seed/product1_1/600/800', 'https://picsum.photos/seed/product1_2/600/800', 'https://picsum.photos/seed/product1_3/600/800'],
    description: 'A timeless leather tote, perfect for everyday elegance and functionality. Crafted from premium full-grain leather.',
    slug: 'classic-leather-tote',
    isFeatured: true,
    rating: 4.5,
    reviews: 120,
    tags: ['leather', 'classic', 'work'],
    stock: 10,
  },
  {
    id: '2',
    name: 'Chic Crossbody Bag',
    category: 'Crossbody',
    price: 129.50,
    originalPrice: 150.00,
    imageUrl: 'https://picsum.photos/seed/product2/400/550',
    images: ['https://picsum.photos/seed/product2_1/600/800', 'https://picsum.photos/seed/product2_2/600/800'],
    description: 'Stay stylish on the go with this chic crossbody bag. Compact yet spacious enough for your essentials.',
    slug: 'chic-crossbody-bag',
    isNew: true,
    rating: 4.8,
    reviews: 85,
    tags: ['compact', 'stylish', 'travel'],
    stock: 15,
  },
  {
    id: '3',
    name: 'Urban Adventure Backpack',
    category: 'Backpacks',
    price: 220.00,
    imageUrl: 'https://picsum.photos/seed/product3/400/550',
    description: 'Designed for the modern explorer, this backpack combines style and durability for all your urban adventures.',
    slug: 'urban-adventure-backpack',
    isFeatured: true,
    rating: 4.2,
    reviews: 95,
    tags: ['durable', 'urban', 'adventure'],
    stock: 5,
  },
  {
    id: '4',
    name: 'Evening Sparkle Clutch',
    category: 'Clutches',
    price: 99.00,
    imageUrl: 'https://picsum.photos/seed/product4/400/550',
    description: 'Add a touch of glamour to your evening wear with this stunning sparkle clutch.',
    slug: 'evening-sparkle-clutch',
    rating: 4.9,
    reviews: 50,
    tags: ['evening', 'glamour', 'party'],
    stock: 20,
  },
  {
    id: '5',
    name: 'Minimalist Shoulder Bag',
    category: 'Shoulder Bags',
    price: 155.00,
    imageUrl: 'https://picsum.photos/seed/product5/400/550',
    description: 'A sleek and minimalist shoulder bag that complements any outfit, from casual to formal.',
    slug: 'minimalist-shoulder-bag',
    isFeatured: true,
    rating: 4.6,
    reviews: 70,
    tags: ['minimalist', 'sleek', 'versatile'],
    stock: 8,
  },
  {
    id: '6',
    name: 'Luxury Suede Handbag',
    category: 'Luxury',
    price: 450.00,
    imageUrl: 'https://picsum.photos/seed/product6/400/550',
    description: 'Indulge in luxury with this exquisite suede handbag, featuring fine craftsmanship and premium materials.',
    slug: 'luxury-suede-handbag',
    isNew: true,
    rating: 5.0,
    reviews: 30,
    tags: ['luxury', 'suede', 'premium'],
    stock: 3,
  },
   {
    id: '7',
    name: 'Canvas Weekender Bag',
    category: 'Totes',
    price: 170.00,
    imageUrl: 'https://picsum.photos/seed/product7/400/550',
    description: 'Spacious and durable canvas weekender bag, ideal for short trips and getaways.',
    slug: 'canvas-weekender-bag',
    rating: 4.3,
    reviews: 60,
    tags: ['canvas', 'travel', 'spacious'],
    stock: 12,
  },
  {
    id: '8',
    name: 'Convertible Belt Bag',
    category: 'Crossbody',
    price: 85.00,
    imageUrl: 'https://picsum.photos/seed/product8/400/550',
    description: 'Versatile and trendy, this bag can be worn as a crossbody or a belt bag.',
    slug: 'convertible-belt-bag',
    isNew: true,
    rating: 4.7,
    reviews: 110,
    tags: ['convertible', 'trendy', 'versatile'],
    stock: 25,
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Choosing Your Perfect Bag',
    slug: 'guide-choosing-perfect-bag',
    imageUrl: 'https://picsum.photos/seed/blog1/400/300',
    excerpt: 'Finding the right bag can be a game-changer. Learn about different styles, materials, and what to look for...',
    date: 'November 5, 2023',
    author: 'Vinciere Style Team'
  },
  {
    id: '2',
    title: '5 Bag Trends to Watch This Season',
    slug: 'bag-trends-this-season',
    imageUrl: 'https://picsum.photos/seed/blog2/400/300',
    excerpt: 'Stay ahead of the fashion curve with our roundup of the hottest bag trends for the upcoming season...',
    date: 'October 28, 2023',
    author: 'Alex Chen'
  },
  {
    id: '3',
    title: 'How to Care for Your Vinciere Leather Bag',
    slug: 'care-for-leather-bag',
    imageUrl: 'https://picsum.photos/seed/blog3/400/300',
    excerpt: 'Keep your Vinciere bag looking pristine for years to come with these simple care tips for leather goods...',
    date: 'October 15, 2023',
    author: 'Vinciere Care Department'
  },
];

export const MOCK_PARTNER_LOGOS: PartnerLogo[] = [
  { id: '1', name: 'Fashionista Magazine', logoUrl: 'https://picsum.photos/seed/logo1/150/50?grayscale' },
  { id: '2', name: 'Style Hub', logoUrl: 'https://picsum.photos/seed/logo2/150/50?grayscale' },
  { id: '3', name: 'Luxury Lane', logoUrl: 'https://picsum.photos/seed/logo3/150/50?grayscale' },
  { id: '4', name: 'Eco Threads', logoUrl: 'https://picsum.photos/seed/logo4/150/50?grayscale' },
  { id: '5', name: 'Vogue World', logoUrl: 'https://picsum.photos/seed/logo5/150/50?grayscale' },
  { id: '6', name: 'Glamour Co.', logoUrl: 'https://picsum.photos/seed/logo6/150/50?grayscale' },
];

export const HERO_SLIDES = [
  {
    id: '1',
    title: 'Elegance Redefined',
    subtitle: 'Discover the new collection of Vinciere bags.',
    imageUrl: 'https://picsum.photos/seed/hero1/1920/1080',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
    textPosition: 'text-center' as 'text-center' | 'text-left' | 'text-right', // Added type assertion
    textColor: 'text-white',
    overlayColor: 'bg-black/30'
  },
  {
    id: '2',
    title: 'Crafted for You',
    subtitle: 'Timeless designs, exceptional quality.',
    imageUrl: 'https://picsum.photos/seed/hero2/1920/1080',
    ctaText: 'Explore Styles',
    ctaLink: '/shop?category=all',
    textPosition: 'text-left' as 'text-center' | 'text-left' | 'text-right', // Added type assertion
    textColor: 'text-white',
    overlayColor: 'bg-primary/40'
  },
  {
    id: '3',
    title: 'The Art of Accessorizing',
    subtitle: 'Find your perfect Vinciere companion.',
    imageUrl: 'https://picsum.photos/seed/hero3/1920/1080',
    ctaText: 'View Lookbook',
    ctaLink: '/lookbook', // Assuming a lookbook page might exist
    textPosition: 'text-right' as 'text-center' | 'text-left' | 'text-right', // Added type assertion
    textColor: 'text-white',
    overlayColor: 'bg-accent/30'
  },
];
