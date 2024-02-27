import Swal from "sweetalert2";

export const formsValidator = (e) => {
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      Swal.fire({
        title: "Please enter the required information.",
        color: "black",
        background: "white",
        confirmButtonColor: "#0d6efd",
      });
      e.preventDefault();
      return (e.status = false);
    } else {
      e.preventDefault();
      return (e.status = true);
    }
  });
};
