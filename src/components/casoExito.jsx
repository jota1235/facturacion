import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const casos = [
  { cliente: 'Edenred',
    texto:
      'En la emisión de facturas el sistema ha sido amigable y la plataforma es amigable, hasta el momento ha sido funcional. En cuanto al servicio, creo que ha sido muy bueno, funcional y óptimo. Siempre que se han hecho consultas técnicas han sido muy rápidas y fáciles.' },
  { cliente: 'Deloitte',
    texto:
      'Implementación rápida y sin fricciones. La operación diaria de facturación se mantuvo estable y con mejor visibilidad de reportes.' },
  { cliente: 'Elektra',
    texto:
      'El timbrado masivo nos permitió ahorrar tiempo y costos. El soporte fue oportuno durante todo el proceso.' },
  { cliente: 'Grupo TMM',
    texto:
      'La plataforma es robusta y sencilla. La integración con nuestros sistemas fue directa gracias a su API.' },
];

export default function CasosExito() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="w-full bg-white py-20 px-4 md:px-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Contenedor: igual a 6xl en desktop; más ancho sólo en xl+ */}
      <div className="mx-auto w-full max-w-6xl xl:max-w-[90rem] 2xl:max-w-[110rem]">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5B6FCF]
                         xl:[font-size:clamp(2.25rem,3vw,3.25rem)]">
            Nuestros casos de éxito
          </h2>
          <p className="mt-4 text-[#5B6FCF]/80 text-base md:text-lg
                        xl:[font-size:clamp(1.05rem,1.2vw,1.25rem)]">
            Orgullosos de poder mostrar los casos de éxito de nuestros clientes
          </p>
        </div>

        <div className="relative">
          {/* Flechas personalizadas (crecen en xl+) */}
          <button
            ref={prevRef}
            aria-label="Anterior"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       h-12 w-12 xl:h-14 xl:w-14 rounded-full border border-[#5B6FCF]/30 text-[#5B6FCF]
                       items-center justify-center hover:bg-[#CCD1F5] transition"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            aria-label="Siguiente"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       h-12 w-12 xl:h-14 xl:w-14 rounded-full border border-[#5B6FCF]/30 text-[#5B6FCF]
                       items-center justify-center hover:bg-[#CCD1F5] transition"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={32}
            breakpoints={{
              1280: { spaceBetween: 48 },   // xl
              1536: { spaceBetween: 64 },   // 2xl
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass:
                'swiper-pagination-bullet-active custom-bullet-active',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            className="!pb-12 xl:!pb-16"
          >
            {casos.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-4xl xl:max-w-[60rem] 2xl:max-w-[70rem] mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#5B6FCF] mb-6
                                 xl:[font-size:clamp(2rem,2.4vw,2.75rem)]">
                    {c.cliente}
                  </h3>
                  <p className="text-lg md:text-xl leading-8 text-slate-700
                                xl:[font-size:clamp(1.15rem,1.3vw,1.4rem)]
                                xl:leading-9">
                    {c.texto}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Estilos bullets: tamaño base igual; crece en xl+ */}
          <style>{`
            .custom-bullet {
              width: 14px;
              height: 14px;
              background: #D1D5DB;
              opacity: 1;
              margin: 0 6px !important;
              border-radius: 9999px;
              transition: transform .2s ease, background .2s ease;
            }
            .custom-bullet-active {
              background: #5B6FCF;
              transform: scale(1.1);
            }
            @media (min-width: 1280px) {
              .custom-bullet { width: 16px; height: 16px; margin: 0 8px !important; }
              .custom-bullet-active { transform: scale(1.15); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
