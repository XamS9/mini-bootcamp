import DataTable from "./dataTable";
import { AppContext } from "../context/loginContext";
import { useContext, useEffect, useState } from "react";
import GetData from "../apis/getData.api";
function DashboardSideBar() {
  const context = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState("General");
  
  let options = [
    "General",
    "Users",
    "Courses",
    "Categories",
    "Subcategories",
    "Topics",
    "Sections",
  ];

  if(context.userData.role !== "admin"){
    options = []
    options.push("Courses")
  }
  
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setsubCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [sections, setSections] = useState([]);

  const userTitle = [
    "Id",
    "Email",
    "Name",
    "Last name",
    "Date",
    "Status",
    "Role",
  ];
  const courseTitle = [
    "Id",
    "Name",
    "Description",
    "Image",
    "Status",
    "Author ID",
  ];
  const categoryTitle = ["Id", "Name", "Description"];
  const subCategoryTitle = ["Id", "Name", "Description"];
  const topicTitle = ["Id", "Name", "Description"];
  const sectionTitle = ["Course ID", "Id", "Name", "Content"];

  useEffect(() => {
    GetData("/courses").then((data) => {
      setCourses(data);
    });

    GetData("/users").then((data) => {
      setUsers(data);
    });

    GetData("/categories").then((data) => {
      setCategories(data);
    });

    GetData("/subcategories").then((data) => {
      setsubCategories(data);
    });

    GetData("/topics").then((data) => {
      setTopics(data);
    });

    GetData("/sections").then((data) => {
      setSections(data);
    });
  }, [context.refresh]);

  const SidebarToggler = (e) => {
    e.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
    setExpanded(!expanded);
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light"><b>Dashboard menu</b></div>
        <div className="list-group list-group-flush">
          {options.map((option, index) => {
            return (
              <button
                className="list-group-item list-group-item-action list-group-item-light p-3"
                key={index}
                onClick={(e) => setSelected(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div id="page-content-wrapper">
        <button
          onClick={SidebarToggler}
          className="btn btn-secundary"
          id="sidebarToggle"
        >
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-left"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
            </svg>
          )}
        </button>{" "}
        <button
          className="btn btn-secundary"
          onClick={(e) => context.setRefresh(context.refresh + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </button>
        <div className="container-fluid">
          <div className="text-center">
            {context.userData.role !== "author" ? selected === "General" ? (
              <>
                <DataTable Data={users} Titles={userTitle} Name="users" />
                <DataTable Data={courses} Titles={courseTitle} Name="courses" />
                <DataTable
                  Data={categories}
                  Titles={categoryTitle}
                  Name="categories"
                />
                <DataTable
                  Data={subCategories}
                  Titles={subCategoryTitle}
                  Name="subcategories"
                />
                <DataTable Data={topics} Titles={topicTitle} Name="topics" />
                <DataTable
                  Data={sections}
                  Titles={sectionTitle}
                  Name="sections"
                />
              </>
            ) : selected === "Users" ? (
              <>
                <DataTable Data={users} Titles={userTitle} Name="users" />
              </>
            ) : selected === "Courses" ? (
              <DataTable Data={courses} Titles={courseTitle} Name="courses" />
            ) : selected === "Categories" ? (
              <DataTable
                Data={categories}
                Titles={categoryTitle}
                Name="categories"
              />
            ) : selected === "Subcategories" ? (
              <DataTable
                Data={subCategories}
                Titles={subCategoryTitle}
                Name="subcategories"
              />
            ) : selected === "Topics" ? (
              <DataTable Data={topics} Titles={topicTitle} Name="topics" />
            ) : selected === "Sections" ? (
              <DataTable
                Data={sections}
                Titles={sectionTitle}
                Name="sections"
              />
            ) : null : <DataTable Data={courses} Titles={courseTitle} Name="courses" />}
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardSideBar;
