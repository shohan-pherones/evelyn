import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShippingFast, FaMoneyBill } from "react-icons/fa";

const Product = ({ currencyFormatter }) => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [size, setSize] = useState("");

  const { id } = useParams();

  const getProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/products/${id}`);
      if (!res.ok) throw new Error("Product not found!");
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <section className="container mx-auto min-h-screen py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {loading && (
        <p className="col-span-full text-center">
          {error ? error : "Loading..."}
        </p>
      )}
      {product && (
        <>
          <div className="rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full block"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex justify-between">
                <h2 className="text-3xl font-semibold">{product.name}</h2>
                <p className="text-3xl font-semibold text-rose-500">
                  {currencyFormatter(product.price)}
                </p>
              </div>
              <p className="font-semibold text-violet-500">
                {product.category}
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <label className="font-semibold" htmlFor="size">
                Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
                id="size"
                className="outline-none cursor-pointer bg-transparent border-2 w-20 h-10 text-center rounded-md border-gray-300 font-semibold focus:bg-gray-700 focus:text-gray-100 focus:border-gray-700 duration-500"
              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
            <button className="font-semibold text-violet-50 bg-violet-600 py-3 rounded-md hover:bg-violet-800 duration-500">
              Add to cart
            </button>
            <div>
              <p className="font-semibold">Description</p>
              <ul className="text-gray-500">
                {product.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 text-center">
              <div className="flex flex-col bg-gray-200 items-center px-10 py-5 rounded-md border border-gray-300">
                <FaShippingFast />
                <p className="font-semibold">International delivery</p>
                <p className="text-gray-400">Get your order in 2 years</p>
              </div>
              <div className="flex flex-col bg-gray-200 items-center px-10 py-5 rounded-md border border-gray-300">
                <FaMoneyBill />
                <p className="font-semibold">Loyalty rewards</p>
                <p className="text-gray-400">Don't look at other products</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
