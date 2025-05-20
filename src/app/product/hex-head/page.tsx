import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductsGrid  from "@/app/components/ProductsGrid";
import { Product } from "@/app/types/Product";

const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Hex Head Bolt / Screw (Metric)',
      imageUrl: '/hex-head-bolt-metric.png',
      size: 'Diameter M5 to M22, Length 6 mm - 500 mm',
      propertyClass: '  8.8 / 10.9 / 11.9 / A2 / A4',
      standard: 'ISO 4017 ( Din 931 ) / ISO 4014 ( Din 933 )',
    },
    {
        id: '2',
        name: 'Hex Head Bolt / Screw (Inch) ',
        imageUrl: '/hex-head-bolt-inch.png',
        size: 'Diameter 1/4" to 1 1/4" Length 1/2" to 12"',
        propertyClass: ' Grade R,T,V for BSW/BSF & Grade 5.2 & 8 for UNC / UNF / A2 / A4',
        standard: 'Din 7991, IS:6761',
      },
      {
        id: '3',
        name: 'Hot Dip Galvanised Bolts',
        imageUrl: '/hot-dip-galvanised.png',
        size: 'Diameter M12 to M22',
        propertyClass: 'Grade 8.8 / 10.9 ',
        standard: ' ISO 4017 (Din 931) / ISO 4014 (Din 933)',
      },
      {
        id: '4',
        name: 'Flange Hex Head',
        imageUrl: '/flange-hex-head.png',
        size: 'Diameter M5 to M22',
        propertyClass: 'Grade 8.8 / 10.9 ',
        standard: ' Din 6921, ISO:4162, ISO:15071',
      },
    // add more...
  ];
  

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-0.5 py-0 mt-25 ">
    <Header />
    <ProductsGrid products={sampleProducts} title="Hex Head" headerImageUrl="/product-page-icon-hex-head.png"/>
    <Footer />
  </main>
  );
}
