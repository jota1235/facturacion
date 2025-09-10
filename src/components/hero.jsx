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
        pt-24 sm:pt-28 lg:pt-32
      "
    >
      {/* Aurora de fondo */}
      <div className="absolute inset-0 -z-10">
        <AuroraMotionSyServ />
      </div>

      {/* Contenedor */}
      <div
        className="
          mx-auto w-full
          px-4 sm:px-6 lg:px-12
          max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem]
          [@media(min-width:1920px)]:max-w-[130rem]
          [@media(min-width:2560px)]:max-w-[150rem]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Texto */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                xl:[font-size:clamp(3.5rem,4.5vw,5rem)]
                [@media(min-width:1920px)]:text-[5.5rem]
                [@media(min-width:2560px)]:text-[6rem]
                font-extrabold leading-[1.1] text-[#4B007D]
                max-w-3xl
                [@media(min-width:1920px)]:max-w-5xl
                [@media(min-width:2560px)]:max-w-6xl
              "
            >
              Software de Facturación y Administración <br className="hidden lg:block" /> 
              para pymes y emprendedores
            </h1>

            <p
              className="
                mt-6 text-lg sm:text-xl md:text-2xl text-gray-700
                xl:[font-size:clamp(1.25rem,1.5vw,1.5rem)]
                [@media(min-width:1920px)]:text-[1.75rem]
                [@media(min-width:2560px)]:text-[2rem]
                animate-in fade-in slide-in-from-bottom duration-700 delay-300 max-w-2xl
                [@media(min-width:1920px)]:max-w-3xl
                [@media(min-width:2560px)]:max-w-4xl
              "
            >
              <span className="font-semibold text-gray-900">
                💳 Transforma tu facturación electrónica: rápida, segura y lista para el futuro.
              </span>{' '}
              Emite facturas electrónicas fácilmente y optimiza la administración de tu negocio con el SAT.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <button
                className="
                  border border-[#4B007D] text-[#4B007D]
                  hover:bg-[#4B007D] hover:text-white
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B007D] focus-visible:ring-offset-2
                  bg-white font-bold py-4 px-8 rounded-md transition text-lg shadow-sm
                  xl:[font-size:clamp(1.125rem,1.2vw,1.25rem)]
                  [@media(min-width:1920px)]:text-[1.4rem] [@media(min-width:2560px)]:text-[1.6rem]
                  [@media(min-width:1920px)]:px-10 [@media(min-width:2560px)]:px-12
                  [@media(min-width:1920px)]:py-5 [@media(min-width:2560px)]:py-6
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
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl
                xl:max-w-[46rem] 2xl:max-w-[52rem]
                [@media(min-width:1920px)]:max-w-[60rem]
                [@media(min-width:2560px)]:max-w-[70rem]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
