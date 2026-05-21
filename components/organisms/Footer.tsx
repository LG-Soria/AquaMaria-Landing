import { Instagram, Phone, MapPin } from 'lucide-react';
import { Logo } from '../atoms/Logo';
import { WHATSAPP_PROPOSAL_URL } from '../../contact';

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'Servicio', href: '#servicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'FAQ', href: '#faq' }
];

const scrollToSection = (href: string) => {
  const target = document.getElementById(href.replace('#', ''));

  if (!target) return;

  const offset = 80;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};

export const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-4 space-y-8">
          <Logo isScrolled={true} />
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed">
            Soluciones mensuales de agua purificada para empresas, comercios y oficinas. También disponible para hogares compatibles con instalación a red.
          </p>
        </div>
        <div className="lg:col-span-3 space-y-8">
          <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em]">Contacto</h4>
          <div className="space-y-4">
             <a href={WHATSAPP_PROPOSAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-slate-600 hover:text-cyan-600 font-bold transition-colors">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p><span className="text-slate-900">WhatsApp:</span> 11 6553-2832</p>
             </a>
             <a href="https://instagram.com/aquamariared" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-slate-600 hover:text-cyan-600 font-bold transition-colors">
                <Instagram className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p><span className="text-slate-900">Instagram:</span> @aquamariared</p>
             </a>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em]">Navegación</h4>
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-slate-500 hover:text-cyan-600 font-bold text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="lg:col-span-3 space-y-8">
          <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.3em]">Zona de servicio</h4>
          <p className="text-slate-500 font-bold text-sm leading-relaxed flex gap-3">
            <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
            CABA y Gran Buenos Aires.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 gap-6 text-center md:text-left">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">© {currentYear} AquaMaría. Servicio mensual con instalación, mantenimiento y soporte.</p>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">+10 años acompañando empresas y comercios.</p>
      </div>
      <p className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
        Sitio desarrollado por Software Solutions
      </p>
    </div>
  </footer>
);
