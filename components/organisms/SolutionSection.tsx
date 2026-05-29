import React from 'react';
import { CalendarClock, Settings, ShieldCheck, MapPin } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const SolutionSection = () => (
  <section id="servicio" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <Badge variant="cyan">Servicio mensual AquaMaría</Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-8 tracking-tight">Instalamos el equipo y nos ocupamos del mantenimiento</h2>
        <p className="text-slate-400 text-lg">
     Definimos el equipo adecuado para tu espacio, lo conectamos a la red y sostenemos el servicio en el tiempo para que el agua esté disponible todos los días. </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Servicio mensual', desc: 'Una contratación clara y previsible para resolver el consumo diario de agua.', icon: <CalendarClock /> },
          { title: 'Instalación profesional', desc: 'La instalación se abona una única vez al inicio del servicio.', icon: <Settings /> },
          { title: 'Mantenimiento incluido', desc: 'Incluye mantenimiento, recambio anual de filtro y soporte técnico 24 hs.', icon: <ShieldCheck /> },
          { title: 'Cobertura local', desc: 'Atendemos empresas, comercios y oficinas en CABA y Gran Buenos Aires.', icon: <MapPin /> }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-sm group hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon, { className: 'w-7 h-7' } as any)}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
