import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-[#4B007D] text-white py-16 px-6 relative overflow-hidden
                 [@media(min-width:1920px)]:py-20
                 [@media(min-width:2560px)]:py-24"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4B007D] via-[#6C63FF]/30 to-[#9575CD]/30 opacity-95 -z-10" />

      {/* Contenedor */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12
                   xl:max-w-[95rem] 2xl:max-w-[110rem]
                   [@media(min-width:1920px)]:max-w-[130rem]
                   [@media(min-width:2560px)]:max-w-[150rem]
                   text-center md:text-left relative z-10
                   [@media(min-width:1920px)]:gap-16
                   [@media(min-width:2560px)]:gap-20"
      >
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <span
              className="text-2xl font-extrabold
                         [@media(min-width:1920px)]:text-3xl
                         [@media(min-width:2560px)]:text-4xl"
            >
              <span className="text-white">Factura</span>
              <span className="text-white">Fácil</span>
            </span>
          </div>
          <p
            className="text-white text-sm max-w-xs
                       [@media(min-width:1920px)]:text-base
                       [@media(min-width:2560px)]:text-lg"
          >
            Tu solución confiable para facturación electrónica moderna, rápida y sin complicaciones.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4
            className="text-white font-semibold text-lg
                       [@media(min-width:1920px)]:text-xl
                       [@media(min-width:2560px)]:text-2xl"
          >
            Enlaces útiles
          </h4>
          <a href="#inicio" className="hover:text-gray-200 transition">Inicio</a>
          <a href="#beneficios" className="hover:text-gray-200 transition">Beneficios</a>
          <a href="#ventajas" className="hover:text-gray-200 transition">Ventajas</a>
          <a href="#faq" className="hover:text-gray-200 transition">Preguntas frecuentes</a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4
            className="text-white font-semibold text-lg
                       [@media(min-width:1920px)]:text-xl
                       [@media(min-width:2560px)]:text-2xl"
          >
            Contacto
          </h4>
          <p
            className="text-white
                       [@media(min-width:1920px)]:text-lg
                       [@media(min-width:2560px)]:text-xl"
          >
            📧 soporte@facturafacil.com
          </p>
          <p
            className="text-white
                       [@media(min-width:1920px)]:text-lg
                       [@media(min-width:2560px)]:text-xl"
          >
            📞 +52 55 1234 5678
          </p>
          <p
            className="text-white text-sm pt-2
                       [@media(min-width:1920px)]:text-base
                       [@media(min-width:2560px)]:text-lg"
          >
            © {new Date().getFullYear()} FacturaFácil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
