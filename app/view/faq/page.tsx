import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";

export default function FAQPage() {
  return (
    <main>
      <AppNavbar />
      
      <HeroSection />
      
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <FAQSection />
      </section>

      <Footer />
    </main>
  );
}
