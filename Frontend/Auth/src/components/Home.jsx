import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 p-6 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-800 mb-4">
          Employment Management System
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Streamline your organization's recruitment and workforce management
          with ease and efficiency.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Employee Directory
          </h2>
          <p className="text-gray-600">
            Maintain a searchable, centralized list of all employees and
            departments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Attendance & Leaves
          </h2>
          <p className="text-gray-600">
            Track attendance, leave requests, and automate approval workflows.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Hiring & Onboarding
          </h2>
          <p className="text-gray-600">
            Manage job postings, applicant tracking, and new employee
            onboarding.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-800 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
