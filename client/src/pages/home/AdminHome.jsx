import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-center text-indigo-800">
            Welcome to Admin Dashboard
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Manage doctors, patients, appointments, and more.
          </p>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Manage Doctors */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Doctors
            </h2>
            <p className="text-gray-600 mb-4">
              Add, edit, or remove doctor profiles from the system.
            </p>
            <Link
              to="/admin/doctors"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Manage Doctors
            </Link>
          </div>

          {/* Manage Patients */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Patients
            </h2>
            <p className="text-gray-600 mb-4">
              View and control patient information and records.
            </p>
            <Link
              to="/admin/patients"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Manage Patients
            </Link>
          </div>

          {/* Appointments */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Appointments
            </h2>
            <p className="text-gray-600 mb-4">
              View scheduled appointments and assign doctors.
            </p>
            <Link
              to="/admin/appointments"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              View Appointments
            </Link>
          </div>

          {/* Department */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Departments
            </h2>
            <p className="text-gray-600 mb-4">
                Manage hospital departments and their respective doctors.
            </p>
            <Link
              to="/admin/departments"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Manage Departments
            </Link>
          </div>

          {/* Reports */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Reports
            </h2>
            <p className="text-gray-600 mb-4">
              Generate monthly or weekly hospital operation reports.
            </p>
            <Link
              to="/admin/reports"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Generate Reports
            </Link>
          </div>

          {/* Settings */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              Settings
            </h2>
            <p className="text-gray-600 mb-4">
              Customize system preferences and admin controls.
            </p>
            <Link
              to="/admin/settings"
              className="inline-block bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition"
            >
              Go to Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
