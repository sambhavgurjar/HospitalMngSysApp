import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 border-t border-blue-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-6">
          {/* Brand & Info */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h1 className="text-lg font-bold text-blue-800">
              CityCare Hospital
            </h1>
            <p className="text-sm text-gray-600">
              Healing with compassion and excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm w-full md:w-auto">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* Contact & Social Icons */}
          <div className="text-center md:text-right w-full md:w-auto space-y-2">
            <p className="text-sm text-gray-700">📞 +91-123-456-7890</p>
            <p className="text-sm text-gray-700">✉️ support@citycare.com</p>
            <div className="flex justify-center md:justify-end space-x-3 pt-1">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.84 3.44 8.85 7.94 9.78v-6.91H7.1v-2.87h2.84v-2.2c0-2.8 1.67-4.34 4.23-4.34 1.23 0 2.52.22 2.52.22v2.76h-1.42c-1.4 0-1.83.87-1.83 1.76v2.01h3.12l-.5 2.87h-2.62v6.91C18.56 20.92 22 16.91 22 12.07z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-1.95 1.14-3.61 1.44A4.52 4.52 0 0 0 16.1.9a4.48 4.48 0 0 0-4.4 5.55A12.94 12.94 0 0 1 3 2.1s-4 9 5 13a13 13 0 0 1-7.7 2.3c9 5.3 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-xs text-gray-500 mt-6 border-t pt-3">
          &copy; {new Date().getFullYear()} CityCare Hospital. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
