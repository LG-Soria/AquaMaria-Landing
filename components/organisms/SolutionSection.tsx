
import React from 'react';
import { Droplets, Clock, Building2 } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const SolutionSection = () => (
  <section id="servicio" className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Badge variant="cyan">La Nueva Lógica</Badge>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-8 tracking-tight">Una forma más lógica y eficiente de abastecer a tu equipo</h2>
        <p className="text-slate-400 text-lg">Un dispenser de agua de red se conecta directamente a la instalación existente y purifica el agua en el momento de uso.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Agua Ilimitada", desc: "Sin límites de consumo, directo de red.", icon: <Droplets /> },
          { title: "Funcionamiento Continuo", desc: "Disponibilidad 24/7 sin interrupciones.", icon: <Clock /> },
          { title: "Equipos Modernos", desc: "Diseño prolijo para oficinas modernas.", icon: <Building2 /> }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon, { className: "w-7 h-7" } as any)}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
