
import React from 'react';
import { Instagram, Phone, Building2 } from 'lucide-react';
import { Logo } from '../atoms/Logo';

export const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-5 space-y-8">
          <Logo isScrolled={true} />
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed">
            Soluciones inteligentes en agua purificada para empresas, oficinas y hogares con más de 10 años de trayectoria.
          </p>
          <div className="flex gap-4">
             <a href="https://instagram.com/aquamariared" target="_blank" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all border border-slate-100 text-slate-400">
               <Instagram className="w-6 h-6" />
             </a>
          </div>
        </div>
        <div className="md:col-span-4 space-y-8">
          <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em]">Contacto</h4>
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-slate-600 font-bold">
                <Phone className="w-5 h-5 text-cyan-500" /> 11 6553-2832
             </div>
             <div className="flex items-center gap-4 text-slate-600 font-bold">
                <Building2 className="w-5 h-5 text-cyan-500" /> @aquamariared
             </div>
          </div>
        </div>
        <div className="md:col-span-3 space-y-8">
          <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em]">Zona de Servicio</h4>
          <p className="text-slate-500 font-bold text-sm leading-relaxed">
            Zona Oeste GBA y <br />
            Ciudad Autónoma de Buenos Aires.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 gap-6">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© 2024 Aquamaría S.A. | Pureza sin concesiones.</p>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">+10 años acompañando empresas.</p>
      </div>
    </div>
  </footer>
);
