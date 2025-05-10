
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/constants';
import { CATEGORIES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from "@/components/ui/slider"
import { CartSheet } from '@/components/cart/CartSheet';

// This would typically be a client component if filters are interactive client-side
function ProductFilters() {
  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5 space-y-8 p-6 bg-secondary rounded-lg shadow">
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Categories</h3>
        <ul className="space-y-2">
          {CATEGORIES.map(category => (
            <li key={category.id}>
              <Button variant="link" className="p-0 text-muted-foreground hover:text-accent h-auto">
                {category.name}
              </Button>
            </li>
          ))}
          <li>
             <Button variant="link" className="p-0 text-muted-foreground hover:text-accent h-auto">
                All Bags
              </Button>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Price Range</h3>
        <div className="space-y-3">
           <Slider defaultValue={[50]} max={500} step={10} className="[&>span:first-child]:h-1"/>
           <div className="flex justify-between text-sm text-muted-foreground">
             <span>$0</span>
             <span>$500</span>
           </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Sort By</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Recommended" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Average Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Apply Filters</Button>
      </div>
    </aside>
  );
}


export default function ShopPage() {
  // In a real app, products would be fetched based on filters
  const products = MOCK_PRODUCTS;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-2">Shop Our Collection</h1>
          <p className="text-lg text-muted-foreground">Find your perfect Vinciere bag.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters />
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Placeholder for Pagination */}
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Load More</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
