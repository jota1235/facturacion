import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4B007D] text-white py-16 px-6 relative overflow-hidden">
      {/* Degradado decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4B007D] via-[#6C63FF]/30 to-[#9575CD]/30 opacity-95 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-12 items-start text-center md:text-left relative z-10">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            {/* Aquí podrías poner el logo que me pasaste como <img src="/logo.png" ... /> */}
            <span className="text-2xl font-extrabold">
              <span className="text-[#6C63FF]">Factura</span>
              <span className="text-white">Fácil</span>
            </span>
          </div>
          <p className="text-gray-200 text-sm max-w-xs">
            Tu solución confiable para facturación electrónica moderna, rápida y sin complicaciones.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-[#6C63FF] font-semibold text-lg">Enlaces útiles</h4>
          <a href="#inicio" className="hover:text-[#9575CD] transition">Inicio</a>
          <a href="#beneficios" className="hover:text-[#9575CD] transition">Beneficios</a>
          <a href="#ventajas" className="hover:text-[#9575CD] transition">Ventajas</a>
          <a href="#faq" className="hover:text-[#9575CD] transition">Preguntas frecuentes</a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-[#6C63FF] font-semibold text-lg">Contacto</h4>
          <p className="text-gray-200">📧 soporte@facturafacil.com</p>
          <p className="text-gray-200">📞 +52 55 1234 5678</p>
          <p className="text-gray-300 text-sm pt-2">
            © {new Date().getFullYear()} FacturaFácil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
