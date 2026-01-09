
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicio', href: '#servicio' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      // Calculamos la posición del elemento menos el alto del header aproximado (80px)
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
    <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? 'glass-light py-2 md:py-3 shadow-sm border-b border-slate-200/50' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo isScrolled={scrolled || isOpen} />

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-slate-600 hover:text-cyan-600' : 'text-slate-200 hover:text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <Button variant="dark" size="md" className="gap-2" onClick={() => window.open('https://wa.me/5491165532832', '_blank')}>
              <MessageCircle className="w-4 h-4" /> 11 6553-2832
            </Button>
          </div>

          <button className={`md:hidden p-2 rounded-lg transition-colors ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil mejorado con fondo opaco y mejor contraste */}
      <div className={`md:hidden fixed inset-x-0 top-0 pt-20 pb-10 px-6 bg-white shadow-2xl transition-all duration-300 ease-in-out z-[-1] border-b border-slate-100 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
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
          <Button
            variant="dark"
            className="w-full py-5 text-lg flex gap-3"
            onClick={() => {
              setIsOpen(false);
              window.open('https://wa.me/5491165532832', '_blank');
            }}
          >
            <MessageCircle className="w-6 h-6" /> Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};
