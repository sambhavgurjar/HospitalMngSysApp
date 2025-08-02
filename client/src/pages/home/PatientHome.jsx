import React from "react";
import { Link } from "react-router-dom";

const PatientHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-800">
            Welcome to Your Patient Dashboard
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Access all your health information, appointments, and messages in
            one place.
          </p>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Appointments */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Appointments
            </h2>
            <p className="text-gray-600 mb-4">
              Check your upcoming doctor visits and follow-ups.
            </p>
            <Link
              to="/appointments"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              View Appointments
            </Link>
          </div>

          {/* Records */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Medical Records
            </h2>
            <p className="text-gray-600 mb-4">
              Download your prescriptions, test reports, and visit notes.
            </p>
            <Link
              to="/records"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              View Records
            </Link>
          </div>

          {/* Messages */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Messages
            </h2>
            <p className="text-gray-600 mb-4">
              Chat with your assigned doctors or support staff.
            </p>
            <Link
              to="/messages"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Go to Messages
            </Link>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default PatientHome;
