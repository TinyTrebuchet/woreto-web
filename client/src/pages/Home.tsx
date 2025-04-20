import { useEffect } from "react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DownloadSection from "@/components/home/DownloadSection";
import Footer from "@/components/home/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Woreto - Compare, Style, Save – Your Fashion, Your Price!";
    
    // Handling anchor links from URL on page load
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const header = document.querySelector('header');
          const headerHeight = header ? header.clientHeight : 0;
          
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - headerHeight,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    handleInitialHash();
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
