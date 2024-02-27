import Swal from "sweetalert2";
import {setToken} from "../helpers/localStorage.helper"

async function LoginApi(user) {
  try {
    fetch(process.env.REACT_APP_URL+"/login", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        switch(data.status){
          case 200: 
          setToken(data.data)
          window.location.href = "/home";
          break;

          case 401: Swal.fire({
            title: "Your account is disabled, please wait for being enabled",
            color: "black",
            background: "white",
            confirmButtonColor: "#0d6efd",
          });
          break;

          case 404: Swal.fire({
            title: "Something is wrong, please verify your data",
            color: "black",
            background: "white",
            confirmButtonColor: "#0d6efd",
          });
        }
      })
      } catch (error) {
    console.log(error);
  }
}
export default LoginApi;
