import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const equipo = [
  { nombre: "Alejandro Orozco", puesto: "CEO FacturoFacil", img: "/equipo.png" },
  { nombre: "Libertad Leal", puesto: "Gerente Administrativo", img: "/equipo.png" },
  { nombre: "Nayeli Estrada", puesto: "Ventas Cuentas Corporativas", img: "/equipo.png" },
  { nombre: "Abraham Muñoz", puesto: "Líder en Soporte", img: "/equipo.png" },
];

export default function Equipo() {
  const total = equipo.length;

  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    cssEase: "ease",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: Math.min(3, total),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: Math.min(2, total),
        },
      },
      {
        breakpoint: 640, // Móviles
        settings: {
          slidesToShow: Math.min(2, total), // Fuerza 2 en móviles
        },
      },
    ],
  };

  return (
    <section className="w-full py-12 px-3 bg-white font-[Poppins]">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-900">
          Nuestro equipo
        </h2>
      </div>

      <Slider {...settings}>
        {equipo.map((p, idx) => (
          <div key={idx} className="px-2">
            <div
              className="bg-white rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-2xl"
              style={{
                boxShadow: "0 6px 25px rgba(0, 255, 255, 0.25)",
              }}
            >
              <div className="mx-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-slate-900">
                {p.nombre}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">{p.puesto}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
