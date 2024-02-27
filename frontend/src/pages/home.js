import "bootstrap/dist/css/bootstrap.min.css";
import CoursesCard from "../components/coursesCards";
import GetData from "../apis/getData.api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/loginContext";

function Home() {
  const context = useContext(AppContext)
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    GetData("/courses").then((data) =>{
      setCourses(data);
    })
  }, [context.refresh]);
  return (
    <div className="container">
      <h1 className="text-bg-dark text-center rounded">Learn everything</h1>
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </div>
  );
}

export default Home;
