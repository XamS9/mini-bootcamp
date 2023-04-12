import "../css/sectionsSidebarstyles.css";
import { useEffect, useState } from "react";
import GetData from "../apis/getData.api";

function SectionSideBar({ id, name }) {
  const [sections, setSections] = useState([]);
  const [content, setContent] = useState([]);
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    GetData("/sectionsbycourseid/" + id).then((data) => {
      setSections(data);
      if (data[0]) setContent(data[0]);
    });
  }, [id]);

  const SidebarToggler = (e) => {
      e.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      setExpanded(!expanded)
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">{name}</div>
        <div className="list-group list-group-flush">
          {sections.length > 0
            ? sections.map((section, index) => {
                if (index === 0) {
                  return (
                    <button
                      autoFocus
                      className="list-group-item list-group-item-action list-group-item-light p-3"
                      key={section.id}
                      onClick={(e) =>
                        GetData("/sections/" + section.id).then((data) =>
                          setContent(data)
                        )
                      }
                    >
                      {index + 1}.{section.name}
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="list-group-item list-group-item-action list-group-item-light p-3"
                      key={section.id}
                      onClick={(e) =>
                        GetData("/sections/" + section.id).then((data) =>
                          setContent(data)
                        )
                      }
                    >
                      {index + 1}.{section.name}
                    </button>
                  );
                }
              })
            : "No sections availables"}
        </div>
      </div>
      <div id="page-content-wrapper">
      <button
            onClick={SidebarToggler}
            className="btn btn-secundary"
            id="sidebarToggle"
          >
            {expanded ? <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg>}
            
          </button>
        <div className="container-fluid">
          <h1 className="mt-4">{content.name}</h1>
          <p className="d-flex justify-content-center">{content.body}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionSideBar;
