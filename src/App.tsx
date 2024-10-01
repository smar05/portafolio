import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EnumPages } from "./enums/EnumPages";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={EnumPages.HOME} element={<Home />} />

        <Route
          path={EnumPages.LOGIN}
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path={EnumPages.ADMIN}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
