import "../css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [born, setBorn] = useState("");

  function regUser() {
    let user = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      born: born
    };
    console.log(user)
    fetch('http://localhost:3001/users', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => console.log(data))
   }
   

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="form-group mb-2">Register</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please write your name.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please write your last name.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="email.example@abc.com"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please write your email.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please write a valid password.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={born}
              onChange={(e) => {
                setBorn(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please put your date of birth.</div>
          </div>
          <button
            type="submit"
            onClick={regUser}
            className="btn btn-primary mt-2"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
