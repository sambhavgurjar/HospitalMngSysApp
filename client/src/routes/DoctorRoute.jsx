import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const DoctorHome = lazy(() => import('../pages/home/DoctorHome'));
import DoctorNav from '../components/layout/navbar/DoctorNav';
export default function DoctorRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DoctorNav />
      <Routes>
        <Route path="home" element={<DoctorHome />} />
        {/* <Route path="appointments" element={<DoctorAppointments />} />
        <Route path="patients" element={<DoctorPatients />} />
        <Route path="profile" element={<DoctorProfile />} /> */}
      </Routes>
    </Suspense>
  );
}
