import { React } from "react";
import Nav from "./components/Nav";
// import Coun from "./components/coun.jsx"
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Login from "./components/Login";
import Cart from "./components/Cart";
import groceryLogo from "./assets/groceries.png"; // <-- Add this import

const App = () => {
  // let login = false;
  return (
  <>
    <div className="min-h-screen bg-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-2 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center">
          {/* Brand and Description */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center">
            <div className="font-extrabold text-2xl text-black mb-2 flex flex-col items-center">
              <img
                src={groceryLogo}
                alt="Grocery Mart Logo"
                className="w-14 h-14 mb-2 "
              />
              Daily<span className="text-blue-600">Needs</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted destination for seamless online shopping. We're
              committed to quality, convenience, and customer satisfaction —
              bringing you the best products, fast delivery, and reliable
              service every step of the way.
            </p>
          </div>
          {/* Address */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center">
            <div className="font-bold text-md text-black mb-2">Address</div>
            <p className="text-gray-600 text-sm">
              Sector 136, Sovergein Tower
              <br />
              6th Floor
              <br />
              Noida, Uttar Pradesh
            </p>
          </div>
          {/* Links */}
          <div className="flex-1 min-w-[120px] flex flex-col items-center">
            <div className="font-bold text-md text-black mb-2">Links</div>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center border-t border-gray-200 mt-8 pt-4 text-xs text-gray-500 text-center gap-2">
          <div>© 2025 Daily Needs| All Rights Reserved</div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default App;
