import { useAuth } from "../auth/authcontext";

export default function Protected({ children, fallback = null }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : (fallback ?? null);
}
