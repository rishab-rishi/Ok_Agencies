import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductsGrid from "@/app/components/ProductsGrid";
import { Product } from "@/app/types/Product";


const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Hex Nut',
      imageUrl: '/hex-nut.png',
      size: 'Diameter M3 to M100 . 1/4 to 2"',
      propertyClass: ' Grade 5, 8, 10, A2, A4',
      standard: 'ISO:4032, Din 934, BS1083',
    },
    {
        id: '2',
        name: 'Sunloc Nut',
        imageUrl: '/sunloc-nut.png',
        size: ' Diameter M3 to M48 . 3/16 to 2"',
        propertyClass: 'Grade 8, 10, A2, A4',
        standard: 'Din 982, Din 985',
      },
      {
        id: '3',
        name: 'Flange Nut and Flage Nut SS',
        imageUrl: '/flange-nut.png',
        size: 'Diameter M3 to M24',
        propertyClass: 'Grade 8 & 10',
        standard: 'Din 6923',
      },
      {
        id: '4',
        name: 'Weld Nut',
        imageUrl: '/weld-nut.png',
        size: 'Diameter M4 to M12',
        propertyClass: 'Grade 8 & 10',
        standard: 'IS:4218',
      },
    // add more...
  ];
  

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-0.5 py-0 mt-25 ">
    <Header />
    <ProductsGrid products={sampleProducts} title="Nuts" headerImageUrl="/product-page-icon-nuts.png"/>
    <Footer />
  </main>
  );
}
