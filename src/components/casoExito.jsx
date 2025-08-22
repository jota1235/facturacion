import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const casos = [
  {
    cliente: 'Edenred',
    texto:
      'En la emisión de facturas el sistema ha sido amigable y la plataforma es amigable, hasta el momento ha sido funcional. En cuanto al servicio, creo que ha sido muy bueno, funcional y óptimo. Siempre que se han hecho consultas técnicas han sido muy rápidas y fáciles.',
  },
  {
    cliente: 'Deloitte',
    texto:
      'Implementación rápida y sin fricciones. La operación diaria de facturación se mantuvo estable y con mejor visibilidad de reportes.',
  },
  {
    cliente: 'Elektra',
    texto:
      'El timbrado masivo nos permitió ahorrar tiempo y costos. El soporte fue oportuno durante todo el proceso.',
  },
  {
    cliente: 'Grupo TMM',
    texto:
      'La plataforma es robusta y sencilla. La integración con nuestros sistemas fue directa gracias a su API.',
  },
];

export default function CasosExito() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="w-full bg-white py-20 px-4 md:px-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5B6FCF]">
            Nuestros casos de éxito
          </h2>
          <p className="mt-4 text-[#5B6FCF]/80 text-base md:text-lg">
            Orgullosos de poder mostrar los casos de éxito de nuestros clientes
          </p>
        </div>

        <div className="relative">
          {/* Flechas personalizadas */}
          <button
            ref={prevRef}
            aria-label="Anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       h-12 w-12 rounded-full border border-[#5B6FCF]/30 text-[#5B6FCF]
                       items-center justify-center hover:bg-[#CCD1F5] transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            aria-label="Siguiente"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       h-12 w-12 rounded-full border border-[#5B6FCF]/30 text-[#5B6FCF]
                       items-center justify-center hover:bg-[#CCD1F5] transition"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={32}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            className="!pb-12"
          >
            {casos.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#5B6FCF] mb-6">
                    {c.cliente}
                  </h3>
                  <p className="text-lg md:text-xl leading-8 text-slate-700">
                    {c.texto}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Estilos bullets */}
          <style>{`
            .custom-bullet {
              width: 14px;
              height: 14px;
              background: #D1D5DB; /* gray-300 */
              opacity: 1;
              margin: 0 6px !important;
              border-radius: 9999px;
              transition: transform .2s ease, background .2s ease;
            }
            .custom-bullet-active {
              background: #5B6FCF; /* Azul de paleta */
              transform: scale(1.1);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
