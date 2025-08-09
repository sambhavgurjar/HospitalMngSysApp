import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const DoctorHome = lazy(() => import("../pages/home/DoctorHome"));
const DoctorNav = lazy(() => import("../components/layout/navbar/DoctorNav"));
const DoctorAppoint = lazy(() => import("../pages/Doctor/DoctorAppoint"));
const DoctorPatient = lazy(() => import("../pages/Doctor/DoctorPatient"));
export default function DoctorRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorNav />
      <Routes>
        <Route path="home" element={<DoctorHome />} />
        <Route path="appointments" element={<DoctorAppoint />} />
        <Route path="patients" element={<DoctorPatient />} />
        {/* <Route path="profile" element={<DoctorProfile />} /> */}
      </Routes>
    </Suspense>
  );
}
