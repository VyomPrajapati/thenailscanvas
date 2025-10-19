import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import Collections from "./components/Collections";
import SustainabilityBanner from "./components/SustainabilityBanner";
// Replace FollowUs with CircularGallery
import CircularGallery from "./components/circulargallery";
import CategoryTiles from "./components/CategoryTiles";
import ProductShowcase from "./components/ProductShowcase";
import Newsletter from "./components/Newsletter";
import AppNavbar from "../core/AppNavbar";
import Footer from "@/app/view/core/footer";
import Reveal from "@/app/components/ui/Reveal";
import { memo, useMemo } from "react";

const LandingPage = memo(function LandingPage() {
  const galleryItems = useMemo(() => [
    { image: "/nails/close-up-beauty-nail-art.jpg", text: "Gel Luxe" },
    { image: "/nails/people-choosing-nails-high-angle.jpg", text: "Press-ons" },
    { image: "/nails/nail-care-items-arrangement-view.jpg", text: "Kits" },
    { image: "/nails/nail1.jpeg", text: "Classic French" },
    { image: "/nails/nail2.jpeg", text: "Satin Nude" },
    { image: "/nails/nail3.jpeg", text: "Emerald Press" },
  ], []);

  return (
    <main>
      <AppNavbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delayMs={40}>
        <CategoryTiles />
      </Reveal>
      <Reveal delayMs={60}>
        <ProductShowcase />
      </Reveal>
      <Reveal delayMs={80}>
        <BestSellers />
      </Reveal>
      <Reveal delayMs={100}>
        <Collections />
      </Reveal>
      <Reveal delayMs={60}>
        <SustainabilityBanner />
      </Reveal>
      <Reveal delayMs={80}>
        <Newsletter />
      </Reveal>
      <Reveal delayMs={100}>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            bend={4}
            textColor="#000000"
            borderRadius={0.05}
            scrollEase={0.02}
            items={galleryItems}
          />
        </div>
      </Reveal>
      <Footer />
    </main>
  );
});

export default LandingPage;


