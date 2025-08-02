import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/admin/home" className="text-xl font-bold text-blue-700">
          CityCare | Admin
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/admin/home"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/doctors"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Doctors
          </Link>
          <Link
            to="/admin/patients"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Patients
          </Link>
          <Link
            to="/admin/appointments"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Appointments
          </Link>
          <Link
            to="/admin/departments"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Departments
          </Link>
          <Link
            to="/admin/reports"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Reports
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/admin/home"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/doctors"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctors
          </Link>
          <Link
            to="/admin/patients"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Patients
          </Link>
          <Link
            to="/admin/appointments"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Appointments
          </Link>
          <Link
            to="/admin/departments"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Departments
          </Link>
          <Link
            to="/admin/reports"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Reports
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="block text-red-500 hover:text-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
