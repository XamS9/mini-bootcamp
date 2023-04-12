import Swal from "sweetalert2";

async function CreateUserApi(e, user, password2) {
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
      const CreatedUser = await fetch(window.env.URL+"/users", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      }).then((res) => {
        if (res.status === 409) {
          Swal.fire({
            title: "This email already exist",
            color: "black",
            background: "white",
            confirmButtonColor: "#0d6efd",
          });
          return e.target.email.value=("")
        } else {
          Swal.fire({
            title: "Account created succesfully.",
            timer: 1400,
            confirmButtonColor: "#0d6efd"
          });
          console.log(res.status);
          return res;
        }
      });
      return CreatedUser;
    }
  } catch (error) {
    return console.log(error);
  }
}

export default CreateUserApi;