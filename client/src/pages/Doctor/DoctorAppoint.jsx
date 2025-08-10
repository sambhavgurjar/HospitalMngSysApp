import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const DoctorAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const fetchAppointments = async () => {
    try {
      let token = localStorage.getItem("token");
      let doctor = jwtDecode(token);
      if (doctor) {
        const res = await axios.get(`/appointments/doctor/${doctor.id}`);
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to fetch appointment!");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    if (!window.confirm("Want to change status?")) return;
    try {
      await axios.put(`/appointments/${id}`, { status: newStatus });
      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Failed to update status");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Filtering logic
  const filteredAppointments = appointments.filter((app) => {
    const matchesStatus = statusFilter === "" || app.status === statusFilter;
    const matchesDate =
      dateFilter === "" ||
      new Date(app.date).toISOString().split("T")[0] === dateFilter;
    return matchesStatus && matchesDate;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Appointments
      </h1>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Date
          </label>
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      {filteredAppointments.length !== 0 ? (
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
              {filteredAppointments.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.appointid}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.patient?.name || "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {new Date(app.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.timeSlot}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <select
                      value={app.status}
                      onChange={(e) =>
                        handleStatusChange(app._id, e.target.value)
                      }
                      className="px-2 py-1 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {app.reason || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No appointments match your filters.</p>
      )}
    </div>
  );
};

export default DoctorAppoint;
