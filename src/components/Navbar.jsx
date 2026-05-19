import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="border-b border-zinc-800 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Momentum
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition">
            Shop
          </a>

          <a href="#" className="hover:text-white transition">
            Collections
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>
        </nav>

        <Link to="/cart">
          <button className="bg-white text-black px-4 md:px-5 py-2 rounded-xl font-medium hover:bg-zinc-200 transition text-sm">
            Cart ({cart.length})
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;