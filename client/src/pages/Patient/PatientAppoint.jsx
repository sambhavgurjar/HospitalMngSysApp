import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const PatientAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState("");

  const fetchAppointments = async (id) => {
    try {
        const res = await axios.get(`/appointments/patient/${id}`);
        
      setAppointments(res.data.data);
    } catch (error) {
      console.error("Failed to fetch appointments", error);
    }
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    let pData = jwtDecode(token);
    console.log(pData);
    if (pData) {
      setPatient(pData);
    }
  }, []);

    useEffect(() => {
        if (patient) {
            console.log(patient);
            
            fetchAppointments(patient.id);
        }
  }, [patient]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Appointment List
      </h1>

      {appointments.length !== 0 && (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Patient
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Doctor
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Time Slot
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appointments.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.appointid}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.patient?.name || "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.doctor?.name || "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {new Date(app.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.timeSlot}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                        app.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : app.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : app.status === "completed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.reason || "-"}
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

export default PatientAppoint;
