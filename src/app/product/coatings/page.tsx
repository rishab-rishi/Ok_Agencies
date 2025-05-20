import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductsGrid  from "@/app/components/ProductsGrid";
import { Product } from "@/app/types/Product";

import CoatingList from "@/app/components/CoatingsList";

const sampleProducts: Product[] = [
    
  ];
  

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-0.5 py-0 mt-25 bg-gray-100">
    <Header />
    <ProductsGrid products={sampleProducts} title="Coatings" headerImageUrl="/product-page-icon-coatings.png"/>
    <CoatingList />
    <Footer />
  </main>
  );
}
