import React from "react";

export default function Precios() {
  return (
    <section
      id="precios"
      className="scroll-mt-24 w-full bg-slate-50 
                 py-16 sm:py-20 lg:py-24 px-[clamp(1rem,4vw,3rem)]
                 [@media(min-width:1920px)]:py-28
                 [@media(min-width:2560px)]:py-32"
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-[#4B007D]/10 text-[#4B007D] ring-1 ring-[#4B007D]/15">
            Planes para cada necesidad
          </span>
          <h2
            className="mt-4 font-extrabold leading-tight
                       text-[clamp(2rem,3vw,3.25rem)]
                       [@media(min-width:1600px)]:text-[3.2rem]
                       [@media(min-width:1920px)]:text-[3.5rem]
                       [@media(min-width:2560px)]:text-[4rem]"
            style={{ color: "#4B007D" }}
          >
            Precios transparentes
          </h2>
          <p
            className="mt-3 text-slate-600 
                       text-[clamp(0.95rem,1.1vw,1.125rem)]
                       [@media(min-width:1600px)]:text-[1.2rem]
                       [@media(min-width:1920px)]:text-[1.3rem]
                       [@media(min-width:2560px)]:text-[1.4rem]"
          >
            Elige el plan ideal. Puedes cambiarlo cuando quieras.
          </p>
        </div>

       
        <div
          className="mt-10 sm:mt-12
                     grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10
                     [@media(min-width:1920px)]:gap-12
                     sm:max-w-md sm:mx-auto
                     md:max-w-4xl md:grid-cols-2
                     lg:max-w-none lg:grid-cols-3"
        >
          {/* Básico */}
          <div
            className="relative flex flex-col rounded-2xl bg-white 
                       p-6 sm:p-8 xl:p-10
                       [@media(min-width:1920px)]:p-12 [@media(min-width:2560px)]:p-14
                       shadow-sm min-h-[26rem] xl:min-h-[28rem]
                       [@media(min-width:1920px)]:min-h-[30rem] [@media(min-width:2560px)]:min-h-[34rem]
                       transition-all duration-300 ease-out
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#5B6FCF]/10 text-[#5B6FCF] ring-1 ring-[#5B6FCF]/20">
              Básico
            </div>
            <div className="flex items-end gap-2">
              <p
                className="font-extrabold
                           text-[clamp(1.75rem,2.6vw,2.75rem)]
                           [@media(min-width:1920px)]:text-[3rem]
                           [@media(min-width:2560px)]:text-[3.25rem]"
                style={{ color: "#5B6FCF" }}
              >
                $199
              </p>
              <span className="text-slate-500 mb-1 text-sm">/ mes</span>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Ideal para iniciar con CFDI 4.0.</p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base [@media(min-width:1920px)]:text-lg">
              {[
                "50 timbres/mes incluidos",
                "Emisión de CFDI 4.0",
                "Reportes básicos",
                "1 usuario",
                "Soporte por email",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#5B6FCF]/10 ring-1 ring-[#5B6FCF]/25 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#5B6FCF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-8 w-full rounded-xl py-3.5 xl:py-4
                         [@media(min-width:1920px)]:py-5 [@media(min-width:2560px)]:py-6
                         font-semibold text-white shadow-md transition hover:-translate-y-1 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)",
                boxShadow: "0 10px 22px rgba(91,111,207,.28), inset 0 1px 0 rgba(255,255,255,.2)",
              }}
            >
              Elegir Básico
            </button>
          </div>

          {/* Pro */}
          <div
            className="relative flex flex-col rounded-2xl bg-white 
                       p-6 sm:p-8 xl:p-10
                       [@media(min-width:1920px)]:p-12 [@media(min-width:2560px)]:p-14
                       shadow-md border border-[#5B6FCF]/30
                       min-h-[26rem] xl:min-h-[28rem]
                       [@media(min-width:1920px)]:min-h-[30rem] [@media(min-width:2560px)]:min-h-[34rem]
                       transition-all duration-300 ease-out
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[#4B007D] text-white text-xs font-semibold px-3 py-1 shadow">
              Más popular
            </span>

            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#4B007D]/10 text-[#4B007D] ring-1 ring-[#4B007D]/20">
              Pro
            </div>
            <div className="flex items-end gap-2">
              <p
                className="font-extrabold
                           text-[clamp(2rem,2.6vw,2.9rem)]
                           [@media(min-width:1920px)]:text-[3.25rem]
                           [@media(min-width:2560px)]:text-[3.5rem]"
                style={{ color: "#5B6FCF" }}
              >
                $499
              </p>
              <span className="text-slate-500 mb-1 text-sm">/ mes</span>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Para pymes con crecimiento.</p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base [@media(min-width:1920px)]:text-lg">
              {[
                "300 timbres/mes incluidos",
                "CFDI 4.0 + Complementos comunes",
                "Reportes avanzados",
                "Hasta 5 usuarios",
                "API REST y timbrado masivo",
                "Soporte chat y email",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#4B007D]/10 ring-1 ring-[#4B007D]/25 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#4B007D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                className="mt-8 w-full rounded-xl py-3.5 xl:py-4
                           [@media(min-width:1920px)]:py-5 [@media(min-width:2560px)]:py-6
                           font-semibold text-white transition hover:-translate-y-1 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)",
                  boxShadow: "0 12px 25px rgba(91,111,207,.35), inset 0 1px 0 rgba(255,255,255,.2)",
                }}
              >
                Elegir Pro
              </button>
            </div>
          </div>

          {/* Empresarial */}
          <div
            className="relative flex flex-col rounded-2xl bg-white 
                       p-6 sm:p-8 xl:p-10
                       [@media(min-width:1920px)]:p-12 [@media(min-width:2560px)]:p-14
                       shadow-sm min-h-[26rem] xl:min-h-[28rem]
                       [@media(min-width:1920px)]:min-h-[30rem] [@media(min-width:2560px)]:min-h-[34rem]
                       transition-all duration-300 ease-out
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#5B6FCF]/10 text-[#5B6FCF] ring-1 ring-[#5B6FCF]/20">
              Empresarial
            </div>
            <div className="flex items-end gap-2">
              <p
                className="font-extrabold
                           text-[clamp(1.75rem,2.2vw,2.5rem)]
                           [@media(min-width:1920px)]:text-[2.75rem]
                           [@media(min-width:2560px)]:text-[3rem]"
                style={{ color: "#5B6FCF" }}
              >
                A medida
              </p>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Soluciones de alto volumen y personalización.</p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base [@media(min-width:1920px)]:text-lg">
              {[
                "Millones de timbres / año",
                "SLA y soporte dedicado",
                "Usuarios y sucursales ilimitados",
                "Integraciones personalizadas",
                "Portal de Auto Factura",
                "Onboarding y capacitación",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#5B6FCF]/10 ring-1 ring-[#5B6FCF]/25 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="#5B6FCF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="mt-auto inline-flex w-full items-center justify-center rounded-xl py-3.5 xl:py-4
                         [@media(min-width:1920px)]:py-5 [@media(min-width:2560px)]:py-6
                         font-semibold text-white transition hover:-translate-y-1 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)",
                boxShadow: "0 10px 22px rgba(91,111,207,.28), inset 0 1px 0 rgba(255,255,255,.2)",
              }}
            >
              Solicitar cotización
            </a>
          </div>
        </div>

        {/* Nota */}
        <p
          className="mt-8 sm:mt-10 text-center text-slate-500
                     text-[clamp(0.8rem,0.9vw,0.95rem)]
                     [@media(min-width:1920px)]:text-[1rem]
                     [@media(min-width:2560px)]:text-[1.1rem]"
        >
          Precios en MXN. Descuentos por pago anual disponibles. *Timbres adicionales con costo preferencial.
        </p>
      </div>
    </section>
  );
}
