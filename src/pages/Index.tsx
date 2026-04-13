import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VillasSection from "../components/VillasSection";
import ExploreSection from "../components/ExploreSection";
import ExperiencesSection from "../components/ExperiencesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ScrollReveal>
          <VillasSection />
        </ScrollReveal>
        <ExploreSection />
        <ScrollReveal>
          <ExperiencesSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <BookingCTA />
        </ScrollReveal>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
