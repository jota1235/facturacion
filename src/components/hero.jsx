import LogoCarousel from './carrusel';

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="
          px-4 sm:px-6 
          pt-28 lg:pt-32   /* 🔹 Espacio superior para que no lo tape el nav */
          w-full min-h-screen overflow-x-hidden
          bg-slate-50
          text-slate-800
          font-sans
          transition-colors
          scroll-mt-28    /* 🔹 Anclas ajustadas para que no se oculten */
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-extrabold leading-tight
                text-cyan-700
              "
            >
              Facturación<br />electrónica
            </h1>

            <p
              className="
                mt-6 text-lg sm:text-xl md:text-2xl
                text-gray-600
                animate-in fade-in slide-in-from-bottom duration-700 delay-300
              "
            >
              <span role="img" aria-label="wave">💳</span>{' '}
              <span className="font-semibold text-gray-900">
                Prueba el mejor sistema de facturación electrónica del 2025
              </span>{' '}
              y <span className="font-semibold text-gray-900">olvídate de los problemas</span> con el SAT.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
              <button
                className="
                  border border-cyan-500 text-cyan-700
                  hover:bg-cyan-500 hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2
                  bg-white
                  font-bold py-3 px-6 rounded-md transition text-lg
                  shadow-sm
                "
              >
                No lo pienses más
              </button>
              <button
                className="
                  border border-cyan-500 text-cyan-700
                  hover:bg-cyan-500 hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2
                  bg-white
                  font-bold py-3 px-6 rounded-md transition text-lg
                  shadow-sm
                "
              >
                Solicitar más información
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <img
              src="/principal.jpg"
              alt="Vista del sistema"
              className="
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl
                rounded-2xl shadow-lg object-contain h-auto
                ring-1 ring-black/5
                bg-white
              "
            />
          </div>
        </div>

        {/* Carrusel */}
        <div className="mt-16 flex justify-center max-w-full px-4">
          <LogoCarousel />
        </div>
      </section>

      {/* División decorativa */}
      <div className="w-full overflow-hidden leading-none text-black">
        <svg
          className="w-full h-10 block"
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,0 L1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </>
  );
}
