import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../ProductCard";

function CollectionSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-8
          mb-20
        "
        >
          <div>
            <p
              className="
              uppercase
              tracking-[0.3em]
              text-xs
              text-momentum-wine
              mb-6
            "
            >
              Collection
            </p>

            <h2
              className="
              font-noir
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-momentum-text
            "
            >
              Experiencias
              <br />
              Momentum.
            </h2>
          </div>

          <p
            className="
            max-w-md
            text-lg
            leading-relaxed
            text-momentum-softText
          "
          >
            Herramientas y experiencias diseñadas para ayudarte a crecer,
            conectar y avanzar con intención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
