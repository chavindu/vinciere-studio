
import { BlogCard } from '@/components/blog/BlogCard';
import { MOCK_BLOG_POSTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BlogSection() {
  const recentPosts = MOCK_BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary mb-4">From Our Blog</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Get inspired with style tips, trend reports, and behind-the-scenes stories from Vinciere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" passHref>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
