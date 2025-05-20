import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-[85px]">
    <Header />
    <Hero />
    <AboutUs />
    <Industries />
    <WhyChooseUs />
    <ContactForm />
    <Footer />
  </main>
  );
}
