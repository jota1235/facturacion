import React from 'react';
import Navbar from './navbarform';

const PruebaGratis = () => {
  return (
    <>
      <Navbar />

      <section
  className="w-full min-h-screen 
             pt-32 sm:pt-36 md:pt-40 
             pb-16 px-6 bg-white
             [@media(min-width:1920px)]:pt-44 [@media(min-width:2560px)]:pt-52
             [@media(min-width:1920px)]:pb-20 [@media(min-width:2560px)]:pb-24"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>

        <div
          className="max-w-5xl mx-auto
                     [@media(min-width:1920px)]:max-w-6xl
                     [@media(min-width:2560px)]:max-w-7xl"
        >
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight
                         [@media(min-width:1920px)]:text-[3.5rem]
                         [@media(min-width:2560px)]:text-[4rem]"
              style={{ color: '#4B007D' }}
            >
              Solicita tu prueba gratuita
            </h2>
            <p
              className="mt-4 text-lg text-slate-700
                         [@media(min-width:1920px)]:text-xl
                         [@media(min-width:2560px)]:text-2xl"
            >
              Accede gratis durante 15 días a nuestro sistema de facturación electrónica.
            </p>
            <p
              className="mt-1 text-slate-500
                         [@media(min-width:1920px)]:text-lg
                         [@media(min-width:2560px)]:text-xl"
            >
              Explora emisión de CFDIs, timbrado masivo, reportes fiscales y más.
            </p>
          </div>

          {/* Formulario */}
          <div
            className="mt-12 relative rounded-2xl bg-white p-6 sm:p-8 md:p-10
                       [@media(min-width:1920px)]:p-12
                       [@media(min-width:2560px)]:p-16
                       border border-slate-200 shadow-xl max-w-3xl mx-auto
                       [@media(min-width:1920px)]:max-w-4xl
                       [@media(min-width:2560px)]:max-w-5xl"
            style={{
              boxShadow:
                '0 10px 35px rgba(91,111,207,.18), 0 2px 10px rgba(15,23,42,.06)',
            }}
          >
            {/* Etiquetas superiores */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center rounded-full bg-slate-50 text-slate-700
                           px-3 py-1 text-sm font-medium ring-1 ring-slate-200
                           [@media(min-width:1920px)]:text-base
                           [@media(min-width:2560px)]:text-lg"
              >
                Respuesta en &lt; 24h
              </span>
              <span
                className="inline-flex items-center rounded-full"
                style={{
                  background: '#EEF0FF',
                  color: '#4B007D',
                  border: '1px solid #E1E5FF',
                }}
              >
                <span
                  className="px-3 py-1 text-sm font-medium
                             [@media(min-width:1920px)]:text-base
                             [@media(min-width:2560px)]:text-lg"
                >
                  Soporte sin costo
                </span>
              </span>
            </div>

            <h3
              className="text-2xl font-bold text-center
                         [@media(min-width:1920px)]:text-3xl
                         [@media(min-width:2560px)]:text-4xl"
              style={{ color: '#5B6FCF' }}
            >
              Regístrate para comenzar
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias! Nos pondremos en contacto muy pronto.');
              }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4
                         [@media(min-width:1920px)]:gap-6
                         [@media(min-width:2560px)]:gap-8"
            >
              {/* Inputs */}
              <input
                type="text"
                placeholder="Nombre completo del representante"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico corporativo"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
                required
              />
              <input
                type="text"
                placeholder="Razón social"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
                required
              />
              <input
                type="text"
                placeholder="RFC (opcional)"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
              />
              <input
                type="text"
                placeholder="Giro de la empresa"
                className="p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none
                           focus:bg-white focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
              />

              <select
                className="md:col-span-2 w-full p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 outline-none focus:bg-white
                           focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5"
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
                className="md:col-span-2 w-full h-28 p-3 rounded-xl bg-slate-50 border border-slate-200
                           text-slate-900 placeholder-slate-400 outline-none focus:bg-white
                           focus:ring-2 focus:ring-[#5B6FCF] focus:border-[#5B6FCF] transition
                           [@media(min-width:1920px)]:p-4
                           [@media(min-width:2560px)]:p-5
                           [@media(min-width:1920px)]:h-32 [@media(min-width:2560px)]:h-36"
              />

              {/* Términos */}
              <div className="md:col-span-2 flex items-start gap-3 text-sm [@media(min-width:1920px)]:text-base [@media(min-width:2560px)]:text-lg">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-[#5B6FCF] focus:ring-[#5B6FCF]
                             [@media(min-width:1920px)]:h-6 [@media(min-width:1920px)]:w-6
                             [@media(min-width:2560px)]:h-7 [@media(min-width:2560px)]:w-7"
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

              {/* Botón */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl py-3.5 font-semibold text-white shadow-md transition transform hover:-translate-y-[1px]
                             [@media(min-width:1920px)]:py-4
                             [@media(min-width:2560px)]:py-5
                             [@media(min-width:1920px)]:text-lg
                             [@media(min-width:2560px)]:text-xl"
                  style={{
                    background: 'linear-gradient(90deg, #4B007D 0%, #5B6FCF 100%)',
                    boxShadow: '0 12px 25px rgba(91,111,207,.35), inset 0 1px 0 rgba(255,255,255,.2)',
                  }}
                >
                  Iniciar prueba gratuita de 15 días
                </button>
                <p
                  className="mt-4 text-center text-sm text-rose-500
                             [@media(min-width:1920px)]:text-base
                             [@media(min-width:2560px)]:text-lg"
                >
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
