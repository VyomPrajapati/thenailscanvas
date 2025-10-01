import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function ContactUsPage() {
  return (
    <main>
      <AppNavbar />
      
      <HeroSection />
      
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
