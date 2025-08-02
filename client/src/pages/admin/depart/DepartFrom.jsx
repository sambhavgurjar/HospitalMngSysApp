import React, { useState, useEffect } from "react";
import axios from "../../../services/axios";
const DepartForm = ({ initialData, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    departid: "",
    name: "",
    hod: "",
    email: "",
    contact: "",
    isActive: "",
  });
  const [doc, setDoc] = useState([]);
  async function fetchDoc() {
    try {
      let res = await axios.get("/doctors");
      console.log(res.data);

      setDoc(res?.data?.data);
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to fetch doctor data");
    }
  }

  useEffect(() => {
    fetchDoc();
    if (initialData) setFormData({ ...initialData, hod: initialData.hod._id });
  }, [initialData, setDoc]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialData) {
      onSubmit({ ...formData, _id: initialData?._id }, "update");
    } else {
      onSubmit({ ...formData, _id: initialData?._id }, "newDepart");
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h3 className="text-xl font-semibold mb-4">
          {initialData ? "Edit Department" : "Add New Department"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          {initialData?.departid && (
            <input
              type="number"
              name="departid"
              placeholder="Department ID"
              value={formData.departid}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              readOnly
            />
          )}
          <input
            type="text"
            name="name"
            placeholder="Department Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <select
            name="hod"
            id="hod"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            value={formData.hod}
            required
          >
            <option value="">Select HOD</option>
            {doc.length > 0 &&
              doc.map((d) => <option value={d._id}>{d.name}</option>)}
          </select>
          <select
            name="isActive"
            id="isActive"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            value={formData.isActive}
            required
          >
            <option value="">Select Status</option>
            <option value={true}>Active</option>
            <option value={false}>Deactive</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            pattern="\d{10}"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartForm;
