import { React } from "react";
import { Link } from "react-router-dom";
import groceryLogo from "../assets/notav.jpg"; // <-- Add your logo image here
import "./Nav.css"
import { useSelector,} from "react-redux";

const Nav = () => {
   const quantity = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );
  console.log(quantity);
  return (
    <nav className="main-bar nav-container flex items-center justify-between bg-white shadow-sm px-8 py-2 sticky top-0 z-10">
      <div className="flex items-center gap-2  ">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={groceryLogo}
            alt="Grocery Mart Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
         <span className="font-extrabold text-2xl text-black">
            Daily
            <span className="text-blue-600">  Needs</span>
          </span>
        </Link>
        </div>
        <div className="flex items-center gap-10">
          <Link to="/Home" className="Nav-links text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Home
          </Link>
          <Link to="/contact" className="Nav-links text-gray-700 hover:text-blue-600 font-bold transition cursor-pointer">
          Contact us
          </Link>
          <Link to="/about" className="Nav-links text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
          About us
          </Link>
          <Link to="/review" className="Nav-links text-gray-900 font-medium hover:text-blue-600 transition cursor-pointer">
          Reviews
          </Link>
          <Link to="/FAQ" className="Nav-links text-gray-900 font-medium hover:text-blue-600 transition cursor-pointer">
          FAQ
          </Link>

          <Link to="/Cart" className="Nav-links text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Cart{" "}
          {quantity > 0 && (
            <span className="relative -top-2 bg-red-600 text-white px-2 rounded-3xl text-xs ml-1 font-bold">
              {quantity}
            </span>
          )}
          </Link>
          <Link to="/Login" className="ml-4 px-5 py-1 border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Login
          </Link>
        </div>
     
    </nav>
  );
};

export default Nav;
