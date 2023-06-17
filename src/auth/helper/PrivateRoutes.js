import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const accessToken = localStorage.getItem("jwt") ?? "";

  return accessToken !== "" ? children : <Navigate to="/signin" replace />;
}

export default AuthCheck;
