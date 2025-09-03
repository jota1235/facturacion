export default function AuroraMotionSyServ() {
  return (
    <div
      className="
        pointer-events-none absolute inset-0 -z-10 overflow-hidden transform-gpu
        [mask-image:radial-gradient(120%_100%_at_50%_50%,white,transparent_75%)]
        motion-reduce:hidden
      "
      aria-hidden
    >
      {/* Blob principal (morado/azul) */}
      <span
        className="
          absolute -top-40 -left-40 
          h-[40rem] w-[40rem] lg:h-[60rem] lg:w-[60rem] 
          rounded-full blur-3xl opacity-50 will-change-transform
          bg-gradient-to-br from-[#9B6BC5]/60 via-[#4B007D]/40 to-[#6B8DD6]/40
          animate-blob-1
          mix-blend-multiply
        "
      />

      {/* Blob aqua/azul más visible */}
      <span
        className="
          absolute bottom-0 right-1/4 
          h-[35rem] w-[35rem] lg:h-[55rem] lg:w-[55rem]
          rounded-full blur-3xl opacity-55 will-change-transform
          bg-gradient-to-br from-[#38BDF8]/60 via-[#6B8DD6]/45 to-[#C8D0EA]/35
          animate-blob-2 animation-delay-2000
          mix-blend-multiply
        "
      />

      {/* Glow central */}
      <span
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2 
          h-[26rem] w-[26rem] lg:h-[40rem] lg:w-[40rem]
          rounded-full blur-2xl opacity-40 will-change-transform
          bg-gradient-to-tr from-[#9B6BC5]/40 to-[#38BDF8]/30
          animate-pulse-soft animation-delay-4000
          mix-blend-screen
        "
      />
    </div>
  );
}
