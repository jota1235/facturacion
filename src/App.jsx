import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import { ThemeProvider } from './theme/ThemeProvider'; // <<— del paso anterior
import Navbar from './components/navbar';
import Hero from './components/hero';
import Beneficios from './components/beneficios';
import Beneficios2 from './components/beneficios2';
import PorQueEscogernos from './components/elijenos';
import Ventajas from './components/ventajas';
import PreguntasFrecuentes from './components/preguntas';
import Footer from './components/footer';
import PruebaGratis from './components/pruebagratis';
import PruebaDark from './components/PruebaDark';
import CasosExito from './components/casoExito'; 
import Caracteristicas from './components/caracteristicas';
import Equipo from './components/equipo';
import ContactForm from './components/contacto'
import Precios from './components/precios';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Landing */}
          <Route
            path="/"
            element={
              <div
                className="
                  min-h-screen
                  bg-slate-50 dark:bg-slate-900
                  text-slate-800 dark:text-slate-100
                  transition-colors duration-300
                "
              >
                <Navbar />
                <main>

             

                  <section id="inicio" className="scroll-mt-24">
                    <Hero />
                  </section>

                  <section id="beneficios2" className="scroll-mt-24">
                    <Beneficios2 />
                  </section>             


                  <section id="beneficios" className="scroll-mt-24">
                    <Beneficios />
                  </section>

                   <section id="casos-de-exito" className="scroll-mt-24">
                    <CasosExito />
                  </section>

                  <section id="por-que-escogernos" className="scroll-mt-24">
                    <PorQueEscogernos />
                  </section>

                  <section id="ventajas" className="scroll-mt-24">
                    <Ventajas />
                  </section>

                  <section id="caracteristicas" className="scroll-mt-24">
                    <Caracteristicas />
                  </section>

                  <section id="equipo" className="scroll-mt-24">
                    <Equipo />
                  </section>

                  <section id="precios" className="scroll-mt-24">
                    <Precios />
                  </section>

                  <section id="preguntas-frecuentes" className="scroll-mt-24">
                    <PreguntasFrecuentes />
                  </section>

                  <section id="contacto" className="scroll-mt-24">
                    <ContactForm />
                  </section>

                </main>
                <Footer />
              </div>
            }
          />

          
          <Route path="/registro" element={<PruebaGratis />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
