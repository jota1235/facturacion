import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contacto"
      className="w-full py-16 px-6 bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-5xl font-extrabold"
            style={{ color: "#4B007D" }}
          >
            Regístrate y recibe más información
          </h2>
          <p className="mt-3 text-slate-700">
            Déjanos tus datos y te contactamos para cotización o prueba gratuita.
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div
          className="relative rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-slate-200"
          style={{
            boxShadow:
              "0 10px 35px rgba(91,111,207,.18), 0 2px 10px rgba(15,23,42,.06)",
          }}
        >
          {/* acentos suaves */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#F2EEFF] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-[#EEF0FF] blur-2xl" />

          {/* Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-50 text-slate-700 px-3 py-1 text-sm font-medium ring-1 ring-slate-200">
              Respuesta en &lt; 24h
            </span>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
              style={{
                background: "#EEF0FF",
                color: "#4B007D",
                border: "1px solid #E1E5FF",
              }}
            >
              Soporte sin costo
            </span>
          </div>

          {/* Formulario */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
              />
            </div>

            {/* Tipo de solicitud */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Tipo de solicitud
              </label>
              <select
                required
                className="w-full appearance-none rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
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
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
              />
            </div>

            {/* Términos */}
            <div className="col-span-1 md:col-span-2 flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-5 w-5 rounded border-slate-300 text-[#5B6FCF] focus:ring-[#5B6FCF]"
              />
              <label htmlFor="terms" className="text-sm text-slate-600">
                Acepto los{" "}
                <a
                  href="#"
                  className="font-medium underline"
                  style={{ color: "#5B6FCF" }}
                >
                  términos y condiciones
                </a>{" "}
                y el{" "}
                <a
                  href="#"
                  className="font-medium underline"
                  style={{ color: "#5B6FCF" }}
                >
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
                    "linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)",
                  boxShadow:
                    "0 12px 25px rgba(91,111,207,.35), inset 0 1px 0 rgba(255,255,255,.2)",
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
