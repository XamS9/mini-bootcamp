import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { AppContext } from "../context/loginContext";
import PostData from "../apis/postData.api";

function CourseCarousel() {
    const context = useContext(AppContext);
    let courses = context.suscribedCourses;
    console.log(courses)
  return (
    <div
      id="carousel"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        {courses
          ? courses.map((course, index) => {
              if (index > 0) {
                return (
                  <>
                    <div class="carousel-item active" key={index}></div>
                    <img class="d-block w-100" src={course.image} alt={course.name}></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{course.name}</h5>
                      <p>{course.description}</p>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div class="carousel-item" key={index}></div>
                    <img class="d-block w-100" src={course.image} alt={course.name}></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{course.name}</h5>
                      <p>{course.description}</p>
                    </div>
                  </>
                );
              }
            })
          : null}
      </div>
      <a
        class="carousel-control-prev"
        role="button"
        data-slide="prev"
        data-bs-target="carousel"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        data-bs-target="carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CourseCarousel;
