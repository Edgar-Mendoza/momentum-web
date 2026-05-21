import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >

      {/* Product Visual */}
      <div className="
        aspect-4/5
        rounded-[2.5rem]
        overflow-hidden
        bg-momentum-surface
        mb-6
        transition-all
        duration-500
        group-hover:-translate-y-2
      ">

        <img
          src={product.image_url}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      {/* Product Info */}
      <div className="space-y-3">

        <p className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-momentum-wine
        ">
          Momentum Experience
        </p>

        <h2 className="
          text-2xl
          leading-tight
          text-momentum-text
        ">
          {product.name}
        </h2>

        <div className="
          flex
          items-center
          justify-between
          pt-2
        ">

          <span className="
            text-momentum-softText
          ">
            ${product.price}
          </span>

          <button className="
            border
            border-black/10
            px-5
            py-2
            rounded-full
            text-sm
            hover:bg-black
            hover:text-white
            transition
          ">
            Explorar
          </button>

        </div>

      </div>

    </Link>
  );
}

export default ProductCard;