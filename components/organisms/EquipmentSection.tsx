
import React from 'react';
import { Badge } from '../atoms/Badge';

export const EquipmentSection = () => (
  <section id="equipos" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <Badge variant="cyan">Catálogo Premium</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Opciones que se adaptan a cada espacio</h2>
        </div>
        <p className="text-slate-500 md:max-w-xs text-sm font-medium mt-4 md:mt-0">
          Te ayudamos a elegir la opción más adecuada según el uso, el espacio y la cantidad de personas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: "Dispenser de Pie", cat: "Oficinas y Empresas", img: "/images/dispenser-oficina-premium.jpg", pos: "object-right" },
          { title: "Dispenser de Mesada", cat: "Compacto Profesional", img: "/images/dispenser-mesada-cocina.jpg", pos: "object-[72%_20%]" },
          { title: "Filtros de Mesada", cat: "Hogares y Cocinas", img: "/images/purificador-humma-cocina.jpg", pos: "object-center" }
        ].map((item, i) => (
          <div key={i} className="group cursor-default">
            <div className="aspect-[3/4] rounded-[2.5rem] bg-slate-100 overflow-hidden mb-6 relative shadow-lg">
              <img src={item.img} className={`w-full h-full object-cover ${item.pos} group-hover:scale-110 transition-transform duration-700`} alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">{item.cat}</p>
                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
