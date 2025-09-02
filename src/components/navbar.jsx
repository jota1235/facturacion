import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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

  const go = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* NAV WRAPPER: transparente arriba, glass al scrollear */}
      <nav
        className={[
          "relative transition-all",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md ring-1 ring-black/5"
            : "bg-transparent backdrop-blur-sm"
        ].join(' ')}
      >
        {/* Velo (opcional) para mezclar aún más con el fondo del hero */}
        {!scrolled && (
          <div
            className="
              pointer-events-none absolute inset-0 -z-10
              [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]
              bg-white/0
            "
            aria-hidden
          />
        )}

        <div className="max-w-7xl mx-auto px-6 py-4 lg:py-5 flex justify-between items-center text-slate-800">
          <Link to="/" className="flex items-center">
            <img src={logoEmpresa} alt="Logo Empresa" className="h-12 w-auto object-contain" />
          </Link>

          {/* Botón móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(v => !v)}
              className={[
                "p-3 rounded-lg transition focus-visible:outline-none focus-visible:ring-2",
                scrolled
                  ? "ring-1 ring-slate-300 hover:bg-white/70 focus-visible:ring-[#5B6FCF]"
                  : "ring-1 ring-white/60 hover:bg-white/20 focus-visible:ring-white/60"
              ].join(' ')}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-lg font-semibold">
              {[
                { to: '/#inicio', label: 'Inicio' },
                { to: '/#servicios', label: 'Servicios' },
                { to: '/#precios', label: 'Precios' },
                { to: '/#contacto', label: '' },
              ].map((item) => (
                <li key={item.to} className="group">
                  <HashLink
                    smooth
                    to={item.to}
                    className="relative text-slate-700 hover:text-[#4B007D] transition focus-visible:outline-none"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#5B6FCF] transition-all group-hover:w-full" />
                  </HashLink>
                </li>
              ))}
            </ul>

            <Link
              to="/registro"
              className="ml-3 bg-gradient-to-r from-[#4B007D] to-[#5B6FCF] text-white font-semibold
                         px-6 py-3 text-lg rounded-xl shadow hover:opacity-95 active:opacity-90
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B6FCF] focus-visible:ring-offset-2"
            >
              Solicita tu prueba gratuita
            </Link>
          </div>
        </div>

        {/* Menú móvil: usa glass si hay scroll; arriba del todo es casi transparente con blur */}
        <div
          id="mobile-menu"
          className={[
            "lg:hidden px-6 pt-2 pb-5 border-t transition-[max-height,opacity] duration-300 overflow-hidden",
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-slate-200"
              : "bg-white/40 backdrop-blur-lg border-white/30",
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          ].join(' ')}
        >
          <ul className="space-y-4 font-semibold text-lg">
            {[
              { to: "/#inicio", label: "Inicio" },
              { to: "/#servicios", label: "Servicios" },
              { to: "/#precios", label: "Precios" },
              { to: "/#contacto", label: "Contacto" },
            ].map(({to, label}) => (
              <li key={to} className="group">
                <HashLink
                  smooth to={to} onClick={go}
                  className="relative block text-slate-700 hover:text-[#4B007D] transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-[#5B6FCF] transition-all group-hover:w-full" />
                </HashLink>
              </li>
            ))}
          </ul>

          <Link
            to="/registro" onClick={go}
            className="mt-5 inline-block w-full text-center bg-gradient-to-r from-[#4B007D] to-[#5B6FCF]
                       text-white font-semibold px-6 py-3 text-lg rounded-xl shadow hover:opacity-95
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B6FCF]"
          >
            Solicita tu prueba gratuita
          </Link>
        </div>
      </nav>
    </header>
  );
}
