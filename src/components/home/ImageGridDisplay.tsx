
import Image from 'next/image';

interface ImageGridDisplayProps {
  title?: string;
  images: { id: string; src: string; alt: string; hint: string }[];
}

export function ImageGridDisplay({ title, images }: ImageGridDisplayProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-semibold text-center text-primary mb-10">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image) => (
            <div key={image.id} className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.hint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
