import { useEffect, useState } from 'react';
import logoEmpresa from '/navbar.png'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all
        ${scrolled ? 'bg-white/90 shadow-md' : 'bg-white/70'}
        backdrop-blur-md border-b border-slate-200 text-slate-800`}
    >
      <div
        className="max-w-7xl mx-auto px-6 py-4 lg:py-5 flex justify-between items-center
                   xl:max-w-[95rem] 2xl:max-w-[110rem]
                   [@media(min-width:1920px)]:max-w-[130rem]
                   [@media(min-width:2560px)]:max-w-[150rem]
                   [@media(min-width:1920px)]:px-20 [@media(min-width:2560px)]:px-28
                   [@media(min-width:1920px)]:py-6 [@media(min-width:2560px)]:py-8"
      >
        {/* Logo empresa */}
        <a href="#inicio" className="flex items-center">
          <img
            src={logoEmpresa}
            alt="Logo Empresa"
            className="h-12 w-auto object-contain
                       xl:h-16 2xl:h-20
                       [@media(min-width:1920px)]:h-24
                       [@media(min-width:2560px)]:h-28"
          />
        </a>

        {/* Botón móvil */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="p-3 rounded-lg ring-1 ring-slate-300 hover:bg-slate-100 transition"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <svg
              className="w-7 h-7 [@media(min-width:1920px)]:w-9 [@media(min-width:1920px)]:h-9
                         [@media(min-width:2560px)]:w-10 [@media(min-width:2560px)]:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desktop */}
        <div className="hidden lg:flex items-center gap-10 [@media(min-width:1920px)]:gap-14 [@media(min-width:2560px)]:gap-20">
          <a
            href="/"
            className="ml-3 bg-gradient-to-r from-[#4B007D] to-[#5B6FCF] text-white font-semibold
                       px-6 py-3 text-lg rounded-xl shadow hover:opacity-95 active:opacity-90
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B6FCF] focus-visible:ring-offset-2
                       xl:text-xl 2xl:text-2xl
                       xl:px-8 xl:py-3.5 2xl:px-10 2xl:py-4
                       [@media(min-width:1920px)]:text-[1.6rem]
                       [@media(min-width:2560px)]:text-[1.8rem]
                       [@media(min-width:1920px)]:px-12 [@media(min-width:2560px)]:px-14
                       [@media(min-width:1920px)]:py-5 [@media(min-width:2560px)]:py-6"
          >
            Regresa al principal
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden px-6 pt-2 pb-5 border-t border-slate-200
                    bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 overflow-hidden
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <a
          href="/"
          className="mt-5 inline-block w-full text-center bg-gradient-to-r from-[#4B007D] to-[#5B6FCF]
                     text-white font-semibold px-6 py-3 text-lg rounded-xl shadow hover:opacity-95
                     [@media(min-width:1920px)]:text-xl [@media(min-width:2560px)]:text-2xl
                     [@media(min-width:1920px)]:py-4 [@media(min-width:2560px)]:py-5"
        >
          Regresa al principal
        </a>
      </div>
    </nav>
  );
}
