import { Modal, Button } from "react-bootstrap";
import Course from "../pages/course";
export default function ModalGen({show, handleClose, CourseData}) {
    return (
        <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Course preview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Course ID={CourseData}></Course>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};