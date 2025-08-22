import React from 'react';

export default function Beneficios2() {
  return (
    <section className="bg-slate-50 text-slate-900 px-6 py-24 w-full overflow-x-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Columna izquierda con texto */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5B6FCF] mb-8 leading-tight">
            Tu sistema de facturación electrónica
          </h2>

          {/* Beneficio 1 */}
          <div className="mb-10">
            <p className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-slate-900">
              <span className="text-3xl text-[#5B6FCF]">✔</span> Factura en segundos, sin complicaciones
            </p>
            <p className="text-lg text-slate-600 mt-3">
              Olvídate de los procesos lentos. Con nuestra{' '}
              <strong className="text-slate-900">plataforma intuitiva</strong>, emitir tus CFDIs es tan fácil como dar un clic.
            </p>
            <p className="text-lg text-slate-600">
              Diseñado para cualquier tipo de negocio, sin curva de aprendizaje y con resultados inmediatos.
            </p>
          </div>

          {/* Línea divisoria */}
          <hr className="border-black mb-10" />

          {/* Beneficio 2 */}
          <div>
            <p className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-slate-900">
              <span className="text-3xl text-[#5B6FCF]">✔</span> Siempre disponible, sin interrupciones
            </p>
            <p className="text-lg text-slate-600 mt-3">
              Nuestro <strong className="text-slate-900">sistema de facturación</strong> está activo las 24 horas, los 7 días de la semana.
            </p>
            <p className="text-lg text-slate-600">
              Sin caídas, sin esperas. Tu negocio siempre puede facturar, incluso en fines de semana o días festivos.
            </p>
          </div>
        </div>

        {/* Columna derecha con imagen */}
        <div className="flex justify-center">
          <img
            src="/beneficios2.png"
            alt="Ilustración sistema de facturación"
            className="max-w-md lg:max-w-xl h-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* División inferior */}
      <div className="w-screen overflow-hidden leading-none text-black">
        <svg
          className="w-full h-10 block"
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M1440,40L0,20L0,0L1440,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
