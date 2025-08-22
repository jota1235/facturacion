import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const logos = [
  "https://cdn.facturoporti.com.mx/2025/04/logo_toyota.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_turkish_airlines.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_benotto.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_bizarro.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_chopo.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_conauto.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_deloitte.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_elektra.webp",
  "https://cdn.facturoporti.com.mx/2025/04/logo_grupo_tmm.webp"
];

export default function LogoCarousel() {
  return (
    <div className="w-full py-10 flex justify-center">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={5}
        spaceBetween={30}
        className="max-w-6xl w-full"
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`logo-${index}`}
              className="h-24 w-auto object-contain brightness-0 hover:brightness-100 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
