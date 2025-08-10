import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
  };

  const link = [
    { path: "/admin/home", title: "Home" },
    { path: "/admin/doctors", title: "Doctors" },
    { path: "/admin/departments", title: "Departments" },
    { path: "/admin/appointments", title: "Appointments" },
    { path: "/admin/patients", title: "Patients" },
    { path: "/admin/reports", title: "Reports" },
    { path: "/admin/profile", title: "Profile" },
  ];
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
          {link.map((data, idx) => (
            <Link
              to={data.path}
              className="text-gray-700 hover:text-blue-700 transition"
              key={idx}
            >
              {data.title}
            </Link>
          ))}
          <Link
            to={"/login"}
            className="text-red-500 hover:text-red-700 transition"
            onClick={handleLogout}
            replace={true}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {link.map((data, idx) => (
            <Link
              to={data.path}
              className="block text-gray-700 hover:text-blue-700 transition"
              key={idx}
            >
              {data.title}
            </Link>
          ))}
          <Link
            to={"/login"}
            replace={true}
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="block text-red-500 hover:text-red-700 transition"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
