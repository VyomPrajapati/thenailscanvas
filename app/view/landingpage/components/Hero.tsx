import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative" id="hero">
      <div className="px-0 mt-0">
        <div className="relative overflow-hidden">
          <Image
            src="/nails/beautiful-nail-art-presentation.jpg"
            alt="Reusable gel nails displayed in an elegant setting"
            width={1920}
            height={900}
            className="h-[560px] md:h-[640px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-xl text-white">
            <p className="text-sm uppercase tracking-[0.2em]">Welcome to TheNailsCanvas</p>
            <h1 className="mt-3 !text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Reusable Gel Nails, Ready in Minutes
            </h1>
            <p className="mt-3 text-white/90 max-w-lg">
              Salon finish without damage. Swap styles, reapply 10+ wears, feel good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


