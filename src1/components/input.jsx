import React from "react";
const Input = ({
  label,
  inputName,
  value,
  type,
  handleInputField,
  disabled,
  error
}) => {
  //Destructuring the properties of props
  //const { label, inputName, value, type, handleInputField } = props;
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        disabled={disabled}
        //ref={this.username}
        onChange={handleInputField}
      ></input>
      {error && <p className="text-danger small">{error} *</p>}
    </div>
  );
};

export default Input;
