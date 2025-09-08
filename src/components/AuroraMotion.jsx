// src/components/AuroraMotion.jsx
export default function AuroraMotion() {
  return (
    <div
      className="
        pointer-events-none absolute inset-0 -z-10 overflow-hidden
        [mask-image:radial-gradient(120%_90%_at_50%_40%,white,transparent_78%)]
      "
      aria-hidden
    >
      {/* Capa base (suave, clara) */}
      <div
        className="
          absolute inset-0 opacity-85
          bg-gradient-to-br from-[#f6f7ff] via-[#ece8fb] to-[#eef3ff]
        "
      />

      {/* Aro principal conic-gradient — más contraste y más rápido */}
      <div
        className="
          absolute -inset-[24%] rounded-full
          blur-2xl opacity-85 will-change-transform
          animate-[spin_36s_linear_infinite]
        "
        style={{
          // paleta de tu logo: morado fuerte, azul medio, azul claro, lila
          background:
            'conic-gradient(from 0deg at 50% 50%, \
              #4B2C83 0deg, \
              #5B6FCF 90deg, \
              #CCD2F8 180deg, \
              #B48BC9 270deg, \
              #4B2C83 360deg)',
        }}
      />

      {/* Halo fino para “brillo” del aro (ayuda a que se note el giro) */}
      <div
        className="
          absolute -inset-[26%] rounded-full
          blur-[18px] opacity-60 will-change-transform
          mix-blend-screen
          animate-[spin_36s_linear_infinite_reverse]
        "
        style={{
          background:
            'conic-gradient(from 30deg at 50% 50%, \
              rgba(255,255,255,.0) 0deg, \
              rgba(255,255,255,.55) 110deg, \
              rgba(255,255,255,.0) 220deg, \
              rgba(255,255,255,.55) 330deg, \
              rgba(255,255,255,.0) 360deg)',
        }}
      />

      {/* Blob morado (menos blur y más opacidad) */}
      <span
        className="
          absolute left-[-10%] top-[-12%]
          h-[40rem] w-[40rem] rounded-full
          blur-2xl opacity-50 bg-[#4B2C83]
          will-change-transform
          animate-blob-1
        "
      />

      {/* Blob azul (contraparte) */}
      <span
        className="
          absolute right-[-12%] bottom-[-10%]
          h-[44rem] w-[44rem] rounded-full
          blur-2xl opacity-45 bg-[#5B6FCF]
          will-change-transform
          animate-blob-2 animation-delay-2000
        "
      />
    </div>
  );
}
