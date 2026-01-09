
import React from 'react';
import { Sparkles, MessageCircle, Building2, MapPin, Calendar } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1600"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-water-dispenser-filling-a-glass-14124-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-gradient"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div className="max-w-4xl space-y-6 md:space-y-10">
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <Badge icon={<Sparkles className="w-3.5 h-3.5" />} variant="white">
            Más de 10 años brindando servicio continuo
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] md:leading-[1] tracking-tight">
          Agua purificada ilimitada <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">sin bidones ni complicaciones.</span>
        </h1>

        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-2xl text-white font-semibold leading-tight max-w-2xl">
            Alquiler de dispensers de agua de red frío/calor para oficinas y equipos de trabajo.
          </p>
          <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
            En Aquamaría ayudamos a empresas a resolver de forma simple y profesional el consumo de agua diaria. Nuestros dispensers garantizan agua pura las 24 horas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
          <Button
            size="lg"
            className="gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-2xl shadow-green-500/20 py-4 md:py-5"
            onClick={() => window.open('https://wa.me/5491165532832?text=Hola!%20Vengo%20de%20la%20web%20y%20me%20gustar%C3%ADa%20asesorarme%20sobre%20un%20plan%20de%20dispensers.', '_blank')}
          >
            <MessageCircle className="w-5 h-5 fill-current" /> Consultar por WhatsApp
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="w-full sm:w-auto py-4 md:py-5"
            onClick={() => document.getElementById('equipos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Equipos
          </Button>
        </div>

        <div className="pt-8 md:pt-10 flex flex-wrap items-center gap-6 md:gap-16 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Calendar className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold whitespace-nowrap">+10 años de experiencia</p>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold whitespace-nowrap">+200 empresas activas</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold whitespace-nowrap">Zona Oeste GBA y CABA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
