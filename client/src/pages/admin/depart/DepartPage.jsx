import React, { useState, useEffect } from "react";
import DepartForm from "./DepartFrom";
import axios from "../../../services/axios";

const DepartPage = () => {
  const [departments, setDepartments] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  async function fetchDepartments() {
    try {
      let res = await axios.get("/departments");
      setDepartments(res?.data?.data || []);
    } catch (error) {
      console.error("Error fetching departments:", error);
      alert(error?.response?.data?.message || "Failed to fetch departments");
    }
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleAdd = () => {
    setEditData(null);
    setModalOpen(true);
  };

  const handleEdit = (dept) => {
    setEditData(dept);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );
    if (confirmDelete) {
      try {
        let response = await axios.delete(`/departments/${id}`);
        alert(response?.data?.message || "Department deleted successfully");
        setDepartments((prev) => prev.filter((d) => d._id !== id));
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to delete department");
      }
    }
  };

  const handleFormSubmit = async (formData, action) => {
    try {
      if (action === "update") {
        let res = await axios.put(`/departments/${formData._id}`, formData);
        alert(res?.data?.message || "Department updated successfully");
      } else {
        let res = await axios.post("/departments", formData);
        alert(res?.data?.message || "Department added successfully");
      }
      fetchDepartments();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error?.response?.data?.message || "Failed to submit department data"
      );
    }
    setModalOpen(false);
  };

  // Filtered list based on search input
  const filteredDepartments = departments.filter((dept) => {
    const idMatch = dept.departid
      .toString()
      .toLowerCase()
      .includes(searchId.toLowerCase());

    const nameMatch = dept.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    return idMatch && nameMatch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Departments</h2>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add New
        </button>
      </div>

      {/* Search Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Department ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">HOD</th>
              <th className="p-3">Email</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.map((dept) => (
              <tr key={dept._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{dept.departid}</td>
                <td className="p-3">{dept.name}</td>
                <td className="p-3">{dept.hod.name}</td>
                <td className="p-3">{dept.email}</td>
                <td className="p-3">{dept.contact}</td>
                <td className="p-3">{dept.isActive?"Active":"Deactive"}</td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(dept)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dept._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredDepartments.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No departments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <DepartForm
          initialData={editData}
          onClose={() => setModalOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default DepartPage;
