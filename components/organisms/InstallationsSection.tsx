import { Badge } from '../atoms/Badge';

const installations = [
  { src: '/images/instalaciones/3.png', caption: 'Oficina', width: 1122, height: 1402, className: 'md:col-span-2 md:row-span-2', position: 'object-[68%_center]' },
  { src: '/images/instalaciones/1.png', caption: 'Espacio de trabajo', width: 1024, height: 1536, className: '', position: 'object-center' },
  { src: '/images/instalaciones/2.png', caption: 'Comercio', width: 1086, height: 1448, className: '', position: 'object-center' },
  { src: '/images/instalaciones/4.png', caption: 'Área común', width: 1448, height: 1086, className: 'md:col-span-2', position: 'object-[50%_75%]' }
];  

export const InstallationsSection = () => (
  <section className="py-16 md:py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
        <Badge variant="cyan">Instalaciones reales</Badge>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Instalaciones reales en empresas y comercios</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium mt-6 leading-relaxed">
         Fotos de equipos instalados en distintos espacios de trabajo, comercios y áreas comunes. Cada instalación se adapta al lugar, al consumo y al uso diario.
        </p>
      </div>

      <div className="grid auto-rows-[220px] md:grid-cols-4 md:auto-rows-[260px] gap-6">
        {installations.map((item) => (
          <figure key={item.src} className={`group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg ${item.className}`}>
            <img
              src={item.src}
              alt={`Instalación real AquaMaría en ${item.caption.toLowerCase()}`}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover ${item.position} group-hover:scale-105 transition-transform duration-700`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"></div>
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-800 backdrop-blur">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
