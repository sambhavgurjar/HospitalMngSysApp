import React from "react";
import { Link } from "react-router-dom";

const DoctorHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center text-blue-800">
            Welcome to Your Doctor Dashboard
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Manage your appointments, access patient records, and update your
            profile.
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
              View and manage your daily appointments with patients.
            </p>
            <Link
              to="/doctor/appointments"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Manage Appointments
            </Link>
          </div>

          {/* Patient List */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Patients
            </h2>
            <p className="text-gray-600 mb-4">
              Access patient details, health records, and history.
            </p>
            <Link
              to="/doctor/patients"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              View Patients
            </Link>
          </div>

          {/* Profile */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Profile
            </h2>
            <p className="text-gray-600 mb-4">
              Edit your availability, qualifications, and contact details.
            </p>
            <Link
              to="/doctor/profile"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
