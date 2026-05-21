import { useEffect, useState } from 'react';
import { Sparkles, Building2, MapPin, Calendar, Headphones } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { WhatsAppIcon } from '../atoms/WhatsAppIcon';
import { WHATSAPP_PROPOSAL_URL } from '../../contact';

const ENABLE_HERO_IMAGE_ROTATION = true;
const HERO_IMAGE_ROTATION_INTERVAL_MS = 6000;
const HERO_IMAGE_ROTATION_LEAD_MS = 630;

const heroImageClassName =
  'absolute inset-0 w-full h-full object-cover object-[72%_center] scale-125 brightness-[0.62] contrast-[1.12] saturate-[1.05] md:object-center md:scale-100 md:brightness-100 md:contrast-100 md:saturate-100';

export const Hero = () => (
  <HeroContent />
);

const HeroContent = () => {
  const [showAlternativeImage, setShowAlternativeImage] = useState(false);

  useEffect(() => {
    if (!ENABLE_HERO_IMAGE_ROTATION) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let intervalId: number;

    const timeoutId = window.setTimeout(() => {
      setShowAlternativeImage((current) => !current);
      intervalId = window.setInterval(() => {
        setShowAlternativeImage((current) => !current);
      }, HERO_IMAGE_ROTATION_INTERVAL_MS);
    }, HERO_IMAGE_ROTATION_INTERVAL_MS - HERO_IMAGE_ROTATION_LEAD_MS);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {ENABLE_HERO_IMAGE_ROTATION ? (
          <>
            <img
              src="/images/Portadas/3.png"
              alt=""
              className={`${heroImageClassName} hero-bg-image-layer ${showAlternativeImage ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src="/images/Portadas/2.png"
              alt=""
              className={`${heroImageClassName} hero-bg-image-layer ${showAlternativeImage ? 'opacity-100' : 'opacity-0'}`}
            />
          </>
        ) : (
          <img
            src="/images/Portadas/3.png"
            alt=""
            className={heroImageClassName}
          />
        )}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-slate-950/25 md:hidden"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div className="max-w-4xl space-y-6 md:space-y-10">
        <div className="animate-in fade-in slide-in-from-top-4 duration-700">
          <Badge icon={<Sparkles className="w-3.5 h-3.5" />} variant="white">
            Servicio mensual con instalación, mantenimiento y soporte
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] md:leading-[1] tracking-tight">
          <span className="hero-heading-lock">
            <span className="hero-heading-main">Agua purificada</span>
            <span className="hero-heading-support pt-1">para empresas y comercios,</span>
          </span>
          <br />
          <span className="hero-rotating-phrase">
            <span className="invisible">sin complicaciones.</span>
            <span className="hero-rotating-phrase__item text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">sin bidones.</span>
            <span className="hero-rotating-phrase__item text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">sin complicaciones.</span>
          </span>
        </h1>

        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-2xl text-white font-semibold leading-tight max-w-[37rem]">
           Equipos conectados a red para que tu espacio de trabajo tenga agua disponible todos los días.
          </p>
          <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-[37rem] font-light">
        Instalación con pago único, mantenimiento incluido, recambio anual de filtro y soporte técnico 24 hs.
        
  </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
          <Button
            size="lg"
            className="gap-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-2xl shadow-green-500/20 py-4 md:py-5"
            onClick={() => window.open(WHATSAPP_PROPOSAL_URL, '_blank')}
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span className="leading-tight">Pedir propuesta para mi negocio</span>
          </Button>
          <Button
            variant="glass"
            size="lg"
            className="w-full sm:w-auto py-4 md:py-5"
            onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver cómo funciona
          </Button>
        </div>

        <div className="pt-8 md:pt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Calendar className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold">+10 años de experiencia</p>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold">+200 instalaciones </p>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold">Soporte técnico 24 hs</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-cyan-400 w-5 h-5 shrink-0" />
            <p className="text-slate-200 text-sm font-bold">CABA y Gran Buenos Aires</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
