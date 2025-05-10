
import type { StaticImageData } from 'next/image';

export interface Category {
  id: string;
  name: string;
  href: string;
  icon?: React.ElementType | string; // Lucide icon or path to image
  image?: string | StaticImageData; // Optional image for category display
}

export interface Product {
  id: string;
  name:string;
  category: string;
  price: number;
  originalPrice?: number; // For sales/discounts
  imageUrl: string | StaticImageData;
  images?: (string | StaticImageData)[]; // For product detail page
  description?: string;
  rating?: number; // Optional rating 0-5
  reviews?: number; // Optional number of reviews
  slug: string; // For URL
  tags?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  colors?: { name: string, hex: string }[];
  sizes?: string[];
  stock?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  imageUrl: string | StaticImageData;
  excerpt: string;
  date: string; // e.g., "October 26, 2023"
  author?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logoUrl: string | StaticImageData;
  href?: string;
}
