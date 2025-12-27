
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "¿El agua es realmente ilimitada?", 
      a: "Sí. Al estar conectado a la red, el equipo provee agua purificada sin límites de consumo, las 24 horas del día, garantizando que su oficina nunca se quede sin suministro, sin importar la cantidad de personas." 
    },
    { 
      q: "¿Funciona con agua de red?", 
      a: "Sí. El sistema filtra y purifica el agua de red en el momento de uso mediante tecnología de última generación que elimina sedimentos, cloro, sabores y olores desagradables." 
    },
    { 
      q: "¿Se puede instalar en cualquier oficina?", 
      a: "En la mayoría de los casos, sí. Contamos con distintas formas de conexión prolija y estética que no requieren romper paredes ni realizar reformas complejas en su espacio de trabajo." 
    },
    { 
      q: "¿Es más caro que los bidones?", 
      a: "El alquiler mensual de Aquamaría evita costos ocultos como logística, almacenamiento y pérdida de tiempo. En empresas con más de 5 personas, suele representar un ahorro operativo inmediato." 
    },
    { 
      q: "¿Cuánto demora la instalación?", 
      a: "El proceso es rápido, limpio y profesional. Suele realizarse en menos de una hora por nuestros técnicos especializados, sin interrumpir la jornada laboral de su equipo." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan">Centro de Ayuda</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Preguntas frecuentes</h2>
        </div>
        
        {/* 
            Contenedor con altura mínima fija para estabilizar el layout vertical.
            Esto evita que las secciones inferiores (como el CTA final) se desplacen 
            bruscamente cuando el usuario interactúa con el acordeón.
        */}
        <div className="space-y-4 min-h-[580px] md:min-h-[620px]">
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
                <span className={`transition-colors duration-300 ${openIndex === i ? 'text-cyan-600' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-500 ${
                    openIndex === i ? 'rotate-180 text-cyan-500' : 'group-hover:text-slate-600'
                  }`} 
                />
              </button>
              
              {/* Animación de expansión suave mediante Grid Layout */}
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
