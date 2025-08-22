import { Briefcase, CreditCard, Clock, Headset } from 'lucide-react';

const beneficios = [
  {
    icon: <Briefcase className="w-12 h-12 text-[#4B007D]" />, // Morado oscuro
    title: '+50,000',
    subtitle: 'Empresas nos avalan',
    text: 'El respaldo de miles de empresas confirma nuestra efectividad y fiabilidad.',
    bgColor: 'bg-[#CCD1F5]', // Azul claro de fondo
  },
  {
    icon: <CreditCard className="w-12 h-12 text-[#5B6FCF]" />, // Azul fuerte
    title: '+80%',
    subtitle: 'Eficiencia en el cobro',
    text: 'Aumenta hasta un 80% la eficiencia en el cobro de tus facturas.',
    bgColor: 'bg-[#B88ACF]/30', // Morado medio muy suave
  },
  {
    icon: <Clock className="w-12 h-12 text-[#B88ACF]" />, // Morado medio
    title: '+40 horas',
    subtitle: 'Tiempo ahorrado al mes',
    text: 'Automatiza procesos y ahorra más de 40 horas de trabajo al mes.',
    bgColor: 'bg-[#CCD1F5]', // Azul claro
  },
  {
    icon: <Headset className="w-12 h-12 text-[#4B007D]" />, // Morado oscuro
    title: '+100%',
    subtitle: 'Soporte rápido y gratuito',
    text: 'Recibe atención personalizada, rápida y sin costo adicional.',
    bgColor: 'bg-[#5B6FCF]/20', // Azul fuerte pero más suave de fondo
  }
];

export default function Beneficios() {
  return (
    <section
      className="w-full bg-white py-20 px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {beneficios.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-8 bg-white shadow-lg hover:scale-[1.03] transition-transform duration-500"
            style={{
              boxShadow: '0 10px 30px rgba(91, 111, 207, 0.2)', // azul de la paleta
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            <div
              className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full ${item.bgColor} mb-6`}
            >
              {item.icon}
            </div>
            <h3 className="text-center text-[#4B007D] text-3xl font-bold">
              {item.title}
            </h3>
            <h4 className="text-center text-[#5B6FCF] text-lg font-semibold mb-3">
              {item.subtitle}
            </h4>
            <p className="text-center text-[#4B007D]/80 text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
