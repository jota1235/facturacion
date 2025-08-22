import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-12 items-start text-center md:text-left">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            
            <span className="text-2xl font-extrabold text-cyan-300">
              Factura<span className="text-white">Fácil</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Tu solución confiable para facturación electrónica moderna, rápida y sin complicaciones.
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-cyan-300 font-semibold text-lg">Enlaces útiles</h4>
          <a href="#inicio" className="hover:text-cyan-400 transition">Inicio</a>
          <a href="#beneficios" className="hover:text-cyan-400 transition">Beneficios</a>
          <a href="#ventajas" className="hover:text-cyan-400 transition">Ventajas</a>
          <a href="#faq" className="hover:text-cyan-400 transition">Preguntas frecuentes</a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-cyan-300 font-semibold text-lg">Contacto</h4>
          <p className="text-gray-400">📧 soporte@facturafacil.com</p>
          <p className="text-gray-400">📞 +52 55 1234 5678</p>
          <p className="text-gray-500 text-sm pt-2">
            © {new Date().getFullYear()} FacturaFácil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
