import Navbar from "../components/Navbar";

import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import FeaturedProductSection from "../components/home/FeaturedProductSection";
import ExperienceSection from "../components/home/ExperienceSection";
import CollectionSection from "../components/home/CollectionSection";
import ClosingSection from "../components/home/ClosingSection";

function Home() {
  return (
    <div className="min-h-screen bg-momentum-cream text-momentum-text">

      <Navbar />

      <HeroSection />

      <PhilosophySection />

      <FeaturedProductSection />

      <ExperienceSection />

      <CollectionSection />

      <ClosingSection />

    </div>
  );
}

export default Home;