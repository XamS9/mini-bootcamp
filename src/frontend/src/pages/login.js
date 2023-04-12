import "../css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import LoginApi from "../apis/login.api";
import { formsValidator } from "../components/inputValidator";
import { Link } from "react-router-dom";

function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handleSubmit = async (e) => {
    await formsValidator(e);
    if (e.status) {
      await LoginApi(user);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 p-2">
      <div className="login border border-primary">
        <h2 className="form-group ">Login</h2>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-2">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              value={user.email}
              onChange={handleChange}
            ></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              minLength={"6"}
              value={user.password}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Please enter your password</div>
          </div>
          <Link to="/reset-password" className="d-flex align-items-center justify-content-center nav-link">Forgot password?</Link>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Sign In
          </button>
          <Link to={'/register'}>
          <button type="submit" className="btn btn-secundary w-100 mt-2">
            Create new account
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
