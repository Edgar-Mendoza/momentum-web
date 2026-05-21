function FeaturedProductSection() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* Product Visual */}
          <div className="relative">

            <div className="
              aspect-4/5
              rounded-[3rem]
              bg-momentum-surface
              overflow-hidden
              shadow-momentum
            ">

              {/* Placeholder */}
              <div className="
                w-full
                h-full
                flex
                items-center
                justify-center
                text-momentum-softText
              ">
                Product Image
              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <p className="
              uppercase
              tracking-[0.3em]
              text-xs
              text-momentum-wine
              mb-8
            ">
              Featured Experience
            </p>

            <h2 className="
              font-noir
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-momentum-text
            ">
              100 citas
              <br />
              juntos.
            </h2>

            <p className="
              mt-10
              text-lg
              leading-relaxed
              text-momentum-softText
              max-w-xl
            ">
              Una experiencia diseñada para ayudar
              a las parejas a salir de la rutina,
              redescubrirse y construir conversaciones
              más profundas mientras crean recuerdos juntos.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <button className="
                bg-momentum-wine
                text-white
                px-8
                py-4
                rounded-full
                hover:opacity-90
                transition
              ">
                Explorar experiencia
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
                Ver detalles
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProductSection;