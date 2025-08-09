import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const DoctorPatient = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");
      const doctor = jwtDecode(token);

      const res = await axios.get(`/appointments/doctor/${doctor.id}`);
      // console.log(res.data.data);
      let appoint = res.data.data;
      let patient = [];
      appoint.forEach((app) => {
          if (patient.length > 0) {
            for (let i = 0; i < patient.length; i++) {
              if (patient[i].pid !== app.patient.pid) {
                patient.push(app.patient);
              }
            }
          } else {
                patient.push(app.patient);
              
       }
      });
      console.log(patient);
      setPatients(patient);
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to fetch patients");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Patients
      </h1>

      {patients.length === 0 ? (
        <p className="text-gray-600">No patients found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  patient ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Contact
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Gender
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {patient.pid}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {patient.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {patient.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {patient.contact}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {patient.gender}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DoctorPatient;
