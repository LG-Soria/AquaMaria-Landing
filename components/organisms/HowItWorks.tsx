
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const HowItWorks = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <Badge>Proceso Simple</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight leading-tight">Simple, rápido y sin obras</h2>
          <div className="space-y-4 text-slate-600 font-medium">
             {[
               "Se puede conectar a canilla, mesada o toma existente",
               "No se pierde funcionalidad de la instalación",
               "No requiere reformas ni trabajos complejos"
             ].map((text, i) => (
               <div key={i} className="flex items-start gap-3">
                 <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                 <p>{text}</p>
               </div>
             ))}
          </div>
        </div>
        <div className="md:w-2/3 grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Evaluación", desc: "Evaluamos el espacio y el punto de conexión más conveniente." },
            { step: "02", title: "Instalación", desc: "Instalamos el equipo en menos de 1 hora de forma profesional." },
            { step: "03", title: "Listo", desc: "El dispenser queda listo para usar de inmediato por todo el equipo." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <span className="text-6xl font-black text-slate-50 absolute -top-2 -right-2 transition-transform group-hover:scale-110">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
