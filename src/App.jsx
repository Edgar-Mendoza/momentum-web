import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { getProducts } from "./services/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="text-zinc-500">
            {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;