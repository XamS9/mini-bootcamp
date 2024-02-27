import { useContext } from "react";
import SimpleForm from "../components/simpleForm";
import { AppContext } from "../context/loginContext";
import CoursesCard from "../components/coursesCards";
function Preferences() {
  const context = useContext(AppContext);
  return (
    <div className="container">
      <h1 className="text-bg-dark text-center rounded">Preferences</h1>
      <div className="row">
        <div className="col">
          <SimpleForm />
        </div>
        <div className="col">
          {context.suscribedCourses.length > 0 ? (
            <>
              <h4 className="text-center">Suscribed courses</h4>
              <CoursesCard courses={context.suscribedCourses} />
            </>
          ) : (
            <h4 className="text-center">No suscribed courses</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preferences;
