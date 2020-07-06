import React from "react";

const FormInput = ({ type, eid, name, handleChange, value }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      id={eid}
      name={name}
      value={value}
      className="form-control"
    />
  );
};

export default FormInput;
