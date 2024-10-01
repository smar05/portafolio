import React from "react";
import { Navigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? children : <Navigate to={EnumPages.HOME} />;
};

export default PrivateRoute;
