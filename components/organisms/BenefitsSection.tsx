
import React from 'react';
import { Zap, ShieldCheck, Building2, Droplets } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { FeatureCard } from '../molecules/FeatureCard';

export const BenefitsSection = () => {
  const benefits = [
    { title: "Ahorro operativo", desc: "Se elimina por completo la logística de pedidos y recepción de bidones.", icon: <Zap /> },
    { title: "Higiene y seguridad", desc: "Sin manipulación constante ni almacenamiento de envases pesados.", icon: <ShieldCheck /> },
    { title: "Imagen profesional", desc: "Un servicio estético y alineado con oficinas modernas y organizadas.", icon: <Building2 /> },
    { title: "Sustentabilidad", desc: "Reducción real del uso de plástico y huella de carbono logística.", icon: <Droplets /> }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge>Valor Real</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Más orden, menos gestión y mejor imagen</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => <FeatureCard key={i} {...b} />)}
        </div>
      </div>
    </section>
  );
};
