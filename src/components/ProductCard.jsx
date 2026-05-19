import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all block"
    >
      <div className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-900 hover:border-zinc-700 transition-all">
        <div className="h-80 bg-zinc-900 overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6">
          <p className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">
            Momentum
          </p>

          <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${product.price}</span>

            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-zinc-200 transition">
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
