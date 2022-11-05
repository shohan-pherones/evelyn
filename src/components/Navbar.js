import { BsHeart, BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };

  return (
    <nav className="bg-gray-200 pt-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center">
          <form className="justify-self-start">
            <input
              type="search"
              placeholder="Search products..."
              className="bg-transparent border border-gray-400 px-3 py-1 rounded-sm outline-none focus:border-gray-700 duration-500"
            />
          </form>
          <h2 className="text-2xl uppercase font-bold tracking-wider text-center">
            Evelyn.
          </h2>
          <div className="justify-self-end flex gap-5">
            <button className="flex items-center gap-2 hover:scale-105 duration-500 hover:text-rose-500">
              <BsHeart /> <span>0</span>
            </button>
            <button className="flex items-center gap-2 hover:scale-105 duration-500 hover:text-rose-500">
              <BsBag /> <span>0</span>
            </button>
          </div>
        </div>
        <div className="flex gap-5 uppercase text-sm font-medium tracking-wider justify-center mt-5 text-gray-500">
          <NavLink
            end
            to="/"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="shop"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Shop
          </NavLink>
          <NavLink
            to="categories"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Categories
          </NavLink>
          <NavLink
            to="gallery"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Gallery
          </NavLink>
          <NavLink
            to="blogs"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Blogs
          </NavLink>
          <NavLink
            to="suport"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            Support
          </NavLink>
          <NavLink
            to="about"
            className="border-b-2 hover:border-rose-500 pb-5 hover:text-gray-700"
            style={navActiveStyles}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
