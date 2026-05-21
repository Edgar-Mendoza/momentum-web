function PhilosophySection() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-xs
              text-momentum-wine
              mb-8
            ">
              What is Momentum?
            </p>

            <h2 className="
              font-noir
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-momentum-text
            ">
              Más que
              <br />
              una agenda.
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-8 text-lg leading-relaxed text-momentum-softText">

            <p>
              Momentum nace de una idea simple:
              crecer también tiene peso.
            </p>

            <p>
              Cada meta cumplida trae nuevas responsabilidades,
              nuevas expectativas y nuevas versiones de nosotros mismos.
            </p>

            <p>
              Por eso Momentum no busca solamente ayudarte
              a organizar tu vida.
            </p>

            <p className="text-momentum-text">
              Busca acompañarte mientras construyes
              una vida con intención.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PhilosophySection;