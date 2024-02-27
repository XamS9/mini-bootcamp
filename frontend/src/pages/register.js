import "../css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { formsValidator } from "../components/inputValidator";
import RegisterApi from "../apis/register.api";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    born: "",
    role: ""
  });
  const [password2, setPassword2] = useState("");
  const handleChange = async (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handleSubmit = async (e) => {
    await formsValidator(e);
    if (e.status) {
      await RegisterApi(e, user, password2);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-2 p-2">
      <div className="login border border-primary">
        <h2 className="form-group mb-2">Register</h2>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-2">
            <label className="form-label">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              pattern="[A-Za-z]{0,}"
              value={user.name}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Please write your name.</div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="form-control"
              pattern="[A-Za-z]{0,}"
              value={user.lastName}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Please write your last name.</div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email-example@abc.com"
              className="form-control"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={user.email}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Please write your email.</div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              minLength={"6"}
              value={user.password}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">
              Please write a valid password.
            </div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              minLength={"6"}
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">
              Please confirm your password.
            </div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="born"
              className="form-control"
              value={user.born}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">
              Please put your date of birth.
            </div>
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Role</label><br/>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="inlineRadio1"
                value="student"
                onChange={handleChange}
                required
              ></input>
              <label className="form-check-label" htmlFor="inlineRadio1">
                Student
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="inlineRadio2"
                value="author"
                onChange={handleChange}
              ></input>
              <label className="form-check-label" htmlFor="inlineRadio2">
                Author
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Sign up
          </button>
          <Link to={"/login"}>
            <button type="submit" className="btn btn-secundary mt-2">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
