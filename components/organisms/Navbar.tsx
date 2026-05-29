import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ButtonLink } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { WhatsAppIcon } from '../atoms/WhatsAppIcon';
import { WHATSAPP_PROPOSAL_URL } from '../../contact';
import { trackCtaClick, trackWhatsAppClick } from '../../tracking';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showLogoTag = !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicio', href: '#servicio' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    trackCtaClick({
      cta_location: 'navbar',
      cta_text: e.currentTarget.textContent || targetId,
      cta_type: 'navigation',
      destination: href,
    });

    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-[60] bg-transparent py-0">
      <div
        className={`mx-auto transition-[padding,max-width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showLogoTag
            ? 'max-w-none px-4 sm:px-6 lg:max-w-7xl lg:px-8'
            : 'max-w-none px-0 lg:max-w-7xl lg:px-8'
        }`}
      >
        <div
          className={`flex items-center justify-between overflow-hidden bg-white/95 backdrop-blur-md ring-1 ring-white/80 will-change-[width,border-radius,box-shadow,padding] transition-[width,border-radius,box-shadow,padding,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showLogoTag
              ? 'w-full rounded-b-2xl px-4 py-2 shadow-2xl shadow-cyan-950/25 sm:px-5 md:px-6 lg:w-[136px] lg:rounded-b-[1.75rem] lg:px-1 lg:pt-2 lg:pb-2'
              : 'w-full rounded-b-none border-b border-slate-200/50 px-4 py-2 shadow-sm md:px-6 md:py-3 lg:rounded-b-2xl'
          }`}
        >
          <div className="shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <Logo
              isScrolled={scrolled || isOpen}
              imageClassName={
                showLogoTag
                  ? 'h-14 w-12 p-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-16 md:w-44 md:p-0 lg:h-10 lg:w-32'
                  : 'h-14 w-12 p-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-16 md:w-44 md:p-0 lg:h-16 lg:w-48'
              }
            />
          </div>

          <div
            className={`hidden lg:flex items-center gap-10 transition-[opacity,transform] duration-500 ${
              showLogoTag ? 'pointer-events-none translate-x-6 opacity-0' : 'translate-x-0 opacity-100 delay-150'
            }`}
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-cyan-600"
              >
                {item.name}
              </a>
            ))}
            <ButtonLink
              href={WHATSAPP_PROPOSAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              size="md"
              className="gap-2"
              onClick={() =>
                trackWhatsAppClick({
                  cta_location: 'navbar_desktop',
                  cta_text: 'Pedir propuesta',
                })
              }
            >
              <WhatsAppIcon className="w-4 h-4" /> Pedir propuesta
            </ButtonLink>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute inset-x-0 top-full pb-10 px-6 bg-white shadow-2xl transition-all duration-300 ease-in-out border-b border-slate-100 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-bold text-xl text-slate-900 border-b border-slate-100 pb-3 hover:text-cyan-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <ButtonLink
            href={WHATSAPP_PROPOSAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="w-full py-5 text-lg flex gap-3"
            onClick={() => {
              setIsOpen(false);
              trackWhatsAppClick({
                cta_location: 'navbar_mobile',
                cta_text: 'Pedir propuesta por WhatsApp',
              });
            }}
          >
            <WhatsAppIcon className="w-6 h-6" /> Pedir propuesta por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
};

