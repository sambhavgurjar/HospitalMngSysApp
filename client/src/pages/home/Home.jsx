import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
          Welcome to CityCare Hospital
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 px-2 sm:px-6">
          Your health is our top priority. We offer modern facilities, expert
          doctors, and compassionate care tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-4">
          <Link
            to="/register/patient"
            className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition text-center"
          >
            Register as Patient
          </Link>
          <Link
            to="/register/doctor"
            className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition text-center"
          >
            Register as Doctor
          </Link>
          <Link
            to="/doctors"
            className="w-full sm:w-auto bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition text-center"
          >
            View Doctors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
