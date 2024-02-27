import { useState } from "react";
import Swal from "sweetalert2";
import GetData from "../apis/getData.api";
import PostJSONData from "../apis/postGenData";
import { formsValidator } from "./inputValidator";
function NewTopic() {
  const initialState = {name: "", description: ""};
  const [data, setData] = useState(initialState);
  const [depends, setDepends] = useState([]);
  const titles = ["Name", "Description", "Subcategory"];
  const handleSubmit = async (e) => {
    await formsValidator(e);
    if (e.status) {
      await PostJSONData(
        "/topics/" + document.getElementById("dependid").value,
        data
      ).then((res) => {
        if (res.ok) {
          setData(initialState);
          Swal.fire({
            title: "Created!",
            text: "",
            icon: "success",
            confirmButtonColor: "#0d6efd"
          });
        }
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
        <h2 className="form-group mb-2">Create topic</h2>
        <form
          id="form"
          onSubmit={handleSubmit}
          className="needs-validation"
          noValidate
        >
          {titles.map((title, index) => {
            return (
              <div className="form-group mb-2" key={index}>
                <label className="form-label">{title}</label>
                {index === 2 ? (
                  <select
                    className="form-select"
                    id="dependid"
                    required
                    onClick={(e) =>
                      GetData("/subcategories").then((data) => setDepends(data))
                    }
                  >
                    <option disabled selected>
                      Select one subcategory
                    </option>
                    {depends != null
                      ? depends.map((depend) => (
                          <option value={depend.id}>{depend.name}</option>
                        ))
                      : null}
                  </select>
                ) : (
                  <input
                    name={title.toLowerCase()}
                    placeholder={title}
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    required
                  ></input>
                )}
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

export default NewTopic;
