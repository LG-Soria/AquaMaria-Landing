
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './components/atoms/Button';

// Organisms
import { Navbar } from './components/organisms/Navbar';
import { Hero } from './components/organisms/Hero';
import { ProblemSection } from './components/organisms/ProblemSection';
import { SolutionSection } from './components/organisms/SolutionSection';
import { HowItWorks } from './components/organisms/HowItWorks';
import { RentalIncludes } from './components/organisms/RentalIncludes';
import { BenefitsSection } from './components/organisms/BenefitsSection';
import { EquipmentSection } from './components/organisms/EquipmentSection';
import { FAQSection } from './components/organisms/FAQSection';
import { FinalCTA } from './components/organisms/FinalCTA';
import { Footer } from './components/organisms/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <RentalIncludes />
        <BenefitsSection />
        <EquipmentSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40">
        <a href="https://wa.me/5491165532832" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] border-none hover:scale-110 active:scale-95 transition-all">
            <MessageCircle className="w-7 h-7 fill-current" />
          </Button>
        </a>
      </div>
    </div>
  );
}
