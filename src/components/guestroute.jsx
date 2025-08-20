// src/components/GuestRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authcontext";

export default function GuestRoute({ children, redirectTo = "/dashboard" }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children;
}