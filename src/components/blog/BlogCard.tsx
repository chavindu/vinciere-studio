
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group/blog w-full overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col">
      <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
        <CardHeader className="p-0 border-b">
          <div className="aspect-video w-full relative overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="group-hover/blog:scale-105 transition-transform duration-300 ease-in-out"
              data-ai-hint="blog lifestyle fashion"
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-6 flex-grow">
        <p className="text-sm text-muted-foreground mb-1">{post.date} {post.author && `by ${post.author}`}</p>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl font-semibold leading-tight hover:text-accent transition-colors mb-2">
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/blog/${post.slug}`} passHref>
          <Button variant="link" className="text-accent p-0 hover:text-accent/80">
            Continue Reading <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
