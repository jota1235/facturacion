import AuroraMotionSyServ from './AuroraMotion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative isolate
        w-full overflow-x-hidden
        bg-slate-50 text-slate-800 font-sans transition-colors scroll-mt-28
        pt-28 lg:pt-32 min-h-screen
      "
    >
      {/* Aurora: sólo expándela en pantallas enormes */}
      <div className="absolute inset-0 -z-10">
        <div className="xl:2xl:-inset-[35%] 2xl:-inset-[40%] absolute inset-0">
          <AuroraMotionSyServ />
        </div>
      </div>

      {/* === Contenedor ===
          Normal: igual que antes (max-w-7xl).
          Ultra-wide: ensancha recién en xl/2xl. */}
      <div
        className="
          mx-auto w-full
          px-4 sm:px-6 lg:px-8
          max-w-7xl
          xl:max-w-[90rem] 2xl:max-w-[110rem]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* === Texto === */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            {/* Normal = tus tamaños anteriores; escalado extra sólo en xl+ */}
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                xl:[font-size:clamp(3.5rem,5vw,5rem)]
                font-extrabold leading-tight text-[#4B007D]
              "
            >
              Facturación<br />electrónica
            </h1>

            <p
              className="
                mt-6 text-lg sm:text-xl md:text-2xl text-gray-600
                xl:[font-size:clamp(1.125rem,1.25vw,1.375rem)]
                animate-in fade-in slide-in-from-bottom duration-700 delay-300
              "
            >
              <span className="font-semibold text-gray-900">
                💳 Transforma tu facturación electrónica: rápida, segura y lista para el futuro.
              </span>{' '}
              y <span className="font-semibold text-gray-900">olvídate de los problemas</span> con el SAT.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <button
                className="
                  border border-[#4B007D] text-[#4B007D]
                  hover:bg-[#4B007D] hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B007D] focus-visible:ring-offset-2
                  bg-white font-bold py-3 px-6 rounded-md transition text-lg shadow-sm
                  xl:[font-size:clamp(1rem,1.05vw,1.125rem)]
                "
              >
                No lo pienses más
              </button>
            </div>
          </div>

          {/* === Imagen === */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <img
              src="/render_hero.png"
              alt="Vista del sistema"
              className="
                w-full h-auto object-contain
                rounded-2xl shadow-lg ring-1 ring-black/5 bg-white
                /* Normal: tus límites anteriores */
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl
                /* Extra sólo en xl+ */
                xl:max-w-[46rem] 2xl:max-w-[52rem]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
