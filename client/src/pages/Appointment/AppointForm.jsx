import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../services/axios";
import { jwtDecode } from "jwt-decode";

const AppointForm = () => {
  const { docid } = useParams();
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [today] = useState(new Date().toISOString().split("T")[0]);
  const [formData, setFormData] = useState({
    patient: "",
    date: "",
    timeSlot: "",
    reason: "",
  });

  async function fetchDoc(id) {
    try {
      let doc = await axios.get(`/doctors/${id}`);
      if (doc?.data?.data) setDoctor(doc.data.data);
    } catch (err) {
      console.error(err);
      alert(
        err?.response?.data?.message ||
          "something went wrong,try after some time"
      );
    }
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    let patientData = jwtDecode(token);
    if (patientData) {
      // console.log(patientData);
      setPatient(patientData);
    }
    if (docid) {
      // console.log(docid);
      fetchDoc(docid);
    }
  }, [docid]);

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formData, doctor: docid, patient: patient.id };
    try {
      let res = await axios.post("/appointments", data);
      alert(res?.data?.message || "Appointment booked successfully.");
    } catch (err) {
      console.error(err);
      alert("Appointment booking faild!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-2xl max-w-xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Book Appointment
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Doctor
        </label>
        <input
          type="text"
          name="doctor"
          value={doctor?.name || "N/A"}
          readOnly
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Appointment Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={today}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time Slot
        </label>
        <select
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Time Slot --</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Reason (optional)
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Symptoms, request, or other notes..."
          maxLength={500}
          className="w-full p-2 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Confirm Appointment
      </button>
    </form>
  );
};

export default AppointForm;
