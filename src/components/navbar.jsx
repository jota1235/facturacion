import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';   // 👈 Importar Link
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
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-5 flex justify-between items-center">
        
        {/* Logo empresa */}
        <Link to="/" className="flex items-center">
          <img
            src={logoEmpresa}
            alt="Logo Empresa"
            className="h-12 w-auto object-contain"
          />
        </Link>

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
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
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
              { to: '/#contacto', label: 'Contacto' },
            ].map((item) => (
              <li key={item.to} className="group">
                <Link
                  to={item.to}
                  className="relative text-slate-700 hover:text-cyan-700 transition focus-visible:outline-none"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-cyan-600 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/registro"
            className="ml-3 bg-gradient-to-r from-sky-400 to-emerald-400 text-white font-semibold
                       px-6 py-3 text-lg rounded-xl shadow hover:opacity-95 active:opacity-90
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            Solicita tu prueba gratuita
          </Link>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden px-6 pt-2 pb-5 border-t border-slate-200
                    bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 overflow-hidden
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="space-y-4 font-semibold text-lg">
          <li><Link to="/#inicio" className="block text-slate-700 hover:text-cyan-700 transition">Inicio</Link></li>
          <li><Link to="/#servicios" className="block text-slate-700 hover:text-cyan-700 transition">Servicios</Link></li>
          <li><Link to="/#precios" className="block text-slate-700 hover:text-cyan-700 transition">Precios</Link></li>
          <li><Link to="/#contacto" className="block text-slate-700 hover:text-cyan-700 transition">Contacto</Link></li>
        </ul>
        <Link
          to="/registro"
          className="mt-5 inline-block w-full text-center bg-gradient-to-r from-sky-400 to-emerald-400
                     text-white font-semibold px-6 py-3 text-lg rounded-xl shadow hover:opacity-95"
        >
          Solicita tu prueba gratuita
        </Link>
      </div>
    </nav>
  );
}
