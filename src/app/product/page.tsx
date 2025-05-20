import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductPageSlide from "../components/ProductPageSlide";
import ProductPageGrid from "../components/ProductPageGrid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[85px]">
    <Header />
    <ProductPageSlide />
    <ProductPageGrid />
    <Footer />
  </main>
  );
}
