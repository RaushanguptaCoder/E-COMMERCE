import { React } from "react";
import Nav from "./components/Nav";
// import Coun from "./components/coun.jsx"
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Cart from "./components/Cart";

const App = () => {
  // let login = false;
  return (
  <>
    <div className="bg-red-100 min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Categories" element={<Categories />} /> {/* <-- Fix here */}
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    <footer className="bg-blue-100 text-gray-700 py-6 mt-8">
        <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <span className="font-bold text-blue-600 text-lg">Ecomm</span> &copy; {new Date().getFullYear()}<br />
            Your trusted online shopping partner.
          </div>
          <div className="text-center md:text-right text-sm">
            <div>Email: support@ecomm.com</div>
            <div>Phone: +1 234 567 8901</div>
            <div>123 Ecomm Street, Shop City, Country</div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default App;
