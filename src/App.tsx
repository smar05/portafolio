import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { EnumPages } from "./enums/EnumPages";
import Admin from "./pages/Admin";
import EditAboutMe from "./pages/EditAboutMe";
import EditContact from "./pages/EditContact";
import EditEducationAndExperience from "./pages/EditEducationAndExperience";
import EditPresentation from "./pages/EditPresentation";
import EditSkills from "./pages/EditSkills";
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
        <Route
          path={EnumPages.EDIT_PRESENTATION}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditPresentation />
            </PrivateRoute>
          }
        />
        <Route
          path={EnumPages.EDIT_ABOUT_ME}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditAboutMe />
            </PrivateRoute>
          }
        />
        <Route
          path={EnumPages.EDIT_EDUCATION_AND_EXPERIENCE}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditEducationAndExperience />
            </PrivateRoute>
          }
        />
        <Route
          path={EnumPages.EDIT_SKILLS}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditSkills />
            </PrivateRoute>
          }
        />
        <Route
          path={EnumPages.EDIT_CONTACT}
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <EditContact />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to={EnumPages.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
