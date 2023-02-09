import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deletehandler() {
    setModalIsOpen(true);
  }

  function closeModalHandle() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deletehandler}>
            Delete
          </button>
        </div>
        {modalIsOpen && <Modal onClick={closeModalHandle} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandle} />}
      </div>
    </div>
  );
}

export default Todo;
