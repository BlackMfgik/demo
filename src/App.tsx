import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import PartnersBar from '@/sections/PartnersBar';
import TariffsSection from '@/sections/TariffsSection';
import ServicesSection from '@/sections/ServicesSection';
import CoverageSection from '@/sections/CoverageSection';
import WhyUsSection from '@/sections/WhyUsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';

export default function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080D17] text-[#F0F4F8]">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersBar />
        <TariffsSection />
        <ServicesSection />
        <CoverageSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
