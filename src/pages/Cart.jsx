import Navbar from "../components/Navbar";
import useCartStore from "../store/cartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-black mb-10">
          Your Cart
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-950 border border-zinc-900 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">
                  {item.name}
                </h2>

                <p className="text-zinc-500">
                  ${item.price}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700"
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-zinc-700"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold mb-4">
                  $
                  {item.price * item.quantity}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Total
          </h2>

          <p className="text-4xl font-black">
            ${total}
          </p>
        </div>
      </main>
    </div>
  );
}

export default Cart;