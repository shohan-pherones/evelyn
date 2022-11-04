const Product = ({ product }) => {
  const currencyFormatter = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:scale-95 lg:aspect-none lg:h-80 duration-500 cursor-pointer group-hover:brightness-75">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3>{product.name}</h3>
          <p className="mt-1 text-gray-400">{product.category}</p>
        </div>
        <p className="font-semibold text-red-500">
          {currencyFormatter(product.price)}
        </p>
      </div>
    </div>
  );
};

export default Product;
