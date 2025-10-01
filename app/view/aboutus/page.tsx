import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import StatsSection from "./components/StatsSection";

export default function AboutUsPage() {
  return (
    <main>
      <AppNavbar />

      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <StatsSection />

      <Footer />
    </main>
  );
}
