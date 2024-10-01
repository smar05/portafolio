import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { BackService } from "../services/back";

interface PrivateRouteProps {
  children: JSX.Element;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  setIsAuthenticated,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token: string = localStorage.getItem("token") || (null as any);

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response: boolean = await BackService.validateToken();
        setIsAuthenticated(response);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [setIsAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={EnumPages.HOME} />;
  }

  return children;
};

export default PrivateRoute;
