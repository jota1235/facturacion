import { Cloud, Code, Headphones, Ruler, Settings, FileSpreadsheet, DollarSign, Star } from 'lucide-react';

const caracteristicas = [
  { icon: <Cloud className="w-10 h-10 text-[#5B2C83]" />, title: 'Sistemas en la nube', text: 'Ingresa desde cualquier dispositivo, usa el servicio de facturación electrónica 24/7.' },
  { icon: <Code className="w-10 h-10 text-[#6C63FF]" />, title: 'API Facturación Electrónica', text: 'La API más avanzada, intégrala en apps, páginas web o software fácilmente.' },
  { icon: <Headphones className="w-10 h-10 text-[#9575CD]" />, title: 'Soporte gratis', text: 'Contáctanos por teléfono, chat, WhatsApp, Messenger, Anydesk, etc.' },
  { icon: <Ruler className="w-10 h-10 text-[#7E57C2]" />, title: 'Desarrollo a medida', text: 'Si necesitas una personalización, contáctanos y te daremos una solución.' },
  { icon: <Settings className="w-10 h-10 text-[#5B2C83]" />, title: 'Personaliza', text: 'Configura tu cuenta, reportes, logotipos, direcciones, plantillas personalizadas.' },
  { icon: <FileSpreadsheet className="w-10 h-10 text-[#6C63FF]" />, title: 'Migra información', text: 'Carga tus datos fácilmente desde Excel, CSV o TXT en un clic.' },
  { icon: <DollarSign className="w-10 h-10 text-[#9575CD]" />, title: 'Precios flexibles', text: 'Solicita nuestra lista de precios adaptada a tus necesidades.' },
  { icon: <Star className="w-10 h-10 text-[#7E57C2]" />, title: 'Portal de Auto Factura', text: 'Conoce el mejor Portal de Auto Factura para que tus clientes facturen sus compras.' },
];

export default function Caracteristicas() {
  
  const imageSrc = "/render_caracteristicas.png";

  return (
    <section
      id="servicios"
      className="w-full py-20 px-6 bg-slate-50"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5B6FCF]">
            Características de nuestro software de facturación electrónica
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Potencia el crecimiento de tu negocio con herramientas diseñadas para optimizar procesos, ahorrar tiempo y elevar tu productividad al siguiente nivel.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 items-start">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caracteristicas.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#003C57]">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          
          <div className="relative">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Ilustración de características"
                className="w-full rounded-2xl shadow-md object-cover"
              />
            ) : (
              <div className="w-full aspect-[4/5] rounded-2xl border-2 border-dashed border-slate-300 bg-white/70 grid place-items-center shadow-sm">
                <div className="text-center px-6">
                  <p className="text-slate-500 font-medium">
                    Aquí irá una imagen bonita, un render o una foto
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    (recomendado 1200×1500 o mayor, PNG/JPG)
                  </p>
                </div>
              </div>
            )}

            {/* Sutileza decorativa */}
            <span className="pointer-events-none absolute -z-10 -top-6 -right-6 w-48 h-48 rounded-full blur-3xl opacity-30 bg-[#6C63FF]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
