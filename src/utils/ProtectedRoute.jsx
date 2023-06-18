import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../hooks";

export default function ProtectedRoute({ auth, admin, children, to = "/" }) {
  const { user } = useStore();

  const [isLogged] = useState(() => localStorage.getItem("token") != null);
  const [isAdmin] = useState(() => user?.["role"] === "admin");

  if (auth !== undefined) {
    if (!auth && isLogged) return <Navigate to={to} replace />;
  }

  if (admin !== undefined) {
    if (!admin === isAdmin) return <Navigate to={to} replace />;
  }

  return children;
}
