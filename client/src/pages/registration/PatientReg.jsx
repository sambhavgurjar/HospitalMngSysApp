import { useState } from "react";
import axios from "../../services/axios.js";

const PatientReg = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    contact: "",
    address: "",
    password: "",
    userid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Patient Data:", formData);

    try {
      console.log("Patient Data:", formData);
      const res = await axios.post("/patients", formData);
      alert(res.data.message || "Patient registered successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering patient");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-8">
          Patient Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              User ID
            </label>
            <input
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
              required
              placeholder="Create a user ID"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                placeholder="Select DOB"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email address"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
              placeholder="Create a secure password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Contact
            </label>
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="\d{10}"
              maxLength={10}
              required
              placeholder="Enter 10-digit mobile number"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Enter full address"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientReg;
