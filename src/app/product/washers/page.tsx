import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductsGrid from "@/app/components/ProductsGrid";
import { Product } from "@/app/types/Product";

const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Spring Washer',
      imageUrl: '/spring-washer.png',
      size: ' Diameter M3 - M100',
      propertyClass: 'Spring Steel',
      standard: 'Din 127, IS:3063',
    },
    {
        id: '2',
        name: 'Plain Washer ',
        imageUrl: '/plain-washer.png',
        size: 'Diameter M3 to M100',
        propertyClass: 'Heat Treated Washer',
        standard: ' IS:2016, Din 125, BS:4320',
      },
    // add more...
  ];
  

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-0.5 py-0 mt-25 ">
    <Header />
    <ProductsGrid products={sampleProducts} title="Washers" headerImageUrl="/product-page-icon-washers.png"/>
    <Footer />
  </main>
  );
}
