import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { User } from "lucide-react"; 
import logoEmpresa from "/navbar.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Intersection Observer para detectar sección activa
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible = activa
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const go = () => setMenuOpen(false);

  const navItems = [
    { to: "/#inicio", id: "inicio", label: "Inicio" },
    { to: "/#servicios", id: "servicios", label: "Servicios" },
    { to: "/#precios", id: "precios", label: "Precios" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={[
          "relative transition-all",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md ring-1 ring-black/5"
            : "bg-transparent backdrop-blur-sm",
        ].join(" ")}
      >
        {/* Contenedor */}
        <div
          className={[
            "mx-auto flex justify-between items-center text-slate-800",
            "px-6 xl:px-10 2xl:px-16",
            "max-w-7xl xl:max-w-[95rem] 2xl:max-w-[120rem]",
            "[@media(min-width:1920px)]:max-w-[130rem]",
            "[@media(min-width:2560px)]:max-w-[150rem]",
            "[@media(min-width:1920px)]:px-20 [@media(min-width:2560px)]:px-28",
            scrolled
              ? "py-2 lg:py-3 xl:py-4 2xl:py-5 transition-all duration-300"
              : "py-4 lg:py-5 xl:py-6 2xl:py-8 transition-all duration-300",
          ].join(" ")}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoEmpresa}
              alt="Logo Empresa"
              className={[
                "w-auto object-contain transition-all duration-300",
                scrolled
                  ? "h-10 xl:h-12 2xl:h-14 [@media(min-width:1920px)]:h-16 [@media(min-width:2560px)]:h-20"
                  : "h-12 xl:h-16 2xl:h-20 [@media(min-width:1920px)]:h-24 [@media(min-width:2560px)]:h-28",
              ].join(" ")}
            />
          </Link>

          {/* Botón móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-3 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 ring-1 ring-slate-300 hover:bg-white/70 focus-visible:ring-[#5B6FCF]"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-14 2xl:gap-16">
            <ul className="flex items-center gap-8 xl:gap-12 2xl:gap-14 font-semibold">
              {navItems.map((item) => (
                <li key={item.to} className="group">
                  <HashLink
                    smooth
                    to={item.to}
                    className={`relative transition ${
                      activeSection === item.id
                        ? "text-[#4B007D]"
                        : "text-slate-700 hover:text-[#4B007D]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[3px] bg-[#5B6FCF] transition-all
                        ${
                          activeSection === item.id
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                    />
                  </HashLink>
                </li>
              ))}
            </ul>

            <Link
              to="/login"
              className="ml-2 p-3 rounded-xl border border-[#5B6FCF] text-[#5B6FCF]
                         hover:bg-[#5B6FCF]/10 transition"
            >
              <User className="w-6 h-6" />
            </Link>

            <Link
              to="/registro"
              className="ml-2 bg-gradient-to-r from-[#4B007D] to-[#5B6FCF] text-white font-semibold
                         px-6 py-3 rounded-xl shadow hover:opacity-95"
            >
              Solicita tu prueba gratuita
            </Link>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={[
            "lg:hidden px-6 pt-2 pb-5 border-t transition-[max-height,opacity] duration-300 overflow-hidden",
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <ul className="space-y-4 font-semibold text-lg">
            {navItems.map(({ to, label, id }) => (
              <li key={to} className="group">
                <HashLink
                  smooth
                  to={to}
                  onClick={go}
                  className={`relative block transition ${
                    activeSection === id
                      ? "text-[#4B007D]"
                      : "text-slate-700 hover:text-[#4B007D]"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-[#5B6FCF] transition-all
                      ${
                        activeSection === id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                  />
                </HashLink>
              </li>
            ))}
          </ul>

          <Link
            to="/login"
            onClick={go}
            className="mt-5 flex justify-center items-center gap-2 bg-white text-[#5B6FCF]
              font-semibold px-6 py-3 rounded-xl shadow-md border border-slate-200
              hover:bg-slate-50 active:bg-slate-100"
          >
            <User className="w-6 h-6" />
          </Link>

          <Link
            to="/registro"
            onClick={go}
            className="mt-3 inline-block w-full text-center bg-gradient-to-r from-[#4B007D] to-[#5B6FCF]
                       text-white font-semibold px-6 py-3 rounded-xl shadow hover:opacity-95"
          >
            Solicita tu prueba gratuita
          </Link>
        </div>
      </nav>
    </header>
  );
}
