import React from 'react';
import { CalendarClock, Settings, Droplets, Wrench, ShieldCheck, CheckCircle2, RefreshCw, MapPin } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const RentalIncludes = () => {
  const items = [
    { title: 'Equipo conectado a red', icon: <Droplets /> },
    { title: 'Instalación con pago único', icon: <Settings /> },
    { title: 'Servicio mensual claro', icon: <CalendarClock /> },
    { title: 'Mantenimiento incluido', icon: <ShieldCheck /> },
    { title: 'Recambio anual de filtro', icon: <RefreshCw /> },
    { title: 'Soporte técnico 24 hs', icon: <Wrench /> },
    { title: 'Sin logística de bidones', icon: <CheckCircle2 /> },
    { title: 'Cobertura CABA/GBA', icon: <MapPin /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan">Qué incluye</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight">El servicio mensual de AquaMaria</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">Un servicio claro y confiable para que tu espacio tenga agua purificada todos los días, con mantenimiento incluido y sin depender de pedidos, recambios o stock de bidones.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors">
              <div className="text-cyan-600 shrink-0">
                {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' } as any)}
              </div>
              <span className="font-bold text-slate-800 text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
