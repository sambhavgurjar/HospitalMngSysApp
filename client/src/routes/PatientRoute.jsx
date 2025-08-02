import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const PatientHome = lazy(() => import("../pages/home/PatientHome"));


export default function PatientRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="home" element={<PatientHome />} />
      </Routes>
    </Suspense>
  );
}