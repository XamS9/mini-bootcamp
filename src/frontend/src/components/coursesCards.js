import ModalGen from "./courseModal";
import { useContext, useEffect, useState } from "react";
import PostData from "../apis/postData.api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AppContext } from "../context/loginContext";
import DelData from "../apis/delData.api";

function CoursesCard({ courses }) {
  const context = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [courseData, setcourseData] = useState(null);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (id) => {
    setShow(true);
    setcourseData(id);
  };
  const handleSubmit = (id) => {
    PostData("/coursesuscribed/" + id).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "Suscribed!",
          text: "",
          icon: "success",
          confirmButtonColor: "#0d6efd",
        }).then((result) => {
          window.location.href = "/home";
          context.setRefresh(context.refresh + 1);
        });
      }
    });
  };

  return (
    <div className="row g-3">
      {courses
        ? courses.map((course) => {
            if (course.status) {
              return (
                <div key={course.id} className="col-12 col-md-6 col-lg-4">
                  <div className="card border-primary m-2">
                    <img
                      className="card-img-top"
                      src={course.image}
                      alt={course.name}
                    ></img>
                    <div className="card-body p-2">
                      <h5 className="card-title">{course.name}</h5>
                      <p className="card-text">{course.description}</p>
                      {context.suscribedCourses.some(
                        (e) => e.name === course.name
                      ) ? (
                        <>
                          <Link to={"/course/" + course.id}>
                            <button className="btn btn-success">View</button>
                          </Link>
                          <button
                            className="btn btn-danger m-1"
                            onClick={(e) =>
                              Swal.fire({
                                title:
                                  "Do you want to unsubscribe " +
                                  course.name.bold() +
                                  " course?",
                                text: "You can come back later",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#d33",
                                cancelButtonColor: "#3085d6",
                                confirmButtonText: "Yes, unsubscribe me!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  DelData("/coursesuscribed/" + course.id);
                                  Swal.fire({
                                    title: "Unsubscribed!",
                                    text:
                                      "You've been unsubscribed from " +
                                      course.name +
                                      " successfully",
                                    icon: "success",
                                    confirmButtonColor: "#0d6efd",
                                  }).then((result) => {
                                    window.location.href = "/home";
                                    context.setRefresh(context.refresh + 1);
                                  });
                                }
                              })
                            }
                          >
                            Unsubscribe
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={(e) => handleSubmit(course.id)}
                            className="btn btn-primary"
                          >
                            Subscribe
                          </button>
                          <button
                            className="btn btn-secundary"
                            onClick={(e) => handleShow(course.id)}
                          >
                            Preview
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        : "There's no courses available"}
      <ModalGen
        show={show}
        handleClose={handleClose}
        CourseData={courseData}
      ></ModalGen>
    </div>
  );
}
export default CoursesCard;
