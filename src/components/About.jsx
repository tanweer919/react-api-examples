import React, { useState } from "react";
import Modal from "./Modal";
const About = () => {
  const [modalVisible, changeModalVisiblity] = useState(false);
  const handleClick = () => {
    changeModalVisiblity(true);
  };

  const handleClose = () => {
    changeModalVisiblity(false);
  };
  return (
    <div className="content" id="about">
      <button className="quote-refresh-button" onClick={handleClick}>
        Open Modal
      </button>
      <Modal visible={modalVisible} onModalClose={handleClose}></Modal>
    </div>
  );
};
export default About;
