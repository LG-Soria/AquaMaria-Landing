
import { useEffect } from 'react';
import { ButtonLink } from './components/atoms/Button';
import { WhatsAppIcon } from './components/atoms/WhatsAppIcon';
import { WHATSAPP_PROPOSAL_URL } from './contact';
import { initMarketingPixels, trackWhatsAppClick } from './tracking';

// Organisms
import { Navbar } from './components/organisms/Navbar';
import { Hero } from './components/organisms/Hero';
import { ProblemSection } from './components/organisms/ProblemSection';
import { SolutionSection } from './components/organisms/SolutionSection';
import { HowItWorks } from './components/organisms/HowItWorks';
import { RentalIncludes } from './components/organisms/RentalIncludes';
import { BenefitsSection } from './components/organisms/BenefitsSection';
import { EquipmentSection } from './components/organisms/EquipmentSection';
import { InstallationsSection } from './components/organisms/InstallationsSection';
import { FAQSection } from './components/organisms/FAQSection';
import { FinalCTA } from './components/organisms/FinalCTA';
import { Footer } from './components/organisms/Footer';

export default function App() {
  useEffect(() => {
    initMarketingPixels();
  }, []);

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
        <InstallationsSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-40">
        <ButtonLink
          href={WHATSAPP_PROPOSAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir propuesta por WhatsApp"
          onClick={() =>
            trackWhatsAppClick({
              cta_location: 'floating_button',
              cta_text: 'Pedir propuesta por WhatsApp',
            })
          }
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 md:p-5 rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] border-none hover:scale-110 active:scale-95 transition-all"
        >
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
        </ButtonLink>
      </div>
    </div>
  );
}
