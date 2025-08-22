import React from "react";

export default function ContactForm() {
  return (
    <section
      className="w-full py-16 px-6 bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-900">
            Regístrate y recibe más información
          </h2>
          <p className="mt-3 text-cyan-900/70">
            Déjanos tus datos y te contactamos para cotización o prueba gratuita.
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div
          className="relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-slate-200"
          style={{
            boxShadow:
              "0 10px 35px rgba(0, 170, 200, .18), 0 2px 10px rgba(15, 23, 42, .06)",
          }}
        >
          {/* adorno de fondo */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-50 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-sky-50 blur-2xl" />

          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-3 py-1 text-sm font-medium ring-1 ring-cyan-100">
              Respuesta en &lt; 24h
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-medium ring-1 ring-emerald-100">
              Soporte sin costo
            </span>
          </div>

          {/* Formulario */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: conecta con tu API / servicio de email
              alert("¡Gracias! Nos pondremos en contacto muy pronto.");
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Nombre */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Nombre completo"
                required
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="tucorreo@dominio.com"
                required
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Teléfono */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+52 222 123 4567"
                required
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Tipo de solicitud */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tipo de solicitud
              </label>
              <select
                required
                className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Facturación Electrónica</option>
                <option>Timbrado masivo</option>
                <option>Integración con API</option>
                <option>Precios y planes</option>
                <option>Otro</option>
              </select>
            </div>

            {/* Empresa */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre de la empresa
              </label>
              <input
                type="text"
                placeholder="Mi Empresa S.A. de C.V."
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Mensaje */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                ¿Qué necesitas?
              </label>
              <textarea
                rows={5}
                placeholder="Cuéntanos brevemente para orientarte mejor…"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Términos */}
            <div className="col-span-1 md:col-span-2 flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-slate-600">
                Acepto los{" "}
                <a href="#" className="text-blue-600 font-medium underline">
                  términos y condiciones
                </a>{" "}
                y el{" "}
                <a href="#" className="text-blue-600 font-medium underline">
                  aviso de privacidad
                </a>
                .
              </label>
            </div>

            {/* CTA */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl py-3.5 font-semibold text-white shadow-md transition transform hover:-translate-y-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, #38bdf8 0%, #06b6d4 50%, #22d3ee 100%)",
                  boxShadow:
                    "0 12px 25px rgba(6, 182, 212, .35), inset 0 1px 0 rgba(255,255,255,.2)",
                }}
              >
                Solicitar cotización o prueba gratuita de 5 días
              </button>

              <p className="mt-4 text-center text-sm text-rose-500">
                Deja un correo y teléfono válidos para cotización o envío de información.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
