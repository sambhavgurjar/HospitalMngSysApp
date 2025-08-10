import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null);
console.log(import.meta.env.VITE_API_URL);

  const fetchDoctorProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const decoded = jwtDecode(token);
      const doctorId = decoded.id; 

        const res = await axios.get(`/doctors/${doctorId}`);
        console.log(res.data.data);
        
      setDoctor(res?.data?.data);
    } catch (error) {
        console.error(error);
        alert(error?.response?.data?.message || "something went wrong");
    }
  };

  useEffect(() => {
    fetchDoctorProfile();
  }, []);



  if (!doctor) {
    return (
      <div className="p-4 text-center text-red-500">
        Doctor profile not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-12">
      <div className="flex items-center space-x-6">
              <img
                  src={`${import.meta.env.VITE_API_URL}/doctors/image/${doctor?.profilePic}`}
          alt={doctor?.name || "N/A"}
          className="w-32 h-32 object-cover rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold">{doctor?.name || "N/A"}</h2>
          <p className="text-gray-600">{doctor?.depart.name || "N/A"}</p>
          <p className="text-gray-500">{doctor?.qualifications || "N/A"}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p>
          <strong>Gender:</strong> {doctor?.gender || "N/A"}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(doctor?.dob || "N/A").toLocaleDateString()}
        </p>
        <p>
          <strong>Email:</strong> {doctor?.email || "N/A"}
        </p>
        <p>
          <strong>Contact:</strong> {doctor?.contact || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {doctor?.address || "N/A"}
        </p>
        <p>
          <strong>Experience:</strong> {doctor?.experience || "N/A"} years
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;
