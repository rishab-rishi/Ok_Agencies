'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// Image data: src + title
const slides = [
  {
    src: '/product-page-automobiles.png',
    title: 'Automobiles and EV',
  },
  {
    src: '/product-page-farming.png',
    title: 'Farming Equipment',
  },
  {
    src: '/product-page-heavy.png',
    title: 'Heavy Vehicle',
  },
  {
    src: '/product-page-beams.png',
    title: 'Construction',
  },
  {
    src: '/product-page-windmill-and-solar.png',
    title: 'Solar and Windmills',
  },
];

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[60vh] overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            {/* Title Overlay */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded text-xl font-semibold">
              {slide.title}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white text-2xl px-4 py-2 rounded-full hover:bg-black/70 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white text-2xl px-4 py-2 rounded-full hover:bg-black/70 focus:outline-none"
        >
          ›
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
