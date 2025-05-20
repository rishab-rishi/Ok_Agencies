import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductsGrid from "@/app/components/ProductsGrid";
import { Product } from "@/app/types/Product";

const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Socket Head Cap Screws / Bolt ',
      imageUrl: '/socket-cap-head.png',
      size: 'Diameter M3 to M48',
      propertyClass: ' Grade 8.8 / 10.9 / 12.9 / A2 / A4',
      standard: 'IS:2269, Din 912, ISO:4762',
    },
    {
        id: '2',
        name: 'Counter Sunk Cap Screw ',
        imageUrl: '/counter-sunk-cap-screw.png',
        size: 'Diameter M3 to M24, Length 6mm to 200 mm',
        propertyClass: 'Grade 8.8 / 10.9 / 12.9 / A2 / A4',
        standard: 'Din 7991, IS:6761',
      },
      {
        id: '3',
        name: 'Button Head Cap Screws',
        imageUrl: '/button-head-cap-screws.png',
        size: 'Diameter M3 to M16, Length 6 mm to 50 mm',
        propertyClass: 'Grade 8.8 / 10.9 / 12.9 / A2 / A4 ',
        standard: ' ISO:7380',
      },
    // add more...
  ];
  

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-0.5 py-0 mt-25 ">
    <Header />
    <ProductsGrid products={sampleProducts} title="Socket Head" headerImageUrl="/product-page-icon-socket-head.png"/>
    <Footer />
  </main>
  );
}
