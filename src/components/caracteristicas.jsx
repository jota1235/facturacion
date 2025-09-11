import {
  Cloud,
  Code,
  Headphones,
  Ruler,
  Settings,
  FileSpreadsheet,
  DollarSign,
  Star,
} from "lucide-react";

const caracteristicas = [
  { icon: <Cloud className="w-10 h-10 text-[#5B2C83]" />, title: "Sistemas en la nube", text: "Ingresa desde cualquier dispositivo, usa el servicio de facturación electrónica 24/7." },
  { icon: <Code className="w-10 h-10 text-[#6C63FF]" />, title: "API Facturación Electrónica", text: "La API más avanzada, intégrala en apps, páginas web o software fácilmente." },
  { icon: <Headphones className="w-10 h-10 text-[#9575CD]" />, title: "Soporte gratis", text: "Contáctanos por teléfono, chat, WhatsApp, Messenger, Anydesk, etc." },
  { icon: <Ruler className="w-10 h-10 text-[#7E57C2]" />, title: "Desarrollo a medida", text: "Si necesitas una personalización, contáctanos y te daremos una solución." },
  { icon: <Settings className="w-10 h-10 text-[#5B2C83]" />, title: "Personaliza", text: "Configura tu cuenta, reportes, logotipos, direcciones, plantillas personalizadas." },
  { icon: <FileSpreadsheet className="w-10 h-10 text-[#6C63FF]" />, title: "Migra información", text: "Carga tus datos fácilmente desde Excel, CSV o TXT en un clic." },
  { icon: <DollarSign className="w-10 h-10 text-[#9575CD]" />, title: "Precios flexibles", text: "Solicita nuestra lista de precios adaptada a tus necesidades." },
  { icon: <Star className="w-10 h-10 text-[#7E57C2]" />, title: "Portal de Auto Factura", text: "Conoce el mejor Portal de Auto Factura para que tus clientes facturen sus compras." },
];

export default function Caracteristicas() {
  const imageSrc = "/render_caracteristicas.png";

  return (
    <section
      id="servicios"
      className="w-full bg-slate-50 py-20 px-[clamp(1rem,4vw,3rem)]
                 [@media(min-width:1920px)]:py-24
                 [@media(min-width:2560px)]:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className="mx-auto w-full
                   max-w-[min(95rem,88%)]
                   [@media(min-width:1600px)]:max-w-[100rem]
                   [@media(min-width:1920px)]:max-w-[110rem]
                   [@media(min-width:2560px)]:max-w-[130rem]"
      >
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-[#5B6FCF] text-[clamp(2rem,2.6vw,3rem)]
                         [@media(min-width:1600px)]:text-[3.2rem]
                         [@media(min-width:1920px)]:text-[3.4rem]
                         [@media(min-width:2560px)]:text-[3.8rem]">
            Características de nuestro software de facturación electrónica
          </h2>
          <p className="text-slate-600 mt-2 text-[clamp(1rem,1.15vw,1.25rem)]
                         [@media(min-width:1600px)]:text-[1.3rem]
                         [@media(min-width:1920px)]:text-[1.45rem]
                         [@media(min-width:2560px)]:text-[1.6rem]">
            Potencia el crecimiento de tu negocio con herramientas diseñadas para optimizar procesos, ahorrar tiempo y elevar tu productividad al siguiente nivel.
          </p>
        </div>

        {/* Grid Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1">
            {caracteristicas.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center
                           p-6 rounded-xl bg-white shadow-sm
                           transition-all duration-300 ease-out
                           hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                           hover:ring-2 hover:ring-transparent hover:bg-gradient-to-r hover:from-[#f8f5ff] hover:to-[#f0f4ff]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#003C57] text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Imagen + últimas características */}
          <div className="flex flex-col gap-6 order-2">
            <div className="flex justify-center">
              <img
                src={imageSrc}
                alt="Ilustración de características"
                className="rounded-2xl shadow-md object-cover w-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col gap-6">
              {caracteristicas.slice(6).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center
                             p-6 rounded-xl bg-white shadow-sm
                             transition-all duration-300 ease-out
                             hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                             hover:ring-2 hover:ring-transparent hover:bg-gradient-to-r hover:from-[#f8f5ff] hover:to-[#f0f4ff]"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-[#003C57] text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Versión móvil */}
        <div className="block lg:hidden">
          {/* Últimas características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {caracteristicas.slice(6).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center
                           p-6 rounded-xl bg-white shadow-sm
                           transition-all duration-300 ease-out
                           hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                           hover:ring-2 hover:ring-transparent hover:bg-gradient-to-r hover:from-[#f8f5ff] hover:to-[#f0f4ff]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#003C57] text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Primeras características */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {caracteristicas.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center
                           p-6 rounded-xl bg-white shadow-sm
                           transition-all duration-300 ease-out
                           hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                           hover:ring-2 hover:ring-transparent hover:bg-gradient-to-r hover:from-[#f8f5ff] hover:to-[#f0f4ff]"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#003C57] text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src={imageSrc}
              alt="Ilustración de características"
              className="rounded-2xl shadow-md object-cover w-72 sm:w-80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
