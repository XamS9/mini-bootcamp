import { Dropdown } from "bootstrap";
import { useContext, useState } from "react";
import GetData from "../apis/getData.api";
import { Link } from "react-router-dom";
import { AppContext } from "../context/loginContext";

export function CategoriesDrop({ categories, name }) {
  const context = useContext(AppContext);
  const [subcategories, setsubCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  return (
    <div className="btn-group p-1">
      <button
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        {name}
      </button>
      <ul className="dropdown-menu">
        {categories != null
          ? categories.map((category) => (
              <li key={category.id} className="btn-group dropend">
                <Link
                  to={"/category/" + category.id}
                  className="btn dropdown-item"
                >
                  {category.name}
                </Link>
                <button
                  className="btn dropdown-item dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  onClick={(e) => {
                    GetData("/subcategoriesbycatid/" + category.id).then(
                      (data) => {
                        setsubCategories(data);
                      }
                    );
                  }}
                ></button>
                <ul className="dropdown-menu">
                  {subcategories != null
                    ? subcategories.map((subcategory) => (
                        <li key={subcategory.id} className="btn-group dropend">
                          <Link
                            to={"/subcategory/" + subcategory.id}
                            className="btn dropdown-item"
                          >
                            {subcategory.name}
                          </Link>
                          <button
                            className="btn dropdown-item dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-auto-close="outside"
                            onClick={(e) => {
                              GetData("/topicsbysubid/" + subcategory.id).then(
                                (data) => {
                                  setTopics(data);
                                }
                              );
                            }}
                          ></button>
                          <ul className="dropdown-menu">
                            {topics != null
                              ? topics.map((topic) => (
                                  <li
                                    key={topic.id}
                                    onClick={() =>
                                      context.setRefresh(context.refresh + 1)
                                    }
                                  >
                                    <Link
                                      to={"/topic/" + topic.id}
                                      className="btn dropdown-item"
                                    >
                                      {topic.name}
                                    </Link>
                                  </li>
                                ))
                              : null}
                          </ul>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            ))
          : "There's no categories available"}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
