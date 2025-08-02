import { useState } from "react";
import axios from "../services/axios.js";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    role: "patient",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    try {
      const response = await axios.post("/login", formData);
      console.log(response.data);
      alert(response?.data?.message);
      localStorage.setItem("token", response.data.data.token);
      let userRole = jwtDecode(response.data.data.token).role;
      // console.log("User Role:", userRole);
      if (userRole === "patient") {
        navigate("/patient/home");
      }
      else if (userRole === "doctor") {
        navigate("/doctor/home");
      } else if (userRole === "admin") {
        navigate("/admin/home");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Error logging in");
    }
    // TODO: Send formData to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Login to CityCare Hospital
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="userId"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              User ID
            </label>
            <input
              type="text"
              id="userid"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your ID"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Select Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        {/* Optional: Forgot password or signup hint */}
        <p className="mt-4 text-xs text-center text-gray-500">
          Forgot your password?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
