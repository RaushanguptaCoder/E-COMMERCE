import React from "react";
import notav from "../assets/notav.jpg"
const Card = ({ productObj }) => {
 let { title, category, price, image, rating } = productObj;
    const handleError = (e) => {
        e.target.onError = null;
        e.target.src = notav;
    };
 return (
 <>
      <div className="flex flex-col bg-gradient-to-br from-sky-300 via-blue-200 to-purple-200 h-100 w-64 shadow-sm hover:shadow-2xl transition-shadow duration-300 text-center rounded-xl my-6 relative top-10 transform hover:-translate-y-6 hover:scale-105 transition-transform z-10 hover:border-purple-400 hover:border-2">
        <div className="flex justify-center">
          <img
            className="h-40 w-40 rounded-3xl  object-cover transition-transform duration-500 hover:rotate-y-12 hover:scale-110"
            style={{
              perspective: "600px",
            }}
            src={image}
            alt={title}
            onError={handleError}
          />
        </div>
        <div className="flex flex-col flex-1 justify-between px-4 py-4">
          <div>
            <h2 className="text-lg font-semibold text-black mb-2 truncate w-full block" title={title}>
              {title}
            </h2>
            <p>
              <span className="inline-block bg-blue-500 font-bold text-white text-s px-2 py-1 rounded relative top-1">{category}</span>
            </p>
            <p className="text-black mt-2 flex items-center justify-center gap-1">
              <span className="text-yellow-500 text-lg">★★★★</span>
              <span>{rating}</span>
            </p>
            <p className="text-xl font-bold text-black mt-1">Price: ${price}</p>
          </div>
          <div className="flex justify-center bottom-[10px]">
            <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 cursor-pointer hover:from-yellow-400 hover:to-orange-500 text-white font-semibold px-6 py-2 rounded-2xl shadow transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
 );
};
export default Card;