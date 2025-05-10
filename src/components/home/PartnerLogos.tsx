
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_PARTNER_LOGOS } from '@/lib/constants';

export function PartnerLogos() {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-primary mb-8">As Featured In</h2>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-8 md:space-x-12 pb-4 no-scrollbar items-center justify-center">
            {MOCK_PARTNER_LOGOS.map((partner) => (
              <div key={partner.id} className="flex-shrink-0 group">
                {partner.href ? (
                  <Link href={partner.href} target="_blank" rel="noopener noreferrer" aria-label={partner.name}>
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={150}
                      height={50}
                      objectFit="contain"
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      data-ai-hint="partner logo"
                    />
                  </Link>
                ) : (
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={150}
                    height={50}
                    objectFit="contain"
                    className="opacity-70"
                    data-ai-hint="partner logo"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple utility CSS to hide scrollbar if needed for the no-scrollbar class
// Add this to your globals.css or a relevant CSS file:
/*
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
