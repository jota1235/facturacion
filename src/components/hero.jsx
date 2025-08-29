import LogoCarousel from './carrusel';
import AuroraMotion from './AuroraMotion';
import AuroraMotionSyServ from './AuroraMotion';

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="
          relative isolate
          px-4 sm:px-6 
          pt-28 lg:pt-32
          w-full min-h-screen overflow-x-hidden
          bg-slate-50
          text-slate-800
          font-sans
          transition-colors
          scroll-mt-28
        "
      >
        {/* Fondo animado tipo Fresha */}
        <AuroraMotionSyServ />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Texto principal */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-extrabold leading-tight
                text-[#4B007D]
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
              {/* Botón 1 */}
              <button
                className="
                  border border-[#4B007D] text-[#4B007D]
                  hover:bg-[#4B007D] hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B007D] focus-visible:ring-offset-2
                  bg-white
                  font-bold py-3 px-6 rounded-md transition text-lg
                  shadow-sm
                "
              >
                No lo pienses más
              </button>

              {/* Botón 2 */}
              <button
                className="
                  border border-[#5B6FCF] text-[#5B6FCF]
                  hover:bg-[#5B6FCF] hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B6FCF] focus-visible:ring-offset-2
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
        <div className="mt-16 flex justify-center max-w-full px-4 relative z-10">
          <LogoCarousel />
        </div>
      </section>
    </>
  );
}
