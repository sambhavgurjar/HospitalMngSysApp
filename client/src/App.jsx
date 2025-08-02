import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
const Navbar = lazy(() => import("./components/layout/navbar/Navbar"));
const Footer = lazy(() => import("./components/layout/footer/Footer"));
const PatientNav = lazy(() => import("./components/layout/navbar/PatientNav"));
const DoctorRoute = lazy(() => import("./routes/DoctorRoute"));
const DoctorNav = lazy(() => import("./components/layout/navbar/DoctorNav"));
const AdminNav = lazy(() => import("./components/layout/navbar/AdminNav"));
const AdminRoute = lazy(() => import("./routes/AdminRoute"));
import PatientRoute from "./routes/PatientRoute";

import GeneralRoute from "./routes/generalRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/patient/*"
          element={
            <ProtectedRoute userRole="patient">
              <PatientNav />
              <div className="pt-13 min-h-screen bg-gray-50">
                <Suspense fallback={<div>Loading...</div>}>
                  <GeneralRoute />
                </Suspense>
                <PatientRoute />
              </div>
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor/*"
          element={
            <ProtectedRoute userRole="doctor">
              <DoctorNav />
              <div className="pt-13 min-h-screen bg-gray-50">
                <Suspense fallback={<div>Loading...</div>}>
                  <DoctorRoute />
                </Suspense>
              </div>
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute userRole="admin">
              <AdminNav />
              <div className="pt-13 min-h-screen bg-gray-50">
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminRoute />
                </Suspense>
              </div>
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="pt-13 min-h-screen bg-gray-50">
                <Suspense fallback={<div>Loading...</div>}>
                  <GeneralRoute />
                </Suspense>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
