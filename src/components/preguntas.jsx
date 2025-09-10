import React, { useState } from 'react';

const BRAND = {
  purple: '#4A1E73',
  lilac:  '#B678BC',
  blue:   '#5C6BCF',
  glow:   '#CBD2F4',
};

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState(null);

  const preguntas = [
    {
      pregunta: '¿Cómo obtener una prueba gratuita de la plataforma de facturación electrónica?',
      respuesta:
        'Para obtener una prueba gratuita del servicio de facturación electrónica , simplemente completa el formulario de solicitud en nuestro sitio web o comunícate con nuestro equipo de ventas. Te proporcionaremos acceso completo a nuestra plataforma para que puedas evaluar todas sus funcionalidades.',
    },
    {
      pregunta: '¿Qué incluye la prueba gratuita del programa de facturación CFDI?',
      respuesta:
        'Incluye el acceso total a todas las funciones del sistema, soporte técnico limitado y un número de timbres para pruebas sin costo durante 15 dias.',
    },
    {
      pregunta: '¿Ofrecen soporte técnico y en qué horarios?',
      respuesta:
        'Sí, nuestro equipo de soporte está disponible de lunes a viernes de 9:00 am a 6:00 pm y sábados de 9:00 am a 2:00 pm.',
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="bg-slate-50 text-gray-900 py-24 px-4 md:px-16
                 [@media(min-width:1920px)]:py-28
                 [@media(min-width:2560px)]:py-32"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Contenedor */}
      <div
        className="mx-auto w-full max-w-7xl xl:max-w-[95rem] 2xl:max-w-[110rem]
                   [@media(min-width:1920px)]:max-w-[130rem]
                   [@media(min-width:2560px)]:max-w-[150rem]"
      >
        {/* Título */}
        <h2
          className="text-4xl md:text-5xl font-bold text-sky-600 text-center mb-16
                     [@media(min-width:1920px)]:text-[3.5rem]
                     [@media(min-width:2560px)]:text-[4rem]"
        >
          Preguntas Frecuentes
        </h2>

        {/* Bloque preguntas */}
        <div className="mx-auto max-w-5xl space-y-8 [@media(min-width:1920px)]:space-y-10">
          {preguntas.map((item, index) => {
            const isOpen = openIndex === index;
            const id = `faq-${index}`;
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300 border bg-white
                           [@media(min-width:1920px)]:rounded-3xl"
                style={{
                  borderColor: isOpen ? BRAND.purple : '#E2E8F0',
                  boxShadow: isOpen
                    ? `10px 14px 30px rgba(92,107,207,0.35), -10px -14px 26px ${BRAND.glow}`
                    : `8px 12px 24px rgba(92,107,207,0.22), -8px -12px 22px ${BRAND.glow}`,
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className="w-full text-left px-8 py-6 flex justify-between items-center
                             text-xl md:text-2xl font-semibold transition-colors duration-300
                             [@media(min-width:1920px)]:text-[1.75rem]
                             [@media(min-width:2560px)]:text-[2rem]
                             [@media(min-width:1920px)]:py-7 [@media(min-width:2560px)]:py-8
                             [@media(min-width:1920px)]:px-10 [@media(min-width:2560px)]:px-12"
                  style={{ color: isOpen ? BRAND.purple : BRAND.blue }}
                >
                  <span>{item.pregunta}</span>
                  <span className="text-3xl [@media(min-width:1920px)]:text-4xl [@media(min-width:2560px)]:text-5xl select-none">
                    {isOpen ? '▴' : '▾'}
                  </span>
                </button>

                <div
                  id={id}
                  className={`px-8 transition-all duration-500 overflow-hidden
                              text-base md:text-lg leading-relaxed
                              [@media(min-width:1920px)]:text-[1.25rem]
                              [@media(min-width:2560px)]:text-[1.4rem]
                              [@media(min-width:1920px)]:px-10 [@media(min-width:2560px)]:px-12
                              ${isOpen ? 'max-h-[400px] pb-6' : 'max-h-0 pb-0'}`}
                  style={{ color: '#111827' }}
                >
                  {item.respuesta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
