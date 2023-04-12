import Swal from "sweetalert2";

async function RegisterApi(e, user, password2) {
  try {
    e.preventDefault();
    if (user.password !== password2) {
      Swal.fire({
        title: "Please write the confirm password correctly.",
        color: "black",
        background: "white",
        confirmButtonColor: "#0d6efd",
      });
    } else {
      fetch(window.env.URL+"/users", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      }).then(async (res) => {
        if (res.status === 409) {
          Swal.fire({
            title: "This email already exist",
            color: "black",
            background: "white",
            confirmButtonColor: "#0d6efd",
          });
          return e.target.email.value=("")
        } else {
          await Swal.fire({
            title: "Account created succesfully.",
            timer: 1400,
            confirmButtonColor: "#0d6efd"
          });
          return window.location.href = '/login'
        }
      });
    }
  } catch (error) {
    return console.log(error);
  }
}

export default RegisterApi;