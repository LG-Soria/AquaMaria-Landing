import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const HowItWorks = () => (
  <section id="como-funciona" className="py-16 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="md:w-1/3">
          <Badge>Cómo empezamos</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight leading-tight">Cómo funciona el servicio</h2>
          <div className="space-y-4 text-slate-600 font-medium">
             {[
               'Evaluamos tu espacio antes de recomendar un equipo.',
               'Coordinamos una instalación prolija y adaptada al lugar.',
               'Después de instalar, seguimos acompañando con mantenimiento y soporte.',
             ].map((text, i) => (
               <div key={i} className="flex items-start gap-3">
                 <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                 <p>{text}</p>
               </div>
             ))}
          </div>
        </div>
        <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
          {[
            { step: '01', title: 'Nos contás sobre tu espacio', desc: 'Zona, tipo de lugar y cantidad aproximada de personas.' },
            { step: '02', title: 'Te recomendamos la opción adecuada', desc: 'Definimos el equipo según consumo, ubicación y necesidad.' },
            { step: '03', title: 'Instalamos el purificador', desc: 'Coordinamos la instalación y dejamos el equipo conectado a la red.' },
            { step: '04', title: 'Seguimos acompañando', desc: 'Incluye mantenimiento, recambio anual de filtro y soporte técnico 24 hs.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group min-h-[230px]">
              <span
                className="service-step-number text-7xl font-black absolute top-3 right-6 transition-transform group-hover:scale-105"
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                {item.step}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
