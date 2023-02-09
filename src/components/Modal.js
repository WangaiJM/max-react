function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure you?</p>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
