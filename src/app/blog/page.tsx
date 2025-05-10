
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { MOCK_BLOG_POSTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CartSheet } from '@/components/cart/CartSheet';

export default function BlogListPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Vinciere Blog</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Insights, inspiration, and the latest news from the world of Vinciere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MOCK_BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Placeholder for Pagination if many posts */}
        {MOCK_BLOG_POSTS.length > 9 && (
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Load More Posts
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
