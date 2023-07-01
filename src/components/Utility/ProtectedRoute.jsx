import { useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute({ user, role, children, href = "/" }) {
  const [USER_EXIST] = useState(() => Cookies.get("is_user_logged"));
  const [USER_ROLE] = useState(() => Cookies.get("user_role"));

  if (user !== undefined) {
    if (user === "true" && USER_EXIST !== "true")
      return <Navigate to={href} replace />;

    if (user === "false" && USER_EXIST !== "false")
      return <Navigate to={href} replace />;
  }

  if (role !== undefined) {
    if (USER_ROLE === undefined) return <Navigate to={href} replace />;

    if (role === "admin" && USER_ROLE !== "admin")
      return <Navigate to={href} replace />;

    if (role === "user" && USER_ROLE !== "user")
      return <Navigate to={href} replace />;
  }

  return children;
}
