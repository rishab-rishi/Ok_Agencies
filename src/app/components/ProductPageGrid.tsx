'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  { title: 'HEX HEAD', image: '/product-page-icon-hex-head.png', slug: 'hex-head' },
  { title: 'SOCKET HEAD', image: '/product-page-icon-socket-head.png', slug: 'socket-head' },
  { title: 'WASHERS', image: '/product-page-icon-washers.png', slug: 'washers' },
  { title: 'NUTS', image: '/product-page-icon-nuts.png', slug: 'nuts' },
  { title: 'COATINGS', image: '/product-page-icon-coatings.png', slug: 'coatings' },
];

const ProductPageGrid: React.FC = () => {
  return (
    <div className="w-full bg-white px-4 py-10 sm:px-6 md:px-12 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-black">OUR PRODUCTS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10">
        {products.map((product, index) => (
          <Link key={index} href={`/product/${product.slug}`}>
            <div className="text-center space-y-3 cursor-pointer hover:opacity-90 hover:scale-95 hover:shadow-md transition-transform duration-300 text-black  ">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto ">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base">{product.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPageGrid;
