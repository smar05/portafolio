import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { EnumPages } from "../enums/EnumPages";
import { BackService } from "../services/back";

interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    let valid: boolean = true;
    let emailError: string = "";
    let passwordError: string = "";

    if (!emailRegex.test(email)) {
      emailError = "Please enter a valid email address";
      setIsAuthenticated(false);
    }

    if (!passwordRegex.test(password)) {
      passwordError =
        "Password must be at least 8 characters long, include a lowercase letter, an uppercase letter, a number, and a special character.";
      setIsAuthenticated(false);
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setIsAuthenticated(false);
      return;
    }

    let autenticatedData: { autenticated: boolean; token: string } = {
      autenticated: false,
      token: null as any,
    };
    try {
      autenticatedData = (await BackService.login(email, password)).data;
    } catch (error) {
      setIsAuthenticated(false);
      return;
    }

    if (!autenticatedData.autenticated) {
      setIsAuthenticated(false);
      return;
    }

    localStorage.setItem("token", autenticatedData.token);
    setIsAuthenticated(true);
    navigate(EnumPages.ADMIN);
    return;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
