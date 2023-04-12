import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import UpdateData from "../apis/updateData.api";
import UpdateForm from "./updateForm";
import Swal from "sweetalert2";
import NewCourse from "./newCourse";
import CreateUser from "./createUser";
import NewCategory from "./newCategory";
import NewSubcategory from "./newSubcategory";
import NewTopic from "./newTopic";
import NewSection from "./newSection";
import UpdateUser from "./updateUser";
export default function CrudModal({ show, handleClose, Type, Entity, Id }) {
  const [data, setData] = useState([]);
  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{String(Type).toUpperCase()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Entity === "users" && Type === "create" ? <CreateUser /> : null}
        {Entity === "courses" && Type === "create" ? <NewCourse /> : null}
        {Entity === "categories" && Type === "create" ? <NewCategory /> : null} 
        {Entity === "subcategories" && Type === "create" ? <NewSubcategory /> : null} 
        {Entity === "topics" && Type === "create" ? <NewTopic /> : null} 
        {Entity === "sections" && Type === "create" ? <NewSection /> : null} 
        {Entity !== "users" && Type === "update" ? (
          <UpdateForm Entity={Entity} Id={Id} set={setData} />
        ) : null}
        {Entity === "users" && Type === "update" ? <UpdateUser Id={Id} set={setData} /> : null}
      </Modal.Body>
      <Modal.Footer>
        {Type === "update" ? <Button
          variant="success"
          onClick={(e) =>
            Swal.fire({
              title: "Are you sure?",
              text: "Do you want to edit this?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, edit it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Updated!",
                  text: "",
                  icon: "success",
                  confirmButtonColor: "#0d6efd"
                });
                UpdateData("/" + Entity + "/" + Id, data).then(handleClose);
              }
            })
          }
        >
          Save
        </Button> : null}
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
