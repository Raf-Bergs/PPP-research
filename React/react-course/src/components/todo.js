import { useState } from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

function Todo(props) {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  function deleteHandler() {
    SetModalIsOpen(true);
  }

  function closeModalHandler() {
    SetModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/* modalIsOpen ? <Modal/> : null is the same*/}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
