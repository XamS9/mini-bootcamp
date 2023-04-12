import { useState } from "react";
import PostJSONData from "../apis/postGenData";
import { formsValidator } from "./inputValidator";
import Swal from "sweetalert2";
function NewCategory() {
  const [data, setData] = useState("");

  const categoryTitles = ["Name", "Description"];

  const handleSubmit = async (e) => {
    await formsValidator(e);
    if (e.status) {
      await PostJSONData("/categories", data).then((res) => {
        if (res.ok)Swal.fire({
          title: "Created!",
          text: "",
          icon: "success",
          confirmButtonColor: "#0d6efd"
        }); ;
      });
    }
  };

  const handleChange = async (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="w-75">
        <h2 className="form-group mb-2">Create category</h2>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="needs-validation"
          noValidate
        >
          {categoryTitles.map((title, index) => {
                return (
                  <div className="form-group mb-2" key={index}>
                    <label className="form-label">{title}</label>
                    <input
                      name={title.toLowerCase()}
                      placeholder={title}
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Please add the {title.toLowerCase()}.
                    </div>
                  </div>
                );
              })}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewCategory;
