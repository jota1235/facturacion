import { Cloud, Code, Headphones, Ruler, Settings, FileSpreadsheet, DollarSign, Star } from 'lucide-react';






const caracteristicas = [
  { icon: <Cloud className="w-10 h-10 text-[#5B2C83]" />, title: 'Sistemas en la nube', text: 'Ingresa desde cualquier dispositivo, usa el servicio de facturación electrónica 24/7.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <Code className="w-10 h-10 text-[#6C63FF]" />, title: 'API Facturación Electrónica', text: 'La API más avanzada, intégrala en apps, páginas web o software fácilmente.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <Headphones className="w-10 h-10 text-[#9575CD]" />, title: 'Soporte gratis', text: 'Contáctanos por teléfono, chat, WhatsApp, Messenger, Anydesk, etc.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <Ruler className="w-10 h-10 text-[#7E57C2]" />, title: 'Desarrollo a medida', text: 'Si necesitas una personalización, contáctanos y te daremos una solución.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <Settings className="w-10 h-10 text-[#5B2C83]" />, title: 'Personaliza', text: 'Configura tu cuenta, reportes, logotipos, direcciones, plantillas personalizadas.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <FileSpreadsheet className="w-10 h-10 text-[#6C63FF]" />, title: 'Migra información', text: 'Carga tus datos fácilmente desde Excel, CSV o TXT en un clic.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <DollarSign className="w-10 h-10 text-[#9575CD]" />, title: 'Precios flexibles', text: 'Solicita nuestra lista de precios adaptada a tus necesidades.', bgColor: 'bg-[#EDE7F6]' },
  { icon: <Star className="w-10 h-10 text-[#7E57C2]" />, title: 'Portal de Auto Factura', text: 'Conoce el mejor Portal de Auto Factura para que tus clientes facturen sus compras.', bgColor: 'bg-[#EDE7F6]' },
];

export default function Caracteristicas() {
  return (
    <section id="servicios"className="w-full py-16 px-6 bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003C57]">
          Características de nuestro software de facturación electrónica
        </h2>
        <p className="text-[#003C57] mt-2">
           Potencia el crecimiento de tu negocio con herramientas diseñadas para optimizar procesos, ahorrar tiempo y elevar tu productividad al siguiente nivel.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {caracteristicas.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${item.bgColor} mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#003C57]">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
