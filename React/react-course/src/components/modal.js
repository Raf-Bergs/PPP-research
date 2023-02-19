function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  // different ways to do same thing wrapper function and directly in on click
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        confirm
      </button>
    </div>
  );
}

export default Modal;
