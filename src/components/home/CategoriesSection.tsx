
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';

export function CategoriesSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary mb-4">Shop by Category</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Explore our curated collections of bags, designed for every style and occasion.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {CATEGORIES.map((category) => (
            <Link key={category.id} href={category.href} passHref>
              <Card className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <CardContent className="p-0 aspect-[3/3.5] flex flex-col items-center justify-center text-center relative">
                  {category.image ? (
                     <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        data-ai-hint="fashion bag category"
                      />
                  ) : category.icon && (
                     React.createElement(category.icon, { className: "w-12 h-12 text-primary mb-2 group-hover:text-accent transition-colors" })
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 p-2 flex items-end justify-center">
                    <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
