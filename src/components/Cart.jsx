import React from "react";
import { useSelector, useDispatch } from "react-redux";
import notav from "../assets/notav.jpg";
import {
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = notav;
  };
  const handleCheckout = () => {
    alert(`Payment Successful! Total Amount: $${totalAmount}`);
    dispatch(clearCart());
   navigate("/Home");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 border-b pb-2">
        Your Products
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-16 text-lg font-semibold bg-gray-50 rounded-xl shadow-inner">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-4 gap-4 border border-gray-100 hover:border-blue-300 transition"
              >
                <img
                  onError={handleImgError}
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-32 object-cover rounded-xl border border-gray-200 shadow-sm"
                />
                <div className="flex-1 flex flex-col items-center sm:items-start">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    {item.color && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {item.color}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                     <span className="text-l font-semibold text-gray-600">
                     Price: ${item.price}
                    </span>
                    <span className="text-xl font-bold text-blue-700">
                      ${item.price * item.quantity}
                    </span>
                    <div className="flex absolute right-[30vw] items-center gap-2 bg-gray-100 px-2 py-1 rounded-xl shadow-inner">
                      <button
                        onClick={() => {
                          dispatch(decreaseQuantity({ id: item.id }));
                        }}
                        className="bg-red-400 hover:bg-blue-600 text-white font-bold rounded-xl w-8 h-8 flex items-center justify-center text-lg transition"
                      >
                        -
                      </button>
                      <span className="text-base font-semibold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          dispatch(increaseQuantity({ id: item.id }));
                        }}
                        className="bg-green-600 hover:bg-blue-800 text-white font-bold rounded-xl w-8 h-8 flex items-center justify-center text-lg transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-inner">
              <span className="text-lg font-semibold text-gray-800">
                Total Amount:
              </span>
              <span className="text-2xl font-bold text-gray-900">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => handleCheckout()}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95"
            >
            Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;