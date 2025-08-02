import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, userRole }) {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("No token found.");
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    console.log("Decoded Token:", decoded);

    if (decoded?.role === userRole) {
      return children;
    } else {
      console.warn(`Role mismatch: expected ${userRole}, got ${decoded.role}`);
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    console.error("JWT decode failed:", err);
    return <Navigate to="/login" replace />;
  }
}
