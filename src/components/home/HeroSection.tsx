
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HERO_SLIDES } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Auto-scroll every 7 seconds
    return () => clearInterval(slideInterval);
  }, []);

  if (!HERO_SLIDES || HERO_SLIDES.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden group">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority={index === 0}
            data-ai-hint="fashion model bag"
          />
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 ${slide.overlayColor || 'bg-black/30'}`}>
            <div className={`max-w-2xl ${slide.textPosition || 'text-center'} ${slide.textColor || 'text-white'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg" style={{color: slide.textColor || 'white'}}>
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md" style={{color: slide.textColor || 'white'}}>
                {slide.subtitle}
              </p>
              <Link href={slide.ctaLink} passHref>
                <Button size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg rounded-md shadow-lg">
                  {slide.ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 text-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
