import React from 'react';
import Navbar from './navbarform';

const PruebaGratis = () => {
  return (
    <>
      <Navbar />

      <section
        className="w-full min-h-screen pt-24 pb-16 px-6 bg-white"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight"
                style={{ color: '#4B007D' }}>
              Solicita tu prueba gratuita
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Accede gratis durante 15 días a nuestro sistema de facturación electrónica.
            </p>
            <p className="mt-1 text-slate-500">
              Explora emisión de CFDIs, timbrado masivo, reportes fiscales y más.
            </p>

            {/* Imagen opcional */}
            <div className="mt-8 flex justify-center">
              <img
                src="/formulario.png"
                alt="Demo del sistema"
                className="w-[220px] md:w-[260px] rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Formulario */}
          <div
            className="mt-12 relative rounded-2xl bg-white p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto"
            style={{
              boxShadow:
                '0 10px 35px rgba(91,111,207,.18), 0 2px 10px rgba(15,23,42,.06)',
            }}
          >
            
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-slate-50 text-slate-700 px-3 py-1 text-sm font-medium ring-1 ring-slate-200">
                Respuesta en &lt; 24h
              </span>
              <span className="inline-flex items-center rounded-full"
                    style={{ background:'#EEF0FF', color:'#4B007D', border:'1px solid #E1E5FF' }}>
                <span className="px-3 py-1 text-sm font-medium">Soporte sin costo</span>
              </span>
            </div>

            <h3 className="text-2xl font-bold text-center" style={{ color:'#5B6FCF' }}>
              Regístrate para comenzar
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias! Nos pondremos en contacto muy pronto.');
              }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Nombre completo del representante"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico corporativo"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
                required
              />
              <input
                type="text"
                placeholder="Razón social"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
                required
              />
              <input
                type="text"
                placeholder="RFC (opcional)"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
              />
              <input
                type="text"
                placeholder="Giro de la empresa"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
              />

              <select
                className="md:col-span-2 w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
                required
                defaultValue=""
              >
                <option value="" disabled>Cantidad aproximada de facturas/mes</option>
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-1000">201 - 1000</option>
                <option value="1000+">Más de 1000</option>
              </select>

              <textarea
                placeholder="¿Qué tipo de facturación necesitas? (CFDI, Nómina, Honorarios, etc.)"
                className="md:col-span-2 w-full p-3 h-28 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition"
              />

              <div className="md:col-span-2 flex items-start gap-3 text-sm">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-[#5B6FCF] focus:ring-[#5B6FCF]"
                />
                <label htmlFor="terms" className="text-slate-600">
                  Acepto los{' '}
                  <a href="#" className="font-medium underline" style={{ color:'#5B6FCF' }}>
                    términos y condiciones
                  </a>{' '}
                  y el{' '}
                  <a href="#" className="font-medium underline" style={{ color:'#5B6FCF' }}>
                    aviso de privacidad
                  </a>.
                </label>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl py-3.5 font-semibold text-white shadow-md transition transform hover:-translate-y-[1px]"
                  style={{
                    background:
                      'linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)',
                    boxShadow:
                      '0 12px 25px rgba(91,111,207,.35), inset 0 1px 0 rgba(255,255,255,.2)',
                  }}
                >
                  Iniciar prueba gratuita de 15 días
                </button>
                <p className="mt-4 text-center text-sm text-rose-500">
                  Deja un correo y teléfono válidos para cotización o envío de información.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PruebaGratis;
