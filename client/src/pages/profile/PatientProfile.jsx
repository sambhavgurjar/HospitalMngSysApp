import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const PatientProfile = () => {
  const [patient, setPatient] = useState(null);

  const fetchPatientProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const decoded = jwtDecode(token);
      const patientId = decoded.id; 

      const res = await axios.get(`/patients/${patientId}`);
      console.log(res.data.data);

      setPatient(res?.data?.data);
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchPatientProfile();
  }, []);

  if (!patient) {
    return (
      <div className="p-4 text-center text-red-500">
        Patient profile not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-12">
      <div className="flex items-center space-x-6">
        <img
          src={`${import.meta.env.VITE_API_URL}/patients/image/${
            patient?.profilePic
          }`}
          alt={patient?.name || "N/A"}
          className="w-32 h-32 object-cover rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-bold">{patient?.name || "N/A"}</h2>
          <p className="text-gray-600">
                      {patient?.age ? `${patient?.age} years old` : "Age - N/A"}
          </p>
          <p className="text-gray-500">Blood Group - {patient?.bloodGroup || "N/A"}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p>
          <strong>Gender:</strong> {patient?.gender || "N/A"}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {patient?.dob ? new Date(patient.dob).toLocaleDateString() : "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {patient?.email || "N/A"}
        </p>
        <p>
          <strong>Contact:</strong> {patient?.contact || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {patient?.address || "N/A"}
        </p>
        <p>
          <strong>Medical History:</strong> {patient?.medicalHistory || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default PatientProfile;
