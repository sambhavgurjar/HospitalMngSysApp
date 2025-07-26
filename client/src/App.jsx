import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import GeneralRoute from "./routes/generalRoute";

function App() {
  return (
    <>
      <Navbar />

      {/* Main content with bottom padding to avoid overlap with fixed footer */}
      <div className="pt-13 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/*" element={<GeneralRoute />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
