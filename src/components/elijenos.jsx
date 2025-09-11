export default function PorQueEscogernos() {
  return (
    <section
      className="bg-slate-50 text-slate-900 
                 py-20 px-[clamp(1rem,4vw,3rem)]
                 [@media(min-width:1920px)]:py-24
                 [@media(min-width:2560px)]:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Contenedor */}
      <div
        className="mx-auto w-full
                   max-w-[min(95rem,88%)]
                   [@media(min-width:1600px)]:max-w-[100rem]
                   [@media(min-width:1920px)]:max-w-[110rem]
                   [@media(min-width:2560px)]:max-w-[130rem]"
      >
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-stretch gap-12 xl:gap-16 [@media(min-width:1920px)]:gap-20">
          
          {/* Texto */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2
              className="mb-6 font-bold leading-tight text-[#5B6FCF]
                         text-[clamp(2rem,3vw,3.25rem)]
                         [@media(min-width:1600px)]:text-[3.2rem]
                         [@media(min-width:1920px)]:text-[3.5rem]
                         [@media(min-width:2560px)]:text-[4rem]"
            >
              ¿Por qué elegir nuestra plataforma de facturación electrónica?
            </h2>

            <p
              className="mb-8 leading-relaxed text-slate-600
                         text-[clamp(1rem,1.15vw,1.2rem)]
                         [@media(min-width:1600px)]:text-[1.3rem]
                         [@media(min-width:1920px)]:text-[1.35rem]
                         [@media(min-width:2560px)]:text-[1.5rem]"
            >
              💡 Optimiza tu contabilidad y enfócate en hacer crecer tu negocio.
              Nuestra solución CFDI en línea está diseñada para brindarte velocidad, compatibilidad y control total.
            </p>

            <ul className="space-y-6 text-slate-800 text-left">
              <li>
                <h3
                  className="font-semibold text-[#5B6FCF]
                             text-[clamp(1.15rem,1.3vw,1.4rem)]
                             [@media(min-width:1600px)]:text-[1.5rem]
                             [@media(min-width:1920px)]:text-[1.6rem]
                             [@media(min-width:2560px)]:text-[1.8rem]"
                >
                  🚀 Carga masiva de catálogos
                </h3>
                <p
                  className="text-slate-600
                             text-[clamp(0.95rem,1.1vw,1.125rem)]
                             [@media(min-width:1600px)]:text-[1.15rem]
                             [@media(min-width:1920px)]:text-[1.25rem]
                             [@media(min-width:2560px)]:text-[1.4rem]"
                >
                  Ahorra tiempo cargando productos y clientes de forma automática. Ideal para empresas con gran volumen de datos.
                </p>
              </li>
              <li>
                <h3
                  className="font-semibold text-[#5B6FCF]
                             text-[clamp(1.15rem,1.3vw,1.4rem)]
                             [@media(min-width:1600px)]:text-[1.5rem]
                             [@media(min-width:1920px)]:text-[1.6rem]
                             [@media(min-width:2560px)]:text-[1.8rem]"
                >
                  📱 Compatible con todos tus dispositivos
                </h3>
                <p
                  className="text-slate-600
                             text-[clamp(0.95rem,1.1vw,1.125rem)]
                             [@media(min-width:1600px)]:text-[1.15rem]
                             [@media(min-width:1920px)]:text-[1.25rem]
                             [@media(min-width:2560px)]:text-[1.4rem]"
                >
                  Accede desde donde quieras: computadora, tablet o smartphone. Tu facturación siempre disponible.
                </p>
              </li>
              <li>
                <h3
                  className="font-semibold text-[#5B6FCF]
                             text-[clamp(1.15rem,1.3vw,1.4rem)]
                             [@media(min-width:1600px)]:text-[1.5rem]
                             [@media(min-width:1920px)]:text-[1.6rem]
                             [@media(min-width:2560px)]:text-[1.8rem]"
                >
                  ⚙️ Timbrado masivo en segundos
                </h3>
                <p
                  className="text-slate-600
                             text-[clamp(0.95rem,1.1vw,1.125rem)]
                             [@media(min-width:1600px)]:text-[1.15rem]
                             [@media(min-width:1920px)]:text-[1.25rem]
                             [@media(min-width:2560px)]:text-[1.4rem]"
                >
                  Genera miles de facturas simultáneamente usando archivos Excel, CSV o Texto plano. Ideal para grandes empresas.
                </p>
              </li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center">
            <div
              className="w-full rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden
                         max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[40rem] 2xl:max-w-[46rem]
                         [@media(min-width:1920px)]:max-w-[52rem]
                         [@media(min-width:2560px)]:max-w-[60rem]
                         md:min-h-[22rem] xl:min-h-[26rem] 2xl:min-h-[30rem]
                         [@media(min-width:1920px)]:min-h-[34rem]
                         [@media(min-width:2560px)]:min-h-[38rem]"
            >
              <img
                src="/beneficios2.png"
                alt="Factura Electrónica"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
