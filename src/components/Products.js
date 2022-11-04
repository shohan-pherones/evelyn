import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div className="container mx-auto py-20">
      <h2 className="uppercase text-3xl font-semibold tracking-widest text-center mb-10">
        New arrivals
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {loading && (
          <p className="col-span-full text-center">
            {error ? error : "Loading..."}
          </p>
        )}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
