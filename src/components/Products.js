import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ currencyFormatter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/products");
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleBuyProduct = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <section className="py-10">
      <h2 className="text-center mb-10 uppercase text-3xl font-semibold tracking-widest">
        New arrivals
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {loading && (
          <p className="col-span-full text-center">
            {error ? error : "Loading..."}
          </p>
        )}
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:brightness-50 duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => handleBuyProduct(product.id)}
                className="absolute top-[50%] left-[50%] uppercase text-gray-100 w-20 h-20 border rounded-full border-gray-100 -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 duration-500 hover:bg-gray-100 hover:text-gray-700 active:scale-75"
              >
                Buy
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3>{product.name}</h3>
                <p className="mt-1 text-gray-400">{product.category}</p>
              </div>
              <p className="text-rose-500 font-semibold">
                {currencyFormatter(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
