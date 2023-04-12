import "bootstrap/dist/css/bootstrap.min.css";
import CoursesCard from "../components/coursesCards";
import GetData from "../apis/getData.api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/loginContext";
import { useParams } from "react-router-dom";

function Subcategory() {
  const context = useContext(AppContext)
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [subCategory, setsubCategory] = useState([])
  useEffect(() => {
    GetData("/coursesbysubcat/" + id).then((data) =>{
      setCourses(data);
    })
    GetData("/subcategories/" + id).then((data) =>{
        setsubCategory(data);
    })
  }, [id]);
  return (
    <div className="container">
      <h1 className="text-bg-dark text-center rounded">{subCategory.name}</h1>
      <h4>{subCategory.description}</h4>
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </div>
  );
}

export default Subcategory;
