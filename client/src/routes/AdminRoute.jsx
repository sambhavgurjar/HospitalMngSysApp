import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const AdminHome = lazy(() => import("../pages/home/AdminHome"));
const DepartPage = lazy(() => import("../pages/admin/depart/DepartPage"));
// const AdminDoctors = lazy(() => import("../pages/doctors/AdminDoctors"));
// const AdminPatients = lazy(() => import("../pages/patients/AdminPatients"));
// const AdminAppointments = lazy(() => import("../pages/appointments/AdminAppointments"));
// const AdminReports = lazy(() => import("../pages/reports/AdminReports"));

export default function AdminRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="home" element={<AdminHome />} />
        <Route path="departments" element={<DepartPage />} />
        {/* <Route path="doctors" element={<AdminDoctors />} />
        <Route path="patients" element={<AdminPatients />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="reports" element={<AdminReports />} /> */}
      </Routes>
    </Suspense>
  );
}
