import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const PatientHome = lazy(() => import("../pages/home/PatientHome"));
const DoctorPage = lazy(() => import("../pages/Doctor/DoctorPage"));
const AppointForm = lazy(() => import("../pages/Appointment/AppointForm"));
const PatientAppoint = lazy(() => import("../pages/patient/PatientAppoint"));


export default function PatientRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="home" element={<PatientHome />} />
        <Route path="doctors" element={<DoctorPage />} />
        <Route path="appointment/new/:docid" element={<AppointForm />} />
        <Route path="appointments" element={<PatientAppoint />} />
      </Routes>
    </Suspense>
  );
}