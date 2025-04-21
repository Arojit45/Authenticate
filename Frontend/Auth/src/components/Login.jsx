import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-violet-200 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Authentication</h1>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-violet-700">Login</h2>
          <p className="text-gray-500 mt-1">Please enter your credentials</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none text-gray-800"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:outline-none text-gray-800"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg font-semibold py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
