export default function PorQueEscogernos() {
  return (
    <section
      className="bg-slate-50 text-slate-900 py-20 px-4 md:px-16"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Desktop normal = max-w-7xl; en xl/2xl ensancha */}
      <div className="mx-auto max-w-7xl xl:max-w-[95rem] 2xl:max-w-[110rem]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-stretch gap-12 xl:gap-16">
          
          {/* Texto */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2
              className="
                text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B6FCF] mb-6 leading-tight
                xl:[font-size:clamp(2.25rem,3vw,3.25rem)]
              "
            >
              ¿Por qué elegir nuestra plataforma de facturación electrónica?
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg xl:[font-size:clamp(1.05rem,1.15vw,1.2rem)]">
              💡 Optimiza tu contabilidad y enfócate en hacer crecer tu negocio.
              Nuestra solución CFDI en línea está diseñada para brindarte velocidad, compatibilidad y control total.
            </p>

            <ul className="space-y-6 text-slate-800 text-left">
              <li>
                <h3 className="text-[#5B6FCF] font-semibold text-lg sm:text-xl xl:[font-size:clamp(1.15rem,1.3vw,1.4rem)]">
                  🚀 Carga masiva de catálogos
                </h3>
                <p className="text-slate-600 text-base xl:[font-size:clamp(1rem,1.1vw,1.125rem)]">
                  Ahorra tiempo cargando productos y clientes de forma automática. Ideal para empresas con gran volumen de datos.
                </p>
              </li>
              <li>
                <h3 className="text-[#5B6FCF] font-semibold text-lg sm:text-xl xl:[font-size:clamp(1.15rem,1.3vw,1.4rem)]">
                  📱 Compatible con todos tus dispositivos
                </h3>
                <p className="text-slate-600 text-base xl:[font-size:clamp(1rem,1.1vw,1.125rem)]">
                  Accede desde donde quieras: computadora, tablet o smartphone. Tu facturación siempre disponible.
                </p>
              </li>
              <li>
                <h3 className="text-[#5B6FCF] font-semibold text-lg sm:text-xl xl:[font-size:clamp(1.15rem,1.3vw,1.4rem)]">
                  ⚙️ Timbrado masivo en segundos
                </h3>
                <p className="text-slate-600 text-base xl:[font-size:clamp(1rem,1.1vw,1.125rem)]">
                  Genera miles de facturas simultáneamente usando archivos Excel, CSV o Texto plano. Ideal para grandes empresas.
                </p>
              </li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center">
            <div
              className="
                w-full rounded-xl bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[40rem] 2xl:max-w-[46rem]
                md:min-h-[22rem] xl:min-h-[26rem] 2xl:min-h-[30rem]
              "
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
