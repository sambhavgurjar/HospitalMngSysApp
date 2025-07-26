import { Routes, Route } from "react-router-dom";
import { lazy ,Suspense} from "react";
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/Login"));
const DoctorReg = lazy(() => import("../pages/registration/DoctorReg"));
const PatientReg = lazy(() => import("../pages/registration/PatientReg"));

export default function GeneralRoute() {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <Routes>
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register/doctor" element={<DoctorReg />} />
              <Route path="register/patient" element={<PatientReg />} />

      </Routes>
   </Suspense>
  );
}