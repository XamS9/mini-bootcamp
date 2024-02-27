import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./black.png";
import { AppContext } from "../context/loginContext";
import { delToken } from "../helpers/localStorage.helper";
import { UserDropDownButton } from "./dropDownbtn";
import { CategoriesDrop } from "./DropDownCategories";
import GetData from "../apis/getData.api";

function Header() {
  const context = useContext(AppContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GetData('/categories').then((data) =>{
      setCategories(data);
    });
  }, [])
  function logOut() {
    delToken();
  }
  return (
    <div className="private-cont">
      {(() => {
        if (!context.userData || !context.loginState) {
          return (
            <nav className="navbar h6">
              <Link to="/home">
                <img
                  src={logo}
                  alt="Logo"
                  width="50"
                  height="50"
                  className="d-inline-block align-text-top"
                />
              </Link>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-primary">
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          );
        } else {
          return (
            <nav className="d-flex align-items-center h6">
              <div className="me-auto">
                <Link to="/home">
                  <img src={logo} alt="Logo" width="50" height="50" />
                </Link>
                <CategoriesDrop
                  name="Categories"
                  categories={categories}
                ></CategoriesDrop>
              </div>
              <div className="">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link">Hi, {context.userData.name}</a>
                  </li>
                  <li className="nav-item">
                    <UserDropDownButton logOut={logOut}></UserDropDownButton>
                  </li>
                </ul>
              </div>
            </nav>
          );
        }
      })()}
    </div>
  );
}
export default Header;
