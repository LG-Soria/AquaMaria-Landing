import { Button } from '../atoms/Button';
import { WhatsAppIcon } from '../atoms/WhatsAppIcon';
import { WHATSAPP_PROPOSAL_URL } from '../../contact';

export const FinalCTA = () => (
  <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
    <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Pedí una propuesta para tu negocio</h2>
      <p className="text-slate-400 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
        Contanos tu zona, el tipo de espacio y la cantidad aproximada de personas. Te orientamos para recomendarte el equipo más adecuado.
      </p>
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-4 px-8 sm:px-12 py-6 text-base sm:text-xl"
        onClick={() => window.open(WHATSAPP_PROPOSAL_URL, '_blank')}
      >
        <WhatsAppIcon className="w-6 h-6" /> Pedir propuesta por WhatsApp
      </Button>
    </div>
  </section>
);
