import { useEffect, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const ProblemSection = () => {
  const [showMobileSolution, setShowMobileSolution] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1023px)');
    let intervalId: number | null = null;

    const stopMobileLoop = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const syncMobileLoop = () => {
      stopMobileLoop();

      if (!mobileQuery.matches) {
        setShowMobileSolution(false);
        return;
      }

      setShowMobileSolution(false);
      intervalId = window.setInterval(() => {
        setShowMobileSolution((current) => !current);
      }, 3200);
    };

    syncMobileLoop();
    mobileQuery.addEventListener('change', syncMobileLoop);

    return () => {
      stopMobileLoop();
      mobileQuery.removeEventListener('change', syncMobileLoop);
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
          <div className="group relative">
            <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
              <img
                src="/images/section_problema/problema-bidones-acumulados.jpg"
                width="1024"
                height="1024"
                className={`absolute inset-0 w-full h-full object-cover grayscale transition-[opacity,filter,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:opacity-20 lg:group-hover:grayscale-0 lg:group-hover:scale-[1.02] ${
                  showMobileSolution ? 'opacity-20 grayscale-0' : 'opacity-80'
                }`}
                alt="Bidones de agua acumulados en un espacio de trabajo"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/section_problema/2.png"
                width="1254"
                height="1254"
                className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:opacity-0 lg:scale-[1.03] lg:group-hover:opacity-100 lg:group-hover:scale-100 ${
                  showMobileSolution ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
                }`}
                alt="Dispenser AquaMaría instalado en una oficina"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative mt-4 glass-light p-6 rounded-3xl shadow-xl border border-slate-200 lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0 lg:max-w-xs lg:p-8">
              <p className="text-slate-900 font-bold italic">
                Con <span className={`transition-colors duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:text-cyan-600 ${showMobileSolution ? 'text-cyan-600' : 'text-slate-900'}`}>AquaMaría</span>, el agua deja de gestionarse con bidones y queda disponible desde la red.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
