// AuroraMotionSyServ.jsx
export default function AuroraMotionSyServ() {
  return (
    <div
      className="
        pointer-events-none absolute inset-0 -z-10 overflow-hidden
        [mask-image:radial-gradient(120%_90%_at_50%_40%,white,transparent_75%)]
      "
      aria-hidden
    >
      {/* Blob morado suave (izq/arriba) */}
      <span
        className="
          absolute -top-40 -left-40 h-[44rem] w-[44rem]
          rounded-full blur-3xl opacity-40 will-change-transform
          bg-gradient-to-br from-[#9B6BC5]/50 via-[#4B007D]/30 to-[#6B8DD6]/30
          animate-blob-1
        "
      />

      {/* Blob azul/gris (der/abajo) */}
      <span
        className="
          absolute -bottom-40 -right-32 h-[40rem] w-[40rem]
          rounded-full blur-3xl opacity-40 will-change-transform
          bg-gradient-to-br from-[#6B8DD6]/40 via-[#C8D0EA]/30 to-[#9B6BC5]/30
          animate-blob-2 animation-delay-2000
        "
      />

      {/* Glow central suave */}
      <span
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem]
          rounded-full blur-2xl opacity-30 will-change-transform
          bg-gradient-to-tr from-[#9B6BC5]/40 to-[#6B8DD6]/30
          animate-pulse-soft animation-delay-4000
        "
      />

      {/* Halo sutil extra */}
      <span
        className="
          absolute top-10 right-1/3 h-[26rem] w-[26rem]
          rounded-full blur-3xl opacity-25 will-change-transform
          bg-gradient-to-br from-[#4B007D]/30 to-[#6B8DD6]/25
          animate-blob-1 animation-delay-6000
        "
      />
    </div>
  );
}
