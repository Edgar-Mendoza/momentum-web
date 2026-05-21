function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,16,36,0.08),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32">

        {/* Small Label */}
        <p className="
          uppercase
          tracking-[0.3em]
          text-xs
          text-momentum-wine
          mb-8
        ">
          Momentum Philosophy
        </p>

        {/* Main Headline */}
        <h1 className="
          font-noir
          text-[4.5rem]
          md:text-[8rem]
          lg:text-[10rem]
          leading-[0.9]
          tracking-[-0.08em]
          uppercase
          max-w-5xl
          text-momentum-text
        ">
          Sé víctima
          <br />
          de tu éxito.
        </h1>

        {/* Description */}
        <p className="
          mt-10
          max-w-2xl
          text-lg
          md:text-xl
          leading-relaxed
          text-momentum-softText
        ">
          Momentum crea herramientas y experiencias
          para personas que deciden crecer con intención,
          incluso cuando el peso del progreso
          comienza a sentirse real.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">

          <button className="
            bg-momentum-wine
            text-white
            px-8
            py-4
            rounded-full
            hover:opacity-90
            transition
          ">
            Descubrir Momentum
          </button>

          <button className="
            border
            border-black/10
            px-8
            py-4
            rounded-full
            hover:bg-black
            hover:text-white
            transition
          ">
            Explorar experiencias
          </button>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;