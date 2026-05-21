function ExperienceSection() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Content */}
        <div className="max-w-3xl">

          <p className="
            uppercase
            tracking-[0.3em]
            text-xs
            text-momentum-wine
            mb-8
          ">
            The Experience
          </p>

          <h2 className="
            font-noir
            text-5xl
            md:text-7xl
            tracking-[-0.08em]
            leading-[0.95]
            text-momentum-text
          ">
            Diseñado para
            <br />
            sentirse humano.
          </h2>

          <p className="
            mt-10
            text-lg
            leading-relaxed
            text-momentum-softText
            max-w-2xl
          ">
            Momentum busca crear momentos de pausa
            en medio del ruido.
            Espacios para pensar, conectar,
            escribir y recordar
            por qué comenzaste.
          </p>

        </div>

        {/* Visual Grid */}
        <div className="
          mt-20
          grid
          md:grid-cols-3
          gap-6
        ">

          {/* Card 1 */}
          <div className="
            aspect-4/5
            rounded-[2.5rem]
            bg-momentum-surface
            p-8
            flex
            items-end
          ">
            <p className="
              text-xl
              leading-relaxed
              text-momentum-text
            ">
              Conversaciones
              más profundas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="
            aspect-4/5
            rounded-[2.5rem]
            bg-momentum-wine
            p-8
            flex
            items-end
          ">
            <p className="
              text-xl
              leading-relaxed
              text-white
            ">
              Intención
              en cada página.
            </p>
          </div>

          {/* Card 3 */}
          <div className="
            aspect-4/5
            rounded-[2.5rem]
            bg-[#e7dfd1]
            p-8
            flex
            items-end
          ">
            <p className="
              text-xl
              leading-relaxed
              text-momentum-text
            ">
              El peso del crecimiento
              también es una bendición.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;