import React from "react";
import Input from "./input";
const Updateemp = props => {
  // const employee={this.employee};
  return (
    <div>
      <form onSubmit={props.updateEmp} className="w-50 mt-5  mx-auto">
        <div className="form-group">
          <Input
            inputName="empId"
            value={props.employee.empId}
            type="number"
            handleInputField={props.handleInputField}
            label="Emp ID"
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empName"
            value={props.employee.empName}
            type="text"
            handleInputField={props.handleInputField}
            label="Emp Name"
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empEmail"
            value={props.employee.empEmail}
            type="email"
            handleInputField={props.handleInputField}
            label="Emp Email"
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empDept"
            value={props.employee.empDept}
            type="text"
            handleInputField={props.handleInputField}
            label="Emp Dept"
          />
        </div>
        <button className="btn btn-block btn-outline-warning btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Updateemp;
