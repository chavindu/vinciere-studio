
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutBrandSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/brandimage/800/600"
              alt="Vinciere Brand - Crafting a bag"
              layout="fill"
              objectFit="cover"
              data-ai-hint="artisan crafting bag"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              The Essence of Vinciere
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Vinciere, we believe that a bag is more than just an accessory; it&apos;s a statement, a companion, and an extension of your personal style. Our journey began with a passion for timeless design and unparalleled craftsmanship.
            </p>
            <p className="text-muted-foreground mb-8">
              Each Vinciere bag is thoughtfully designed and meticulously crafted from the finest materials, ensuring it not only looks beautiful but also stands the test of time. We are committed to sustainable practices and ethical sourcing, because luxury should also be responsible.
            </p>
            <Link href="/about" passHref>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
