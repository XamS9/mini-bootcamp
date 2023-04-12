import { Modal, Button } from "react-bootstrap";
import UpdateData from "../apis/updateData.api";
import {formsValidator} from "../components/inputValidator";
import { useState } from "react";
import Swal from "sweetalert2";
import { delToken } from "../helpers/localStorage.helper";
export default function PasswordModal({ show, handleClose }) {
  const [password, setPassword] = useState({password: "", confirm: ""});

  const handleChange = async (e) => {
    const value = e.target.value;
    setPassword({
      ...password,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    await formsValidator(e);
    if (e.status) {
      if (password.password !== password.confirm) {
        Swal.fire({
            title: "Please write the confirm password correctly.",
            color: "black",
            background: "white",
            confirmButtonColor: "#0d6efd",
          });
      } else {
        await UpdateData("/self", password).then(Swal.fire({
            title: "Password changed!",
            text: "",
            icon: "success",
            confirmButtonColor: "#0d6efd",
          }).then((result) => {
            delToken();
            window.location.href="/login"
          }));
      }
    }
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modify password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="needs-validation">
          <div className="form-group mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              minLength={"6"}
              value={password.password}
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
              name="confirm"
              placeholder="Confirm password"
              className="form-control"
              minLength={"6"}
              value={password.confirm}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">
              Please confirm your password.
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={(e) => handleSubmit(e)}>
          Save
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
