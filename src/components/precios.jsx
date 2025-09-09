import React from "react";

export default function Precios() {
  return (
    <section
      id="precios"
      className="scroll-mt-24 w-full bg-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* contenedor: igual a 7xl, ensancha sólo en xl+/2xl */}
      <div className="mx-auto max-w-7xl xl:max-w-[95rem] 2xl:max-w-[110rem]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium bg-[#4B007D]/10 text-[#4B007D] ring-1 ring-[#4B007D]/15">
            Planes para cada necesidad
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight xl:[font-size:clamp(2.5rem,3vw,3.25rem)]"
            style={{ color: "#4B007D" }}
          >
            Precios transparentes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base xl:[font-size:clamp(1rem,1.1vw,1.125rem)]">
            Elige el plan ideal. Puedes cambiarlo cuando quieras.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-10 sm:mt-12
            grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 xl:gap-10
            sm:max-w-md sm:mx-auto
            md:max-w-4xl md:grid-cols-2
            lg:max-w-none lg:grid-cols-3
          "
        >
          {/* Básico */}
          <div className="relative flex flex-col rounded-xl bg-white p-6 sm:p-8 xl:p-10 shadow-sm hover:shadow-md transition min-h-[26rem] xl:min-h-[28rem]">
            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#5B6FCF]/10 text-[#5B6FCF] ring-1 ring-[#5B6FCF]/20">
              Básico
            </div>
            <div className="flex items-end gap-2">
              <p className="text-3xl sm:text-4xl xl:[font-size:clamp(2.25rem,2.6vw,2.75rem)] font-extrabold" style={{ color: "#5B6FCF" }}>
                $199
              </p>
              <span className="text-slate-500 mb-1 text-sm">/ mes</span>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Ideal para iniciar con CFDI 4.0.
            </p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base">
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
              className="mt-8 w-full rounded-xl py-3.5 xl:py-4 font-semibold text-white shadow-md transition hover:-translate-y-[1px]"
              style={{
                background: "linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)",
                boxShadow: "0 10px 22px rgba(91,111,207,.28), inset 0 1px 0 rgba(255,255,255,.2)",
              }}
            >
              Elegir Básico
            </button>
          </div>

          {/* Pro (destacado) */}
          <div className="relative flex flex-col rounded-xl bg-white p-6 sm:p-8 xl:p-10 shadow-md hover:shadow-lg transition border border-[#5B6FCF]/30 min-h-[26rem] xl:min-h-[28rem]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[#4B007D] text-white text-xs font-semibold px-3 py-1 shadow">
              Más popular
            </span>

            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#4B007D]/10 text-[#4B007D] ring-1 ring-[#4B007D]/20">
              Pro
            </div>
            <div className="flex items-end gap-2">
              <p className="text-3xl sm:text-4xl xl:[font-size:clamp(2.25rem,2.6vw,2.9rem)] font-extrabold" style={{ color: "#5B6FCF" }}>
                $499
              </p>
              <span className="text-slate-500 mb-1 text-sm">/ mes</span>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Para pymes con crecimiento.</p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base">
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
                className="mt-8 w-full rounded-xl py-3.5 xl:py-4 font-semibold text-white transition hover:-translate-y-[1px]"
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
          <div className="relative flex flex-col rounded-xl bg-white p-6 sm:p-8 xl:p-10 shadow-sm hover:shadow-md transition min-h-[26rem] xl:min-h-[28rem]">
            <div className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#5B6FCF]/10 text-[#5B6FCF] ring-1 ring-[#5B6FCF]/20">
              Empresarial
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:[font-size:clamp(2rem,2.2vw,2.5rem)] font-extrabold" style={{ color: "#5B6FCF" }}>
                A medida
              </p>
            </div>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Soluciones de alto volumen y personalización.</p>

            <ul role="list" className="mt-6 space-y-3 text-sm sm:text-base">
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
              className="mt-auto inline-flex w-full items-center justify-center rounded-xl py-3.5 xl:py-4 font-semibold text-white transition hover:-translate-y-[1px]"
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
        <p className="mt-8 sm:mt-10 text-center text-xs sm:text-sm text-slate-500 xl:[font-size:clamp(0.8rem,0.9vw,0.95rem)]">
          Precios en MXN. Descuentos por pago anual disponibles. *Timbres adicionales con costo preferencial.
        </p>
      </div>
    </section>
  );
}
