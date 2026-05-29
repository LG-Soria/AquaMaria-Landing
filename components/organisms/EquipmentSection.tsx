import { Badge } from '../atoms/Badge';

export const EquipmentSection = () => (
  <section id="equipos" className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
        <div className="max-w-xl">
          <Badge variant="cyan">Opciones de equipos</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Según tu espacio, te recomendamos el equipo adecuado</h2>
        </div>
        <p className="text-slate-500 md:max-w-xs text-sm font-medium mt-4 md:mt-0">
          No todos los espacios necesitan lo mismo. Por eso evaluamos el consumo, la ubicación y el uso diario antes de recomendar una opción.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {[
          {
            title: 'Dispenser de pie',
            label: 'Espacios de trabajo y alto uso',
            desc: 'Una opción práctica para oficinas, empresas y espacios donde varias personas necesitan agua disponible durante el día.',
            img: '/images/equipos/Dispenser_de_pie.png',
            width: 1365,
            height: 2048,
            pos: 'object-[50%_55%]'

          },
          {
            title: 'Dispenser de mesada',
            label: 'Mesadas o espacios compactos',
            desc: 'Una alternativa para lugares con menos superficie disponible o puntos de consumo más puntuales.',
            img: '/images/equipos/dispenser_sobre_mesada.png',
            width: 887,
            height: 1774,
            pos: 'object-[55%_53%]'

          },
          {
            title: 'Filtro de mesada',
            label: 'Cocinas y puntos de uso específicos',
            desc: 'Una opción simple para espacios compatibles con instalación a red y consumo localizado.',
            img: '/images/equipos/Filtro_sobre_mesada.png',
            width: 1123,
            height: 1401,
            pos: 'object-center'
          }
        ].map((item, i) => (
          <div key={i} className="group cursor-default bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 transition-all overflow-hidden">
            <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
              <img
                src={item.img}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-700`}
                alt={`${item.title} para servicio mensual de agua purificada AquaMaría`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 md:p-7">
              <p className="text-cyan-600 font-black text-xs uppercase tracking-[0.18em] mb-4">{item.label}</p>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
