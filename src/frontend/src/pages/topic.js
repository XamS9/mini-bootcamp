import "bootstrap/dist/css/bootstrap.min.css";
import CoursesCard from "../components/coursesCards";
import GetData from "../apis/getData.api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/loginContext";
import { useParams } from "react-router-dom";

function Topic() {
  const context = useContext(AppContext)
  const { id } = useParams()
  const [courses, setCourses] = useState([]);
  const [topic, setTopic] = useState([])

  useEffect(() => {
    GetData("/coursesbytopic/" + id).then((data) =>{
      setCourses(data);
    })
    GetData("/topics/" +id).then((data) =>{
        setTopic(data)
    })
  }, [id]);
  return (
    <div className="container">
      <h1 className="text-bg-dark text-center rounded">{topic.name}</h1>
      <h4>{topic.description}</h4>
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <CoursesCard courses={courses} />
        </div>
      </div>
    </div>
  );
}

export default Topic;
