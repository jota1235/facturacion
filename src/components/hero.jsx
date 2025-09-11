import AuroraMotionSyServ from './AuroraMotion';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative isolate
        w-full min-h-screen
        overflow-hidden
        bg-slate-50 text-slate-800 font-sans transition-colors scroll-mt-28
        flex items-center
        pt-20 sm:pt-24 lg:pt-28
        pb-10 sm:pb-14 lg:pb-16
      "
    >
      {/* Aurora de fondo */}
      <div className="absolute inset-0 -z-10">
        <AuroraMotionSyServ />
      </div>

      {/* Contenedor central con márgenes */}
      <div
        className="
          mx-auto w-full
          px-[clamp(1rem,5vw,4rem)]
          max-w-[min(110rem,92%)]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* Texto */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <h1
              className="
                font-extrabold leading-[1.15] text-[#4B007D]
                text-[clamp(2rem,3.5vw,3.5rem)]   /* piso mínimo subido */
                max-w-xl lg:max-w-2xl
              "
            >
              Software de Facturación y Administración <br className="hidden lg:block" /> 
              para pymes y emprendedores
            </h1>

            <p
              className="
                mt-5 text-[clamp(1rem,2vw,1.3rem)] text-gray-700  /* piso mínimo subido */
                animate-in fade-in slide-in-from-bottom duration-700 delay-300
                max-w-lg lg:max-w-xl
              "
            >
              <span className="font-semibold text-gray-900">
                💳 Transforma tu facturación electrónica: rápida, segura y lista para el futuro.
              </span>{' '}
              Emite facturas electrónicas fácilmente y optimiza la administración de tu negocio con el SAT.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <button
                className="
                  border border-[#4B007D] text-[#4B007D]
                  hover:bg-[#4B007D] hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B007D] focus-visible:ring-offset-2
                  bg-white font-bold py-3 px-6 rounded-md transition shadow-sm
                  text-[clamp(1rem,1.2vw,1.1rem)]  /* piso mínimo subido */
                "
              >
                Solicita tu prueba gratis
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <img
              src="/render_hero.png"
              alt="Vista del sistema"
              className="
                w-full h-auto object-contain
                rounded-2xl shadow-lg ring-1 ring-black/5 bg-white
                max-w-[clamp(18rem,36vw,40rem)]   /* piso mínimo subido */
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
