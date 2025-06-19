import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <div
      className="min-h-screen w-full bg-cover bg-center mt-[70px]"
      style={{ backgroundImage: "url('./grade.webp')" }}
    >
      <section className="flex justify-center items-center min-h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('./grade.webp')" }}>
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 w-full max-w-xl flex flex-col items-center">
          <div className="flex justify-center mb-6 w-full">
            <button
              className={`px-6 py-2 font-semibold rounded-l-lg transition-colors duration-300 cursor-pointer ${
                isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-r-lg transition-colors duration-300 cursor-pointer ${
                !isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-center">
            {isLogin ? 'Login' : 'Signup'}
          </h2>
          {isLogin ? (
            <form className="w-full flex flex-col items-center mt-8 space-y-8">
              <div className="w-full">
                <label htmlFor="login-email" className="block text-2xl text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="login-email"
                  id="login-email"
                  placeholder="Enter your email"
                  className="w-full text-xl rounded-lg px-6 py-3 border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="login-password" className="block text-2xl text-gray-800 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="login-password"
                  id="login-password"
                  placeholder="Enter your password"
                  className="w-full text-xl rounded-lg px-6 py-3 border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-xl font-semibold cursor-pointer px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 hover:from-blue-600 hover:to-orange-400 transition text-white shadow-lg"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="w-full flex flex-col items-center mt-8 space-y-8">
              <div className="w-full">
                <label htmlFor="signup-name" className="block text-2xl text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="signup-name"
                  id="signup-name"
                  placeholder="Enter your name"
                  className="w-full text-xl rounded-lg px-6 py-3 border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="signup-email" className="block text-2xl text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="signup-email"
                  id="signup-email"
                  placeholder="Enter your email"
                  className="w-full text-xl rounded-lg px-6 py-3 border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="signup-password" className="block text-2xl text-gray-800 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="signup-password"
                  id="signup-password"
                  placeholder="Enter your password"
                  className="w-full text-xl rounded-lg px-6 py-3 border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-xl cursor-pointer font-semibold px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 hover:from-blue-600 hover:to-orange-400 transition text-white shadow-lg"
              >
                Signup
              </button>
            </form>
          )}
          <div className="mt-8 text-lg text-gray-800">
            {isLogin ? (
              <>
                Don't have any account?{' '}
                <span
                  className="text-blue-700 font-bold underline hover:text-blue-900 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign-up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-blue-700 font-bold underline hover:text-blue-900 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
     
      </>
  );
};

export default Login;
