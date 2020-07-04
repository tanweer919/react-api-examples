import React from "react";

const FormInput = ({ type, eid, name, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      id={eid}
      name={name}
      className="form-control"
    />
  );
};

export default FormInput;
