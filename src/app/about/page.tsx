
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { CartSheet } from '@/components/cart/CartSheet';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSheet />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <section id="story" className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Our Story</h1>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl mb-8">
              <Image src="https://picsum.photos/seed/about_hero/1200/675" alt="Vinciere workshop" layout="fill" objectFit="cover" data-ai-hint="fashion workshop bags"/>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Vinciere was born from a shared dream: to create exceptional bags that blend timeless elegance with modern functionality. Our founders, a collective of designers and artisans, envisioned a brand that celebrated individuality and the art of craftsmanship. We believe that a bag is not just an accessory, but a trusted companion on life&apos;s journey.
            </p>
            <p className="text-muted-foreground mb-6">
              Our journey began in a small studio, fueled by passion and a meticulous attention to detail. We scoured the globe for the finest sustainable materials, partnering with ethical suppliers who share our commitment to quality and responsibility. Each stitch, each cut, and each design choice is made with purpose, ensuring that every Vinciere bag is a testament to enduring style and lasting quality.
            </p>
          </section>

          <section id="mission" className="mb-16">
            <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Our Mission & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Timeless Design</h3>
                <p className="text-muted-foreground">We create pieces that transcend fleeting trends, focusing on classic silhouettes and enduring appeal.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Exceptional Craftsmanship</h3>
                <p className="text-muted-foreground">Our artisans pour their skill and dedication into every bag, ensuring impeccable quality.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Sustainable Luxury</h3>
                <p className="text-muted-foreground">We are committed to using responsibly sourced materials and ethical production practices.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">Customer Delight</h3>
                <p className="text-muted-foreground">Your satisfaction is our priority. We strive to provide an exceptional experience from browsing to ownership.</p>
              </div>
            </div>
          </section>

           <section id="team" className="text-center">
            <h2 className="text-3xl font-semibold text-primary mb-8">Meet the Artisans (Conceptual)</h2>
             <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              While we cherish the collective spirit of our team, the heart of Vinciere lies in the skilled hands of our dedicated artisans who bring our designs to life. (Representational images below)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <div key={i} className="bg-background p-4 rounded-lg shadow-lg">
                   <div className="relative aspect-square w-full rounded-full overflow-hidden mx-auto mb-4 max-w-[150px]">
                    <Image src={`https://picsum.photos/seed/artisan${i}/200/200`} alt={`Artisan ${i}`} layout="fill" objectFit="cover" data-ai-hint="artisan portrait"/>
                  </div>
                  <h4 className="font-semibold text-primary">Artisan Profile {i}</h4>
                  <p className="text-sm text-accent">Master Craftsperson</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
