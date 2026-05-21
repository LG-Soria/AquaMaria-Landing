import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const faqs = [
  {
    q: '¿Qué incluye el servicio mensual?',
    a: 'Incluye el equipo conectado a red, mantenimiento, recambio anual de filtro y soporte técnico 24 hs.'
  },
  {
    q: '¿La instalación se cobra aparte?',
    a: 'Sí. La instalación se abona una única vez al inicio del servicio.'
  },
  {
    q: '¿Cómo sé qué equipo me conviene?',
    a: 'Evaluamos el tipo de espacio, el consumo aproximado, la ubicación y el uso diario para recomendar la opción más adecuada.'
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'Trabajamos en CABA y Gran Buenos Aires.'
  },
  {
    q: '¿Sirve para comercios?',
    a: 'Sí. Es una solución para locales, salas de espera y espacios de atención que necesitan agua disponible de forma prolija y continua.'
  },
  {
    q: '¿Cada cuánto se cambia el filtro?',
    a: 'El filtro se renueva una vez por año como parte del mantenimiento incluido.'
  },
  {
    q: '¿Qué pasa si el equipo tiene un problema?',
    a: 'Contás con soporte técnico 24 hs para recibir asistencia ante cualquier inconveniente.'
  },
  {
    q: '¿Reemplaza los bidones?',
    a: 'Sí. El equipo se conecta a la red y evita la compra, almacenamiento y recambio de bidones.'
  },
  {
    q: '¿También instalan en hogares?',
    a: 'Sí, en hogares compatibles con instalación a red. El servicio está pensado principalmente para empresas, comercios y oficinas.'
  }
];

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan">Centro de ayuda</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-4 min-h-[760px] md:min-h-[820px]">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === i ? 'border-cyan-200 shadow-lg shadow-cyan-500/5' : 'border-slate-100'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left font-bold text-slate-900 group focus:outline-none focus:ring-2 focus:ring-cyan-500/20 rounded-2xl"
                aria-expanded={openIndex === i}
              >
                <span className={`transition-colors duration-300 pr-4 ${openIndex === i ? 'text-cyan-600' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-500 ${
                    openIndex === i ? 'rotate-180 text-cyan-500' : 'group-hover:text-slate-600'
                  }`} 
                />
              </button>

              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
