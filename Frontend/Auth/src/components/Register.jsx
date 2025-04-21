import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Register</h2>
          <p className="text-gray-500 mt-2">Create your new account</p>
        </div>

        <form className="space-y-5">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold py-3 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
