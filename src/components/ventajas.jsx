import React from 'react';

const Ventajas = () => {
  return (
    <section
      className="bg-slate-50 text-gray-900 py-24 px-6 md:px-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#5C6BCF] text-center mb-16"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Ventajas de elegir FacturaFacil como tu solución CFDI
        </h2>

        <div className="relative">
          {/* Números de fondo */}
          <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between text-slate-300 text-4xl font-semibold opacity-20 px-6 md:px-16 pointer-events-none z-0">
            <span>— 01</span>
            <span>02 —</span>
            <span>03 —</span>
          </div>

          {/* Tarjetas */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:overflow-visible">

            {/* Ventaja 1 – Morado fuerte */}
            <div
              className="min-w-[90%] md:min-w-0 snap-center bg-white p-8 rounded-2xl z-10 border transition-transform duration-300 hover:scale-[1.03] scale-95 mx-auto md:scale-100"
              style={{
                borderColor: '#4A1E73',
                boxShadow:
                  '8px 12px 28px rgba(74,30,115,0.35), -8px -12px 24px rgba(203,210,244,0.55)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <h3
                className="text-xl font-semibold flex items-center gap-2 mb-3"
                style={{ color: '#4A1E73' }}
              >
                <span style={{ color: '#5C6BCF' }}>✔️</span> Automatización total en facturación
              </h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                Optimiza tu operación con emisión rápida, precisa y segura de facturas electrónicas.
                <br />
                Incluye todos los complementos: <strong>Carta Porte, Comercio Exterior, IEDU, Detallista</strong> y más.
              </p>
            </div>

            {/* Ventaja 2 – Lila fuerte */}
            <div
              className="min-w-[90%] md:min-w-0 snap-center bg-white p-8 rounded-2xl z-10 border transition-transform duration-300 hover:scale-[1.03] scale-95 mx-auto md:scale-100"
              style={{
                borderColor: '#B678BC',
                boxShadow:
                  '8px 12px 28px rgba(182,120,188,0.35), -8px -12px 24px rgba(203,210,244,0.55)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <h3
                className="text-xl font-semibold flex items-center gap-2 mb-3"
                style={{ color: '#B678BC' }}
              >
                <span style={{ color: '#5C6BCF' }}>✔️</span> Control fiscal inteligente
              </h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                ¿Pagas dividendos o realizas operaciones con extranjeros? Cumple fácilmente con el SAT
                generando CFDIs de retención con todas las reglas vigentes.
              </p>
            </div>

            {/* Ventaja 3 – Azul fuerte */}
            <div
              className="min-w-[90%] md:min-w-0 snap-center bg-white p-8 rounded-2xl z-10 border transition-transform duration-300 hover:scale-[1.03] scale-95 mx-auto md:scale-100"
              style={{
                borderColor: '#5C6BCF',
                boxShadow:
                  '8px 12px 28px rgba(92,107,207,0.35), -8px -12px 24px rgba(203,210,244,0.55)',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              <h3
                className="text-xl font-semibold flex items-center gap-2 mb-3"
                style={{ color: '#5C6BCF' }}
              >
                <span style={{ color: '#5C6BCF' }}>✔️</span> Timbrado masivo sin límites
              </h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                Integra nuestro sistema con tu ERP o software externo. Timbra miles de CFDIs usando
                <strong> archivos Excel, CSV o nuestra REST API</strong>, sin fricciones ni límites.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
