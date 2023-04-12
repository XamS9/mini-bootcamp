import { useContext, useId, useState } from "react";
import DelData from "../apis/delData.api";
import CrudModal from "./crudModal";
import Swal from "sweetalert2";
import { AppContext } from "../context/loginContext";
export default function DataTable({ Data, Titles, Name}) {
  const context = useContext(AppContext)
  const [show, setShow] = useState(false);
  const [entity, setEntity] = useState({ name: "", type: "", id: "" });
  const handleClose = () => {
    setShow(false);
    context.setRefresh(context.refresh+1);
  };
  const handleShow = (type, id) => {
    setEntity({name: Name, type: type, id: id })
    setShow(true);
  };

  return (
    <>
      <CrudModal
        show={show}
        handleClose={handleClose}
        Type={entity.type}
        Entity={entity.name}
        Id={entity.id}
      ></CrudModal>
      <h1>{Name.toUpperCase()}</h1>
      <div className="d-flex justify-content-center">
      <table className="table table-bordered text-center" key={useId()}>
        <thead>
          <tr>
            {Titles.map((title) => {
              return <th scope="col">{title}</th>;
            })}
            <th scope="col">
              <button className="btn btn-success" onClick={(e) => handleShow("create")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {Data.length > 0
            ? Data.map((data) => {
                return (
                  <tr key={data.id}>
                    {Object.keys(data).map((key) => {
                      if (key === "image")
                        return (
                          <td>
                            <img src={data[key]} width="50" height="50"></img>
                          </td>
                        );
                      if (key === "id") return <th scope="row">{data[key]}</th>;
                      else return <td>{String(data[key])}</td>;
                    })}
                    <td>
                      <button className="btn btn-warning m-1" onClick={(e) => handleShow("update", data.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      <i> </i>
                      <button
                        className="btn btn-danger"
                        onClick={(e) =>
                          Swal.fire({
                            title: "Do you want to delete " +data.name.bold()+" from " +Name.bold()+ "?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "The " +Name+ " has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#0d6efd"
                              });
                              DelData("/" + Name + "/" + data.id);
                              context.setRefresh(context.refresh+1)
                            }
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })
            : "No data available"}
        </tbody>
      </table>
      </div>
    </>
  );
}
