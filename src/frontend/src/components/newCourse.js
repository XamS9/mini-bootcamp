import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import GetData from "../apis/getData.api";
import PostData from "../apis/postData.api";
import { formsValidator } from "./inputValidator";

function NewCourse() {
  const [data, setData] = useState({ name: "", description: "", image: ""});
  const titles = [
    "Name",
    "Description",
    "Image",
    "Category",
    "Subcategory",
    "Topic",
  ];
  const [categories, setCategories] = useState([]);
  const [subCategories, setsubCategories] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleSubmit = async (e) => {
    formsValidator(e);
    if (e.status) {
      const formData = new FormData()
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('image', data.image)
      await PostData(
        "/courses/" + document.getElementById("topic").value,
        formData
      ).then((res) => {
        if(res.ok){
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

  const handleImage = async (e) => {
    setData({...data, [e.target.name]: e.target.files[0]})
  }

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
        <h2 className="form-group mb-2">Create course</h2>
        <form id="form" onSubmit={handleSubmit} className="needs-validation" noValidate>
          {titles != null
            ? titles.map((title, index) => {
                return (
                  <div className="form-group mb-2" key={index}>
                    <label className="form-label">{title}</label>
                    {title === "Image" ? (
                      <input
                        name={title.toLowerCase()}
                        type="file"
                        className="form-control"
                        onChange={handleImage}
                        required
                      ></input>
                    ) : title === "Category" ? (
                      <select
                        required
                        onClick={(e) =>
                          GetData("/categories").then((data) =>
                            setCategories(data)
                          )
                        }
                        onChange={(e) =>
                          GetData(
                            "/subcategoriesbycatid/" +
                              document.getElementById("categories").value
                          )
                            .then((data) => setsubCategories(data))
                            .then(handleChange(e))
                        }
                        className="form-select"
                        id="categories"
                        name="categoryId"
                      >
                        <option selected disabled value="">
                          Select one category
                        </option>
                        {categories != null
                          ? categories.map((category) => (
                              <option
                                onClick={(e) =>
                                  GetData(
                                    "/subcategoriesbycatid/" + category.id
                                  ).then((data) => setsubCategories(data))
                                }
                                value={category.id}
                              >
                                {category.name}
                              </option>
                            ))
                          : null}
                      </select>
                    ) : title === "Subcategory" ? (
                      <select
                        required
                        name="subcategoryId"
                        id="subcategories"
                        className="form-select"
                        onChange={(e) =>
                          GetData(
                            "/topicsbysubid/" +
                              document.getElementById("subcategories").value
                          )
                            .then((data) => setTopics(data))
                            .then(handleChange(e))
                        }
                      >
                        <option selected disabled value="">
                          Select category first
                        </option>
                        {subCategories != null
                          ? subCategories.map((subCategory) => (
                              <option
                                onClick={(e) =>
                                  GetData(
                                    "/topicsbysubid/" + subCategory.id
                                  ).then((data) => setTopics(data))
                                }
                                value={subCategory.id}
                              >
                                {subCategory.name}
                              </option>
                            ))
                          : null}
                      </select>
                    ) : title === "Topic" ? (
                      <select
                        required
                        name="topicId"
                        id="topic"
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option selected disabled value="">
                          Select subcategory first
                        </option>
                        {topics != null
                          ? topics.map((topic) => (
                              <option value={topic.id}>{topic.name}</option>
                            ))
                          : null}
                      </select>
                    ) : (
                      <input
                        name={title.toLowerCase()}
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
              })
            : null}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewCourse;
