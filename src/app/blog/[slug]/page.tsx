
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MOCK_BLOG_POSTS } from '@/lib/constants';
import type { BlogPost } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { CartSheet } from '@/components/cart/CartSheet';

interface BlogPostPageProps {
  params: { slug: string };
}

// Helper to find blog post by slug
function getPostBySlug(slug: string): BlogPost | undefined {
  return MOCK_BLOG_POSTS.find(p => p.slug === slug);
}

export async function generateStaticParams() {
  return MOCK_BLOG_POSTS.map(post => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <CartSheet />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-semibold">Blog post not found</h1>
          <Link href="/blog" passHref>
             <Button variant="link" className="mt-4 text-accent">Back to Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" passHref>
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{post.title}</h1>
            <p className="text-muted-foreground text-sm">
              Published on {post.date} {post.author && `by ${post.author}`}
            </p>
          </div>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl mb-8">
            <Image 
              src={post.imageUrl} 
              alt={post.title} 
              layout="fill" 
              objectFit="cover" 
              priority
              data-ai-hint="blog header fashion"
            />
          </div>

          <div className="prose lg:prose-lg prose-h2:text-primary prose-p:text-muted-foreground prose-a:text-accent max-w-none">
            {/* This is placeholder content. In a real app, this would be fetched (e.g., markdown) */}
            <p>{post.excerpt}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <figure>
              <Image src="https://picsum.photos/seed/blogcontent1/800/450" alt="Blog content image 1" width={800} height={450} className="rounded-md shadow-md" data-ai-hint="lifestyle detail fashion"/>
              <figcaption className="text-center text-sm text-muted-foreground mt-2">A relevant image caption.</figcaption>
            </figure>
            <h2>A Subheading for Elaboration</h2>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.</p>
            <blockquote>
              <p>"Style is a way to say who you are without having to speak." - Rachel Zoe</p>
            </blockquote>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
