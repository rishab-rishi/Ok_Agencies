'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Assuming this is your product type


interface Product {
  id: string;
  name: string;
  size: string;
  propertyClass: string;
  standard: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  headerImageUrl?: string;
}

export default function ProductsGrid({ products, title, headerImageUrl }: ProductGridProps) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle client-side only functionality
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelected(null);
      }
    }

    if (selected) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selected]);

  return (
    <div className="w-full px-8 sm:px-10 lg:px-16 py-10 bg-gray-50">
      {(title || headerImageUrl) && (
        <div className="flex items-center gap-4 mb-6 bg-white rounded-lg shadow-md p-4 justify-center">
          {headerImageUrl && (
            <div className="relative w-20 h-20">
              <Image
                src={headerImageUrl}
                alt="Header"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          )}
          {title && <h2 className="text-3xl font-bold text-gray-800">{title}</h2>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => setSelected(product)}
          >
            <div className="w-full rounded-lg overflow-hidden bg-gray-200 aspect-square relative">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="mt-4 text-lg font-bold text-gray-950">{product.name}</h3>
              <ul className="mt-1 text-lg font-medium text-gray-900">
                <li><strong>Size:</strong> {product.size}</li>
                <li><strong>Property Class:</strong> {product.propertyClass}</li>
                <li><strong>Standard:</strong> {product.standard}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {hasMounted && selected && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-transform duration-300 ease-in-out transform scale-100 max-w-lg w-full px-6 pt-16 pb-6 relative"
          >
            <div
              className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelected(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="relative aspect-square hover:opacity-75 transition-opacity">
                {selected?.imageUrl ? (
                  <Image
                    src={selected.imageUrl}
                    alt={selected.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="rounded-lg object-cover"
                  />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
            <div className="pt-4">
              <h3 className="mt-4 text-lg font-bold text-gray-950">{selected.name}</h3>
              <ul className="mt-1 text-lg font-medium text-gray-900">
                <li><strong>Size:</strong> {selected.size}</li>
                <li><strong>Property Class:</strong> {selected.propertyClass}</li>
                <li><strong>Standard:</strong> {selected.standard}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}