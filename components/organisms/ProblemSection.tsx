import { useEffect, useRef, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const ProblemSection = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const scrollDelayRef = useRef<number | null>(null);
  const [showScrollSolution, setShowScrollSolution] = useState(false);

  useEffect(() => {
    const imageNode = imageRef.current;
    const isTouchLayout = window.matchMedia('(max-width: 1023px)').matches;

    if (!imageNode || !isTouchLayout) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (scrollDelayRef.current) {
          window.clearTimeout(scrollDelayRef.current);
        }

        if (entry.isIntersecting) {
          scrollDelayRef.current = window.setTimeout(() => setShowScrollSolution(true), 650);
        } else {
          setShowScrollSolution(false);
        }
      },
      {
        rootMargin: '-35% 0px -25% 0px',
        threshold: 0.2
      }
    );

    observer.observe(imageNode);
    return () => {
      if (scrollDelayRef.current) {
        window.clearTimeout(scrollDelayRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="cyan" icon={<AlertCircle className="w-3 h-3" />}>El problema de los bidones</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight">El problema no es solo comprar agua.<br /> Es gestionarla.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Los bidones ocupan espacio, requieren pedidos constantes, implican recambios y pueden faltar justo cuando más se necesitan.
            </p>
            <div className="space-y-4">
              {[
                'Pedidos recurrentes y coordinación manual',
                'Espacio ocupado por envases y stock de reserva',
                'Manipulación y traslado de bidones pesados',
                'Faltantes e interrupciones cuando más se necesita',
                'Una dinámica poco práctica para espacios de trabajo'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-400/20 shrink-0 mt-2"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div ref={imageRef} className="group relative">
            <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
              <img
                src="/images/section_problema/problema-bidones-acumulados.jpg"
                className={`absolute inset-0 w-full h-full object-cover grayscale transition-[opacity,filter,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:opacity-20 lg:group-hover:grayscale-0 lg:group-hover:scale-[1.02] ${
                  showScrollSolution ? 'opacity-20 grayscale-0' : 'opacity-80'
                }`}
                alt="Bidones de agua acumulados en un espacio de trabajo"
              />
              <img
                src="/images/section_problema/2.png"
                className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:opacity-0 lg:scale-[1.03] lg:group-hover:opacity-100 lg:group-hover:scale-100 ${
                  showScrollSolution ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                }`}
                alt="Dispenser AquaMaría instalado en una oficina"
                loading="lazy"
              />
            </div>
            <div className="relative mt-4 glass-light p-6 rounded-3xl shadow-xl border border-slate-200 lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:max-w-xs lg:p-8">
              <p className="text-slate-900 font-bold italic">
                Con <span className={`transition-colors duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:text-cyan-600 ${showScrollSolution ? 'text-cyan-600' : 'text-slate-900'}`}>AquaMaría</span>, el agua deja de gestionarse con bidones y queda disponible desde la red.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
