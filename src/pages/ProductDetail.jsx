import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProduct } from "../services/products";
import useCartStore from "../store/cartStore";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="rounded-3xl overflow-hidden bg-zinc-900">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Momentum Collection
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-xl mb-8 leading-relaxed">
            Designed for movement, discipline and creative energy. Premium
            materials with a modern silhouette.
          </p>

          <div className="text-4xl font-bold mb-10">${product.price}</div>

          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition w-fit"
          >
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
