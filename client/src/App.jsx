import "./App.css";
import { Routes, Route } from "react-router-dom";
import{lazy, Suspense} from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
const Navbar = lazy(() => import("./components/layout/navbar/Navbar"));
const Footer = lazy(() => import("./components/layout/footer/Footer"));
const PatientNav = lazy(() => import("./components/layout/navbar/PatientNav"));
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
              <PatientRoute />
              <Footer />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/doctor/*"
          element={
            <ProtectedRoute userRole="doctor">
              <DoctorRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute userRole="admin">
              <AdminRoute />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/*" element={<>
          <Navbar />
          <GeneralRoute />
          <Footer />
        </>} />
      </Routes>
    </>
  );
}

export default App;
