function ClosingSection() {
  return (
    <section className="py-40">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="
          uppercase
          tracking-[0.3em]
          text-xs
          text-momentum-wine
          mb-10
        ">
          Momentum Manifesto
        </p>

        <h2 className="
          font-noir
          text-5xl
          md:text-7xl
          lg:text-8xl
          leading-[0.95]
          tracking-[-0.08em]
          text-momentum-text
        ">
          A veces el peso
          <br />
          que cargas
          <br />
          es prueba
          <br />
          de cuánto
          <br />
          has avanzado.
        </h2>

        <p className="
          mt-12
          text-lg
          leading-relaxed
          text-momentum-softText
          max-w-2xl
          mx-auto
        ">
          Sé víctima de tu éxito.
        </p>

        <div className="mt-14">

          <button className="
            bg-momentum-wine
            text-white
            px-10
            py-4
            rounded-full
            hover:opacity-90
            transition
          ">
            Entrar a Momentum
          </button>

        </div>

      </div>
    </section>
  );
}

export default ClosingSection;