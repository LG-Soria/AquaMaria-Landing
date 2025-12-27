
import React from 'react';
import { Zap, Settings, Droplets, Wrench, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const RentalIncludes = () => {
  const items = [
    { title: "Equipo Frío/Calor", icon: <Zap /> },
    { title: "Instalación Profesional", icon: <Settings /> },
    { title: "Filtros Incluidos", icon: <Droplets /> },
    { title: "Soporte Técnico", icon: <Wrench /> },
    { title: "Mantenimiento Preventivo", icon: <ShieldCheck /> },
    { title: "Garantía Total", icon: <CheckCircle2 /> },
    { title: "Reemplazo Periódico", icon: <RefreshCw /> },
    { title: "Gestión Simple", icon: <CheckCircle2 /> }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan">Servicio Integral</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight">Alquiler mensual sin costos ocultos</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Una solución clara, previsible y sin sorpresas para que la empresa no tenga que preocuparse por nada.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors">
              <div className="text-cyan-600 shrink-0">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" } as any)}
              </div>
              <span className="font-bold text-slate-800 text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
