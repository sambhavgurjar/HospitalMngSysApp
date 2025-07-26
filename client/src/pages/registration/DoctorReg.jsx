import { useState } from "react";

const DoctorReg = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
    address: "",
    depart: "",
    qualifications: "",
    experience: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "qualifications") {
      setFormData((prev) => ({
        ...prev,
        qualifications: value.split(",").map((q) => q.trim()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registration Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Doctor Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter doctor's full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@hospital.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                placeholder="10-digit mobile number"
                value={formData.contact}
                onChange={handleChange}
                pattern="[6-9]{1}[0-9]{9}"
                maxLength={10}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Full Address
            </label>
            <textarea
              name="address"
              placeholder="Complete residential address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Department
            </label>
            <select
              name="depart"
              value={formData.depart}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select department</option>
              <option value="">Cardiology</option>
              <option value="">Orthopedics</option>
              <option value="">Neurology</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Qualifications
              </label>
              <input
                type="text"
                name="qualifications"
                placeholder="e.g., MBBS, MD"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Experience (years)
              </label>
              <input
                type="number"
                name="experience"
                placeholder="Years of experience"
                min={0}
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Register Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorReg;
