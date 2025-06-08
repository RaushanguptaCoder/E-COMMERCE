import { React } from "react";
import { Link } from "react-router-dom";
import groceryLogo from "../assets/groceries.png"; // <-- Add your logo image here

const Nav = () => {
  return (
    <nav className="bg-blue-100 shadow-md fixed top-0 left-0 w-full z-50 rounded-[10px]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={groceryLogo}
            alt="Grocery Mart Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-4xl font-bold text-blue-600 hover:text-orange-800">
            Daily Needs
          </span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/contact" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Contact us
          </Link>
          <Link to="/about" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            About us
          </Link>
          <Link to="/review" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Reviews
          </Link>
          <Link to="/FAQ" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            FAQ
          </Link>
          <Link to="/Categories" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Categories
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/Cart" className="text-gray-900 font-bold hover:text-blue-600 transition cursor-pointer">
            Cart
          </Link>
          <Link to="/Login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
