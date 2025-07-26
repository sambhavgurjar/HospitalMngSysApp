import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          CityCare Hospital
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
          <Link to="/" className="text-gray-700 hover:text-blue-700 transition">
            Home
          </Link>
          <Link
            to="/doctors"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Doctors
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Login
          </Link>

          {/* Register Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-700 transition">
              Register
            </button>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded shadow-md w-48 right-0 z-50">
              <Link
                to="/register/doctor"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
              >
                Doctor Register
              </Link>
              <Link
                to="/register/patient"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
              >
                Patient Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/doctors"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctors
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 hover:text-blue-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <div>
            <button
              onClick={() => setIsRegisterOpen(!isRegisterOpen)}
              className="block w-full text-left text-gray-700 hover:text-blue-700 transition"
            >
              Register
            </button>
            {isRegisterOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  to="/register/doctor"
                  className="block text-sm text-gray-700 hover:text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Doctor Register
                </Link>
                <Link
                  to="/register/patient"
                  className="block text-sm text-gray-700 hover:text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Patient Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
