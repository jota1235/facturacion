export default function PorQueEscogernos() {
  return (
    <section className="bg-slate-50 text-slate-900 py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-600 mb-6 leading-tight">
            ¿Por qué elegir nuestra plataforma de facturación electrónica?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg">
            💡 Optimiza tu contabilidad y enfócate en hacer crecer tu negocio. Nuestra solución CFDI en línea está diseñada para brindarte velocidad, compatibilidad y control total.
          </p>

          <ul className="space-y-6 text-slate-800 text-left">
            <li>
              <h3 className="text-sky-600 font-semibold text-lg sm:text-xl">
                🚀 Carga masiva de catálogos
              </h3>
              <p className="text-slate-600 text-base">
                Ahorra tiempo cargando productos y clientes de forma automática. Ideal para empresas con gran volumen de datos.
              </p>
            </li>
            <li>
              <h3 className="text-sky-600 font-semibold text-lg sm:text-xl">
                📱 Compatible con todos tus dispositivos
              </h3>
              <p className="text-slate-600 text-base">
                Accede desde donde quieras: computadora, tablet o smartphone. Tu facturación siempre disponible.
              </p>
            </li>
            <li>
              <h3 className="text-sky-600 font-semibold text-lg sm:text-xl">
                ⚙️ Timbrado masivo en segundos
              </h3>
              <p className="text-slate-600 text-base">
                Genera miles de facturas simultáneamente usando archivos Excel, CSV o Texto plano. Ideal para grandes empresas.
              </p>
            </li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/elijenos.png"
            alt="Factura Electrónica"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg ring-1 ring-slate-200 rounded-xl bg-white"
          />
        </div>
      </div>
    </section>
  );
}
