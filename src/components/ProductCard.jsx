function ProductCard({ product }) {
  return (
    <div className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all">
      <div className="h-80 bg-zinc-900 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-500"></div>
      </div>

      <div className="p-6">
        <p className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">
          Momentum
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          {product.name}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
            ${product.price}
          </span>

          <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;