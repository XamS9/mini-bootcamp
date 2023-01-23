import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <div className="d-md-flex justify-content-md-end h6 gap-2">
        <a href='/login' >Login</a>
        <a href='/register' >Register</a>
    </div>
  );
}

export default Header
