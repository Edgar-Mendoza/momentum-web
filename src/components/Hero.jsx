function Hero() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-6 text-xs md:text-sm">
          Momentum Collection 2026
        </p>

        <h1 className="text-5xl md:text-8xl font-black leading-none max-w-4xl mb-8">
          The impulse
          <br />
          to create.
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
          Premium apparel inspired by movement,
          discipline and creative energy.
        </p>

        <button className="bg-white text-black px-6 md:px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition">
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;