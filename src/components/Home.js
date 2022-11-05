import Products from "./Products";

const Home = ({ currencyFormatter }) => {
  return (
    <div className="container mx-auto min-h-screen">
      <Products currencyFormatter={currencyFormatter} />
    </div>
  );
};

export default Home;
