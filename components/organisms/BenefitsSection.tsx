import { Store, Building2, BriefcaseBusiness } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { FeatureCard } from '../molecules/FeatureCard';

export const BenefitsSection = () => {
  const audiences = [
    { title: 'Empresas', desc: 'Para equipos de trabajo que necesitan una solución estable, clara y continua durante toda la jornada.', icon: <BriefcaseBusiness /> },
    { title: 'Comercios', desc: 'Para locales, salas de espera y espacios de atención que quieren ofrecer agua de forma prolija y continua.', icon: <Store /> },
    { title: 'Oficinas', desc: 'Para espacios donde la presentación, la continuidad y la comodidad del equipo importan.', icon: <Building2 /> }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge>Para quién es</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">Pensado para empresas, comercios y oficinas</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-6">Cada espacio tiene una necesidad distinta. Evaluamos el lugar, el consumo y el uso diario para recomendar el equipo más adecuado.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((item, i) => <FeatureCard key={i} {...item} />)}
        </div>
        <p className="text-center text-sm text-slate-400 font-medium mt-8">
          También disponible para hogares compatibles con instalación a red.
        </p>
      </div>
    </section>
  );
};
