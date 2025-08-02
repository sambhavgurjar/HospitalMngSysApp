import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorNav = () => {
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
        <Link to="/doctor/home" className="text-xl font-bold text-blue-700">
          CityCare | Doctor
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
            to="/doctor/home"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/doctor/appointments"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Appointments
          </Link>
          <Link
            to="/doctor/patients"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Patients
          </Link>
          <Link
            to="/doctor/profile"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-red-500 hover:text-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/doctor/home"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/doctor/appointments"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Appointments
          </Link>
          <Link
            to="/doctor/patients"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Patients
          </Link>
          <Link
            to="/doctor/profile"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="block text-red-500 hover:text-red-700 transition"
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DoctorNav;
