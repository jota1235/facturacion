import { Briefcase, CreditCard, Clock, Headset } from 'lucide-react';

const beneficios = [
  {
    icon: <Briefcase className="w-12 h-12 xl:w-14 xl:h-14 text-[#4B007D]" />,
    title: '+50,000',
    subtitle: 'Empresas nos avalan',
    text: 'El respaldo de miles de empresas confirma nuestra efectividad y fiabilidad.',
    bgColor: 'bg-[#CCD1F5]',
  },
  {
    icon: <CreditCard className="w-12 h-12 xl:w-14 xl:h-14 text-[#5B6FCF]" />,
    title: '+80%',
    subtitle: 'Eficiencia en el cobro',
    text: 'Aumenta hasta un 80% la eficiencia en el cobro de tus facturas.',
    bgColor: 'bg-[#B88ACF]/30',
  },
  {
    icon: <Clock className="w-12 h-12 xl:w-14 xl:h-14 text-[#B88ACF]" />,
    title: '+40 horas',
    subtitle: 'Tiempo ahorrado al mes',
    text: 'Automatiza procesos y ahorra más de 40 horas de trabajo al mes.',
    bgColor: 'bg-[#CCD1F5]',
  },
  {
    icon: <Headset className="w-12 h-12 xl:w-14 xl:h-14 text-[#4B007D]" />,
    title: '+100%',
    subtitle: 'Soporte rápido y gratuito',
    text: 'Recibe atención personalizada, rápida y sin costo adicional.',
    bgColor: 'bg-[#5B6FCF]/20',
  },
];

export default function Beneficios() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 xl:py-24 px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Contenedor: más ancho en XL/2XL, pero seguimos con 2 columnas */}
      <div className="mx-auto w-full px-0 max-w-7xl xl:max-w-[95rem] 2xl:max-w-[110rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 xl:gap-12">
          {beneficios.map((item, i) => (
            <div
              key={i}
              className="
                h-full rounded-2xl bg-white p-6 sm:p-8 xl:p-10
                shadow-lg transition-transform duration-500 hover:scale-[1.02]
                flex flex-col justify-between min-h-[16rem] md:min-h-[18rem] xl:min-h-[20rem]
              "
              style={{ boxShadow: '0 10px 30px rgba(91, 111, 207, 0.18)' }}
            >
              <div className="w-20 h-20 xl:w-24 xl:h-24 mx-auto flex items-center justify-center rounded-full mb-6 xl:mb-8 select-none">
                <div className={`w-full h-full flex items-center justify-center rounded-full ${item.bgColor}`}>{item.icon}</div>
              </div>

              <div className="mx-auto text-center max-w-[52ch]">
                <h3 className="text-[#4B007D] font-extrabold leading-tight
                                text-3xl sm:text-4xl xl:text-[clamp(2rem,2.4vw,2.75rem)]">
                  {item.title}
                </h3>
                <h4 className="text-[#5B6FCF] font-semibold mt-1 mb-3
                                text-base sm:text-lg xl:text-[clamp(1.05rem,1.2vw,1.25rem)]">
                  {item.subtitle}
                </h4>
                <p className="text-[#4B007D]/80
                              text-sm sm:text-base xl:text-[clamp(0.95rem,1.05vw,1.1rem)]">
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
