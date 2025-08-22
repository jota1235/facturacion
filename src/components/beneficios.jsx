import { Briefcase, CreditCard, Clock, Headset } from 'lucide-react';

const beneficios = [
  {
    icon: <Briefcase className="w-12 h-12 text-rose-500" />,
    title: '+50,000',
    subtitle: 'Empresas nos avalan',
    text: 'El respaldo de miles de empresas confirma nuestra efectividad y fiabilidad.',
    bgColor: 'bg-rose-100',
  },
  {
    icon: <CreditCard className="w-12 h-12 text-yellow-500" />,
    title: '+80%',
    subtitle: 'Eficiencia en el cobro',
    text: 'Aumenta hasta un 80% la eficiencia en el cobro de tus facturas.',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: <Clock className="w-12 h-12 text-green-500" />,
    title: '+40 horas',
    subtitle: 'Tiempo ahorrado al mes',
    text: 'Automatiza procesos y ahorra más de 40 horas de trabajo al mes.',
    bgColor: 'bg-green-100',
  },
  {
    icon: <Headset className="w-12 h-12 text-orange-500" />,
    title: '+100%',
    subtitle: 'Soporte rápido y gratuito',
    text: 'Recibe atención personalizada, rápida y sin costo adicional.',
    bgColor: 'bg-orange-100',
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
              boxShadow: '0 10px 30px rgba(0, 102, 255, 0.15)',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            <div
              className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full ${item.bgColor} mb-6`}
            >
              {item.icon}
            </div>
            <h3 className="text-center text-blue-700 text-3xl font-bold">
              {item.title}
            </h3>
            <h4 className="text-center text-blue-700 text-lg font-semibold mb-3">
              {item.subtitle}
            </h4>
            <p className="text-center text-blue-500 text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
