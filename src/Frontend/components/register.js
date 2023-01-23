import "../css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterForm() {
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
              required
            ></input>
            <div class="invalid-feedback">Please write your name.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="form-control"
              required
            ></input>
            <div class="invalid-feedback">Please write your last name.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="email.example@abc.com"
              className="form-control"
              required
            ></input>
            <div class="invalid-feedback">Please write your email.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
            ></input>
            <div class="invalid-feedback">Please write a valid password.</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" required></input>
            <div class="invalid-feedback">Please put your date of birth.</div>
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
