
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../atoms/Button';

export const FinalCTA = () => (
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
    <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Consultá sin compromiso</h2>
      <p className="text-slate-400 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
        Si querés una solución profesional para tu empresa, escribinos y te asesoramos según tu espacio y necesidad. Atención humana en horario comercial.
      </p>
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-4 px-12 py-6 text-xl"
        onClick={() => window.open('https://wa.me/5491165532832?text=Hola!%20Vengo%20de%20la%20web%20y%20me%20gustar%C3%ADa%20asesorarme%20sobre%20un%20plan%20de%20dispensers.', '_blank')}
      >
        <MessageCircle className="w-6 h-6 fill-current" /> Hablar por WhatsApp
      </Button>
    </div>
  </section>
);
