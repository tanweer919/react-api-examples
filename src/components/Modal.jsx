import React from "react";
import "./About.css";
const Modal = ({ visible, onModalClose }) => {
  return (
    <div
      id="modal"
      onClick={onModalClose}
      className={visible ? "" : "not-visible"}
    >
      <div className="content"></div>
    </div>
  );
};

export default Modal;
