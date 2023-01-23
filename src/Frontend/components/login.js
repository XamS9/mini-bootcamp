import "../css/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="form-group mb-2">Login</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            ></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group was-validated  mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            ></input>
            <div className="invalid-feedback">Please enter your password</div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
