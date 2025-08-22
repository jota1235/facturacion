import React from 'react';
import Navbar from './navbarform';

const PruebaGratis = () => {
  return (
    <>
      <Navbar />

      <section
        className="w-full grid md:grid-cols-2 min-h-screen pt-24"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Lado izquierdo */}
        <div
          className="flex flex-col items-center justify-start px-6 py-12 space-y-8"
          style={{ backgroundColor: '#DDE3F6' }}
        >
          <div className="max-w-md text-center md:text-left space-y-6">
            <h2 className="text-4xl font-extrabold text-blue-700 leading-tight">
              Solicita tu prueba gratuita
            </h2>
            <p className="text-gray-700 text-lg">
              Accede gratis durante 15 días a nuestro sistema de facturación electrónica.
            </p>
            <p className="text-gray-500">
              Explora todas las funcionalidades: emisión de CFDIs, timbrado masivo, reportes fiscales y mucho más.
            </p>
          </div>

          {/* Imagen */}
          <div className="mt-8 w-full flex justify-center">
            <img
              src="/formulario.png"
              alt="Demo del sistema"
              className="w-[200px] sm:w-[220px] md:w-[240px] rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Lado derecho */}
        <div
          className="flex items-center justify-center p-8"
          style={{ backgroundColor: '#BFA5D6' }}
        >
          <form className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-blue-700">
              Regístrate para comenzar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo del representante"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico corporativo"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Teléfono de contacto"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Razón social"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="RFC (opcional)"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Giro de la empresa"
                className="p-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Cantidad aproximada de facturas/mes</option>
              <option value="1-50">1 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201-1000">201 - 1000</option>
              <option value="1000+">Más de 1000</option>
            </select>

            <textarea
              placeholder="¿Qué tipo de facturación necesitas? (CFDI, Nómina, Honorarios, etc.)"
              className="w-full p-3 h-28 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-start gap-3 text-sm">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                />
                <span className="ml-3 text-gray-700">
                  Acepto los{' '}
                  <a
                    href="#"
                    className="text-blue-600 font-medium underline hover:text-blue-500 transition"
                  >
                    términos y condiciones
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-500 transition"
            >
              Iniciar prueba gratuita de 15 días
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PruebaGratis;
