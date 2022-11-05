import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";

const App = () => {
  const currencyFormatter = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="bg-gray-100 text-gray-700 text-lg">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home currencyFormatter={currencyFormatter} />}
        />
        <Route
          path="product/:id"
          element={<Product currencyFormatter={currencyFormatter} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
