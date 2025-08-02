import React, { useEffect, useState } from "react";
import axios from "../../services/axios";

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    fetchDoctors();
    let token = localStorage.getItem("token");
    setIsLogged(!!token);
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("/doctors");
      setDoctors(res?.data?.data || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      alert(error?.response?.data?.message || "Failed to load doctors");
    }
  };

  const handleBook = (doctorId) => {
    if (!isLogged) {
      alert("Login to book an appointment!");
      return;
    }
    alert(`Booking appointment for Doctor ID: ${doctorId}`);
    // TODO: Route to booking page or open modal
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Our Doctors
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="bg-white rounded-xl shadow border hover:shadow-md transition-all"
          >
            <img
              src={`http://localhost:9090/api/doctors/image/${doc.profilePic}`}
              alt={doc.name}
              className="w-full h-36 object-cover rounded-xl"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                Dr. {doc.name}
              </h2>
              <p className="text-xs text-gray-600 capitalize">
                Department: {doc.depart?.name || "N/A"}
              </p>
              <p className="text-xs text-gray-600">
                Experience: {doc.experience} years
              </p>
              <button
                onClick={() => handleBook(doc._id)}
                className="mt-3 bg-indigo-600 text-white text-sm px-3 py-1.5 rounded hover:bg-indigo-700 w-full"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}

        {doctors.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No doctors available.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;
