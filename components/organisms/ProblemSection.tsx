
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Badge } from '../atoms/Badge';

export const ProblemSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="cyan" icon={<AlertCircle className="w-3 h-3" />}>Desafío Operativo</Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-8 tracking-tight">¿Tu oficina sigue dependiendo de bidones de agua?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            En muchas empresas, el consumo de agua termina siendo un problema operativo más que consume tiempo, espacio y genera una imagen poco prolija.
          </p>
          <div className="space-y-4">
            {[
              "Bidones que hay que pedir, recibir y almacenar",
              "Manipulación constante y falta de higiene",
              "Espacio ocupado innecesariamente",
              "Falta de agua cuando más se necesita",
              "Una solución poco prolija para un entorno profesional"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-400/20"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
            <img
              src="/images/problema-bidones-acumulados.jpg"
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Bidones de agua acumulados"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-light p-8 rounded-3xl shadow-xl border border-slate-200 max-w-xs">
            <p className="text-slate-900 font-bold italic">"Todo esto genera una imagen que no representa a una empresa organizada."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
