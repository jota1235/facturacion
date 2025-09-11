import { Briefcase, CreditCard, Clock, Headset } from 'lucide-react';

const beneficios = [
  {
    icon: (
      <Briefcase className="
        w-12 h-12 xl:w-14 xl:h-14
        [@media(min-width:1600px)]:w-16 [@media(min-width:1600px)]:h-16
        [@media(min-width:1920px)]:w-18 [@media(min-width:1920px)]:h-18
        text-[#4B007D]
      " />
    ),
    title: '+50,000',
    subtitle: 'Empresas nos avalan',
    text: 'El respaldo de miles de empresas confirma nuestra efectividad y fiabilidad.',
    bgColor: 'bg-[#CCD1F5]',
  },
  {
    icon: (
      <CreditCard className="
        w-12 h-12 xl:w-14 xl:h-14
        [@media(min-width:1600px)]:w-16 [@media(min-width:1600px)]:h-16
        [@media(min-width:1920px)]:w-18 [@media(min-width:1920px)]:h-18
        text-[#5B6FCF]
      " />
    ),
    title: '+80%',
    subtitle: 'Eficiencia en el cobro',
    text: 'Aumenta hasta un 80% la eficiencia en el cobro de tus facturas.',
    bgColor: 'bg-[#B88ACF]/30',
  },
  {
    icon: (
      <Clock className="
        w-12 h-12 xl:w-14 xl:h-14
        [@media(min-width:1600px)]:w-16 [@media(min-width:1600px)]:h-16
        [@media(min-width:1920px)]:w-18 [@media(min-width:1920px)]:h-18
        text-[#B88ACF]
      " />
    ),
    title: '+40 horas',
    subtitle: 'Tiempo ahorrado al mes',
    text: 'Automatiza procesos y ahorra más de 40 horas de trabajo al mes.',
    bgColor: 'bg-[#CCD1F5]',
  },
  {
    icon: (
      <Headset className="
        w-12 h-12 xl:w-14 xl:h-14
        [@media(min-width:1600px)]:w-16 [@media(min-width:1600px)]:h-16
        [@media(min-width:1920px)]:w-18 [@media(min-width:1920px)]:h-18
        text-[#4B007D]
      " />
    ),
    title: '+100%',
    subtitle: 'Soporte rápido y gratuito',
    text: 'Recibe atención personalizada, rápida y sin costo adicional.',
    bgColor: 'bg-[#5B6FCF]/20',
  },
];

export default function Beneficios() {
  return (
    <section
      className="
        w-full bg-white
        py-16 sm:py-20 xl:py-24
        px-[clamp(1rem,4vw,3rem)]
        [@media(min-width:1920px)]:py-28
        [@media(min-width:2560px)]:py-32
      "
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Contenedor central con bordes y escalado */}
      <div
        className="
          mx-auto w-full
          max-w-[min(95rem,88%)]     /* compacto en 100% */
          [@media(min-width:1600px)]:max-w-[100rem]
          [@media(min-width:1920px)]:max-w-[110rem]
          [@media(min-width:2560px)]:max-w-[130rem]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 xl:gap-12 [@media(min-width:1920px)]:gap-16">
          {beneficios.map((item, i) => (
            <div
              key={i}
              className="
                h-full rounded-2xl bg-white
                p-6 sm:p-8 xl:p-10
                [@media(min-width:1600px)]:p-12
                [@media(min-width:1920px)]:p-14
                [@media(min-width:2560px)]:p-16
                shadow-lg transition-transform duration-500 hover:scale-[1.02]
                flex flex-col justify-between
                min-h-[16rem] md:min-h-[18rem] xl:min-h-[20rem]
                [@media(min-width:1600px)]:min-h-[21rem]
                [@media(min-width:1920px)]:min-h-[22rem]
                [@media(min-width:2560px)]:min-h-[24rem]
              "
              style={{ boxShadow: '0 10px 30px rgba(91, 111, 207, 0.18)' }}
            >
              {/* Icono */}
              <div className="w-20 h-20 xl:w-24 xl:h-24 [@media(min-width:1600px)]:w-26 [@media(min-width:1600px)]:h-26 [@media(min-width:1920px)]:w-28 [@media(min-width:1920px)]:h-28 mx-auto flex items-center justify-center rounded-full mb-6 xl:mb-8 select-none">
                <div className={`w-full h-full flex items-center justify-center rounded-full ${item.bgColor}`}>
                  {item.icon}
                </div>
              </div>

              {/* Texto */}
              <div className="mx-auto text-center max-w-[52ch]">
                <h3
                  className="
                    text-[#4B007D] font-extrabold leading-tight
                    text-[clamp(1.8rem,2.4vw,2.75rem)]          /* base */
                    [@media(min-width:1600px)]:text-[clamp(2rem,2.2vw,3rem)] 
                    [@media(min-width:1920px)]:text-[3.2rem]
                    [@media(min-width:2560px)]:text-[3.6rem]
                  "
                >
                  {item.title}
                </h3>
                <h4
                  className="
                    text-[#5B6FCF] font-semibold mt-1 mb-3
                    text-[clamp(1rem,1.2vw,1.25rem)]             /* base */
                    [@media(min-width:1600px)]:text-[1.3rem]
                    [@media(min-width:1920px)]:text-[1.5rem]
                    [@media(min-width:2560px)]:text-[1.7rem]
                  "
                >
                  {item.subtitle}
                </h4>
                <p
                  className="
                    text-[#4B007D]/80
                    text-[clamp(0.95rem,1.05vw,1.1rem)]          /* base */
                    [@media(min-width:1600px)]:text-[1.15rem]
                    [@media(min-width:1920px)]:text-[1.3rem]
                    [@media(min-width:2560px)]:text-[1.45rem]
                  "
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
