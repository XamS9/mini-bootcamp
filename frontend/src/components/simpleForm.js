import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/loginContext";
import UpdateData from "../apis/updateData.api";
import PasswordModal from "./changePasswordModal";
import UserData from "../apis/userData.api";

function SimpleForm() {
  const context = useContext(AppContext);
  const editable = ["name", "lastName", "born"];
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const handleChange = async (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    UserData(setUser);
  }, []);
  const disableInput = (e) => {
    e.preventDefault();
    document.getElementById("cancel").classList.add("invisible");
    setUser(context.userData);
    document.getElementById("modifypassword").classList.add("invisible");
    document.getElementById("save").classList.add("invisible");
    document.getElementById("edit").classList.remove("invisible");
    const inputs = document.getElementsByTagName("input");
    Array.from(inputs).forEach((element) => {
      if (editable.includes(element.name)) element.disabled = true;
    });
  };

  const enableInput = (e) => {
    e.preventDefault();
    document.getElementById("cancel").classList.remove("invisible");
    document.getElementById("modifypassword").classList.remove("invisible");
    document.getElementById("save").classList.remove("invisible");
    document.getElementById("edit").classList.add("invisible");
    const inputs = document.getElementsByTagName("input");
    Array.from(inputs).forEach((element) => {
      if (editable.includes(element.name)) element.disabled = false;
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <PasswordModal handleClose={handleClose} show={show}></PasswordModal>
      <div className="login border border-primary">
        <h2 className="form-group mb-2">
          User Data
        </h2>
        <form className="needs-validation" noValidate>
          {context.loginState
            ? Object.keys(context.userData).map((key, index) => {
                return (
                  <div className="form-group mb-2" key={index}>
                    <label className="form-label">
                      {String(key.toUpperCase())}
                    </label>
                    {key === "born" ? (
                      <input
                        disabled
                        name={key}
                        type="date"
                        className="form-control"
                        value={user[key]}
                        onChange={handleChange}
                        required
                      ></input>
                    ) : (
                      <input
                        disabled
                        name={key}
                        type="text"
                        className="form-control disabledInput"
                        pattern="[A-Za-z]{0,}"
                        value={user[key] ?? ""}
                        onChange={handleChange}
                        required
                      ></input>
                    )}
                    <div className="invalid-feedback">
                      Please add your {[key]}.
                    </div>
                  </div>
                );
              })
            : null}

          <button
            className="btn btn-outline-success invisible"
            id="save"
            onClick={(e) => UpdateData("/self", user)}
          >
            Save
          </button>
          <button
            className="btn btn-outline-primary invisible m-1"
            id="modifypassword"
            onClick={(e) => handleShow(e)}
          >
            Modify password
          </button>
          <button
            className="btn btn-outline-danger invisible"
            id="cancel"
            onClick={(e) => disableInput(e)}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline-dark m-2"
            id="edit"
            onClick={(e) => enableInput(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
export default SimpleForm;
